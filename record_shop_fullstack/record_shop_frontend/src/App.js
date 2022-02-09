import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import RecordAdd from "./components/pages/RecordAdd";
import Records from "./components/pages/Records";

function App() {
  const [records, setRecords] = useState([]);
  const BACKEND_URL_HEROKU= process.env.REACT_APP_BACKEND_URL_HEROKU
 
console.log(records);
  async function getData() {
    const data = await fetch(BACKEND_URL_HEROKU);
    const result = await data.json();
    console.log(result);
    setRecords(result.records);
  }



  useEffect(() => {
    getData();
   
  }, []);

  console.log(records);

  return (
    <div>
      <h1 className="text-center">A Record Page</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/records" element={<Records records={records} />} />

          <Route path="/addRecord" element={<RecordAdd setRecords={setRecords} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
