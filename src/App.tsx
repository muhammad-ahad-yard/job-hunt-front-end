import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FindJobsPage from "./pages/FindJobsPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalentPage from "./pages/FindTalentPage";
import TalentProfilePage from "./pages/TalentProfilePage";
import PostJobPage from "./pages/PostJobPage";
import JobDescPage from "./pages/JobDescPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import CompanyPage from "./pages/CompanyPage";
import PostedJobPage from "./pages/PostedJobPage";
import JobHistoryPage from "./pages/JobHistoryPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b74f06",
        "#943d0c",
        "#7a320d",
        "#461802",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#212121",
      ],
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <div className="relative">
          <Header />
          {location.pathname !== "/signup" &&
            location.pathname !== "/login" && <Divider size="xs" mx="md" />}
          <Routes>
            <Route path="/find-jobs" element={<FindJobsPage />} />
            <Route path="/find-talent" element={<FindTalentPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
