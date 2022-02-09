
import db from '../database.js'


// Controller Methods
export async function addRecord(req, res){
    const data = req.body
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.title || !data.artist || !data.year || !data.price) {
        return res.status(400).send('Falsche Daten');
    }
    // Das ist wichtig zu verstehen. gelen veriyi bizim istedigimiz formata göre ayarlayip database e kaydediyoruz
    const record = {

        title: data.title,
        artist: data.artist,
        year: data.year,
        price: data.price,
        cover: data.cover,
    };

    db.data.records.push(record);
    //
    await db.write(); // async

    res.send(record);

}

export function getAllRecords(req,res) {

    res.json(db.data)

    // Alle records zurück geben.
}





