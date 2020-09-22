import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright &copy;{new Date().getFullYear()}</h4>
        <span>WebDev All Right Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
