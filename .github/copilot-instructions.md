# Gx-wong-reume-app Copilot Instructions

This document provides guidance for AI coding agents to effectively contribute to the gx-wong-reume-app codebase.

## Architecture and Conventions

The application is a single-page React application built with TypeScript and Vite. It features a modern, responsive design with a focus on user experience.

### Key Directories

-   `components/`: Contains reusable UI components.
-   `contexts/`: Holds React context providers for state management.
-   `lib/`: Includes utility functions and helper modules.

### State Management

The application uses React's Context API for managing global state, such as the current language. The `LanguageContext` in `contexts/LanguageContext.tsx` provides language-specific content throughout the application.

### Styling

Styling is handled using a combination of CSS modules and utility-first CSS frameworks. Key UI components can be found in `components/ui/`.

## Development Workflow

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

### Building for Production

To create a production build, run:

```bash
npm run build
```

### Linting and Formatting

The project uses ESLint and Prettier for code quality and consistency. To lint the codebase, run:

```bash
npm run lint
```

## Code Examples

### Using the Language Context

To access language-specific content, use the `useLanguage` hook:

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
	const { language, translations } = useLanguage();
	const content = translations[language];

	return <div>{content.myText}</div>;
};
```

### Creating a New Component

When creating a new component, follow the existing structure in the `components/` directory. For example, a new `Button` component would be placed in `components/ui/button.tsx`.
