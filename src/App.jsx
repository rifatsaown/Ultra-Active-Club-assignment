import Activity from "./Components/Activity/Activity";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5">
      <div className="col-span-4 order-last xl:order-first bg-[#f2f4fa] p-6 lg:p-20 md:p-10">
        <Products/>
      </div>
      <div className="lg:col-span-1 ">
      <Activity/>
      </div>
    </div>
  );
}

export default App;
