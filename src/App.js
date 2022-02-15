import './App.css';
import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import Header from "./Header";
import "./index.css";


function App() {
  const currencies = ["pln", "eur", "usd", "gbp", "czk", "rub", "jpy", "btc"];

  return (
    <div>
      <Header version={1.2}/>
      <main className="main">
        <Form
          body={
            <>
              <Container
                currencies={currencies}
                title="From Currency"
                input={true}
              />
              <Button />
              <Container
                currencies={currencies}
                title="Convert To"
                input={false}
              />
            </>
          } />
      </main>
    </div>
  );
}

export default App;
