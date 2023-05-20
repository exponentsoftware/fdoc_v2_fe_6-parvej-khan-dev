import { Image, Card, Icon, Button } from "semantic-ui-react";
const EventDetails = () => {
  return (
    <div>
      {" "}
      <Image
        src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gem-of-a-person-by-devesh-dixit-0-2022-8-16-t-6-21-8.jpg"
        fluid
      />
      <Card
        style={{
          width: "95vw",
          justifyContent: "center",

          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Card.Content>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Card.Header style={{ fontSize: "1.7rem", lineHeight: "2.3rem" }}>
                Gem Of A Person by Devesh Dixit
              </Card.Header>
              <Card.Meta
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "3.5rem",
                  color: "black",
                }}
              >
                Comedy | Hindi | 16+ | 1.5 Hours
              </Card.Meta>
            </div>
            <Button
              style={{
                fontSize: "1.5rem",
                backgroundColor: "red",
                color: "white",
                width: 150,
                height: 50,
              }}
            >
              Book
            </Button>
          </section>
          <Card.Description
            style={{
              width: "80%",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            molestiae consequatur asperiores dolorem provident facere, laborum
            pariatur temporibus veniam incidunt in expedita labore?
          </Card.Description>
        </Card.Content>
        <Card.Content
          extra
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <a style={{ marginRight: 20 }}>
            <Icon name="calendar alternate" />
            12-May-2023
          </a>

          <a style={{ marginRight: 20 }}>
            <Icon name="osi" />
            Organized by : Parvej khan
          </a>
          <a style={{ marginRight: 20 }}>
            <Icon name="location arrow" />
            Hyderabad
          </a>
        </Card.Content>
      </Card>
      <section className="host" style={{ marginLeft: 10 }}>
        <Card>
          <h3 style={{ margin: 10 }}>Artist</h3>
          {/* <Image
            size="medium"
           
            wrapped
            // ui={false}
          /> */}
              <Image  size="small"  src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
          
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>
      </section>
    </div>
  );
};

export default EventDetails;
