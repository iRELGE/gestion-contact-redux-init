const initilState = {
    contacts: [
        {
          id: 1,
          name: 'Mohamed IDBRAHIM',
          email: 'idbrahimdev@gmail.com',
          phone: '0650303315'
        },
        {
          id: 2,
          name: 'Basma IDBRAHIM',
          email: 'basma@gmail.com',
          phone: '0650303316'
        },
        {
          id: 3,
          name: 'Walid IDBRAHIM',
          email: 'walid@gmail.com',
          phone: '0650303317'
        }
      ]
};

export default function(state = initilState,action)
{
    switch(action.type)
    {
       default:{
           return state;
       }
    }
}