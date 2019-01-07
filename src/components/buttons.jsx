import React,{ Component} from 'react';

class Buttons extends Component {
    render() {
      const { value, classname, id } = this.props;
      return (
        <button type="button" id={id} className={classname}>{value}</button>
      );
    }
}

export default Buttons;