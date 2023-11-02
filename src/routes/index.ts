import { Router } from "express";
import ProdutoRouter from "./ProdutoRouter"

const routes = Router();

routes.get('/', (req, res) => res.json('Is Rodando......') );
routes.use('/produtos', ProdutoRouter );

export default routes;