import React, { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { getSuggestions, getTraslations } from "../../api/dictionaryApi";

import Word from "../../models/Word";
import SearchResult from "../../components/SearchResult/SearchResult";

import logo from "@/assets/logo/logo.svg";
import "./HomePage.css";

export default function HomePage() {
  const [search, setSearch] = useState<string>("");
  const [words, setWords] = useState<Word[]>();
  const [wordNotFound, setWordNotFound] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Word[]>();

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const result = await getTraslations(search);
      setWords(result);
      setWordNotFound(false);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        setWords(undefined);
        setWordNotFound(true);
      }
    }
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    if (e.target.value) {
      getSuggestions(e.target.value).then((suggestions) => {
        setSuggestions(suggestions);
      });
    } else {
      setSuggestions([]);
    }
  }

  return (
    <>
      <div className="content-home-page">
        <img src={logo} className="home-page-logo" alt="Logo" />
        <form className="search-word-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-word-input"
            placeholder="Search a word in German..."
            onChange={handleInputChange}
          />
          <span className="material-icons search-icon">search</span>
          <div>
            {suggestions &&
              suggestions.map((suggestion) => <div>{suggestion.word}</div>)}
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
