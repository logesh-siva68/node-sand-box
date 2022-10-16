const bcrypt = require('bcryptjs');
const logger = require('./logger');
const ex = module.exports

const saltRound = config.bcryptRound || 10;

const salt = await bcrypt.genSalt(saltRound);

ex.hash = async(str)=>{
    try{
        return await bcrypt.hash(str, salt);
    }catch(err){
        logger.error("erron in hashing string", err)
        throw Error(err)
    }
}

ex.compareHash = async(str, hash)=>{
    try{
        return await bcrypt.compare(str, hash);
    }catch(err){
        logger.error("error in comparing hash", err)
        throw Error(err)
    }
}