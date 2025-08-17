import "./Accordion.css";
import type { ReactNode } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type AccordionItem = {
  id?: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  titleIcon?: IconProp;
};

type Props = {
  items: AccordionItem[];
  allowMultiple?: boolean; // when true, more than one item can be open
};

const Accordion = ({ items, allowMultiple = true }: Props) => {
  const [openMap, setOpenMap] = useState<boolean[]>(
    items.map((it) => !!it.defaultOpen),
  );

  const toggle = (index: number) => {
    setOpenMap((prev) => {
      const next = [...prev];
      if (allowMultiple) {
        next[index] = !next[index];
        return next;
      } else {
        // only one open at a time
        return prev.map((_, i) => (i === index ? !prev[i] : false));
      }
    });
  };

  return (
    <div className="accordion" role="presentation">
      {items.map((item, i) => {
        const isOpen = !!openMap[i];
        const headerId = item.id
          ? `${item.id}-header`
          : `accordion-${i}-header`;
        const panelId = item.id ? `${item.id}-panel` : `accordion-${i}-panel`;

        return (
          <div className="accordion-item" key={item.id ?? i}>
            <div
              id={headerId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              className={`accordion-header ${isOpen ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="accordion-title-container">
                {item.titleIcon && <FontAwesomeIcon icon={item.titleIcon} />}
                <span className="accordion-title">{item.title}</span>
              </div>
              <span
                className={`accordion-chevron ${isOpen ? "open" : ""}`}
                aria-hidden
              >
                ▾
              </span>
            </div>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`accordion-panel ${isOpen ? "open" : ""}`}
            >
              <div className="accordion-panel-inner">{item.children}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
