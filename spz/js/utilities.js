/**
 * utilities.js
 * Holds common JS functions.
 */

/*************************************************
Polyfill functions
*************************************************/

window.requestAnimFrame = (function (callback) {
    /// <summary>Polyfill version of window.requestAnimationFrame. Used for timing animations.</summary>
    /// <param name="callback" type="function">The function to call each frame.</param>

    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
}());

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
        'use strict';
        var i, len;

        for (i = 0, len = this.length; i < len; ++i) {
            if (i in this) {
                fn.call(scope, this[i], i, this);
            }
        }
    };
}

/*************************************************
End Polyfill functions
*************************************************/

/* JavaScript utility functions. */
var Utilities = {
    getRandomInt: function (min, max) {
        /// <summary>Gets a random integer between two specified numbers</summary>
        /// <param name="min" type="Number">The inclusive minimum number</param>
        /// <param name="max" type="Number">The exclusive maximum number</param>

        return Math.floor(Math.random() * (max - min) + min);
    },
    KeyCodes: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        A: 65,
        W: 87,
        D: 68,
        S: 83
    },
    /* Functions that help draw on the canvas */
    canvas: {
        clearCanvas: function (context, canvasWidth, canvasHeight) {
            /// <summary>Clears a canvas element.</summary>
            /// <param name="context" type="Object">The context of the canvas</param>
            /// <param name="canvasWidth" type="Number">The width of the canvas (in pixels)</param>
            /// <param name="canvasHeight" type="Number">The height of the canvas (in pixels)</param>

            context.clearRect(0, 0, canvasWidth, canvasHeight);
        },
        drawRect: function (context, x, y, width, height, fillColor, strokeColor, strokeWidth) {
            /// <summary>Draws a rectangle on a canvas</summary>
            /// <param name="context" type="Object">The context of the canvas</param>
            /// <param name="x" type="Number">The x coordinate of the rectangle's position</param>
            /// <param name="y" type="Number">The y coordinate of the rectangle's position</param>
            /// <param name="width" type="Number">The width of the rectangle (in pixels)</param>
            /// <param name="height" type="Number">The height of the rectangle (in pixels)</param>
            /// <param name="fillColor" type="String">(Optional) The color to fill inside the rectangle. If left null, the rectangle will not be filled.</param>
            /// <param name="strokeColor" type="String">(Optional) The color to use for the stroke of the rectangle. If left null, the rectangle will not be stroked.</param>
            /// <param name="strokeWidth" type="Number">(Optional) The width of the rectangles stroke (in pixels). If left null, the stroke will default to 1.</param>

            // save the state of the context so we can put it back when we're done and avoid any nasty side effects.
            context.save();
                        
            // make sure a fill color was specified before filling the rectangle
            if (fillColor !== null && fillColor !== undefined) {
                context.fillStyle = fillColor;
                context.fillRect(x, y, width, height);
            }

            // make sure a stroke color was specified before stroking the rectangle.
            if (strokeColor !== null && fillColor !== undefined) {
                context.strokeStyle = strokeColor;
                // if no strokeWidth, make the lineWidth === 1
                context.lineWidth = strokeWidth || 1;
                context.strokeRect(x, y, width, height);
            }

            // put the context back the way it was before we started.
            context.restore();
        }
    }
};

