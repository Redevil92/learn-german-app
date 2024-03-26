import React, { FormEvent, useState } from "react";
import { getTraslations } from "../api/dictionaryApi";
import Word from "../models/Word";
import * as string from "../utils/string";
import { bestimmteArtikel } from "../GermanGrammar/Articles";
import WordTranslations from "../components/WordTranslation";

export default function HomePage() {
  const [search, setSearch] = useState<string>("");
  const [words, setWords] = useState<Word[]>();

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const result = await getTraslations(search);
    setWords(result);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const firstResult = words && words[0];

  const wordTraslations =
    firstResult && words.filter((word) => word.word === firstResult.word);

  const wordGenre =
    firstResult &&
    string.getFirstValueInCurlyBrackets(firstResult.word_in_detail);

  const genreToArticle = (string: string) => {
    switch (string) {
      case "m":
        return "Der";
      case "f":
        return "Die";
      case "n":
        return "Das";
      default:
        return "";
    }
  };

  const wordTraslationsItems = wordTraslations?.map((word, index) => (
    <WordTranslations key={index} wordTranslation={word} />
  ));

  return (
    <>
      <h2>Search a German word</h2>
      <p>Search a German word to get its article and its English translation</p>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      WORDS: {wordTraslations?.length}
      {firstResult && (
        <div>
          <h3>
            {bestimmteArtikel[wordGenre ?? ""]} {firstResult.word}
          </h3>
          {wordTraslationsItems}
        </div>
      )}
    </>
  );
}
