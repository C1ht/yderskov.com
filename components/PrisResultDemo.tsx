
import PrisResultDoc from "@/components/PrisResultDoc";

const DEMO_RESULT = {
  min: 1560000,
  max: 2184000,
  snap: {
    grund:        "vandret" as const,
    areal:        "120",
    rum:          "4",
    vinduer:      "5",
    terrassedøre: "2",
    extVægge:     "Mur",
    tag:          "Tegl",
    intVægge:     "Gips",
    gulv:         "Trægulv",
    lofter:       "Gips",
    vådrum:       "Toilet/bad",
  },
};

export default function PrisResultDemo() {
  return <PrisResultDoc result={DEMO_RESULT} onReset={null} />;
}
