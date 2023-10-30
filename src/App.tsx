import { About } from "./sections/About";
import { Directory } from "./sections/Directory";
import { Footer } from "./sections/Footer";
import { Form } from "./sections/Form";
import { Header } from "./sections/Header";
import { Product } from "./sections/Product";

function App() {
  return (
    <>
      <Header />
      <Product/>
      <About/>
      <Directory/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
