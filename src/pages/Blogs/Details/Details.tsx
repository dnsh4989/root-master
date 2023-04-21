import { useParams } from "react-router";
import "./Details.scss";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="details-container">
        <h1>Article Details Here..</h1>
        <h2>ID:</h2>
        <h1>{id}</h1>
      </div>
    </>
  );
};

export default Details;
