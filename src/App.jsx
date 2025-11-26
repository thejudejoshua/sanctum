import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PartnerDetails from "./pages/PartnerDetails.jsx";
import Contact from "./pages/Contact.jsx";

import Team from "./pages/Team.jsx";
import Invest from "./pages/Invest.jsx";
import Pitch from "./pages/Pitch.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";

import AdminPanel from "./pages/AdminPanel.jsx";

import {BodyClass} from "./hooks/bodyClass.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";

function App() {
	
	BodyClass()
	
	return (
		<>
			<ScrollToTop />
			
			<Navbar/>
			
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/portfolio" element={<Portfolio/>}/>
				<Route path="/portfolio/:partnerName" element={<PartnerDetails />} />
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/team" element={<Team />} />
				<Route path="/invest" element={<Invest />} />
				<Route path="/pitch" element={<Pitch />} />
				<Route path="/terms-of-use" element={<TermsOfUse />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/cookie-policy" element={<CookiePolicy />} />
				
				<Route path="/admin" element={<AdminPanel />} />
			</Routes>
			
			<Footer/>
		</>
	);
}

export default App


