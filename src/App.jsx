import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import Skeleton from "./components/Skeleton";
import PageLoading from "./components/PageLoading";
import "./App.css";

const Customers = lazy(() => import("./pages/Customers"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Orders = lazy(() => import("./pages/Orders"));
const Employees = lazy(() => import("./pages/Employees"));
const Kanban = lazy(() => import("./pages/Kanban"));
const Editor = lazy(() => import("./pages/Editor"));
const Calendar = lazy(() => import("./pages/Calendar"));
const ColorPicker = lazy(() => import("./pages/ColorPicker"));
const Line = lazy(() => import("./pages/Charts/Line"));
const Area = lazy(() => import("./pages/Charts/Area"));
const Pie = lazy(() => import("./pages/Charts/Pie"));
const Financial = lazy(() => import("./pages/Charts/Financial"));
const Bar = lazy(() => import("./pages/Charts/Bar"));
const ColorMapping = lazy(() => import("./pages/Charts/ColorMapping"));
const Pyramid = lazy(() => import("./pages/Charts/Pyramid"));
const Stacked = lazy(() => import("./pages/Charts/Stacked"));

const App = () => {
  const {
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-(--main-dark-bg)">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="text-3xl p-3 rounded-full transition-all duration-200 hover:drop-shadow-md hover:drop-shadow-black hover:bg-gray-200 text-white cursor-pointer"
                style={{ background: `${currentColor}`, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-(--secondary-dark-bg) bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-(--secondary-dark-bg)">
              <Sidebar />
            </div>
          )}
          <div
            className={`bg-(--main-bg) dark:bg-(--main-dark-bg) min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="fixed md:static bg-(--main-bg) dark:bg-(--main-dark-bg) navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}
              <PageLoading>
                <Suspense fallback={<Skeleton />}>
                  <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<Ecommerce />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />

                    {/* Pages */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* Apps */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* Charts */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
                  </Routes>
                </Suspense>
              </PageLoading>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
