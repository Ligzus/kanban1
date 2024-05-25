import { useState } from "react";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { CalendarCustom } from "./Calendar.styled";

export default function Calendar({ date, onSelect }) {
  const [selected, setSelected] = useState(date ? new Date(date) : undefined);

  const handleSelect = (date) => {
    setSelected(date);
    onSelect(date);
  };

  return (  
    <CalendarCustom 
      locale={ru} 
      mode="single" 
      selected={selected} 
      onSelect={handleSelect} 
    />
  );
}
