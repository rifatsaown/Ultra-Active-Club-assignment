import Activity from "./Components/Activity/Activity";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 bg-[#f2f4fa] p-20">
        <Products/>
      </div>
      <div className="col-span-1">
      <Activity/>
      </div>
    </div>
  );
}

export default App;
