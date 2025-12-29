/**
 * Capitalizes a sentence using title-case–like rules.
 *
 * Rules:
 * - Always capitalize the first word
 * - Capitalize words that follow a period (.)
 * - Keep common conjunctions/prepositions lowercase
 * - Normalize casing for all words
 *
 * @param value - Input string to be capitalized
 * @returns Formatted string with proper capitalization
 */
export const capitalizeSentence = (value: string): string => {
  if (!value) return "";

  const lowercaseWords = [
    "an",
    "a",
    "the",
    "of",
    "and",
    "but",
    "for",
    "nor",
    "or",
    "so",
    "yet",
    "in",
    "on",
    "at",
    "to",
    "by",
    "with",
  ];

  const words = value.split(" ");

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      const isFirstWord = index === 0;
      const followsSentenceEnd = words[index - 1]?.endsWith(".");

      // Capitalize first word or words following a sentence break
      if (isFirstWord || followsSentenceEnd) {
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }

      // Keep conjunctions and prepositions lowercase
      if (lowercaseWords.includes(lower)) {
        return lower;
      }

      // Capitalize all other words
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
};

/**
 * Extracts and formats the first character of a string.
 *
 * @param text - Input string
 * @param textCase - Desired case for the first character
 *   - "UPPER": uppercase (default)
 *   - "LOWER": lowercase
 *   - "DEFAULT": unchanged
 * @returns First character formatted as requested, or an empty string
 */
export const getFirstCharacter = (
  text?: string,
  textCase: "UPPER" | "LOWER" | "DEFAULT" = "UPPER"
): string => {
  if (!text) return "";

  const firstChar = text.charAt(0);

  switch (textCase) {
    case "UPPER":
      return firstChar.toUpperCase();
    case "LOWER":
      return firstChar.toLowerCase();
    default:
      return firstChar;
  }
};
