import { Router } from 'express';
import studentsModel from '../models/students.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {})
})
router.get('/students', async (req, res) => {
    let page = parseInt(req.query.page)
    let limit = parseInt(req.query.limit)


    let result = await studentsModel.paginate({}, { limit: limit, page: page, lean: true })

    // Navegabilidad de paginas
    result.prevLink = result.hasPrevPage ? `http://localhost:9090/students?page=${result.prevPage}&limit=${limit}` : ''
    result.nextLink = result.hasNextPage ? `http://localhost:9090/students?page=${result.nextPage}&limit=${limit}` : ''


    // validacion de extremos en la plantilla de hbs
    result.isValid = !(page <= 0 || page > result.totalPages)


    console.log(result);

    // res.send(result)
    res.render('students', result)
})


export default router;



//TODO: La opción `lean: true` se utiliza en este contexto para indicar a Mongoose que queremos que los documentos devueltos por la consulta se representen como objetos JavaScript básicos, en lugar de instancias completas de modelos Mongoose. Esto puede mejorar el rendimiento al evitar la sobrecarga asociada con la creación de instancias completas de modelos, especialmente cuando solo necesitamos acceder a los datos y no a los métodos adicionales proporcionados por los modelos Mongoose.