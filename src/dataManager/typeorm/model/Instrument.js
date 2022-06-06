class Instrument {
    constructor(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
}

module.exports = {
    Instrument: Instrument
};