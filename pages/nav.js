import Search from "./search";

const Navbar = ({ children }) => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 justify-evenly absolute z-10">
                <h2 className="col-span-1">World Tour</h2>
                <Search />
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default Navbar;
