import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Sobremi = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <div className="hero min-h-screen imgfondo" >
        <div className="hero-overlay">
            </div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold nav pb-52">{t('about.title')}</h1>
            <p className="mb-5 items text-justify   ">{t('about.description')}
            </p>
            <Link to={'/'} ><button  className="btn btn-outline bg-white normal-case">{t('about.button')}</button></Link>
            </div>
        </div>
    </div>

  )
}
export default Sobremi