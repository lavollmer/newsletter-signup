import "./App.css";
import illustrationSignUp from "./assets/illustration-sign-up-desktop.svg";
import Text from "./components/Text";

function App() {
  return (
    <>
      <div id="bg-container" className="bg-dark-slate-grey font-roboto">
        <div className="bg-white rounded">
          <div className="flex flex-row p-6 items-center justify-center">
            <div className="flex flex-col">
              <h1 className="text-characoal-grey text-2xl md:text-4xl">
                Stay updated!
              </h1>
              <Text />
            </div>
            <div>
              <img src={illustrationSignUp} alt="Illustration sign up" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
