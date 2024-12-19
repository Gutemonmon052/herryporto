import "../css/testimonials.css";
import { useFetchData } from "../hooks/fetchporto.data";
import { TestimonialsDt } from "./testidt";
import { ITestimonials } from "../interfaces/itestimoni";
import { TestimonialSkeleton } from "./testimonial.skl";

export function Testimonials() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:QAwUhuBA/testimoni_table"
  );

  const finData = (data || []).sort(
    (a: ITestimonials, b: ITestimonials) => a.id - b.id
  );
  return (
    <div>
      <div className="testimonials" id="testimonials">
        <div className="testimonials-title">
          <h2>
            TEST
            <br />
            IMON
            <br />
            IALS
          </h2>
        </div>
        <div className="testimonials-list">
          {loading ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                <TestimonialSkeleton key={i} />
              ))}
            </>
          ) : error ? (
            <div className="sty-error">
              <h2>Error</h2>
              <p>{error.message}</p>
            </div>
          ) : finData.length > 0 ? (
            finData.map((e: ITestimonials) => (
              <TestimonialsDt key={e.id} {...e} />
            ))
          ) : (
            <div className="no-data text-[#FAFAFA]">No testimonials available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
