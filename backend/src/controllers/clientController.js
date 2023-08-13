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

async function deleteClient(req, res){
    const id = req.params.id;
    await Client.findByIdAndDelete(id);
    return res.status(200).send(`Cliente deleted with id: ${id}`);
}

async function updateClient(req, res){
    const id = req.params.id;
    //Parametros a serem atualizados
    await Client.findByIdAndUpdate({ '_id' : id}, {'name': 'louco'})
    return res.status(200).send(`Cliente updated with id: ${id}`)
}

export { getClients, createClient, deleteClient, updateClient };