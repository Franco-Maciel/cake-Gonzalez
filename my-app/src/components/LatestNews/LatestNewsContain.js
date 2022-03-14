import { useEffect, useState } from "react"
import { db } from '../../firebase/config';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { LatestNews } from "./LatestNews"
import { useParams } from 'react-router-dom'
import {Loader} from '../Loader/Loader';


export const LatestNewsContain = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {novedadId} = useParams()
    
    useEffect( () => {
        setLoading(true)

      // 1.- armar referencia
      const productosRef = collection(db, 'productos')
      const q = novedadId ? query(productosRef, where("Novedad", "==", novedadId)) : query(productosRef, orderBy("stock"))
      // 2.- pedir esa ref
      getDocs(q)
          .then((resp) => {
              setProductos( resp.docs.map((doc) => {
                  return {
                      id: doc.id,
                      ...doc.data()
                  }
              }))
          })
          .finally(() => {
              setLoading(false)
          })

  }, [novedadId])


    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <LatestNews productos={productos}/>
                        
                      
            } 
        </>
    
    )
         
}