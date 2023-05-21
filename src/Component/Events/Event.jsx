import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../Redux/Slice/eventSlice";
import {
  Loader,
  Image,
  Segment,
  Button,
  Card,
  Divider,
  Placeholder,
} from "semantic-ui-react";
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
    <>
      <div style={{ marginLeft: 10 }}>
        <Card.Group doubling itemsPerRow={3} stackable>
          {events.map((card, index) => (
            <Card key={card.title}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <div
                  style={{
                    maxHeight: "200px",
                    overflow: "hidden",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    src={`https://picsum.photos/200/300?random=${index}`}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="very short" />
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <>
                    <Card.Header>{card.title}</Card.Header>
                    <Card.Meta>{card.eventDate}</Card.Meta>
                    <Card.Description>
                      {card.description?.substring(0, 100)}
                    </Card.Description>
                  </>
                )}
              </Card.Content>

              <Card.Content extra>
                <Button disabled={loading} color="red">
                  Edit
                </Button>
                <Link to={`/eventDetails/${card.id}`}>
                  <Button disabled={loading}>View</Button>
                </Link>
                <Button disabled={loading}>Delete</Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </>
  );
};

export default Event;
