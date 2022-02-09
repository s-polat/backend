// Environment Variablen = "Umgebungsvariabeln"-- cevre degiskeni

// Env  env

// im Betriebssystem:
//  `export TEST=true`, `export SOME_TEXT="Hallo Welt!"`
//   Leerzeichen -> Anführungszeichen drum

// process.env enthält alle Umgebungsvariablen.
const TEST_MODE = process.env.TEST;

// z.B. ein Schlüssel für ein API
// 1. Sicherheit: Keine Keys/Password in Git
// 2. Leicht austauschbar / konfigurierbar.
const API_KEY = process.env.API_KEY;

// Wenn Env Variable fehlt:
// 1. Standartwert `process.env.API_KEY || 'test_key'`
// oder 2. Fehler ausgeben
if (!API_KEY) {
    throw new Error('API_KEY must be set');
}

// Alle Umgebungsvariablen sind Strings
console.log('TEST = ', TEST_MODE, typeof TEST_MODE);

if (TEST_MODE === 'true') {
    console.log('Test ist aktiviert');
}



console.log('Fetching Data from .... with Key=' + API_KEY);