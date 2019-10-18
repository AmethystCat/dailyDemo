import React from 'react';
import woker from './worker.js';
import WebWorker from './workerSetup.js';

export default class W extends React.Component {
  upload = e => {
    console.log('--- MAIN: the master upload an excel', e.target.files);
    
    this.file = e.target.files[0];
    this.worker = new WebWorker(woker);
    
    console.log('--- MAIN: worker ready 👹', this.worker);
    this.worker.onmessage = function(e) {
      console.log('--- MAIN: Hah, get the message from worker 😎 ⇢', e.data.message || e.data);
      if (e.data.signal === 'init') {
        this.postMessage({ message: "--- MAIN: Ok Copy, let's do something interesting 🐶", signal: 'reply'});
      }
    };
  };
  
  stopWorker = () => {
    if (!this.worker) {
      console.log('Sorry, no worker here 🤷‍');
      return false;
    }
    this.worker.terminate();
    console.log('--- MAIN: worker stopped ♨️');
  }
  
  sendFileToWorker = () => {
    if (!this.worker) {
      console.log('Sorry, no worker here 🤷‍');
      return false;
    }
    console.log('--- MAIN: send uploaded file to worker thread 🚛');
    this.worker.postMessage({ file: this.file });
  }
  render() {
    return (
      <div>
        <p>
          web worker：解析excel, 可以在控制台中查看相关信息。
        </p>
        <input type="file" accept=".xlsx" onChange={this.upload} />
        <button onClick={this.sendFileToWorker}>send file to worker</button>
        <button onClick={this.stopWorker}>stop worker</button>
      </div>
    );
  }
}
