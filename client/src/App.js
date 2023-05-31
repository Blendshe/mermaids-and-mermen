import "./App.css";
import { useState, useEffect } from "react";
import axios, { AxiosHeaders } from "axios";

function App() {
  const [swims, setSwims] = useState([]);
  const [form, setForm] = useState({
    name: "",
    where: "",
  });
  //use effect will run getswims every time the page loads
  useEffect(() => {
    getSwims();
  }, []);

  async function getSwims() {
    const API = "http://localhost:8080/swims";
    const res = await axios.get(API);
    setSwims(res.data);
  }

  async function deleteSwim(id) {
    const API = "http://localhost:8080/swims/" + id;
    await axios.delete(API);
    getSwims();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/swims";
    await axios.post(API, form);
    getSwims();
    setForm({
      name: "",
      where: "",
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <h2>Open Water Swimming</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Add name of Swim Spot"
        />
        <input
          name="where"
          onChange={handleChange}
          value={form.where}
          placeholder="Add location of Swim Spot"
        />
        <input type="submit" />
      </form>
      <br />

      {swims.map(function (swim) {
        return (
          <div>
            <h2>{swim.name}</h2>
            <p> {swim.where}</p>
            <p> {swim._id}</p>
            <p onClick={() => deleteSwim(swim._id)}>X</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
