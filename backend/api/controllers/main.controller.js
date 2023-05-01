
var providers = require('../models/providers.models');
const Provider = require('../db/db');
const { ObjectId } = require('mongodb');
//util functions
//check if empty is empty
function isEmptyList(obj) {
    return (!obj || 0 === obj.length || Object.keys(obj).length === 0);
}

//handle errors
function handleError(res, error) {
    res.status(200);
    res.send('Something went wrong \n' + error)
}



//CRUD - create(POST) , Read(GET), Update(PUT), Delete(DELETE)

//POST
//uri: /api/providers
module.exports.create = function (req, res) {
    try {
        var provider = req.body;

        Provider.create(provider)
            .then(result => {
                res.status(201);
                res.send(result);
            })
            .catch(error => handleError(res, error));

    } catch (error) {
        handleError(res, error);
    }
}



//GetAll
//uri: /api/providers
module.exports.readAll = function (req, res) {

    try {
        Provider.find()
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send("List is empty");
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error))
    }
    catch (error) {
        handleError(res, error);
    }

}


//Getone
//uri: /api/providers/123
module.exports.readOne = function (req, res) {
    try {
        let id = new ObjectId(req.params.id);

        Provider.find({ '_id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send("List is empty");
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error))
    }
    catch (error) {
        handleError(res, error);
    }
}



//Put
//uri: /api/providers/123
module.exports.update = function (req, res) {
    try {
        let id = ObjectId(req.params.id);
        let provider = req.body;
        Provider.findOneAndUpdate({ "_id": id }, provider, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send("List is empty,cannot update");
                }

                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error))
    }
    catch (error) {
        handleError(res, error);
    }
}



//delete one
//uri: /api/providers
module.exports.deleteOne = function (req, res) {
    try {
        let id = new ObjectId(req.params.id);
        Provider.findOneAndDelete({ "_id": id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send("List is empty,cannot delete");
                }
                res.status(200);
                res.send(result);
            }).catch(error => handleError(res, error));
    } catch (error) {
        handleError(res, error);

    }

}



//delete all
//uri: /api/providers
module.exports.deleteAll = function (req, res) {
    try {
        Provider.deleteMany({})
            .then(result => {
                if (result.deletedCount===0) {
                    res.status(404);
                    res.send("List is empty,cannot delete");
                }
                res.status(200);
                res.send("All providers deleted");
            })
            .catch(error => handleError(res, error))
    } catch (error) {
        handleError(res, error);
    }
}

