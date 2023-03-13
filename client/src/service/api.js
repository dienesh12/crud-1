import axios from 'axios'

const URL = "http://localhost:8000"

//calling api for creating new user
//PATH URL/add
//REQ POST
export const addUser = async (data) => {
    try{
        console.log(data)
        return await axios.post(`${URL}/add`,data)
    }catch(error){
        console.log("Error Occured while calling api",error)
    }
}

//calling api for displaying all users
//PATH URL/all
//REQ GET
export const getUsers = async () => {
    try{
        return await axios.get(`${URL}/all`)
    }catch(error){
        console.log("Error Occured while calling api",error)
    }
}

//calling api for editing a user
//PATH URL/all/:id
//REQ GET
export const getUser = async (id) => {
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("Error Occured while calling api",error)
    }
}

//calling api for editing a user
//PATH URL/edit/:id
//REQ POST
export const editUser = async (user,id) => {
    try{
        return await axios.put(`${URL}/${id}`,user)
    }catch(error){
        console.log("Error Occured while calling api",error)
    }
}

//calling api for deleting a user
//PATH URL/edit/:id
//REQ DELETE
export const deleteDetail = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log("Error Occured while calling api",error)
    }
}

