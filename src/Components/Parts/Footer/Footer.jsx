import React from 'react'
import '../Footer/Footer.css'
import { FaRegCopyright } from 'react-icons/fa'
import { BsLinkedin } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io"


export default function Footer() {
    return (
        <div className="footer-main bg-dark" id='footer-nav'>
            <div className="footer-main2">
                <h5>Contacts</h5>
                <ul>
                    <li><a href="https://www.linkedin.com/in/kevin-jk-689875238/" target='_blank'><BsLinkedin /></a></li>
                    <li><a id='gmail-icon' href="mailto:johnkevin.csjk@gmail.com" target='_blank'><BiLogoGmail /></a></li>
                    <li><a id='whats_app' href="https://wa.me/+918056134047" target='_blank'><IoLogoWhatsapp /></a></li>
                </ul>
            </div>
            <p>Copyright <FaRegCopyright /> 2024 Kings Wear. All rights reserved.</p>
        </div>
    )
}
