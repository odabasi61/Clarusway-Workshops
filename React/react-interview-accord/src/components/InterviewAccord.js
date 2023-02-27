import Question from "./Question";

const InterviewAccord = (props) => {
  const { data } = props;
  // console.log("data", props);

  return (
    <div className="row">
      {data.map((item) => (
        <Question key={item.id} {...item} />
      ))}
    </div>
  );
};

export default InterviewAccord;
