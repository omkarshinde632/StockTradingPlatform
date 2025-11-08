import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import ForgeAcademy from "../src/landing_page/home/ForgeAcademy";
import AcademySignup from "../src/landing_page/home/AcademySignup";
import AcademyLogin from "../src/landing_page/home/AcademyLogin"
import ForgeTalks from './landing_page/home/ForgeTalks';
import Charges from './landing_page/pricing/Charges';
import InvestmentOfferings from './landing_page/products/InvestmentOfferings';
import InvestmentDetail from './landing_page/products/InvestmentDetail';
import DashboardDetails from './landing_page/products/DashboardDetails';
import ForgeFunds from './landing_page/products/ForgeFunds';
import FundDetails from './landing_page/products/FundDetails';
import ForgeFundsDetails from './landing_page/products/ForgeFundsDetails';
import ForgeAPI from './landing_page/products/ForgeAPI';
import ForgeAPIDemo from './landing_page/products/ForgeAPIDemo';
import ForgeAcademyDetails from './landing_page/products/ForgeAcademyDetails';
import Careers from './landing_page/Careers';
import CareerApply from './landing_page/CareerApply';
import Blog from './landing_page/Blog';
import BlogDetail from './landing_page/BlogDetail';
import Contact from './landing_page/Contact';
import HelpCenter from './landing_page/HelpCenter';
import FAQ from './landing_page/FAQ';
import TermsPolicies from './landing_page/TermsPolicies';
import Portfolio from './landing_page/Portfolio';
import TrackTickets from './landing_page/support/TrackTickets';
import TrackAccount from './landing_page/support/TrackAccount';
import TrackSegmentActivation from './landing_page/support/TrackSegmentActivation';
import IntradayMargins from './landing_page/support/IntradayMargins';
import CurrentTakeovers from './landing_page/support/CurrentTakeovers';
import IntradayLeverages from './landing_page/support/IntradayLeverages';
import CorporatePartnershipAccounts from './landing_page/support/tickets/CorporatePartnershipAccounts';
import NRIAccountSetup from './landing_page/support/tickets/NRIAccountSetup';
import RequiredDocsVerification from './landing_page/support/tickets/RequiredDocsVerification';
import AccountOpeningCharges from './landing_page/support/tickets/AccountOpeningCharges';
import Login from './landing_page/login/Login';
import TradeForgeLearnMore from './landing_page/products/TradeForgeLearnMore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<ProductsPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/academy" element={<ForgeAcademy />} />
      <Route path="/AcademySignup" element={<AcademySignup />} />
      <Route path="/Academylogin" element={<AcademyLogin />} />
      <Route path="/forgetalks" element={<ForgeTalks />} />
      <Route path="/charges" element={<Charges />} />
      <Route path="/investment-offerings" element={<InvestmentOfferings />} />
      <Route path="/investment-offerings/:product" element={<InvestmentDetail />} />
      <Route path="/products/dashboard" element={<DashboardDetails />} />
      <Route path="/forge-funds" element={<ForgeFunds />} />
      <Route path="/funds/:id" element={<FundDetails />} />
      <Route path="/forgefundsdetails" element={<ForgeFundsDetails />} />
      <Route path="/forge-api" element={<ForgeAPI />} />
      <Route path="/forge-api-demo" element={<ForgeAPIDemo />} />
      <Route path="/forge-academy-details" element={<ForgeAcademyDetails />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/apply" element={<CareerApply />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help-centre" element={<HelpCenter />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/terms-policies" element={<TermsPolicies />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/track-tickets" element={<TrackTickets />} />
      <Route path="/track-account" element={<TrackAccount />} />
      <Route path="/track-segment-activation" element={<TrackSegmentActivation />} />
      <Route path="/intraday-margins" element={<IntradayMargins/>} />
      <Route path="/current-takeovers" element={<CurrentTakeovers/>} />
      <Route path="/intraday-leverages" element={<IntradayLeverages/>} />
      <Route path="/corporate-part-accounts" element={<CorporatePartnershipAccounts/>} />
      <Route path="/nri-account-setup" element={<NRIAccountSetup/>} />
      <Route path="/req-doc-verify" element={<RequiredDocsVerification/>} />
      <Route path="/acc-open-charges" element={<AccountOpeningCharges/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/pro-learn-more" element={<TradeForgeLearnMore/>} />


    </Routes> 
    <Footer/>
  </BrowserRouter>
);
