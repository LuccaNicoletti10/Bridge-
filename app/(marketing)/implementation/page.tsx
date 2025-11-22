import { Background } from "@/components/background";
import { ImplementationRoadmap } from "@/components/implementation-roadmap";

export default function ImplementationPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <ImplementationRoadmap />
    </div>
  );
}
