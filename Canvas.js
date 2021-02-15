var canvas = document.getElementById("canvasMain");
var ctxActive = canvas.getContext("2d");

function resizeCanvas()
{
	

	canvas.width = document.body.clientWidth - 20;
	canvas.height = document.body.clientHeight - 20;
    
    draw();
}

function draw()
{
	
	ctxActive.clearRect(0, 0, canvas.width, canvas.height);
	ctxActive.font = "14px Arial";
	ctxActive.textBaseline = "middle";
	ctxActive.textAlign = "center";
	ctxActive.strokeStyle = "#DDDDDD";
	ctxActive.lineWidth = 2;
	ctxActive.fillStyle = "#101010";
	ctxActive.translate(Math.trunc(canvas.width/2),Math.trunc(canvas.height/2));
    for (const mach in histData.machines)
    {
    	var tmac = histData.machines[mach]
    	if (!tmac.icon)
		{
			ctxActive.beginPath();
			ctxActive.moveTo(tmac.x+25, tmac.y)
			ctxActive.arc(tmac.x, tmac.y, 25, 0, 2 * Math.PI);
			ctxActive.stroke();
		}
		else		    
		    ctxActive.drawImage(tmac.icon, tmac.x, tmac.y)
		    
    }
    
}
