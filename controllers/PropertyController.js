'use strict'

const { Property } = require('./../schema/property')
const { Response } = require('./../utils/Response')
const { ErrorHandler } = require('./../utils/ErrorHandler')
const message = require('./../utils/message')

class PropertyController {
    /**
     * API | GET
     * Get all the types of properties.
     * @example {
        * }
        * @param {*} req
        * @param {*} res
        */
    static async getPropertyTypes (req, res) {
        try {
            let propertyTypes = await Property.distinct('property_type')
            if (propertyTypes) {
                return new Response(res, { propertyTypes: propertyTypes }, message.getPropertyTypes.success, true)
            } else {
                return new Response(res, { propertyTypes: [] }, message.getPropertyTypes.invalid, false, 400)
            }
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }

    /**
     * API | GET
     * Get all the properties records.
        * @param {*} req
        * @param {*} res
        */
    static async getAllProperties (req, res) {
        try {
            let results = await Property.find({})
            if (results) {
                return new Response(res, { crimes: results }, message.getAllProperties.success, true)
            } else {
                return new Response(res, { crimes: {} }, message.getAllProperties.invalid, false, 400)
            }
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }
}

module.exports = { PropertyController }
