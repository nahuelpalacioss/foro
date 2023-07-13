import { useSelector } from "react-redux"
import { CardItem } from "./CardItem"

export const CardList = () => {

    const { posts } = useSelector(state => state.foro);

    return (

        <div className="row">
        
            {posts.map((element) => (
                
                <CardItem 
                    key={ element.id } 
                    title={ element.title } 
                    textArea={ element.textArea }
                    columClass={ posts.length }
                    postId={ element.id }
                />))
            }
        
        </div>
            
    )

}
