'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const {isSelected, onClick, file} = this.props
    const status = isSelected ? '--selected' : ''
    const template = <em>Untitled</em>
    return (
      <li className={"sidebar__item" + status}>
        <a className="sidebar__link" onClick={onClick}>
          {file ? SidebarItem.getTitle(file) : template}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
