import Search from "./search";

const Navbar = ({ children }) => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 justify-evenly">
                <h2 className="col-span-1">World Tour</h2>
                <Search />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Navbar;
