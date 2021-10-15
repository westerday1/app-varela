import Header from "./Header"
import Footer from "./Footer"



const App = () => {
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
            
  
  
        </>
    )
}


export default App