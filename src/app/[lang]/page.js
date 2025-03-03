import styles from "@/app/[lang]/home.module.css";
import Navbar from "@/components/Navbar";
import { getDict } from "./i18n";

export default async function Home({ params: { lang } }) {
  const locale = await getDict(lang);
  return (
    <>
      <Navbar locale={locale} lang={lang} />

      <main>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>{locale.heroSubtitle}</p>
            <h2>{locale.heroTitle}</h2>
          </div>
        </div>
        <div className={styles.aboutWrapper}>
          <div>
            <h1 style={{ marginBottom: 10 }}>{locale.about}</h1>
            <h2>{locale.aboutHeader}</h2>
            <div className={styles.divider} style={{ marginTop: 20 }}></div>
            <p
              className={styles.about}
              dangerouslySetInnerHTML={{ __html: locale.aboutProject }}
            ></p>
            <p className={styles.about}>{locale.freeUse}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export async function generateMetadata({ params: { lang } }) {
  const locale = await getDict(lang);
  return {
    title: locale.siteName,
    description: `${locale.tagline}.`,
    openGraph: {
      images: [`https://dictionary.tzutujil.org/api/og?lang=${locale._code}`],
    },
  };
}

export const dynamic = "force-dynamic";
