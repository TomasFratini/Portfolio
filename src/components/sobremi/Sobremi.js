import { Link } from "react-router-dom"

const Sobremi = () => {


  return (

    <div className="hero min-h-screen imgfondo" >
        <div className="hero-overlay">
            </div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold nav pb-52">Desarrollador de software</h1>
            <p className="mb-5 items text-justify   ">Hi! mi nomre es Tomas Fratini y soy desarrollador de software orientado a la rama del Front end.
            He realizado la carrera de desarrollador front end en CoderHouse; en el mismo realice el curso de Desarrollo Web, JavaScript y React.
            Me encuentro sumamente motivado por aprender nuevas tecnologias y herramientas que me aporten experiencia y conocimiento en el mundo del desarrollo.
            </p>
            <Link to={'/'} ><button  className="btn btn-outline bg-white normal-case">Proyectos</button></Link>
            </div>
        </div>
    </div>

  )
}
export default Sobremi