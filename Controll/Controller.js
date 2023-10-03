import Modell from "../Modell/Modell.js";
import View  from "../View/View.js";

class Controller {
    
    constructor() {
        const JATEKTER = $("#jatekter")
        this.MODELL = new Modell();
        for (let index = 0; index < 9; index++) {
            new View(JATEKTER, index);
            
        }
        $(window).on("elemreKattintas", (event) => {
            this.MODELL.setAllapot(event.detail.getIndex());
            event.detail.SetErtek(this.MODELL.getErtek())
            if (this.MODELL.getvegevan()!=="Tovább"){
                console.log(this.MODELL.getvegevan())
            }
        });
    }
}

export default Controller;