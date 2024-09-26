const sequelize = require("../dbAdmin");
const {DataTypes} = require('sequelize');

const Event = sequelize.define("event", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    title:{type: DataTypes.STRING, unique: true},
    email:{type: DataTypes.STRING},
    description:{type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
})

const User = sequelize.define("user", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventId:{type: DataTypes.INTEGER},
    name:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING, unique: true},
    date: {type: DataTypes.DATE, allowNull: false}
})



Event.hasOne(User)
User.belongsTo(Event)

module.exports = {
    Event,
    User
}