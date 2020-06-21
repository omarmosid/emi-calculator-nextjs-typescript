import React from "react";
import Link from "next/link";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/app">Calculator</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
