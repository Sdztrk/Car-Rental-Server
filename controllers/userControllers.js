const userModal = require("../modals/users")

//GET users
exports.getUsers = async(req,res) => {

    const users= await userModal.find()

    res.status(200).json({
        success:true,
        count:users.length,
        data:users
    })
}

//POST /users
exports.postUser = async(req,res) => {

    const user= await userModal.create(req.body)

    res.status(201).json({
        success:true,
        data:user
    })
}

//GET /users/:id
exports.getUser = async(req,res) => {

    const user = await userModal.findById(req.params.id)

    res.status(200).json({
        success:true,
        data:user
    })
}

//PUT /users/:id
exports.updateUser = async(req,res) => {

    const user= await userModal.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})

    res.status(200).json({
        success:true,
        data:user
    })
}

//DELETE /users/:id
exports.deleteUser = async(req,res) => {

    await userModal.findByIdAndDelete(req.params.id)

    res.status(204).json({
        message:"User deleted successfully"
    })
}
