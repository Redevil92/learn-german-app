import { bestimmteArtikel } from "../../GermanGrammar/Articles";
import "./WordDescription.css";

export default function WordDescription({
  word,
  genre,
}: {
  word: string;
  genre?: string;
}) {
  const genresLookup: { [genre: string]: string } = {
    m: "Substantiv, Maskulin",
    f: "Substantiv, Feminin",
    n: "Substantiv, Neutrum",
    p: "Substantiv, Plural",
    adj: "Adjektiv",
    adv: "Adverb",
  };

  return (
    <>
      <div className="word-description">
        <h2 className="word-description-title">
          <span className={`${bestimmteArtikel[genre ?? ""]}-article`}>
            {bestimmteArtikel[genre ?? ""]}
          </span>{" "}
          {word}
        </h2>
        <div className="genre">{genre && <div>{genresLookup[genre]}</div>}</div>
      </div>
    </>
  );
}
