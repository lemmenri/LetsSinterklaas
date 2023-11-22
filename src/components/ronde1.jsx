import React, { useState } from 'react';

export const Ronde1 = () => {
    const phrases = [
        'Loop naar de groep met het kleinste aantal deelnemers. Neem je cadeautjes mee.',
        'Pak een cadeautje van de stapel.',
        'Geef een cadeau van de stapel aan de groep links van jullie. Je mag een cadeau van hun stapel voor jezelf pakken.',
        'Pak het kleinste cadeautje van de stapel.',
        'Pak het grootste cadeautje van de stapel.',
        'Geef de volgende speler een cadeautje van de stapel.',
        'Ruil één cadeautje met een andere speler.',
        'Pak twee cadeaus van de stapel.',
        'Geef de vorige speler een cadeautje van de stapel.',
        'Pak een cadeau van een andere speler.',
        'Geef een cadeau aan de speler met de minste cadeaus.',

        'Maak een gedicht met de woorden "fiets", "niets" en "marsepein". Gelukt? Pak een cadeautje van de stapel.',
        'Noem binnen de tijd 8 items die de sint draagt. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'Raak binnen de tijd je neus aan met je grote teen. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'Bouw binnen de tijd een toren van 6 cadeaus. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'Noem binnen de tijd 5 liedjes met "sinterklaas" erin. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'Noem binnen de tijd 3 liedjes met "snoepgoed" erin. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'De eerste speler links van je moet 5 lekkernijen noemen die tijdens sinterklaas gegeten worden. Gelukt binnen de tijd? Hij of zij krijgt een cadeautje van je. Pak een cadeautje van de stapel.',
        'Doe iemand die meespeelt na. De speler links van je moet raden wie je na doet. Gelukt binnen de tijd? Pak beiden een cadeautje van de stapel.',
        'Waar of niet: vertel of verzin de grootste pech die je ooit is overkomen. De volgende speler mag binnen de tijd raden of het waar is of niet. Als hij of zij het fout heeft pak jij een cadeautje van de stapel. Als het goed is mag hij of zij dit doen.',
        'Ga zo snel mogelijk op je handen staan. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'Druk jezelf tien keer op. Gelukt binnen de tijd? Pak een cadeautje van de stapel.',
        'De speler rechts van je moet 10 voorwerpen opnoemen die op de stoomboot liggen. Gelukt binnen de tijd? Pak beiden een cadeautje van de stapel.',
        'Beeld een sinterklaasliedje uit zonder te praten of te zingen. Geraden binnen de tijd? Jij en de persoon die het geraden heeft Pak beiden een cadeautje van de stapel.',
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
