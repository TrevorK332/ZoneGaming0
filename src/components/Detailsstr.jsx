import Head from "./Head.jsx";
import {Link} from "react-router-dom";

export default function Detailsstr() {

    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Dragon Creed®</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link> {">"} <Link
                                to="/games">Games</Link> {">"} Game Details</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src="public/assets/images/trending-04.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>Dragon Creed®</h4>
                            <span className="price"><em>$32</em> $22</span>
                            <p></p>
                            <form id="qty" action="#">
                                <input type="qty" className="form-control" id="1" aria-describedby="quantity"
                                       placeholder="1"/>
                                <button type="submit"><i className="fa fa-shopping-bag"></i> ADD TO CART</button>
                            </form>
                            <ul>
                                <li><span>Game ID:</span> Dragon Creed</li>
                                <li><span>Genre:</span> <Link to="/category_strategy">Strategy</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper ">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="description-tab"
                                                        data-bs-toggle="tab" data-bs-target="#description" type="button"
                                                        role="tab" aria-controls="description"
                                                        aria-selected="true">Description
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="description" role="tabpanel"
                                             aria-labelledby="description-tab">
                                            <p>This is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best.</p>
                                        </div>
                                    </div>
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