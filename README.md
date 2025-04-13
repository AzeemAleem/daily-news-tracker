# NY Times Most Popular Articles App

This is a simple React app that fetches and displays the most viewed articles from the New York Times.

Features
- ✅ Fetches and displays the most popular articles
- ✅ Master/detail view with article detail page
- ✅ Built using React with Redux Toolkit
- ✅ Responsive UI using Ant Design components
- ✅ Robust error handling for failed API calls
- ✅ UI testing with Cypress
- ✅ Static analysis via ESLint and Prettier
- ✅ SonarQube report for code quality

## 📦 Tech Stack

- React 18
- Redux Toolkit
- React Router DOM
- Ant Design
- Cypress
- ESLint + Prettier
- SonarQube

First, install the node modules:
yarn install

Second, run the development server:
yarn start

Folder Structure:
├── src/
│   ├── api/              # API integration
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components (Home, Detail)
│   ├── redux/            # Redux Toolkit setup
│   └── App.js
├── cypress/              # Cypress E2E tests
├── public/
└── README.md
