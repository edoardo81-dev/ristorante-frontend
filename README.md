
# 🍽️ Ristorante – Frontend (Angular)

Interfaccia utente del menù ristorante.  
Consuma le API REST del backend Spring Boot.

---

## 🚀 Deploy online (Render)

Frontend LIVE:  
👉 **https://ristorante-frontend-d1gp.onrender.com**

Backend LIVE (collegato):  
👉 **https://ristorante-backend-8awh.onrender.com**

API base:

https://ristorante-backend-8awh.onrender.com/api/piatti

---

## 🛠 Stack

- Angular 17/20 (standalone components)
- Bootstrap 5
- RxJS + HttpClient

---

## 🍕 Funzionalità

- Home con categorie (Primi, Secondi, Dolci, Bevande)  
- Lista piatti filtrata per categoria  
- Dettaglio piatto con ingredienti  
- Form "conto" (carrello leggero)  
- Tema grafico personalizzato  
- Immagini e card uniformi  

---

## 📦 Requisiti

- Node.js **18+**
- Angular CLI installata:


npm install -g @angular/cli
🔗 Configurazione API
src/app/services/piatto.service.ts:

ts

// Locale
private baseUrl = 'http://localhost:8080/api/piatti';

// Produzione (Render)
private baseUrl = 'https://ristorante-backend-8awh.onrender.com/api/piatti';
▶️ Avvio in locale

npm install
npm start   # alias di ng serve
App disponibile su:


http://localhost:4200
🏗 Build produzione

ng build --configuration production
Output:


dist/ristorante-client/browser
🗺️ Routing principale
Rotta	Descrizione
/	Home con categorie
/piatti/:categoria	Lista piatti filtrata
/piatto/:id	Dettaglio
/conto	Form conto (se presente)

🖼️ Immagini
Percorso:

src/assets/img/
Il nome file deve coincidere con il campo immagine del backend.

🎨 Tema grafico
In src/styles.css:

.theme-latte

.theme-salvia

.theme-toscana

Imposta tema in src/index.html → <body class="theme-latte">.

🔌 Collegamenti al Backend
Backend:
https://ristorante-backend-8awh.onrender.com

API base:
/api/piatti

GET /api/piatti

GET /api/piatti/ordered

GET /api/piatti/{id}

GET /api/piatti/categoria/{categoria}

🌍 CORS
Il backend già permette richieste da:

http://localhost:4200

https://ristorante-frontend-d1gp.onrender.com

Gestito tramite env var:

APP_CORS_ORIGINS
📜 Script utili (package.json)
npm start → sviluppo

ng build --configuration production → build prod

🛠 Troubleshooting
Schermata vuota
→ Controlla errori CORS o URL API errato (DevTools → Network)

Immagini non caricate
→ Verifica path assets/img/ e nomi file

Errore 404 sulle rotte
→ Controlla routerLink e parametri

Questo progetto è stato generato con Angular CLI e poi personalizzato per l’app “Ristorante”.
