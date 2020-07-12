const initilState = {
    contacts: [],
      
};


export default function(state = initilState,action)
{
    switch(action.type)
    {
      case 'GET_CONTACTS':
       return {
          contacts:action.payload
            };
        case'DELETE_CONTACT':
        return{
          contacts:state.contacts.filter((contact)=>contact.id!==action.payload)
            };
        case'ADD_CONTACT':
         return{
          contacts:[action.payload,...state.contacts]
            };
      

      
       default:
           return state ;
       
    }
}