import { Skeleton } from "antd";
import "./CardsLoading.css";

export default function CardsLoading() {
  return (
    <div className="cards-skeleton-container">
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="card-skeleton" key={index}>
          <Skeleton active paragraph={false} />
        </div>
      ))}
    </div>
  );
}