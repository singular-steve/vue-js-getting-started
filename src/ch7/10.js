let p1 = {
  name: 'Smart Phone',
  price: 1000000,
  quantity: 2,
  order: function() {
    if (!this.amount) {
      this.amount = this.quantity * this.price
    }
    console.log('amount = ', this.amount)
  },
  discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.quantity * this.price
    }
    console.log(100 * rate, '% discounted')
  }
}

p1.discount(0.2)
p1.order()