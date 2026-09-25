import type { Technology } from "../Types/types.ts";



  return (
    <main>
      <section className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">


          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                No technologies found.
              </p>
            ) : (
              technologies.map((tech) => {
            
                return (
                  <TechCard
                    key={tech.name}
                    tech={tech}


                  />
                );
              })
            )}
          </div>

          {/* Sidebar */}
          <aside className="col-span-1">
            <Sidebar/>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default MainLayout;