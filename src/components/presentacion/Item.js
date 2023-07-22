import { useTranslation } from "react-i18next";

function Item(props) {

    const {name, description, img, web, skil1, skil2, skil3, skil4, skil5} = props.item

    const [t, i18n] = useTranslation("global");

  return (
  <div className="flex flex-col w-full border-white pt-8 bg-base-200 rounded-b-lg max-w-7xl justify-self-end"><font></font>
    <div className="h-92 card rounded-box place-items-center m-1 bg-base-200">
      <div className="card card-side shadow-xl bg-base-200"><font></font>
        <figure><img className=" max-w-full h-auto img" src={img} alt="item"/></figure><font></font>
        <div className="card-body"><font></font>
          <h2 className="card-title ">{name}</h2><font></font>
          <p className="text-xl items">{description}</p><font></font>
          <div className="card-actions justify-end"><font></font>
          <div className="badge badge-outline items ">{skil1}</div> 
          <div className="badge badge-outline items">{skil2}</div>
          <div className="badge badge-outline items">{skil3}</div>
          <div className="badge badge-outline items">{skil4}</div>
          <div className="badge badge-outline items">{skil5}</div>
          <a target="blank" href={web}><button className="btn bg-white normal-case text-black items">{t('button.visit')}</button></a>
        </div><font></font>
        </div><font></font>
      </div>
    </div><font></font>
  </div>





  )
}
export default Item
 