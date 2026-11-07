# Week 09 React App

A small React application built with Next.js 16 using the App Router. The home page demonstrates reusable components, passing data with props, and interactive counters using both React function-component state and class-component state.

## Requirements

- Node.js and npm

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The development server refreshes the page as files are changed.

Other available commands:

```bash
npm run build  # Create a production build
npm run start  # Run the production build (run build first)
npm run lint   # Check the project with ESLint
```

## What the app demonstrates

The root route (`/`) is rendered by `src/app/page.js`. It displays:

1. A page heading.
2. Student information, rendered by the `Student` component.
3. College information, rendered by the `College` component with an object passed as a prop.
4. A function-component counter using the `useState` hook.
5. A class-component counter using `this.state` and `this.setState`.

### Component files

- `src/app/page.js` — Home page and composition point for the example components. It creates the `collegeDetails` object and passes it to `College`.
- `src/app/student.js` — Displays a student's name and age. Its buttons demonstrate browser event handlers: one writes to the console and one displays an alert.
- `src/app/college.jsx` — Displays the college name, location, and year established from the `collegeDetails` prop.
- `src/app/counter.jsx` — A counter implemented as a function component with React's `useState` hook.
- `src/app/counterclasscomponent.jsx` — The same counter behavior implemented as a class component with React state.
- `src/app/layout.js` — Shared root layout, document metadata, and font setup for the App Router.
- `src/app/globals.css` — Global styles and Tailwind CSS import.

## JSX component naming: the error and fix

React component names should begin with an uppercase letter (PascalCase), and JSX uses that capitalization to distinguish components from built-in HTML tags.

The incorrect form was:

```jsx
import student from "./student";

export default function Home() {
  return <student />;
}
```

Because `student` starts with a lowercase letter, JSX treats `<student />` as an HTML/custom element rather than the imported React component. As a result, the `Student` component does not render as intended.

Import the component with an uppercase identifier and use that same identifier as the JSX tag:

```jsx
import Student from "./student";

export default function Home() {
  return <Student />;
}
```

The default export in `student.js` is the component; the filename may remain lowercase. The important part is that the identifier used as a component in JSX starts with an uppercase letter. Apply the same convention to other components, such as `<College />` and `<Counter />`.

## Next.js and styling notes

- The project uses the Next.js App Router. Files under `src/app` define routes and shared app layout.
- Components that use event handlers or React state are marked with `'use client'` so they can run in the browser. The student buttons and both counters need this directive; the page and layout can remain server components.
- The project uses Tailwind CSS 4 and the Geist fonts configured in the root layout.
- The root layout currently supplies the default Next.js metadata title and description.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [React documentation](https://react.dev/learn)
