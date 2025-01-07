import { Link } from "react-router";

export const NavBar = () => (
  <div className="flex flex-wrap bg-teal-600">
    <div className="mr-auto">
      <Link to="/">
        <img
          src="https://i.pinimg.com/736x/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg"
          alt="project logo"
          className="size-9"
        />
      </Link>
    </div>
    <div className="grid items-center">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  </div>
);
