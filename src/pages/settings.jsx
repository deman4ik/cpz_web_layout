import React from "react";


import { ProfileContainer, AccountBalanceContainer, AccountsContainer, ExtraSettingsContainer } from '../components/settings/settingsContainers';

/*
* Страница настроек пользователя
*/
export default class SettingsPage extends React.Component {
  elemStatus;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
    this.elemStatus = "hidden_element";
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    if (e.target.value !== "") {
      this.elemStatus = "d-flex";
    }
  }

  render() {
    return (
      <div className={"row"}>
        <div className="col-6 ">
          <ProfileContainer elemStatus={this.elemStatus} handleChange={this.handleChange}/>
        </div>
        <div className="col-6 content_container profile_balance">
          <AccountBalanceContainer account={this.props.account} />
        </div>
        <div className="col-12 other_accounts">
          <AccountsContainer account={this.props.account}/>
        </div>
        <div className="col-12 extra_settings">
          <ExtraSettingsContainer />
        </div>
      </div>
    );
  }
}
