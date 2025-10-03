export default function HomeScore({ bmi, userName }: { bmi: number; userName: string }) {
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

  return (
    <div className="text-center">
      <h3 className="text-2xl px-10 py-5 rounded-[5px] bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        Hi <span className="font-bold capitalize">{Name}</span>, {message}
      </h3>
    </div>
  );  
}
