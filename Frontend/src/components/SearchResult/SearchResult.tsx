import Word from "../../models/Word";
import * as string from "../../utils/string";
import WordTranslations from "../../components/SearchResult/WordTranslation";
import { GenreEnum } from "../../models/GenreEnum";
import WordDescription from "../../components/SearchResult/WordDescription";
import { Tab } from "../Shared/BaseTabs/Tab";
import BaseTabs from "../Shared/BaseTabs";
import { useState } from "react";

export default function SearchResult(props: { words: Word[] }) {
  const [tabSelected, setTabSelected] = useState<string>("Übersetzung");

  const firstResult = props.words && props.words[0];

  const wordTraslations =
    firstResult && props.words.filter((word) => word.word === firstResult.word);

  const wordGenre =
    firstResult &&
    (string.getFirstValueInCurlyBrackets(
      firstResult.word_in_detail
    ) as GenreEnum);

  const wordTraslationsItems = wordTraslations?.map((word, index) => (
    <WordTranslations key={index} wordTranslation={word} />
  ));

  const onTabSelect = (tabSelected: Tab) => {
    verbTabs.forEach((tab) => {
      if (tab.id === tabSelected.id) {
        tab.selected = true;
      } else {
        tab.selected = false;
      }
    });
  };

  const verbTabs: Tab[] = [
    {
      textToDisplay: "Übersetzung",
      id: "Übersetzung",
      materialIcon: "play_arrow",
      selected: true,
      disabled: false,
    },
    {
      textToDisplay: "Konjugation",
      id: "Konjugation",
      materialIcon: "play_arrow",
      selected: false,
      disabled: false,
    },
  ];

  return (
    <>
      {firstResult && (
        <div>
          <WordDescription
            genre={wordGenre}
            word={firstResult.word}
          ></WordDescription>

          {wordGenre === GenreEnum.Verb ? (
            <BaseTabs tabs={verbTabs} onTabSelect={onTabSelect}></BaseTabs>
          ) : null}
          {wordTraslationsItems}
        </div>
      )}
    </>
  );
}
