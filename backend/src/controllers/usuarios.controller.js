import * as usuariosServices from "../services/usuarios.services.js"

export const getUsuarios = (req, res) => {
    usuariosServices.getUsuarios()
        .then((result) => {
            res.status(200).json({
                message: "Usuarios retrieved successfully",
                data: result[0],
            })
        }).catch((error) => {
            res.status(500).send(error)
        });
}

export const getUsuario = (req, res) => {
    const { id } = req.params;
    usuariosServices.getUsuario(id)
        .then((result) => {
            res.status(200).json({
                message: "Usuario retrieved successfully",
                data: result[0],
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

export const createUsuario = (req, res) => {
    const usuario = req.body;
    usuariosServices
        .createUsuario(usuario)
        .then(() => {
            res.status(200).json({
                message: "Usuario created successfully",
                data: usuario,
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const deleteUsuario = (req, res) => {
    const { id } = req.params;
    usuariosServices.deleteUsuario(id)
        .then(() => {
            res.status(200).json({
                message: "Usuario deleted successfully"
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};