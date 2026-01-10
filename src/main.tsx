import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/sass/style.scss";

import Promo from "./components/promo/Promo";
import Activities from "./components/activities/Activities";
import Touch from "./components/touch/Touch";
import Works from "./components/works/Works";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Promo />
        <Activities />
        <Touch />
        <Works />
    </StrictMode>
);
