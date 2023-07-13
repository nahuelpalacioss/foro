import { CardList, Pagination } from "../components";

export const HomePage = () => {
    
    return (

        <div 
            className="container d-flex flex-column align-items-center justify-content-center" 
            style={{ 
                minHeight: "60vh"
            }}
        >

            <CardList />
                
            <Pagination />
                
        </div>

    )
}