import React from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu, DropdownItem,
} from 'reactstrap';


class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }

    render() {
        return (
            <Dropdown className={"pa4 tc"}
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
            >
                <DropdownToggle
                    aria-expanded
                    data-toggle="dropdown"
                    tag="span"
                >
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="br-100 ba h3 w3 dib" alt="avatar"/>
                </DropdownToggle>
                <DropdownMenu className={"b--transparent shadow-5"}
                              style={{marginTop: '20px', backgroundColor: 'rgba(255,255,50,0.5)'}}>
                    <DropdownItem onClick={this.props.toggleModal}>
                        Profile
                    </DropdownItem>
                    <DropdownItem onClick={ () => this.props.onRouteChange('signout')}>
                        Sign Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default ProfileIcon
