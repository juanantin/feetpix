import Image from "next/image";
import { features } from "@/config/site";

const iconMap = {
  feet: "/images/feet-pair.png",
  coin: "/images/coin.png",
  chart: "/images/chart.png",
  trophy: "/images/trophy.png",
};

export default function FeatureGrid() {
  return (
    <section className="border-b-2 border-feet-navy bg-feet-navyblue">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-feet-navy sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="bg-feet-navyblue px-6 py-10 text-center">
            <Image
              src={iconMap[feature.icon]}
              alt=""
              width={48}
              height={48}
              className="mx-auto h-12 w-auto object-contain"
              unoptimized
            />
            <h3 className="pixel-heading mt-5 text-[11px] text-feet-offwhite">{feature.title}</h3>
            <p className="mt-3 text-sm text-feet-skylight">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
