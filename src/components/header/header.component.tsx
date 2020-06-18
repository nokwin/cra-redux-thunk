import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

export const Header = () => (
  <div className="header">
    <Link to="/" className="header--link-item">
      Homepage
    </Link>
    <Link to="/counter" className="header--link-item">
      Counter
    </Link>
  </div>
);
