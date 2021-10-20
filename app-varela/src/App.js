import {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"



const App = () => {
    
    

    
    const [contador,setContador] = useState(0)
    const  [resta, setResta] = useState(0)


    const sumarContador = () => {
       
        setContador(contador + 1)
    }
const restarContador =()=>{
    setResta(resta - 1)
}
    return (
        <>
            <Header
                nombre="jose"
                apellido="varela"
                edad={23}
                links={["link1"]}
                callback={()=>{console.log("esperando pedido")}}
            />
            <Footer />
            <button onClick={sumarContador}>aumentar</button>
            
            <button onClick={restarContador}>restar</button>
            <p>El contador va : {resta + contador} </p>
          
        </>
    )
}

export default App