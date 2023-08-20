# ShopSavvy App

## Introduction

Welcome to ShopSavvy, Its a simple webapp that provides users with a convenient platform to manage their shopping cart and make informed purchasing decisions. The app enables users to view their cart, adjust quantities, remove items, and proceed to checkout, while also offering a cart summary with the total amount.

###### Technology Stack

- [Ionic React](https://ionicframework.com/): Ionic React enables the creation of a dynamic and user-friendly interface, aligning perfectly with the mobile-oriented approach.
- [Redux Toolkit](https://redux-toolkit.js.org/): Redux toolkit simplifies the complexities of Redux, making the management of global states an intuitive and manageable process.
- [Tailwind CSS](https://tailwindcss.com/): For easy visually appealing responsive designs.
- [TypeScript](https://www.typescriptlang.org/): To enhance code redability.
- [React Toast](): Is integrated to display toast notifications for user interactions.

## API

- [FakeApi](https://fakestoreapi.com/docs)

---

# Feature Implementations

### Product Page Implementation

- Product were efficiently fetched displayed and persisted on LocalStorage using the fetch method.
- Used Redux state management to manage products fetching.

### Search Feature Implementation

The search feature filters and return the existing product pool based on search keywords.

- Filtered Display: From the products present in the Redux state, the search filters the products array from search keywords present in the product title.
- Used Redux state management to manage products fetching.

### Add to Cart Feature Implementation

The "Add to Cart" functionality allows users to manage their selected products, ensuring a dynamic and user-friendly shopping experience.

- Add to Cart Logic: Each product component on display has an "Add to Cart" button, when clicked, it identifies the product's unique ID and scans the cart array within the cartSlice. If the product already exists in the cart, the add-to-cart reducer increments the quantity of that specific item within the array.
- Quantity Addition and Removal: Beyond adding products, the functionality extends to quantity adjustments and removals. The decrement reducer handles quantity reduction for items with a specific ID, while the remove reducer orchestrates the removal of an entire product from the cart array.

---

## Challenges and Solutions

- Responsive Layout: Creating a responsive layout that works well on both small and large screens required careful consideration of design and CSS. Tailwind CSS classes were leveraged to achieve the desired responsive behavior.
- The main challenge in the "Add to Cart" feature striking a balance between existing product management and adding new items to the cart. This was resolved by the logic that dynamically managed both scenarios - incrementing existing items' quantities and fetching new items when required.
- The Search Feature implementation was relatively straightforward, given the presence of product data in the Redux state. The primary challenge was designing an intuitive user interface that seamlessly presented filtered products. This was resolved through thoughtful UI design and intuitive communication of the search query.

## Improvements

Given more time, here are some improvements that will be considered:

- User Authentication: Implement user authentication and user-specific carts to provide a personalized shopping experience.
- Refined UI/UX: Enhance the user interface with better visuals and animations to make the shopping experience more engaging.
- Testing: Implement unit tests and end-to-end tests using libraries like Jest and React Testing Library to ensure code reliability and robustness.
- Optimization: Optimize performance through code splitting, creating more reusable components and lazy loading to ensure fast loading times.

---

## How to Run

### Prerequisites

Before you start, make sure you have the following installed on your system:

- **Node.js**: Visit the official Node.js website [here](https://nodejs.org/) and download the LTS version suitable for your operating system. Node.js comes with npm (Node Package Manager) which is required for managing dependencies.

- **Ionic CLI**: Install the Ionic CLI globally on your system using the following command:

  ```bash
  npm install -g @ionic/cl
  ```

### Running the Application

1. Clone the Repository: Start by cloning this repository to your local machine using Git:ode Package Manager) which is required for managing dependencies.

```bash
git clone https://github.com/samuelawal/vella-junior-test
```

2. Navigate to the Project Directory: Move into the cloned project directory and install dependencies.

```bash
cd vella-junior-test && npm install
```

3. Run the Development Server: Launch the Ionic development server to see the app in action:

```bash
ionic serve
```
