import { useState } from "react";
import LocationOptions from "../../LocationOptions";
import MapImage from "./Map";

const Map = () => {
  const [showMap, setShowMap] = useState(true);

  if (!showMap) return <LocationOptions></LocationOptions>;
  return (
    <div
      onClick={() => {
        setShowMap(!showMap);
      }}
      style={{ width: "320px", height: "320px", margin: "auto" }}
    >
      <MapImage />
    </div>
  );
};

export default Map;
