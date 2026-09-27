import type { Technology } from "../types";
import { FcRating } from "react-icons/fc";

interface TechCardProps {
  tech: Technology;
  isSaved: boolean;
  onSave: (tech: Technology) => void;
}

const TechCard = ({ tech, isSaved, onSave }: TechCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full">
      <div className="flex justify-between items-center">

        <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
        <p>{tech.badge}</p>
      </div>
      <h1>{tech.name}</h1>
      <p className="text-gray-600">{tech.description}</p>
      <br />
      <div className="flex justify-between text-[13px] gap-0.5">
        <p className="text-gray-500"> {tech.category}</p>
        <p>{tech.difficulty}</p>
        <span className=" flex items-center">
          <FcRating /> {tech.rating}
        </span>
      </div>
      <div>
        <button
          type="button"
          disabled={isSaved}
          onClick={() => onSave(tech)}
          className="w-full bg-[#0A0F1D] text-white py-2.5 rounded-md hover:bg-gray-800 mt-4 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSaved ? "Saved ✓" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;