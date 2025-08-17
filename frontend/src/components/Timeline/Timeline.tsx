import "./Timeline.css";
import type { ReactNode } from "react";

export type TimelineEntry = {
  id?: string;
  title: string; // row 1 left
  date: string; // row 1 right
  metaTitle: string; // row 2 left (company / school)
  location: string; // row 2 right
  description?: string | ReactNode; // optional row 3
};

type Props = {
  items: TimelineEntry[];
  className?: string;
};

const Timeline = ({ items, className = "" }: Props) => {
  return (
    <ul className={`timeline ${className}`} role="list" aria-label="Timeline">
      {items.map((it, idx) => {
        const key = it.id ?? `timeline-${idx}`;
        return (
          <li className="timeline-item" key={key} role="listitem">
            <div className="timeline-content">
              <div className="timeline-row row-1" aria-hidden={false}>
                <div className="left title">{it.title}</div>
                <div className="right date">{it.date}</div>
              </div>

              <div className="timeline-row row-2">
                <div className="left meta">{it.metaTitle}</div>
                <div className="right location">{it.location}</div>
              </div>

              {it.description ? (
                <div className="timeline-row row-3">
                  <div className="desc">{it.description}</div>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
