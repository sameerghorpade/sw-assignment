
const basicTariff = require('../model/basicElectricityTariff');
const packagedTariff = require('../model/packagedTariff');
const providers = require('../const/providers');
exports.calculateCost = function(productName, consumption){
    
    /*Add new case for new products  */
    switch(productName)
    {
        case providers.BASIC:
            return new basicTariff(productName).calculateTariff(consumption);

        case providers.PACKAGED:
            return new packagedTariff(productName).calculateTariff(consumption);
        
        default: console.log("Invalid product name");
    }

    return null;
}