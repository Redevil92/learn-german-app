import Word from "../../models/Word";
import "./wordTranslation.css";

export default function WordTranslations({
  wordTranslation,
}: {
  wordTranslation: Word;
}) {
  return (
    <>
      <div className="flex">
        <div className="translation">
          {wordTranslation.word_in_detail.split("|").map((word) => (
            <p>{word}</p>
          ))}
        </div>
        <div className="translation">
          {wordTranslation.translation.split("|").map((translation) => (
            <p>{translation}</p>
          ))}
        </div>
      </div>
    </>
  );
}
