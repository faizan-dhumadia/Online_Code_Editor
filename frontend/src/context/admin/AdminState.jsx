import AdminContext from "./userContext";
import { useSelector, useDispatch } from "react-redux";
import { setAdminToken, setaEmail, setaName, setaPass, setAdminId } from "../../store/adminSlice";


const UserState = (props) => {
  const host = "http://localhost:5000"
  const dispatch = useDispatch()

  const createAdmin = async (name, email, password) => {
    const response = await fetch(`${host}/api/admin/createadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "name": name, "email": email, "password": password })
    });
    const data = await response.json()
    // console.log("Data:",data.adminToken);
    dispatch(setAdminToken(data.adminToken))
    // console.log(name);
    // console.log(email);
    // console.log(password);
    getUser(data);
  }
  const loginAdmin = async (email, password) => {
    const response = await fetch(`${host}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json()
    dispatch(setAdminToken(data.adminToken))
    // console.log(name);
    // console.log(email);
    // console.log(password);
    console.log(data);
    getUser(data);
  }
  const getAdmin = async (token) => {
    console.log(token.adminToken);
    const response = await fetch(`${host}/api/admin/getadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token.adminToken,
      }
    });
    const data = await response.json()
    dispatch(setAdminId(data._id))
    dispatch(setaName(data.name))
    dispatch(setaEmail(data.email))
    console.log("getUser Data is called");
    console.log(data._id);
    console.log(data.email);
    console.log(data.name);
    console.log(data);
  }

  const logOutAdmin = () => {
    dispatch(setAdminToken(''))
    dispatch(setaName(''))
    dispatch(setaUserId(''))
    dispatch(setaPass(''))
    dispatch(setaEmail(''))
  }
  return (
    <UserContext.Provider value={{ createAdmin, loginAdmin, logOutAdmin }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserState;