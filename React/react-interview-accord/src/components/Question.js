import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
import Card from "./Card";

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    // if(show){
    //     setShow(false);
    // }else{
    //     setShow(true);
    // }
    setShow(!show); //& toglle mantığını not operatörüyle kurmuş olduk
  };

  return (
    <div className="card-group">
      {/* {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button onClick={handleToggle}>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques">
            <h5>
              {id}.{question}
            </h5>
            <button onClick={handleToggle}>{arrowdown}</button>
          </div>
        </div>
      )} */}
      {/*2.yöntem*/}
      {/* <div className="card">
        <div className="ques-answer">
          <h5>
            {id}.{question}
          </h5>
          <button onClick={handleToggle}>{show ? arrowdown : arrowup}</button>
        </div>
        {show && <p>{answer}</p>}
      </div>
    </div> */}
      {/*3.yöntem*/}
      {show ? (
        <Card
          id={id}
          question={question}
          answer={answer}
          icon={arrowup}
          handleToggle={handleToggle}
        />
      ) : (
        <Card
          id={id}
          question={question}
          icon={arrowdown}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default Question;
