class ViewTerm {
  constructor() {
    this.shipSymbol = `\\__||__||__\/`;
    this.wave = "~";
  }

  printDefault() {
    const rightSea = this.createSea(187);
    console.log(`${this.shipSymbol}${rightSea}`);
  }

  printState(leftWaves) {
    const leftSea = this.createSea(leftWaves);
    const rightSea = this.createSea(187 - leftWaves);
    console.log(`${leftSea}${this.shipSymbol}${rightSea}`);
  }

  createSea(wavesNum) {
    let waves = "";
    if (wavesNum >= 0) {
      for (let i = 0; i < wavesNum; i++) {
        waves += this.wave;
      }
      return waves;
    } else return waves;
  }
}

module.exports = ViewTerm;
