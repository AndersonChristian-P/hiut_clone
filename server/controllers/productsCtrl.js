module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get("db")
    const { sex } = req.params
    try {
      if (sex === "mens") {
        const data = await db.getMensProducts()
        res.status(200).send(data)
      } else if (sex === "womens") {
        const data = await db.getWomensProducts()
        res.status(200).send(data)
      }
    } catch (err) {
      res.sendStatus(404)
    }
  },

  getMenProduct: async (req, res) => {
    const db = req.app.get("db")
    const { productId: id } = req.params
    try {
      const data = await db.getMenProduct({ id })
      res.status(200).send(data)
    } catch (err) {
      res.sendStatus(404)
    }
  },

  getWomenProduct: async (req, res) => {
    const db = req.app.get("db")
    const { productId: id } = req.params
    try {
      const data = await db.getWomenProduct({ id })
      res.status(200).send(data)
    } catch (err) {
      res.sendStatus(404)
    }
  }
}