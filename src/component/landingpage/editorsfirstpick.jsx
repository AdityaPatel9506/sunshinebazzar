import React, { useState } from 'react';
import './editorsfirstpick.css';
import arrow from '../../assets/icons8-right-arrow-50.png';
import emptyHeart from '../../assets/empty-heart.png'; // Path to your empty heart image
import filledHeart from '../../assets/filled-heart.png'; // Path to your filled heart image

const EditorsFirstPick = () => {
    const products = [
        {
            title: "Wolf Costume for Kids",
            price: "3,664",
            imageSrc: "https://i.etsystatic.com/8774385/r/il/b1c913/565518272/il_680x540.565518272_kfem.jpg",
            url: "https://www.example.com/product-1"
        },
        {
            title: "Ghost Costume",
            price: "2,999",
            imageSrc: "https://i.etsystatic.com/24719125/c/2000/1589/0/247/il/190a0f/4157107940/il_680x540.4157107940_eh8l.jpg",
            url: "https://www.example.com/product-2"
        },
        {
            title: "Vampire Costume",
            price: "4,199",
            imageSrc: "https://i.etsystatic.com/34523747/r/il/132fab/6364139483/il_680x540.6364139483_33mt.jpg",
            url: "https://www.example.com/product-3"
        },
        {
            title: "Witch Hat",
            price: "1,299",
            imageSrc: "https://i.etsystatic.com/8379467/r/il/a6fd6b/5190208722/il_300x300.5190208722_pjb3.jpg",
            url: "https://www.example.com/product-4"
        }
    ];

    // State to track wishlist items
    const [wishlist, setWishlist] = useState({});

    const toggleWishlist = (index) => {
        setWishlist(prev => ({
            ...prev,
            [index]: !prev[index] // Toggle the heart state
        }));
    };

    return (
        <div id='editors-first-pick'>
            <div className='editors-first-pick-card editors-first-pick-card-anchor'>
                <p>Editors’ Picks</p>
                <h1>Halloween Shop</h1>
                <div id='editors-first-pick-a'>
                    <a href="#">See more</a>
                    <img src={arrow} alt="" />
                </div>
            </div>

            {products.map((product, index) => (
                <div key={index} className="editors-first-pick-product-card">
                    <img src={product.imageSrc} alt={product.title} className="editors-first-pick-product-image" />

                    {/* Wishlist Icon */}
                    <button
                        className="wishlist-icon-button"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent event bubbling to the parent link
                            toggleWishlist(index); // Toggle wishlist state
                        }}
                    >
                        <img
                            src={wishlist[index] ? filledHeart : emptyHeart}
                            alt="Wishlist Icon"
                            className="wishlist-icon"
                        />
                    </button>

                    {/* Price */}
                    <p className="editors-first-pick-product-price">₹ {product.price}</p>
                </div>
            ))}

<div className='editors-first-pick-card editors-first-pick-card-anchor'>
                <p>Get spooky-season picks at scary good prices.</p>
               
               
            </div>
        </div>
    );
};

export default EditorsFirstPick;
