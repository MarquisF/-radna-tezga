import * as React from 'react';

export default class App extends React.Component<NotebookProps, NotebookState> {

  private inputElement: React.RefObject<HTMLInputElement>

  constructor(props: NotebookProps) {
      super(props);
      this.inputElement = React.createRef();
  }

  public state: NotebookState = {
    IOhistoryList: []
  }

  private enter = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    this.setState((prevState: NotebookState): NotebookState => {
      let inputContent: string = this.inputElement.current ?
        this.inputElement.current.value :
        '';
      this.inputElement.current && (this.inputElement.current.value = '');

      prevState.IOhistoryList.push({
        type: IOItemTypes.INPUT,
        content: inputContent
      });

      return { IOhistoryList: prevState.IOhistoryList };
    })
  };

  render() {
    const { IOhistoryList } = this.state;

    return (
      <div>
        <h2>Notebook</h2>
        <ul>
        {
          IOhistoryList.map((value: IOItem, index: number): JSX.Element => (
            <li key={index}>
              {value.content}
            </li>
          ))
        }
        </ul>
        <form onSubmit={this.enter}>
          <label>#</label>
          <input type='text' ref={this.inputElement} />
          <button>Enter</button>
         </form>
      </div>
    )
  }
}

export interface NotebookProps {
  // historyList: Array<any>;
}

export interface NotebookState {
  IOhistoryList: Array<IOItem>
}

export interface IOItem {
  type: 'INPUT' | 'OUTPUT'
  content: any
}

export class IOItemTypes {
  static readonly INPUT = 'INPUT'
  static readonly OUTPUT = 'OUTPUT'
}
