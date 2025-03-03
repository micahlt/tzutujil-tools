"use client";
import { ArrowLeft } from "react-feather";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Tzutujil from "tzii.js";
import { useEffect, useState } from "react";

export default function Conjugation({ locale }) {
  const [table, setTable] = useState(null);
  useEffect(() => {
    console.log(table)
  }, [table])

  const conjugate = (w) => {
    const word = new Tzutujil.Verb(w);
    const conjugator = new Tzutujil.Conjugator(word);
    setTable(conjugator.conjugateAll("object"));
  }

  return (
    <>
      <Navbar locale={locale} />
      <main className={styles.main}>
        <Link href="/" className={styles.goBack}>
          <ArrowLeft size={24}></ArrowLeft> {locale.goHome}
        </Link>
        <div>
          <h1 style={{ marginBottom: 10 }}>{locale.conjugation}</h1>
          <div className={styles.divider}></div>
          <input
            type="search"
            placeholder={locale.wordToConjugate}
            className={styles.input}
            onKeyUp={(e) => {
              if (e.key == "Enter") conjugate(e.target.value);
            }}
          ></input>
          {!!table ? <div className={styles.tables}>
            {Object.keys(table).map((tense) => (
              <div key={tense}>
                <table style={{ marginBottom: 30 }}>
                  <thead>
                    <tr>
                      <th className={styles.tense}>{tense} {tense != "infinitive" ? "tense" : ""}</th>
                      {tense != "infinitive" && <>
                        <th>Singular</th>
                        <th>Plural</th>
                      </>}
                    </tr>
                  </thead>
                  <tbody>
                    {["first person", "second person", "third person"].map((person) => (
                      <tr key={person}>
                        {tense != "infinitive" && <th>{person.replace("first", "1st").replace("second", "2nd").replace("third", "3rd")}</th>}
                        {tense != "infinitive" && <td>{table[tense]["singular"][person]}</td>}
                        {tense != "infinitive" && <td>{table[tense]["plural"][person]}</td>}
                      </tr>
                    ))}
                    {tense === "infinitive" && <tr>
                      <td colSpan={2}>{table["infinitive"]}</td>
                    </tr>}
                  </tbody>
                </table>
              </div>
            ))}
          </div> : <div className={styles.tutorial}>
            <p>To get started, type the verb you want to conjugate and press the enter key on your keyboard.</p>
          </div>}
          <p className={styles.disclaimer}>These results may be inaccurate as we do not account for irregular verbs.</p>
        </div>
      </main>
    </>
  );
}
