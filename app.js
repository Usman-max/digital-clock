function change() {
   const fullDate = new Date();
   const date_span = document.getElementById("date");
   const month_span = document.getElementById("month");
   const year_span = document.getElementById("year");
   const hours_span = document.getElementById("hours");
   const minutes_span = document.getElementById("minutes");
   const seconds_span = document.getElementById("seconds");
   const monday_span = document.getElementById("monday");
   const tuesday_span = document.getElementById("tuesday");
   const wednesday_span = document.getElementById("wednesday");
   const thursday_span = document.getElementById("thursday");
   const friday_span = document.getElementById("friday");
   const saturday_span = document.getElementById("saturday");
   const sunday_span = document.getElementById("sunday");
   var date = fullDate.getDate();
   var month = fullDate.getMonth();
   var year = fullDate.getFullYear();
   var hours = fullDate.getHours();
   var minutes = fullDate.getMinutes();
   var seconds = fullDate.getSeconds();
   var days = fullDate.getDay();

   function changeDate() {
      date_span.innerHTML = date;
      month_span.innerHTML = `/ ${month + 1}`;
      year_span.innerHTML = `/ ${year}`;
   }

   function changeTime() {
      hours_span.innerHTML = hours;
      minutes_span.innerHTML = `: ${minutes}`;
      seconds_span.innerHTML = `: ${seconds}`;
   }

   function highlightDay() {
      switch (days) {
         case 0:
            sunday_span.style.backgroundColor = "#ff0000";
            sunday_span.style.color = "#121014";
            break;
         case 1:
            monday_span.style.backgroundColor = "#ff0000";
            monday_span.style.color = "#121014";
            break;
         case 2:
            tuesday_span.style.backgroundColor = "#ff0000";
            tuesday_span.style.color = "#121014";
            break;
         case 3:
            wednesday_span.style.backgroundColor = "#ff0000";
            wednesday_span.style.color = "#121014";
            break;
         case 4:
            thursday_span.style.backgroundColor = "#ff0000";
            thursday_span.style.color = "#121014";
            break;
         case 5:
            friday_span.style.backgroundColor = "#ff0000";
            friday_span.style.color = "#121014";
            break;
         case 6:
            saturday_span.style.backgroundColor = "#ff0000";
            saturday_span.style.color = "#121014";
            break;
      }
   }

   if (hours < 10) { hours = "0" + hours; }
   if (minutes < 10) { minutes = "0" + minutes; }
   if (seconds < 10) { seconds = "0" + seconds; }

   changeDate();
   changeTime();
   highlightDay();
}

setInterval(change, 10);