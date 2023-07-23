"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Sticker from "./components/Sticker";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 100%;
`;

const CalendarContainer = styled.div`
  border: 8px solid #274b46;
  background-color: #02f8e463;
  padding: 20px;
  max-width: 900px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Monthpicker = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #02f8e463;
  cursor: pointer;
  &:hover {
    background-color: #81b0ac;
  }
`;

const Yearchange = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background-color: #81b0ac;
  }
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 55px; /* Adjust the gap as needed */
  justify-items: center;
  font-weight: bold;
  color: #008080; /* You can change the color to suit your preference */
`;

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 75px; /* Adjust the gap as needed */
  justify-items: left;
  margin: 0px 30px;
  background-color: #02f8e463;
  border-radius: 10px;
  bottom: 15px;
`;

const StickersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; /* Adjust the gap between stickers as needed */
  padding: 25px;
  align-items: right; /* Align stickers to the left side of the container */
`;

const Page: React.FC = () => {
  // Get the current date
  const currentDate = new Date();

  // State to hold the selected month
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

  // Get the current month
  const currentMonth = currentDate.getMonth();

  // Get the first day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentMonth,
    1
  ).getDay();

  // Get the number of days in the selected month
  const numberOfDaysInMonth = new Date(
    currentDate.getFullYear(),
    selectedMonth + 1,
    0
  ).getDate();

  // Create an array of day labels starting from Saturday
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Calculate the number of empty elements before the first day of the month
  const emptyElementsCount = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Generate an array of numbers starting from 1 to 31
  const daysOfMonth = Array.from({ length: 31 }, (_, index) => index + 1);

  // Add empty elements at the beginning of the array
  const daysWithEmptyElements = [...Array(emptyElementsCount), ...daysOfMonth];

  const handleMonthChange = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
  };

  // Months to display in the menu
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // State to handle menu visibility
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div>
      <PageContainer>
        <CalendarContainer>
          <div className="items-center text-green-300 text-2xl">
            <Monthpicker onClick={toggleMenu}>
              {/* <span id="month-picker">
              {months[selectedMonth]}
            </span>
            <div className="menu">
              {months.map((month, index) => (
                <div
                  key={month}
                  className="menu-item"
                  onClick={() => {
                    handleMonthChange(index);
                    setShowMenu(false);
                  }}
                >
                  {month}
                </div>
              ))}
            </div> */}
              <span id="month-picker">JULY</span>
            </Monthpicker>

            <div className="flex justify-between">
              <Yearchange>
                <span id="prev-year">{"<"}</span>
              </Yearchange>
              <span id="year">2023</span>
              <Yearchange>
                <span id="next-year">{">"}</span>
              </Yearchange>
            </div>
          </div>
          <br />
          <DaysContainer>
            {/* Map the daysOfWeek array to create the days of the week */}
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </DaysContainer>
          <br />
          <NumbersContainer>
            {daysWithEmptyElements.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </NumbersContainer>
        </CalendarContainer>
        <StickersContainer>
          <Sticker />
        </StickersContainer>
      </PageContainer>
    </div>
  );
};

export default Page;
