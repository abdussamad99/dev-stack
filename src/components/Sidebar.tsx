import type { Technology } from "../types";

interface SidebarProps {
  saved: Technology[];
  onRemove: (tech: Technology) => void;
  onClearAll: () => void;
}

const Sidebar = ({ saved, onRemove, onClearAll }: SidebarProps) => {
  return (
    <aside className="w-full">
      <div className="flex flex-col gap-4 p-4 bg-surface rounded-lg">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Saved Technologies
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Your saved technologies appear here.
            </p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-bold">
            {saved.length}
          </span>
        </div>

        {saved.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber-100 border-dashed">
              +
            </div>
            <p className="mt-2 text-sm text-gray-500">
              No technologies saved yet.
            </p>
            <p className="text-sm text-gray-400">
              Click "Learn More" on a card to save it here.
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
                    {tech.description}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${tech.name}`}
                  className="ml-auto text-sm font-medium text-red-500 hover:text-red-700"
                  onClick={() => onRemove(tech)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          disabled={saved.length === 0}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onClearAll}
        >
          Clear All
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;