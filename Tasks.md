## Longterm
- PokemonNamen auf Deutsch
- alle Funktionen klein schreiben, Komponenten?

## Mittwoch, 12.10.2020
1. Dateinamen aufräumen, Komponenten groß, Funktionen & Daten klein
2. Filter.js umbenennen in RegionFilter auch innerhalb der Dateien
3. neue Filter.js (darin alle Filter vereinigen) select option einbauen mit 2 optionen 
    1. Filter hinzufügen, ausgegraut
    2. Region

## Dienstag, 11.10.2020
1. Throw Error-Funktion auslagern und universell benutzen
2. Bugfixing :)))

## Montag, 10.10.2020
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