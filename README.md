Practicing some event listeners and location tracking and fun with treating index/keys as variables being passed to DOM elements.

Build a game board using an array. The loaded grid will be a 1:1 relationship with the following object style:

{
  a : [0,0,0,0,0,0]
  b : [0,0,0,0,0,0]
  .....
}

Where the values of the array correspond to what is in the div with a class corresponding to their key index. 

e.g.  : the topmost left grid is <div class="a0"></div>.

Grids will have a randomizing function pop, push, shift, and unshift values from 1-10 into the arrays. These values will correspond to items, mostly cars, that Master Frog will interact with.

Try building an element with the array value that goes inside of the grid element.

Frog will hop around grid and on his events update his location and check if a thing is there.

Graphics will be done in CSS with background images and rules. If appending class elements for array values isn't as fun then you can just build URL's with the array values...