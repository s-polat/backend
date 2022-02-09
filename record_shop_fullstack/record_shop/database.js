import {Low, JSONFile} from 'lowdb';

//lowdb de database olusturmak icin gerekli file.json seklinde bir database olusturduk burda
const db = new Low(new JSONFile('file.json'))
await db.read()

db.data = db.data || { records: [
      // the title, the artist, the year, the cover image and the price
     
    {
        "title": "Equal",
        "artist": "Ed Sheeran",
        "year": "2021",
        "price": 7.99,
        "cover": "https://media1.jpc.de/image/w412/front/0/0190296549625.jpg"
    },
    {
      "title": "Divide",
      "artist": "Ed Sheeran",
      "year": "2017",
      "price": 7.99,
      "cover": "https://media1.jpc.de/image/w600/front/0/0190295859022.jpg"
  },
    {
        "title": "Multiply",
        "artist": "Ed Sheeran",
        "year": "2014",
        "price": 7.99,
        "cover": "https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png"
    },
    {
        "title": "Plus",
        "artist": "Ed Sheeran",
        "year": "2011",
        "price": 6.99,
        "cover": "https://m.media-amazon.com/images/I/91yteS2SfdL._AC_SL1500_.jpg"
    }
     
    
    
    
] };

await db.write();

export default db;