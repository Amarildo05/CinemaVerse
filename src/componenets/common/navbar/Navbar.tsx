import { useContext } from "react";
import "./Navbar.css";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link, useLocation } from "react-router-dom";

import {
  HeartOutlined,
  HomeOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Input, Switch } from "antd";

export default function Navbar() {
  const themeContext = useContext(GlobalContext);
  const currentPath = useLocation();

  function onChange(checked: boolean) {
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
        allowClear
      />

      <ul>
        {navItems.map((item) => {
          return (
            <li>
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
      </ul>
      <Switch
        style={{
          background: themeContext.theme === "dark" ? "#4A90E2" : "#889499",
          marginLeft: "20px",
        }}
        checkedChildren={<SunOutlined className="switch-icons" />}
        unCheckedChildren={<MoonOutlined className="switch-icons" />}
        defaultChecked={themeContext.theme === "light"}
        onChange={onChange}
      />
    </nav>
  );
}
