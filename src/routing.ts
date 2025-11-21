export const routing = {
  // A list of all locales that are supported
  locales: ['en', 'zh'],

  // Used when no locale matches
  defaultLocale: 'zh',
  
  // Don't show the default locale in the pathname
  localePrefix: 'as-needed',
  
  // Disable automatic locale detection based on browser settings
  // This prevents redirecting to /en when user manually navigates to /
  localeDetection: false
} as const;

