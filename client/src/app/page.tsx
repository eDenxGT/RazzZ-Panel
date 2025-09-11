import LightRays from "@/components/rbits/backgrounds/LightRays/LightRays";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <h1 className="text-5xl font-title text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">NestBot Panel</h1>
    </div>
  );
}
