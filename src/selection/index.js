// @flow

import React from 'react';
import PropTypes from 'prop-types';

function getOffset(props) {
  let offset = {
    top: 0,
    left: 0,
  };
  if (props.offset) {
    offset = {
      ...props.offset,
    };
  } else if (props.target) {
    const boundingBox = props.target.getBoundingClientRect();
    offset.top = boundingBox.top + window.scrollY;
    offset.left = boundingBox.left + window.scrollX;
  }
  return offset;
}

export default class Selection extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  props;
  state;
  selectedChildren;
  highlightedChildren;

  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false,
      startPoint: null,
      endPoint: null,
      selectionBox: null,
      offset: getOffset(props),
      zoom: props.zoom || 1,
      startWithoutZoom: null,
      endWithoutZoom: null,
      selectionBoxWithoutZoom: null,
    };

    this.selectedChildren = [];
    this.highlightedChildren = [];
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      offset: getOffset(nextProps),
    };
  }

  componentDidMount() {
    this.reset();
    this.bind();
  }

  componentDidUpdate() {
    this.reset();
    this.bind();
    if (this.state.mouseDown && this.state.selectionBox) {
      this.updateCollidingChildren(this.state.selectionBox);
    }
  }

  componentWillUnmount() {
    this.reset();
    window.document.removeEventListener('mousemove', this.onMouseMove);
    window.document.removeEventListener('mouseup', this.onMouseUp);
  }

  bind = () => {
    this.props.target.addEventListener('mousedown', this.onMouseDown);
    this.props.target.addEventListener('touchstart', this.onTouchStart);
  };

  reset = () => {
    if (this.props.target) {
      this.props.target.removeEventListener('mousedown', this.onMouseDown);
    }
  };

  init = (e, x, y) => {
    if (this.props.ignoreTargets) {
      const Target = e.target;
      if (!Target.matches) {
        // polyfill matches
        const defaultMatches = (s) =>
          [].indexOf.call(window.document.querySelectorAll(s), this) !== -1;
        Target.matches =
          Target.matchesSelector ||
          Target.mozMatchesSelector ||
          Target.msMatchesSelector ||
          Target.oMatchesSelector ||
          Target.webkitMatchesSelector ||
          defaultMatches;
      }
      if (
        Target.matches &&
        Target.matches(this.props.ignoreTargets.join(','))
      ) {
        return false;
      }
    }
    const nextState = {};

    nextState.mouseDown = true;
    nextState.startPoint = {
      x: (x - this.state.offset.left) / this.props.zoom,
      y: (y - this.state.offset.top) / this.props.zoom,
    };
    nextState.startWithoutZoom = {
      x: x - this.state.offset.left,
      y: y - this.state.offset.top,
    };

    this.setState(nextState);
    return true;
  };

  /**
   * On root element mouse down
   * The event should be a MouseEvent | TouchEvent, but flow won't get it...
   * @private
   */
  onMouseDown = (e) => {
    if (
      this.props.disabled ||
      e.button === 2 ||
      (e.nativeEvent && e.nativeEvent.which === 2)
    ) {
      return;
    }

    if (this.init(e, e.pageX, e.pageY)) {
      window.document.addEventListener('mousemove', this.onMouseMove);
      window.document.addEventListener('mouseup', this.onMouseUp);

      this.onMouseMove(e);
    }
  };

  onTouchStart = (e) => {
    if (
      this.props.disabled ||
      !e.touches ||
      !e.touches[0] ||
      e.touches.length > 1
    ) {
      return;
    }

    if (this.init(e, e.touches[0].pageX, e.touches[0].pageY)) {
      window.document.addEventListener('touchmove', this.onTouchMove);
      window.document.addEventListener('touchend', this.onMouseUp);
    }
  };

  /**
   * On document element mouse up
   * @private
   */
  onMouseUp = () => {
    window.document.removeEventListener('touchmove', this.onTouchMove);
    window.document.removeEventListener('mousemove', this.onMouseMove);
    window.document.removeEventListener('mouseup', this.onMouseUp);
    window.document.removeEventListener('touchend', this.onMouseUp);

    this.setState({
      mouseDown: false,
      startPoint: null,
      endPoint: null,
      selectionBox: null,
      startWithoutZoom: null,
      endWithoutZoom: null,
      selectionBoxWithoutZoom: null,
    });

    if (this.props.onSelectionChange) {
      this.props.onSelectionChange(this.selectedChildren);
    }

    if (this.props.onHighlightChange) {
      this.highlightedChildren = [];
      this.props.onHighlightChange(this.highlightedChildren);
    }
    this.selectedChildren = [];
  };

  onMouseMove = (e) => {
    e.preventDefault();
    if (this.state.mouseDown) {
      const endPoint = {
        x: (e.pageX - this.state.offset.left) / this.props.zoom,
        y: (e.pageY - this.state.offset.top) / this.props.zoom,
      };

      this.setState({
        endPoint,
        selectionBox: this.calculateSelectionBox(
          this.state.startPoint,
          endPoint
        ),
        selectionBoxWithoutZoom: this.calculateSelectionBox(
          this.state.startWithoutZoom,
          {
            x: e.pageX - this.state.offset.left,
            y: e.pageY - this.state.offset.top,
          }
        ),
      });
    }
  };

  onTouchMove = (e) => {
    e.preventDefault();
    if (this.state.mouseDown) {
      const endPoint = {
        x: (e.touches[0].pageX - this.state.offset.left) / this.props.zoom,
        y: (e.touches[0].pageY - this.state.offset.top) / this.props.zoom,
      };

      this.setState({
        endPoint,
        selectionBox: this.calculateSelectionBox(
          this.state.startPoint,
          endPoint
        ),
        selectionBoxWithoutZoom: this.calculateSelectionBox(
          this.state.startWithoutZoom,
          {
            x: e.pageX - this.state.offset.left,
            y: e.pageY - this.state.offset.top,
          }
        ),
      });
    }
  };

  /**
   * Calculate if two segments overlap in 1D
   * @param lineA [min, max]
   * @param lineB [min, max]
   */
  lineIntersects = (lineA, lineB) =>
    lineA[1] >= lineB[0] && lineB[1] >= lineA[0];

  /**
   * Detect 2D box intersection - the two boxes will intersect
   * if their projections to both axis overlap
   * @private
   */
  boxIntersects = (boxA, boxB) => {
    // calculate coordinates of all points
    const boxAProjection = {
      x: [boxA.left, boxA.left + boxA.width],
      y: [boxA.top, boxA.top + boxA.height],
    };

    const boxBProjection = {
      x: [boxB.left, boxB.left + boxB.width],
      y: [boxB.top, boxB.top + boxB.height],
    };

    return (
      this.lineIntersects(boxAProjection.x, boxBProjection.x) &&
      this.lineIntersects(boxAProjection.y, boxBProjection.y)
    );
  };

  /**
   * Updates the selected items based on the
   * collisions with selectionBox,
   * also updates the highlighted items if they have changed
   * @private
   */
  updateCollidingChildren = (selectionBox) => {
    this.selectedChildren = [];
    if (this.props.elements) {
      this.props.elements.forEach((ref, $index) => {
        if (ref) {
          const refBox = ref.getBoundingClientRect();
          const tmpBox = {
            top:
              (refBox.top - this.state.offset.top + window.scrollY) /
              this.props.zoom,
            left:
              (refBox.left - this.state.offset.left + window.scrollX) /
              this.props.zoom,
            width: ref.clientWidth,
            height: ref.clientHeight,
          };

          if (this.boxIntersects(selectionBox, tmpBox)) {
            this.selectedChildren.push($index);
          }
        }
      });
    }
    if (
      this.props.onHighlightChange &&
      JSON.stringify(this.highlightedChildren) !==
        JSON.stringify(this.selectedChildren)
    ) {
      const { onHighlightChange } = this.props;
      this.highlightedChildren = [...this.selectedChildren];
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          onHighlightChange(this.highlightedChildren);
        });
      } else {
        onHighlightChange(this.highlightedChildren);
      }
    }
  };

  /**
   * Calculate selection box dimensions
   * @private
   */
  calculateSelectionBox = (startPoint, endPoint) => {
    if (!this.state.mouseDown || !startPoint || !endPoint) {
      return null;
    }

    // The extra 1 pixel is to ensure that the mouse is on top
    // of the selection box and avoids triggering clicks on the target.
    const left = Math.min(startPoint.x, endPoint.x) - 1;
    const top = Math.min(startPoint.y, endPoint.y) - 1;
    const width = Math.abs(startPoint.x - endPoint.x) + 1;
    const height = Math.abs(startPoint.y - endPoint.y) + 1;

    return {
      left,
      top,
      width,
      height,
    };
  };

  /**
   * Render
   */
  render() {
    let style = {
      position: 'absolute',
      background: 'rgba(159, 217, 255, 0.3)',
      border: 'solid 1px rgba(123, 123, 123, 0.61)',
      zIndex: 9,
      cursor: 'crosshair',
      ...this.props.style,
    };

    if (this.state.selectionBoxWithoutZoom) {
      style = {
        ...style,
        ...this.state.selectionBoxWithoutZoom,
      };
    }

    if (!this.state.mouseDown) {
      return null;
    }
    return <div className="react-ds-border" style={style} />;
  }
}

Selection.propTypes = {
  target: PropTypes.object,
  disabled: PropTypes.bool,
  onSelectionChange: PropTypes.func.isRequired,
  onHighlightChange: PropTypes.func,
  elements: PropTypes.array.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  offset: PropTypes.object,
  zoom: PropTypes.number,
  style: PropTypes.object,
  ignoreTargets: PropTypes.array,
};
