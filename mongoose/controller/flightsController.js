import Flight from "../models/Flight.js"


async function getFlights (req, res){
    const allFlights = await Flight.find()
    res.json(allFlights)
};

async function createFlight(req, res){
    try {
        await Flight.create(req.body)
    } catch (error) {
        console.error(error)
        .send(error)
    }
    res.send('created')

}

export { getFlights, createFlight}