
import "bootstrap/dist/css/bootstrap.min.css"
import MyApi from "./MyApi";
import PageContainer from "./components/PageContainer";

function App() {
  const pokemonData = MyApi();
  return (
    <>
      <PageContainer pokemonData={pokemonData}/>
    </>
  );
}

export default App;
