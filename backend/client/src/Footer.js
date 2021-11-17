import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


function Footer() {
    return (
        <div className='ftr-container'> 
            <div>
 
            </div>
            <div className='ftr-cont-box'>
                <a className='ftr-cont-link' href='https://www.instagram.com/gdsc_hits/'>
                    <InstagramIcon />
                </a>
                <a className='ftr-cont-link' href='https://dschits.in/'>
                    <LanguageIcon />
                </a> 
                <a className='ftr-cont-link' href='https://twitter.com/gdsc_hits?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Agdsc_hits%7Ctwgr%5EeyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&ref_url=https%3A%2F%2Fdschits.in%2F'>
                    <TwitterIcon />
                </a>
            </div>
        </div>
    )
}

export default Footer
