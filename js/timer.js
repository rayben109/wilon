<!DOCTYPE html>
<html>
<head>
   <title></title>
</head>
<body>


<script>
var today = new Date();

var BigDay = new Date("December 25, 2018");
var msPerDay = 24 * 60 * 60 * 1000;
var timeLeft = (BigDay.getTime() - today.getTime());
var e_daysLeft = timeLeft / msPerDay;
var daysLeft = Math.floor(e_daysLeft);
var yearsLeft = 0;
if (daysLeft > 365) {
  yearsLeft = Math.floor(daysLeft / 365);
  daysLeft = daysLeft % 365;
}
var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
var hrsLeft = Math.floor(e_hrsLeft);
var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
document.write(yearsLeft + " years " + daysLeft + " days " + hrsLeft + " hours " + minsLeft + " minutes");

</script>
</body>
</html>