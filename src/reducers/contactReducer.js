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
            case 'GET_CONTACT':
       return {
              ...state,
              contact:action.payload
            };
            case 'UPDATE_CONTACT':
              return {
                ...state,
               contacts:state.contacts.map(contact=>contact.id===action.payload.id ? contact=action.payload:contact)
                   };
      

      
       default:
           return state ;
       
    }
}