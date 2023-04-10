import AppRoutes from "./routes/AppRoutes";
import './App.css';
import AppNav from "./components/AppNav";

const App = () => {
  return (
    <div className="App">
      <AppNav />
      <AppRoutes />
    </div>
  );
}

export default App;
