import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Views principales
import HomePage from "../views/HomePage";
import ThreeDemoView from "../views/ThreeDemoView";
import LayoutsView from "../views/LayoutsView";
import SpeechDemoView from "../views/SpeechDemoView";
import GeometryExplorer from "../views/GeometryExplorer";
import SettingsView from "../views/SettingsView";
import TablasMul from "../views/TablasMul";
import ConversorUnid from "../views/ConversorUnid";
import ValidContrasena from "../views/ValidContrasena";
import ContadorClics from "../views/ContadorClics";
import ListaTareas from "../views/ListaTareas";
import CountdownTimerView from "../views/CountdownTimerView";
import DigitalClockView from "../views/DigitalClockView";

// ✅ Nuevas vistas añadidas desde tu proyecto anidado
import ColorPickerView from "../views/ColorPickerView";
import SearchListView from "../views/SearchListView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rutas principales */}
        <Route index element={<HomePage />} />
        <Route path="three" element={<ThreeDemoView />} />
        <Route path="layouts" element={<LayoutsView />} />
        <Route path="tts" element={<SpeechDemoView />} />
        <Route path="three_2" element={<GeometryExplorer />} />
        <Route path="settings" element={<SettingsView />} />
        <Route path="tablasmul" element={<TablasMul />} />
        <Route path="conversorunid" element={<ConversorUnid />} />
        <Route path="validcontrasena" element={<ValidContrasena />} />
        <Route path="contadorclics" element={<ContadorClics />} />
        <Route path="listareas" element={<ListaTareas />} />
        <Route path="temporizador" element={<CountdownTimerView />} />
        <Route path="relojdigital" element={<DigitalClockView />} />

        {/* ✅ Rutas añadidas de los nuevos componentes */}
        <Route path="colorpicker" element={<ColorPickerView />} />
        <Route path="searchlist" element={<SearchListView />} />
      </Route>
    </Routes>
  );
}
