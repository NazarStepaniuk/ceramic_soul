import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/sass/style.scss";

import Promo from './components/promo/Promo';
import Activities from './components/activities/Activities';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Promo/>
        <Activities/>
    </StrictMode>
)
