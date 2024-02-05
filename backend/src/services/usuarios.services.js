import db from "../config/db.js";

export const getUsuarios = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM usuarios';

        db.execute(query).
            then((result) => resolve(result))
            .catch((error) => reject(error));
    })
}

export const getUsuario = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM usuarios WHERE nombre = ?";

        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export const createUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";
  
      const { nombre, email, password } = usuario;
  
      db.execute(query, [nombre, email, password])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  export const deleteUsuario = (id) => {
    return new Promise((resolve, reject) => {
      const query =
        "DELETE FROM usuarios WHERE nombre = ?";
  
      db.execute(query, [id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };