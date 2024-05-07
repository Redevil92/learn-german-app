import Verb from "../../../models/Verb";

export default function VerbKonjugation({ verb }: { verb?: Verb }) {
  return <>{JSON.stringify(verb)}</>;
}
