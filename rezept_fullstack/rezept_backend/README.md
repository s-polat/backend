# The IT Mentalisten - Rezepte Backend

## Anforderungen
- MongoDB Datenbank (jede Gruppe implementiert Verbindung in app.js, passwort in .env Datei)
- Routen
- Controller
- Model (Mongoose)

## Gruppen-Aufgaben
### Formular-Gruppe
- Rezept-Model mit Schema
- POST-Route zum Empfangen der Formulardarten
- Controller für o.g. Route (benutzt model um neues Rezept in DB zu schreiben)
- Fetch im Frontend-Formular (POST zu dieser Route im Backend)

### Startseite-Gruppe
- Rezept-Model mit Schema
- GET-Route für Liste aller Rezepte
- Controller für o.g. Route (benutzt model um Rezepte aus DB zu holen)
- Fetch im Frontend (GET request an diese Route im Backend)

### Rezept-Details-Gruppe
- Rezept-Model mit Schema
- GET-Route für ein bestimmtes Rezept (nach ID)
- Controller für o.g. Route (Holt anhand der ID ein Rezept aus DB)
- Fetch im Frontend (GET request, mit ID)
