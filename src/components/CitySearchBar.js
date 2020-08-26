import React, { Component } from 'react';
import CitySearchBarStyled from './styles/CitySearchBarStyled';
import DropDownStyled from './styles/DropDownStyled';
import toCleanLowercaseString from '../helpers/toCleanLowercaseString.js';
import cities from '../data/cities.js';

class CitySearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', dropdown: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.updateDropDown(event.target.value);
    this.setState({value: event.target.value});
  };

  updateDropDown(searchTerm) {
    // TODO - debounce this event so it's not firing every single keystroke

    // if no search terms, reset dropdown
    if (!searchTerm) {
      this.setState({dropdown: []});
      return;
    }

    let searchTermClean = toCleanLowercaseString(searchTerm);
    let matchedCities = cities.filter(city => toCleanLowercaseString(city.city).startsWith(searchTermClean));

    let amountResults = matchedCities.length < 7 ? matchedCities.length : 7;

    let dropdown = [];
    if (amountResults === 0) {
      dropdown.push(<li><i>No results found for "{searchTerm}"! Please try again.</i></li>);
    } else {
      let currentCityFavs = JSON.parse(localStorage.getItem('favs')) || [];
      for (let i = 0; i < amountResults; i++) {
        let item = matchedCities[i];
        let favourited = currentCityFavs.includes(item.id.toString()) ? 'favourited' : '';

        dropdown.push(
          <li
            key={item.id}
            id={item.id}
            data-lat={item.lat}
            data-lon={item.lon}
            onClick={this.dropdownItemClicked.bind(this)}
          >
            <span className="city">{item.city}</span>, {item.country} ({item.state})
            <button
              className={`fav-icon ${favourited}`}
              data-cityid={item.id}
              onClick={this.addFavouriteCity.bind(this)}
            >★</button>
          </li>
        );
      }
    }
    this.setState({dropdown: dropdown});
  }

  addFavouriteCity(event) {
    // prevent parent onclick method
    event.stopPropagation();

    let clickedId = event.target.dataset.cityid;
    let favs = JSON.parse(localStorage.getItem('favs')) || [];

    // if the city has already been favourited, remove it. else add it
    if (favs.includes(clickedId)) {
      favs = favs.filter(id => id !== event.target.dataset.cityid);
    } else {
      favs.push(event.target.dataset.cityid);
    }
    localStorage.setItem('favs', JSON.stringify(favs));
    this.updateDropDown(this.state.value);
  }

  dropdownItemClicked(event) {
    // clear dropdown
    this.setState({dropdown: []});

    // update global variables with dataset
    this.props.handleCityChange(event.currentTarget.dataset.lat, event.currentTarget.dataset.lon);
  }

  handleSubmit(event) {
    // TODO - change api setting based on submitted info
    event.preventDefault();
  }

  render() {
    return (
      <CitySearchBarStyled onSubmit={this.handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <DropDownStyled>
          {this.state.dropdown}
        </DropDownStyled>
      </CitySearchBarStyled>
    )
  }
};

export default CitySearchBar;