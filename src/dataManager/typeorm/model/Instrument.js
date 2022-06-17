class Instrument {
    constructor(id, name, instrumentType, type, manufacturer) {
        this.id = id;
        this.name = name;
        this.instrumentType = {instrumentType, type}
        this.manufacturer = manufacturer;
    }
}

module.exports = {
    Instrument: Instrument
};