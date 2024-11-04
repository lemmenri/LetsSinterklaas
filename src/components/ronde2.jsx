import React, { useState } from 'react';

export const Ronde2 = () => {
    const phrases = [
        'Je mag één cadeautje uitpakken.',
        'Geef de speler links van je een cadeau.',
        'Geef de volgende speler een cadeautje.',
        'Pak een cadeau van speler met de meeste cadeaus.',
        'De speler(s) met de minste cadeaus mag/mogen een cadeau uitpakken.',
        'Pak een cadeau af van een ander.',
        'Geef een cadeau aan de speler met de minste cadeaus.',
        'Jij en een speler pakken elk één cadeautje uit.',
        'De speler met de meeste cadeautjes geeft een cadeau aan jou.',
        'Pak een cadeau van een andere speler. Die speler mag een cadeautje uitpakken.',
        'Probeer binnen de tijd een cadeautje uit te pakken achter je rug. Gelukt binnen de tijd? Pak dan een cadeautje van een andere speler.',
        'Probeer met alleen je pinken binnen de tijd een cadeautje uit te pakken. Gelukt binnen de tijd? Pak dan een cadeautje van een andere speler.',
        'Probeer zonder handen binnen de tijd een cadeautje uit te pakken. Gelukt binnen de tijd? Pak dan een cadeautje van een andere speler.',
        'Probeer met ovenwanten aan binnen de tijd een cadeautje uit te pakken. Gelukt binnen de tijd? Pak dan een cadeautje van een andere speler.',
        'Zing een sinterklaasliedje zonder je mond te bewegen. Als het geraden is binnen de tijd, ruil je een cadeau met de speler die het goed heeft geraden.',
        'Beeld een sinterklaasliedje uit zonder te praten of te zingen. De eerste die het raad binnen de tijd mag een cadeautje van je afpakken. Jij mag bij een andere speler een cadeau afpakken.',

        '🕔 - Maak een gedicht met de woorden "sint", "bel" en "spel". Gelukt? Pak een cadeautje uit.',
        '🕔 - Noem binnen de tijd 8 items die de sint draagt. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - Raak binnen de tijd je neus aan met je grote teen. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - De speler 2 plekken links van je moet binnen de tijd 3 liedjes met "schoen" opnoemen. Gelukt binnen de tijd? Pak beiden een cadeautje uit.',
        '🕔 - Bouw binnen de tijd een toren van 6 cadeaus. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - Noem binnen de tijd 5 liedjes met "sinterklaas" erin. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - Noem binnen de tijd 3 liedjes met "snoepgoed" erin. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - De eerste speler links van je moet 5 lekkernijen noemen die tijdens sinterklaas gegeten worden. Gelukt binnen de tijd? Hij of zij krijgt een cadeautje van je. Pak een cadeautje uit.',
        '🕔 - Doe iemand die meespeelt na. De speler links van je moet raden wie je na doet. Gelukt binnen de tijd? Pak beiden een cadeautje uit.',
        '🕔 - Waar of niet: vertel of verzin de grootste pech die je ooit is overkomen. De volgende speler mag binnen de tijd raden of het waar is of niet. Als hij of zij het fout heeft pak jij een cadeautje uit. Als het goed is mag hij of zij dit doen.',
        '🕔 - Ga zo snel mogelijk op je handen staan. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - Druk jezelf tien keer op. Gelukt binnen de tijd? Pak een cadeautje uit.',
        '🕔 - De speler rechts van je moet 10 voorwerpen opnoemen die op de stoomboot liggen. Gelukt binnen de tijd? Pak beiden een cadeautje uit.',
        '🕔 - Beeld een sinterklaasliedje uit zonder te praten of te zingen. Geraden binnen de tijd? Jij en de persoon die het geraden heeft Pak beiden een cadeautje uit.',
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
            <p className="w-full mb-4 p-2 text-lg">{randomPhrase}</p>
            <button
                onClick={generateRandomPhrase}
                className="border-green-800 text-green-800 border-2 font-semibold mt-4 px-6 py-2 rounded-2xl w-full"
            >
                Geef mij een opdracht!
            </button>
        </>
    );
};
