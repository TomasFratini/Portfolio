import { Link } from "react-router-dom"

const Sobremi = () => {


  return (

    <div className="hero min-h-screen imgfondo" >
        <div className="hero-overlay">
            </div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-xl font-bold items">Hola mi nombre es Tomas</h1>
            <p className="mb-5 items">Hi! Soy desarrollador de software orientado al area del Front end. </p>
            <Link to={'/'} ><button  className="btn btn-outline">Proyectos</button></Link>
            </div>
        </div>
    </div>

  )
}
export default Sobremi