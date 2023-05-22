import { useEffect, useState } from "react";
import { Dropdown, Input, Menu } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
// import { getCatagories } from "../../Redux/Slice/categorySlice";
import { postActions } from "../../Redux/Slice/eventSlice";
import { getCatagories } from "../../Redux/Slice/categorySlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("home");
  const categories = useSelector((state) => state.category.categories);
  const events = useSelector((state) => state.event.events);

  useEffect(() => {
    dispatch(getCatagories());
  }, [dispatch]);

  const handleCategoryChange = (selectedCategories) => {
    console.log(selectedCategories, "selectCatries");
    dispatch(postActions.setEvents(selectedCategories));
  };

  console.log;

  const CategoriesFilter = categories.map((category) => {
    return { key: category._id, text: category.name, value: category.name };
  });

  console.log(CategoriesFilter, "CategoriesFilter ");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div>
      {" "}
      <Menu vertical style={{ height: "86vh" }}>
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>
          <Dropdown
            clearable
            fluid
            // multiple
            search
            selection
            options={CategoriesFilter}
            placeholder="Filter By Category"
            onChange={(e, m) => handleCategoryChange(m.value)}
          />
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text="Category">
            <Dropdown.Menu>
              <Dropdown.Header>Category</Dropdown.Header>
              <Dropdown.Item>Create Category</Dropdown.Item>
              {/* <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu>
            <Menu.Item
              name="search"
              active={activeItem === "search"}
              onClick={handleItemClick}
            >
              Search
            </Menu.Item>
            <Menu.Item
              name="add"
              active={activeItem === "add"}
              onClick={handleItemClick}
            >
              Add
            </Menu.Item>
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={handleItemClick}
            >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        {/* <Menu.Item
          name="browse"
          active={activeItem === "browse"}
          onClick={handleItemClick}
        >
          <Icon name="grid layout" />
          Browse
        </Menu.Item> */}
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        ></Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
};

export default Sidebar;
