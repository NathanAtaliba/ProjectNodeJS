import { Router } from 'express';
import { getClients, createClient, deleteClient } from './controllers/clientController.js';
import { getHairdresser, createHairdresser, deleteHairdresser } from './controllers/hairdresserController.js';
const routes = Router();

//ROUTES CLIENT
routes.get('/client', getClients);
routes.post('/client', createClient);
routes.delete('/client/:id', deleteClient);

//ROUTES HAIRDRESSER
routes.get('/hairdresser', getHairdresser);
routes.post('/hairdresser', createHairdresser);
routes.delete('/hairdresser/:id', deleteHairdresser);


export default routes;