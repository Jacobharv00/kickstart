import React from "react";
import { Menu } from "semantic-ui-react";

export default function Header() {
    return (
        <Menu
            color="purple"
            style={{ marginTop: "10px", borderBottomColor: "purple" }}
        >
            <Menu.Item>CrowdCoin</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>Campaigns</Menu.Item>
                <Menu.Item>+</Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}
