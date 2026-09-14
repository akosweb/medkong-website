import { Sparkline } from '@medkong/ds';

export const Rising = () => <div style={{ width: 240 }}><Sparkline points={[19, 17, 18, 13, 14, 9, 10, 5, 3]} /></div>;
export const Risk = () => <div style={{ width: 240 }}><Sparkline points={[6, 8, 7, 11, 10, 13, 15, 14, 18]} risk /></div>;
export const Tall = () => <div style={{ width: 240 }}><Sparkline points={[16, 14, 15, 11, 12, 8, 7, 6, 4]} height={40} /></div>;
