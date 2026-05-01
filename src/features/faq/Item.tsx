import type { FaqItem } from "./types";

type ItemProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

export const Item = ({ item, isOpen, onToggle }: ItemProps) => {
  const buttonId = `${item.id}-button`;
  const contentId = `${item.id}-content`;

  return (
    <article className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <h3 className="faq-item-title">
        <button
          id={buttonId}
          className="faq-question-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
        >
          <span className="faq-question-text">{item.question}</span>

          <span
            className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        id={contentId}
        className="faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{item.answer}</p>
      </div>
    </article>
  );
};
