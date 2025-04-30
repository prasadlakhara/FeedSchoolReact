# 🥗 School Lunch Ordering System

A modern, modular, and customizable **School Lunch Ordering System** built with **React + Vite + SCSS**. Designed to bridge the gap between **parents, schools, restaurants, and administrators**, this system simplifies the entire lunch ordering process while ensuring flexibility, usability, and scalability.

---

## 🚀 Tech Stack

- ⚛️ **React** – Declarative, component-based UI
- ⚡ **Vite** – Ultra-fast development server & build tool
- 🎨 **SCSS** – Theming, variables, and clean modular styles
- 🧩 **Custom Icon Fonts** – Optimized for performance and easy customization

---

## 🎯 Core Features

### 👨‍👩‍👧‍👦 Parent Panel
- Weekly meal planning for multiple children
- Class-wise menu selection
- Order summary & invoice download
- Live order tracking

### 🏫 School Dashboard
- View/manage menu availability by class
- Coordinate with registered restaurants
- Student & classroom linkage

### 🍽️ Restaurant Dashboard
- Order acceptance and preparation tracking
- Menu management per school
- Delivery confirmation flow

### 🧑‍💼 Admin & Area Manager
- Role-based access and user management
- Menu, pricing, and vendor control
- System analytics and regional overview

### 🧰 Support Team Portal
- Handle raised tickets and meal-related queries
- Communication panel for issue resolution

---

## 🧱 Project Structure

```bash
school-lunch-ordering-system/
├── public/
│   └── assets/
│       ├── fonts/
│       └── hero-bg-elements/
│           └── img/
│       ├── react.svg
│       └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── hero-bg-elements/img/
│   ├── component/
│   │   ├── common/
│   │   └── landingPageComponent/
│   ├── layout/               # Shared layout components (Header, Sidebar, etc.)
│   ├── router/               # Centralized routing logic
│   ├── scss/                 # SCSS modules, variables, themes
│   ├── utils/                # Helper functions
│   ├── App.jsx
│   ├── App.scss
│   ├── index.scss
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
