const Footer = () => {

  
  return (
    <footer className="footer footer-center p-10 bg-white text-base-content rounded max-h-full">
      <div className="grid grid-flow-col gap-4">
        <a rel="noreferrer" href="https://github.com/TomasFratini" target="_blank" className="link link-hover">Git Hub</a> 
        <a href="/contacto" className="link link-hover">Contacto</a> 
        <a href="/sobremi" className="link link-hover">Sobre mi</a> 
        <a  href="/"  className="link link-hover">Proyectos</a>
      </div> 
      <div>
        <p>Copyright © 2022 - Tomas Fratini</p>
      </div>
  </footer>
  )
}
export default Footer