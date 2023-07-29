import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'
import Routes from '../routes/Routes'


const Layout = () => {
   
    return (
        <Router>
         <Route render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Routes />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )} /> 
        </Router>
    )

}

export default Layout
