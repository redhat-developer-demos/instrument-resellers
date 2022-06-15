class Acquisition {
    constructor(id, name, seller, instrument, price, acquisitionDate) {
        this.id = id;
        this.seller = seller;
        this.instrument = instrument
        this.price = price;
        this.acquisitionDate = acquisitionDate;
    }
}

module.exports = {
    Acquisition: Acquisition
};