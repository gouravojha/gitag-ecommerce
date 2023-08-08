const sellerService = require('../services/seller')

exports.registerSeller = async (req,res) => {
    try {
        let payload = req.body
        let register = await sellerService.registerService(payload)
        
        if(register.status){
            return res.status(200).json({message : register.message})
        }

        return res.status(400).json({message : register.message})
    } catch (error) {
        return res.json({message : error.message});
    }
}