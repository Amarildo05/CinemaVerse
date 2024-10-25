import { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import "./SingleMovieDetails.css";

export default function MovieReservation() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="reservation-container">
      <button className="trailer-reservation-button" onClick={showModal}>
        <CalendarOutlined /> Book Your Movie
      </button>
      <Modal
        title="Movie Reservation"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      ></Modal>
    </div>
  );
}