import { GenreEnum } from "../../models/GenreEnum";
import Word from "../../models/Word";
import * as string from "../../utils/string";

interface SearchSuggestionProps {
  suggestion: Word;
  selected: boolean;
  onSuggestionSelected: (suggestion: Word) => void;
}

export default function SearchSuggestion(props: SearchSuggestionProps) {
  const wordGenre = string.getFirstValueInCurlyBrackets(
    props.suggestion.word_in_detail
  ) as GenreEnum;

  const wordGenreDisplay =
    wordGenre === "n"
      ? "das"
      : wordGenre === "m"
      ? "der"
      : wordGenre === "f"
      ? "die"
      : wordGenre === "pl"
      ? "die"
      : wordGenre;

  return (
    <>
      <div
        onClick={() => props.onSuggestionSelected(props.suggestion)}
        className="p-2 pl-[15px] hover:bg-slate-100 rounded-r-3xl flex items-center justify-start"
      >
        <div
          className={`left-[15px]  text-xs font-extrabold w-[35px] text-ellipsis overflow-hidden ${wordGenre}-article `}
        >
          {wordGenreDisplay}
        </div>
        <div>{props.suggestion.word}</div>
      </div>
    </>
  );
}
