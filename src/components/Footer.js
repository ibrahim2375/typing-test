import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
import footerLogo from '../img/logo.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import contactData from '../dataForContact.json';
function Footer() {
    return (
        <footer id="footer">
            <div className="footerHead">
                <img src={footerLogo} alt="logo" />
                <div className="siteInfo">
                    {contactData.map((data) => {
                        return (
                            <div className="list" key={data.id}>
                                <div><MailOutlineIcon className="icon" /> <p>{data.mail}</p></div>
                                <div><TelegramIcon className="icon" /><p>{data.telegram}</p></div>
                                <div><WhatsAppIcon className="icon" /><p>{data.whatsapp}</p></div>
                                <div><LanguageIcon className="icon" /><a href={data.website} >webSite</a></div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="siteServices">
                <div className="servicesTitle">
                    <p>Learn Touch typing Online .</p>
                    <p>Proper hand posture guide.</p>
                    <p>How do you type faster?</p>
                    <p>It's a game</p>
                </div>

                <Link to='/contact' className="btn btn-cont"> Contact Us</Link>

            </div>

        </footer>
    )
}

export default Footer