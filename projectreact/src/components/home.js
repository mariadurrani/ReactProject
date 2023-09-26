import "./HomeStyles.css";
import Hero from "./hero";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://www.pixel4k.com/wp-content/uploads/2018/09/sea-rocks-beach-summer_1535930515-768x432.jpg.webp"
        title="Hello"
        text="My Name"
        buttonText="Is"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
