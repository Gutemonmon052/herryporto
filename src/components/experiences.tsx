import "../css/experiences.css";
import { useFetchData } from "../hooks/fetchporto.data";
import { ExperiencesDt } from "./experiencesdt";
import { IExperiences } from "../interfaces/iexperiences";
import { ExperiencesSklDt } from "./experiences.skl";

export function Experiences() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:QAwUhuBA/experiences_table"
  );

  const finData = (data || []).sort(
    (a: IExperiences, b: IExperiences) => a.id - b.id
  );

  return (
    <div>
      <div className="experiences" id="experiences">
        <div className="experiences-title">
          <h2>EXPERIENCES</h2>
        </div>
        <div className="experiences-list">
          {loading ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                <ExperiencesSklDt key={i} />
              ))}
            </>
          ) : error ? (
            <div className="sty-error">
              <h2>Error</h2>
              <p>{error.message}</p>
            </div>
          ) : finData.length > 0 ? (
            finData.map((e: IExperiences) => (
              <ExperiencesDt key={e.id} {...e} />
            ))
          ) : (
            <div className="no-data">No experience available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
