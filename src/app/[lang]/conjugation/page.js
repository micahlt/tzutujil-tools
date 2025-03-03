"use server";
import ConjugationClient from "./conjugationClient";
import { getDict } from "../i18n";

export default async function Conjugation({ params: { lang } }) {
  const locale = await getDict(lang);
  return (
    <>
      <ConjugationClient locale={locale} />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: `Conjugation | Tz'utujil.org Tools`,
    description: `Conjugate Tz'utujil verbs online.`,
    openGraph: {
      images: [`https://dictionary.tzutujil.org/api/og?word=Conjugation`],
    },
  };
}
