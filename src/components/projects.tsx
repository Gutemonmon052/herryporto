import "../css/projects.css";
import "../css/error.css";
import { useFetchData } from "../hooks/fetchporto.data";
import { CardProject } from "./cardproject";
import { IProjects } from "../interfaces/iprojects";
import { CardProjectSkeleton } from "./cardproject.skl";

export function Projects() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:QAwUhuBA/projects_table"
  );

  const finData = (data || []).sort(
    (a: IProjects, b: IProjects) => a.id - b.id
  );

  return (
    <div>
      <div className="projects" id="projects">
        <div className="projects-title">
          <h2>PROJECTS</h2>
        </div>
        {error && (
          <>
            <div className="sty-error">
              <h2>Error</h2>
              <p>{error.message}</p>
            </div>
          </>
        )}
        <div className="projects-list">
          {loading ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                <CardProjectSkeleton key={i} />
              ))}
            </>
          ) : finData.length > 0 ? (
            finData.map((e: IProjects) => <CardProject key={e.id} {...e} />)
          ) : (
            <div className="no-data text-[#FAFAFA]">No categories available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
