import Footer from "../componenets/footer/Footer";
import Navbar from "../componenets/navbar/Navbar";
import "./PageContainer.css";

export default function HomePage() {
  return (
    <div className="page-container">
      <Navbar />
      <Footer />
    </div>
  );
}