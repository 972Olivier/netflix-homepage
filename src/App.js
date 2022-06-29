import "./App.css";
import Header from "./components/Header";
import netflix from "./netflix.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        {netflix.map((element) => {
          return (
            <Section title={element.category} list={element.images}></Section>
          );
        })}
      </main>
    </div>
  );
}

export default App;

// <section>
//   <h2>{element.category}</h2>
//   <div>
//     {element.images.map((imgSrc) => {
//       return <img src={imgSrc} alt="images" />;
//     })}
//   </div>
// </section>
