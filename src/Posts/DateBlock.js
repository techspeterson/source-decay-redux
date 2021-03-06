import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateTime } from "luxon";

function DateBlock(props) {
  console.log(props.date)
  return (
    <>
      <hr />
      <div className="permalinks">
        <div className="date footer-item">
          <span>POSTED:
        <a href="{Permalink}">
              {/* {ShortMonth} {DayOfMonth} {Year} at {12Hour}:{Minutes}{CapitalAmPm} */}
              {DateTime.fromJSDate(props.date).toFormat("MMM d y 'at' h:mma")}
            </a></span>
        </div>

        <div className="footer-right">
          <div className="footer-item footer-inner">
            <FontAwesomeIcon icon="star" className="icon" />
            <span className="footer-inner">0</span>
          </div>

          {/* <div className="footer-item">
            <a href="{ReblogURL}"><span className="fas fa-retweet icon" alt="Reblog"></span></a>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default DateBlock;