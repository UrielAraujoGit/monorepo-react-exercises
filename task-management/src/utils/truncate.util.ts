export const truncate = (text: string, size: number) => {
  if (!text || !text.trim()) {
    return "";
  }

  if (text.length - 3 <= size) {
    return text;
  }

  return `${text.slice(0, size)}...`;
};
