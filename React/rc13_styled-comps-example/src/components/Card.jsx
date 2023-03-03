import CardContent from "./styled/CardContent";

const Card = ({ content }) => {
  // const { id, title, body, image } = content;
  // console.log(content);
  return (
    <div>
      {content.map((item, index) => {
        return (
          <CardContent key={index}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </CardContent>
        );
      })}
    </div>
  );
};

export default Card;
