class Store {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.stock = {};
    this.prices = {};
    this.totalSales = 0;
  }

  isItemAvailable(name) {
    var itemIndex = this.items.indexOf(name);
    if (itemIndex == -1) {
      return false;
    } else {
      return true;
    }
  }

  getPrice(name) {
    var isAvailable = this.isItemAvailable(name);
    if (isAvailable == true) {
      var price = this.prices[name];
      return price;
    } else {
      console.log("Sorry we do not have", name);
    }
  }

  getTotalSale() {
    return this.totalSales;
  }

  sellItem(name, quantity) {
    var available = this.stock[name];
    if (available < quantity) {
      console.log("Sorry we do not have enough...");
    } else {
      var itemPrice = this.getPrice(name);
      var currentSale = itemPrice * quantity;
      this.totalSales = this.totalSales + currentSale;
      var remaining = available - quantity;
      this.stock[name] = remaining;
      console.log("Thanks for your purchase...");
    }
  }

  addItem(name, quantity, price) {
    var isExisting = this.isItemAvailable(name);
    if (isExisting == true) {
      var available = this.stock[name];
      this.stock[name] = available + quantity;
    } else {
      this.items.push(name);
      this.prices[name] = price;
      this.stock[name] = quantity;
    }
  }
}

var store1 = new Store("Digital Store");
store1.addItem("kola", 40, 10);
store1.addItem("dim", 100, 60);

store1.getPrice("kolaa");
store1.getPrice("dimm");
console.log(store1.getPrice("kola"));
console.log(store1.getPrice("dim"));

store1.sellItem("kola", 30);
store1.sellItem("dim", 30);
console.log(store1.getTotalSale());
