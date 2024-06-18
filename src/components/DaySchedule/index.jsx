import React from "react";
import {
  StyledDaySchedule,
  StyledDayBody,
  StyledDataItem,
  StyledDataItemText,
} from "./styles.js";
import theme from '../../../utils/theme.js'

const DaySchedule = (props) => {
  const { dayInfo } = props;

  return (
    <StyledDaySchedule>
      <StyledDayBody>
        {dayInfo.events.map((event, index) => (
          <StyledDataItem key={index}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <StyledDataItemText>
                <span style={{ color: theme.secondary }}>{event.time}</span> - <span style={{ color: theme.accent}}>{event.title}</span>
              </StyledDataItemText>
              <StyledDataItemText>{event.description} ({event.coordinates})</StyledDataItemText>
            </div>
          </StyledDataItem>
        ))}
      </StyledDayBody>
    </StyledDaySchedule>
  );
};

export default DaySchedule;
