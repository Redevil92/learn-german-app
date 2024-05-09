import VerbZeitform from "../../../models/VerbZeitform";

export default function VerbZeitformTable({ verb }: { verb: VerbZeitform }) {
  return (
    <>
      <div className="p-3 bg-primary-color-background text-medium ">
        <div className="mb-5 font-semibold flex justify-center">
          {verb.zeitform}
        </div>
        <div className="mb-2">
          ich{" "}
          <span className="mr-4 text-primary-color font-semibold">
            {verb.ich}
          </span>
        </div>

        <div className="mb-2">
          du{" "}
          <span className="mr-4 text-primary-color font-semibold">
            {verb.du}
          </span>
        </div>

        <div className="mb-2">
          er/sie/es{" "}
          <span className="mr-4 text-primary-color font-semibold">
            {verb.er}
          </span>
        </div>

        <div className="mb-2">
          wir{" "}
          <span className="mr-4 text-primary-color font-semibold">
            {verb.wir}
          </span>
        </div>

        <div className="mb-2">
          ihr{" "}
          <span className="mr-4 text-primary-color font-semibold">
            {verb.ihr}
          </span>
        </div>

        <div className="">
          sie/Sie{" "}
          <span className="mr-4 text-primary-color font-semibold">
            {verb.sie}
          </span>
        </div>
      </div>
    </>
  );
}
