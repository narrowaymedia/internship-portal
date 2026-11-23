"use client";
import { Bp } from "./Bp";
import L from "./layout-props.json";
import PmHeader from "./components/PmHeader";
import PmLoader from "./components/PmLoader";
import PmPageTrans from "./components/PmPageTrans";
import PmSmooth from "./components/PmSmooth";
import PmFooter from "./components/PmFooter";

/* eslint-disable @typescript-eslint/no-explicit-any */
const P = L as any;

export function SiteTop() {
  return (
    <>
      <div className="fr-zero" style={{ order: -1000 }}>
        <div className="fr-zero-c"><Bp wrap={false} C={PmHeader} props={P.PmHeader.props} ov={P.PmHeader.ov} /></div>
      </div>
      <div className="fr-zero" style={{ order: -999 }}>
        <div className="fr-zero-c"><Bp wrap={false} C={PmLoader} props={P.PmLoader.props} ov={P.PmLoader.ov} /></div>
      </div>
      <div className="fr-zero" style={{ order: -998 }}>
        <div className="fr-zero-c"><Bp wrap={false} C={PmPageTrans} props={P.PmPageTrans.props} ov={P.PmPageTrans.ov} /></div>
      </div>
      <div className="fr-zero" style={{ order: -997 }}>
        <div className="fr-zero-c"><PmSmooth {...P.PmSmooth.props} /></div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <div className="fr-footer">
      <div className="fr-container"><Bp wrap={false} C={PmFooter} props={P.PmFooter.props} ov={P.PmFooter.ov} /></div>
    </div>
  );
}
