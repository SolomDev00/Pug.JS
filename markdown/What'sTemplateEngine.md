### **What is a Template Engine?**

A `Template Engine` is a tool used in web development to display dynamic data on the user interface. It acts as a bridge between the data (Model) and the presentation (View), converting data into HTML that can be rendered in the browser.

In the **Express.js** framework, **Pug.js** or **EJS** can be used as a **Template Engine** to create dynamic user interfaces.

---

### **How Does a Template Engine Work with Express.js?**

When using **Pug.js** or **EJS** in **Express.js**, the work is divided into three main parts:

1. **Model:**

   - Represents the core data of the application.
   - For example, if you have a product application, you might have a `Product` model containing properties like name, price, and description.
   - Data is usually retrieved from a database or an external source.

2. **View:**

   - Created using **Pug.js** or **EJS**.
   - **Pug.js** uses a concise syntax based on indentation, while **EJS** uses a syntax similar to HTML with special tags for embedding data.
   - For example, in **Pug.js**, you can display a list of products using a loop (`each`) to pass data from the model to the view.

3. **Controller:**
   - Acts as an intermediary between the model and the view.
   - Receives user requests (e.g., requesting a specific product page), retrieves data from the model, and passes it to the view for rendering.
   - In **Express.js**, this is typically done within **Route Handlers**.

---

### **Example Using Pug.js:**

#### 1. Project Setup:

- Install **Express** and **Pug.js**:
  ```bash
  npm install express pug
  ```

#### 2. Configure Express to Use Pug:

```javascript
const express = require("express");
const app = express();

// Set Pug as the Template Engine
app.set("view engine", "pug");
app.set("views", "./views"); // The views folder contains Pug files

// Define a Route to Display Products
app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
  ];
  res.render("products", { products }); // Pass data to the view
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

#### 3. Create a `products.pug` File in the `views` Folder:

```pug
doctype html
html
    head
        title Product List
    body
        h1 Products
        ul
            each product in products
                li= product.name + ' - $' + product.price
```

---

### **Advantages of Using a Template Engine:**

1. **Improved Maintainability:**

   - Separating data (Model) from presentation (View) makes the code more organized and easier to modify.

2. **Easier Testing:**

   - Each component (Model, View, Controller) can be tested independently.

3. **Reusability:**

   - Templates can be reused across different parts of the application.

4. **Support for Dynamic Data:**
   - Dynamic data can be easily displayed using tools like **Pug.js** or **EJS**.

---

### **Comparison Between Pug.js and EJS:**

| Feature        | Pug.js                                 | EJS                          |
| -------------- | -------------------------------------- | ---------------------------- |
| Syntax         | Indentation-based                      | HTML-like with special tags  |
| Learning Curve | Takes time to adapt to syntax          | Easier for beginners         |
| Performance    | Fast and efficient                     | Fast and efficient           |
| Flexibility    | Supports advanced features like Mixins | Supports JavaScript directly |

---

### **Example Using EJS:**

#### 1. Install EJS:

```bash
npm install ejs
```

#### 2. Configure Express to Use EJS:

```javascript
app.set("view engine", "ejs");
app.set("views", "./views");
```

#### 3. Create a `products.ejs` File:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Product List</title>
  </head>
  <body>
    <h1>Products</h1>
    <ul>
      <% products.forEach(product => { %>
      <li><%= product.name %> - $<%= product.price %></li>
      <% }) %>
    </ul>
  </body>
</html>
```

---

### **Conclusion:**

Using a **Template Engine** like **Pug.js** or **EJS** in **Express.js** improves code organization and makes web application development more efficient. You can choose the tool that best suits your needs based on your personal preferences and the nature of the project.

---
