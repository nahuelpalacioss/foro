
export const CardItem = ({ title, textArea }) => {
  
    return (


        <div className="col-lg-4 col-md-6 col-sm-12">
            
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{ title }</h5>
                  <p className="card-text"> { textArea } </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
        </div>
    
    )
    

}
