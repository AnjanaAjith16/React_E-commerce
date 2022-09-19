import React from "react";
import '../App.css';
import books from '../images/books.jpg';
import apparel from '../images/apparel.png'
import electronics from '../images/electronics.jpg';
import { useNavigate } from "react-router-dom";
import { theme } from "../utils";
import { useSnapshot } from 'valtio';
import '../App.css';

function Home() {
    const snap = useSnapshot(theme);
    const navigate = useNavigate();

    async function goToPage(category) {
        navigate(category.link, { state: { title: category.title } });
    }

    const categories = [
        {
            title: "Fashion",
            image: apparel,
            link: "category/fashion"
        },
        {
            title: "Electronics",
            image: electronics,
            link: "category/electronics"
        },
        {
            title: "Books",
            image: books,
            link: "category/books"
        },
    ];

    return (
        <div className={"pt-1 pb-4 content " + snap.mode} >
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-2 pt-4 justify-content-center">
                {categories.map(category => (
                    <div className={"col"} key={category.title}>
                        <div className={"card h-100 bg-" + snap.mode}>
                            <img src={category.image} className="card-img-top" alt="categoryImage" height={260} onClick={() => { goToPage(category) }} />
                            <div className="card-body">
                                <h5 className="card-title">{category.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
