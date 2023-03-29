import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp";

export const UseForm = (initalForm, validateForm) => {

  const [form, setForm] = useState(initalForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]:value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
      .post("https://formsubmit.co/ajax/tomas.fratini09@gmail.com", {
        body: form,
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json"
        }
      })
      .then(res => {
        setLoading(false);
        setResponse(true);
        setForm(initalForm);
      })
    } else {
      return;
    }
  };


  return {
    form, 
    errors, 
    loading, 
    response, 
    handleChange, 
    handleBlur, 
    handleSubmit,
  }
}