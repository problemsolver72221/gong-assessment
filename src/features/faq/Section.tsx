import { Section as BaseSection } from "../../components/Section";
import { Accordion } from "./Accordion";
import { Intro } from "./Intro";
import type { FaqItem } from "./types";

/**
 * FAQ Section component that displays a list of frequently asked questions and their answers.
 */
const faqItems: FaqItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: `faq-${index + 1}`,
  question : "Lorem ipsum dolor sit amet consectetur?",
  answer: "Lorem ipsum dolor sit amet consectetur. Lorem quisque imperdiet facilisis turpis ultrices. Pretium aenean et sem amet. Dignissim ipsum urna et turpis at viverra quisque convallis. Elit pellentesque ullamcorper ut quam risus. Tellus quis odio euismod dignissim. Sed non donec aliquam mollis. Duis eu ullamcorper a gravida. Pretium vel eget aliquet at et. Blandit suspendisse venenatis nisi orci. Adipiscing proin posuere nec quis et in massa. Scelerisque.",
}));


// In a production page, this array could be replaced with localized CMS/API data using 
// Fetch faqItems from an API or CMS, ensuring that the content is dynamic and can be easily updated without code changes. The structure of faqItems should match the FaqItem type defined in types.ts,
// using the same FaqItem shape: { id, question, answer }.




export const FaqSection = () => {
  return (
    <BaseSection
      id="request-demo"
      className="faq-section"
      labelledBy="faq-title"
    >
      <div className="faq-container">
        <Intro />
        <Accordion items={faqItems} />
      </div>
    </BaseSection>
  );
};
