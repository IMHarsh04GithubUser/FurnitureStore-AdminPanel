import { createContext,useEffect,useState } from "react"

const AdminContext= createContext()

// eslint-disable-next-line react/prop-types
export const AdminProvider = ({children}) => {
  const [theme,settheme] = useState('white')
  const [fonttheme,setfonttheme] = useState('black')
  const [opensidebar,setopensidebar] = useState(false)


  const handlechangetheme = () => {
    settheme((prevtheme)=> (prevtheme==='white'?'black':'white'))
    setfonttheme((prevtheme)=>(prevtheme==='black'?'white':'black'))
  }
  useEffect(() => {
  document.body.style.backgroundColor = theme;
  document.body.style.color = fonttheme
}, [theme,fonttheme]);

const handlesidebar = () => {
  if(opensidebar === false){
    setopensidebar(true)
  }
  
  
}
const handleclosesidebar = () =>{
  if(opensidebar === true){
    setopensidebar(false)
  }
}

  

  return (
    <AdminContext.Provider value={{handlechangetheme,theme,fonttheme,handlesidebar,opensidebar,handleclosesidebar}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContext