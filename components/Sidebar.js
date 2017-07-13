'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  handleClick(index, ev) {
  	ev.preventDefault()
  	this.props.onSelect(index)
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
      	{
      		files.map((file, index) => {
      			const isSelected = selectedFileIndex === index
      			return <SidebarItem 
      					key={index} file={file}
      					isSelected={isSelected}
      					onClick={this.handleClick.bind(this, index)} 
      				/>
      		})
      	}
      </ul>
    );
  }
}

module.exports = Sidebar;
