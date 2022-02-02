
exports.computeTotalPrice = productsArray => {
    var productSets = this.getSetsOfUniqueProducts(productsArray);
    var total = productSets.reduce((total, productSet) => total += priceForProductSet(productSet), 0.0);
    return Math.round(total * 100) / 100;
}

exports.getSetsOfUniqueProducts = productsArray => {
    return productsArray.reduce((sets, currentProduct) => {
        for (const set of sets) {
            if (!set.includes(currentProduct)) {
                set.push(currentProduct);
                return sets;
            }
        }
        sets.push([currentProduct]);
        return sets;
    }, []);
}

priceForProductSet = productSet => productSet.length * priceForProductsInSet(productSet.length);

priceForProductsInSet = numberOfUniqueProducts => 299 * (1 - discountForProductsInSet(numberOfUniqueProducts));

discountForProductsInSet = numberOfUniqueProducts => {
    switch(numberOfUniqueProducts) {
        case 2:
            return 0.05;
        case 3:
            return 0.10;
        case 4:
            return 0.20;
        case 5:
            return 0.25;
        default:
            return 0.00;
    }
}