import { RequestHandler } from "express"
import Premio from "./Premio"

export const getPremios: RequestHandler = async (req, res) => {
    try {
        const videos = await Premio.find();
        return res.json(videos);
      } catch (error) {
        res.json(error);
    }
    
};

export const createPremio: RequestHandler = async (req, res) => {
    const premioFound = await Premio.findOne({title: req.body.title})
    if(premioFound) {
        return res.status(303).json({message: "The title already exists"})
    }
    const premio = new Premio(req.body)
    const savedPremio = await premio.save()
    console.log(premio)
    res.json(savedPremio)
    
};

export const getPremio: RequestHandler = async (req, res) => {
    const premioFound = await Premio.findById(req.params.id);
    if(!premioFound) {
        return res.status(204).json();
    }
    console.log(req.params)
    return res.json(premioFound)
    
    
    
}

export const deletePremio: RequestHandler = async (req, res) => {
    const premioFound = await Premio.findByIdAndDelete(req.params.id);
    if(!premioFound) {
        return res.status(204).json();
    }
    console.log(req.params)
    return res.json(premioFound)
    
}

export const updatePremio: RequestHandler = async (req, res) => {
    const premioUpdated = await Premio.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!premioUpdated) {
        return res.status(204).json();
    }
    
    return res.json(premioUpdated)
    
}