import { useDispatch, useSelector } from "react-redux"
import { CardItem } from "./CardItem"
import { resetReducer } from "../../store/foro/foroSlice";
import { useEffect } from "react";

export const CardList = () => {

    const { posts, isSaving } = useSelector(state => state.foro);

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(resetReducer())
      
    }, [isSaving])
    
    return (

        <div className="row">
        
            {posts.map((element) => (
                
                <CardItem 
                    key={ element.title } 
                    title={ element.title } 
                    textArea={ element.textArea }
                />
            
            ))}
        
        </div>
            
    )

}
