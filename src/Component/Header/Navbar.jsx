import {
  Input,
  Menu,
  Button,
  Form,
  TextArea,
  Select,
  Modal,
} from "semantic-ui-react";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const [open, setOpen] = useState(false);

  function createEventModelOpen() {
    setOpen((prev) => !prev);
  }

  const genderOptions = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

  return (
    <div>
      <Menu secondary style={{ padding: 5 }}>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Events"
          active={activeItem === "Events"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="red" onClick={() => createEventModelOpen()}>
              Create Event
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>

      <Modal
        size="small"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Create Events</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Field
                control={Select}
                options={genderOptions}
                label={{
                  children: "Gender",
                  htmlFor: "form-select-control-gender",
                }}
                placeholder="Gender"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Opinion"
              placeholder="Opinion"
            />
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              placeholder="joe@schmoe.com"
              error={{
                content: "Please enter a valid email address",
                pointing: "below",
              }}
            />
            
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setOpen(false)}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Navbar;
