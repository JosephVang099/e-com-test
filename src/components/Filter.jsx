// import React, { useState, useEffect } from "react";


// import GrapeSoju from '../Img/grapesoju.jpeg';
// import HoneySoju from '../Img/honeysoju.jpeg';
// import OriginalSoju from '../Img/originalsoju.webp';
// import AmericanoSoju from '../Img/americanosoju.jpeg';
// import LycheeSoju from '../Img/lycheesoju.jpeg';
// import CitronSoju from '../Img/citronsoju.jpeg';
// import MangoSoju from '../Img/mangosoju.jpeg';
// import PineappleSoju from '../Img/pineapplesoju.jpeg';
// import PomegranateSoju from '../Img/pomegranatesoju.jpeg';
// import WatermelonSoju from '../Img/watermelonsoju.jpeg';
// import AppleSoju from '../Img/applesoju.jpeg';
// import PeachySoju from '../Img/peachysoju.jpeg';




// const Filter = () => {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);

//   useEffect(() => {
//     setItems([
//         {
//             id: 1,
//             productName: "Grape Soju",
//             price: 10.99,
//             productImage: GrapeSoju,
//         },
//         {
//             id: 2,
//             productName: "Honey Soju",
//             price: 10.99,
//             productImage: HoneySoju,
//         },
//         {
//             id: 3,
//             productName: "Original Soju",
//             price: 8.99,
//             productImage: OriginalSoju,
//         },
//         {
//             id: 4,
//             productName: "Americano Soju",
//             price: 9.99,
//             productImage: AmericanoSoju,
//         },
//         {
//             id: 5,
//             productName: "Lychee Soju",
//             price: 11.99,
//             productImage: LycheeSoju,
//         },
//         {
//             id: 6,
//             productName: "Citron Soju",
//             price: 10.99,
//             productImage: CitronSoju,
//         },
//         {
//             id: 7,
//             productName: "Mango Soju",
//             price: 11.99,
//             productImage: MangoSoju,
//         },
//         {
//             id: 8,
//             productName: "Pineapple Soju",
//             price: 9.99,
//             productImage: PineappleSoju,
//         },
//         {
//             id: 9,
//             productName: "Pomegranate Soju",
//             price: 9.99,
//             productImage: PomegranateSoju,
//           },
//           {
//             id: 10,
//             productName: "Watermelon Soju",
//             price: 10.99,
//             productImage: WatermelonSoju,
//           },
//           {
//             id: 11,
//             productName: "Apple Soju",
//             price: 11.99,
//             productImage: AppleSoju,
//           },
//           {
//             id: 12,
//             productName: "Peachy Soju",
//             price: 9.99,
//             productImage: PeachySoju,
//           },
//     ]);
//   }, []);

//   const filterByPrice = (items) => {
//     const sortedItems = [...items].sort((a, b) => a.price - b.price);
//     setFilteredItems(sortedItems);
//   };

//   return (
//     <div>
//       <button onClick={() => filterByPrice(items)}>Filter by Price</button>
//       {filteredItems.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>{item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Filter;



import React, { useRef, useState, useEffect } from "react";
import ProductsArray from "./ProductsArray";
import "./filter.css"

const Filter = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const inputRef = useRef(null);
    const handleChange = (e) => setSearch(e.target.value);
    useEffect(() => {
        setProducts(ProductsArray.map((product) => ({ ...product, title: product.productName, image: product.productImage })));
    }, []);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    useEffect(() => {
        const filtered = products.filter((product) => {
            const titleMatch = product.productName.toLowerCase().includes(search.toLowerCase());
            const priceMatch = product.price >= minPrice && product.price <= maxPrice;
            return titleMatch && priceMatch;
        });
        setFilteredProducts(filtered);
    }, [products, search, minPrice, maxPrice]);
    return (
        <div>
            <div className="searchBar">
                <label>Search:</label>
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    placeholder="Find Your SOJU"
                    type="text"
                />
            </div>
            <div className="maxnmin">
                <label>Min Price:</label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.max(0, e.target.value))}
                />
                <label>Max Price:</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.min(500, e.target.value))}
                />
            </div>
            <div className="products-container">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-item root">
                            <img src={product.image} alt={product.title} />
                            <div className="product-details">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <span className="product-price">${product.price}</span>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    )
};
export default Filter;