import { useState } from "react";
import { Item } from "./Item";
import type { FaqItem } from "./types";

type AccordionProps = {
  items: FaqItem[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  if (items.length === 0) {
    return (
      <div className="faq-accordion faq-accordion-empty" role="status">
        <p className="faq-empty-message">No FAQs are available at the moment.</p>
      </div>
    );
  }

  const handleToggle = (id: string) => {
    setOpenId((currentOpenId) => (currentOpenId === id ? null : id));
  };

  return (
    <div className="faq-accordion" aria-label="Frequently asked questions">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
