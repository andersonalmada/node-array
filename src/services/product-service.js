class ProductService {
  constructor() {
    this.products = [];
    this.id = 0;
  }

  add(product) {
    this.id++;
    product.id = this.id;
    this.products.push(product);
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find((product) => product.id == id);
  }

  update(id, product) {
    this.products.forEach(function (e) {
      if (id && id == e.id) {
        for (var i in product) {
          e[i] = product[i];
        }
      }
    });
  }

  delete(id) {
    this.products = this.products.filter(function (el) {
      return el.id != id;
    });
  }
}

module.exports = ProductService;
