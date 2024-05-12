import Word from "../../models/Word";

interface SearchSuggestionProps {
  suggestion: Word;
  selected: boolean;
  onSuggestionSelected: (suggestion: Word) => void;
}

export default function SearchSuggestion(props: SearchSuggestionProps) {
  return (
    <>
      <div
        onClick={() => props.onSuggestionSelected(props.suggestion)}
        className="p-2 pl-0 hover:bg-slate-100 rounded-r-3xl"
      >
        {props.suggestion.word}
      </div>
    </>
  );
}
