import qr from 'qr.js';

export default ({
    canvas,
    context,
    width=180,
    height=180
}) => {
    const qrcode = qr(context);
    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext('2d');

	//ctx.fillStyle='#fff';
	////ctx.arc(90,90,35,0,2*Math.PI);
	////ctx.fill();
	////ctx.beginPath();
	//ctx.arc(90,90,30,0,2*Math.PI);
	//ctx.fill();

    var cells = qrcode.modules;

    var tileW = width  / cells.length;
    var tileH = height / cells.length;

    for (var r = 0; r < cells.length ; ++r) {
        var row = cells[r];
        for (var c = 0; c < row.length ; ++c) {
            ctx.fillStyle = row[c] ? '#000' : '#fff';
            var w = (Math.ceil((c+1)*tileW) - Math.floor(c*tileW));
            var h = (Math.ceil((r+1)*tileH) - Math.floor(r*tileH));
            ctx.fillRect(Math.round(c*tileW), Math.round(r*tileH), w, h);
        }
    }
	ctx.clearRect(55,55,70,70);
	var image = new Image()
	image.onload = function() {
    	ctx.drawImage(image, 60, 60, 60, 60)
	};
	image.src = "/static/img/logo.7c0592a.jpg"
};
