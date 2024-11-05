import { QrcodeOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useContext, useState } from "react";
import "./QrCode.css";
import { GlobalContext } from "../../../context/GlobalContext";

export default function QrCode() {
  const themeContext = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button
        className="qr-button"
        style={{ color: themeContext.theme === "dark" ? "white" : "black" }}
        type="primary"
        onClick={showModal}
        icon={<QrcodeOutlined className="qr-icon" />}
      />

      <Modal
        title="CinemaVerse QR Code"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <img width="100%" src="/CinemaVerse-Qr.png" alt="Qr Code" />
      </Modal>
    </div>
  );
}