import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    type:'success',
    data:'Hello From Products'
  })
})

app.listen(6002, ()=> {
  console.log("Products server is running on Port Number: 6002")
})