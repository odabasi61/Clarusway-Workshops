const LessonCard = (props) => {
  const { name, time, image } = props;
  return (
    <div className="les-card-div">
      <div className="les-card-img">
        <img src={image} alt="html" />
      </div>
      <div className="les-card-info">
        <p>
          Lesson Name: <span>{name}</span>
        </p>
        <p>
          Lesson Hour: <span>{time}</span>
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
