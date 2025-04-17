# Monsters Rolodex Project

This project, "Monsters Rolodex," is a web application created as part of the Zero to Mastery (ZTM) curriculum. It demonstrates fundamental React concepts by building a dynamic list of "monsters" that can be filtered by name.

## Project Description

The application displays a collection of monster cards, each featuring an image and a name.  A search bar allows users to type and filter the monster list in real-time, showing only the monsters whose names match the search input.

## Technologies Used

* **React:** The project is built using React, a JavaScript library for building user interfaces.
* **JavaScript:** The core logic of the application is implemented in JavaScript.
* **CSS:** Styling is used to enhance the visual presentation of the application.
* **Vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Core Concepts Demonstrated

This project reinforces several important React concepts, including:

* **Component-Based Architecture:** The UI is broken down into reusable components (`App`, `CardList`, `Card`, and `SearchBox`), demonstrating how to build UIs by composing independent parts.
* **State Management:** The application uses React's `useState` hook to manage the application's data, specifically the list of monsters and the search query.  Changes to the search query state trigger a re-render, filtering the displayed monster cards.
* **Props:** Components communicate with each other by passing data via props.  For example, the `App` component passes the filtered monster list to the `CardList` component, and the `CardList` component passes individual monster data to the `Card` component.
* **Event Handling:** The `SearchBox` component uses an `onChange` event handler to capture user input and update the search query state.
* **JSX:** The project uses JSX to define the structure of the UI in a declarative way, mixing HTML-like syntax with JavaScript.
* **Fetching Data:** The application fetches monster data from an external API (`https://jsonplaceholder.typicode.com/users`), demonstrating how to integrate data from a server.
* **Controlled Components:** The `SearchBox` is a controlled component, where the input's value is controlled by React state.
* **Array Methods:** The project utilizes JavaScript array methods like `filter()` to manipulate and display data.

## Key Takeaways

* This project provides a practical introduction to building interactive web applications with React.
* It emphasizes the importance of managing state effectively to create dynamic and responsive user interfaces.
* It demonstrates how to fetch data from an API and display it in a structured format.
* It showcases how to create reusable components that can be composed to build complex UIs.

## Project Structure

The project structure typically includes the following:

* `src/components`: Contains the reusable React components.
    * `Card.jsx`: Displays individual monster information.
    * `CardList.jsx`: Displays a list of monster cards.
    * `SearchBox.jsx`: Provides the search input field.
    * `App.jsx`: The main application component that orchestrates the data fetching, state management, and component rendering.
* `public`: Contains static assets.
* `index.html`: The main HTML file.

