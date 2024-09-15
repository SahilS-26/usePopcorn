import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import StarRating from "./StarRating.jsx";

function Test() {
  const [moveRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated {moveRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Worst", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      className="test"
      size={24}
      color="red"
      defaultRating={3}
    />
    <Test />
  </StrictMode>
);
