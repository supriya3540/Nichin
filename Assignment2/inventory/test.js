const InventoryRepository = require("./inventoryrepository");

const inventory = new InventoryRepository();

inventory.addProduct("Laptop", 5, 60000);
inventory.addProduct("Mouse", 20, 500);
inventory.addProduct("Keyboard", 10, 1500);

console.log("All products:", inventory.getAllProducts());

inventory.updateProduct(2, { price: 550 });
console.log("After update:", inventory.getAllProducts());

inventory.deleteProduct(1);
console.log("After delete:", inventory.getAllProducts());

console.log("Total inventory value:", inventory.getTotalInventoryValue());
