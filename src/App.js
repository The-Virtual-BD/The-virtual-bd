import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamCardData from "./Components/TeamInfo/TeamCardData";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Other from "./Pages/Other";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import ContuctUs from "./Pages/ContuctUs";
import Pricing from "./Pages/Pricing";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/TermsCondition";
import SingnIn from "./Pages/SingnIn";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import TeamInfo from "./Pages/TeamInfo";
import UserProfile from "./Pages/UserProfile";
import SingleBlogPage from "./Components/BlogPage/SingleBlogPage";
import RequireAuth from "./Components/Auth/RequireAuth";
import { createContext, useEffect } from "react";
import DataCollection, { AppContext } from "./context";
import { useState } from "react";
import Notices from "./Components/NoticePage/Notices";
import useToken from "./hooks/useToken";
import useUser from "./hooks/useUser";
import "react-whatsapp-chat-widget/index.css";
import "react-datepicker/dist/react-datepicker.css";
import WhatsApp from "./utilities/WhatsApp";
import CarieerDetails from "./Components/Career/CarieerDetails/CarieerDetails";
import ProjectDetails from "./Components/Portfolio/PortfolioDetails.js/ProjectDetails";
import 'react-rater/lib/react-rater.css';
import 'react-loading-skeleton/dist/skeleton.css';
import PdftoDoc from "./Components/Extra Features/PdfToDoc_Covert/Pdf_to_Doc";
import WordCounter from "./Components/Extra Features/WordCounter/WordCounter";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

function App() {
  const [token] = useToken();
  const [user] = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <DataCollection>

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetails />} />

            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />

            <Route path="/career" element={<Career />} />
            <Route path="/career/:id" element={<CarieerDetails />} />

            <Route path="/other" element={<Other />} />
            <Route path="/contact" element={<ContuctUs />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsCondition />} />
            <Route path="/Word-Counter" element={<WordCounter />} />
            <Route path="/pdf-to-doc-converter" element={<PdftoDoc />} />

            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/data-protection" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/user-dashboard" element={< RequireAuth> <UserProfile /></RequireAuth>} />

            <Route path="/sign-in" element={<SingnIn />} />




            <Route
              path="/team/:slug"
              exact={true}
              element={<TeamInfo data={TeamCardData} />}
            />
          </Routes>
          <ToastContainer />
          <WhatsApp />

        </div>
      </DataCollection>
    </QueryClientProvider>
  );
}

export default App;
