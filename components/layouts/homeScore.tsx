import { useEffect, useState } from "react";

export default function HomeScore({ bmi, userName }: { bmi: number; userName: string }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (bmi && userName) setIsOpen(true);
  }, [bmi, userName]);

  const Name = userName;
  let message = "";

  if (bmi < 18.5) {
    message = `your BMI is ${bmi}. You are Underweight. Consider a balanced diet with more calories and protein to gain healthy weight.`;
  } else if (bmi < 25) {
    message = `your BMI is ${bmi}. You are Healthy. Keep up your current lifestyle with regular exercise and a balanced diet.`;
  } else if (bmi < 30) {
    message = `your BMI is ${bmi}. You are Overweight. Try incorporating regular physical activity and a balanced diet to reduce weight.`;
  } else {
    message = `your BMI is ${bmi}. You are in the Obesity range. It's recommended to consult a healthcare professional for personalized guidance.`;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="relative max-w-2xl w-[90%] p-8 rounded-2xl bg-white text-gray-800 shadow-2xl animate-fadeIn">
        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700 cursor-pointer" >× </button>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Hi <span className="capitalize">{Name}</span> 👋</h2>
        <p className="text-lg font-semibold leading-relaxed">{message}</p>
        <div className="mt-6">
          <button onClick={() => setIsOpen(false)} className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition cursor-pointer" >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
