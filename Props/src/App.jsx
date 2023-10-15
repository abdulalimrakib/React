import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Tailwind Test</h1>
      <Card
        author="ABdul Alim"
        myArr={{ userNAme: "abdul alim", age: 23 }} //if i want to use abject & array as a props we must use '{}' other option is first store object & array in a variable and then use that variable as a props in '{}' like {object/array}
      ></Card>
      <Card></Card>
    </>
  );
}

export default App;
