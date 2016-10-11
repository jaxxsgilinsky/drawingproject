var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "#a56f1d"
/* square */
canvas.fillRect(300, 450, 200, 200);
/* door */
canvas.fillStyle = "black"
canvas.fillRect(380, 580, 50, 100);
/* window */
canvas.fillRect(330, 500, 45, 30);
canvas.fillRect(430, 500, 45, 30);
/* door handle */
canvas.beginPath();
canvas.arc(390, 610, 5, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

/* square second house */
canvas.fillStyle = "#a56f1d"
canvas.fillRect(800, 450, 200, 200);
canvas.fillRect(1000, 350, 150, 300);
/* door */
canvas.fillStyle = "black"
canvas.fillRect(880, 580, 50, 100);
/* window */
canvas.fillRect(830, 500, 45, 30);
canvas.fillRect(930, 500, 45, 30);
/* door handle */
canvas.beginPath();
canvas.arc(890, 610, 5, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();
/* second window */
canvas.fillStyle = "black"
canvas.fillRect(1020, 400, 30, 30);
canvas.fillRect(1090, 400, 30, 30);


/* tree */
canvas.fillStyle = "#472e09"
canvas.fillRect(100, 500, 10, 150);
/* top of tree */
canvas.beginPath();
canvas.arc(60, 500, 50, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "green"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(150, 500, 50, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "green"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(100, 430, 50, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "green"
canvas.fill();
canvas.stroke();


/* triangle */
canvas.fillStyle = "black"
canvas.beginPath();
canvas.moveTo(255,450);
canvas.lineTo(545,450);
canvas.lineTo(400,320);
canvas.fill();

/* circle sun */
canvas.beginPath();
canvas.arc(1300, 15, 100, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "yellow"
canvas.fill();
canvas.stroke();

/* cicle clouds */
canvas.beginPath();
canvas.arc(900, 15, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(960, 65, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(900, 80, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(850, 80, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(850, 15, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(800, 65, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

/* clouds 2 */
canvas.beginPath();
canvas.arc(395, 15, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(360, 65, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(400, 80, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(450, 80, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(450, 15, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(500, 65, 40, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "white"
canvas.fill();
canvas.stroke();
