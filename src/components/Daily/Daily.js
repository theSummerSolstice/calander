import React from "react";
import PropTypes from "prop-types";
import styles from "./Daily.module.css";
import TimeTable from "../TimeTable/TimeTable";

export default function Daily ({ date, eventList }) {
  return (
    <div className={styles.Daily}>
      <div className={styles.timeList}>
        <div></div>
        <div>오전 0시</div>
        <div>오전 1시</div>
        <div>오전 2시</div>
        <div>오전 3시</div>
        <div>오전 4시</div>
        <div>오전 5시</div>
        <div>오전 6시</div>
        <div>오전 7시</div>
        <div>오전 8시</div>
        <div>오전 9시</div>
        <div>오전 10시</div>
        <div>오전 11시</div>
        <div>오후 12시</div>
        <div>오후 1시</div>
        <div>오후 2시</div>
        <div>오후 3시</div>
        <div>오후 4시</div>
        <div>오후 5시</div>
        <div>오후 6시</div>
        <div>오후 7시</div>
        <div>오후 8시</div>
        <div>오후 9시</div>
        <div>오후 10시</div>
        <div>오후 11시</div>
        <div>오후 12시</div>
      </div>
      <TimeTable
        date={date}
        eventList={eventList}
      />
    </div>
  );
}

Daily.propTypes = {
  date: PropTypes.string.isRequired,
  eventList: PropTypes.array.isRequired,
};
