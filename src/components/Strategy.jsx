import Head from "./Head.jsx";
import {Link} from "react-router-dom";
//
export default function Strategy() {

    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>CATEGORIES</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link> {">"} <Link to="/shop">Categories</Link> {">"} Strategy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <Link to="/shop" data-filter="*">Show All</Link>
                        </li>
                        <li>
                            <Link to="/adventure" data-filter=".adv">Adventure</Link>
                        </li>
                        <li>
                            <Link className="is_active" to="/strategy" data-filter=".str">Strategy</Link>
                        </li>
                        <li>
                            <Link to="/action" data-filter=".act">Action</Link>
                        </li>
                    </ul>
                    <div className="row trending-box">
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/trending-04.jpg" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>Dragon Creed</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/take.jpg" alt=""/></Link>
                                    <span className="price"><em>$28</em>$20</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>Take Cover</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/triangleStrat.png" alt=""/></Link>
                                    <span className="price"><em>$26</em>$18</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>Triangle Strategy</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/endZone.png" alt=""/></Link>
                                    <span className="price"><em>$32</em>$24</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>End Zone</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 act">
                            <div className="item">
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/thesims.png" alt=""/></Link>
                                    <span className="price"><em>$32</em>$22</span>
                                </div>
                                <div className="down-content">
                                    <span className="category">Strategy</span>
                                    <h4>The SIMS 4</h4>
                                    <Link to="/product"><i className="fa fa-shopping-bag"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Copyright © 2024 ZONE. All rights reserved. &nbsp;&nbsp;</p>
                    </div>
                </div>
            </footer>
        </>
    )
}