import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import lessons from "./lessons/html.js"; // Ensure this is an array
import lessoncss from "./lessons/css.js"; // Ensure this is an array
import lessonjs from "./lessons/js.js"; 
import Lesson from "./pages/lesson.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lessons">
          <Route index element={<Lesson />} /> {/* Default component for "/lessons" */}

          {/* Dynamic Routes for Lessons using index */}
          {lessons.map((lesson, index) => (
            <Route
              key={index}
              path={`html/${index}`} // Using index for routing
              element={<Lesson {...lesson} />}
            />
          ))}
          {
lessoncss.map((lesson, index) => (
            <Route
              key={index}
              path={`css/${index}`} // Using index for routing
              element={<Lesson {...lesson} />}
            />
          ))
          }{
lessonjs.map((lesson, index) => (
            <Route
              key={index}
              path={`javascript/${index}`} // Using index for routing
              element={<Lesson {...lesson} />}
            />
          ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
