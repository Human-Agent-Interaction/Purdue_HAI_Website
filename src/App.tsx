import { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import FloatingNav from "./components/FloatingNav";
import SubtleBackdrop from "./components/SubtleBackdrop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import People from "./pages/People";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Join from "./pages/Join";
import { CursorifyProvider } from "@cursorify/react";


const pageVariants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 }
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <CursorifyProvider enabled visibleDefaultCursor={false} opacity={0.85} delay={3}>
      <div className="relative min-h-screen overflow-hidden bg-canvas text-ink">
        <SubtleBackdrop />
        <FloatingNav />
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex-1 pt-36 pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/people" element={<People />} />
                  <Route path="/publications" element={<Publications />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/join" element={<Join />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </div>
    </CursorifyProvider>
  );
};

export default App;
