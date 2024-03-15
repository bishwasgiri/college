import "./study-section.css";
import courseone from "../Assets/course-one.jpg";
import coursetwo from "../Assets/course-two.jpg";
import coursethree from "../Assets/course-three.jpg";
import ContentHeader from "../UI/ContentHeader";

const StudySection = () => {
  return (
    <div className="study-section">
      <div className="heading-wrapper">
        <ContentHeader heading={"Study At SOT"} />
      </div>
      <p className="study-description">
        <span className="desc-1">
          Whether you're considering foundation course or an undergraduate
          degree or master's,
        </span>
        <span className="desc-2">SOT is a place where students thrive</span>
      </p>
      <div className="courses-container">
        <div className="courses-img-container">
          <img src={courseone} alt="course" loading="lazy" />
          <span className="course-btn">High School</span>
        </div>
        <div className="courses-img-container">
          <img src={coursetwo} alt="course" loading="lazy" />
          <span className="course-btn">Bachelor's</span>
        </div>
        <div className="courses-img-container">
          <img src={coursethree} alt="course" loading="lazy" />
          <span className="course-btn">Master's</span>
        </div>
      </div>
    </div>
  );
};

export default StudySection;
