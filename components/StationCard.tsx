import Link from "next/link";

interface Props {
  name: string;
  slug: string;
  state: string;
}

export default function StationCard({
  name,
  slug,
  state,
}: Props) {
  return (
    <Link
      href={`/station/${slug}`}
      className="border rounded-2xl p-5 block hover:shadow-lg transition"
    >

      <h2 className="text-xl font-semibold">
        {name}
      </h2>

      <p className="text-gray-500 mt-2">
        {state}
      </p>

    </Link>
  );
}