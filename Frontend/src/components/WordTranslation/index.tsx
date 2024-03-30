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
        <div key={`word-${index}`} className="word-item">
          <div className="translation">
            {wordTranslation.translation.split("|")[index]}
          </div>
          <div className="word-traslated">{word}</div>

          <hr />
        </div>
      ))}
    </>
  );
}
