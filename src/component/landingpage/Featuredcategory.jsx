import React from 'react';
import './Featuredcategories.css'; // Import the CSS file

const CategoryItem = ({ link, imageUrl, title }) => (
    <li className="category-item">
        <div className="category-listing">
            <a href={link} className="category-link">
                <div className="image-container">
                    <img alt={title} src={imageUrl} className="rounded-image" />
                </div>
                <p className="category-name" title={title}>
                    {title}
                </p>
            </a>
        </div>
    </li>
);

const Featuredcategory = () => {
    const categories = [
        {
            link: "https://www.etsy.com/in-en/search?explicit=1&q=pendant+necklaces&ref=hp_top_in_taxo_categories-1",
            imageUrl: "https://i.etsystatic.com/34379934/c/1652/1652/77/348/il/c266fb/6084738158/il_300x300.6084738158_e1pd.jpg",
            title: "Pendant Necklaces"
        },
        {
            link: "https://www.etsy.com/in-en/search?explicit=1&q=signs&ref=hp_top_in_taxo_categories-2",
            imageUrl: "https://i.etsystatic.com/32449061/c/1459/1459/1114/362/il/f515a3/6362798735/il_300x300.6362798735_n5v6.jpg",
            title: "Signs"
        },
        {
            link: "https://www.etsy.com/in-en/search?explicit=1&q=digital+prints&ref=hp_top_in_taxo_categories-3",
            imageUrl: "https://i.etsystatic.com/23086333/c/2000/2000/0/0/il/0d9318/5306882900/il_300x300.5306882900_9e2x.jpg",
            title: "Digital Prints"
        },
        {
            link: "https://www.etsy.com/in-en/search?explicit=1&q=digital+prints&ref=hp_top_in_taxo_categories-4",
            imageUrl: "https://i.etsystatic.com/25168585/c/1800/1800/298/0/il/e0da11/5460954945/il_300x300.5460954945_9tu4.jpg",
            title: "Digital Prints"
        },
        {
            link: "https://www.etsy.com/in-en/search?explicit=1&q=wall+decor&ref=hp_top_in_taxo_categories-5",
            imageUrl: "https://i.etsystatic.com/22477312/r/il/5ac7d9/4318918442/il_300x300.4318918442_ms3e.jpg",
            title: "Wall Decor"
        },
        {
            link: "https://www.etsy.com/in-en/search?explicit=1&q=signs&ref=hp_top_in_taxo_categories-6",
            imageUrl: "https://i.etsystatic.com/23824347/r/il/67d7f1/5200553974/il_300x300.5200553974_4yjs.jpg",
            title: "Signs"
        },
    ];

    return (
        <div className="category-module">
            <h2 className='category-title'>Featured categories</h2>
            <ul className="category-container">
                {categories.map((category, index) => (
                    <CategoryItem
                        key={index}
                        link={category.link}
                        imageUrl={category.imageUrl}
                        title={category.title}
                    />
                ))}
            </ul>
      
            
        </div>
        
    );
};

export default Featuredcategory;
