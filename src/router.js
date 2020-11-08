import { Router } from 'express';

import UserController from './controllers/userController';
import SessionController from './controllers/SessionController';
import TestController from './controllers/TestController';


import authMiddleware from './middlewares/auth';

const routes = Router() 

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store)

//Todas as rotas abaixo necessitam de autenticação
routes.use(authMiddleware);

routes.get('/authenticated', TestController.test);

export default routes;