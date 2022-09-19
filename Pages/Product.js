import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSnapshot } from "valtio";
import { addItem , theme } from "../utils";

function Product() {
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const snap = useSnapshot(theme);
    const location = useLocation(); 
    const product = location.state;
    const unitPrice = product.price;
    const [totalPrice, setTotalPrice] = useState(unitPrice);

    useEffect(() => {
        setTotalPrice(quantity * unitPrice);
    }, [quantity, unitPrice]);


    return (
        <div className={"pt-2 pb-4 content " + snap.mode }>
            <div className={"py-2 py-4 bg-" + snap.mode}>
                <div className="container" >
                    <h5>Product Detail</h5>
                </div>
            </div>
                <div className="col d-flex justify-content-center" key={product.id} id={product.id} >
                    <div className={"card text-center h-100 w-100 text-" + snap.color + " bg-" + snap.mode} >
                        <img src={product.image} className="card-img-top mx-auto d-block py-3" alt="Img" height={260} style={{ maxWidth: 300, alignItems: "center" }} />
                        <div className="card-body">
                            <h4 className="card-text">{product.title}</h4>
                            <h4>&#8377;{product.price}</h4>
                            <p className="card-text">{product.short_description}</p>
                            <div className="col-sm-2 col-centered ">
                                <div className="input-group input-group-sm-3">
                                    <span className="input-group-btn ">
                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" onClick={() => quantity > 1 && (setQuantity(quantity - 1))} >
                                            <span className="glyphicon glyphicon-minus"></span>
                                        </button>
                                    </span>
                                    <span>
                                        <input type="number" id="quantity" name="quantity" className="form-control input-number" value={quantity} min="1" max="5" onInput={e => { setQuantity(Number(e.target.value)) }} /></span>
                                    <span className="input-group-btn">
                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" onClick={() => quantity < 5 && (setQuantity(quantity + 1))} >
                                            <span className="glyphicon glyphicon-plus"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <h4>Total Price : &#8377;{totalPrice}</h4>
                            <button className="btn btn-primary mt-3" onClick={() => { setShow((show) => true); addItem(product, quantity, totalPrice) }}>Add to Cart</button>
                            {show && <h5 style={{ color: "green" }}>Item added successfully</h5>}
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Product;
