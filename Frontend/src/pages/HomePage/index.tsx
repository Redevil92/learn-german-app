import React, { FormEvent, useState } from "react";
import { getTraslations } from "../../api/dictionaryApi";
import Word from "../../models/Word";
import * as string from "../../utils/string";
import { bestimmteArtikel } from "../../GermanGrammar/Articles";
import WordTranslations from "../../components/WordTranslation";
import "./HomePage.css";
import { AxiosError } from "axios";
import logo from "@/assets/logo/logo.svg";
import { GenreEnum } from "../../models/GenreEnum";
import WordDescription from "../../components/WordDescription";

export default function HomePage() {
  const [search, setSearch] = useState<string>("");
  const [words, setWords] = useState<Word[]>();
  const [wordNotFound, setWordNotFound] = useState<boolean>(false);

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
  }

  const firstResult = words && words[0];

  const wordTraslations =
    firstResult && words.filter((word) => word.word === firstResult.word);

  const wordGenre =
    firstResult &&
    (string.getFirstValueInCurlyBrackets(
      firstResult.word_in_detail
    ) as GenreEnum);

  const wordTraslationsItems = wordTraslations?.map((word, index) => (
    <WordTranslations key={index} wordTranslation={word} />
  ));

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
        </form>
        <div className="words-list-container">
          {firstResult && (
            <div className="words-list">
              <WordDescription
                genre={wordGenre}
                word={firstResult.word}
              ></WordDescription>

              {wordTraslationsItems}
            </div>
          )}
          {wordNotFound && <p>Word not found</p>}
        </div>
      </div>
    </>
  );
}
