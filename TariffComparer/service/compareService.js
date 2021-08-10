
const productFactory = require('../factory/productFactory');
const providers = require('../const/providers');
exports.getComparision = function(consumption){

    let products = [];
    //note: in future provider names can be comming from a database, hence the below implementation
    for(var keyprovider in providers)
    {
        var product  = productFactory.calculateCost(providers[keyprovider], consumption);
        products.push(product);
    }
    products.sort((a, b) => 
        Number(a.annualCost.match(/(\d+)/g)[0]) - Number((b.annualCost.match(/(\d+)/g)[0]))
    );
    
    return products;
}
