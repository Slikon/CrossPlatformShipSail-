window.onload = function () {
  var view = new View();
  var ship = new PirateShipModel();
  var controller = new Controller(view, ship);
  controller.bindListeners();
};

class Controller {
  constructor(display, model) {
    this.display = display;
    this.model = model;
  }

  bindListeners() {
    var button = this.display.getButton();
    button.addEventListener("click", () => this.moveModel());
  }

  moveModel() {
    this.model.incrementLocation();
    var newLocation = this.model.location;
    this.display.setShipLocation(newLocation);
  }
}
