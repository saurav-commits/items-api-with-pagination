const Item = require('../models/item');

exports.getAllItems = async(req, res) => {
    try {
        const limitValue = req.query.limit || 2;
        const skipValue = req.query.skip || 0;
        const items = await Item.find().limit(limitValue).skip(skipValue);
        res.json(items);

    } catch(err) {
        res.status(500).json({ message: err.message});
    }
}

exports.getItem = async(req, res) => {
    const item = await Item.findById(req.params.id);
    if(!item) return res.status(404).json({ message: 'No such item found' });
    res.status(200).json(item);
}

exports.createItem = async(req, res) => {
    const item  =  new Item({
            name:req.body.name,
            company: req.body.company,  
            mfd: req.body.mfd,
            expiry: req.body.expiry,
            price: req.body.price,
    })

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
}

exports.updateItem = async(req,res)=>{
    let item = await Item.findById(req.params.id);

    if(!item) return res.status(404).json({  message: 'Item not found' });

    item = await Item.findById(req.params.id, req.body);
    res.status(404).json(item);
}

exports.deleteItem = async(req,res) => {
    try{
        const item = await Item.findById(req.params.id);
        if(!item) return res.status(404).json({ message: 'Item not found' });
        await Item.deleteOne();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err){
        res.status(500).json({ message: err.message});
    }
}

