import React, { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { getSuggestions, getTraslations } from "../../api/dictionaryApi";

import Word from "../../models/Word";
import SearchResult from "../../components/SearchResult/SearchResult";

import logo from "@/assets/logo/logo.svg";
import "./HomePage.css";
import SearchSuggestion from "../../components/SearchInputWithSuggestions/SearchSuggestion";

import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function HomePage() {
  const [search, setSearch] = useState<string>("");
  const [words, setWords] = useState<Word[]>();
  const [wordNotFound, setWordNotFound] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Word[]>();
  const [selectedWord, setSelectedWord] = useState<Word>();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    handleSearch(selectedWord ? selectedWord.word : search);
  };

  const handleSearch = async (toSearch: string) => {
    try {
      const result = await getTraslations(toSearch);
      setWords(result);
      setWordNotFound(false);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        setWords(undefined);
        setWordNotFound(true);
      }
    }
    resetSuggestions();
  };

  const resetSuggestions = () => {
    setSuggestions([]);
    setSelectedWord(undefined);
  };

  const suggestionSelectedHandler = (word: Word) => {
    handleSearch(word.word);
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
      <div className="content-home-page">
        <img src={logo} className="home-page-logo" alt="Logo" />
        <form className="search-word-form" onSubmit={onSubmit}>
          <div ref={ref} className="search-word-input rounded-3xl">
            <input
              type="text"
              className="outline-none w-[100%]"
              placeholder="Search a word in German..."
              onChange={handleInputChange}
            />
            <span className="material-icons search-icon">search</span>

            {suggestions && suggestions.length > 0 && (
              <div className="mt-4">
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
        <div className="words-list-container">
          {words && (
            <div className="words-list px-5">
              <SearchResult words={words} />
            </div>
          )}
          {wordNotFound && <p>Word not found</p>}
        </div>
      </div>
    </>
  );
}
