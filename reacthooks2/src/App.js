import UseContext from "./useContext";
import CreateContext from "./Createcontext";
import EmployeeContextProvider from "../../ornekusecontext/src/context/EmployeeContextProvider";
import EmployeeList from "../../ornekusecontext/src/components/EmployeeList";

function App() {

  return (
    <div className="App">
    
<h2>CreateCounter Producer-Consumer ile</h2>
<CreateContext/>

<h1>CreateContext ve useContext Kullanımı(Consumer kısmı için)</h1>
  <UseContext/>

<h3>EmployeeContextProvider</h3>
  
  <EmployeeContextProvider>
    <EmployeeList/>
  </EmployeeContextProvider>
    </div>
  );
}

export default App;
