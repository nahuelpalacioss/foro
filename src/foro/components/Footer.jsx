
export const Footer = () => {
  
    return (
        
        <>

            <footer className="text-center text-lg-start" style={{ 
                    backgroundColor: "rgb(135, 81, 172)",
                    position: "fixed",
                    bottom: 0,
                    width: "100%"
                }}>
                <div className="container d-flex justify-content-center py-5">
                  <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
                    <i className="bi bi-linkedin"></i>
                  </button>
                </div>
                <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                  © 2023 Copyright: Nahuel Matias Palacios
                </div>
            </footer>

        </>
  
    )

}
