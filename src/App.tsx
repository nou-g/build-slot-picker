const slots = ["12:00", "12:15", "12:30", "12:45", "13:00"];

function App() {
  return (
    <div className="App">
      Assume data arrives as strings in this form: {JSON.stringify(slots)}
    </div>
  );
}

export default App;
