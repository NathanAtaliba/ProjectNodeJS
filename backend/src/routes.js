import { Router } from 'express';
import { getClients, createClient, deleteClient,updateClient } from './controllers/clientController.js';
import { getHairdresser, createHairdresser, deleteHairdresser,updateHairdresser } from './controllers/hairdresserController.js';
const routes = Router();

//ROUTES CLIENT
routes.get('/client', getClients);
routes.post('/client', createClient);
routes.delete('/client/:id', deleteClient);
routes.put('/client/:id', updateClient);

//ROUTES HAIRDRESSER
routes.get('/hairdresser', getHairdresser);
routes.post('/hairdresser', createHairdresser);
routes.delete('/hairdresser/:id', deleteHairdresser);
routes.put('/hairdresser/:id', updateHairdresser);

export default routes;