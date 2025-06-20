# E-Commerce React App

A modern, responsive e-commerce web application built with React and React Router. This project demonstrates a full-featured online store with product listings, authentication, and a clean, user-friendly interface.

## Features

- Browse products by category (Men, Women, Kids)
- Product detail and buy pages
- Add to cart and favorite functionality (UI)
- User authentication (login/signup UI)
- Store locator page
- Responsive design for mobile and desktop
- Lazy loading for performance
- Modular, component-based architecture

## Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) (with custom CSS)
- [Vite](https://vitejs.dev/) for fast development

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd E-Commerce
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

```
E-Commerce/
  ├── public/                # Static assets
  ├── src/
  │   ├── App.jsx           # Main app component
  │   ├── main.jsx          # Entry point, router setup
  │   ├── Home/             # Home, About, NavBar, Footer, etc.
  │   ├── Landing/          # Landing page and sections
  │   ├── ProductsPage/     # Product listing, buy page, product data
  │   ├── StoresPage/       # Store locator
  │   ├── LoginPage/        # Login and signup UI
  │   └── assets/           # Images and SVGs
  ├── package.json
  ├── tailwind.config.js
  └── README.md
```

## Usage
- Browse products and view details
- Add products to cart or favorites (UI only)
- Login or sign up to access more features
- Find store locations

## Customization
- Update product data in `src/ProductsPage/ProductsList/ProductsList.json`
- Add new pages or components as needed
- Customize styles in CSS or Tailwind config

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is for educational/demo purposes.
