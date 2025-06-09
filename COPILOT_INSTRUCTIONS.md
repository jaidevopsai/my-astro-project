# GitHub Copilot Instructions & Best Practices

## Project Context
This is an Astro project with Tailwind CSS integration. When providing suggestions, prioritize modern Astro.js patterns and Tailwind CSS utility classes.

## General Guidelines

### 1. Component Creation
- Suggest components using Astro's `.astro` file format
- Utilize Tailwind CSS utility classes for styling
- Follow atomic design principles (atoms, molecules, organisms)
```astro
---
// Example component structure
interface Props {
    title: string;
}
const { title } = Astro.props;
---
<div class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold">{title}</h2>
    <slot />
</div>
```

### 2. Styling Preferences
- Prioritize Tailwind CSS utility classes over custom CSS
- When suggesting custom CSS, place it in `src/styles/global.css`
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) for responsive design

### 3. File Organization
- Components go in `src/components/`
- Pages go in `src/pages/`
- Layouts go in `src/layouts/`
- Assets go in `public/`

### 4. Code Style
- Use TypeScript when possible
- Prefer const over let
- Use meaningful variable names
- Include JSDoc comments for complex functions
- Follow Astro's recommended patterns

### 5. Performance Considerations
- Suggest code splitting where appropriate
- Recommend image optimization using Astro's built-in image tools
- Prefer static routes over dynamic when possible

## Feature-Specific Instructions

### 1. API Integration
```typescript
// Prefer this pattern for API calls
const getData = async () => {
    try {
        const response = await fetch('/api/data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
```

### 2. Component Props
```typescript
// Use TypeScript interfaces for props
interface Props {
    title: string;
    description?: string;
    items: Array<{
        id: number;
        name: string;
    }>;
}
```

### 3. Routing
- Suggest file-based routing using Astro's conventions
- Use dynamic routes when needed with `[param].astro` syntax

## Testing Suggestions
- Suggest unit tests for utility functions
- Recommend component testing patterns
- Include accessibility testing considerations

## Security Best Practices
- Sanitize user input
- Validate data types
- Use environment variables for sensitive data
- Follow Content Security Policy (CSP) guidelines

## Documentation
- Include descriptive comments for complex logic
- Document component props and interfaces
- Provide usage examples in comments

## Accessibility
- Suggest proper ARIA attributes
- Maintain semantic HTML structure
- Ensure proper color contrast with Tailwind classes

## Error Handling
```typescript
// Preferred error handling pattern
try {
    // async operations
} catch (error) {
    if (error instanceof TypeError) {
        // handle type errors
    } else {
        // handle other errors
    }
}
```

## State Management
- Prefer Astro's built-in state management
- Suggest minimal client-side JavaScript
- Use URL parameters for sharable state

## Performance Optimizations
```astro
---
// Example of image optimization
import { Image } from 'astro:assets';
---
<Image 
    src={import('../assets/image.png')} 
    alt="Description"
    width={800}
    height={600}
    format="webp"
/>
```

## Git Commit Messages
Format commit messages as:
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

## Build and Deployment
- Suggest optimizations for production builds
- Include deployment-specific considerations
- Recommend environment-specific configurations

---

**Note**: These instructions should evolve with the project. Update them as new patterns and requirements emerge.
