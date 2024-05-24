import { useState } from "react";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { CalendarCustom } from "./Calendar.styled";


export default function Calendar() {
  const [selected, setSelected] = useState();

  return (  
  <CalendarCustom 
    locale={ru} 
    mode="single" 
    selected={selected} 
    onSelect={setSelected} 
  />)
}

