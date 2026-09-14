import { SectionHead } from '@medkong/ds';

export const TwoColumn = () => (
  <SectionHead
    eyebrow="Workflow coverage"
    headline="Built for the work that slows revenue down."
    support="Eight workflows, deployable independently. Two of them are where most operators start, because that is where the leakage and the labor are."
  />
);
export const HeadlineOnly = () => <SectionHead eyebrow="Who it’s for" headline="Built for operators running complex revenue work." />;
export const OnTeal = () => (
  <div style={{ background: '#0A5A4B', padding: 32 }}>
    <SectionHead onTeal eyebrow="Why Palantir" headline="MEDKONG is built on Palantir Foundry." support="Serious workflow infrastructure needs a serious foundation." />
  </div>
);
