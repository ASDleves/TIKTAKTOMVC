

 class Palya {
    constructor(szuloelem) {
        this.szuloelem = szuloelem;
        this.createPalya();
    }

    createPalya() {
        let txt=""
        txt+='<div class="elem"><p> </p></div>'
        this.szuloelem.html(txt);
    }
}
export default Palya ;