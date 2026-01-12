import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        <NavBar />
        <hr />
        <div className="flex w-full">
          <Sidebar />
        </div>
      </>
    </div>
  );
};

export default App;
