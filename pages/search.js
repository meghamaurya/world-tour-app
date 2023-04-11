
const Search = () => {
    const handleChange = (e) => {
        console.log(e.target.value, "search")
    }
    return (
        <div className="flex gap-1">
            <input className="border border-blue-500 rounded-md" onChange={handleChange} />
            <button className="bg-blue-400 px-2 font-bold rounded-md">search</button>
        </div>
    )
}

export default Search
