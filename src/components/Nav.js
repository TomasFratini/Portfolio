import { useTranslation } from 'react-i18next'
import español from '../iconos/espana.png'
import ingles from '../iconos/reino-unido.png'

const Nav = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a href="/" className="btn btn-ghost normal-case text-xl texto">tf</a>
    </div>
    <div className="flex-none ">
      <ul className="menu menu-horizontal p-0">
        <li><a className="btn btn-ghost normal-case text-lg innert nav" href="/sobremi">{t('nav.about')}</a></li>
        <li><a className="btn btn-ghost normal-case text-lg innert nav" href="/contacto">{t('nav.contact')}</a></li>
        <li><a className="normal-case text-lg linkedin" target="blank" href="https://www.linkedin.com/in/tomas-fratini/">@FratiniTomas</a></li>
        <button onClick={() => i18n.changeLanguage("es")}><img  alt='icono' width='30px' src={español}/></button>
        <button onClick={() => i18n.changeLanguage("en")}><img  alt='icono' width='25px' src={ingles}/></button>
      </ul>
    </div>
  </div>
  )
}
export default Nav