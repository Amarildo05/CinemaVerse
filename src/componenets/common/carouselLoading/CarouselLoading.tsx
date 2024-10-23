import { Skeleton } from "antd";
import "./CarouselLoading.css";

export default function CarouselLoading() {
  return (
    <div className="carousel-loading-container">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="carousel-card-skeleton" key={index}>
          <Skeleton active paragraph={false} />
        </div>
      ))}
    </div>
  );
}