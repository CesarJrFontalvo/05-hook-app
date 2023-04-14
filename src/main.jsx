import React from 'react'
import ReactDOM from 'react-dom/client'


// import CounterApp from './01-useState/CounterApp'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import HooksApp from './HooksApp'
// import SimpleForm from './02-useEffect/SimpleForm'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import {MultipleCustomHooks} from './03-example'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import Layout from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemorizeHook } from './06-memos/MemorizeHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { getRoutes } from './09-useContext/Routes';
import { HomePage } from './09-useContext/HomePage';
import { LoginPage } from './09-useContext/LoginPage';
import { AboutPage } from './09-useContext/AboutPage';


const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <MainApp/>
  <RouterProvider router={router} />
  // </React.StrictMode>
  ,
)
