interface RectangleOption {
    width: number;
    length: number;
    height ?: number; //height is optional (?)
}

function drawRectangle(option) {
    let width = option.width;
    let length = option.length;

    if (option.height){
        let height = option.height;
        //draw 3D logic
    }
    //draw 2D logic
}

drawRectangle({
    width : 100,
    length : 200
});