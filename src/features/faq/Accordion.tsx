import { useState } from "react";
import { Item } from "./Item";
import type { FaqItem } from "./types";

/**
 * Accordion component that renders a list of FAQ items, allowing users to expand and collapse each item to view the answer. 
 * It manages the open state of each item and ensures that only one item can be open at a time. 
 * The component also handles the case when there are no FAQ items to display, providing a user-friendly message.
 */

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
