// Today's date listed on the planner using Moment.js
$("#currentDay").text(moment().format("LLLL"));
// End of today' date

//gets page ready upon loading
$(document).ready(function () {
  const saveButtons = $(".saveBtn"); // query select the buttons that save textarea content
  var timeNow = moment().hour(); // moment js for the current time

// for loop for determining what time it is and color code past, present, future css
  for (var i = 9; i < 18; i++) {
    var randomText = localStorage.getItem(i);
    var textArea = $("." + i)
    textArea.val(randomText);
    if (i < timeNow) {
      textArea.addClass("past")
    } else if (i > timeNow) {
      textArea.addClass("future")
    } else {
      textArea.addClass("present")
    }
  };

  // for loop to determine which textarea to save based on which button is clicked
  for (var i = 0; i < saveButtons.length; i++) {
    let saveButton = saveButtons[i];
    $(saveButton).click(function () {
      var inputClass = saveButton.getAttribute("data-time");
      let input = $("." + inputClass).val();
      localStorage.setItem(inputClass, input);
    });
  }
});