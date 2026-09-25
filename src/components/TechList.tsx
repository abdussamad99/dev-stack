import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechListProps {
  technologies: Technology[];
  onSave: (tech: Technology) => void;
  saved: Technology[];
}

const TechList = ({ technologies, onSave, saved }: TechListProps) => {
  if (technologies.length === 0) {
    return (
      <p className="col-span-full text-center text-gray-500">
        No technologies found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {technologies.map((tech) => {
        const isSaved = saved.some((s) => s.id === tech.id);
        return (
          <TechCard
            key={tech.id}
            tech={tech}
            isSaved={isSaved}
            onSave={onSave}
          />
        );
      })}
    </div>
  );
};

export default TechList;