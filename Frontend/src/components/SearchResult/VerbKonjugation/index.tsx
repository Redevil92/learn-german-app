import Verb from "../../../models/Verb";

export default function VerbKonjugation({ verb }: { verb?: Verb }) {
  return (
    <>
      Model:{" "}
      <span className="mr-4 text-primary-color font-semibold">
        {verb?.infinitive}
      </span>{" "}
      Auxiliary:{" "}
      <span className="mr-4 text-primary-color font-semibold">
        {verb?.hilfsverb}
      </span>
      <div className="mt-5 ">
        <div className="p-3 bg-primary-color-background text-medium ">
          <div className="mb-5 font-semibold flex justify-center">Präsens</div>
          <div className="mb-2">
            ich{" "}
            <span className="mr-4 text-primary-color font-semibold">
              {verb?.praesens_ich}
            </span>
          </div>

          <div className="mb-2">
            du{" "}
            <span className="mr-4 text-primary-color font-semibold">
              {verb?.praesens_du}
            </span>
          </div>

          <div className="mb-2">
            er/sie/es{" "}
            <span className="mr-4 text-primary-color font-semibold">
              {verb?.praesens_er}
            </span>
          </div>

          <div className="mb-2">wir</div>

          <div className="mb-2">ihr</div>

          <div className="">sie/Sie</div>
        </div>
      </div>
    </>
  );
}
