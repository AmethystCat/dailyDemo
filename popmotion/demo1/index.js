import {  tween, styler, spring, listen, pointer, value, decay } from 'popmotion';

const ball = document.querySelector('.box');
// const divStyler = styler(ball);
// const ballXY = value({ x: 0, y: 0 }, divStyler.set);

// listen(ball, 'mousedown touchstart')
//   .start((e) => {
//     e.preventDefault();
//     pointer(ballXY.get()).start(ballXY);
//   });

// listen(document, 'mouseup touchend')
//   .start(() => {
//     ballXY.stop();
//   });

// const ball = document.querySelector('#b .ball');
const bw = 58;
const w = window.innerWidth - bw;
const h = window.innerHeight - bw; 
const ballStyler = styler(ball);
const ballXY = value({ x: w, y: 0 }, ballStyler.set);

function getLimitPosition(axis, boundary) {
  if (axis >= boundary) {
    return boundary;
  } else if (axis < boundary && axis > 0) {
    return axis;
  } else return 0;
}

function startTracking() {
	pointer(ballXY.get())
		.start(ballXY);
}

function stopTracking() {
  const { x, y } = ballXY.get();
  let targetX;
  let targetY;

  if (x > w/2) {
    targetX = w;
    targetY = getLimitPosition(y, h);
  } else {
    targetX = 0;
    targetY = getLimitPosition(y, h);
  }

  if (y <= 0) {
    targetY = 0;
    targetX = getLimitPosition(x, w);
  }

  if (y >= h) {
    targetY = h;
    targetX = getLimitPosition(x, w);
  }

	tween({
    from: ballXY.get(),
    to: {x: targetX, y: targetY}
	}).start(ballXY);
}

listen(ball, 'mousedown touchstart').start(startTracking);
listen(document, 'mouseup touchend').start(stopTracking);