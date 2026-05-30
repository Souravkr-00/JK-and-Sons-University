/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DepartmentsPage from './pages/DepartmentsPage';
import DepartmentDetailPage from './pages/DepartmentDetailPage';
import AcademicCalendarPage from './pages/AcademicCalendarPage';
import AdmissionProcessPage from './pages/AdmissionProcessPage';
import AboutOverviewPage from './pages/AboutOverviewPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailPage />} />
        <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
        <Route path="/admission-process" element={<AdmissionProcessPage />} />
        <Route path='/overview' element={<AboutOverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

