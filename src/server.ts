import express, { Request, Response } from "express";
import { generateFakeProducts } from "./utils/data";
import ProductController from "./controllers/productController";
import ProductService from "./services/ProductService";
import path from "path";
import productsRouter from "./routes/products";

const app = express();

app.use(express.json());

// *** Set views directory and engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// *** Static file
app.use(express.static(path.join(__dirname, "public")));

const fakeProductsData = generateFakeProducts();

const productService = new ProductService(fakeProductsData);
const productController = new ProductController(productService);

// *** Products Routes
app.get("/products", (req: Request, res: Response) => {
  productController.renderProductsList(req, res);
});

app.get("/products/:id", (req: Request, res: Response) => {
  productController.renderProductPage(req, res);
});

app.use("/products", productsRouter);

app.get("/", (_, res: Response) => res.render("index"));
app.get("*", (_, res: Response) => res.render("notFound"));

const PORT: number = 5000;
app.listen(PORT, () => {
  console.log(`Server running at => http://localhost:${PORT}`);
});
