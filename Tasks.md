## Longterm
- Sprachwechsel ermöglichen (Englisch/Deutsch)
- serviceWorker mit Marco besprechen (raus?)
- Default Pokemon-Bild (Pokeball) für Pokemon, für die es keine Bilder gibt (Meltan & Melmetal)

## TODO
1. 

## Montag, 16.11.2020
1. Funktion isFilterDisabled(filter: String), wenn Filter === region, dann rufe isRegionDisabled auf, wenn Filter === type, rufe isTypeDisabled auf, sonst return true
2. im jsx ersetze isRegionDisabled und isTypeDisabled durch isFilterDisabled

## Donnerstag, 05.11.2020
1. im 2. if-Block von handleChange() den "region" ersetzen durch Variable
2. im 3. if-Block von handleChange() den "type" ersetzen durch Variable
Bonus: `region: ` im 2. if-Block durch Variable ersetzen, ebenso im 3. für `type: `
        Besserer Name für "Variable"
        Bessere key prop in Filter.js bei createFilter() <h1>
        "Add filter" disabled und Auswählen funktioniert trotzdem
        Filter.js selected soll wieder zurück auf "Add filter" springen

## Mittwoch, 04.11.2020
1. handleChange anpassen und console.log vom option value, der selected ist

## Dienstag, 03.11.2020
Must: 10 Seiten in "Eloquent Javascript" lesen!
1. Ausgrauen, wenn 2 Typen ausgewählt sind (mit array.filter())
2. options value property geben: region, type

## Montag, 02.11.2020
Must: 10 Seiten in "Eloquent Javascript" lesen!
1. Für den Regionsfilter: {name: "region", region: null}
2. bei Add Filter Option: Typ hinzufügen mit {name: "type", type: null}
3. wenn filter typ hinzugefügt, dann zeige "type" im HTML an

## Freitag, 30.10.2020
-> Urlaub

## Donnerstag, 29.10.2020
-> Urlaub

## Mittwoch, 28.10.2020
-> Termine

## Dienstag, 27.10.2020
-> Termine

## Montag, 26.10.2020
1. Filter.js:wenn regionsfilter erzeugt wurde, darf region nicht erneut ausgewählt werden können

## Freitag, 23.10.2020
-> / 

## Donnerstag, 22.10.2020
-> Termine

## Mittwoch, 21.10.2020
1. Filter.js: für jeden filter in state.filters einen <p> erzeugen, indem filtername steht

## Dienstag, 20.10.2020
-> krank

## Montag, 19.10.2020
-> krank

## Freitag, 16.10.2020
1. Filter.js: wenn regions ausgewählt, füge ich dem array folgendes object hinzu:
    {name: "region"}

## Donnerstag, 15.10.2020
1. Filter.js: Im "state" ein Property namens "filters", am anfang leeres array      `elements = []`
2. Filter.js: wenn regions ausgewählt, füge ich dem array folgendes object hinzu:
    {name: "region"}

## Mittwoch, 14.10.2020
1. Dateinamen aufräumen, Komponenten groß, Funktionen & Daten klein
    - serviceWorker? (im Kurs immer klein)
    - index? (Konvention und daher richtig)
2. Filter.js umbenennen in RegionFilter auch innerhalb der Dateien
3. neue Filter.js (darin alle Filter vereinigen) 
    select option einbauen mit 2 optionen 
    1. Filter hinzufügen, ausgegraut
    2. Region

## Dienstag, 13.10.2020
1. Throw Error-Funktion auslagern und universell benutzen
2. Bugfixing :)))

## Montag, 12.10.2020
1. Entfernen der isWant und isLucky Daten aus dem Pokedex
2. Mergen des Login-Branch
3. Umbenennen des Master in Main 
    => nur noch auf dem Main arbeiten

## Freitag, 09.10.2020
1. setPokedex-Warnung entfernt

## Donnerstag, 08.10.2020
1. Trennung von userData und pokedex
    -> erstellen `user.json` mit isWant und isLucky
    -> benutzen der Daten der `user.json` statt des pokedex  

## Mittwoch, 07.10.2020
1. Namenskonfig auch für Typen verwenden
    -> types.json equivalent zu regions.json !sonst nix!
    Wann Punkt und wann []?
    => In the `object.property` syntax, the property must be a valid JavaScript identifier
    => In the `object[property_name]` syntax, the property_name is just a string or Symbol
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

## Dienstag, 06.10.2020
1. regions.json auch für Pokelist verwenden
    -> Wo am besten Funktion einfügen? => PokemonUserList (Name ändern)
    -> Vergleich zwischen pokemon.region und regions.region oder Mapping?
    -> eigentlich such ich den gleichen von regions.region. Wie?
    => wie bei filter-name!

## Montag, 05.10.2020
1. `regions.json` einführen