const models=require("../../database/models");

const addPlace = async(req,res)=>{
    try{
        const {body} = req;
        const addresses = await models.addresses.create({
            state: body.state,
            city: body.city,
            suburb: body.suburb,
            street: body.street,
            postalCode: body.postalCode,
        });

        const place=await models.places.create({
            name:body.name,
            description: body.description,
            addressId: addresses.id,

        }); //SQL INSERTO INTO
        return res.status(201).send(place);
    }catch(error){
        console.log(error);
        return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

const getPlaces = async(req,res)=>{
    try{
       const places = await models.places.findAll({
       // where : {
       //     name: "La Pasadita"
       // },
        include: {
            model: models.addresses,
        },
       });
       return res.status(200).send(places);
    }catch(error){
        console.log(error);
        return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor");
    }

};

module.exports = {addPlace, getPlaces};