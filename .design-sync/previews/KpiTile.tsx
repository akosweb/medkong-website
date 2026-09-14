import { KpiTile } from '@medkong/ds';

export const Trend = () => <div style={{ width: 240 }}><KpiTile label="Auths cleared" value="1,284" points={[19, 17, 18, 13, 14, 9, 10, 5, 3]} /></div>;
export const Risk = () => <div style={{ width: 240 }}><KpiTile label="Denials at risk" value="$107.7K" risk points={[6, 8, 7, 11, 10, 13, 15, 14, 18]} /></div>;
export const NoTrend = () => <div style={{ width: 240 }}><KpiTile label="Steps reviewed" value="0 / 7" /></div>;
export const Strip = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12 }}>
    <KpiTile label="Auths cleared" value="1,284" points={[19, 17, 18, 13, 14, 9, 10, 5, 3]} />
    <KpiTile label="First-pass acceptance" value="93.6%" points={[16, 14, 15, 11, 12, 8, 7, 6, 4]} />
    <KpiTile label="Denials at risk" value="$107.7K" risk points={[6, 8, 7, 11, 10, 13, 15, 14, 18]} />
    <KpiTile label="AR over 90 days" value="22%" points={[8, 9, 12, 11, 14, 15, 17, 18, 20]} />
  </div>
);
