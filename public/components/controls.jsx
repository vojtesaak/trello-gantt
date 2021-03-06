'use strict';

const React = require('react');
const consts = require('../consts.js');

class Controls extends React.Component {

    selectBoard (e) {
        this.props.actions.fetchBoard(e.target.value);
    }

    selectGroupping (e) {
        this.props.actions.changeGroupping(e.target.value);
    }

    selectLabel (e) {
        this.props.actions.selectLabel(e.target.value);
    }

    render () {
        const boards = this.props.boards || [];
        const labelsById = this.props.labelsById || new Map();
        const selectedBoardId = this.props.selectedBoardId || null;
        const selectedLabelId = this.props.selectedLabelId || null;
        const groupping = this.props.groupping;
        const labels = Array.from(labelsById.values());

        return (
            <nav className="navbar navbar-light bg-faded">
                <a className="navbar-brand" href="#">Trello</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                </ul>
                <form className="form-inline pull-xs-right">
                    <select name="board"
                        onChange={this.selectBoard.bind(this)}
                        value={selectedBoardId}
                    >
                        {boards.map((board) =>
                            (<option value={board.id} key={board.id}>{board.name}</option>)
                        )}
                    </select>
                    <select name="label"
                        onChange={this.selectLabel.bind(this)}
                        value={selectedLabelId}
                    >
                        <option value="" key="">all labels</option>
                        {labels.map((label) =>
                            (<option value={label.id} key={label.id}>{label.name}</option>)
                        )}
                    </select>
                    <select name="groupping"
                        onChange={this.selectGroupping.bind(this)}
                        value={groupping}
                    >
                        <option value={consts.GROUPPING_GANTT}>Gantt</option>
                        <option value={consts.GROUPPING_RELEASE}>Release</option>
                        <option value={consts.GROUPPING_PROJECT}>Project</option>
                        <option value={consts.GROUPPING_APP}>App</option>
                    </select>
                </form>
            </nav>
        );
    }

}

module.exports = Controls;
