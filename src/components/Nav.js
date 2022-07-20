function Nav() {


return (

  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl tipografia">Tomas Fratini</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a className="btn btn-ghost normal-case text-lg innert nav" href="/sobremi">Sobre mi</a></li>
        <li><a className="btn btn-ghost normal-case text-lg innert nav" href="/contacto">Contacto</a></li>
        <li><a className="normal-case text-lg linkedin" target="blank" href="https://www.linkedin.com/in/tomas-fratini/">@FratiniTomas</a></li>
      </ul>
    </div>
  </div>
  )
}
export default Nav