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
        'Wie het laatste naar het toilet ging, geeft aan jou een cadeau.',
        'Alle cadeaus schuiven naar links.',
        'Geef een cadeau aan de laatste die een selfie maakte.',
        'Ruil alle cadeaus van twee spelers met elkaar.',
        'Pak een cadeau van de speler die voor jou jarig is.',
        'Pak een cadeau af van de vorige speler.',
        'Ruil al je cadeaus met een ander.',

        '🕔 - Maak een gedicht met de woorden "maan", "avond" en "piet". Gelukt? Claim een cadeautje.',
        '🕔 - Noem binnen de tijd 8 items die de sint draagt. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - Raak binnen de tijd je neus aan met je grote teen. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - De speler 2 plekken rechts van je moet binnen de tijd 5 liedjes met "piet" opnoemen. Gelukt binnen de tijd? Claim beiden een cadeautje.',
        '🕔 - Bouw binnen de tijd een toren van 6 cadeaus. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - Noem binnen de tijd 5 liedjes met "sinterklaas" erin. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - Noem binnen de tijd 3 liedjes met "snoepgoed" erin. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - De eerste speler links van je moet 5 lekkernijen noemen die tijdens sinterklaas gegeten worden. Gelukt binnen de tijd? Hij of zij krijgt een cadeautje van je. Claim een cadeautje.',
        '🕔 - Doe iemand die meespeelt na. De speler links van je moet raden wie je na doet. Gelukt binnen de tijd? Claim beiden een cadeautje.',
        '🕔 - Waar of niet: vertel of verzin de grootste pech die je ooit is overkomen. De volgende speler mag binnen de tijd raden of het waar is of niet. Als hij of zij het fout heeft claim jij een cadeautje. Als het goed is mag hij of zij dit doen.',
        '🕔 - Ga zo snel mogelijk op je handen staan. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - Druk jezelf tien keer op. Gelukt binnen de tijd? Claim een cadeautje.',
        '🕔 - De speler rechts van je moet 10 voorwerpen opnoemen die op de stoomboot liggen. Gelukt binnen de tijd? Claim beiden een cadeautje.',
        '🕔 - Beeld een sinterklaasliedje uit zonder te praten of te zingen. Geraden binnen de tijd? Jij en de persoon die het geraden heeft claimen beiden een cadeautje.',
        // Add more phrases as needed
    ];

    const [randomPhrase, setRandomPhrase] = useState('');

    const generateRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setRandomPhrase(phrases[randomIndex]);
    };

    return (
        <>
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
