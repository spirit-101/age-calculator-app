"use strict";

const inputDay = document.getElementById("dob-day");
const inputMonth = document.getElementById("dob-month");
const inputYear = document.getElementById("dob-year");

const btnSubmit = document.querySelector(".submit__box-btn");

const fieldYears = document.querySelector(".years");
const fieldMonths = document.querySelector(".months");
const fieldDays = document.querySelector(".days");

const errorYear = document.querySelector(".error__year");
const errorMonth = document.querySelector(".error__month");
const errorDay = document.querySelector(".error__day");

const labelYear = document.querySelector(".label__year");
const labelMonth = document.querySelector(".label__month");
const labelDay = document.querySelector(".label__day");

btnSubmit.addEventListener("click", function () {
  const dobDay = +inputDay.value;
  const dobMonth = +inputMonth.value;
  const dobYear = +inputYear.value;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // + 1 - months are 0-based
  const currentDay = currentDate.getDate();

  const errorStyler = function (error, label, input) {
    error.classList.remove("hidden");
    label.style.color = "hsl(0, 100%, 67%)";
    input.style.outlineColor = "hsl(0, 100%, 67%)";
  };

  ////////////////////////////////////////////

  // ERROR HANDLING
  if (dobYear > currentYear || dobYear < 1900) {
    return errorStyler(errorYear, labelYear, inputYear);
  }
  if (dobMonth > 12) {
    return errorStyler(errorMonth, labelMonth, inputMonth);
  }

  if (dobDay > 31) {
    return errorStyler(errorDay, labelDay, inputDay);
  }

  ////////////////////////////////////////////

  let years = currentYear - dobYear;
  let months = currentMonth - dobMonth;
  let days = currentDay - dobDay;

  //  Check if birth day is larger than the current day
  if (days < 0) {
    months--;
    days += new Date(currentYear, currentMonth - 1, 0).getDate(); // Get days in previous month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  fieldYears.innerHTML = years;
  fieldMonths.innerHTML = months;
  fieldDays.innerHTML = days;
});
