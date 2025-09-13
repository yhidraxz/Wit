export const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              index + 1 <= currentStep ? "bg-primary" : "bg-base-300"
            }`}
          />
          {index < totalSteps - 1 && (
            <div className="w-4 h-0.5 bg-base-300 mx-1" />
          )}
        </div>
      ))}
    </div>
  );
};
