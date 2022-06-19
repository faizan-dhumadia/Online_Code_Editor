import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Modal, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setName, setPass } from '../store/userSlice'
import userContext from '../context/users/userContext'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [open, setOpen] = useState(false);
    const handleClose = () => setNav(!nav);
    const [fullname, setFullname] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [openSignIn, setOpenSignIn] = useState(false);


    const [reloadKey, setReloadKey] = useState(1)
    const authToken = useSelector((state) => state.user.authToken);


    const context = useContext(userContext);
    const { createUser, loginUser, logOut } = context
    const navigator = useNavigate()

    const dispatch = useDispatch()

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,

        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const signUp = (e) => {
        e.preventDefault();
        if (fullname === "" || emailId === "" || password === "") {
            return;
        }
        dispatch(setName(fullname))
        dispatch(setEmail(emailId))
        dispatch(setPass(password))
        createUser(fullname, emailId, password);
        setFullname('')
        setEmailId('');
        setPassword('');
        setOpen(false)
        setReloadKey(Math.random())
        navigator("/ide");

    }
    const signIn = (e) => {
        e.preventDefault();
        if (emailId === "" || password === "") {
            return;
        }
        dispatch(setEmail(emailId))
        dispatch(setPass(password))
        loginUser(emailId, password);
        setEmailId('');
        setPassword('');
        setOpenSignIn(false)
        setReloadKey(Math.random())
        navigator("/ide")

    };

    const logOutCall = () => {
        setReloadKey(Math.random())
        // console.log(reloadKey);
        logOut();
        navigator("/");
        // console.log(authToken);
    };
    useEffect(() => {
        // console.log("Navbar ReloadKey change:", reloadKey, " ", authToken.payload);
        // const authToken = useSelector((state) => state.user.authToken);

    }, [reloadKey]);

    return (
        <div className="w-screen h-[80px] z-10 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">COMPILER.</h1>
                    <ul className="hidden md:flex space-x-3">
                        <li>
                            <Link to="/" smooth={true} duration={500}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" smooth={true} offset={-200} duration={500}>
                                ADMIN
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    {authToken.payload === undefined || authToken.payload === '' ?
                        (<>
                            <button className="border-none bg-transparent text-black mr-4" onClick={() => setOpenSignIn(true)}>
                                Sign In
                            </button>
                            <button className="px-8 py-3" onClick={() => setOpen(true)}>
                                Sign Up
                            </button>
                        </>
                        )
                        : (
                            authToken.payload !== "" && <div>
                                <button
                                    type="button"
                                    className="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={logOutCall}
                                >
                                    {" "}
                                    Log Out
                                </button>
                            </div>
                        )}
                </div>
                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                </div>
            </div>
            <Modal
                open={open}
                // EVERY SINGLE TIME U CLICK OUTSIDE THE MODAL IT SWT THE STATE  OF THE MODAL TO FALSE IE IT WILL CLOSE THE MODAL
                onClose={() => setOpen(false)}
            >
                <Box sx={style}>
                    <form className="app_signup">
                        <center>
                            <img
                                className="app_headerImage"
                                src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
                                alt="applogo"
                            />
                        </center>
                        <TextField
                            id="name"
                            margin="dense"
                            label="fullname"
                            variant="outlined"
                            placeholder="Enter Your Name"
                            required=""
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                        <TextField
                            id="email"
                            margin="dense"
                            label="emailId"
                            variant="outlined"
                            type="text"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            placeholder="Enter Your Email" required=""
                        />
                        <TextField
                            margin="dense"
                            label="PASSWORD"
                            variant="outlined"
                            color="secondary"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Your Password' required=""
                        />
                        <br />
                        <br />
                        <Button variant="contained" type="submit" onClick={(e) => signUp(e)}>
                            SignUp
                        </Button>
                    </form>
                </Box>
            </Modal>

            <Modal
                open={openSignIn}
                // EVERY SINGLE TIME U CLICK OUTSIDE THE MODAL IT SWT THE STATE  OF THE MODAL TO FALSE IE IT WILL CLOSE THE MODAL
                onClose={() => setOpenSignIn(false)}
            >
                <Box sx={style}>
                    <form className="app_signIn">
                        <center>
                            <img
                                className="app_headerImage"
                                src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
                                alt="applogo"
                            />
                        </center>

                        <TextField
                            id="email"
                            margin="dense"
                            label="emailId"
                            variant="outlined"
                            type="text"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            placeholder="Enter Your Email" required=""
                        />
                        <TextField
                            margin="dense"
                            label="PASSWORD"
                            variant="outlined"
                            color="secondary"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Your Password' required=""
                        />
                        <br />
                        <br />
                        <Button variant="contained" type="submit" onClick={(e) => signIn(e)}>
                            SignIn
                        </Button>
                    </form>
                </Box>
            </Modal>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link onClick={handleClose} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link
                        onClick={handleClose}
                        to="about"
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        About
                    </Link>
                </li>

                {authToken.payload === undefined || authToken.payload === '' ?
                    (<>
                        <div className="flex flex-col my-4">
                            <Button onClick={() => setOpenSignIn(true)}>SIGN IN</Button>
                            <Button onClick={() => setOpen(true)}>SIGN UP</Button></div></>)
                    : (authToken.payload !== "" && <div>
                        <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={logOutCall}>
                            Log Out
                        </button>
                    </div>)}

            </ul>
        </div>
    );
};

export default Navbar;
