import "./style.css";

import React from "react";
import { useInput } from "react-admin";

import { formatSecondToTimeView } from "../../helpers/utils";

export const TimeInput = (props: any) => {
  const input = useInput(props);
  let { value } = input.field;

  if (typeof value === "number") {
    value = formatSecondToTimeView(input.field.value);
  }

  return (
    <div className="time-input">
      <label>
        {props.label} {input.isRequired && "*"}
      </label>
      <input {...input.field} value={value || "00:00:00"} type="time" step={1} required={input.isRequired} />
    </div>
  );
};

/**
  // Need add this code to dataProvider [update and create ]
  if (path === "posts") {
    if (typeof data.data.timestamp === "string") data.data.timestamp = formatToMS(data.data.timestamp);
  }
 */
