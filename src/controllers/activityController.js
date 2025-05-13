const activityService = require('../services/activityService')

class activityController{
    async getAllActivity(req,res){
        try{
            const activity = await activityService.getAllActivity();
            res.json(activity)
        }catch(err){
            res.status(500).json({message: err.message});
        }
    } 
    async createActivity(req, res){
        try{
            const activity = await activityService.createActivity(req.body);
            res.json(activity);
        }catch {
            res.status(500).json({message: err.message});
        }
    }
}
module.exports = new activityController();