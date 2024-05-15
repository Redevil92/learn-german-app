import React, { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import {
  getSuggestions,
  getTraslations,
  getTraslationsById,
} from "../../api/dictionaryApi";

import Word from "../../models/Word";

import SearchSuggestion from "./SearchSuggestion";

import { useOutsideClick } from "../../hooks/useOutsideClick";

interface SearchInputWithSuggestionsProps {
  onSetWords: (words: Word[]) => void;
  onSetWordNotFound: (notFound: boolean) => void;
}

export default function SearchInputWithSuggestions(
  props: SearchInputWithSuggestionsProps
) {
  const [search, setSearch] = useState<string>("");

  const [suggestions, setSuggestions] = useState<Word[]>();
  const [selectedWord, setSelectedWord] = useState<Word>();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    handleSearch(selectedWord ? selectedWord.word : search);
  };

  const handleSearch = async (toSearch: string, wordId?: number) => {
    try {
      let result: Word[] = [];
      if (wordId) {
        result = await getTraslationsById(wordId);
      } else {
        result = await getTraslations(toSearch);
      }

      props.onSetWords(result);
      props.onSetWordNotFound(false);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        props.onSetWords([]);
        props.onSetWordNotFound(true);
      }
    }
    resetSuggestions();
  };

  const resetSuggestions = () => {
    setSuggestions([]);
    setSelectedWord(undefined);
  };

  const suggestionSelectedHandler = (word: Word) => {
    handleSearch(word.word, word.id);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);

    if (e.target.value) {
      getSuggestions(e.target.value).then((suggestions) => {
        setSuggestions(suggestions);
      });
      setSelectedWord(undefined);
    } else {
      resetSuggestions();
    }
  }

  const ref = useOutsideClick(resetSuggestions);

  return (
    <>
      <form className="relative my-auto mx-0 mt-[40px]" onSubmit={onSubmit}>
        <div
          ref={ref}
          className="border border-[#cad3db] w-[--search-input-width_desktop] py-[15px] pr-[20px] bg-white  outline-none shadow-md rounded-3xl"
        >
          <input
            type="text"
            className="outline-none w-[100%] ml-[1px] pl-[49px] pr-[20px]"
            placeholder="Search a word in German..."
            onChange={handleInputChange}
          />
          <span
            onClick={onSubmit}
            className="material-icons absolute left-[15px] top-[15px] cursor-pointer "
          >
            search
          </span>

          {suggestions && suggestions.length > 0 && (
            <div className="mt-4 ">
              <hr />
              {suggestions.map((suggestion) => (
                <SearchSuggestion
                  key={"suggestion-" + suggestion.id}
                  suggestion={suggestion}
                  selected={false}
                  onSuggestionSelected={suggestionSelectedHandler}
                />
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
