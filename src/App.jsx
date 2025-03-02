import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { routes } from "./config/routes";

function App() {
  const routeConfig = routes();
  

  return (
    <>
      <Header />

      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
