# Monorepo ReactJS exercises - Tablero de Kanban


This is a Kanban board project developed with **React**, **TypeScript**, and **Vite**. It aims to provide a simple and intuitive interface for managing tasks in a visual, column-based environment.

## Features

- **Add Boards**: Create new boards for different projects or workspaces.
- **Add Statuses (Columns)**: Define workflow stages on a board (e.g. "To Do", "In Progress", "Done").
- **Task Management**: Create, move, and delete tasks within a board.
- **Modular Design**: Reusable and scalable components.
- **Modern Style**: Use custom CSS or libraries like Tailwind CSS (optional).
- **Local Persistence** (optional): Save data in the browser using Local Storage.

---

## Content

- [Setup](#setup)
- [Usage](#usage)
- [Technologies used](#technologies)
- [Upcoming improvements](#upcoming)
- [Setup](#setup)



<h2 id="setup">Setup</h2>

The following steps are needed to run any project:

- Downlaod the repo

```console
npm install
```

Then run this command at the desired project

```console
npm run dev
```

---

<h2 id="usage">Usage</h2>

**Create a new board** 
1. Click the "Add Board" button.
2. Enter the name of the new board in the drop-down window.
3. Click "Add."

**Add statuses (columns)**

- Each board can have multiple columns representing workflow statuses.
- Columns can be customized and reordered.

**Add and manage tasks**

- Click the "Add Task" button inside a column.
- Enter the description and assign labels (optional /  future upgrade).
- Drag and drop tasks between columns to move them (optional /  future upgrade).

---

<h2 id="technologies">Technologies used</h2>

- **React**: Core library for the user interface.
- **TypeScript**: Static typing to improve code quality.
- **Vite**: Rapid build tool for development.
- **CSS Modules or Tailwind CSS** (optional): Styling.

---

<h2 id="upcoming">Upcoming improvements</h2>

- Authentication for users.
- Data persistence in a backend (REST API or GraphQL).
- Notifications or reminders.
- Customizable themes (light/dark mode).