class OrderRepository {
  constructor() {
    this.orders = [];
    this.idCounter = 1;
    this.allowedStatus = ["pending", "shipped", "delivered"];
  }

  createOrder(items) {
    const order = {
      id: this.idCounter++,
      items,
      status: "pending"
    };
    this.orders.push(order);
    return order;
  }

  getAllOrders() {
    return this.orders;
  }

  getOrderById(id) {
    return this.orders.find(o => o.id === id) || null;
  }

  updateOrder(id, data) {
    const order = this.getOrderById(id);
    if (!order) return null;

    if (data.items !== undefined) order.items = data.items;
    if (data.status !== undefined) order.status = data.status;

    return order;
  }

  deleteOrder(id) {
    const index = this.orders.findIndex(o => o.id === id);
    if (index === -1) return false;

    this.orders.splice(index, 1);
    return true;
  }

  updateStatus(id, newStatus) {
    const order = this.getOrderById(id);
    if (!order) return null;

    const currentIndex = this.allowedStatus.indexOf(order.status);
    const newIndex = this.allowedStatus.indexOf(newStatus);

    if (newIndex === -1 || newIndex !== currentIndex + 1) {
      throw new Error(`Invalid status transition from ${order.status} to ${newStatus}`);
    }

    order.status = newStatus;
    return order;
  }
}

module.exports = OrderRepository;
