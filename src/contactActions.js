import axios from 'axios'

export const  getContacts=()=> async dispatch=> {
    try{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type:'GET_CONTACTS',
        payload:res.data
    })
}
catch(error)
{
    alert(error)
}
}
export const  getContact=(id)=> async dispatch=> {
    try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type:'GET_CONTACT',
        payload:res.data
    })
        }
        catch(error)
        {
            alert(error)
        }
}
export const addContact=(contact)=>async dispatch=>{
  const res= await axios.post('https://jsonplaceholder.typicode.com/users',contact)
    dispatch({
        type:'ADD_CONTACT',
        payload:res.data
    })
}
export const deleteContact=(id)=>async dispatch=>{
    try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type:'DELETE_CONTACT',
        payload:id
    })
}
catch(error)
{
    alert(error)
}
}
export const editContact=(contact)=>async dispatch=>{
    try{
    const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact)
      dispatch({
          type:'UPDATE_CONTACT',
          payload:res.data
      })
    }
    catch(error)
    {
        alert(error)
    }
  }