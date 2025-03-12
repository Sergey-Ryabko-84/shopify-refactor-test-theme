class ProductItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    const price = this.getAttribute('price');

    this.innerHTML = `
      <div class="product-item">
        <img class="product-item__image" src="${image}" alt="${title}" />
        <h3 class="product-item__title">${title}</h3>
        <button class="product-item__submit_button" type="submit">
          Add to cart - ${price}
        </button>
      </div>
    `;
  }
}

customElements.define('product-item', ProductItem);
