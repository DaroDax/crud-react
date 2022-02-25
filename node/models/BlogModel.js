//Importa la conexion a la data_base
import db from "../database/db.js";
//Importa sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING},
})

export default BlogModel