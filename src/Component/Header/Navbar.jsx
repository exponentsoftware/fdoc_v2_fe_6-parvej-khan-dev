import {
  Input,
  Menu,
  Button,
  Form,
  TextArea,
  Select,
  Modal,
} from "semantic-ui-react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvents, postActions } from "../../Redux/Slice/eventSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const eventCreated = useSelector((state) => state.event.post);
  const error = useSelector((state) => state.event.error);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState({
    title: "",
    description: "",
    eventDate: "",
    Address: "",
    organiserContact: "",
    image: "",
  });

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  function createEventModelOpen() {
    setOpen((prev) => !prev);
  }

  const handleCreateEvent = () => {
    try {
      let formData = new FormData();

      formData.append("title", value.title);
      formData.append("description", value.description);
      formData.append("eventDate", value.eventDate);
      formData.append("Address", value.Address);
      formData.append("organiserContact", value.organiserContact);
      formData.append("image", selectedImage);
      console.log(formData, "formdata");
      dispatch(createEvents(formData));
    } catch (error) {
      console.error("Error creating event:", error.message);
    }
  };

  // const genderOptions = [
  //   { key: "m", text: "Male", value: "male" },
  //   { key: "f", text: "Female", value: "female" },
  //   { key: "o", text: "Other", value: "other" },
  // ];

  return (
    <div>
      <Menu secondary style={{ padding: 5 }}>
        <Link to={'/'}>
          
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          />
          </Link>
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
                label="Event Name"
                placeholder="Event name"
                value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })}
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Address"
                placeholder="Address"
                value={value.Address}
                onChange={(e) =>
                  setValue({ ...value, Address: e.target.value })
                }
              />

              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                type="date"
                label="Event Date"
                placeholder="Date"
                value={value.eventDate}
                onChange={(e) =>
                  setValue({ ...value, eventDate: e.target.value })
                }
              />

              {/* <Form.Field
                control={Select}
                options={genderOptions}
                label={{
                  children: "Min Age",
                  htmlFor: "form-select-control-gender",
                }}
                placeholder="Min Age Required"
                search
                searchInput={{ id: "form-select-control-gender" }}
              /> */}
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Description"
              placeholder="description"
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              type="file"
              label="Images"
              placeholder="Images"
              name="image"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              placeholder="joe@schmoe.com"
              value={value.organiserContact}
              onChange={(e) =>
                setValue({ ...value, organiserContact: e.target.value })
              }
              // error={{
              //   content: "Please enter a valid email address",
              //   pointing: "below",
              // }}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            onClick={() => {
              handleCreateEvent();
              setOpen(false);
            }}
          >
            Create
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Navbar;
