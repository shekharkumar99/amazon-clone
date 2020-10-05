import React from 'react'
import "./Home.css";
import Product from"./Product.js";

function Home() {
    return (
        <div className ="home">
            <img className="home_image"
            src="https://cdn.onebauer.media/one/media/5ecd/034a/d192/6f65/c245/afbd/PrimeDay-Empire-Banner.png?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
            alt =""
            />
            <div className="home_row">
                <Product
            id="12345"
            title = "The Watch"
            price={11.39}
            rating={4}
            image = "https://www.roudstudio.com/images/works/product-photo/img01.jpg" />
             <Product
            id="12345"
            title = "The Watch"
            price={11.39}
            rating={4}
            image = "https://www.roudstudio.com/images/works/product-photo/img01.jpg" />
            </div>
            
        </div>
    )
}

export default Home
