import * as React from 'react';

export default class App extends React.Component<NotebookProps> {
  public state: NotebookState = {
    IOhistoryList: []
  }

  render() {
    return (
      <div>
        <h2>Note book</h2>
        <form onSubmit={this.}>
          <label>#</label>
          <input type='text' />
          <button>send</button>
         </form>
      </div>
    )
  }
}

export interface NotebookProps {
  // historyList: Array<any>;
}

export interface NotebookState {
  IOhistoryList: Array<any>
}

export interface IOItem {
  type: 'INPUT' | 'OUTPUT'
  content: any
}

export class IOItemTypes {
  static readonly INPUT = 'INPUT'
  static readonly OUTPUT = 'OUTPUT'
}
