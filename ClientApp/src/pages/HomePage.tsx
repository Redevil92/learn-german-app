import React, { useState } from "react";

export default function Form() {
  const [search, setSearch] = useState<string>("");

  async function handleSearch(e: React.FormEvent) {}

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <h2>Search a German word</h2>
      <p>Search a German word to get its article and its English translation</p>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearch}>Submit</button>
    </>
  );
}
