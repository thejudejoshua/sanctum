import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

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
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
			
			<Footer/>
		</>
	);
}

export default App


