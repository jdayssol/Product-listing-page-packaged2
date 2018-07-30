window.cartService = {
  cart: [],
  addToCart (show) {
    this.cart.push(show)
  },
  findCart (id) {
    return this.cart.findIndex(it => it.id === id)
  },
  removeFromCart (id) {
    let favoriteIndex = this.findCart(id)
    this.cart.splice(favoriteIndex, 1)
  },
  isFavorite (id) {
    return this.findCart(id) !== -1
  }
}
