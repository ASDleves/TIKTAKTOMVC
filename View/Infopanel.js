class InfoPanelView {
    constructor() {
        this.elem = $("#infopanel"); // A HTML elem, ahol megjeleníteni fogod az információkat
    }

    updateInfo(player, result) {
        // Frissíti az infopanelet a játékos és az eredmény alapján
        this.elem.html(`Következő játékos: ${player}<br>Eredmény: ${result}`);
    }
}

export default InfoPanelView;