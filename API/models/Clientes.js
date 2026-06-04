
const db = require('../config/db');
/*  Pueden usarlo así, pero no es necesario y exportar los métodos con exports 
//module .exports = Materia;
const Materia = {
  getAll: (callback) => {
    const query = 'SELECT * FROM calificaiones';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
};
*/

// Obtener todos los clientes
exports.getAllClients = (callback) => {
    const query = 'SELECT id, nombre, dependencia, celular FROM clientes';
    db.query(query, callback);
};

// Agregar un nuevo cliente
exports.addClient = (clientData, callback) => {
    const query = 'INSERT INTO clientes (nombre, dependencia, celular) VALUES (?, ?, ?)';
    db.query(query, [clientData.nombre, clientData.dependencia, clientData.celular], callback);

};

// Modificar un cliente existente
exports.updateClient = (id, clientData, callback) => {
    const query = 'UPDATE clientes SET nombre = ?, dependencia = ? celular = ? WHERE id = ?';
    db.query(query, [clientData.nombre, clientData.dependencia, clientData.celular, id], callback);
};


// Eliminar un cliente
exports.deleteClient = (id, callback) => {
    const query = 'DELETE FROM clientes WHERE id= ?';
    db.query(query, [id], callback);
};

/*module.exports = Calificacion;*/