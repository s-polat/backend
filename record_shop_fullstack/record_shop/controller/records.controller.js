import Record from '../models/records.model.js';

export const getRecords = async (req, res) => {
    const records = await Record.find();
    res.json(records);
};

export const getRecordById = async (req, res) => {
    const { id } = req.params;

    const record = await Record.findById(id);

    if (!record) {
        return res.status(400).send('Nicht gefunden, mit id: ' + id);
    }
    
    res.json(record);
};

export const addRecord = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.title || !data.artist || !data.year || !data.price) {
        return res.status(400).send('Falsche Daten');
    }

    const record = new Record({
        title: data.title,
        artist: data.artist,
        year: data.year,
        price: data.price, // <- parseInt ?
        cover: '',
    });

    await record.save();

    res.send(record);
}

export const deleteRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const record = await Record.deleteOne({ _id: id });
        res.json(record);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}