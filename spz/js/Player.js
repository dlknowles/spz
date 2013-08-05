var Player = function (currentTile, width, height, inventory) {
    var self = this;

    this.currentTile = currentTile;
    this.width = width;
    this.height = height;
    this.inventory = inventory || new Array();
    this.gems = [];
    this.jewels = [];
    this.isMoving = false;

    this.draw = function (canvasContext) {
        var x = (self.currentTile.column * this.width) + (this.width / 2),
            y = (self.currentTile.row * this.height) + (this.height / 2);

        canvasContext.save();

        canvasContext.fillStyle = "#000";
        canvasContext.beginPath();
        canvasContext.arc(x, y, this.width / 4, 0, Math.PI * 2, true);
        canvasContext.fill();

        canvasContext.restore();
    };

    this.move = function (newTile, canvasContext) {
        // make sure the new tile is the same color as the current tile.
        if (self.currentTile.colorIndex === newTile.colorIndex) {
            self.currentTile = newTile;
            // set isMoving to true so the game knows.
            // this will allow us to prevent moving more than once per keydown if we like.
            // or we could use this to move multiple tiles with a timing function.
            self.isMoving = true;
        }
    }
};