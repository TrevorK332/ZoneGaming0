import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Head from "./Head.jsx";
//
export default function Details() {

   const [game, setGame] = useState([]);

   const {id} = useParams();
   const getSingleGame = async() =>{
       const {data} = await axios.get(`http://127.0.0.1:8000/${id}`);
       setGame(data);
   }

    useEffect(() => {
        getSingleGame();
    }, []);

   // const deleteGame = async(id) => {
   //     await axios.delete(`http://127.0.0.1:8000/${id}`);
   //     Navigate("/games");
   // };

    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>{game.name}</h3>
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
                                <img src={game.image} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>{game.name}</h4>
                            <span className="price"><em>$28</em> {game.amount}</span>
                            <p></p>
                            <form id="qty" action="#">
                                <input type="qty" className="form-control" id="1" aria-describedby="quantity"/>
                                <Link className="btn btn-danger"  to="/products">
                                    <i className="fa fa-shopping-bag"></i> ADD TO CART</Link>
                            </form>
                            <ul>
                                <li><span>Game ID:</span> {game.name}</li>
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
                                            <p>{game.description}</p>
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