import type { Technology } from "../types";
import { RxCross1 } from "react-icons/rx";

interface SidebarProps {
  saved: Technology[];
  onRemove: (tech: Technology) => void;
  onClearAll: () => void;
}

const Sidebar = ({ saved, onRemove, onClearAll }: SidebarProps) => {
  return (
    <aside>
      <div className="flex flex-col gap-4 p-4 bg-surface rounded-lg sticky top-20">
        <div className="flex items-start justify-between">
          <div>
           <h2 className="text-base font-bold text-gray-900">Your Stack</h2>
         <p className="text-xs text-gray-500 mt-1 mb-5">
       {saved.length} Technology Selected
          </p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-bold">
            {saved.length}
          </span>
        </div>

        {saved.length === 0 ? (
          <div className="py-16 text-center">

            <p className="mt-2 text-sm text-gray-500">
             No technologies Selected Yet.
            </p>
            <p className="text-sm text-gray-400 border-2 border-gray-200 border-dashed rounded-xl py-10 px-4 text-center ">
              Your stack is empty.
            </p>
          </div>
        ) : (
          <div className="my-7 grid gap-2">
            {saved.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg"
              >
                <img
                  src={tech.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full"
                />
                <div className="min-w-0">
                  <strong className="text-sm font-medium text-gray-900">
                    {tech.name}
                  </strong>
                  <span className="block text-sm text-gray-500 truncate">
                    {tech.category}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${tech.name}`}
                  className="ml-auto text-sm font-medium text-red-500 hover:text-red-700"
                  onClick={() => onRemove(tech)}
                >
                  <RxCross1 />
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          disabled={saved.length === 0}
          className="bg-[#ffffffFF] text-red-500 px-4 py-2 border-2 border-[#ed8c85FF] rounded-2xl hover:bg-cyan-50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          onClick={onClearAll}
        >
          Remove All
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;