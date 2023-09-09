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
      {/* <Steps messages={messagesPHP} /> */}
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
          <StepButton step={step}>
            {messages[step - 1]}
            <Button
              textColor="#333"
              bgColor="#e7e7e7"
              onClick={() => alert(`How to ${messages[step - 1]}`)}
            >
              Learn More
            </Button>
          </StepButton>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>Previous{" "}
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              {step >= 3 ? "Submit" : "Next"}
              <span>{step >= 3 ? "👍" : "👉"}</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepButton({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3> {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
