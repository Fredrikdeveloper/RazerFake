import React from 'react'
import {useState , useEffect} from 'react'
import { createContext } from 'react'
const Context = createContext()

const Api = "https://razer-api.onrender.com/devices"

const ContextProvider = ({children}) => {
    const [array, setArray] = useState([])
    const getApi = async () => {
      const res = await fetch(Api)
      const data = await res.json()
      const drinks = data
      setArray(drinks)
 console.log()
    }
    useEffect(() => {
      getApi()
    }, [])
 
     return (
      <Context.Provider value={{array}}>
         {children}
      </Context.Provider>
   )
 }
 
 export {ContextProvider, Context}





