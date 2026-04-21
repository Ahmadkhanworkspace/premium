const fs = require('fs');
const https = require('https');

const enFile = fs.readFileSync('./src/messages/en.json', 'utf8');
const enData = JSON.parse(enFile);

const locales = ['ar', 'cs', 'da', 'de', 'el', 'es', 'fi', 'hu', 'it', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sv', 'tr', 'uk'];

function extractStrings(obj, arr) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      extractStrings(obj[key], arr);
    }
  }
}

function injectStrings(obj, arr, meta) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = arr[meta.index++] || obj[key];
    } else if (typeof obj[key] === 'object') {
      injectStrings(obj[key], arr, meta);
    }
  }
}

async function translateBatch(strings, lang) {
  const text = strings.join(' \n||| \n');
  return new Promise((resolve) => {
    const postData = 'q=' + encodeURIComponent(text);
    const options = {
      hostname: 'translate.googleapis.com',
      path: '/translate_a/single?client=gtx&sl=en&tl=' + lang + '&dt=t',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed && parsed[0]) {
             const resultText = parsed[0].map(s => s[0]).join('');
             const resArr = resultText.split(/\s*\|\|\|\s*/);
             
             if (resArr.length < strings.length * 0.8) {
               console.error('Translation gap for', lang, resArr.length, strings.length);
               resolve(strings);
             } else {
               resolve(resArr);
             }
          } else {
             resolve(strings);
          }
        } catch(e) { console.error("Parse error req", e); resolve(strings); }
      });
    });
    req.on('error', e => {
      console.error(e);
      resolve(strings);
    });
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log('Extracting strings...');
  const allEnStrings = [];
  extractStrings(enData, allEnStrings);
  console.log('Total strings:', allEnStrings.length);
  
  for (const lang of locales) {
    console.log('Translating', lang);
    const translatedArray = await translateBatch(allEnStrings, lang);
    const newData = JSON.parse(JSON.stringify(enData));
    const meta = { index: 0 };
    injectStrings(newData, translatedArray, meta);
    fs.writeFileSync('./src/messages/' + lang + '.json', JSON.stringify(newData, null, 2));
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log('Done translations!');
}
run();
