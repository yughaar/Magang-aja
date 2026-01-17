export function formatDate(
  dateString: string,
  locale: "id-ID" | "en-US" = "id-ID"
): string {
  return new Date(dateString).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
