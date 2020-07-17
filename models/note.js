'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Note extends Model {
        static associate(models) {
        // define association here
        }
    };
    Note.init({
        subject: DataTypes.STRING,
        detail: DataTypes.STRING,
        isDeleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Note',
    });
    return Note;
};
