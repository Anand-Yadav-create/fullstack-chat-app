import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUserForSidebar = async (req,res)=>{


    try {

        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id: {$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);


        
    } catch (error) {

        console.log("Error in getUserSidebar:",error.message);
        res.status(500).json({error:"Internal Server bhai Error"});
        
    }

}


export const getMessages=async(req,res)=>{
    try {
        
        const {id:userToChatId}= req.params;
        const myid =req.user._id;
        const messages =await Message.find({$or:[{senderId:myid,receiverId:userToChatId},
            {senderId:userToChatId, receiverId:myid}
        ]})

        res.status(200).json(messages)
    } catch (error) {
        
        console.log("Error in getMessages controller: ",error.message);
        res.status(500).json({error:"Internal Server error"});
    }
}

export const sendMessage=async(req,res)=>{


    try {
        
        const {Text,image}=req.body;

       
        const {id: receiverId}=req.params;

        const senderId=req.user._id;

        let imageUrl;

        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            text:Text,
            image:imageUrl,
        });

      
        await newMessage.save();

        const receiverSocketId=getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }

        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
        
    }
}