import React, { Component } from 'react';
import { DayStyled, Icon, Name, TheDate, Description, Temperature } from './styles/DayStyled';

class Day extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <DayStyled>Loading...</DayStyled>
      )
    }
    
    let data = this.props.data;
    let date = new Date(data.date);
    let theDate = `${(date.getDate()).toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`

    return (
      <DayStyled>
        <Icon src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`} alt={data.main + " icon"}></Icon>
        <Name>{this.props.name}</Name>
        <TheDate>{theDate}</TheDate>
        <Description>{data.desc}</Description>
        <Temperature>
          <span className="temp-main">{data.temp}°C</span>
          ({data.tempMin}-{data.tempMax}°C)
        </Temperature>
      </DayStyled>
    )
  }
};

export default Day;