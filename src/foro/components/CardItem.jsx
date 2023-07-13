import { Link } from "react-router-dom"

export const CardItem = ({ title, textArea, columClass, postId }) => {

    return (

        <div className={
            columClass === 2 ? 
                "col-lg-6 col-md-6 col-sm-12" : 
                "col-lg-4 col-md-6 col-sm-12"
            }
        >
            <div 
                className="card" 
                style={{
                    width: "18rem"
                }}
            >
                <div className="card-body">
                  <h5 className="card-title"> { title } </h5>
                  <p className="card-text"> { textArea } </p>
                  <Link to={ `/posts/${ postId }` }>
                    <button className="btn btn-primary"> Ir al post </button>
                  </Link>
                </div>
            </div>
        </div>
    
    )
    

}
