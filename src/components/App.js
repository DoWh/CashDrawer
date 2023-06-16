import { useState, React } from "react";
import DrawerLog from "./DrawerLog";
import SelectData from "./SelectData";


function App() {

  const [date, setDate] = useState(new Date().setHours(0,0,0,0));

  return (
    <div className="App">
        <header className="flex justify-center m-4 ">
          <SelectData date={date} changeDate={setDate} />
        </header>
        <DrawerLog date={date}/>
    </div>
  );

}

export default App;
