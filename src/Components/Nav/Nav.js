import React from "react";
import Search from "./Search";
import Menu from "./Menu";

class Nav extends React.Component {
    render() {
        return(
            <header>
            
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">Carousel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                       <Menu/>
                       <Search/>
                    </div>
                    </div>
                </nav>
                
            </header>
        );
    }
}

export default Nav;