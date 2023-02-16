import CardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { id, img, comment, job, name } = item;
        return (
          <div key={id} className={CardStyle.card}>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{comment}</p>
            <img src={img} alt={name} />
            <div className={CardStyle.buttons}>
              <button className={CardStyle.small}>Small</button>
              <button className={CardStyle.large}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
