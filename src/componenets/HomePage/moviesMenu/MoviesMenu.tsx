import { useContext, useState } from "react";
import AllMovies from "../allMovies/AllMovies";
import UpcomingMovies from "../upcomingMovies/UpcomingMovies";
import { Menu } from "antd";
import type { MenuInfo } from "rc-menu/lib/interface";
import { GlobalContext } from "../../../context/GlobalContext";
import "./MoviesMenu.css";
import {
  CalendarOutlined,
  HomeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import TopRatedMovies from "../topRatedMovies/TopRatedMovies";

export default function MoviesMenu() {
  const themeContext = useContext(GlobalContext);

  const [selectedKey, setSelectedKey] = useState("all");

  const handleMenuClick = (info: MenuInfo) => {
    setSelectedKey(info.key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "all":
        return <AllMovies />;
      case "top-rated":
        return <TopRatedMovies />;
      case "upcoming":
        return <UpcomingMovies />;
      default:
        return <AllMovies />;
    }
  };

  const items = [
    { key: "all", icon: <HomeOutlined />, label: "Browse All" },
    { key: "top-rated", icon: <StarOutlined />, label: "Top Rated" },
    { key: "upcoming", icon: <CalendarOutlined />, label: "Upcoming" },
  ];

  return (
    <>
      <div
        className={themeContext.theme === "dark" ? "menu-dark" : "menu-light"}
      >
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[selectedKey]}
          mode="horizontal"
          style={{ fontSize: "15px" }}
          items={items} // Use the "items" prop here
        />
        <div>{renderContent()}</div>
      </div>
    </>
  );
}