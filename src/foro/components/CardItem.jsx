
export const CardItem = ({ title, textArea, columClass }) => {
  
    return (

        <div className={
            columClass === 2 ? 
                "col-lg-6 col-md-6 col-sm-12" : 
                "col-lg-4 col-md-6 col-sm-12"
            }
        >
            
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{ title }</h5>
                  <p className="card-text"> { textArea } </p>
                  <a href="#" className="btn btn-primary">Ir al post</a>
                </div>
            </div>
            
        </div>
    
    )
    

}
