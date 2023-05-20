import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const EventCard = () => {
  const extra = (
    <a>
      <Icon name="user" />
      16 Users
    </a>
  );

  return (
    <div>
      <Card
        onClick={{
          curser: "pointer",
          opacity: 1,
          transition: "all 0.5s ease0 ",
        }}
      >
        <div style={{ maxHeight: "300px", overflow: "hidden" ,borderRadius: 20 }}>
          <Image
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00353346-xaqarvfhbp-portrait.jpg"
            wrapped
            ui={false}
            style={{ objectFit: "cover", height: "100%", }} // Apply custom styles to the Image component
          />
        </div>
        <Card.Content>
          <Card.Header>The Popes Expo</Card.Header>
          <Card.Meta>Joined 10 May 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            10 Attendees
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default EventCard;
