import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const Job = () => {
    const [isLiked, setIsLiked] = useState(false)
    function toggleIsLike() {
        setIsLiked(!isLiked);
      }
        
    return (
        <div>
            <div className='job-container'>
                <h3 className='job-title'>Assistant ressources humaines</h3>
                <div className='tags-container'>
                    <h3 className='contrat-type'><LibraryBooksIcon/>CDD</h3>
                    <h3 className='localisation'><LocationOnIcon />Strasbourg</h3>
                    <h3 className='date-de-poste'><CalendarTodayIcon/>Il y a 2j</h3>
                </div>
                <IconButton className='like-button' onClick={() => toggleIsLike()} >
                {isLiked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </IconButton>
            </div>
        </div>
    );
};

export default Job;