class Address {
    constructor(id, address_1, address_2, city, state_province, zip_region_code, country) {
        this.id = id;
        this.address_1 = address_1;
        this.address_2 = address_2;
        this.city = city;
        this.state_province = state_province;
        this.zip_region_code = zip_region_code;
        this.country = country;
    }
}

module.exports = {
    Address: Address
};