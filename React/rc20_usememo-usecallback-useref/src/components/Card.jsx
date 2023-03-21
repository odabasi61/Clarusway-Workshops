import React, { memo } from "react";

const Card = ({ data }) => {
  console.log("Render => Card componenti")
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-2">
      {data?.map((item) => {
        return (
          <div className="col" key={item.id}>
            <div
              className="card"
              style={{ minHeight: "300px", maxHeight: "300px" }}>
              <img
                src={item.images[0]}
                className="card-img-top"
                style={{
                  maxHeight: "200px",
                  minHeight: "200px",
                  objectFit: "contain",
                }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{item.title}</h5>
                <p className="card-text text-truncate">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Card);
