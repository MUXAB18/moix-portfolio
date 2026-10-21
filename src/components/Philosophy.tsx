import { Zap, Layers, Sparkles } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "PERFORMANCE",
    description: "Fast experiences are better experiences. Every millisecond counts.",
    icon: <Zap size={24} className="text-primary" />
  },
  {
    id: "02",
    title: "SCALABILITY",
    description: "Build systems that can grow. Architecture designed for tomorrow.",
    icon: <Layers size={24} className="text-primary" />
  },
  {
    id: "03",
    title: "EXPERIENCE",
    description: "Engineering should serve the user. Beautiful design meets flawless execution.",
    icon: <Sparkles size={24} className="text-primary" />
  }
];

export function Philosophy() {
  return (
    <section className="py-32 relative border-t border-white/5 bg-[#010309]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              How I Build
            </h2>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div key={p.id} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-mono text-gray-500">{p.id}</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold tracking-wide text-foreground mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
