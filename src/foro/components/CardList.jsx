import { CardItem } from "./CardItem"


export const CardList = () => {
    
    return (
    
        <div className="row">
        
            {[1, 2, 3].map((element) => (
                
                <CardItem key={ element } />
            
            ))}
        
        </div>
            
    )

}
