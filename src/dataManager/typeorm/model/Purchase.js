class Purchase {
    constructor(id, name, buyer, instrument, price, purchaseDate) {
        this.id = id;
        this.buyer = buyer;
        this.instrument = instrument
        this.price = price;
        this.purchaseDate = purchaseDate;
    }
}

module.exports = {
    Purchase: Purchase
};