import "./Header.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import Clock from "../Clock/Clock";

const appWindow = getCurrentWindow();

export default function Header() {
  return (
    <div className="header" data-tauri-drag-region>
      <div className="title">
        🌷 Living Tulip
      </div>

      <div className="header-right">
        <Clock />

        <div className="window-controls">
          <button
            title="Minimize"
            className="window-btn"
            onClick={() => appWindow.minimize()}
          >
            ─
          </button>

          <button
            title="Close"
            className="window-btn close"
            onClick={() => appWindow.close()}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}