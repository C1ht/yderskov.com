"use client";

import { useState, useEffect, useRef } from "react";
import PrisResultDoc from "@/components/PrisResultDoc";

const BASE: Record<"vandret" | "skrånende", number> = {
  vandret:   13000,
  skrånende: 15500,
};
const EXT_VÆGGE = [
  { label: "Mur",     adj:    0 },
  { label: "Træ",     adj: -500 },
  { label: "Pudsede", adj:  600 },
];
const TAG = [
  { label: "Tegl",    adj:    0 },
  { label: "Tagsten", adj: -200 },
  { label: "Tagpap",  adj: -700 },
  { label: "Eternit", adj: -400 },
];
const INT_VÆGGE = [
  { label: "Gips",   adj:    0 },
  { label: "Mur",    adj: 1200 },
  { label: "Pudset", adj:  700 },
];
const GULV = [
  { label: "Trægulv", adj:    0 },
  { label: "Fliser",  adj: -300 },
  { label: "Beton",   adj: -600 },
];
const LOFTER = [
  { label: "Gips",      adj:   0 },
  { label: "Troldtekt", adj: 400 },
  { label: "Profil",    adj: 250 },
];
const VÅDRUMS = [
  { label: "Ingen",       adj:     0 },
  { label: "Toilet",      adj:  1200 },
  { label: "Toilet/bad",  adj:  2200 },
  { label: "Bryggers",    adj:   900 },
  { label: "Køkken",      adj:  1800 },
];

const VINDUE_PRIS = 11000;
const DØR_PRIS    = 18000;
const SPÆND       = 0.15;

type Opt = { label: string; adj: number };

function lbl(opts: Opt[], adj: number) {
  return opts.find(o => o.adj === adj)?.label ?? "";
}

function fmt(n: number) {
  return new Intl.NumberFormat("da-DK", {
    style: "currency", currency: "DKK", maximumFractionDigits: 0,
  }).format(n);
}

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(target);
  const prev = useRef(target);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const from = prev.current;
    const to = target;
    if (from === to) return;
    const start = performance.now();
    const duration = 500;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        prev.current = to;
      }
    };
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target]);

  return value;
}

function OptionGroup({
  label, options, selected, onSelect,
}: { label: string; options: Opt[]; selected: number; onSelect: (adj: number) => void }) {
  return (
    <div className="calc2-group">
      <p className="calc2-group-label">{label}</p>
      <div className="calc2-opts">
        {options.map((o) => (
          <button key={o.label} type="button"
            className={`calc2-opt${selected === o.adj ? " calc2-opt-active" : ""}`}
            onClick={() => onSelect(o.adj)}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PrisCalculator() {
  const [grund, setGrund]       = useState<"vandret" | "skrånende">("vandret");
  const [areal, setAreal]       = useState("");
  const [rum, setRum]           = useState("");
  const [vinduer, setVinduer]   = useState("");
  const [terrassedøre, setTD]   = useState("");
  const [extVægge, setExtVægge] = useState(EXT_VÆGGE[0].adj);
  const [tag, setTag]           = useState(TAG[0].adj);
  const [intVægge, setIntVægge] = useState(INT_VÆGGE[0].adj);
  const [gulv, setGulv]         = useState(GULV[0].adj);
  const [lofter, setLofter]     = useState(LOFTER[0].adj);
  const [vådrum, setVådrum]     = useState(VÅDRUMS[0].adj);
  const [result, setResult]     = useState<{ min: number; max: number; snap: Parameters<typeof PrisResultDoc>[0]["result"]["snap"] } | null>(null);

  // Live beregning
  const m2 = parseFloat(areal) || 0;
  const nVin  = Math.max(0, parseInt(vinduer) || 0);
  const nDøre = Math.max(0, parseInt(terrassedøre) || 0);
  const adj   = extVægge + tag + intVægge + gulv + lofter + vådrum;
  const liveTotal = m2 > 0 ? m2 * (BASE[grund] + adj) + nVin * VINDUE_PRIS + nDøre * DØR_PRIS : 0;
  const liveMin = Math.round(liveTotal * (1 - SPÆND));
  const liveMax = Math.round(liveTotal * (1 + SPÆND));

  const animMin = useAnimatedNumber(liveMin);
  const animMax = useAnimatedNumber(liveMax);

  function beregn() {
    if (m2 <= 0) return;
    setResult({
      min: liveMin,
      max: liveMax,
      snap: {
        grund, areal, rum, vinduer, terrassedøre,
        extVægge: lbl(EXT_VÆGGE, extVægge),
        tag:      lbl(TAG,       tag),
        intVægge: lbl(INT_VÆGGE, intVægge),
        gulv:     lbl(GULV,      gulv),
        lofter:   lbl(LOFTER,    lofter),
        vådrum:   lbl(VÅDRUMS,   vådrum),
      },
    });
  }

  if (result) {
    return <PrisResultDoc result={result} onReset={() => setResult(null)} />;
  }

  return (
    <div className="calc2">

      <div className="calc2-top">
        <div className="calc2-top-field">
          <p className="calc2-group-label">Grund</p>
          <div className="calc2-opts">
            {(["vandret", "skrånende"] as const).map((g) => (
              <button key={g} type="button"
                className={`calc2-opt${grund === g ? " calc2-opt-active" : ""}`}
                onClick={() => setGrund(g)}>
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="calc2-top-field">
          <label className="calc2-group-label" htmlFor="c2-areal">Bygningens areal</label>
          <div className="calc2-num-wrap">
            <input id="c2-areal" type="number" min="1" max="10000"
              placeholder="120" className="calc2-num"
              value={areal} onChange={(e) => setAreal(e.target.value)} />
            <span className="calc2-num-unit">m²</span>
          </div>
        </div>

        <div className="calc2-top-field">
          <label className="calc2-group-label" htmlFor="c2-rum">Antal rum</label>
          <div className="calc2-num-wrap">
            <input id="c2-rum" type="number" min="1" max="50"
              placeholder="4" className="calc2-num"
              value={rum} onChange={(e) => setRum(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="calc2-cols">
        <div className="calc2-col">
          <p className="calc2-col-title calc2-col-title-strong">Indvendig</p>
          <OptionGroup label="Vægge"  options={INT_VÆGGE} selected={intVægge} onSelect={setIntVægge} />
          <OptionGroup label="Gulv"   options={GULV}      selected={gulv}     onSelect={setGulv} />
          <OptionGroup label="Lofter"  options={LOFTER}   selected={lofter}   onSelect={setLofter} />
          <OptionGroup label="Vådrums- og køkkeninstallationer" options={VÅDRUMS} selected={vådrum} onSelect={setVådrum} />
        </div>

        <div className="calc2-col">
          <p className="calc2-col-title calc2-col-title-strong">Udvendig</p>
          <OptionGroup label="Vægge" options={EXT_VÆGGE} selected={extVægge} onSelect={setExtVægge} />
          <OptionGroup label="Tag"   options={TAG}        selected={tag}      onSelect={setTag} />
          <div className="calc2-group">
            <p className="calc2-group-label">Vinduer antal</p>
            <div className="calc2-num-wrap">
              <input type="number" min="0" max="50" placeholder="0" className="calc2-num"
                value={vinduer} onChange={(e) => setVinduer(e.target.value)} />
            </div>
          </div>
          <div className="calc2-group">
            <p className="calc2-group-label">Terrassedøre antal</p>
            <div className="calc2-num-wrap">
              <input type="number" min="0" max="20" placeholder="0" className="calc2-num"
                value={terrassedøre} onChange={(e) => setTD(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* Live prisskøn */}
      <div className="calc2-live">
        {m2 > 0 ? (
          <>
            <div className="calc2-live-prices">
              <div className="calc2-live-price">
                <span className="calc2-live-lbl">Laveste skøn</span>
                <span className="calc2-live-num">{fmt(animMin)}</span>
              </div>
              <div className="calc2-live-sep" />
              <div className="calc2-live-price">
                <span className="calc2-live-lbl">Højeste skøn</span>
                <span className="calc2-live-num">{fmt(animMax)}</span>
              </div>
            </div>
            <p className="calc2-live-note">Vejledende · inkl. moms · opdateres løbende</p>
          </>
        ) : (
          <p className="calc2-live-empty">—</p>
        )}
      </div>

      <button type="button" className="calc2-btn" onClick={beregn}>Beregn dit prisskøn</button>
    </div>
  );
}
