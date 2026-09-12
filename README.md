# Dev Stack

A modern technology stack explorer that helps developers compare, evaluate, and build the perfect technology stack for their next software project.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Features

- Explore and compare different technologies with their category, difficulty, rating, and description.
- Add technologies to your personal stack and remove them individually or all at once.
- Get instant toast notifications when adding or removing technologies from your stack.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe how the UI should look, making components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a React component store and update data. In this project, I used it in the `ExploreSection` to store the selected technologies and update the stack when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to run side effects in a React component, such as fetching data. In this project, I did not use `useEffect` to load the JSON data. Instead, I used a Promise with React's `use()` and `Suspense` to load the technology data and show a loading state.

### 5. Why does every item in a `.map()` need a unique `key`?

React uses the `key` to identify each item in a list. A unique `key` helps React understand which items have changed, been added, or removed, so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place where you used it in your project.

Conditional rendering means showing different UI elements based on a condition. In this project, I used it to show a message when no technologies are selected and a Remove All button when the stack has technologies.

### 7. How do you pass data from a parent component to a child component, and how can a child component send something back to the parent?

A parent component can pass data to a child component using props. A child component can send data or trigger an action in the parent by receiving a callback function as a prop.

In this project, `ExploreSection` passes the technology data, selected technologies, and `addToStack` function to `TechCard`. When the user clicks the Add to Stack button, `TechCard` calls the `addToStack` function, which updates the state in `ExploreSection`.