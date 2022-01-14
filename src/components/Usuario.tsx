import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

// Usuario por defecto del tipo User
const tempUser: User = {
  uid: 'XYZ789',
  name: 'Carlos'
}

export const Usuario = () => {
  
  const [ user, setUser ] = useState<User>( tempUser );

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Brawer Nuñez'
    })
  }

  return (
    <div className='mt-5'>
      <h3>Usuario: useState</h3>

      <button 
        onClick={ login }
        className='btn btn-outline-primary'>
        Login
      </button>

      {
        ( !user )
          ? <pre> No existe el usuario </pre>
          : <pre> { JSON.stringify( user ) } </pre> 
      }

    </div>
  )
}
