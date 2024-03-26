export function getFirstValueInCurlyBrackets(str: string): string | undefined {
  const regex = /\{([^\}]*)\}/;
  const match = regex.exec(str);

  if (match) {
    return match[1];
  }

  return;
}
