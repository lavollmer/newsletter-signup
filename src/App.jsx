import "./App.css";
import illustrationSignUp from "./assets/illustration-sign-up-desktop.svg";
import Text from "./components/Text.jsx";
import Email from "./components/Email.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThankYou from "./components/ThankYou.jsx";
import illustrationSignUpMobile from "./assets/illustration-sign-up-mobile.svg";

function App() {
  return (
    <>
    {/* bg-container is CSS for background */}
      <div id="bg-container" className="bg-dark-slate-grey font-roboto">
        <div className="bg-white rounded">
          {/* mobile image, hidden on screens greater than md */}
          <img src={illustrationSignUpMobile} alt="background image" className="flex flex-col ml-4 md:hidden" />
          {/* Text of the application */}
          <div className="flex flex-row p-6 justify-center">
            <div className="flex flex-col mt-18 p-16">
              <h1 className="text-charcoal-grey font-bold text-3xl md:text-6xl">
                Stay updated!
              </h1>
              {/* Text component */}
              <div className="flex flex-col items-center justify-center">
                <Text />
              </div>
              <Routes>
                <Route path="/" element={<Email />} />
                <Route path="/thank-you" element={<ThankYou />} />
              </Routes>
            </div>
            {/* image for screens larger than md */}
            <div className="hidden md:flex">
              <img
                src={illustrationSignUp}
                alt="Illustration sign up"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
