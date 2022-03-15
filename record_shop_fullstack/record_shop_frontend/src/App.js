import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/pages/Login";
import RecordAdd from "./components/pages/RecordAdd";
import Records from "./components/pages/Records";
import Register from "./components/pages/Register";

function App() {
  const [records, setRecords] = useState([]);
 // const BACKEND_URL_HEROKU = process.env.REACT_APP_BACKEND_URL_HEROKU;
  const BACKEND_URL_LOCAL = process.env.REACT_APP_BACKEND_URL_LOCAL;

  const RECORDS_PATH = BACKEND_URL_LOCAL + "/records";



  async function getData() {
    const data = await fetch(RECORDS_PATH, {
      headers: {
        Accept: "application/json",
      },
    });
    const result = await data.json();
    console.log(result);
    setRecords(result);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(records);

  return (
    <div className="vh-100" style={{ backgroundColor: "#bfbfc2" }}>
      <h1 className="text-center" style={{ color: "#5c5c5f" }}>
        A Record Page
      </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/records" element={<Records records={records} />} />

          <Route
            path="/addRecord"
            element={<RecordAdd setRecords={setRecords} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
