import "../css/skeleton.css";

export function CardProjectSkeleton() {
  return (
    <div>
      <div className="projectskl-card">
        <div className="projectskl-card-info">
          <div className="projectskl-card-title">
            <div className="projectskl-card-title-text"></div>
            <div className="projectskl-card-title-text"></div>
          </div>
          <div className="projectskl-card-desc">
            <div className="projectskl-card-desc-text"></div>
            <div className="projectskl-card-desc-text"></div>
            <div className="projectskl-card-desc-text"></div>
          </div>
        </div>
        <div className="projectskl-card-media"></div>
        <div className="projectskl-card-link">
          <div className="projectskl-card-link-btn"></div>
        </div>
      </div>
    </div>
  );
}
