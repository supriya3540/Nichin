const OrderRepository = require("./orderRepository");

const orders = new OrderRepository();

const o1 = orders.createOrder([
  { name: "Laptop", qty: 1 },
  { name: "Mouse", qty: 2 }
]);

console.log("All orders:", orders.getAllOrders());

orders.updateStatus(o1.id, "shipped");
console.log("After shipped:", orders.getOrderById(o1.id));

orders.updateStatus(o1.id, "delivered");
console.log("After delivered:", orders.getOrderById(o1.id));

try {
  orders.updateStatus(o1.id, "pending");
} catch (e) {
  console.log("Error:", e.message);
}
