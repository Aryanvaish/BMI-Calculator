  export default function InformationCard() {

    interface CategoriesType {
      range: string;
      label : string;
    }

    const BMICategories : CategoriesType[] = [
      { range: "BMI Range", label: "BMI Category" },
      { range: "Below 18.5", label: "Underweight" },
      { range: "18.5 – 24.9", label: "Healthy" },
      { range: "25.0 – 29.9", label: "Overweight" },
      { range: "30.0 or above", label: "Obesity" },
    ];

return (
  <div className="w-full rounded-xl bg-white/5 backdrop-blur-2xl shadow-lg border border-[hsl(0,0%,15%)]">
    <h2 className="text-2xl font-semibold border-b px-5 py-5 border-[hsl(0,0%,20%)]">BMI Categories</h2>
    <ul className="px-5">
      {BMICategories.map((item: CategoriesType, index: number) => (
        <li key={index} className="flex py-5 border-b border-[hsl(0,0%,15%)] first:font-bold last:border-0 flex-row gap-2 md:gap-0" >
          <span className="w-full md:w-1/2">{item.range}</span>
          <span className="w-full md:w-1/2">{item.label}</span>
        </li>
      ))} 
    </ul>
  </div>
);

  }
