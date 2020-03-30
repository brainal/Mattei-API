# Mattei-API
Chi non ha mai voluto usare Mattei come una API? 

### Installazione

Allora innanzitutto hai bisogno di una madre morta. Senza di quella non puoi continuare.
Ciò che serve per poter usare quest'API senza intoppi è innanzitutto node js installato.
Per installare node js ti affido al sito ufficiale: https://nodejs.org/

Dopo aver fatto ciò:
  crea una cartella per il tuo fantastico progetto;
  Apri nel cmd la cartella e scrivi: 
  
```
npm init
```

  E dopo: 
  
```
npm install cheerio
npm install request
``` 

## Tutorial sull'utilizzo

Bene, hai installato con successo tutto ciò di cui avevi bisogno ma ora non stai nella pelle a voler provare l'API di Mattei?

Bene!

Innanzitutto nella cartella del proggggetto crea un file chiamato index.js o come hai chiamato l'entry point nel package.json 

Ora possiamo iniziare a scrivere un po' di codice: 

```node

const Mattei = require('./mattei-api/mattei');

if (Mattei.isSelvaggio()) {

    Mattei.request("https://www.npmjs.com/package/request").then(page => {

       console.log(page);

    }).catch(err => {
    
        console.log(err);
    
    });

}

```

Se non hai capito niente non ti preoccupare! tanto quello coglione qua sei tu

Iniziamo a spiegare il codice:

```node
const Mattei = require('./mattei-api/mattei');
```
Questa istruzione ci dice di includere nel nostro proggggetto l'API di Mattei.



```node
if (Mattei.isSelvaggio()) {
  //...  
}
```
Questo if deve essere messo all'inizio di ogni progggetto che usa l'API di Mattei, se la condizione è vera vuol dire
che Mattei è pronto a lavorare come un bambino africano sotto i tuoi ordini.



```node
Mattei.request("https://www.npmjs.com/package/request").then(page => {
  //...
})
```
Qua Mattei sta facendo un request a una pagina web data come parametro. 
Allora il risultato (che in questo caso io l'ho chiamato page ma posso chiamarlo anche in altro modo) 
che è il codice html della pagina. 

Se vuoi visualizzare nella console il codice html della pagina basta fare: 


```node
console.log(page);
```

Quindi: 

```node
Mattei.request("https://www.npmjs.com/package/request").then(page => {
  console.log(page);
})
```

La parte del catch al momento la tralascio, tu mettila e basta e non rompere i coglioni!

Questa è la fine del primo tutorial, Mattei può fare anche altre cose, come scrivere il contenuto della pagina 
dopo il request in una pagina html e altre cose fiere che al momento non spiego.

## Errori

Ovviamente fai attenzione a non far arrabbiare Mattei. 

Ti faccio un esempio:


```node

const Mattei = require('./mattei-api/mattei');

if (Mattei.isSelvaggio()) {

    Mattei.request("ciao").then(page => {

       console.log(page);

    }).catch(err => {
    
        console.log(err);
    
    });

}

```
Se noti ho volontariamente sbagliato l'URL della pagina mettendo un "ciao" al posto di un URL valido. 

Però se pensi di aver fregato Mattei ti sbagli, perchè avviando ciò che accadrà è questo:


```
Mattei non è in grado di fare un request a questa pagina... 
Ma che cazzo dico! Mattei sa fare tutto sei tu che hai sbagliato! Coglione!
```

## Authors

* **Pietro Marino** 

# License

Facci quel cazzo che ti pare
