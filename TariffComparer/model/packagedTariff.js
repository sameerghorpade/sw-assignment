const Product = require('./product');
const costModel = require('../const/packagedCostModel');

/*Part of a model since taken it as a class and used in factory to get the object*/
class PackagedTariff extends Product
{
    constructor(name){
        super(name);
         
    }
    calculateTariff(consumption)
    {
        if(consumption >= 0){
        if(consumption <= costModel.packagedConsumptionkWh){
           this.annualCost = (costModel.packagedRate) + ' €/year';
        }
        else if(consumption > costModel.packagedConsumptionkWh){
           let cost = (costModel.packagedRate + (consumption - costModel.packagedConsumptionkWh) * (costModel.ratePerkWh/100));
           this.annualCost = cost + ' €/year';
        }
    }
        return this;// this:  returns the product with its calculated Annual amount and tariffname (properties of base class Product)
    }
}

module.exports = PackagedTariff;