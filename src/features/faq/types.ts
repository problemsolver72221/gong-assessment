/**
 * Type for a single FAQ item
 * @typedef {Object} FaqItem
 * @property {string} id - Unique identifier for the FAQ item
 * @property {string} question - The question being asked
 * @property {string} answer - The answer to the question
 * @example
 * const faqItem: FaqItem = {
 *   id: '1',
 *   question: 'What is TypeScript?',
 *   answer: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
 * };
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};