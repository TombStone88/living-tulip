import "./Stats.css";
import { usePlantStore } from "../../store/plantStore";

export default function Stats() {

    const plant = usePlantStore();

    return (
        <div className="info-section">

            <div className="days">
                <span className="number">{plant.age}</span>
                <span className="days-alive">Days Alive</span>
            </div>

            <div className="status">
                🌿 {plant.stage}
            </div>

            <div className="progress-group">

                <span className="progress-label">
                    Health {plant.health}%
                </span>

                <div className="progress">
                    <div
                        className="progress-fill"
                        style={{ width: `${plant.health}%` }}
                    />
                </div>

            </div>

            <div className="progress-group">

                <span className="progress-label">
                    Water {plant.hydration}%
                </span>

                <div className="progress">
                    <div
                        className="progress-fill water"
                        style={{ width: `${plant.hydration}%` }}
                    />
                </div>

            </div>

            <button
                className="water-btn"
                onClick={plant.water}
            >
                💧 Water Plant
            </button>

        </div>
    );
}