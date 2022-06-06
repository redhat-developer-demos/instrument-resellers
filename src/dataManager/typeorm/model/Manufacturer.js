class Manufacturer {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.description = type;
    }
}

module.exports = {
    Manufacturer: Manufacturer
};