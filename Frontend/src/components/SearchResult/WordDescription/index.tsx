import { bestimmteArtikel } from "../../../GermanGrammar/Articles";
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
    pl: "Substantiv, Plural",
    adj: "Adjektiv",
    adv: "Adverb",
    v: "Verb",
    vi: "Verb, intransitiv",
  };

  //   const isWordSaved = useSavedWordsStore((state: any) =>
  //     state.savedWords.map((word:Word)=> word.word).includes(word)
  //   );

  return (
    <>
      <div className="word-description">
        <div className="flex">
          <h2 className="word-description-title text-3xl font-bold">
            <span className={`${bestimmteArtikel[genre ?? ""]}-article `}>
              {bestimmteArtikel[genre ?? ""]}
            </span>{" "}
            {word}
          </h2>
          <span className="material-icons">star_outline</span>
        </div>

        <div className="italic">
          {genre && <div>{genresLookup[genre]}</div>}
        </div>
      </div>
    </>
  );
}
