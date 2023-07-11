
export const Navbar = () => {
  
    return (
    
        <nav className="navbar navbar-light bg-primary justify-content-between">
            <a className="navbar-brand">Foro :)</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
        
    )

}
