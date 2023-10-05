# Consegna

Descrizione:
La logica dell’esercizio è la stessa di ieri:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

La differenza è che i dati dell’utente li prenderemo da degli input, e calcoleremo il prezzo quando l’utente clicca su un pulsante ‘calcola’
NB.
In questo esercizio NON USATE il tag form !!! input e select metteteli dentro ad un div senza troppe preoccupazioni

#### MILESTONE 1:

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente un input (dove l’utente inserirà il numero di km), una select (con cui l’utente potrà scegliere il tipo di sconto da applicare) e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
Inizialmente la risposta finale (o output) sarà da scrivere in console.

#### MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Aggiungete anche un input per inserire il nome del passeggero. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS:
Aggiungete dei controlli: impedite ad un utente di calcolare il prezzo se:
il numero di km è NaN
il numero di km è negativo
non sono stati inseriti il nome del passeggero o il numero di km

## Pseudocode

### Get user trip length in km
- Ask user to input trip length in an html input element
- Store in variable 'tripLength'

### Get user age bracket for discount percentage
- Ask user to select age bracket in an html select element
- Choices: Adult (18 - 65), Minor (under 18), Senior (over 65) 
- Based on choice, select discount rate (adult 0%, minor 20%, senior 40%)
- Store in variable 'discountRate'

### Calculate Trip Cost
- (tripLength * tripRate(0.21)) * discountRate(adult(1), minor(0.8), senior(0.6))