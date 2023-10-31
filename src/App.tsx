import { ApiProvider } from "./context/AppContext";
import { About } from "./sections/About";
import { Directory } from "./sections/Directory";
import { Footer } from "./sections/Footer";
import { Form } from "./sections/Form";
import { Header } from "./sections/Header";
import { Product } from "./sections/Product";

function App() {
  return (
    <ApiProvider>
      <main className="w-[100%] max-w-[1920px] mx-auto">
        <Header />
        <Product />
        <About />
        <Directory />
        <Form />
        <Footer />
      </main>
    </ApiProvider>
  );
}

export default App;
