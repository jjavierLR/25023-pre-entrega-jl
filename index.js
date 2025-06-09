import {argv} from "process";

// * 1) Consultar Todos los Productos: npm run start GET products

//console.log(argv);

//const [, , method, resource] = argv;

//console.log(method, resource);

// ? 1er.- Ejemplo de uso de fetch para obtener productos desde una API

//fetch('https://fakestoreapi.com/products')
//.then(response => response.json())
//.then(data => console.log(data));

// ? 2do.- Ejemplo de uso de fetch para obtener productos desde una API

/*if (argv[2] == "GET") {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}*/

// * 2) Consultar un Producto Específico: npm run start GET products/15

// console.log(argv[3]);

// ? 1er.-.Ejemplo de cómo extraer el ID del producto de la línea de comandos sin separar los strings
/*const match = argv[2].match(/GET\s+\/products\/(\d+)/);
const productId = match ? match[1] : null;

console.log(productId);*/

// ? 2do.-.Ejemplo de cómo extraer el ID del producto de la línea de comandos separando los strings

//const match = argv.find((arg) => /^products\/\d+$/.test(arg));
//const id = match ? match.split('/')[1] : null;

//console.log(id);


/*if (argv[2] == "GET" && id) {
  try {
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}*/

// * 3) Crear un Producto Nuevo: npm run start POST products T-Shirt-Rex 300 remeras

const [, , method, resource, ...params] = argv;

console.log(method, resource, params);


/*if (argv[2] == "POST" && argv[3] == "products") {
try {
    const [title, price, category] = params;
    const product = { title, price: parseFloat(price), category };

    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
} catch (error) {
  console.error(error);
}
}*/

// * 4) Eliminar un Producto: // npm run start DELETE products/7

if (argv[2] == "DELETE" && argv[3] == "products") {
  const id = argv[4];
  try {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  } catch (error) {
    console.error(error);
  }
}