import "./App.css";
import illustrationSignUp from "./assets/illustration-sign-up-desktop.svg";

function App() {
  return (
    <>
      <div id="bg-container" className="bg-dark-slate-grey">
        <div className="bg-white rounded-lg">
          <div className="flex flex-row items-center justify-center">
            <div className="flex">
              <h1 className="text-characoal-grey text-2xl md:text-4xl">Stay updated!</h1>
            </div>
            <div>
              <img
                src={illustrationSignUp}
                className="p-6"
                alt="Illustration sign up"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
