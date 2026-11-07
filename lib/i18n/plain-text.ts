/** Translation labels are plain text; links and emphasis belong in JSX. */
export function plainTranslationText(value: string): string {
  return value
    .replace(/&(?:amp|nbsp|#(?:x[0-9a-f]+|[0-9]+));/gi, (entity) => {
      if (entity.toLowerCase() === "&amp;") return "&";
      if (entity.toLowerCase() === "&nbsp;") return " ";
      const numeric = entity.slice(2, -1);
      const code = numeric[0].toLowerCase() === "x"
        ? parseInt(numeric.slice(1), 16)
        : parseInt(numeric, 10);
      return code > 0 && code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff)
        ? String.fromCodePoint(code)
        : entity;
    })
    .replace(/\[([^\]]+)\]\(https?:\/\/(?:[^\s()]|\([^)]*\))*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*\*\s*$/, "")
    .replace(/\u00a0/g, " ");
}
