import { useForm } from '../hooks/useForm';

export const FormularioCiudad = () => {

  const { formulario, handleChange } = useForm({
    postal: 'ABC14001',
    ciudad: 'Chiclayo'
  });

  const { postal, ciudad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Código postal:</label>
        <input className="form-control" 
               type="text"
               name="postal" 
               value={ postal } 
               onChange={ handleChange }/>
      </div>

      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input className="form-control" 
               type="text" 
               name="ciudad"
               value={ ciudad }
               onChange={ handleChange }/>
      </div>

      <pre>{ JSON.stringify( formulario ) }</pre>
    </form>
  )
}
