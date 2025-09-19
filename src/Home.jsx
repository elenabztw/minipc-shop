import { useState } from "react";
import { data } from "./data";
import Shop from "./Shop";
import Buttons from "./Buttons";

function Home() {

    const [products, setProducts] = useState(data);

    const chosenProducts = (searchTerm) => {
        if (searchTerm === "all") {
            setProducts(data);
        }
        else {
        const newProducts = data.filter(element => 
            element.searchTerm === searchTerm);
            setProducts(newProducts);
    }
};

    return (
        <div>
            <div className="container">
                <h2 className="header">Welcome to the world of space-saving Mini PCs</h2>  
            </div>
                <Buttons filteredProducts = {chosenProducts}/>
                <Shop itemsForSale = {products} />
                
            <div className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Elena B web developer</h3>
                        <p>All images, prices and information are for demo purposes only</p> <br/>
                        <div className="fb">
                            <a href="https://www.linkedin.com/in/elena-b-tw/"><i className="bx bxl-linkedin-square"></i></a>
                            <a href=""><i className="bx bxl-instagram"></i></a>
                            <a href="https://github.com/elenabztw"><i className="bx bxl-github"></i></a>
                        </div>
                    </div>
                </div>
                <p className="credit">created by Elena B</p>
            </div>
        </div>
    )
}

export default Home;