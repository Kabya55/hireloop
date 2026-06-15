
import StatsSection from "@/components/StatsSection";
import FeaturedJobsSection from "@/components/FeaturedJobsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <StatsSection />
      <FeaturedJobsSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
