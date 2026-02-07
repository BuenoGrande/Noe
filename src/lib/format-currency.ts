/**
 * Format integer cents to a EUR currency string.
 * e.g. 285000 → "€2,850.00"
 */
export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
