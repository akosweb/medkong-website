import { KpiTile, Label, Window } from '@medkong/ds';

export const Chrome = () => (
  <div style={{ width: 880 }}>
    <Window tenant="Northside Health · Revenue Operations" clock="15:58:47">
      <div style={{ padding: 22 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 12 }}>
          <KpiTile label="Auths cleared" value="1,284" points={[19, 17, 18, 13, 14, 9, 10, 5, 3]} />
          <KpiTile label="First-pass acceptance" value="93.6%" points={[16, 14, 15, 11, 12, 8, 7, 6, 4]} />
          <KpiTile label="Denials at risk" value="$107.7K" risk points={[6, 8, 7, 11, 10, 13, 15, 14, 18]} />
        </div>
        <p style={{ margin: '16px 0 0' }}><Label>Sample data</Label></p>
      </div>
    </Window>
  </div>
);
export const Empty = () => (
  <div style={{ width: 720 }}>
    <Window tenant="Novitas Solutions, Inc. · JH · MAC review" clock="17:01:23">
      <div style={{ padding: 40, textAlign: 'center', color: '#6B736C', fontSize: 13 }}>Window body</div>
    </Window>
  </div>
);
