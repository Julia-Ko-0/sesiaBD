
import { NavLink } from "react-router-dom"
import { useState} from "react"

import a from './heder.module.css'
function CrElemNav(props){
    return(
        <li>
            <NavLink to={props.textNav}  onClick={()=> {
            props.setOpen_(!props.isOpen_)
                 console.log(props.isOpen_, "ddddddd")}} >{props.text}</NavLink>
        </li>
    )

}
function CrHeder(){

    const [isOpen, setOpen] = useState(false)

    return(
        <header className={a.Heder}>
            <div>
           
                <NavLink  to ={"/"}>  Ж/Д Вокзал </NavLink>
            </div>
            <div className={a.hederIcon} onClick={()=> {
            setOpen(!isOpen)
                 console.log(isOpen)}}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 8H20M4 16H12" stroke="#63260c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <nav class={`NavHeder ${isOpen  ? "active" : ""}`}>  
                <ul>
                    <CrElemNav setOpen_ = {setOpen} isOpen_={isOpen} text='Билеты' textNav='tickets' />
                    <CrElemNav setOpen_ = {setOpen} isOpen_={isOpen} text='Поезда' textNav='trains'/>
                    <CrElemNav setOpen_ = {setOpen} isOpen_={isOpen} text='Информация о поезде' textNav='infOftrain'/>
                    <CrElemNav setOpen_ = {setOpen} isOpen_={isOpen} text='Сотрудники' textNav='emplouos'/>
                </ul>
            </nav>
        </header>
      
    )
}

function CrHome(){
    return(
        <div>
            <input></input>
            <input></input>
            <button>Найти</button>
        </div>
    )
}
export{CrHeder, CrHome}