import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/sass/style.scss";

import Promo from './components/promo/Promo';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Promo/>
    </StrictMode>
)
