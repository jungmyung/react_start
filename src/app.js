import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SpinBox from './component/spinBox.jsx';

injectTapEventPlugin();


class App {
    constructor() {
        this.renderSpinbox();
    }

    renderSpinbox() {
        let oInit = {
            nStart: 0,
            nStep: 2,
            nMax: 20,
            nMin: 0,
        };

        ReactDOM.render(
            <div>
                <SpinBox initValue={oInit}/>
            </div>,
            document.getElementById('app')
        );
    }
}

window.App = App;

