import { sx } from '@/lib/css';

export function PartnerStrip() {
  return (
    <section style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;margin-top:80px;padding:44px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);display:flex;align-items:center;gap:32px 56px;flex-wrap:wrap")}>
    <span style={sx("display:inline-flex;align-items:center;gap:12px")}><img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:36px;height:36px;border-radius:5px")} /><span style={sx("font-weight:600;font-size:16px")}>Built by AKOS</span></span>
    <span style={sx("width:1px;height:34px;background:#D6DBD6")}></span>
    <span style={sx("display:inline-flex;align-items:center;gap:12px")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:24px;width:auto")} /><span style={sx("font-weight:600;font-size:16px")}>Built on Foundry</span></span>
    <span style={sx("flex:1;min-width:260px;font-size:15px;line-height:1.6;color:#3A443E")}>Enterprise data foundations, workflow orchestration and governed AI operations — the infrastructure layer under every module.</span>
    <span style={sx("display:flex;gap:8px;flex-wrap:wrap")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E")}>Ontology-driven</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E")}>Audit trail per action</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E")}>Human in the loop</span>
    </span>
    </div>
    </section>
  );
}
