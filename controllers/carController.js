const carModal = require("../modals/cars")

//GET /cars
exports.getCars = async(req,res) => {

    const cars= await carModal.find().populate("createdId", "Users").populate("updatedId", "Users")

    res.status(200).json({
        success:true,
        count:cars.length,
        data:cars
    })
}

//POST /cars
exports.postCar = async(req,res) => {

    const car= await carModal.create(req.body)

    res.status(201).json({
        success:true,
        data:car
    })
}

//GET /cars/:id
exports.getCar = async(req,res) => {

    const car = await carModal.findById(req.params.id).populate("createdId", "User").populate("updatedId", "User")

    res.status(200).json({
        success:true,
        data:car
    })
}

//PUT /cars/:id
exports.updateCar = async(req,res) => {

    const car= await carModal.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})

    res.status(202).json({
        success:true,
        data:car
    })
}

//DELETE /cars/:id
exports.deleteCar = async(req,res) => {

    await carModal.findByIdAndDelete(req.params.id)

    res.status(201).json({
        message:"Car deleted successfully"
    })
}
