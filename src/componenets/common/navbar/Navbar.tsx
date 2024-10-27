import { useContext, useState } from "react";
import "./Navbar.css";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  HeartOutlined,
  HomeOutlined,
  MoonOutlined,
  SunOutlined,
  MenuFoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Switch } from "antd";
import QrCode from "../../HomePage/qrCode/QrCode";

export default function Navbar() {
  const themeContext = useContext(GlobalContext);
  const currentPath = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navSearch = useNavigate();

  function onChangeTheme(checked: boolean) {
    if (checked) {
      themeContext.setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      themeContext.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  const linkStyles = {
    color: themeContext.theme === "light" ? "black" : "white",
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "My Favorites",
      path: "/favorites",
      icon: <HeartOutlined />,
    },
  ];

  // Menu that appears on mobile view
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if the value is valid and redirect user to the SearchedMovie Url
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navSearch(`/searched-movies?query=${searchQuery}`);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: themeContext.theme === "light" ? "#b8b8b8" : "#404040",
        color: themeContext.theme === "light" ? "#333" : "#E0E0E0",
      }}
    >
      <Link to={"/"}>
        <img
          src={
            themeContext.theme === "light"
              ? "/logo-black.webp"
              : "/logo-white.webp"
          }
        />
      </Link>
      <Input
        className="custom-input"
        style={{
          backgroundColor:
            themeContext.theme === "light" ? "#ededed" : "#dbdbdb",
          border:
            themeContext.theme === "light"
              ? "1px solid #E0E0E0"
              : "1px solid #333",
        }}
        placeholder="Search for a movie"
        suffix={
          <SearchOutlined
            style={{ cursor: "pointer", fontSize: "20px" }}
            onClick={handleSearch}
          />
        }
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <MenuFoldOutlined style={{ color: linkStyles.color }} />
      </div>

      <ul className={`${isMobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => {
          return (
            <li key={item.path}>
              <Link
                className={`link-home ${
                  item.path === currentPath.pathname ? "active" : ""
                }`}
                style={linkStyles}
                to={item.path}
              >
                <span>{item.icon}</span> {item.label}
              </Link>
            </li>
          );
        })}
        <Switch
          style={{
            background: themeContext.theme === "dark" ? "#1677ff" : "#889499",
            marginLeft: "20px",
          }}
          checkedChildren={<SunOutlined className="switch-icons" />}
          unCheckedChildren={<MoonOutlined className="switch-icons" />}
          defaultChecked={themeContext.theme === "light"}
          onChange={onChangeTheme}
        />
        <QrCode />
      </ul>
    </nav>
  );
}