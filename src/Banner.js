import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Search from "./Search";
import "./Banner.css";
import { useHistory } from 'react-router-dom';

function Banner() {
    const history=useHistory();
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">
            <div className="banner__search">
              

                <Button onClick={() => setShowSearch(!showSearch)}
                className="banner__searchButton"
                varient="outlined"> { showSearch ? "Hide" :"Search Dates" }</Button>
                  {showSearch && <Search />}
            </div>
           <div className="banner__info">
               <h1> Get out and Stretch your imagination</h1>
               <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
               <Button onClick={() => history.push('/search')}varient="outlined"> Explore NearBy</Button>
           </div>
            
        </div>
    )
}

export default Banner;
