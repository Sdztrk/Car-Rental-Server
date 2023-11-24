const reservationModal = require("../modals/reservations")

//GET /reservations
exports.getReservations = async(req,res) => {

    const reservations = await reservationModal.find().populate("userId","Users").populate("carId","Cars")

    res.status(200).json({
        success:true,
        count:reservations.length,
        data:reservations,
    })
}

//POST /reservations
exports.postReservation = async(req,res) => {

    const reservation = await reservationModal.create(req.body)

    res.status(201).json({
        success:true,
        data:reservation,
    })
}

//GET /reservations/:id
exports.getReservation = async(req,res) => {

    const reservation = await reservationModal.findById(req.params.id)

    res.status(200).json({
        success:true,
        data:reservation,
    })
}

//PUT /reservations/:id
exports.updateCReservation = async(req,res) => {

    const reservation = await reservationModal.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})

    res.status(200).json({
        success:true,
        data:reservation
    })
}

//DELETE /reservations/:id
exports.deleteReservation = async(req,res) => {

    await reservationModal.findByIdAndDelete(req.params.id)

    res.status(204).json({
        message:"Car deleted successfully"
    })
}
