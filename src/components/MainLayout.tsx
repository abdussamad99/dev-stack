import { use } from "react";
import type { Technology } from "../types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  technologiesPromise: Promise<Technology[]>;
  saved: Technology[];
  onSave: (tech: Technology) => void;
  onRemove: (tech: Technology) => void;
  onClearAll: () => void;
}

const MainLayout = ({
  technologiesPromise,
  saved,
  onSave,
  onRemove,
  onClearAll,
}: MainLayoutProps) => {
  const technologies = use(technologiesPromise);

  return (
    <main>
      <section className="container mx-auto my-10 px-4">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-heading-dark">
            Explore the{" "}
            <span className="text-brand-gradient-full">Technologies</span>
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <TechList
              technologies={technologies}
              saved={saved}
              onSave={onSave}
            />
          </div>
          <aside className="col-span-1">
            <Sidebar
              saved={saved}
              onRemove={onRemove}
              onClearAll={onClearAll}
            />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default MainLayout;