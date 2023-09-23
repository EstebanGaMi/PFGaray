class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title, !description, !price, !thumbnail, !code, !stock) {
            console.log('Error: Todos los campos son obligatorios.');
            return;
        }


        if (this.products.some(product => product.code === code)) {
            console.log('Error: El código del ',title,' con Id:', '(', code, ')', 'ya existe.');
            return;
        }

        const product = {
            id: this.nextProductId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        console.log(title, 'added.');
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log('Error: Producto no encontrado');
        }
        return product;
    }
}

const productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción del Producto 1', 30, 'imagen1.jpg', '001', 50);
productManager.addProduct('Producto 2', 'Descripción del Producto 2', 65, 'imagen2.jpg', '002', 30);
productManager.addProduct('Producto 3', 'Descripción del Producto 2', 14, 'imagen3.jpg', '003', 150);
productManager.addProduct('Producto 4', 'Descripción del Producto 3', 58, 'imagen4.jpg', '003', 173);
productManager.addProduct('Producto 5', 'Descripción del Producto 4', 23.50, 'imagen5.jpg', '005', 850);
productManager.addProduct('Producto 6', 'Descripción del Producto 5', 190, 'imagen6.jpg', '006', 3);

const productList = productManager.getProducts();
console.log('Lista de productos: ', productList);

const productById = productManager.getProductById(1);
console.log('Productos con el Id que buscaste: ', productById);


