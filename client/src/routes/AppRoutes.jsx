import { Routes, Route } from "react-router-dom";

import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ProfileSetup from "../features/auth/ProfileSetup";

import Home from "../features/home/Home";

import Chapters from "../features/chapters/Chapters";
import ChapterDetails from "../features/chapters/ChapterDetails";
import VerseDetails from "../features/chapters/VerseDetails";

import Favorites from "../features/favorites/Favorites";
import Journey from "../features/journey/Journey";
import Profile from "../features/profile/Profile";

import ProtectedRoute from "./ProtectedRoute";

import NotFound from "../components/common/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/profile-setup"
        element={
          <ProtectedRoute>
            <ProfileSetup />
          </ProtectedRoute>
        }
      />

      {/* Protected Routes */}

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chapters"
        element={
          <ProtectedRoute>
            <Chapters />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chapters/:chapter"
        element={
          <ProtectedRoute>
            <ChapterDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chapters/:chapter/:verse"
        element={
          <ProtectedRoute>
            <VerseDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />

      <Route
        path="/journey"
        element={
          <ProtectedRoute>
            <Journey />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}