import Event from "./Component/Events/Event";
import EventCard from "./Component/Events/EventCard";
import Navbar from "./Component/Header/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Event />
      </div>
      {/* <h1>Hello World</h1>
      <Counter /> */}
    </>
  );
}

export default App;
