class Modell {
  #lista = [];
  #index;
  #lepesszam;
  #allapot;
  constructor() {

    this.#allapot = "X";
    this.#lepesszam = 0;
    this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];

  }

  setAllapot(index) {
    if (this.#allapot === "X") {
      this.#allapot = "O";
    } else {
      this.#allapot = "X";
    }
    this.#lista[index] = this.#allapot;
    console.log(this.#lista);
    this.#lepesszam++;
  }

  getErtek() {
    return this.#allapot;
  }
  getvegevan() {
   let vEll= this.#vizszintesGyozelem();
    if (vEll.indexOf("OOO") > -1) {
      return "O nyert";
    } else if (vEll.indexOf("XXX") > -1) {
      return "X nyert";
    } else if (this.#lepesszam === 9) {
      return "Döntetlen!";
    }
    return "tovabb";
  }
  #vizszintesGyozelem() {

    let vEll = "";
    for (let i = 0; i < 9; i++) {
      vEll += this.#lista[i];
      if (i % 3 === 2) {
        vEll += "@";
      }
    }
    vEll += "@";
    return vEll;
  }
}
export default Modell;