# Mini PC Online Shop

> A responsive React application showcasing a collection of space-saving **Mini PCs** with product filtering, a responsive slider, and a contact form powered by Formspree.

---

## Features

- **Responsive Navigation Bar** with hamburger menu for mobile devices.
- **Product Catalog** with category filters (Slim, Nano, AIO, Cube, IPC, All).
- **Image Slider** fetching images dynamically from [Unsplash API](https://unsplash.com/developers).
- **Contact Form** integrated with [Formspree](https://formspree.io/) for email submissions.
- **About Page** with collapsible company description.
- **Footer with Social Links** (LinkedIn, Instagram, GitHub).
- **Responsive Design** built with a mobile-first approach.

---

## Technologies Used

- [React](https://reactjs.org/) (Hooks: `useState`, `useEffect`, `useContext`)
- [React Router](https://reactrouter.com/) for page routing
- [Formspree](https://formspree.io/) for contact form handling
- [Unsplash API](https://unsplash.com/developers) for slider images
- CSS Modules / Custom CSS for styling
- PropTypes for component prop validation

---

## Project Structure
```
src/
│
├── App.js # Main App component with Router & Navigation
├── Home.js # Home page with product filters and shop
├── About.js # About page with slider and show more/less text
├── Contact.js # Contact page with Formspree form
├── Shop.js # Displays product cards
├── Buttons.js # Filter buttons
│
├── Components/ # Slider and controls
│ ├── Slider.js
│ ├── SlidesList.js
│ ├── Controls/
│ │ ├── Arrows.js
│ │ ├── Dots.js
│ │ └── Dot.js
│ └── style.css
│
├── data.js # Product data
└── App.css # Global styles
```

## Configuration

Unsplash API Access Key:
Replace ACCESS_KEY in imagesAPI.js with your own Unsplash API key.

Formspree Form ID:
Replace "xoqbadde" in Contact.js with your own Formspree form ID.


## Responsive Design

Mobile-first layout

Hamburger menu for navigation on smaller screens

Responsive grid for product cards

Slider supports swipe gestures on touch devices


## Screenshots


	


## Contributing

Fork the repo

Create your feature branch: git checkout -b feature/my-feature

Commit changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature/my-feature

Open a Pull Request

## License

This project is for demonstration purposes.
All images, prices, and information are for demo only.

**Created by Elena B**


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
