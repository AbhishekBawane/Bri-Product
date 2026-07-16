# BiProduct

BiProduct is a responsive product listing application built using **Next.js**, **React**, **TypeScript**, **Bootstrap 5**, and **Axios**. The application fetches product data from the Fake Store API and displays it in a responsive grid layout with search functionality and dynamic product details.

---

## Features

- Fetch products from the Fake Store API
- Responsive product listing using Bootstrap
- Product cards displaying:
  - Product Image
  - Product Title
  - Product Price
  - Product Category
  - Product Rating
- Client-side search
- Dynamic product details page
- Responsive design for desktop, tablet, and mobile
- TypeScript support
- Reusable React components
- Axios for API requests

---

## Tech Stack

- Next.js
- React.js
- TypeScript
- Bootstrap 5
- Axios
- Fake Store API

---

## API Used

```
https://fakestoreapi.com/products
```

---

## Project Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── DisplayPro.tsx
│   │   └── ...
│   │
│   ├── styles/
│   └── page.tsx
│
├── api/
│   └── api.ts
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/BiProduct.git
```

Navigate to the project directory

```bash
cd BiProduct
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Builds the application for production.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

---

## Screenshots

Add screenshots of the application here.

---

## Assumptions

- Product data is fetched from the Fake Store API.
- Search is performed on the client side.
- Bootstrap is used for responsive layouts.
- Axios is used for all API requests.

---

## Future Improvements

- Product sorting
- Category filters
- Wishlist
- Shopping cart
- Dark mode
- Skeleton loading
- Infinite scrolling

---

### Vercel

    ( https://bri-product.vercel.app/ )
-----

## Author

**Abhishek Bawane**
