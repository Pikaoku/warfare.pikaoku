import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from "semantic-ui-react";
import PropTypes from "prop-types";
import {AUTH} from "../../../store/reducer";
import {AUTH_USER} from "../../../store/auth/authReducer";

class SaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: this.props.saved || false
        };
    }

    save = () => {
        this.setState({saved: true});
        this.props.saveFunc(this.props.objectId, this.props.user.uid);
    };

    unsave = () => {
        this.setState({saved: false});
        this.props.unsaveFunc(this.props.objectId, this.props.user.uid);
    };

    render() {
        const {saved} = this.state;

        const sharedProps = {
            fitted: true,
            size: 'large',
            color: 'pink'
        };

        return (
            <div className={'grid-center'}>
                <Icon
                    disabled={this.props.disabled}
                    onClick={saved ? this.unsave : this.save}
                    name={saved ? 'heart' : 'heart outline'}
                    {...sharedProps}
                />
            </div>
        )
    }
}

SaveButton.propTypes = {
    objectId: PropTypes.string.isRequired,
    saved: PropTypes.bool,
    saveFunc: PropTypes.func.isRequired,
    unsaveFunc: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

const mapStateToProps = (state) => ({
    user: state[AUTH][AUTH_USER],
});

export default connect(
    mapStateToProps,
    null
)(SaveButton);
