import express, { Request, Response } from "express";
import { generateFakeProducts } from "./utils/data";
import ProductController from "./controllers/productController";
import ProductService from "./services/ProductService";
import path from "path";
import productsRouter from "./routes/products";
import ProductsViewController from "./controllers/productViewController";

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
const productsViewController = new ProductsViewController(productService);

// *** Products Routes
app.get("/products", productsViewController.renderProductsList);

app.get("/products/:id", productsViewController.renderProductPage);

app.use("/api/products", productsRouter);

app.get("/", (_, res: Response) => res.render("index"));
app.get("*", (_, res: Response) => res.render("notFound"));

const PORT: number = 5000;
app.listen(PORT, () => {
  console.log(`Server running at => http://localhost:${PORT}`);
});
