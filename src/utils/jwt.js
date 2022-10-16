const jwt = require('jsonwebtoken')
const config = require('../config')
const logger = require('./logger')
const ex = module.exports

ex.createToken = async(data, expireIn, secret)=>{
    try{
        return await jwt.sign(data, secret || config.secret, {expiresIn: expireIn || config.expireIn})
    }catch(err){
        logger.error("error in sing Token", err)
        throw Error(err)
    }
}

ex.decodeToken = async(token, secret)=>{
    try{
        return await jwt.verify(token, secret || config.secret)
    }catch(err){
        logger.error("error in verifing token", )
        throw Error(err)
    }
}