import {
  getPraesens,
  getPraeteritum,
  getFuturI,
  getPerfekt,
  getPlusquamperfekt,
  getFuturII,
} from "../../../GermanGrammar/Verbs";
import Verb from "../../../models/Verb";
import VerbTable from "../VerbTable";

export default function VerbKonjugation({ verb }: { verb: Verb }) {
  return (
    <>
      Partizip Perfekt:{" "}
      <span className="mr-10 text-primary-color font-semibold">
        {verb?.partizip_II}
      </span>
      Auxiliary:{" "}
      <span className="mr-4 text-primary-color font-semibold">
        {verb?.hilfsverb}
      </span>
      <div className="mt-5 ">
        <div className="mb-2 text-primary-color text-center font-semibold">
          INDIKATIV
        </div>

        <div className="inline-grid grid-cols-3 gap-4">
          <VerbTable verb={getPraesens(verb)} />
          <VerbTable verb={getPraeteritum(verb)} />
          <VerbTable verb={getFuturI(verb)} />
          <VerbTable verb={getPerfekt(verb)} />
          <VerbTable verb={getPlusquamperfekt(verb)} />
          <VerbTable verb={getFuturII(verb)} />
        </div>
      </div>
    </>
  );
}
