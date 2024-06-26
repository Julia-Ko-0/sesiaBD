import a from "./tickets.module.css"
import { useState } from "react"
import { useNavigate, navigate } from "react-router-dom"

function CrElTik(props){
    return(
        <div className={a.ticket}>
            <div className={a.ticket_text}>

                <p>{props.timeOtp}</p>
                <p>-</p>
                <p>{props.timePrib}</p>

             
            </div>
            <div className={a.ticket_text2}>
                <p>В наличии билеты: </p>
                {/* {
                    props.masP.map(m=>(
                        <CrInfTr kolv={m.} price={m.}/>
                    ))
                    }  */}
                <CrInfTr kolv="200" price="1000"/>
                <CrInfTr/>
                <CrInfTr/>
            </div>
        </div>
    )
}
function CrInfTr(props){
    return(
        <div className={a.infOTr}>
            <p>Вид поезда </p>
            <p>{props.kolv}</p>
            <p>от {props.price}</p>
        </div>
    )
}
function CrTicets(){
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate();
    return(
        <div className={a.divTicketsFiltr}>
            
            <div className={a.divFiltr}>
            <button onClick={() => navigate(-1)}>Назад</button>
                <p  className={a.Filtr} onClick={()=> setOpen(!isOpen)}>Фильтры</p>
                <div class={`Filtrs ${isOpen  ? "active" : ""}`}>
                    <div  className={a.divFiltr2}>
                        <p>Стоимость</p>
                        <p>Время отправления</p>
                        <p>время прибытия</p>
                        <p>типы мест</p>
                        <p>тип поезда</p>
                    </div>
                </div>
            </div>
             <div className={a.divTickets}>
             {/* {
                    app.map(m=>(
                        <CrElTik timeOtp={m.} timePrib={m.} masTick="2" masP={m.}/>
                    ))
                    }  */}
                <CrElTik kolv="200" price="1000" timeOtp="19:00" timePrib="23:20" masTick="2"/>
                <CrElTik kolv="200" price="1000" timeOtp="10:30" timePrib="12:00" masTick="2" />
            </div>
        </div>
       
    )
}
export { CrTicets}