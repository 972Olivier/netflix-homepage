import Img from "./Img";

const Section = ({ title, list }) => {
  const listImg = list;
  // console.log(listImg);
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {listImg.map((element) => {
          return <Img source={element}></Img>;
        })}
      </div>
    </section>
  );
};

export default Section;
