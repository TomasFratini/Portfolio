import { useEffect } from "react"
import { useState } from "react"
import { proyectList } from "../../Data/ProyectList"
import Item from "./Item"

function List() {

    const [item, setItem] = useState([])

    useEffect(() => {
      getItem()
    },[])
    
    const getItem = () => {
        const itemPromise = new Promise ((resolve, reject) =>{
            resolve(proyectList)
        })

        itemPromise.then (i => {
            setItem(i)
        })
    }


  return (
    
    <div className='pl-40 mb-20'>
        {item.map(p => <Item key={p.id} item={p}/>)}
    </div>

  )
}
export default List