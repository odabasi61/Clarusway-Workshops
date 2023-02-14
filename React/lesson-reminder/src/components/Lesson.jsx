import LessonCard from "./LessonCard";

const Lesson = (props) => {
  const { name, time, image } = props;
  return <LessonCard name={name} time={time} image={image} />;
};

export default Lesson;
