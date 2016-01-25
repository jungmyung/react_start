import React from 'react';
import ReactDOM from 'react-dom';

class SpinBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {nCount: this.props.initValue.nStart };
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.nCount} />
                <button onClick={this.onClickBtn.bind(this)}> up </button>
                <button onClick={this.onClickBtn.bind(this)}> down </button>
            </div>
        );
    }

    onClickBtn(e){
        let sBtnType = e.target.innerText;

        if(sBtnType === 'up') {
            this.increase();
        } else {
            this.decrease();
        }
    }

    increase() {
        let nValue = this.state.nCount;

        if(nValue < this.props.initValue.nMax){
            this.setState(
                {nCount: this.state.nCount + this.props.initValue.nStep}
            );
        }
    }

    decrease() {
        let nValue = this.state.nCount;

        if(nValue > this.props.initValue.nMin){
            this.setState(
                {nCount: this.state.nCount - this.props.initValue.nStep}
            );
        }
    }
}

SpinBox.propTypes =  {
    nStart: React.PropTypes.number,
    nStep: React.PropTypes.number,
};

SpinBox.defaultProps = {
    nStart: 0,
    nStep: 1,
    nMax: 20,
    nMin: 0,
};

export default SpinBox;