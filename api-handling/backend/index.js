import express from 'express'

const app = express()


app.get('/api/products', (req, res) => {
      const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 150
        },
        {
            id: 2,
            name: 'table metal',
            price: 160
        },
        {
            id: 3,
            name: 'table gold',
            price: 170
        },
        {
            id: 4,
            name: 'table silver',
            price: 180
        },
        {
            id: 5,
            name: 'table wooden',
            price: 190
        },
        {
            id: 6,
            name: 'table metal',
            price: 200
        },
      ]

      // http://localhost:3000/api/products?search=metal

      if(req.query.search){
       const filterProducts = products.filter(product => product.name.includes(req.query.search))
       res.send(filterProducts)
       return;
      }

      setTimeout(() => {
         res.send(products)
      }, 3000)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})