# Refactor Test Theme

This repository contains a refactored Shopify theme built on the standard Dawn theme. It was developed as part of a Shopify Developer test assignment. The theme includes a custom "Featured Products" section with dynamic product filtering (excluding items already in the cart) and an AJAX-based add-to-cart functionality.

## Requirements

- **Node.js:** 18.20+ or 20.10 or higher
- **Node.js Package Manager:** npm, Yarn 1.x, or pnpm
- **Git:** 2.28.0 or higher

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/refactor-test-theme.git
   cd refactor-test-theme
   ```

2. **Install Dependencies**

   Using Yarn, install all required packages:

   ```bash
   yarn install
   ```

3. **Start the Development Environment**

   The project uses Gulp to compile SCSS files and Shopify CLI to run the theme in development mode. To start both concurrently, run:

   ```bash
   yarn start
   ```

   This command runs two processes simultaneously:

   - gulp watch: Watches SCSS files in the styles folder and compiles them to CSS in the assets folder.
   - shopify theme dev: Starts the Shopify CLI development server for live preview and hot-reloading.

## Project Structure

  - assets/
    - product-item.js - Contains the custom HTML element that renders a product card.
    - add-to-cart-form.js - Contains the logic for adding products to the cart via AJAX and updating the cart.
  - sections/
    - featured-products.liquid - Renders the "Featured Products" section, displaying products from a selected collection while excluding those already in the cart.
  - snippets/
    - product-item-form.liquid - Contains the markup for a product item integrated with the add-to-cart form.
  - styles/
    - SCSS files for custom styling (located in the styles folder).

  Other folders follow the standard Shopify theme structure.

## Gulp Tasks

  - gulp sass: Compiles SCSS files from the styles folder into CSS files in the assets folder.
  - gulp watch: Watches SCSS files for changes and automatically recompiles them.

## Custom Features

  - Featured Products Section:
    Displays a list of products from a selected collection, excluding those already in the cart.

  - Dynamic Product Filtering:
    Uses JavaScript and the Shopify Section Rendering API to update the list of featured products in real-time after adding a product to the cart.

  - Custom Add-to-Cart Form:
    Integrates a custom product-item component within a product-form that handles AJAX-based add-to-cart functionality.

  **Files Implementing "Featured Products" Functionality**
  - sections/featured-products.liquid
  - snippets/product-item-form.liquid
  - assets/product-item.js
  - assets/add-to-cart-form.js

## Deployment

  To deploy your theme to a Shopify store:

  1. Ensure you are logged in to your Shopify store using Shopify CLI.

  2. Push the theme changes with:

    ```bash
    shopify theme push
    ```

  3. Follow the prompts to publish the theme if needed.

## Contributing

  Please ensure that each commit message clearly describes the changes made. For example:

  - "Update product list styles for better alignment and responsiveness"
  - "Fix dynamic filtering of featured products after adding to cart"

## License

  This project is provided for educational purposes as part of the Shopify Developer test assignment.