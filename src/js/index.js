//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";


function NavBar(props){
    return (<nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between py-3 px-lg-4">
              <a className="navbar-brand" href="#">Navbar</a>
              <ul className="nav navbar-nav navbar-right">
                <li><a className="nav-link" href="#">Home</a></li>
                <li><a className="nav-link" href="#">About</a></li>
                <li><a className="nav-link" href="#">Services</a></li>
                <li><a className="nav-link" href="#">Contact</a></li>
              </ul>
           </nav>);
}

function Jumbotron(){
    return(
        <div class="jumbotron jumbotron-fluid bg-light">
            <div className="container py-3 px-lg-4">
                <h1 class="display-4">A Warm Welcome</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis vehicula tempor. Vivamus maximus ut quam ac gravida. Sed vel ullamcorper purus. Donec nec consectetur orci.</p>
                <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
  
        </div>
    )
}

function Card(){
    return(

            <div className="row justify-content-md-center">
                <div className="col py-3 px-lg-4">
                    <img className="card-img-top" src="https://picsum.photos/id/10/367/267" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title py-3 px-lg-4">Card title</h5>
                        <p className="card-text py-3 px-lg-4">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className="btn justify-items-center py-3 px-lg-4">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col py-3 px-lg-4">
                <img className="card-img-top" src="https://picsum.photos/id/10/367/267" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title py-3 px-lg-4">Card title</h5>
                        <p className="card-text py-3 px-lg-4 ">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className="btn justify-items-center py-3 px-lg-4">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            
                <div className="col py-3 px-lg-4">
                <img className="card-img-top" src="https://picsum.photos/id/10/367/267" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title py-3 px-lg-4">Card title</h5>
                        <p className="card-text py-3 px-lg-4">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className="btn justify-items-center py-3 px-lg-4">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div className="col py-3 px-lg-4">
                <img className="card-img-top" src="https://picsum.photos/id/10/367/267" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title py-3 px-lg-4">Card title</h5>
                        <p className="card-text py-3 px-lg-4">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className="btn justify-items-center py-3 px-lg-4">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                 
                    </div>
                </div>
            </div>
        
    )
}

function Footer(){
    return( 
            <footer class="text-center mt-auto py-3 bg-dark text-light">
                © 2022 Copyright: 
                <a class="text-light" href="https://4geeks.com/">4geeks</a>
            </footer>
    )
}

function MyApp(){
    return(
        <body className="d-flex flex-column min-vh-100">
            <div className="container-fluid ">
                <NavBar/>
                <div className="container px-lg-5 ">               
                    <Jumbotron/>
                    <Card/>
                </div>
            </div>
            <Footer/>
        </body>

    )
}

//render your react application
ReactDOM.render(<MyApp />, document.querySelector("#app"));
