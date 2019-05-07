module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get("db")
    const { sex } = req.params
    console.log("THIS IS THE SEX", sex)
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

  }
}