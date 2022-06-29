import React,{useState,useEffect} from 'react'
import {VscArrowUp} from 'react-icons/vsc';
import {AiOutlineDown} from 'react-icons/ai';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [addition, setAddition ] = useState("default message")
    const [displayCarousel, setDisplayCarousel] = useState(false)

    const displayhideCarousel = () => {
        setDisplayCarousel(prev => !prev)
    }   

    useEffect(() => {
        const displayMessage = ["message1", "message2", "message3", "message4"]
        setInterval(() => {
          let randomMessage =Math.floor(Math.random(0,1)*4);
          /* console.log(randomMessage) */
          setAddition(displayMessage[randomMessage])
      },3000)
    }, [])

    return(
        <div>
            <div className="header1">
                I am logo Header
            </div>
            <div className="header2">
                {displayCarousel ? 
                <div className="arrowClass">
                  <VscArrowUp onClick={displayhideCarousel}/>
                </div> :
                <div className="arrowClass">
                    <AiOutlineDown onClick={displayhideCarousel}/>
                    <span>{addition}</span>
                </div> 
                }
        
                {displayCarousel && 
                <div className="header-slider">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p>MIX AND MATCH BRACELETS</p>
                        <h1>BUY 2 FOR $45 OR 3 FOR $49</h1>
                        <p>SELECT STYLES | DISCOUNT REFLECTED IN BAG</p>
                        <Link to="/">SHOP NOW</Link>
                        <Link to="/">DETAILS</Link>
                      </div>
                      <div className="carousel-item">
                        <p>2 MIX AND MATCH BRACELETS 2 </p>
                        <h1>2 BUY 2 FOR $45 OR 3 FOR $49</h1>
                        <p>2 SELECT STYLES | DISCOUNT REFLECTED IN BAG</p>
                        <Link to="/">2 SHOP NOW</Link>
                        <Link to="/">2 DETAILS</Link>
                      </div>
                      <div className="carousel-item">
                        <p>3 MIX AND MATCH BRACELETS 2 </p>
                        <h1>3 BUY 2 FOR $45 OR 3 FOR $49</h1>
                        <p>3 SELECT STYLES | DISCOUNT REFLECTED IN BAG</p>
                        <Link to="/">3 SHOP NOW</Link>
                        <Link to="/">3 DETAILS</Link>
                      </div>
                    </div>
                    <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </Link>
                  </div>
                </div>
                }
            </div>
            <div className = "header3 navbar">
                <ul>
                    <li>Nav1</li>
                    <li>Nav2</li>
                    <li>Nav3</li>
                </ul>
            </div>
        </div>
    )
}
export default Header