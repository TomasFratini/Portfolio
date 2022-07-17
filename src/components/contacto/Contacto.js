const Contacto = () => {




  return (

  <div class="mockup-window border border-base-300">
    <div class="flex justify-center px-4 py-16 border-t border-base-300">

    <div className="">
      <h1>Contacto</h1>
      <p>Envieme un mensaje</p>
      <form>
      <label className="label">
        <span className="label-text">Su correo electronico</span>
        </label>
        <label className="input-group input-group-vertical">
        <input type="text" placeholder="info@site.com" class="input input-bordered" />
      </label>
      <label className="label">
        <span className="label-text">Mensaje</span>
        </label>
        <label className="input-group input-group-vertical">
        <input type="text" placeholder="" class="input input-bordered" />
      </label>

      <button class="btn">Wide</button>

      </form>
    </div>
    </div>
  </div>
  )
}
export default Contacto