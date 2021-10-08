const Search = ({
  query,
  setQuery,
}: {
  query: string
  setQuery: (query: string) => void
}): JSX.Element => {
  return (
    <div className="border-bottom border-b-2 flex">
      <input
        type="text"
        className="flex w-auto lg:w-36 xl:w-48 xs:block text-base py-1.5 px-1 focus:border-transparent focus:outline-none dark:bg-gray-700  border-blue-300 rounded"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default Search
