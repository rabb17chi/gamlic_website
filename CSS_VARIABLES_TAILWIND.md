# Using CSS Variables with Tailwind CSS

## Your CSS Variables
- `--color-light`: `#fff`
- `--color-dark`: `#1e1e1e`
- `--color-theme-light`: Registered for Tailwind
- `--color-theme-dark`: Registered for Tailwind

## Method 1: Arbitrary Values (Most Common)
```tsx
// Background
<div className="bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)]">

// Text
<h1 className="text-[var(--color-theme-dark)] dark:text-[var(--color-theme-light)]">

// Border
<div className="border-[var(--color-theme-dark)] dark:border-[var(--color-theme-light)]">
```

## Method 2: Tailwind v4 Shorthand (Recommended)
```tsx
// Background - shorter syntax
<div className="bg-(--color-theme-light) dark:bg-(--color-theme-dark)">

// Text
<h1 className="text-(--color-theme-dark) dark:text-(--color-theme-light)">

// Border
<div className="border-(--color-theme-dark) dark:border-(--color-theme-light)">
```

## Method 3: Direct Variable Names (If Registered in Theme)
Since you registered them in `@theme inline`, you might be able to use:
```tsx
// This depends on how Tailwind v4 processes @theme
<div className="bg-theme-light dark:bg-theme-dark">
```

## Examples in Your Code

### Replace Hardcoded Colors
```tsx
// ❌ Before
className="text-[#1e1e1e] dark:text-white"

// ✅ After - Using CSS variables
className="text-[var(--color-theme-dark)] dark:text-[var(--color-theme-light)]"
// Or shorter:
className="text-(--color-theme-dark) dark:text-(--color-theme-light)"
```

### Background Colors
```tsx
// ❌ Before
className="bg-white dark:bg-zinc-900"

// ✅ After
className="bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)]"
// Or:
className="bg-(--color-theme-light) dark:bg-(--color-theme-dark)"
```

### Border Colors
```tsx
// ❌ Before
className="border-black dark:border-white"

// ✅ After
className="border-[var(--color-theme-dark)] dark:border-[var(--color-theme-light)]"
// Or:
className="border-(--color-theme-dark) dark:border-(--color-theme-light)"
```

## Complete Example
```tsx
<div className="bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)]
                text-[var(--color-theme-dark)] dark:text-[var(--color-theme-light)]
                border border-[var(--color-theme-dark)] dark:border-[var(--color-theme-light)]">
  Content
</div>
```

## Notes
- The `bg-[var(--variable)]` syntax works in all Tailwind versions
- The `bg-(--variable)` shorthand is Tailwind v4 specific (cleaner)
- Always provide both light and dark variants
- CSS variables update automatically when theme changes

