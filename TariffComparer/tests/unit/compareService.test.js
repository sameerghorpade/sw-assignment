
const compareService = require('../../service/compareService');

describe('compareService', () =>{
    it('should return compared products with comsumption 35kWh', () =>{
        const products = compareService.getComparision(3500);
        const tariffNames = products.map((a)=> a.tariffName);
        const annualCosts = products.map((a)=> a.annualCost)
        expect(tariffNames).toContain("basic electricity tariff")
        expect(annualCosts).toContain("830 €/year")
        expect(tariffNames).toContain("Packaged tariff")
        expect(annualCosts).toContain("800 €/year")
    });

    it('should return list sorted in asc order with packaged tariff as first element with given consumption 4500', () =>{
        const products = compareService.getComparision(4500);
        expect(products[0].tariffName).toBe("Packaged tariff")
        expect(products[0].annualCost).toBe("950 €/year")
        expect(products[1].tariffName).toBe("basic electricity tariff")
        expect(products[1].annualCost).toBe("1050 €/year")
        
    });
});