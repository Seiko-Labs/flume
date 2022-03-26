"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getOffset(props) {
	var offset = {
		top: 0,
		left: 0
	};
	if (props.offset) {
		offset = Object.assign({}, props.offset);
	} else if (props.target) {
		var boundingBox = props.target.getBoundingClientRect();
		offset.top = boundingBox.top + window.scrollY;
		offset.left = boundingBox.left + window.scrollX;
	}
	return offset;
}

var Selection = function (_React$PureComponent) {
	_inherits(Selection, _React$PureComponent);

	// eslint-disable-line react/prefer-stateless-function
	function Selection(props) {
		_classCallCheck(this, Selection);

		var _this = _possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).call(this, props));

		_this.bind = function () {
			_this.props.target.addEventListener("mousedown", _this.onMouseDown);
			_this.props.target.addEventListener("touchstart", _this.onTouchStart);
		};

		_this.reset = function () {
			if (_this.props.target) {
				_this.props.target.removeEventListener("mousedown", _this.onMouseDown);
			}
		};

		_this.init = function (e, x, y) {
			if (_this.props.ignoreTargets) {
				var Target = e.target;
				if (!Target.matches) {
					// polyfill matches
					var defaultMatches = function defaultMatches(s) {
						return [].indexOf.call(window.document.querySelectorAll(s), _this) !== -1;
					};
					Target.matches = Target.matchesSelector || Target.mozMatchesSelector || Target.msMatchesSelector || Target.oMatchesSelector || Target.webkitMatchesSelector || defaultMatches;
				}
				if (Target.matches && Target.matches(_this.props.ignoreTargets.join(","))) {
					return false;
				}
			}
			var nextState = {};

			nextState.mouseDown = true;
			nextState.startPoint = {
				x: (x - _this.state.offset.left) / _this.state.zoom,
				y: (y - _this.state.offset.top) / _this.state.zoom
			};
			nextState.startWithoutZoom = {
				x: x - _this.state.offset.left,
				y: y - _this.state.offset.top
			};

			_this.setState(nextState);
			return true;
		};

		_this.onMouseDown = function (e) {
			if (_this.props.disabled || e.button === 2 || e.nativeEvent && e.nativeEvent.which === 2) {
				return;
			}

			if (_this.init(e, e.pageX, e.pageY)) {
				window.document.addEventListener("mousemove", _this.onMouseMove);
				window.document.addEventListener("mouseup", _this.onMouseUp);
			}
		};

		_this.onTouchStart = function (e) {
			if (_this.props.disabled || !e.touches || !e.touches[0] || e.touches.length > 1) {
				return;
			}

			if (_this.init(e, e.touches[0].pageX, e.touches[0].pageY)) {
				window.document.addEventListener("touchmove", _this.onTouchMove);
				window.document.addEventListener("touchend", _this.onMouseUp);
			}
		};

		_this.onMouseUp = function () {
			window.document.removeEventListener("touchmove", _this.onTouchMove);
			window.document.removeEventListener("mousemove", _this.onMouseMove);
			window.document.removeEventListener("mouseup", _this.onMouseUp);
			window.document.removeEventListener("touchend", _this.onMouseUp);

			_this.setState({
				mouseDown: false,
				startPoint: null,
				endPoint: null,
				selectionBox: null,
				startWithoutZoom: null,
				endWithoutZoom: null,
				selectionBoxWithoutZoom: null
			});

			if (_this.props.onSelectionChange) {
				_this.props.onSelectionChange(_this.selectedChildren);
			}

			if (_this.props.onHighlightChange) {
				_this.highlightedChildren = [];
				_this.props.onHighlightChange(_this.highlightedChildren);
			}
			_this.selectedChildren = [];
		};

		_this.onMouseMove = function (e) {
			e.preventDefault();
			if (_this.state.mouseDown) {
				var _endPoint = {
					x: (e.pageX - _this.state.offset.left) / _this.state.zoom,
					y: (e.pageY - _this.state.offset.top) / _this.state.zoom
				};

				_this.setState({
					endPoint: _endPoint,
					selectionBox: _this.calculateSelectionBox(_this.state.startPoint, _endPoint),
					selectionBoxWithoutZoom: _this.calculateSelectionBox(_this.state.startWithoutZoom, {
						x: e.pageX - _this.state.offset.left,
						y: e.pageY - _this.state.offset.top
					})
				});
			}
		};

		_this.onTouchMove = function (e) {
			e.preventDefault();
			if (_this.state.mouseDown) {
				var _endPoint2 = {
					x: (e.touches[0].pageX - _this.state.offset.left) / _this.state.zoom,
					y: (e.touches[0].pageY - _this.state.offset.top) / _this.state.zoom
				};

				_this.setState({
					endPoint: _endPoint2,
					selectionBox: _this.calculateSelectionBox(_this.state.startPoint, _endPoint2),
					selectionBoxWithoutZoom: _this.calculateSelectionBox(_this.state.startWithoutZoom, {
						x: e.pageX - _this.state.offset.left,
						y: e.pageY - _this.state.offset.top
					})
				});
			}
		};

		_this.lineIntersects = function (lineA, lineB) {
			return lineA[1] >= lineB[0] && lineB[1] >= lineA[0];
		};

		_this.boxIntersects = function (boxA, boxB) {
			// calculate coordinates of all points
			var boxAProjection = {
				x: [boxA.left, boxA.left + boxA.width],
				y: [boxA.top, boxA.top + boxA.height]
			};

			var boxBProjection = {
				x: [boxB.left, boxB.left + boxB.width],
				y: [boxB.top, boxB.top + boxB.height]
			};

			return _this.lineIntersects(boxAProjection.x, boxBProjection.x) && _this.lineIntersects(boxAProjection.y, boxBProjection.y);
		};

		_this.updateCollidingChildren = function (selectionBox) {
			_this.selectedChildren = [];
			if (_this.props.elements) {
				_this.props.elements.forEach(function (ref, $index) {
					if (ref) {
						var refBox = ref.getBoundingClientRect();
						var tmpBox = {
							top: (refBox.top - _this.state.offset.top + window.scrollY) / _this.state.zoom,
							left: (refBox.left - _this.state.offset.left + window.scrollX) / _this.state.zoom,
							width: ref.clientWidth,
							height: ref.clientHeight
						};

						if (_this.boxIntersects(selectionBox, tmpBox)) {
							_this.selectedChildren.push($index);
						}
					}
				});
			}
			if (_this.props.onHighlightChange && JSON.stringify(_this.highlightedChildren) !== JSON.stringify(_this.selectedChildren)) {
				var _onHighlightChange = _this.props.onHighlightChange;

				_this.highlightedChildren = [].concat(_toConsumableArray(_this.selectedChildren));
				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(function () {
						_onHighlightChange(_this.highlightedChildren);
					});
				} else {
					_onHighlightChange(_this.highlightedChildren);
				}
			}
		};

		_this.calculateSelectionBox = function (startPoint, endPoint) {
			if (!_this.state.mouseDown || !startPoint || !endPoint) {
				return null;
			}

			// The extra 1 pixel is to ensure that the mouse is on top
			// of the selection box and avoids triggering clicks on the target.
			var left = Math.min(startPoint.x, endPoint.x) - 1;
			var top = Math.min(startPoint.y, endPoint.y) - 1;
			var width = Math.abs(startPoint.x - endPoint.x) + 1;
			var height = Math.abs(startPoint.y - endPoint.y) + 1;

			return {
				left: left,
				top: top,
				width: width,
				height: height
			};
		};

		_this.state = {
			mouseDown: false,
			startPoint: null,
			endPoint: null,
			selectionBox: null,
			offset: getOffset(props),
			zoom: props.zoom || 1,
			startWithoutZoom: null,
			endWithoutZoom: null,
			selectionBoxWithoutZoom: null
		};

		_this.selectedChildren = [];
		_this.highlightedChildren = [];
		return _this;
	}

	_createClass(Selection, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.reset();
			this.bind();
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.reset();
			this.bind();
			if (this.state.mouseDown && this.state.selectionBox) {
				this.updateCollidingChildren(this.state.selectionBox);
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			this.reset();
			window.document.removeEventListener("mousemove", this.onMouseMove);
			window.document.removeEventListener("mouseup", this.onMouseUp);
		}

		/**
   * On root element mouse down
   * The event should be a MouseEvent | TouchEvent, but flow won't get it...
   * @private
   */


		/**
   * On document element mouse up
   * @private
   */


		/**
   * On document element mouse move
   * @private
   */


		/**
   * Calculate if two segments overlap in 1D
   * @param lineA [min, max]
   * @param lineB [min, max]
   */


		/**
   * Detect 2D box intersection - the two boxes will intersect
   * if their projections to both axis overlap
   * @private
   */


		/**
   * Updates the selected items based on the
   * collisions with selectionBox,
   * also updates the highlighted items if they have changed
   * @private
   */


		/**
   * Calculate selection box dimensions
   * @private
   */

	}, {
		key: "render",


		/**
   * Render
   */
		value: function render() {
			var style = Object.assign({
				position: "absolute",
				background: "rgba(159, 217, 255, 0.3)",
				border: "solid 1px rgba(123, 123, 123, 0.61)",
				zIndex: 9,
				cursor: "crosshair"
			}, this.props.style);

			if (this.state.selectionBoxWithoutZoom) {
				style = Object.assign({}, style, this.state.selectionBoxWithoutZoom);
			}

			if (!this.state.mouseDown) {
				return null;
			}
			return _jsx("div", {
				className: "react-ds-border",
				style: style
			});
		}
	}], [{
		key: "getDerivedStateFromProps",
		value: function getDerivedStateFromProps(nextProps) {
			return {
				offset: getOffset(nextProps)
			};
		}
	}]);

	return Selection;
}(_react2.default.PureComponent);

exports.default = Selection;