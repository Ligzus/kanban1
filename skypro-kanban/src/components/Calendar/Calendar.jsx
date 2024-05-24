import { useState } from "react";
import { ru } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


export default function Calendar() {
  const [selected, setSelected] = useState();
  return <DayPicker locale={ru} mode="single" selected={selected} onSelect={setSelected} />;
}

