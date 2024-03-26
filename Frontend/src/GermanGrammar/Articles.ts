export const bestimmteArtikel: { [genre: string]: string } = {
  m: "der",
  f: "die",
  n: "das",
  p: "die",
};

export const getBestimmteArtikel = (genre: string) => {
  return bestimmteArtikel[genre];
};
