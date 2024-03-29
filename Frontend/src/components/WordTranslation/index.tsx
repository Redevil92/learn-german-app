import Word from "../../models/Word";
import "./WordTranslation.css";

export default function WordTranslations({
  wordTranslation,
}: {
  wordTranslation: Word;
}) {
  return (
    <>
      {wordTranslation.word_in_detail.split("|").map((word, index) => (
        <div className="flex" key={`word-${index}`}>
          <div className="translation">{word}</div>
          <div className="translation margin-left">
            {wordTranslation.translation.split("|")[index]}
          </div>
        </div>
      ))}
    </>
  );
}
