class Modell {
  #lista = [];
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
    this.#lepesszam++;
  }
  
  getErtek() {
    return this.#allapot;
  }
  getvegevan(){
    this.#vizszintesGyozelem()
    if (vEll.indexOf("OOO")>-1){
      return "O nyert"
    }else if (vEll.indexOf("XXX")>-1){
      return "X nyert"
    }else if(this.#lepesszam===9){
      return "Döntetlen!";
  }
    return "Tovább";
  }


  #vizszintesGyozelem(){
    let vEll = ""
    for (let i = 0; i < 9; i++){
        vEll += this.#lista[i];
        if (i % 3 === 2){
            vEll += "@"
        }
    }
    vEll += "@";
    console.log(vEll)
  }
}
export default Modell;
