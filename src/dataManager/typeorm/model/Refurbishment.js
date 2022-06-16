class Refurbishment {
    constructor(id, instrument, workToBeDone, startDate, finishDate) {
        this.id = id;
        this.instrument = instrument
        this.workToBeDone = workToBeDone;
        this.startDate = startDate;
        this.finishDate = finishDate;
    }
}

module.exports = {
    Refurbishment: Refurbishment
};