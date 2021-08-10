const packagedTariff = require('../../model/packagedTariff');
const provider = require('../../const/providers')
describe('Product - packagedTariff', () =>{

    it('should return valid prouct name and annual amount with comsumption kWh less that 4000kWh', () =>{
        const product = new packagedTariff(provider.PACKAGED).calculateTariff(3500);
        expect(product.tariffName).toBe('Packaged tariff');
        expect(product.annualCost).toBe('800 €/year');
       
    });

    it('should return valid product name and additional 30 cents cost included with comsumption kWh greater that 4000kWh', () =>{
        const product = new packagedTariff(provider.PACKAGED).calculateTariff(4001);
        expect(product.tariffName).toBe('Packaged tariff');
        expect(product.annualCost).toBe('800.3 €/year');
       
    });

    it('should return base cost for 12 months with 0kWh', () =>{
        const product = new packagedTariff(provider.PACKAGED).calculateTariff(3500);
        expect(product.tariffName).toBe('Packaged tariff');
        expect(product.annualCost).toBe('800 €/year');
       
    });

});