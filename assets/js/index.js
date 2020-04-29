const bund1 = “Baden-Württemberg”;
const bund2 = “Bayern”;
const bund3 = “Berlin”;
const bund4 = “Brandenburg”;
const bund5 = “Bremen”;
const bund6 = “Hamburg”;
const bund7 = “Hessen”;
const bund8 = “Mecklenburg-Vorpommern”;
const bund9 = “Niedersachsen”;
const bund10 = “Nordrhein-Westfalen”;
const bund11 = “Rheinland-Pfalz”;
const bund12 = “Saarland”;
const bund13 = “Sachsen”;
const bund14 = “Sachsen-Anhalt”;
const bund15 = “Schleswig-Holstein”;
const bund16 = “Thüringen”;

let bundesland1 = “Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt”;
let bundesland2 = “Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt”;
let bundesland3 = “Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt”;
let bundesland4 = “Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt”;
let bundesland5 = “Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt”;
let bundesland6 = “Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt”;
let bundesland7 = “Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt”;
let bundesland8 = “Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt”;
let bundesland9 = “Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt”;
let bundesland10 = “Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt”;
let bundesland11 = “Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt”;
let bundesland12 = “Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt”;
let bundesland13 = “Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt”;
let bundesland14 = “Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt”;
let bundesland15 = “Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt”;
let bundesland16 = “Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt”;
let fehlermeldung = “Ein solches Bundesland gibt es in Deutschland nicht.“;

let ergebnisText;

function check() {
    const ergebnis = document.getElementById(“bundeslandInfo”).value;
    console.log(ergebnis);
    switch (ergebnis) {
        case bund1:
            ergebnisText = bundesland1;
            break;
        case bund2:
            ergebnisText = bundesland2;
            break;
        case bund3:
            ergebnisText = bundesland3;
            break;
        case bund4:
            ergebnisText = bundesland4;
            break;
        case bund5:
            ergebnisText = bundesland5;
            break;
        case bund6:
            ergebnisText = bundesland6;
            break;
        case bund7:
            ergebnisText = bundesland7;
            break;
        case bund7:
            ergebnisText = bundesland8;
            break;
        case bund9:
            ergebnisText = bundesland9;
            break;
        case bund10:
            ergebnisText = bundesland10;
            break;
        case bund11:
            ergebnisText = bundesland11;
            break;
        case bund12:
            ergebnisText = bundesland12;
            break;
        case bund13:
            ergebnisText = bundesland13;
            break;
        case bund14:
            ergebnisText = bundesland14;
            break;
        case bund15:
            ergebnissText = bundesland15;
            break;
        case bund16:
            ergebnisText = bundesland16;
            break;
        default:
            ergebnisText = fehlermeldung;
    } 
    document.getElementById(“bundeslandInfoErgebnis”).innerHTML = ergebnisText;
}