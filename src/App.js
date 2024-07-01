
import "./App.css";
import AlertDismissible from "./components/MyAlert.jsx";
import BooksGrid from "./components/cardBooks.jsx";

import MyNav from "./components/myNavBar";

function App() {
  return (
    <>
      <MyNav />
      <AlertDismissible />
      <BooksGrid />
    </>
  );
}

export default App;
