const activity = require('../models/activity');


class activityService{
    async getAllActivity(){
        try{
            return await activity.findAll();
        }catch (err){
            throw new Error(err.message);
        }
    }

    async createActivity(data){
        try{
            return await activity.create(data)
        }catch(err){
            throw new Error(err.message);
        }
    }
}

module.exports = new activityService();