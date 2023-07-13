import { Link } from "react-router-dom";
import logo from "../assets/img_logo.png";

export const Navbar = () => {
  
    return (
    
        <nav 
            className="navbar navbar-light justify-content-between"
            style={{ 
                backgroundColor: "rgb(175, 116, 191)" 
                }}
            >
            <a className="navbar-brand">
                <img 
                    src={ logo } 
                    alt="logo" 
                    style={{
                        width: "80px",
                        height: "80px"
                    }} 
                />
            </a>
            <form className="form-inline">
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                />
                <Link to="/createPost">
                    <button 
                        className="btn text-warning my-2 my-sm-0" 
                        style={{ 
                            backgroundColor: "blueviolet" 
                        }}
                    > Crear Post </button>
                </Link>
            </form>
        </nav>
        
    )

}
