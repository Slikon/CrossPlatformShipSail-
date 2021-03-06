class PirateShipModel {
  constructor() {
    this.location = 0;
  }

  incrementLocation() {
    this.location += 10;
  }

  decrementLocation() {
    this.location -= 10;
  }
}

module.exports = PirateShipModel;
