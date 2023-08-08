const Seller = require('../models/seller')

exports.registerService = async (payload) => {
    try {
        const {
            name,
            email,
            phoneNumber
        } = payload

        let isPresent = await Seller.findOne({phoneNumber: phoneNumber})
        if(isPresent){
            return {
                status : false,
                message : "Mobile Number already registered"
            }
        }

        await Seller.create({
            name,
            email,
            phoneNumber
        })

        return {
            status : true,
            message : "Regstered Successfuly"
        }
    } catch (error) {
        console.log(error.message)
        return { message: "Please Enter all mandatory details !!!" }
    }
}