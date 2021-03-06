class ViewGui {
  constructor() {
    this.shipSelector = "#pirateShip";
    this.forwardButtonSelector = "forwardPirateShip";
    this.backButtonSelector = "backPirateShip";
  }
  getShip() {
    return document.querySelector(this.shipSelector);
  }

  setShipLocation(location) {
    const ship = this.getShip();
    ship.style.left = location;
  }

  getForwardButton() {
    return document.getElementById(this.forwardButtonSelector);
  }

  getBackButton() {
    return document.getElementById(this.backButtonSelector);
  }
}

module.exports = ViewGui;
