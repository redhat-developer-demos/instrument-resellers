class Instrument {
    constructor(id, name, instrument, type, manufacturer) {
        this.id = id;
        this.name = name;
        this.instrumentType = {instrument, type}
        this.manufacturer = manufacturer;
    }
}

module.exports = {
    Instrument: Instrument
};