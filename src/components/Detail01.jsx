import Head from "./Head.jsx";
import {Link} from "react-router-dom";

export default function Detail01() {

    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>WarFrame VeilBreaker®</h3>
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
                                <img src="public/assets/images/trending-01.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>WarFrame VeilBreaker®</h4>
                            <span className="price"><em>$28</em> $18</span>
                            <p></p>
                            <form id="qty" action="#">
                                <input type="qty" className="form-control" id="1" aria-describedby="quantity"
                                       placeholder="1"/>
                                <button type="submit"><i className="fa fa-shopping-bag"></i> ADD TO CART</button>
                            </form>
                            <ul>
                                <li><span>Game ID:</span> WarFrame VeilBreaker</li>
                                <li><span>Genre:</span> <Link to="/category_action">Action</Link></li>
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
                                            <p>On a Murex above Deimos, Kahl-175 removes his Narmer Veil.
                                                His distress signal is picked up by Daughter, who lends her support in exchange for information on Narmer's new leader Pazuul.
                                                After freeing captives and escaping, Kahl sets up a base of operations at the Drifter's Camp.
                                                His campaign to free his brothers is only just beginning.</p>
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