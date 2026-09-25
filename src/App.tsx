import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import type { Technology } from "./types";

const dataFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
  return (await res.json()) as Technology[];
};

const technologiesPromise = dataFetch();

function App() {
  const [saved, setSaved] = useState<Technology[]>([]);

  const handleSaveTechnology = (tech: Technology) => {
    setSaved((prev) => {
      if (prev.some((t) => t.id === tech.id)) {
        toast.error("Already saved!");
        return prev;
      }
      toast.success(`${tech.name} saved!`);
      return [...prev, tech];
    });
  };

  const handleRemoveTechnology = (tech: Technology) => {
    setSaved((prev) => prev.filter((t) => t.id !== tech.id));
    toast.success(`${tech.name} removed!`);
  };

  const handleClearAll = () => {
    setSaved((prev) => {
      if (prev.length === 0) {
        toast.error("Nothing to clear!");
        return prev;
      }
      toast.success("All technologies cleared!");
      return [];
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h1>Loading...</h1>}>
        <MainLayout
          technologiesPromise={technologiesPromise}
          saved={saved}
          onSave={handleSaveTechnology}
          onRemove={handleRemoveTechnology}
          onClearAll={handleClearAll}
        />
      </Suspense>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;