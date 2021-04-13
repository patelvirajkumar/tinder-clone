import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
           <IconButton>
                <PersonIcon fontSize="large" className= "header_icon"/>
           </IconButton>

           <img className="header_logo" 
                src="data:image/png;base64,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"
                alt=""/>

            <IconButton>
                <ForumIcon  fontSize="large" className= "header_icon"/>
           </IconButton>
            
        </div>
    )
}

export default Header
