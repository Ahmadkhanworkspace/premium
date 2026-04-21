const fs = require('fs');
const path = require('path');

const locales = ['fr', 'de', 'es', 'it', 'pt', 'nl', 'pl', 'ro', 'sv', 'da', 'fi', 'no', 'cs', 'hu', 'el', 'tr', 'uk', 'ru', 'ar'];
const source = path.join(__dirname, 'src', 'messages', 'en.json');

locales.forEach(locale => {
    const target = path.join(__dirname, 'src', 'messages', `${locale}.json`);
    fs.copyFileSync(source, target);
});

console.log('Locales generated successfully!');
