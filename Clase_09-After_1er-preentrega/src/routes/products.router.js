import { Router } from 'express';
import ProductManager from '../services/ProductManager.js';



const router = Router();

// Vamons a importar una clase Manager - ProductManager.js
const productManager = new ProductManager()


// Todas las APIs
// Listar
router.get('/', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined
        const products = await productManager.getAllProducts(limit)
        res.json(products)
    } catch (error) {
        console.log(error);
    }
});

// Obtener un producto por id
router.get('/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = await productManager.getProductById(productId);

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        res.json(product)
    } catch (error) {
        console.log(error);

    }
})

// Crear un producto
router.post('/', async (req, res) => {
    try {
        const { title, description, code, price, stock, category, thumbnails } = req.body
        if (!title || !description || !code || !price || !stock || !category) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios excepto thumbnails' });
        }

        const newProduct = await productManager.addProduct({ title, description, code, price, stock, category, thumbnails });

        res.status(201).json(newProduct)
    } catch (error) {
        console.log(error);
    }
})


// Actualizar un producto por id
router.put('/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);

        const updatedProduct = await productManager.updateProduct(productId, req.body);
        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.log(error);
    }
})

// Eliminar un producto por id
router.delete('/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const deletedProduct = await productManager.deleteProduct(productId);
        if (deletedProduct) {
            res.json(deletedProduct);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.log(error);
    }
})

export default router;