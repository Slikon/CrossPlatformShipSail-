const readline = require("readline");
const PirateShipModel = require("./PirateShipModel");
const ViewTerm = require("./viewTerm");

class ControllerTerm {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  moveRight() {
    this.model.incrementLocation();
    this.view.printState(this.model.location);
  }
  moveLeft() {
    this.model.decrementLocation();
    this.view.printState(this.model.location);
  }
}

const model = new PirateShipModel();
const view = new ViewTerm();
const controller = new ControllerTerm(view, model);

view.printDefault();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  if (line === "r") {
    controller.moveRight();
  } else if (line === "l") {
    controller.moveLeft();
  } else if (line === "exit") {
    return;
  } else {
    console.log("Unknown command.");
  }
});
