import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { locales } from "@/navigation";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  
  let targetLocale = "en";
  for (const locale of locales) {
    if (acceptLanguage.toLowerCase().includes(locale.toLowerCase())) {
      targetLocale = locale;
      break;
    }
  }

  // Execute native server-side redirect to the negotiated localized folder
  redirect(`/${targetLocale}`);
}
