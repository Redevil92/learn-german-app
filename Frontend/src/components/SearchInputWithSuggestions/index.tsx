import React, { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import {
  getSuggestions,
  getTraslations,
  getTraslationsById,
} from "../../api/dictionaryApi";

import Word from "../../models/Word";

import SearchSuggestion from "./SearchSuggestion";
import BaseIcon from "../Shared/BaseIcon";

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

  const focusInput = () => {
    (inputRef.current as HTMLInputElement)?.focus();
  };

  function handleInputChange(search: string) {
    setSearch(search);

    if (search) {
      getSuggestions(search).then((suggestions) => {
        setSuggestions(suggestions);
      });
      setSelectedWord(undefined);
    } else {
      resetSuggestions();
    }
  }

  const addCharToSearch = (char: string) => {
    handleInputChange(search + char);

    // add the char to the search input
    if (inputRef.current) {
      inputRef.current.value = search + char;
      focusInput();
    }
  };

  const ref = useOutsideClick(resetSuggestions);
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <>
      <form className="relative my-auto mx-0 mt-[40px]" onSubmit={onSubmit}>
        <div
          ref={ref}
          onClick={focusInput}
          className="border border-[#cad3db] w-[--search-input-width_desktop] py-[15px] pr-[20px] bg-white  outline-none shadow-md rounded-3xl"
        >
          <input
            type="text"
            ref={inputRef}
            className="outline-none w-[100%] ml-[1px] pl-[49px] pr-[20px]"
            placeholder="Search a word in German..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(event.target.value)
            }
          />
          <span
            onClick={onSubmit}
            className="material-icons absolute left-[15px] top-[15px] cursor-pointer "
          >
            search
          </span>
          <div className="absolute right-[15px] top-[15px] flex">
            <div>
              <BaseIcon text={"ä"} onClick={() => addCharToSearch("ä")} />
            </div>
            <div className="ml-[5px]">
              <BaseIcon text={"ö"} onClick={() => addCharToSearch("ö")} />
            </div>
            <div className="ml-[5px]">
              <BaseIcon text={"ü"} onClick={() => addCharToSearch("ü")} />
            </div>
          </div>

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
