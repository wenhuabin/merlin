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
};
