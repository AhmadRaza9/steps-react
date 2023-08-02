import { useState } from "react";
const messagesReact = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const messagesPHP = [
  "Learn PHP ✨",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps messages={messagesReact} />
      <Steps messages={messagesPHP} />
    </div>
  );
}

function Steps({ messages }) {
  const [step, setStep] = useState(1);
  const [IsOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div className="container">
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {IsOpen ? "close" : "open"}
      </button>
      {IsOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              {step >= 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
