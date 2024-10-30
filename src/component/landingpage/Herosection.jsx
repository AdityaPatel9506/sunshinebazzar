import React ,{useState} from 'react'
import './Herosection.css'; 
const Herosection = ()=>{

  return(
    
    <div className="trends-section">
    <div className="trends-header">
        <h1>Discover the latest trends from small shops.</h1>
    </div>
    <div className="bubbles-container">
        <ul className="trends-list">
            <li className="trend-item">
                <a href="#" className="trend-link">
                    <div className="trend-image-container">
                        <img 
                            src="https://i.etsystatic.com/44161790/r/il/0e4ab5/5673373264/il_300x300.5673373264_99n5.jpg" 
                            className="trend-image" 
                            alt="Mushroom motifs" 
                        />
                    </div>
                    <p className="trend-text">Mushroom motifs</p>
                </a>
            </li>
            <li className="trend-item">
                <a href="#" className="trend-link">
                    <div className="trend-image-container">
                        <img 
                            src="https://i.etsystatic.com/9910590/r/il/995e7f/6052008930/il_300x300.6052008930_6w6u.jpg" 
                            className="trend-image" 
                            alt="Vintage Table Linens" 
                        />
                    </div>
                    <p className="trend-text">Vintage Table Linens</p>
                </a>
            </li>
            <li className="trend-item">
                <a href="#" className="trend-link">
                    <div className="trend-image-container">
                        <img 
                            src="https://i.etsystatic.com/7814711/c/1973/1973/472/1027/il/1e307f/1677113265/il_300x300.1677113265_djzr.jpg" 
                            className="trend-image" 
                            alt="Farmhouse Tables" 
                        />
                    </div>
                    <p className="trend-text">Farmhouse Tables</p>
                </a>
            </li>
            {/* Add more items here as needed */}
        </ul>
    </div>
</div>
  )
}
export default Herosection;
