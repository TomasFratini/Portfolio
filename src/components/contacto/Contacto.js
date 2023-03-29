import { useTranslation } from "react-i18next";
import Message from "./Message";
import { UseForm } from "./UseForm"

const initalForm = {
  email: "",
  mensaje: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regexMensaje = /^.{1,255}$/;

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto"
  }

  if (!form.mensaje.trim()) {
    errors.mensaje ="El campo 'Mensaje' es requerido"
  }else if (!regexMensaje.test(form.mensaje.trim())) {
    errors.mensaje = "El campo 'Mensaje' no debe exceder los 255 caracteres"
  }

  return errors
};

let styles = {
  color: "#dc3545",
}

const Contacto = () => {

  const [t, i18n] = useTranslation("global");

  const {form, 
    errors, 
    loading, 
    response, 
    handleChange, 
    handleBlur, 
    handleSubmit,
  } = UseForm(initalForm, validationsForm)



  return (

  <div className="border border-base-300">
    <div className="flex justify-center px-4 py-16 border-t border-base-300 bg-base-200">
      <div className="w-96">
        <h1 className="text-3xl text-black tipografia pb-10">{t('contact.title')}</h1>
        <form onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text tipografia text-xl">{t('contact.title-2')}</span>
          </label>
          <label className="input-group input-group-vertical">
            <input 
            value={form.email}
            onBlur={handleBlur} 
            onChange={handleChange} 
            type="email" 
            name="email" 
            placeholder="info@site.com"
            className="input input-bordered" 
            required/>
            {errors.email && <p className="tipografia" style={styles}>{errors.email}</p>}
          </label>
          <label className="label ">
            <span className="label-text text-xl tipografia ">{t('contact.title-3')}</span>
          </label>
          <label className="input-group input-group-vertical">
            <textarea
            value={form.mensaje}
            onBlur={handleBlur} 
            onChange={handleChange}
            type="text"
            name="mensaje"
            placeholder=""
            className="input input-bordered h-24"
            required/>
            {errors.mensaje && <p className="tipografia" style={styles}>{errors.mensaje}</p>}
          </label>
          <div className="flex justify-center pt-5">
            <button type="submit" className="btn bg-base-200 text-black normal-case">{t('contact.send')}</button>
          </div>
        </form>
        {response && <Message/>}
      </div>
    </div>
  </div>
  )
}
export default Contacto