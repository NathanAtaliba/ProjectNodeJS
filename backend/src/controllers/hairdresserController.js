import Hairdresser from "../models/hairdresser.js";

async function getHairdresser(req, res){
    const clients = await Hairdresser.find();
    return res.status(200).send(clients);
}

async function createHairdresser(req, res){
    const client = req.body;
    await hairdresser.create(client);
    return res.status(201).send('Hairdresser created with sucess');
}

async function deleteHairdresser(req, res){
    const id = req.params.id;
    await Hairdresser.findByIdAndDelete(id);
    return res.status(200).send(`Hairdresser removed with id: ${id}`);
}
async function updateHairdresser(req, res){
    const id = req.params.id;
    await Hairdresser.findByIdAndUpdate({"_id": id},{"name": "sebastiao"});
    return res.status(200).send(`Hairdresser update with id: ${id}`);
}

export { getHairdresser, deleteHairdresser, createHairdresser, updateHairdresser }; 