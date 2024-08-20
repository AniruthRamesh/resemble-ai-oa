import axios from "axios";

// axios.create({
//     // contains base URL, 
//     // timeouts
//     // Headers
// })

//Mock values
const apiClient = axios.create({
    baseURL: "https://api.resemble.ai",
    timeout: 10000, 
    headers: {
        "Content-Type": "application/json",
    },
});


//Interceptors for unified error handling

export const generateVoices = async (payload) => {
    //Mock API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                // Need to show the name of the voice generated (More actionable message)
                resolve({message: "Voice Generated Successfully. Ready to use"})
            } else{
                reject({message: "Voice Generation Failed. Please try again or contact hello@resemble.ai "})
            }
        }, [3000])
    });
}