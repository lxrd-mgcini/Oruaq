import { Leaf, RabbitIcon, SproutIcon } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      benefit: "Vegan Products",
      icon: <Leaf size={120} strokeWidth={0.5} />,
      color: "#e8d1af1c",
      description:
        " Quality products that are ethically crafted and environmentally conscious.",
    },
    {
      id: 2,
      benefit: "Not Animal Tested",
      icon: <RabbitIcon size={120} strokeWidth={0.5} />,
      color: "#e8d1af6f",
      description:
        "Skincare products carefully created without being tested on animals.",
    },
    {
      id: 3,
      benefit: "All Natural",
      icon: <SproutIcon size={120} strokeWidth={0.5} />,
      color: "#03666717",
      description: "Natural ingredients for a wholesome skincare experience.",
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-8 text-center">
      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <div
            className="flex flex-1 flex-col items-center px-8 py-6 pb-12 pt-12 md:px-6"
            style={{ backgroundColor: feature.color }}
          >
            <p className="text-black">{feature.icon}</p>
            <h3 className="font-semibold text-black">{feature.benefit}</h3>
            <p className="text-black">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
