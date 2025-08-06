# AI Development Rules

This document provides guidelines for the AI assistant to follow when developing and modifying this application.

## Tech Stack

This is a React application built with Vite. The key technologies used are:

-   **Framework**: React for building the user interface.
-   **Build Tool**: Vite for fast development and optimized builds.
-   **Routing**: React Router (`react-router-dom`) for client-side navigation.
-   **Styling**: Tailwind CSS for all styling, configured in `tailwind.config.js`.
-   **Animations**: Framer Motion for smooth and declarative UI animations.
-   **Data Visualization**: D3.js for creating custom charts and graphs.
-   **Icons**: React Icons for a comprehensive set of SVG icons.
-   **Markdown**: React Markdown and React Syntax Highlighter for rendering blog posts and component documentation.
-   **HTTP Requests**: Axios for making API calls.

## Library Usage Rules

To maintain consistency and code quality, please adhere to the following rules:

-   **Routing**:
    -   Always use `react-router-dom` for navigation.
    -   Define all top-level routes within `src/App.jsx`.
    -   Use `<Link>` for internal navigation and `<a>` tags for external links.

-   **Styling**:
    -   Use **Tailwind CSS classes exclusively** for styling. Avoid writing custom CSS in `.css` files.
    -   Utilize the color palette and theme defined in `tailwind.config.js` (`primary`, `secondary`, `textPrimary`, `textSecondary`).

-   **State Management**:
    -   For local component state, use the `useState` hook.
    -   For state that needs to be shared across multiple components, use React's Context API.
    -   Do not introduce complex state management libraries like Redux or Zustand unless absolutely necessary and requested by the user.

-   **Animations**:
    -   Use `framer-motion` for all UI animations, transitions, and gestures.

-   **Icons**:
    -   Use the `react-icons` library for all icons. This keeps the icon style consistent.

-   **Data Fetching**:
    -   Use `axios` for all external API requests.

-   **Charts & Visualization**:
    -   For any data visualization needs, such as charts or graphs, use the `d3` library.

-   **Component Structure**:
    -   Place reusable UI components in `src/components/`.
    -   Place page-level components in `src/pages/`.
    -   Keep components small, focused, and reusable. Create new files for new components.

-   **Data**:
    -   Static data, like project details or blog posts, should be stored in the `src/data/` directory.