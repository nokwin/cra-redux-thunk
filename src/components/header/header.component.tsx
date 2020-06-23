import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

export const Header = () => (
  <div className="header">
    <Link to="/" className="header__link-item">
      Homepage
    </Link>
    <Link to="/counter" className="header__link-item">
      Counter
    </Link>
    <Link to="/forms" className="header__link-item">
      Forms
    </Link>
    <Link to="/api" className="header__link-item">
      Api Example
    </Link>
  </div>
);
