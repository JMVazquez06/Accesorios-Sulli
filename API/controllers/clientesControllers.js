const Cliente = require('../models/Clientes.js');

// Obtener todas los clientes
exports.getAllClients = (req, res) => {
  Cliente.getAllClients((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obtener clientes por estatus
exports.getClientsByStatus = (req, res) => {
  const { estatus } = req.params;
  Cliente.getClientsByStatus(estatus, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};


// Agregar una nuevo cliente
exports.addClient = (req, res) => {
  const newClient = req.body;
  Cliente.addClient(newClient, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Cliente agregado', id: result.insertId });
  });
};

// Modificar cliente
exports.updateClient = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  Cliente.updateClient(id, updatedData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Cliente actualizado' });
  });
};

// Eliminar cliente
exports.deleteClient = (req, res) => {
  const { id } = req.params;
  Cliente.deleteClient(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Cliente eliminado' });
  });
};  