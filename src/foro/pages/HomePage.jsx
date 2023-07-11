import { Navbar, CardList, Pagination, Footer } from "../components";

export const HomePage = () => {
  
    return (

        <>

            <Navbar />
            
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh"}}>

                <CardList />
                
                <Pagination />
                
            </div>

            <Footer />
        
        </>

    )
}