const router = require('express').Router();
let Location = require('../models/Location.model');

router.route('/').get((req, res) => {
    Location.find()
        .then(Location => res.json(Location))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Wise = req.body.Wise;
    const Building = req.body.Building;
    const Name = req.body.Name;
    const Type = req.body.Type;
    const Capacity = req.body.Capacity;



    const newLocation = new Location({
        Wise,
        Building,
        Name,
        Type,
        Capacity,

    });



    newLocation.save()
        .then(() => res.json('Location added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Location.findById(req.params.id)
        .then(Location => res.json(Location))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Location.findByIdAndDelete(req.params.id)
        .then(() => res.json('Location deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Location.findById(req.params.id)
        .then(Location => {
            Location.Wise = req.body.Wise;
            Location.Building = req.body.Building;
            Location.Name = req.body.Name;
            Location.Type = req.body.Type;
            Location.Capacity = req.body.Capacity;



            Location.save()
                .then(() => res.json('Location updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;