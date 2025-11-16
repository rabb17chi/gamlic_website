# Theme Color Constants Usage Guide

## Constants Defined
- **Light Theme**: `#fff` (white)
- **Dark Theme**: `#1e1e1e` (dark gray/black)

## CSS Variables Available
- `--color-light`: `#fff`
- `--color-dark`: `#1e1e1e`
- `--color-theme-light`: Registered for Tailwind use
- `--color-theme-dark`: Registered for Tailwind use

## Usage Methods

### Method 1: Using Tailwind Arbitrary Values (Recommended)
```tsx
// Background colors
<div className="bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)]">
  Light mode: white, Dark mode: dark gray
</div>

// Text colors
<h1 className="text-[var(--color-theme-dark)] dark:text-[var(--color-theme-light)]">
  Light mode: dark text, Dark mode: light text
</h1>

// Border colors
<div className="border-[var(--color-theme-dark)] dark:border-[var(--color-theme-light)]">
  Border that adapts to theme
</div>
```

### Method 2: Using CSS Variables Directly in Style Attribute
```tsx
<div style={{ backgroundColor: 'var(--color-theme-light)' }}>
  Direct CSS variable usage
</div>

<div className="dark" style={{ backgroundColor: 'var(--color-theme-dark)' }}>
  Dark mode background
</div>
```

### Method 3: Using CSS Classes in globals.css
```css
/* In globals.css */
.my-theme-bg {
  background-color: var(--color-theme-light);
}

.dark .my-theme-bg {
  background-color: var(--color-theme-dark);
}

.my-theme-text {
  color: var(--color-theme-dark);
}

.dark .my-theme-text {
  color: var(--color-theme-light);
}
```

Then use in JSX:
```tsx
<div className="my-theme-bg my-theme-text">
  Uses custom CSS classes
</div>
```

### Method 4: Using CSS Variables with Tailwind's theme() Function
```tsx
// You can also use them in custom CSS
<div className="custom-bg">
  Content
</div>
```

```css
.custom-bg {
  background-color: var(--color-theme-light);
}

.dark .custom-bg {
  background-color: var(--color-theme-dark);
}
```

## Examples

### Full Page Background
```tsx
<div className="min-h-screen bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)]">
  Page content
</div>
```

### Card Component
```tsx
<div className="bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)] 
                border border-[var(--color-theme-dark)] dark:border-[var(--color-theme-light)]
                text-[var(--color-theme-dark)] dark:text-[var(--color-theme-light)]">
  Card content
</div>
```

### Button with Theme Colors
```tsx
<button className="bg-[var(--color-theme-dark)] text-[var(--color-theme-light)]
                    dark:bg-[var(--color-theme-light)] dark:text-[var(--color-theme-dark)]">
  Themed Button
</button>
```

## Notes
- The constants are defined in `app/globals.css`
- They automatically switch based on the `.dark` class on the `<html>` element
- The theme toggle in the navigation header controls the `.dark` class
- Always use both light and dark variants: `bg-[var(--color-theme-light)] dark:bg-[var(--color-theme-dark)]`

