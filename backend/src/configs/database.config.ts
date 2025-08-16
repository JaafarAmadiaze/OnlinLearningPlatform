import {connect,ConnectOptions} from 'mongoose';

export const connectDatabase =  () => {
    connect(process.env.MONGO_URI!,{

    } as ConnectOptions).then(()=>
        console.log("Connected to the database"),
        (error)=>console.error(error)
        )
    }