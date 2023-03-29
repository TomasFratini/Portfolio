import { Link } from "react-router-dom"

const Sobremi = () => {


  return (

    <div className="hero min-h-screen imgfondo" >
        <div className="hero-overlay">
            </div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold nav pb-52">Desarrollador de software</h1>
            <p className="mb-5 items text-justify   ">Hola! mi nombre es Tomas Fratini y soy desarrollador de software actualemente orientado al Front end.
            Me he certificado en Desarrollo Web, JavaScript, React; Me encuentro sumamente motivado por aprender nuevas tecnologias y herramientas que me aporten experiencia y conocimiento en el mundo del desarrollo.
            En la seccion contacto podras enviarme un mensaje para ponernos en contacto!
            Saludos!!
            </p>
            <Link to={'/'} ><button  className="btn btn-outline bg-white normal-case">Proyectos</button></Link>
            </div>
        </div>
    </div>

  )
}
export default Sobremi