import { bestimmteArtikel } from "../../../germanGrammar/Articles";
import { genresLookup } from "../../../germanGrammar/Genres";
import "./WordDescription.css";

export default function WordDescription({
  word,
  genre,
}: {
  word: string;
  genre?: string;
}) {
  //   const isWordSaved = useSavedWordsStore((state: any) =>
  //     state.savedWords.map((word:Word)=> word.word).includes(word)
  //   );

  return (
    <>
      <div className="mb-[20px">
        <div className="flex justify-between items-baseline">
          <h2 className="mb-[0px] text-3xl font-bold">
            <span className={`${genre}-article `}>
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
