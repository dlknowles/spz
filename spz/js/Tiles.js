var Tiles = {
    Settings: {
        TILE_WIDTH: 32,
        TILE_HEIGHT: 32,
        TILE_STROKE_COLOR: '#444',
        DEFAULT_TILE_COLOR: '#0F0',
        COLORS: ['#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF']
    },
    Tile: function (id, row, column, maxColors) {
        /// <summary>A tile object</summary>
        /// <param name="row" type="Number">The row number the tile is sitting on the board</param>
        /// <param name="column" type="Number">The column number the tile is sitting on the board</param>
        /// <param name="maxColors" type="Number">(Optional) The number of colors allowed for the color array. 
        ///         If left null or undefined, will be set to the maximum number of colors.</param>

        /* self is defined as 'this' at the Tile scope */
        var self = this;

        this.id = id;
        this.row = row;
        this.column = column;
        this.width = Tiles.Settings.TILE_WIDTH;
        this.height = Tiles.Settings.TILE_HEIGHT;
        this.maxColors = maxColors;
        this.colorArray = getColorArray();
        this.colorIndex = Utilities.getRandomInt(0, this.maxColors);

        /*************************************
         Private methods
         *************************************/

        function getColorArray() {
            /// <summary>Populates the color array based on the maximum number of colors allowed for this Tile</summary>

            var colors = [];

            for (var i = 0; i < maxColors; ++i) {
                colors.push(Tiles.Settings.COLORS[i]);
            }

            return colors;
        }


        /*************************************
         Public methods
         *************************************/

        this.draw = function (canvasContext) {
            /// <summary>Renders the Tile object to the canvas.</summary>
            /// <param name="canvasContext" type="Object">The context of the canvas to draw on.</param>

            var x = self.column * self.width,
                y = self.row * self.height;

            Utilities.canvas.drawRect(canvasContext, x, y, self.width, self.height, self.colorArray[self.colorIndex], Tiles.Settings.TILE_STROKE_COLOR);
        };

        this.flipColor = function (canvasContext) {
            /// <summary>Sets the Tile color to the next color in the color array and redraws the Tile on the canvas.</summary>
            /// <param name="canvasContext" type="Object">The context of the canvas to draw on.</param>

            self.colorIndex = (self.colorIndex === self.maxColors - 1) ? 0 : (self.colorIndex + 1);
            self.draw(canvasContext);
        }
    }
};