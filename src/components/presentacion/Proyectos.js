import List from "./List"
import perfil from "./perfil.png"

function Proyectos() {
  return (
    <>
      <div className="pl-40 m-0 ">
        <h1 className="text-6xl font-bold nombre ">Tomas Fratini</h1>
        <div className="hero min-h-screen flex justify-between bg-base-200 shadow-inner ">
          <div className="hero-content  ">
            <img alt="img " src={perfil} className="max-w-sm rounded-lg shadow-2xl rounded-none ml-20" />
            <div className="flex-column justify-end mt-96 ">
              <h3 className="font-bold text-xl texto">Desarrollador Front end</h3>
              <p className=" texto">Soy un desarrollador web y de software de Cordoba, Argentina</p>
            </div>
          </div>
        </div>
      </div>
        <List/>
    </>

  )
}
export default Proyectos