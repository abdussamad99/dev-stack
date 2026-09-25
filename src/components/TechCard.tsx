import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isSaved: boolean;
  onSave: (tech: Technology) => void;
}

const TechCard = ({ tech, isSaved, onSave }: TechCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex justify-between items-center">

        <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
        <p>{tech.badge}</p>
      </div>
      <h1>{tech.name}</h1>
      <p className="text-gray-600">{tech.description}</p>
      <br />
      <p className="text-gray-500">Category: {tech.category}</p>
      <p>{tech.difficulty}</p>
      <p>{tech.rating}</p>
      <div>
        <button
          type="button"
          disabled={isSaved}
          onClick={() => onSave(tech)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaved ? "Saved ✓" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;