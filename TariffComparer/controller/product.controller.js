const Joi = require('joi');
let compareService = require('../service/compareService');

/*Get all products */
exports.get = (req,res) => {
    try{
        const schema = Joi.object().keys({
            consumption: Joi.number().positive().greater(0).required()
        });
        const valdationResult = schema.validate(req.params);

        if (valdationResult.error) {
            res.status(400).send(valdationResult.error.details[0].message);
            return;
        }
        const consumption = req.params.consumption;
       
        let products = compareService.getComparision(consumption);
        res.send(products);
    }
    catch(err)
    {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}