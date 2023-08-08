const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default : null,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    gstIN: {
        type: String,
        default: null,
    },
    shopPhoto: {
        type: String,
        default: null,
    },
    aadhar: {
        aadharNumber: {
            type: String,
            default : null
        },
        aadharImage: { type: String , default : null}
    },
    pan: {
        panNumber: {
            type: String,
            default : null
        },
        panImage: {
            type: String,
            default : null
        }
    },
    address: {
        pincode: { type: String , default : null },
        locality: { type: String , default : null},
        landmark: { type: String , default : null},
        district: { type: String , default : null},
        state: { type: String , default : null},
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    bankDetails: {
        accountHolderName: { type: String , default : null},
        accountNumber: { type: String , default : null},
        ifsc: { type: String , default : null}
    },
    upiDetails: {
        upiAddress: { type: String , default : null},
        upiName: { type: String , default : null},
    },
    storeCoordinates: {
        lat: { type: Number , default : 0},
        lng: { type: Number , default : 0}
    }

}, { timestamps: true });

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
