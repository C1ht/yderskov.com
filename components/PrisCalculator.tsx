import dynamic from "next/dynamic";

const PrisCalculator = dynamic(() => import("./PrisCalculatorInner"), {
  ssr: true,
});

export default PrisCalculator;
