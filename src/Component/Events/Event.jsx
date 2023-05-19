import { Card, Icon, Image } from "semantic-ui-react";

import React from "react";

const Event = () => {
  return (
    <Card>
      <Image src="https://static.wixstatic.com/media/4f4c98_52ae278e46ae41a0be99919edd3dc2be~mv2.jpg/v1/fill/w_1800,h_774,al_c,q_85,enc_auto/4f4c98_52ae278e46ae41a0be99919edd3dc2be~mv2.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default Event;
