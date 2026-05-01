# FAQ Accordion Section

React + TypeScript + Vite implementation of the FAQ section from the Figma design.

---

## Running the Project

```bash
npm install
npm run dev
```

```bash
npm run build
```

---

## Project Structure

```
src/
  components/
    Section/
  features/
    faq/
      Section.tsx
      Intro.tsx
      Accordion.tsx
      Item.tsx
      types.ts
  styles/
  App.tsx
  main.tsx
```

I split the FAQ into a feature-level module rather than dropping everything into a single component. It's a bit more setup for something this size, but it keeps each piece focused and makes the whole thing easier to pull apart or replace later. `Intro` handles the left-side content, `Accordion` manages open/close state, and `Item` renders a single row.

---

## Accordion Behavior

First item opens by default. Felt more useful than landing on a completely collapsed list, but it's a one-line change if the preference is different.

Only one item can be open at a time. The accordion is data-driven:

```ts
type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
```

Right now it's fed mock data. Switching to a real CMS or API later means passing different items into `<Accordion items={...} />`, the component itself doesn't care where the content comes from.

---

## Accessibility

Native `<button>` elements handle keyboard behavior out of the box. Tab to move between items, Enter or Space to toggle. Each item has `aria-expanded`, `aria-controls`, and `aria-labelledby` so screen readers can follow the open/close state. The icon is `aria-hidden` since it's purely decorative.

Section heading is `h2` on the assumption this lives inside a page that already has an `h1`. Worth double-checking where this sits in the final page hierarchy.

---

## Translations

The accordion markup has no hardcoded strings, it only cares about the item shape, so French and German content slots in without any changes to the component.

One thing worth flagging before launch: translated copy tends to run longer than English, sometimes significantly. The layout uses no fixed heights so it should flex fine, but it's worth a visual check with real translated content rather than finding out after deploy.

---

## SEO

The FAQ content renders as actual HTML, real headings and real paragraph text, so it's readable by search engines without any extra work. If the SEO team wants rich results in Google, adding structured data is the next step, but worth confirming that's actually a priority before going there.

---

## Before This Goes to Production

Five things I'd want to pin down before building the production version:

1. One item open at a time, or can multiple be open? This shapes the state logic from the start, easier to agree on now than untangle later.

2. What happens when a translation isn't ready yet? Fall back to English, hide the item, or hold the whole page? It's the kind of edge case that gets forgotten until someone ships a half-empty French page.

3. Can answers contain rich text? If editors ever drop a link or a bulleted list into the CMS and the component renders it as a raw string, it'll look broken. Better to decide upfront whether that's in scope.

4. Are FAQ interactions being tracked? If analytics matter here, cleaner to wire up the events from the start rather than patch them in after launch.

5. Is this list always going to stay small? Six items, keep it simple. If there's a chance it grows into something with categories or filtering, the component needs a different foundation from day one.