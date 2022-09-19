import React, { useState } from "react";
import { electronics } from "../data";
import { Link, useLocation } from "react-router-dom";
import { books } from "../BooksData";
import axios from "axios";
import { useQuery } from "react-query";
import { theme } from "../utils";
import { useSnapshot } from 'valtio';
import "../App.css";

function Products() {
    const [productsData, setProductsData] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const { state } = useLocation();
    const category = state.title;
    var showButton = false;
    const snap = useSnapshot(theme);

    const getApiData = async () => {
        const results = await axios.get("https://fakestoreapi.com/products");
        setProductsData(results.data);
    };

    const isFashion = ()=> {
        if (category.match("Fashion")){
            showButton = true;
            return true;
        }
        else
            return false;
    }

    const { error, isError, isRefetching , refetch } = useQuery('fashionData', getApiData, {
        refetchOnWindowFocus: false,
        enabled : isFashion()
    });

    var products = [];

    if (category.match("Electronics")) {
        products = electronics;
    } else if (category.match("Books")) {
        products = books;
    }
    else if (category.match("Fashion")) {
        products = productsData;
        if(isError) console.log("Error : ",error.message);
        if(isRefetching) console.log("Refetching data...");        
    }

    return (
         <div className={"pt-2 pb-4 content "+snap.mode} >
            <div className={"py-2 bg-" +snap.mode}>
                <div className="container" >
                    <h5 >Categories / {category}</h5>
                    <div className="col-xs-4">
                        <input className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearchItem((searchItem) => e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning" onClick={refetch} disabled={!showButton}>Refresh</button> 
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 mx-3 pt-4 py-3" >
                {products.filter((product) => {
                    if (searchItem === "") {
                        return product;
                    }
                    if (product.title.toLowerCase().includes(searchItem.toLowerCase())) {
                        return product;
                    }
                }).map(product => (
                    <div className="col " key={product.id} id={product.id}>
                        <div className={"card h-100 text-" + theme.color + " bg-" + snap.mode}>
                            <Link to={`${product.id}`} state={ product }  >
                                <img src={product.image} className="card-img-top" alt={product.title} height={260} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-text">{product.title}</h5>
                                <h5>&#8377;{product.price}</h5>
                                {/* <p className="card-text">{product.short_description.slice(0, 50)}</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default Products;
