const Card = ({ id, question, answer, icon, handleToggle }) => {
  // console.log("answer", answer);

  return (
    <div className="card">
      <div className="ques-answer">
        <h5>
          {id}.{question}
        </h5>
        <button onClick={handleToggle}>{icon}</button>
      </div>
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default Card;
