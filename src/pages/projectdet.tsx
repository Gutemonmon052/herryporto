import { ProjectDetSkl } from "../components/projectdet.skl";
import { ProjectDetDt } from "../components/projectdetdt";
import "../css/projectdet.css";
import { useFetchData } from "../hooks/fetchporto.data";
import { IProjects } from "../interfaces/iprojects";

function ProjectDet() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:QAwUhuBA/projects_table"
  );

  const url = new URL(window.location.href);
  const path = url.pathname.split("/");
  const slugPath = path[path.length - 1].replace(/-/g, " ").toLowerCase();

  console.log(slugPath);
  console.log(data);
  const filteredData = (data || []).filter((item: IProjects) => {
    const modifiedTitle =
      item.name
        ?.toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, " ") || "";
    console.log(modifiedTitle, "ini modifynya");
    return modifiedTitle == slugPath;
  });

  console.log(filteredData);

  return (
    <div>
      {loading ? (
        <>
          <ProjectDetSkl />
        </>
      ) : error ? (
        <div className="error">Error: {error.message}</div>
      ) : filteredData.length > 0 ? (
        filteredData.map((e: IProjects) => <ProjectDetDt key={e.id} {...e} />)
      ) : (
        <div className="no-data">No article available.</div>
      )}
    </div>
  );
}

export default ProjectDet;
