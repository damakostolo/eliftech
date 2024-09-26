const ApiError = require("../errors/ApiErrors");
const {User,Event} = require("../models/models")

class EventController {

    async registration(req, res, next) {
        try {
            const {name, email, date} = req.body;
            const {id} = req.params;

            if (!name|| !email || !date) return next(ApiError.badRequest("Не вказано одне с полів "))

            const candidate = await User.findOne({where: {email}})

            if(candidate){
                return next(ApiError.badRequest(`Ви вже зареестроварі`))
            }

            const user = await User.create({eventId: id ,name, email, date})

            res.status(200).json({user})
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

   /* async delete(req, res, next) {
        try {
            const {id} = req.params;
            console.log(id)
            const event = await Event.destroy({where: {id}})
            res.status(200).json({event})
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }*/



    async getAll(req, res) {
        const events = await User.findAll()
        res.status(200).json(events)
    }

    async getUserEvent(req, res, next) {
        try {
            const {id} = req.params;
            const user = await User.findAll({where: {eventId: id}})
            res.status(200).json({user})
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new EventController();