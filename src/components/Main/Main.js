import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

export default function Main() {
    return (
        <main>
            <Routes>
                {/* <Route path="/" element={<GBHomePage />} /> */}
                {/* <Route path="/annapolis" element={<ANHomePage />} /> */}
            </Routes>
        </main>
    )
}
