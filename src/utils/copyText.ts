export const copyText = (text: string) => navigator?.clipboard?.writeText(text)
  .then(() => console.log("Text copied successfully"))
  .catch((err) => console.error("Failed to copy text:", err))