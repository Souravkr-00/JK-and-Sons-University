/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgramsPage from "./pages/ProgramsPage";


export default function App() {
  return (
    <div className="min-h-screen bg-app-bg font-sans selection:bg-gold/20 selection:text-navy">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<ProgramsPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

