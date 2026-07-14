import { features } from "@/config/site";
import { FeetIcon, CoinIcon, ChartIcon, TrophyIcon } from "./PixelIcons";

const iconMap = {
  feet: FeetIcon,
  coin: CoinIcon,
  chart: ChartIcon,
  trophy: TrophyIcon,
};

export default function FeatureGrid() {
  return (
    <section className="border-b-2 border-feet-navy bg-feet-navyblue">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-feet-navy sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div key={feature.title} className="bg-feet-navyblue px-6 py-10 text-center">
              <Icon className="mx-auto h-12 w-12" />
              <h3 className="pixel-heading mt-5 text-[11px] text-feet-offwhite">{feature.title}</h3>
              <p className="mt-3 text-sm text-feet-skylight">{feature.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
