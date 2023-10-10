import Modell from "../Modell/Modell.js";
import View from "../View/View.js";
import InfoPanelView from "../View/Infopanel.js";

class Controller {
    constructor() {
        const JATEKTER = $("#jatekter");
        this.MODELL = new Modell();
        this.infoPanelView = new InfoPanelView(); 
        console.log(this.MODELL.getErtek())
        for (let index = 0; index < 9; index++) {
            new View(JATEKTER, index);
        }

        $(window).on("elemreKattintas", (event) => {
            this.MODELL.setAllapot(event.detail.getIndex());
            event.detail.SetErtek(this.MODELL.getErtek());

            this.infoPanelView.updateInfo(this.MODELL.getErtek(), this.MODELL.getvegevan());
            console.log(this.MODELL.getErtek())
            if (this.MODELL.getvegevan() !== "Tovább") {
                console.log(this.MODELL.getvegevan());
            }
        });
    }
}

export default Controller;