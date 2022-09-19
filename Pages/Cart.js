import React, { useState } from "react";
import { useSnapshot } from 'valtio';
import { cartItems } from "../utils";
import { theme } from "../utils";

function Cart() {
    const [show, setShow] = useState(false);
    const snap = useSnapshot(cartItems);
    const themeSnap = useSnapshot(theme);
    let cartTotal = 0;
    let empty = true;

    return (
        <div className={"pt-2 pb-4 content " + themeSnap.mode}>
            <div className={"py-2 bg-" + themeSnap.mode}>
                <div className="container cols-sm-5" >
                    <h5 >Cart</h5>
                </div>
            </div>
            <div className={"row d-flex justify-content-center align-items-center pt-4 " + themeSnap.mode}>
                {snap.map((s) => {
                    {
                        if (s.id !== "" && !cartItems.includes(s.id)) {
                            empty = false;
                            cartTotal += s.totalPrice;
                            return (
                                <div className="container h-100 " key={s.id + s.title}>
                                    <div className="col">
                                        <div className={"card h-100 mb-4 text-" + themeSnap.color + " bg-" + themeSnap.mode}>
                                            <div className="card-body p-4">
                                                <div className="row align-items-center">
                                                    <div className="col-md-2">
                                                        <img src={s.image} alt={s.title} className="img-fluid" style={{ minHeight: 130, maxHeight: 130, maxWidth: 140 }} />
                                                    </div>
                                                    <div className="col-md-4 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Product</p>
                                                            <p className="lead fw-normal mb-0">{s.title}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                                                            <p className="lead fw-normal mb-0">{s.quantity}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Unit Price</p>
                                                            <p className="lead fw-normal mb-0">&#8377;{s.unitPrice}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-4 pb-2">Total Amount</p>
                                                            <p className="lead fw-normal mb-0">&#8377;{s.totalPrice}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (null)
                        }
                    }
                })}

                {empty ? (
                    <h1 className="centered-content">Cart is Empty</h1>
                ) : (
                    <div className="container h-100 ">
                        <div className="col">
                            <div className={"card h-100 mb-4 text-" + themeSnap.color + " bg-" + themeSnap.mode}>
                                <div className="card-body p-4">
                                    <div className="float-end">
                                        <p className="mb-0 me-4 px-4 d-flex align-items-center">
                                            <span className="medium me-5 text-muted">Order total: </span> <span
                                                className="lead fw-normal mt-4">&#8377; {cartTotal}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary mt-3 mb-3" onClick={() => setShow((show) => true)} disabled={show}>Place the Order</button>
                            <div>
                                {show && <h5 className="mb-4" style={{ color: "green" }}>Order placed successfully</h5>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;
