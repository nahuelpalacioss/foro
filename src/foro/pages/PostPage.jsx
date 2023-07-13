import { Navigate, useParams } from "react-router-dom"
import { getPostById } from "../helpers";

export const PostPage = () => {
    
    const {postId} = useParams();

    const post = getPostById(postId);

    /*Sacarlo*/

    if(!post) {
        
        return <Navigate to="/" />
    }

    return (
    
        <>

            <div 
                className="container mt-5 mb-3"
            >
                <h1>{ post.title }</h1>

                <div 
                    className="card mt-5 mx-auto" 
                    style={{
                        width: "18rem"
                        }}
                    >
                    <img 
                        className="card-img-top" 
                        alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="mt-5 mb-5">
                    <p>{ post.textArea }</p>
                </div>
            
            </div>
        
        </>
    
    )

}
