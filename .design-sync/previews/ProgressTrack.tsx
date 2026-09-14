import { ProgressTrack } from '@medkong/ds';

export const Labelled = () => <div style={{ width: 320 }}><ProgressTrack label="Packet assembly" percent={72} /></div>;
export const Bare = () => <div style={{ width: 320 }}><ProgressTrack percent={33} /></div>;
export const Risk = () => <div style={{ width: 320 }}><ProgressTrack label="Denied · CO-197" percent={58} risk /></div>;
