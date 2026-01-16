🍽️ Ristorante – Frontend (Angular)
Interfaccia utente del menù ristorante sviluppata in Angular (standalone).
Consuma le API REST del backend Spring Boot.

---

## 🚀 Deploy online (Render)

Frontend LIVE:
👉 https://ristorante-frontend-d1gp.onrender.com

Backend LIVE (collegato):
👉 https://ristorante-backend-8awh.onrender.com

API base:
👉 https://ristorante-backend-8awh.onrender.com/api/piatti

---

## 🛠 Stack

- Angular (standalone components)
- Bootstrap 5
- RxJS + HttpClient

---

## 🍕 Funzionalità

✅ Home con selezione categorie (Primi, Secondi, Dolci, Bevande)  
✅ Lista piatti filtrata per categoria  
✅ Dettaglio piatto con ingredienti  
✅ Conto (carrello minimale) con quantità e totale  
✅ Badge sul pulsante “Conto” (desktop) con quantità totale  
✅ Mini carrello su mobile (bar fissa con totale + accesso rapido al conto)  
✅ UI mobile-friendly + card con immagini uniformi  
✅ Tema grafico personalizzato (latte/salvia/toscana)

---

## ⚡ Performance: menu veloce (cache + preload)

Per evitare caricamenti lenti e chiamate ripetute al backend:

- il menù è **cachato** con `shareReplay(1)`
- viene eseguito un **preload** dalla Home per rendere l’esperienza più immediata

Inoltre è presente un **loader UX** (“Sto preparando il menù…”) che viene mostrato finché le card non sono effettivamente caricate.

---

## 💤 Cold start Render (backend)

Nel free tier di Render il backend può andare in sleep.
Questo può rallentare il **primo accesso**.

Per mitigare:
- il backend espone l’endpoint `/ping`
- è stato configurato un monitor esterno (UptimeRobot) che esegue richieste periodiche su `/ping`

---

## 📦 Requisiti

- Node.js 18+
- Angular CLI (opzionale)

Install CLI:
```bash
npm install -g @angular/cli
🔗 Configurazione API

Il frontend usa un file dedicato:

📌 src/app/config/api.ts

Esempio (locale / produzione):

export const API_BASE =
  location.hostname === 'localhost'
    ? 'http://localhost:8080'
    : 'https://ristorante-backend-8awh.onrender.com';

▶️ Avvio in locale
npm install
npm start


App disponibile su:
👉 http://localhost:4200

🏗 Build produzione
ng build --configuration production


Output:
dist/ristorante-client

🗺️ Routing principale
Rotta	Descrizione
/	Home con categorie
/categoria/:categoria	Lista piatti filtrata
/piatti/:id	Dettaglio piatto
/conto	Conto / carrello
🖼️ Immagini

Percorso immagini:
src/assets/img/

Il nome file deve coincidere con il campo immagine del backend.

🎨 Tema grafico

In src/styles.css sono disponibili:

.theme-latte

.theme-salvia

.theme-toscana

Il tema attivo è impostato in src/index.html sul <body>.

🌍 CORS

Il backend permette richieste da:

http://localhost:4200

https://ristorante-frontend-d1gp.onrender.com

Configurato tramite env var backend:
APP_CORS_ORIGINS

📜 Script utili

npm start → sviluppo

npm run build → build produzione

🛠 Troubleshooting

Menu vuoto → controlla URL backend/API e DevTools → Network

Immagini non caricate → controlla path assets/img/ e nome file

Errore 404 sulle rotte → assicurati che Render sia configurato come SPA (rewrite su index.html)

👨‍💻 Autore: Edoardo Mattei
📅 Anno: 2025
