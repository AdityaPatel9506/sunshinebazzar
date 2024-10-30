import React, { useState } from 'react';
import './ProductCard.css'; // Import the CSS file
import emptyHeart from '../../assets/empty-heart.png'; // Path to your empty heart image
import filledHeart from '../../assets/filled-heart.png'; // Path to your filled heart image

const ProductCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isFavorited, setIsFavorited] = useState(Array(4).fill(false)); // Array to track favorite state

    const toggleFavorite = (index) => {
        const newFavorites = [...isFavorited];
        newFavorites[index] = !newFavorites[index];
        setIsFavorited(newFavorites);
    };

    const products = [
        {
            id: 1,
            title: "Personalized travel jewelry box, small square earring organizer",
            image: "https://i.etsystatic.com/41680084/r/il/f09928/5191407963/il_340x270.5191407963_rurr.jpg",
            rating: "⭐⭐⭐⭐⭐",
            ratingCount: 6412,
            salePrice: "₹ 608",
            originalPrice: "₹ 1,643 (63% off)",
            link: "https://www.etsy.com/in-en/listing/1518307138/personalized-travel-jewelry-box-small?click_key=b986f6e80a4abcf088b7cc4f2d5b1cf862812519%3A1518307138&click_sum=13a2b406&ref=hp_prn-1&pro=1&sts=1"
        },
        {
            id: 2,
            title: "Personalized travel jewelry box, small square earring organizer",
            image: "https://i.etsystatic.com/34379934/c/2000/1589/0/264/il/628644/4796937795/il_340x270.4796937795_qnr6.jpg",
            rating: "⭐⭐⭐⭐⭐",
            ratingCount: 6412,
            salePrice: "₹ 608",
            originalPrice: "₹ 1,643 (63% off)",
            link: "https://www.etsy.com/in-en/listing/1518307138/personalized-travel-jewelry-box-small?click_key=b986f6e80a4abcf088b7cc4f2d5b1cf862812519%3A1518307138&click_sum=13a2b406&ref=hp_prn-1&pro=1&sts=1"
        },
        {
            id: 3,
            title: "Christmas Crafts gift idea",
            image: "https://i.etsystatic.com/22854587/r/il/52320e/5323629959/il_680x540.5323629959_krtx.jpg",
            rating: "⭐⭐⭐⭐⭐",
            ratingCount: 6412,
            salePrice: "₹ 608",
            originalPrice: "₹ 1,643 (63% off)",
            link: "https://www.etsy.com/in-en/listing/1518307138/personalized-travel-jewelry-box-small?click_key=b986f6e80a4abcf088b7cc4f2d5b1cf862812519%3A1518307138&click_sum=13a2b406&ref=hp_prn-1&pro=1&sts=1"
        },
        {
            id: 4,
            title: "Festive Servingware gift idea",
            image: "https://i.etsystatic.com/6146409/c/1980/1572/0/585/il/f54ed0/5515324981/il_680x540.5515324981_4nrh.jpg",
            rating: "⭐⭐⭐⭐⭐",
            ratingCount: 6412,
            salePrice: "₹ 608",
            originalPrice: "₹ 1,643 (63% off)",
            link: "https://www.etsy.com/in-en/listing/1518307138/personalized-travel-jewelry-box-small?click_key=b986f6e80a4abcf088b7cc4f2d5b1cf862812519%3A1518307138&click_sum=13a2b406&ref=hp_prn-1&pro=1&sts=1"
        },
        {
            id: 5,
            title: "Personalized travel jewelry box, small square earring organizer",
            image: "https://i.etsystatic.com/41680084/r/il/f09928/5191407963/il_340x270.5191407963_rurr.jpg",
            rating: "⭐⭐⭐⭐⭐",
            ratingCount: 6412,
            salePrice: "₹ 608",
            originalPrice: "₹ 1,643 (63% off)",
            link: "https://www.etsy.com/in-en/listing/1518307138/personalized-travel-jewelry-box-small?click_key=b986f6e80a4abcf088b7cc4f2d5b1cf862812519%3A1518307138&click_sum=13a2b406&ref=hp_prn-1&pro=1&sts=1"
        },
        // Add more products as needed
    ];

    return (
        <div className='home-product-module'>
            <h2 className='home-product-title'>Popular gifts right now</h2>
            <div className='home-product-container'>
                {products.map((product, index) => (
                    <div
                        className={`product-card ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={product.id}
                    >
                        <a
                            className="product-link"
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={product.title}
                        >
                            <div className="image-container">
                                <img
                                    className="product-image"
                                    alt={product.title}
                                    src={product.image}
                                />
                                {hoveredIndex === index && (
                                    <button className="favorite-button" onClick={() => toggleFavorite(index)}>
                                        <img
                                            src={isFavorited[index] ? filledHeart : emptyHeart}
                                            alt="Favorite"
                                            className="heart-icon"
                                        />
                                    </button>
                                )}
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{product.title}</h3>
                                <span className="product-rating">
                                    <span className="stars">{product.rating}</span>
                                    <span className="rating-count">({product.ratingCount})</span>
                                </span>
                                <div className="price-container">
                                    <p className="sale-price">{product.salePrice}</p>
                                    <p className="original-price">{product.originalPrice}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
