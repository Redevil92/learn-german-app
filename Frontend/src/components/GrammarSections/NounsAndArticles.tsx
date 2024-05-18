import React from "react";

const NounsAndArticles = () => {
  return (
    <div>
      <h1>German Nouns and Articles</h1>
      <p>
        German nouns have grammatical genders (masculine, feminine, neuter) that
        affect their articles (der, die, das) and adjective endings. Unlike
        English, noun gender is inherent and not always related to the meaning
        of the word. Learning the noun gender along with the noun itself is
        crucial for proper sentence construction.
      </p>
      <h2>Articles</h2>
      <p>There are three main articles in German:</p>
      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Indefinite Article (a/an)</th>
            <th>Definite Article (the)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Masculine</td>
            <td>ein (used before a consonant sound)</td>
            <td>der (the)</td>
          </tr>
          <tr>
            <td>Feminine</td>
            <td>eine (used before a vowel sound)</td>
            <td>die (the)</td>
          </tr>
          <tr>
            <td>Neuter</td>
            <td>ein (used before any sound)</td>
            <td>das (the)</td>
          </tr>
        </tbody>
      </table>
      <h2>Examples</h2>
      <p>Here are some examples of nouns with their articles:</p>
      <ul>
        <li>
          Masculine: der Mann (the man), der Tisch (the table), der Apfel (the
          apple)
        </li>
        <li>
          Feminine: die Frau (the woman), die Blume (the flower), die Tür (the
          door)
        </li>
        <li>
          Neuter: das Kind (the child), das Buch (the book), das Fenster (the
          window)
        </li>
      </ul>
      <h2>Grammatical Gender and Cases</h2>
      <p>
        German nouns are also used in different cases depending on their role in
        the sentence (nominative, accusative, dative, genitive). The article
        endings change based on the case as well. Learning cases is essential
        for forming grammatically correct sentences. Here's a simple example:
      </p>
      <ul>
        <li>
          Nominative (subject): Der Mann **liest** ein Buch (The man reads a
          book).
        </li>
        <li>
          Accusative (object): Ich sehe **den** Mann (I see the man). (der -
          accusative case of 'der')
        </li>
      </ul>
      <h2>Tips for Learning Noun Gender</h2>
      <ul>
        <li>
          Many dictionaries include the noun gender abbreviation (m, f, n) next
          to the noun.
        </li>
        <li>
          There are some general rules for noun gender based on endings (e.g.,
          most words ending in "-e" are feminine, most words ending in "-er" are
          masculine). However, there are many exceptions!
        </li>
        <li>
          Use flashcards or apps to memorize noun genders alongside the nouns.
        </li>
        <li>
          Immerse yourself in German through media and reading materials. Pay
          attention to how articles are used with different nouns.
        </li>
      </ul>
      <p>
        Remember, consistent practice is key to mastering German noun genders
        and articles.
      </p>
    </div>
  );
};

export default NounsAndArticles;
