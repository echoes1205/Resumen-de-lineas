import db from './../database/db.js';
import { DataTypes } from 'sequelize';

const Bloque1Model = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default Bloque1Model