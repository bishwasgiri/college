import ContentHeader from "../UI/ContentHeader";
import Swiper from "./Swiper";
import "./upcoming-event.css";

const UpcomingEvent = () => {
  const slides = [
    { key: "id1", content: "This is the first content" },
    { key: "id2", content: "This is the second content" },
    { key: "id3", content: "This is the third content" },
    { key: "id4", content: "This is the fourth content" },
    { key: "id5", content: "This is the fifth content" },
    { key: "id6", content: "This is the sixth content" },
  ];
  return (
    <div className="upcoming-wrapper">
      <ContentHeader heading={"Upcoming Events"} />
      <Swiper slides={slides} />
    </div>
  );
};
export default UpcomingEvent;
