class ControllerGui {
  constructor(display, model) {
    this.display = display;
    this.model = model;
  }

  bindListeners() {
    const forwardButton = this.display.getForwardButton();
    forwardButton.addEventListener("click", () => this.moveForward());

    const backButton = this.display.getBackButton();
    backButton.addEventListener("click", () => this.moveBack());
  }

  moveForward() {
    this.model.incrementLocation();
    const newLocation = this.model.location;
    this.display.setShipLocation(newLocation);
  }

  moveBack() {
    this.model.decrementLocation();
    const newLocation = this.model.location;
    this.display.setShipLocation(newLocation);
  }
}

window.onload = function () {
  var view = new ViewGui();
  var model = new PirateShipModel();
  var controller = new ControllerGui(view, model);
  controller.bindListeners();
};
