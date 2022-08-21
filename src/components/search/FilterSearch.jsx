export default function FilterSearch({ query, setQuery }) {
  return (
    <div className="max-w-xs mx-auto mt-5">
      <input
        autoComplete="off"
        type="text"
        name="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search.."
        className="w-full"
      />
    </div>
  );
}
