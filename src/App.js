import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div style={{ display: "flex" }}>
        <Navbar />
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
