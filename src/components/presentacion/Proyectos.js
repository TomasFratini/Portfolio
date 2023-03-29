import List from "./List"
import perfil from "./perfil.png"

function Proyectos() {
  return (
  <>
  <div className="grid justify-items-stretch">
    <div className="hero min-h-screen bg-base-200 max-w-7xl justify-self-end ">
      <div className="hero-content flex-col lg:flex-row ">
        <img alt="img" src={perfil} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold tipografia">Desarrollador Front end</h1>
          <p className="py-6 texto">Desarrollador de Software, de Cordoba-Argentina</p>
        </div>
      </div>
    </div>
    
  </div>
      <List/>
  </>

  )
}
export default Proyectos