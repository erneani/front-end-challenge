import React from 'react';

export default class CallButtonDropdownListElement extends React.Component {
  render() {
    return(
      <li>
          {this.props.element}
      </li>
    )
  }
}