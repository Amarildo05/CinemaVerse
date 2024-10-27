import { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { Modal, Form as AntForm, Input, Select, Button, message } from "antd";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup"; // Import Yup
import "../SingleMovieDetails.css";
import { ReservationFormValues } from "../../../types";
import "./MovieReservation.css";

interface ModalMovieTitle {
  title: string;
}

const { Option } = Select;

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(5, "Full Name is too short"),
  tickets: Yup.number()
    .required("Number of Tickets is required")
    .min(1, "At least one ticket is required")
    .max(5, "You can reserve a maximum of 5 tickets"),
  seats: Yup.array().test(
    "match-tickets",
    "The number of seats must match the number of tickets.",
    function (value) {
      const { tickets } = this.parent; // Access the tickets field
      return value && value.length === tickets; // Validate the length of seats
    }
  ),
  cardNumber: Yup.string()
    .required("Card Number is required")
    .matches(
      /^(?:\d{4} ){3}\d{4}$/,
      "Card Number format must be: 1234 5678 9012 3456"
    ),
  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^\d{3}$/, "CVV must be 3 digits"),
  expirationDate: Yup.string()
    .required("Expiration Date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration Date must be in MM/YY format"
    ),
});

export default function MovieReservation(props: ModalMovieTitle) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (
    values: ReservationFormValues,
    { resetForm }: FormikHelpers<ReservationFormValues>
  ) => {
    console.log("Reservation for", props.title, values);
    message.success("Your reservation has been successfully created!");
    resetForm();
    handleCancel();
  };

  return (
    <div className="reservation-container">
      <button className="trailer-reservation-button" onClick={showModal}>
        <CalendarOutlined /> Book Your Movie
      </button>
      <Modal
        title={props.title}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Formik<ReservationFormValues>
          initialValues={{
            fullName: "",
            tickets: 0,
            seats: [],
            cardNumber: "",
            cvv: "",
            expirationDate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => {
            const maxSeats = values.tickets;

            return (
              <div className="modal-content">
                <AntForm onFinish={handleSubmit} style={{ width: "100%" }}>
                  <AntForm.Item label="Full Name">
                    <Input
                      onChange={handleChange}
                      name="fullName"
                      value={values.fullName}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && touched.fullName && (
                      <div className="error">{errors.fullName}</div>
                    )}
                  </AntForm.Item>

                  <AntForm.Item label="Number of Tickets">
                    <Select
                      onChange={(value) => {
                        setFieldValue("tickets", value);
                        if (values.seats.length > value) {
                          setFieldValue("seats", values.seats.slice(0, value));
                        }
                      }}
                      value={values.tickets}
                      placeholder="Select number of tickets"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Option key={i + 1} value={i + 1}>
                          {i + 1}
                        </Option>
                      ))}
                    </Select>
                    {errors.tickets && touched.tickets && (
                      <div className="error">{errors.tickets}</div>
                    )}
                  </AntForm.Item>

                  <AntForm.Item label="Seat Selection">
                    <Select
                      mode="multiple"
                      value={values.seats}
                      onChange={(value) => {
                        if (value.length <= maxSeats) {
                          setFieldValue("seats", value);
                        }
                      }}
                      style={{ width: "100%" }}
                      placeholder="Select your seats"
                    >
                      {[
                        "A1",
                        "A2",
                        "A3",
                        "A4",
                        "B1",
                        "B2",
                        "B3",
                        "B4",
                        "C1",
                        "C2",
                        "C3",
                        "C4",
                      ].map((seat) => (
                        <Option
                          key={seat}
                          value={seat}
                          disabled={
                            values.seats.length >= maxSeats &&
                            !values.seats.includes(seat)
                          }
                        >
                          {seat}
                        </Option>
                      ))}
                    </Select>
                    {errors.seats && touched.seats && (
                      <div className="error">{errors.seats}</div>
                    )}
                  </AntForm.Item>

                  <AntForm.Item label="Card Number">
                    <Input
                      onChange={handleChange}
                      name="cardNumber"
                      value={values.cardNumber}
                      placeholder="Format: 1234 5678 9012 3456"
                    />
                    {errors.cardNumber && touched.cardNumber && (
                      <div className="error">{errors.cardNumber}</div>
                    )}
                  </AntForm.Item>

                  <AntForm.Item label="CVV">
                    <Input
                      onChange={handleChange}
                      name="cvv"
                      type="password"
                      value={values.cvv}
                      placeholder="Format: 123"
                    />
                    {errors.cvv && touched.cvv && (
                      <div className="error">{errors.cvv}</div>
                    )}
                  </AntForm.Item>

                  <AntForm.Item label="Expiration Date">
                    <Input
                      onChange={handleChange}
                      name="expirationDate"
                      placeholder="DD/MM"
                      value={values.expirationDate}
                    />
                    {errors.expirationDate && touched.expirationDate && (
                      <div className="error">{errors.expirationDate}</div>
                    )}
                  </AntForm.Item>

                  <div className="submit-button">
                    <Button type="primary" htmlType="submit">
                      Confirm Reservation
                    </Button>
                  </div>
                </AntForm>
                <div className="disclaimer">
                  *This reservation is for simulation purposes only and does not
                  represent a real booking.
                </div>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
}