// server.cjs
const jsonServer = require('json-server');
const multer  = require('multer')

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     let date = new Date();
     let imageFilename = date.getTime() + "_" + file.originalname;
     req.body.imageFilename  = imageFilename
    cb(null, imageFilename)
  }
})
const bodyParser = multer({ storage: storage }).any()

 // To handle POST ,PUT ,PATCH and DELETE you need to use a body-parser
 // You can use the one used by JSON Server
 server.use(bodyParser);
 server.post("/products" , (req,res,next) =>{
   let date = new Date();
   req.body.createAt = date.toISOString();
   if(req.body.price){
    req.body.price = Number(req.body.price)
   }

    let hasErrors = false
    let errors = {};
    if(req.body.name.length < 2){
       hasErrors = true;
       errors.name = "The name length should be at least 2 characters"
    }
    if(req.body.brand.length < 2){
       hasErrors = true;
       errors.brand = "The Brand length should be at least 2 characters"
    }
    if(req.body.category.length < 2){
       hasErrors = true;
       errors.category = "The Category length should be at least 2 characters"
    }
    if(req.body.price <= 0){
       hasErrors = true;
       errors.price = "Price is not valid "
    }
    if(req.body.description.length < 10){
       hasErrors = true;
       errors.price = "The Produt description length should be at least 10 characters"
    }
  next();

 }
)

server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running ...');
});
