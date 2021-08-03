import { Link } from "react-router-dom"


const Navbar = ()=>{

    return (
        <div>
            <Link to="/create">Create New User</Link> | 
            <Link to="/userlist">User List</Link> | 
            <Link to="/postlist"> Post List</Link>
        </div>
    );
}

export default Navbar;