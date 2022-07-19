function Nav() {


return (
<div className="navbar flex justify-end fondo text-black pt-5 pr-5 ">
    <div className="flex-1">
      <a href="/" className="btn btn-ghost normal-case text-3xl nav">tf</a>
    </div>
    <li className="btn btn-ghost normal-case text-lg" tabIndex="0">
      <a href="/sobremi" className="innert nav">Sobre mi</a>
    </li>
    <ul className="btn btn-ghost normal-case text-lg ">
      <li><a href="/contacto" className="innert nav">Contacto</a></li>
    </ul>
    <ul className="linkedin normal-case text-lg linkedin ">
      <li><a target="blank" href="https://www.linkedin.com/in/tomas-fratini/">@FratiniTomas</a></li>
    </ul>
</div>
  )
}
export default Nav