import { useEffect, useState } from "react";

import * as string from "../../utils/string";
import WordTranslations from "../../components/SearchResult/WordTranslation";
import WordDescription from "../../components/SearchResult/WordDescription";
import BaseTabs from "../Shared/BaseTabs";

import Verb from "../../models/Verb";
import { GenreEnum } from "../../models/GenreEnum";
import Word from "../../models/Word";
import { Tab } from "../Shared/BaseTabs/Tab";

import VerbKonjugation from "./VerbKonjugation";
import { getVerb } from "../../api/verbsApi";

export default function SearchResult(props: { words: Word[] }) {
  const verbTabs: Tab[] = [
    {
      textToDisplay: "Übersetzung",
      id: "Übersetzung",
      materialIcon: "translate",
      selected: true,
      disabled: false,
    },
    {
      textToDisplay: "Konjugation",
      id: "Konjugation",
      materialIcon: "abc",
      selected: false,
      disabled: false,
    },
  ];

  const firstResult = props.words && props.words[0];

  const [verb, setVerb] = useState<Verb>();

  useEffect(() => {
    getVerb(firstResult?.word).then((result) => {
      setVerb(result);
    });
  }, [firstResult]);

  useEffect(() => {
    onTabSelect(verbTabs.find((tab) => tab.id === "Übersetzung") as Tab);
  }, [props.words]);

  const [tabs, setTabs] = useState<Tab[]>(verbTabs);

  const tabSelectedId = tabs.find((tab) => tab.selected)?.id;

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
    setTabs([...verbTabs]);
  };

  return (
    <>
      {firstResult && (
        <div>
          <WordDescription
            genre={wordGenre}
            word={firstResult.word}
          ></WordDescription>

          {wordGenre === GenreEnum.Verb ||
          wordGenre === GenreEnum.VerbIntransitiv ? (
            <div className="mb-5">
              <BaseTabs tabs={tabs} onTabSelect={onTabSelect}></BaseTabs>
            </div>
          ) : null}

          {tabSelectedId === "Konjugation"
            ? verb && <VerbKonjugation verb={verb} />
            : wordTraslationsItems}
        </div>
      )}
    </>
  );
}
