import ClaimFrom from "./component/ClaimFrom";
import Heading from "./component/Heading";


const App = () => {
  return (
    <div>
      <div className="bg-slate-100 relative py-6">
        <Heading/>
      </div>
      <div className="absolute mt-[-100px]  ml-[550px]">
        <ClaimFrom/>
      </div>
    </div>
  );
};

export default App;
