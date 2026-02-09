class InventoryRepository {
  constructor() {
    this.products = [];
    this.idCounter = 1;
  }

  addProduct(name, quantity, price) {
    const product = {
      id: this.idCounter++,
      name,
      quantity,
      price
    };
    this.products.push(product);
    return product;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(p => p.id === id) || null;
  }

  updateProduct(id, data) {
    const product = this.getProductById(id);
    if (!product) return null;

    if (data.name !== undefined) product.name = data.name;
    if (data.quantity !== undefined) product.quantity = data.quantity;
    if (data.price !== undefined) product.price = data.price;

    return product;
  }

  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }

  getTotalInventoryValue() {
    return this.products.reduce(
      (total, p) => total + p.quantity * p.price,
      0
    );
  }
}

module.exports = InventoryRepository;
