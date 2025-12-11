# Ristorante – Frontend (Angular)

Interfaccia utente del menù ristorante. Consuma le API REST del backend Spring Boot.

## Stack
- Angular 17/20 (standalone components)
- Bootstrap 5
- RxJS/HttpClient

## Funzionalità
- Home con categorie (Primi, Secondi, Dolci, Bevande)
- Lista piatti per categoria
- Dettaglio piatto con ingredienti
- Form “conto” (carrello leggero) con piatti ordinati per categoria → nome
- Tema grafico con sfondo personalizzato e card uniformi

## Requisiti
- Node.js 18+
- Angular CLI

## Configurazione API
Per lo sviluppo locale, il servizio punta al backend su `http://localhost:8080`.

File: `src/app/services/piatto.service.ts`
```ts
private baseUrl = 'http://localhost:8080/api/piatti';
// Dopo il deploy del backend su Render, sostituisci con l'URL pubblico, es.:
// private baseUrl = 'https://<tuo-backend>.onrender.com/api/piatti';
Avvio in locale
bash
Copia codice
npm install
npm start        # alias di ng serve
# apri http://localhost:4200
Build
bash
Copia codice
ng build --configuration production
# output: dist/ristorante-client/browser
Routing principale
/ → home con categorie

/piatti/:categoria → lista piatti per categoria

/piatto/:id → dettaglio di un piatto

/conto → form conto (se presente nel progetto)

Immagini
Le immagini dei piatti sono in src/assets/img/.
Assicurati che i nomi file coincidano con il campo immagine proveniente dal backend.

Stile/tema
Lo sfondo e le card sono personalizzati in src/styles.css.
Esempio: classi tema .theme-latte, .theme-salvia, .theme-toscana.
Se vuoi cambiare tema, imposta la classe desiderata sull’<body> in src/index.html.

Collegamenti
Backend (Spring Boot): [aggiungi qui l’URL dopo il deploy]

Endpoint base BE: /api/piatti

GET /api/piatti – tutti i piatti

GET /api/piatti/ordered – ordinati (per “conto”)

GET /api/piatti/{id} – dettaglio

GET /api/piatti/categoria/{categoria} – filtro

CORS
Il backend espone CORS centralizzato. In locale apri normalmente http://localhost:4200 e http://localhost:8080.
In produzione assicurati che l’origine del frontend sia whitelista in BE (variabile APP_CORS_ORIGINS).

Script utili (package.json)
npm start → sviluppo

ng build --configuration production → build prod

Troubleshooting
Schermata vuota: controlla la console del browser per errori di CORS o URL API errato.

Immagini non caricate: verifica il path assets/img/ e i nomi file.

Errore 404 su /piatti/...: controlla le rotte e i routerLink.

Questo progetto è stato generato con Angular CLI e poi personalizzato per l’app “Ristorante”.
