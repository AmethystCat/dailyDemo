export default class WebWorker {
  constructor(worker) {
    const code = `(${worker.toString()})()`;
    const blob = new Blob([code], { type: 'text/javascript' });
    return new Worker(URL.createObjectURL(blob));
  }
}