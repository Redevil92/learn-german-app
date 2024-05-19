import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SelectionMenu from "../../components/SelectionMenu/SelectionMenu";

import "../../css/markdown.css";
import Category from "../../components/SelectionMenu/SelectionMenuCategory";
import SelectionMenuCategory from "../../components/SelectionMenu/SelectionMenuCategory";

export default function GrammarPage() {
  const mdFilePath = "src/germanGrammarFiles/GermanNounsAndArticles.md";
  const [mdFile, setMdFile] = useState<string>("");
  useEffect(() => {
    getFile();
  }, []);

  const [showSelectionMenu, setShowSelectionMenu] = useState<boolean>(true);

  const categories: SelectionMenuCategory[] = [
    {
      title: "Nouns",
      items: ["Nouns and Articles", "Plural Nouns", "Nouns and Cases"],
    },
    {
      title: "Verbs",
      items: ["Regular Verbs", "Irregular Verbs"],
    },
    {
      title: "Adjectives",
      items: ["Adjective Endings", "Comparative and Superlative"],
    },
    {
      title: "Pronouns",
      items: ["Personal Pronouns", "Possessive Pronouns"],
    },
    {
      title: "Prepositions",
      items: ["Prepositions and Cases"],
    },
    {
      title: "Conjunctions",
      items: ["Coordinating Conjunctions", "Subordinating Conjunctions"],
    },
    {
      title: "Word Order",
      items: ["Main Clauses", "Subordinate Clauses"],
    },

    {
      title: "Adjectives",
      items: ["Adjective Endings", "Comparative and Superlative"],
    },
    {
      title: "Pronouns",
      items: ["Personal Pronouns", "Possessive Pronouns"],
    },
    {
      title: "Prepositions",
      items: ["Prepositions and Cases"],
    },
    {
      title: "Conjunctions",
      items: ["Coordinating Conjunctions", "Subordinating Conjunctions"],
    },
    {
      title: "Word Order",
      items: ["Main Clauses", "Subordinate Clauses"],
    },
  ];

  const getFile = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_FRONTEND_BASE_PATH}/${mdFilePath}`
    );
    console.log(`${import.meta.env.VITE_FRONTEND_BASE_PATH}/${mdFilePath}`);
    const data = await response.text();
    console.log(data);
    setMdFile(data);
  };

  return (
    <>
      <div className="flex mt-5">
        <SelectionMenu categories={categories} />

        <div
          className={`markdown-body pl-[40px] pt-[40px] pr-[40px] ${
            showSelectionMenu ? "!ml-[--selection-menu-width]" : ""
          }`}
        >
          <Markdown remarkPlugins={[remarkGfm]}>{mdFile}</Markdown>
        </div>
      </div>
    </>
  );
}
