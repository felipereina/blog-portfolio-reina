import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from ""
import links from ""
import { socialIcons } from ""
import logo from ""

const Navbar = () => {
  return (
    <nav>
      <Link to="Home" />
      <Link to="Blog" />
      <Link to="Portfolio" />
    </nav>
  )
}

export default Navbar
