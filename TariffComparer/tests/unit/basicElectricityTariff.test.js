
const basicElectricityTariff = require('../../model/basicElectricityTariff');
const provider = require('../../const/providers')

describe('Product - BasicElectricityTariff', () =>{

    it('should return "basic electricity tariff" name and annual-amount "830 €/year" with comsumption 3500kWh', () =>{
        const product = new basicElectricityTariff(provider.BASIC).calculateTariff(3500);
        expect(product.tariffName).toBe('basic electricity tariff');
        expect(product.annualCost).toBe('830 €/year');
    });


    it('should return base cost for 12 months with 0kWh', () =>{
        const product = new basicElectricityTariff(provider.BASIC).calculateTariff(0);
        expect(product.tariffName).toBe('basic electricity tariff');
        expect(product.annualCost).toBe('60 €/year');
    });

    it('should return 0 €/year for negative or invalid kWh', () =>{
        const product = new basicElectricityTariff(provider.BASIC).calculateTariff(-100);
        expect(product.tariffName).toBe('basic electricity tariff');
        expect(product.annualCost).toBe('0 €/year');
       
    });
});