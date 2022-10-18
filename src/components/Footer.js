import React from "react";
import { FaCopyright, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return <footer style={{
        width: "95%",
        marginInline: "auto",
        textAlign: "center"
    }
    } >
        <p> Copyright <span><FaCopyright /></span>  {new Date().getFullYear()} </p>
        <div style={{
            display: "flex",
            alignItems: "center",
            width: "95%",
            justifyContent: "space-evenly",
            paddingBottom: "1em"
        }} className="socials">
            <FaFacebook />
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
        </div>

    </footer>
}