import { useTranslation } from "react-i18next";
import List from "./List"
import perfil from "./perfil.png"

function Proyectos() {

  const [t, i18n] = useTranslation("global");

  return (
  <>
  <div className="grid justify-items-stretch">
    <div className="hero min-h-screen bg-base-200  max-w-7xl justify-self-end ">
      <div className="hero-content flex-col lg:flex-row ">
        <img alt="img" src={perfil} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold tipografia">{t('projects.title')}</h1>
          <p className="py-6 texto">{t('projects.title-2')}</p>
        </div>
      </div>
    </div>
    
  </div>
      <List/>
  </>

  )
}
export default Proyectos