import Client from '../models/client.js'

async function getClients(req, res){
    const clients = await Client.find();
    return res.status(200).json(clients);
}

async function createClient(req, res){
    const client = req.body;
    const newClient = await Client.create(client);
    return res.status(201).json(newClient);
}

async function deleteClient(){

}

export { getClients, createClient, deleteClient };