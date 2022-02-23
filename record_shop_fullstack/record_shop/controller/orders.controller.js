import Order from '../models/orders.model.js';

export const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

export const getOrderById = async (req, res) => {
    const { id } = req.params;

    const order = await Order.findById(id);
    if (!order) {
        return res.status(400).send('Nicht gefunden');
    }
    
    res.json(order);
};

export const addOrder = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.recordId || !data.userId || !data.quantity) {
        return res.status(400).send('Felende Daten');
    }
    
    const order = new Order({
        recordId: data.recordId,
        userId: data.userId,
        quantity: data.quantity,
    });

    await order.save();

    res.send(order);
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Order.deleteOne({ _id: id });
        res.json(result);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}