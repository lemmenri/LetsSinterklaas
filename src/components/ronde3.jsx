import React, { useState } from 'react';

export const Ronde3 = () => {
    const phrases = [
        'Je mag één cadeautje claimen.',
        'Pak een cadeau van een andere speler.',
        'Geef een cadeau aan een andere speler naar keuze.',
        'Laat 2 spelers een cadeau van jouw keuze ruilen.',
        'Geef een cadeau aan de speler die na jou jarig is.',
        'Pak een cadeau af van de volgende speler.',
        'Ruil een cadeau met de speler die het verste van je weg staat.',
        'Ruil het grootste cadeau met het kleinste.',
        'Wissel 2 spelers van plek. Laat hun ongeclaimde cadeautjes liggen.',
        'Wie als laatste de ruimte heeft verlaten, geeft aan jou een cadeau.',
        'Alle cadeaus schuiven naar links.',
        'Alle cadeaus schuiven 2 plaatsen naar rechts',
        'Alle cadeaus schuiven naar rechts.',
        'Alle cadeaus schuiven 2 plaatsen naar links.',
        'Ruil alle cadeaus van twee spelers met elkaar.',
        'Pak een cadeau van de speler die voor jou jarig is.',
        'Pak een cadeau af van de vorige speler.',
        'Ruil al je cadeaus met een ander, kies zelf de persoon.',
        'Neem het cadeautje waar het meest om gestreden wordt.',
        'Alle spelers geven hun grootste cadeautje aan de speler aan hun rechterzijde.',
        'Alle spelers geven hun kleinste cadeautje aan de speler aan hun linkerzijde.',
        'Neem een cadeautje van de speler met het minste in zijn glas /fles.',
        'Ben je een dame: Neem een cadeautje van 1 speler naar keuze.',
        'Gooi met de dobbelsteen. Komt het getal in je huisnummer voor, dan krijg je een cadeau van de speler links en rechts van je.',
        'Gooi met de dobbelsteen. Komt het getal voor in je geboortejaar: Pak een cadeau van de jongste speler.',

        '🕔 - Maak een gedicht met de woorden "maan", "avond" en "piet". Gelukt? Pak een cadeau af van de speler links van je.',
        '🕔 - Noem binnen de tijd 8 items die de sint draagt. Gelukt binnen de tijd? Geef een cadeau van de speler links van je, aan de speler rechts van je',
        '🕔 - Raak binnen de tijd je neus aan met je grote teen. Gelukt binnen de tijd? Pak een cadeau af van de speler rechts van je',
        '🕔 - Bouw binnen de tijd een toren van 6 cadeaus. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - De eerste speler links van je moet 5 lekkernijen noemen die tijdens sinterklaas gegeten worden. Gelukt binnen de tijd? Hij of zij krijgt een cadeautje van je.',
        '🕔 - Doe iemand die meespeelt na. De speler links van je moet raden wie je na doet. Gelukt binnen de tijd? Wissel beiden een cadeautje met een willekeurige speler.',
        '🕔 - Zing een Sinterklaasliedje naar keuze (kies een andere als er al 1 gezongen is). Je krijgt van de speler links en de speler rechts van je een cadeau.',
        '🕔 - Ga zo snel mogelijk op je handen staan. Gelukt binnen de tijd? Je krijgt een cadeau van de speler tegenover je',
        '🕔 - Druk jezelf tien keer op of doe een dansje gedurende de tijdslimiet. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - Beeld een sinterklaasliedje uit zonder te praten of te zingen. Geraden binnen de tijd? Jij en de persoon die het geraden heeft, wisselen een willekeurig cadeautje.',
        '🕔 - Beschrijf de volgende 4 woorden (à la 30 seconds) en laat ze binnen de tijd raden.\nGelukt? Neem een cadeautje aan de persoon recht van je \n\n-Surprise \n-Chocoladeletter \n-Lootjes trekken \n-De intocht van Sinterklaas',
        '🕔 - Beschrijf de volgende 4 woorden (à la 30 seconds) en laat ze binnen de tijd raden.\nGelukt? Neem een cadeautje aan de persoon links van je \n\n-Grote Boek \n-Dak \n-Hoofdpiet \n-Het SinterklaasJournaal',

        // Add more phrases as needed
    ];

    const [randomPhrase, setRandomPhrase] = useState('');
    const [lastRandomPhrases, setLastRandomPhrases] = useState([]);
    const nrOfLastRandomPhrasesToStore = 3

    const generateRandomPhrase = () => {
        let randomIndex

        let foundNewIndex = false
        let nrOfTries = 0
        const maxNrOfTries = 1000

        while (!foundNewIndex && nrOfTries < maxNrOfTries) {
            randomIndex = Math.floor(Math.random() * phrases.length);
            if (lastRandomPhrases.includes(phrases[randomIndex])) {
            } else {
                foundNewIndex = true
            }
            nrOfTries++;
        }

        setRandomPhrase(phrases[randomIndex]);
        if (lastRandomPhrases.length >= nrOfLastRandomPhrasesToStore) {
            setLastRandomPhrases([...lastRandomPhrases.slice(1), phrases[randomIndex]])
        } else {
            setLastRandomPhrases([...lastRandomPhrases, phrases[randomIndex]])
        }
    };

    return (
        <>
            {randomPhrase === '' && (<p className="w-full mb-4 p-2 text-lg">Druk op de knop om een opdracht te krijgen!</p>)}
            <p className="w-full mb-4 p-2 text-lg whitespace-pre-line">{randomPhrase}</p>
            <button
                onClick={generateRandomPhrase}
                className="border-green-800 text-green-800 border-2 font-semibold mt-4 px-6 py-2 rounded-2xl w-full"
            >
                Geef mij een opdracht!
            </button>
        </>
    );
};
