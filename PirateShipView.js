class View {
  constructor() {
    this.shipSelector = "#pirateShipImage";
    this.buttonSelector = "button";
  }
  getShip() {
    return document.querySelector(this.shipSelector);
  }
  setShipLocation(location) {
    var ship = this.getShip();
    ship.style.left = location;
  }
  getButton() {
    return document.querySelector(this.buttonSelector);
  }
}
