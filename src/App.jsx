import "./App.css";
import illustrationSignUp from "./assets/illustration-sign-up-desktop.svg";
import Text from "./components/Text.jsx";
import Email from "./components/Email.jsx";

function App() {
  return (
    <>
      <div id="bg-container" className="bg-dark-slate-grey font-roboto">
        <div className="bg-white rounded">
          <div className="flex flex-row p-6 justify-center">
            <div className="flex flex-col mt-18 p-16">
              <h1 className="text-charcoal-grey font-bold text-3xl md:text-6xl">
                Stay updated!
              </h1>
              <div className="flex flex-col items-center justify-center">
                <Text />
              </div>
              <div className="flex flex-col justify-start mt-6">
                <Email />
              </div>
            </div>
            <div>
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
