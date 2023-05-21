import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../Redux/Slice/eventSlice";
import { Loader, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Event = () => {
  const events = useSelector((state) => state.event.events);
  const error = useSelector((state) => state.event.error);
  const loading = useSelector((state) => state.event.loading);
  const dispatch = useDispatch();
  console.log(loading, "loading");
  // console.log(events, "events");
  useEffect(() => {
    dispatch(getEvents())
      .unwrap()
      .then((res) => {
        console.log(res);
        // setData(res);
      })
      .catch((err) => {
        console.log(err, "from events");
      });
    // console.log(data, "data");
  }, []);

  return (
    <div>
      {loading ? (
        <Loader active size="big" />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // Set 4 columns
            gridGap: "15px",
          }}
        >
          {events.map((item,index) => {
            return (
              <div style={{ marginLeft: 15, display: "flex" }} key={item?.id}>
                <Link to={`/eventDetails/${item.id}`}>
                  <EventCard
                    name={item?.title}
                    des={item?.description}
                    date={item?.eventDate}
                    organizer={item?.organiserContact}
                    image={item?.image}
                    location={item?.Address}
                    index={index}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Event;
