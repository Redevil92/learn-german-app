import Word from "../../models/Word";
import { bestimmteArtikel } from "../../GermanGrammar/Articles";

export default function WordTranslations({
  wordTranslation,
}: {
  wordTranslation: Word;
}) {
  return (
    <>
      <div className="flex">
        <div className="tra">
          {wordTranslation.word_in_detail.split("|").map((word) => (
            <p>{word}</p>
          ))}
        </div>
        <div>
          {wordTranslation.translation.split("|").map((translation) => (
            <p>{translation}</p>
          ))}
        </div>
      </div>
    </>
  );
}
