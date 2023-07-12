import { useDispatch, useSelector } from "react-redux"
import { CardItem } from "./CardItem"
import { resetReducer } from "../../store/foro/foroSlice";
import { useEffect } from "react";

export const CardList = () => {

    const { posts } = useSelector(state => state.foro);

    return (

        <div className="row">
        
            {posts.map((element) => (
                
                <CardItem 
                    key={ element.title } 
                    title={ element.title } 
                    textArea={ element.textArea }
                    columClass={ posts.length }
                />
            
            ))}
        
        </div>
            
    )

}
