import React, { PropTypes } from "react";
import tweenState from "react-tween-state";
import _ from "lodash";
import { connect } from "react-redux";

const Appear = React.createClass({
  mixins: [tweenState.Mixin],
  propTypes: {
    children: PropTypes.node,
    style: PropTypes.object,
    span: PropTypes.bool
  },
  contextTypes: {
    export: PropTypes.bool,
    overview: PropTypes.bool,
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  },
  getInitialState() {
    return {
      active: false,
      opacity: this.context.export || this.context.overview ? 1 : 0
    };
  },
  componentWillReceiveProps(nextProps) {
    const state = nextProps.fragment;
    const slide = this.context.slide;
    const fragment = this.refs.fragment;
    const key = _.findKey(state.fragments[slide], {
      "id": parseInt(fragment.dataset.fid)
    });
    if (slide in state.fragments && state.fragments[slide].hasOwnProperty(key)) {
      this.setState({
        active: state.fragments[slide][key].visible
      }, () => {
        let endVal = this.state.active ? 1 : 0;
        if (this.context.export || this.context.overview) {
          endVal = 1;
        }
        this.tweenState("opacity", {
          easing: tweenState.easingTypes.easeInOutQuad,
          duration: 300,
          endValue: endVal
        });
      });
    }
  },
  render() {
    const styles = {
      opacity: this.getTweeningValue("opacity")
    };
    if(this.props.span){
   	 return (
   	   <span style={Object.assign({}, this.props.style, styles)} className="fragment" ref="fragment">
   	     {this.props.children}
   	   </span>
   	 );
    }else{
   	 return (
   	   <div style={Object.assign({}, this.props.style, styles)} className="fragment" ref="fragment">
   	     {this.props.children}
   	   </div>
   	 );
    }
  }
});

export default connect((state) => state)(Appear);
