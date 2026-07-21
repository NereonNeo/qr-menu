import { HOME_KPI_CARDS } from "../home.const";
import { HeroSection } from "./hero-section.component";
import { InsightBanner } from "./insight-banner.component";
import { KpiCard } from "./kpi-card.component";
import { PopularPositionsCard } from "./popular-positions-card.component";
import { RecentOrdersCard } from "./recent-orders-card.component";
import { TrafficCard } from "./traffic-card.component";

export const Home = () => {
  return (
    <main className="h-full relative flex flex-col gap-6">
      <HeroSection />

      <div className="grid grid-cols-4 gap-5">
        {HOME_KPI_CARDS.map((card) => (
          <KpiCard key={card.id} card={card} />
        ))}
        <div className="col-span-2">
          <TrafficCard />
        </div>
      </div>

      <InsightBanner />

      <div className="grid grid-cols-1 gap-6 items-start">
        <PopularPositionsCard />
        <RecentOrdersCard />
      </div>
    </main>
  );
};
