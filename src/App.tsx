import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Personal from "src/close-part/pages/AccountSettings/features/Personal";
import SocialMedia from "src/close-part/pages/AccountSettings/features/SocialMedia";
import Privacy from "src/close-part/pages/AccountSettings/features/Privacy";
import AccessDetails from "src/close-part/pages/AccountSettings/features/AccessDetails";

//open part
const IndexPage = loadable(() => import("src/open-part/pages/Index"));
const PricingPage = loadable(
  () => import("src/open-part/pages/Pricing")
);
const LearningPage = loadable(() => import("src/open-part/pages/Learning"));
const LearningOnePage = loadable(
  () => import("src/open-part/pages/LearningOnePage")
);
const EventCatalogPage = loadable(() => import("src/open-part/pages/EventCatalog"));
const AboutUsPagePage = loadable(
  () => import("src/open-part/pages/AboutUs")
);
const CareersPage = loadable(
  () => import("src/open-part/pages/Careers")
);
const Vacancy = loadable(() => import("src/open-part/pages/Vacancy"));
const ContactUsPage = loadable(() => import("src/open-part/pages/ContactUs"));
const PrivacyPolicyPage = loadable(() => import("src/open-part/pages/PrivacyPolicy"));
const ServiceTermsPage = loadable(() => import("src/open-part/pages/ServiceTerms/ServiceTermsPage"));
const AuthorizationPage = loadable(() => import("src/account/Authorization/AuthorizationPage"));
const RecoveryPasswordPage = loadable(() => import("src/account/components/PasswordRecovery"));
const FeaturesPage = loadable(() => import("src/open-part/pages/Features"));
const NotFound404Page = loadable(() => import("src/open-part/pages/404"));
const EventLanding = loadable(() => import("src/open-part/pages/EventLanding"));

//close part
const AccountPage = loadable(() => import("src/close-part/pages/Account/index"));
const AccountSettingsPage = loadable(() => import("src/close-part/pages/AccountSettings/index"));
const EventCreationPage = loadable(() => import("src/close-part/pages/EventCreation/index"));
const EventEditPage = loadable(() => import("src/close-part/pages/EventEdit"));


function App() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/about-us" element={<AboutUsPagePage/>}/>
          <Route path="/contact-us" element={<ContactUsPage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/service-terms" element={<ServiceTermsPage/>}/>
          <Route path="/login" element={<AuthorizationPage />} />
          {/*<Route path="/signup" element={<RegistrationPage/>} />*/}
          <Route path="/recovery-password" element={<RecoveryPasswordPage/>} />
          <Route path="/event-catalog" element={<EventCatalogPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/learning" element={<LearningPage/>}/>
          <Route path="/learning/:id" element={<LearningOnePage/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
          <Route path="/careers" element={<CareersPage/>}/>
          <Route path="/careers/vacancy/:id" element={<Vacancy />}/>
          <Route path="/event/:id" element={<EventLanding />}/>
          <Route path="/account" element={<AccountPage/>} />
          <Route path="account-settings" element={<AccountSettingsPage/>}>
            <Route path="personal" element={<Personal/>} />
            <Route path="social-media" element={<SocialMedia/>} />
            <Route path="privacy" element={<Privacy/>} />
            <Route path="access" element={<AccessDetails/>} />
          </Route>
          <Route path="/event-creation" element={<EventCreationPage/>} />
          <Route path="/event-edit" element={<EventEditPage/>} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
