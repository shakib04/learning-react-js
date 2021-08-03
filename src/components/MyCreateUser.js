import { useState } from "react"
import { useParams } from "react-router";
import { users } from './../usersData';

const CreateUser = ({ status }) => {

    const [userlist, setUserList] = useState(users);

    const addUser = (name, newId, dept) => {
        //const list = userlist.filter((user) => user.id !== id);
        //setUserList(list);
        if (status == "add") {
            setUserList(
                users.push({
                    id: newId,
                    name: name,
                    dept: dept
                })
            )
        } else if (status == 'edit') {
            // userlist = userlist.filter((user) => user.id !== parseInt(eid));
            // //setUserList(list);
            // console.log(users);

            // userlist.push({
            //     id: parseInt(eid),
            //     name: name,
            //     dept: dept
            // })

            // console.log(userlist);

            const updatedData = userlist.map(x => (x.id === parseInt(eid) ? { ...x, name: name, dept: dept } : x));
            console.log(updatedData);

            setUserList(updatedData);
        }
        //console.log(name, dept, newId);
    }

    const { id: eid } = useParams();

    const [name, setName] = useState("");
    const [newId, setNewId] = useState("");


    const [dept, setDept] = useState("");

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const idChange = (e) => {
        setNewId(e.target.value)
    }

    const deptChange = (e) => {
        setDept(e.target.value)
    }

    const formSumbit = (e) => {
        e.preventDefault()

        addUser(name, newId, dept)

        //console.log(name, dept, newId);
    }

    const popuForm = () => {
        if (status === 'edit') {
            const user = users.findIndex((x) => x.id == eid)
            setName(user.name)
            setDept(user.dept)
        }
    }

    return (
        <div onLoad={popuForm}>
            <br />
            <h3>{status === 'add' ? 'Create' : 'Edit'} User Page: {eid}</h3>
            <form method="post" onSubmit={formSumbit}>
                Name: <input type='text' name='name' onChange={nameChange} value={name} /> <br />

                ID: <input type='text' name='id' onChange={idChange} value={status == 'edit' ? eid : newId} disabled={status == 'edit' ? "disabled" : ""} /><br />

                Dept: <input type='text' name='dept' value={dept} onChange={deptChange} /><br />
                <input type='submit' value={status === 'add' ? 'Create' : 'Update'} />
            </form>
        </div>
    );
}

export default CreateUser;