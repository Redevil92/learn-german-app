import { useState } from "react";

import Word from "../../models/Word";
import SearchResult from "../../components/SearchResult/SearchResult";

import logo from "@/assets/logo/logo.svg";
import "./HomePage.css";
import SearchInputWithSuggestions from "../../components/SearchInputWithSuggestions";

export default function HomePage() {
  const [words, setWords] = useState<Word[]>();
  const [wordNotFound, setWordNotFound] = useState<boolean>(false);

  return (
    <>
      <div className="content-home-page">
        <img src={logo} className="home-page-logo" alt="Logo" />
        <div className="h-[120px]">
          <div>
            <SearchInputWithSuggestions
              onSetWordNotFound={setWordNotFound}
              onSetWords={setWords}
            />
          </div>
        </div>

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
