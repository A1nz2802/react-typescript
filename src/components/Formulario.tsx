import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  nombre: string;
  edad: number
}

export const Formulario = () => {

  const { nombre, email, edad, formulario, handleChange } = useForm<FormData>({
    email: 'n.eedar@hotmail.com',
    nombre: 'Brawer Nuñez',
    edad: 21
  });

  // const { email, nombre, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input className="form-control" 
               type="email"
               name="email" 
               value={ email } 
               onChange={ handleChange }/>
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input className="form-control" 
               type="text" 
               name="nombre"
               value={ nombre }
               onChange={ handleChange }/>
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input className="form-control" 
               type="number" 
               name="edad"
               value={ edad }
               onChange={ handleChange }/>
      </div>

      <pre>{ JSON.stringify( formulario ) }</pre>
    </form>
  )
}
