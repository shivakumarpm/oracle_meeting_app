import { Component } from 'react';
import Modal from './Modal';
import calenderInfo from './CalenderInfo.json';
import './Calender.css';

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: calenderInfo.weeks,
      dates: calenderInfo.dates,
      meetingScheduleTime: calenderInfo.meetingScheduleTime,
      showModal: false,
      selectedDate: '',
      updateDate: '',
    }
  }

  displayWeeks = () => {
    const weeksArr = this.state.weeks || [];
    return weeksArr.map((day) => <li>{day}</li>);
  }

  onDateSelect = (e) => {
    console.log('shiva', e.target.getAttribute('data-date'));
    if (e.target) {
      this.setState({
        showModal: true,
        selectedDate: e.target.getAttribute('data-date'),
      });
    }
  }

  displayDate = () => {
    const datesArr = this.state.dates || [];
    return datesArr.map((date, index) => {
      const isMeettingScheduled = +this.state.updateDate === (index + 1) && 'active';
      console.log('shiva isMeettingScheduled=', isMeettingScheduled);
      return (<li data-date={index + 1} onClick={this.onDateSelect}>{date}
        { isMeettingScheduled && <span  className={`dot ${isMeettingScheduled}`}></span> }
      </li>);
    });
  }

  scheduleTime =  () => {
    const timeArr = this.state.meetingScheduleTime || [];
    return timeArr.map((time) => <option value={time}>{time}</option>);
  }

  onScheduleSelect = (e) => {
    console.log('select e=', e);
  }

  updateDate = (e) => {
    if (e.target) {
      console.log('select e.target.getAttribute=', e.target.getAttribute('dateSelected'));
      this.setState({updateDate: e.target.getAttribute('dateSelected')});
      this.hideModal();
    }
  }
  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <h1 className="calenderHeader">Meeting Schedule</h1>
        
        <div className="month">      
          <h3 className="monthName">August2021</h3>
        </div>
        
        <ul className="weekdays">
          {this.displayWeeks()}
        </ul>
        
        <ul className="days">
          {this.displayDate()}
        </ul>
        <Modal showModal={this.state.showModal} handleClose={this.hideModal}>
          <p className="modalTitle">Please choose the time to schedule</p>
          <select className="timeSlots" onClick={this.onScheduleSelect}>
            {this.scheduleTime()}
          </select>
            <button dateSelected={this.state.selectedDate} className="confirmSchedule" type="button" onClick={this.updateDate}>Confirm Schedule</button>
        </Modal>
      </div>
    );
  }
}