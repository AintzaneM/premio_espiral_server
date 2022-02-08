import { RequestHandler } from "express"
import User from "./User"
import passport from "passport";





export const getUsers: RequestHandler = async (req, res) => {
    
        const users = await User.find();
        console.log("getting users")
        return res.json("hello");
     
    
};




export const home: RequestHandler = async (req, res) => {
   
    const user = new User(req.body);
    const savedUser = await user.save()
    console.log("savedUser",user)
    res.json(savedUser)
    res.sendFile(__dirname+"/pages/index.html")




};

export const login: RequestHandler = async (req, res) => {
   
    const loginUser = await passport.authenticate("google", 
    {scope: ["profile"] })
    console.log("login user", loginUser)
    res.json("you're logged in")
    

};

export const logout: RequestHandler = async (req, res) => {
   
    const logoutUser = await passport.authenticate("google", 
    {failureRedirect: '/' })
    console.log("logout user",logoutUser)
    res.json("you're logged out!!!!")
    // res.redirect('/');
};


