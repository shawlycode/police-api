import { Router } from "express";
import { addStatement, getAllStatement, getStatementById, updateById, deleteById } from "../controllers/statement_controller.js";

//create a variable and assign it to the ROUTER

const api_route = Router()


//Now define all the routes

// api_route.get('/route', (req, res) => {
//   res.json('All api routes')
// });

// api_route.patch('/profile', (req, res) => {
//   res.json('Welcome to Profile')
// })
// api_route.post('/login', (req, res) => {
//   res.json('Welcome to login')
// })
api_route.post('/statement', addStatement)
api_route.get('/statements', getAllStatement)
api_route.get('/statement/:id', getStatementById)
api_route.patch('/statement/:id', updateById)
api_route.delete('/statement/:id', deleteById)

export default api_route;