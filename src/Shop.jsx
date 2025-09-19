function Shop ({ itemsForSale }) {

    return(
    <div className="products">
        {itemsForSale.map((item => {
            const { id, name, price, image } = item;
            return(
                <div key={id} className="product-card">
                    <img src={image} width="200px" alt="pc"/>
                    <div>
                        <h3>{name}</h3>
                        <p>$ {price}</p>
                    </div>
                </div>)
        }))}
    </div>)
}

export default Shop;