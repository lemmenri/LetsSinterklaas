import React from 'react'

export const Spelregels = () => {
    return (
        <div className='space-y-2'>
            <h1 className='font-bold text-2xl'>
                SPELREGELS
            </h1>
            <h2 className='font-semibold'>
                Ronde 1: De SinterShuffle
            </h2>
            <ul className='list-disc ml-5'>
                <li>
                    Verdeel de spelers in kleine groepjes van 4-5 spelers. Verdeel alle cadeaus ongeveer eerlijk over de groepen.
                </li>
                <li>
                    Elke groep legt zijn cadeaus in het midden van de groep.
                </li>
                <li>
                    De jongste speler begint.
                </li>
                <li>
                    De spelers drukken om de beurt met de klok mee op de knop &quot;"Ronde 1&quot;" en voeren de opdracht uit.
                </li>
                <li>
                    De ronde is afgelopen als alle cadeaus zijn verdeeld over de spelers.
                </li>
            </ul>

            <h2 className='font-semibold'>
                Ronde 2: De SinterScheur
            </h2>
            <ul className='list-disc ml-5'>
                <li>
                    Alle groepen worden weer samengevoegd.
                </li>
                <li>
                    Zet voor deze ronde een timer naar keuze, ca 30 minuten.
                </li>
                <li>
                    De speler die het dichtste bij 5 december jarig is begint.
                </li>
                <li>
                    De spelers drukken om de beurt met de klok mee op de knop &quot;"Ronde 2&quot;" en voeren de opdracht uit.
                </li>
                <li>
                    De ronde eindigt wanneer de timer afloopt of wanneer alle cadeautjes zijn uitgepakt.
                </li>
            </ul>

            <h2 className='font-semibold'>
                Ronde 3: De SinterSwap Finale
            </h2>
            <ul className='list-disc ml-5'>
                <li>
                    Zet voor deze ronde een timer naar keuze, ca 30 minuten.
                </li>
                <li>
                    De speler die als laatste bij de Letsconnect is komen werken begint.
                </li>
                <li>
                    De spelers drukken om de beurt met de klok mee op de knop &quot;"Ronde 3&quot;" en voeren de opdracht uit
                </li>
                <li>
                    Als een cadeau geclaimed is doet deze niet meer mee voor het spel.
                </li>
                <li>
                    De ronde eindigt wanneer de timer afloopt of wanneer alle cadeautjes zijn geclaimed.
                </li>
            </ul>
        </div>
    )
}
