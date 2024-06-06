import BaseIcon from "../../Shared/BaseIcon";
import Word from "../../../models/Word";
import "./WordTranslation.css";

export default function WordTranslations({
  wordTranslation,
}: {
  wordTranslation: Word;
}) {
  return (
    // .word-traslated {
    //   color: var(--font-color_light);
    // }

    // .word-item {
    //   margin-top: 10px;
    //   font-size: var(--medium-font-size);
    // }

    <>
      {wordTranslation.word_in_detail.split("|").map((word, index) => (
        <div key={`word-${index}`} className="mt-[10px] text-base">
          <div className="text-[--font-color_light]">{word}</div>
          <div className="my-0 mx-[auto] flex">
            <span className="material-icons justify-items-start w-[25px]">
              arrow_right_bottom
            </span>
            {wordTranslation.translation.split("|")[index]}
          </div>

          <hr />
        </div>
      ))}
    </>
  );
}
