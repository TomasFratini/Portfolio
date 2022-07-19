const Footer = () => {

  
  return (
    <footer className="footer footer-center p-10 bg-white text-base-content rounded max-h-full">
      <div className="grid grid-flow-col gap-4">
        <a rel="noreferrer" href="https://github.com/TomasFratini" target="_blank" className="link link-hover tipografia">Git Hub</a> 
        <a href="/contacto" className="link link-hover tipografia">Contacto</a> 
        <a href="/sobremi" className="link link-hover tipografia">Sobre mi</a> 
        <a  href="/"  className="link link-hover tipografia">Proyectos</a>
      </div> 
      <div>
        <p className="tipografia">Copyright © 2022 - Tomas Fratini</p>
      </div>
  </footer>
  )
}
export default Footer