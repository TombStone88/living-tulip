import "./Widget.css";
import Header from "../Header/Header";
import Plant from "../Plant/Plant";
import Stats from "../Stats/Stats";

export default function Widget() {
  return (
    <div className="widget">
      <Header />

      <div className="widget-body">
        <Plant />
        <Stats />
      </div>
    </div>
  );
}