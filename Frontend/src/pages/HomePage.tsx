import React, { FormEvent, useState } from "react";
import { getTraslations } from "../api/dictionaryApi";
import Word from "../models/Word";
import * as string from "../utils/string";
import { bestimmteArtikel } from "../GermanGrammar/Articles";
import WordTranslations from "../components/WordTranslation";
import { AxiosError } from "axios";

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
    string.getFirstValueInCurlyBrackets(firstResult.word_in_detail);

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

      {firstResult && (
        <div>
          <h2>
            <span>{bestimmteArtikel[wordGenre ?? ""]}</span> {firstResult.word}
          </h2>
          {wordTraslationsItems}
        </div>
      )}
      {wordNotFound && <p>Word not found</p>}
    </>
  );
}
