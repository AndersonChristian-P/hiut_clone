module.exports = {
  addToCart: async (req, res) => {
    const { idText: id } = req.params
    const { size, quantity, img1, prod_title, price } = req.body
    const { cart } = req.session

    const index = await cart.findIndex(prod => prod.id === id)

    if (index === -1) {
      const newItem = { id, size, quantity, img1, prod_title, price }
      req.session.total += price
      req.session.cart.push(newItem)
    } else if (index > -1) {
      const sizeInCart = cart[index].size
      if (sizeInCart !== size) {
        const newItem = { id, size, quantity, img1, prod_title, price }
        req.session.total += price
        req.session.cart.push(newItem)
      } else {
        cart[index].quantity++
        req.session.total += price
      }
    }
    req.session.save()
    console.log("-- THIS IS THE SESSION --", req.session)
    res.sendStatus(200)
  },

  getCart: async (req, res) => {
    const { cart } = req.session
    try {
      let returnCart = await cart
      if (returnCart) {
        res.status(200).send(returnCart)
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(404)
    }
  }
}





// let returnCart = await cart
//     console.log("--- THIS IS WHAT THE CART LOOKS LIKE ---", returnCart)
//     res.status(200).send(returnCart)


// if (index === -1) {
//   const newItem = {
//     id, size, quantity, img1, prod_title, price
//   }

//   const newCart = req.session.cart.slice()

//   newCart.push(newItem)

//   req.session.cart = newCart

// } else {
//   cart[index].quantity++
// }

// res.sendStatus(200)
// req.session.save()
// since we are not calling res.send the session is not saved, so you have to call req.session.save()