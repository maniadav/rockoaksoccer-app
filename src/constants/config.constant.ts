// types/APIFilters.ts

// Country codes (ISO 3166-1 alpha-3)
export enum CountryFilter {
  INDIA = "IND",
  UNITED_STATES = "USA",
  UNITED_KINGDOM = "GBR",
  CANADA = "CAN",
  AUSTRALIA = "AUS",
  // Add more country codes as needed
}

// Language codes (ISO 639-1)
export enum LanguageFilter {
  ENGLISH = "EN",
  HINDI = "HI",
  SPANISH = "ES",
  FRENCH = "FR",
  GERMAN = "DE",
  // Add more language codes as needed
}

// Optional: Union type if you prefer string literals
export type CountryFilterType = "IND" | "USA" | "GBR" | "CAN" | "AUS";
export type LanguageFilterType = "EN" | "HI" | "ES" | "FR" | "DE";
