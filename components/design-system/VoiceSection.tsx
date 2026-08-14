import { sx } from '@/lib/css';

export function VoiceSection() {
  return (
    <section id="voice" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>15 — Voice &amp; content rules</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Name the operational failure, then the mechanism.</h2>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px;margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#0A5A4B")}>Do</span>
    <ul style={sx("margin:14px 0 0;padding-left:18px;font-size:15px;line-height:1.75;color:#3A443E")}>
    <li>Lead with the specific failure: "the requirement is buried in a payer policy, the evidence is in three systems, and the clock started yesterday."</li>
    <li>Say what the software does, in operator vocabulary: queues, packets, remits, CARC codes, filing limits.</li>
    <li>Label every illustrative figure as illustrative, and every mock panel as a concept on synthetic data.</li>
    <li>Keep section support lines to one or two sentences.</li>
    </ul>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#96301A")}>Don't</span>
    <ul style={sx("margin:14px 0 0;padding-left:18px;font-size:15px;line-height:1.75;color:#3A443E")}>
    <li>"Revolutionize", "seamless", "AI-powered", "transform your revenue cycle".</li>
    <li>Unlabeled statistics, invented customer results, or named clients we don't have.</li>
    <li>Endorsement claims about Palantir beyond "Built on Palantir Foundry".</li>
    <li>Emoji, exclamation marks, or rhetorical questions as headlines.</li>
    </ul>
    </div>
    </div>
    <div style={sx("margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:18px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Required captions</span>
    <p style={sx("margin:12px 0 0;font:400 12.5px/1.7 'IBM Plex Mono',monospace;color:#3A443E")}>"Interface concept — all data synthetic and de-identified."<br /><br />"Illustrative deployment targets used in planning, not customer results."</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Synthetic data conventions</span>
    <div style={sx("margin-top:12px;display:grid;gap:8px;font:400 12.5px/1.6 'IBM Plex Mono',monospace;color:#3A443E")}>
    <span>Cases PA-4xxxx · Claims CLM-88xxx · Accounts ACC-77xxxx</span>
    <span>Real CPT/HCPCS and CARC codes, fictional patients</span>
    <span>Payers: Aetna, UHC, BCBS, Humana, Cigna, Medicaid MCO</span>
    <span>Tenant: "Northside Health · Revenue Operations"</span>
    </div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Headline pattern</span>
    <p style={sx("margin:12px 0 0;font-size:14px;line-height:1.65;color:#3A443E")}>Declarative sentence, full stop, under 10 words. "Catch the claim before the payer does." "Work the accounts that will actually pay."</p>
    </div>
    </div>
    </div>
    </section>
  );
}
