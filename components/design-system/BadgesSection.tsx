import { sx } from '@/lib/css';
import { useGuide } from './state';

export function BadgesSection() {
  const { clock } = useGuide();

  return (
    <section id="badges" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>07 — Badges, tags &amp; chips</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Three states, one shape language.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>Status tags are mono, uppercase, 5px radius. Teal means resolved or on-track, rust means risk or exception, gray means inert or complete. Never invent a fourth color.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Status tag — in mock UI</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:8px;margin-top:18px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B;white-space:nowrap")}>READY</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B;white-space:nowrap")}>ATTACHED</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#FBE9E3;color:#96301A;white-space:nowrap")}>REVIEW</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#FBE9E3;color:#96301A;white-space:nowrap")}>ESCALATE</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C;white-space:nowrap")}>SUBMITTED</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C;white-space:nowrap")}>WRITE-OFF</span>
    </div>
    <pre style={sx("margin-top:18px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>font:500 10.5px/1 mono; letter-spacing:.05em;
    padding:5px 9px; border-radius:5px;
    justify-self:start; white-space:nowrap</pre>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Module badge — card header</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:8px;margin-top:18px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:6px 10px;border-radius:6px")}>Module 01 · Pre-service</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#96301A;background:#FBE9E3;padding:6px 10px;border-radius:6px")}>Module 06 · Post-service</span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Teal for pre-service and mid-cycle modules; rust only for the denials module, where the subject itself is exceptions.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Attribute chip — capability lists</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:8px;margin-top:18px")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Objects</span>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Lineage</span>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>HL7 / FHIR</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E")}>Ontology-driven</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E")}>Human in the loop</span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Filled gray chips inside cards; outlined white chips on gray bands. Teal fill marks the chip that belongs to a highlighted (Foundry) row.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Live indicator &amp; time filter</span>
    <div style={sx("display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:18px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}><span style={sx("width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite")}></span>Live</span>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>{clock}</span>
    <span style={sx("display:flex;gap:6px")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 11px;border-radius:6px;background:#E3F0EB;color:#0A5A4B")}>7 days</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 11px;border-radius:6px;border:1px solid #E1E5E0;color:#616961")}>30 days</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 11px;border-radius:6px;border:1px solid #E1E5E0;color:#616961")}>Quarter</span>
    </span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>The pulsing dot is the only always-on animation in the system. One per panel, never more.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
