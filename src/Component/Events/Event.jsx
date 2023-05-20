import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvents,
  getEventByID,
  postActions,
} from "../../Redux/Slice/eventSlice";
const Event = () => {
  const events = useSelector((state) => state.event.post);
  const error = useSelector((state) => state.event.error);
  const dispatch = useDispatch();

  //   function getEventsData() {
  //     try {
  //       dispatch(getEvents());
  //     } catch (err) {
  //       console.log(error);
  //     }
  //   }

  console.log(events, "events");
  useEffect(() => {
    dispatch(getEvents());
    // console.log(data, "data");
  }, [events]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Set 4 columns
        gridGap: "15px",
      }}
    >
      {events?.map((item) => {
        return (
          <div style={{ marginLeft: 15, display: "flex" }} key={item?.id}>
            <EventCard
              name={item?.title}
              des={item?.description}
              date={item?.eventDate}
              organizer={item?.organiserContact}
              image={item?.image}
              location={item?.Address}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Event;
