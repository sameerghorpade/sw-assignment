const Product = require("./product");
const costModel = require("../const/basicElectricityCostModel");

/*Part of a model since taken it as a class and used in factory to get the object*/
class BasicElectricityTariff extends Product {
  constructor(name) {
    super(name);
  }

  calculateTariff(consumption) {
    if (consumption >= 0) {
      let baseCost = costModel.costPerMonth * costModel.months;
      let consmuptionCost = consumption * (costModel.ratePerkWh / 100);
      this.annualCost = (baseCost + consmuptionCost) + " €/year";
    }
    return this; // this:  returns the product with its calculated tariff and name (properties of base class Product)
  }
}

module.exports = BasicElectricityTariff;
