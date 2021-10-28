import * as React from 'react';
import React__default, { useState, useEffect, createContext, forwardRef, useContext, useRef, useCallback, useMemo, memo, createRef, useReducer, useLayoutEffect, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$1();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

process.env.NODE_ENV !== 'production';

/* eslint-disable no-restricted-globals, eqeqeq  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM$1() ? React__default.useLayoutEffect : React__default.useEffect;

if (process.env.NODE_ENV !== "production") {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  };
      _ref.env;
}
function canUseDOM$1() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

if (process.env.NODE_ENV !== "production") ;

if (process.env.NODE_ENV !== "production") ;

if (process.env.NODE_ENV !== "production") ;

/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reacttraining.com/reach-ui/auto-id
 */


var useId = function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _useState = useState(initialId),
      id = _useState[0],
      setId = _useState[1];

  useIsomorphicLayoutEffect(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  useEffect(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$d = ".Stage_wrapper__1X5K_ {\n  width: 100%;\n  height: 100%;\n  min-height: 100px;\n  background-color: #2F2F3B;\n  /*noinspection ALL*/\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='transparent' stroke='white' stroke-opacity='.02'%3E %3Crect x='0' y='0' width='11' height='11' stroke-width='2' stroke-dasharray='3 50%25 50%25 3.5'/%3E %3C/svg%3E\");\n  color: #000;\n  position: relative;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  font-family: \"Segoe UI\", Helvetica, sans-serif;\n  text-align: left;\n  line-height: 1;\n  outline: none !important;\n}\n.Stage_wrapper__1X5K_ * {\n  box-sizing: border-box;\n}\n.Stage_wrapper__1X5K_ input,\ntextarea,\nselect {\n  font-family: \"Segoe UI\", Helvetica, sans-serif;\n}\n.Stage_transformWrapper__3CfIp {\n  transform-origin: center center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0px;\n  height: 0px;\n}\n.Stage_scaleWrapper__2Y7Ck {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0px;\n  height: 0px;\n}\n";
var styles$e = {"wrapper":"Stage_wrapper__1X5K_","transformWrapper":"Stage_transformWrapper__3CfIp","scaleWrapper":"Stage_scaleWrapper__2Y7Ck"};
styleInject(css_248z$d);

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c$1;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$a = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$a.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$3 = function (_React$Component) {
  _inherits$4(Portal, _React$Component);

  function Portal() {
    _classCallCheck$4(this, Portal);

    return _possibleConstructorReturn$4(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass$4(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(React__default.Component);

Portal$3.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portalv4 = Portal$3;

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$2 = function (_React$Component) {
  _inherits$3(Portal, _React$Component);

  function Portal() {
    _classCallCheck$3(this, Portal);

    return _possibleConstructorReturn$3(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass$3(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = React__default.cloneElement(this.props.children);
      }

      this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(React__default.Component);

var LegacyPortal = Portal$2;


Portal$2.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portal = void 0;

if (ReactDOM.createPortal) {
  Portal = Portalv4;
} else {
  Portal = LegacyPortal;
}

var Portal$1 = Portal;

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState = function (_React$Component) {
  _inherits$2(PortalWithState, _React$Component);

  function PortalWithState(props) {
    _classCallCheck$2(this, PortalWithState);

    var _this = _possibleConstructorReturn$2(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass$2(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return React__default.createElement(
        Portal$1,
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode && (this.portalNode.props.node || this.portalNode.defaultNode);
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(React__default.Component);

PortalWithState.propTypes = {
  children: PropTypes.func.isRequired,
  defaultOpen: PropTypes.bool,
  node: PropTypes.any,
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

var PortalWithState$1 = PortalWithState;

var css_248z$c = ".ContextMenu_menuWrapper__1BheJ {\n\tposition: fixed;\n\tz-index: 9999;\n\tbackground: rgba(29, 32, 34, 0.95);\n\tborder-radius: 5px;\n\tbox-shadow: 0 6px 7px rgba(0, 0, 0, .3);\n\tborder: 1px solid rgba(0, 0, 0, .4);\n\tfont-size: 14px;\n\tmax-width: 300px;\n\tmin-width: 150px;\n\tfont-family: \"Segoe UI\", Helvetica, sans-serif;\n\tline-height: 1.15;\n\toutline: none;\n}\n\n@supports (backdrop-filter: blur(6px)) {\n\t.ContextMenu_menuWrapper__1BheJ {\n\t\tbackdrop-filter: blur(6px);\n\t\tbackground: rgba(29, 32, 34, 0.8);\n\t}\n}\n\n.ContextMenu_menuHeader__1Cw58 {\n\tpadding: 5px;\n\tborder-bottom: 1px solid rgba(255, 255, 255, .1);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.ContextMenu_menuLabel__158Pv {\n\tmargin: 0;\n\tcolor: #FFF;\n\tfont-size: 16px;\n\tfont-weight: 600;\n}\n\n.ContextMenu_optionsWrapper__2YK_z {\n\tmax-height: 300px;\n\toverflow-y: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.ContextMenu_menuFilter__1goBp {\n\tborder: none;\n\tbackground: none;\n\theight: 24px;\n\tflex: 1 1 auto;\n\twidth: 100%;\n\toutline: none;\n\tcolor: #FFF;\n}\n\n.ContextMenu_menuFilter__1goBp::placeholder {\n\t\tfont-style: italic;\n\t}\n\n.ContextMenu_option__33MDL {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tpadding: 5px;\n\tborder-bottom: 1px solid rgba(255, 255, 255, .1);\n\tcolor: #FFFFFF;\n}\n\n.ContextMenu_option__33MDL:last-child {\n\t\tborder-bottom: none;\n\t}\n\n.ContextMenu_option__33MDL:hover {\n\t\tbackground: rgba(255, 255, 255, .05);\n\t}\n\n.ContextMenu_option__33MDL label {\n\t\tmargin-bottom: 5px;\n\t\tuser-select: none;\n\t}\n\n.ContextMenu_option__33MDL label:last-child {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n.ContextMenu_option__33MDL p {\n\t\tmargin: 0;\n\t\tfont-style: italic;\n\t\tfont-size: 12px;\n\t\tcolor: rgb(182, 186, 194);\n\t\tuser-select: none;\n\t}\n\n.ContextMenu_option__33MDL[data-selected=true] {\n\t\tbackground: rgba(255, 255, 255, .05);\n\t}\n\n.ContextMenu_emptyText__2rcXy {\n\tcolor: #FFF;\n\tpadding: 5px;\n}\n";
var styles$d = {"menuWrapper":"ContextMenu_menuWrapper__1BheJ","menuHeader":"ContextMenu_menuHeader__1Cw58","menuLabel":"ContextMenu_menuLabel__158Pv","optionsWrapper":"ContextMenu_optionsWrapper__2YK_z","menuFilter":"ContextMenu_menuFilter__1goBp","option":"ContextMenu_option__33MDL","emptyText":"ContextMenu_emptyText__2rcXy"};
styleInject(css_248z$c);

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */

function baseClamp$1(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

var _baseClamp = baseClamp$1;

/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$6;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$5 = root$7.Symbol;

var _Symbol = Symbol$5;

var Symbol$4 = _Symbol;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$b.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$a = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$a.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$3 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$5;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$5(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$5;

var baseGetTag$4 = _baseGetTag,
    isObjectLike$4 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$5(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol$5;

var baseTrim = _baseTrim,
    isObject$5 = isObject_1,
    isSymbol$4 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$4(value)) {
    return NAN;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$5(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var baseClamp = _baseClamp,
    toNumber = toNumber_1;

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

var clamp_1 = clamp;

// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
var url = '-_';
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
var i = 36;
while (i--) {
  // 36 is radix. Number.prototype.toString(36) returns number
  // in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
  url += i.toString(36);
}
// Loop from 36 to 10 (from Z to A in Base36).
i = 36;
while (i-- - 10) {
  url += i.toString(36).toUpperCase();
}

/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator with bigger collision probability.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nonSecure
 * @function
 */
var nonSecure = function (size) {
  var id = '';
  i = size || 21;
  // Compact alternative for `for (var i = 0; i < size; i++)`
  while (i--) {
    // `| 0` is compact and faster alternative for `Math.floor()`
    id += url[Math.random() * 64 | 0];
  }
  return id
};

var nanoid = nonSecure;

var ContextMenu = function ContextMenu(_ref) {
  var x = _ref.x,
      y = _ref.y,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      onRequestClose = _ref.onRequestClose,
      onOptionSelected = _ref.onOptionSelected,
      label = _ref.label,
      hideHeader = _ref.hideHeader,
      hideFilter = _ref.hideFilter,
      emptyText = _ref.emptyText;
  var menuWrapper = React__default.useRef();
  var menuOptionsWrapper = React__default.useRef();
  var filterInput = React__default.useRef();

  var _React$useState = React__default.useState(""),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      filter = _React$useState2[0],
      setFilter = _React$useState2[1];

  var _React$useState3 = React__default.useState(0),
      _React$useState4 = _slicedToArray$1(_React$useState3, 2),
      menuWidth = _React$useState4[0],
      setMenuWidth = _React$useState4[1];

  var _React$useState5 = React__default.useState(0),
      _React$useState6 = _slicedToArray$1(_React$useState5, 2),
      selectedIndex = _React$useState6[0],
      setSelectedIndex = _React$useState6[1];

  var menuId = React__default.useRef(nanoid(10));

  var handleOptionSelected = function handleOptionSelected(option) {
    onOptionSelected(option);
    onRequestClose();
  };

  var testClickOutside = React__default.useCallback(function (e) {
    if (menuWrapper.current && !menuWrapper.current.contains(e.target)) {
      onRequestClose();
      document.removeEventListener("click", testClickOutside, {
        capture: true
      });
      document.removeEventListener("contextmenu", testClickOutside, {
        capture: true
      });
    }
  }, [menuWrapper, onRequestClose]);
  var testEscape = React__default.useCallback(function (e) {
    if (e.keyCode === 27) {
      onRequestClose();
      document.removeEventListener("keydown", testEscape, {
        capture: true
      });
    }
  }, [onRequestClose]);
  React__default.useEffect(function () {
    if (filterInput.current) {
      filterInput.current.focus();
    }

    setMenuWidth(menuWrapper.current.getBoundingClientRect().width);
    document.addEventListener("keydown", testEscape, {
      capture: true
    });
    document.addEventListener("click", testClickOutside, {
      capture: true
    });
    document.addEventListener("contextmenu", testClickOutside, {
      capture: true
    });
    return function () {
      document.removeEventListener("click", testClickOutside, {
        capture: true
      });
      document.removeEventListener("contextmenu", testClickOutside, {
        capture: true
      });
      document.removeEventListener("keydown", testEscape, {
        capture: true
      });
    };
  }, [testClickOutside, testEscape]);
  var filteredOptions = React__default.useMemo(function () {
    if (!filter) return options;
    var lowerFilter = filter.toLowerCase();
    return options.filter(function (opt) {
      return opt.label.toLowerCase().includes(lowerFilter);
    });
  }, [filter, options]);

  var handleFilterChange = function handleFilterChange(e) {
    var value = e.target.value;
    setFilter(value);
    setSelectedIndex(0);
  };

  var handleKeyDown = function handleKeyDown(e) {
    // Up pressed
    if (e.which === 38) {
      e.preventDefault();

      if (selectedIndex === null) {
        setSelectedIndex(0);
      } else if (selectedIndex > 0) {
        setSelectedIndex(function (i) {
          return i - 1;
        });
      }
    } // Down pressed


    if (e.which === 40) {
      e.preventDefault();

      if (selectedIndex === null) {
        setSelectedIndex(0);
      } else if (selectedIndex < filteredOptions.length - 1) {
        setSelectedIndex(function (i) {
          return i + 1;
        });
      }
    } // Enter pressed


    if (e.which === 13 && selectedIndex !== null) {
      var option = filteredOptions[selectedIndex];

      if (option) {
        handleOptionSelected(option);
      }
    }
  };

  React__default.useEffect(function () {
    if (hideFilter || hideHeader) {
      menuWrapper.current.focus();
    }
  }, [hideFilter, hideHeader]);
  React__default.useEffect(function () {
    var menuOption = document.getElementById("".concat(menuId.current, "-").concat(selectedIndex));

    if (menuOption) {
      var menuRect = menuOptionsWrapper.current.getBoundingClientRect();
      var optionRect = menuOption.getBoundingClientRect();

      if (optionRect.y + optionRect.height > menuRect.y + menuRect.height || optionRect.y < menuRect.y) {
        menuOption.scrollIntoView({
          block: "nearest"
        });
      }
    }
  }, [selectedIndex]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$d.menuWrapper,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onKeyDown: handleKeyDown,
    style: {
      left: x,
      top: y,
      width: filter ? menuWidth : "auto"
    },
    ref: menuWrapper,
    tabIndex: 0,
    role: "menu",
    "aria-activedescendant": "".concat(menuId.current, "-").concat(selectedIndex)
  }, !hideHeader && (label ? true : !!options.length) ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$d.menuHeader
  }, /*#__PURE__*/React__default.createElement("label", {
    className: styles$d.menuLabel
  }, label), !hideFilter && options.length ? /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    placeholder: "Filter options",
    value: filter,
    onChange: handleFilterChange,
    className: styles$d.menuFilter,
    autoFocus: true,
    ref: filterInput
  }) : null) : null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$d.optionsWrapper,
    role: "menu",
    ref: menuOptionsWrapper,
    style: {
      maxHeight: clamp_1(window.innerHeight - y - 70, 10, 300)
    }
  }, filteredOptions.map(function (option, i) {
    return /*#__PURE__*/React__default.createElement(ContextOption, {
      menuId: menuId.current,
      selected: selectedIndex === i,
      onClick: function onClick() {
        return handleOptionSelected(option);
      },
      onMouseEnter: function onMouseEnter() {
        return setSelectedIndex(null);
      },
      index: i,
      key: option.value + i
    }, /*#__PURE__*/React__default.createElement("label", null, option.label), option.description ? /*#__PURE__*/React__default.createElement("p", null, option.description) : null);
  }), !options.length ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$d.emptyText
  }, emptyText) : null));
};

var ContextOption = function ContextOption(_ref2) {
  var menuId = _ref2.menuId,
      index = _ref2.index,
      children = _ref2.children,
      onClick = _ref2.onClick,
      selected = _ref2.selected,
      onMouseEnter = _ref2.onMouseEnter;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$d.option,
    role: "menuitem",
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    "data-selected": selected,
    id: "".concat(menuId, "-").concat(index)
  }, children);
};

var NodeTypesContext = /*#__PURE__*/createContext();
var PortTypesContext = /*#__PURE__*/createContext();
var NodeDispatchContext = /*#__PURE__*/createContext();
var ConnectionRecalculateContext = /*#__PURE__*/createContext();
var ContextContext = /*#__PURE__*/createContext();
var StageContext = /*#__PURE__*/createContext();
var CacheContext = /*#__PURE__*/createContext();
var RecalculateStageRectContext = /*#__PURE__*/createContext();
var EditorIdContext = /*#__PURE__*/createContext();

var _excluded$3 = ["children", "stageState", "stageRect", "onDragDelayStart", "onDragStart", "onDrag", "onDragEnd", "onMouseDown", "onTouchStart", "disabled", "delay", "innerRef"];
var Draggable = (function (_ref) {
  var children = _ref.children,
      stageState = _ref.stageState,
      stageRect = _ref.stageRect,
      onDragDelayStart = _ref.onDragDelayStart,
      onDragStart = _ref.onDragStart,
      onDrag = _ref.onDrag,
      onDragEnd = _ref.onDragEnd,
      _onMouseDown = _ref.onMouseDown,
      _onTouchStart = _ref.onTouchStart,
      disabled = _ref.disabled,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 6 : _ref$delay,
      innerRef = _ref.innerRef,
      rest = _objectWithoutProperties(_ref, _excluded$3);

  var startCoordinates = React__default.useRef(null);
  var offset = React__default.useRef();
  var wrapper = React__default.useRef();

  var byScale = function byScale(value) {
    return value / stageState.scale;
  };

  var getScaledCoordinates = function getScaledCoordinates(e) {
    var x = byScale(e.clientX - (stageRect ? stageRect.current.left : 0) - offset.current.x - (stageRect ? stageRect.current.width : 0) / 2) + stageState.translate.x;
    var y = byScale(e.clientY - (stageRect ? stageRect.current.top : 0) - offset.current.y - (stageRect ? stageRect.current.height : 0) / 2) + stageState.translate.y;
    return {
      x: x,
      y: y
    };
  };

  var updateCoordinates = function updateCoordinates(e) {
    var coordinates = getScaledCoordinates(e);

    if (onDrag) {
      onDrag(coordinates, e);
    }
  };

  var stopDrag = function stopDrag(e) {
    var coordinates = getScaledCoordinates(e);

    if (onDragEnd) {
      onDragEnd(e, coordinates);
    }

    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("mousemove", updateCoordinates);
  };

  var startDrag = function startDrag(e) {
    if (onDragStart) {
      onDragStart(e);
    }

    var nodeRect = wrapper.current.getBoundingClientRect();
    offset.current = {
      x: startCoordinates.current.x - nodeRect.left,
      y: startCoordinates.current.y - nodeRect.top
    };
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("mousemove", updateCoordinates);
  };

  var checkDragDelay = function checkDragDelay(e) {
    var x;
    var y;

    if ("ontouchstart" in window && e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      e.preventDefault();
      x = e.clientX;
      y = e.clientY;
    }

    var a = Math.abs(startCoordinates.current.x - x);
    var b = Math.abs(startCoordinates.current.y - y);
    var distance = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
    var dragDistance = delay;

    if (distance >= dragDistance) {
      startDrag(e);
      endDragDelay();
    }
  };

  var endDragDelay = function endDragDelay() {
    document.removeEventListener("mouseup", endDragDelay);
    document.removeEventListener("mousemove", checkDragDelay);
    startCoordinates.current = null;
  };

  var startDragDelay = function startDragDelay(e) {
    if (onDragDelayStart) {
      onDragDelayStart(e);
    }

    e.stopPropagation();
    var x;
    var y;

    if ("ontouchstart" in window && e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      e.preventDefault();
      x = e.clientX;
      y = e.clientY;
    }

    startCoordinates.current = {
      x: x,
      y: y
    };
    document.addEventListener("mouseup", endDragDelay);
    document.addEventListener("mousemove", checkDragDelay);
  };

  return /*#__PURE__*/React__default.createElement("div", _extends$3({
    onMouseDown: function onMouseDown(e) {
      if (!disabled) {
        startDragDelay(e);
      }

      if (_onMouseDown) {
        _onMouseDown(e);
      }
    },
    onTouchStart: function onTouchStart(e) {
      if (!disabled) {
        startDragDelay(e);
      }

      if (_onTouchStart) {
        _onTouchStart(e);
      }
    },
    onDragStart: function onDragStart(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    ref: function ref(_ref2) {
      wrapper.current = _ref2;

      if (innerRef) {
        innerRef.current = _ref2;
      }
    }
  }, rest), children);
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$2(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$2;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$a = Array.isArray;

var isArray_1 = isArray$a;

var isArray$9 = isArray_1,
    isSymbol$3 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$3(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$3;

var baseGetTag$3 = _baseGetTag,
    isObject$4 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$3(value) {
  if (!isObject$4(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$3;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$2 = isFunction_1,
    isMasked = _isMasked,
    isObject$3 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$9 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$6(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$6;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$2(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$2;

var eq$1 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var getNative$4 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$4 = getNative$4(root$5, 'Map');

var _Map = Map$4;

var Hash = _Hash,
    ListCache$3 = _ListCache,
    Map$3 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$3 || ListCache$3),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$3(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype['delete'] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;

var _MapCache = MapCache$3;

var MapCache$2 = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$2;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

var Symbol$2 = _Symbol,
    arrayMap$1 = _arrayMap,
    isArray$8 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$8(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap$1(value, baseToString$1) + '';
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray$7 = isArray_1,
    isKey$2 = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$2(value, object) {
  if (isArray$7(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$2;

var isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$4(value) {
  if (typeof value == 'string' || isSymbol$1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey$4;

var castPath$1 = _castPath,
    toKey$3 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$3(object, path) {
  path = castPath$1(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$3;

var ListCache$2 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache$1 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$2.prototype.clear = stackClear;
Stack$2.prototype['delete'] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;

var _Stack = Stack$2;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol$1 = _Symbol,
    Uint8Array = _Uint8Array,
    eq = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$2:
      var convert = mapToArray;

    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

var arrayPush = _arrayPush,
    isArray$6 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$6(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter,
    stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$2 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$2;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
var root = _root,
    stubFalse = stubFalse_1;

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
}(isBuffer$2, isBuffer$2.exports));

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$2;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$3(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$3;

var baseGetTag$1 = _baseGetTag,
    isLength$2 = isLength_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) &&
    isLength$2(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$2;

var _nodeUtil = {exports: {}};

(function (module, exports) {
var freeGlobal = _freeGlobal;

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
}(_nodeUtil, _nodeUtil.exports));

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$1 = _baseUnary,
    nodeUtil = _nodeUtil.exports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$1(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$2;

var baseTimes = _baseTimes,
    isArguments$1 = isArguments_1,
    isArray$5 = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex$1 = _isIndex,
    isTypedArray$1 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$5(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex$1(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction$1 = isFunction_1,
    isLength$1 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}

var isArrayLike_1 = isArrayLike$3;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$2 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$3;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$2 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$2, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$3(root$3, 'DataView');

var _DataView = DataView$1;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$1(root$1, 'Set');

var _Set = Set$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag$1(new Map$1) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack$1 = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray$4 = isArray_1,
    isBuffer = isBuffer$2.exports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$4(object),
      othIsArr = isArray$4(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$1);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}

var _baseIsEqual = baseIsEqual$2;

var Stack = _Stack,
    baseIsEqual$1 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$2 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$2(value) {
  return value === value && !isObject$2(value);
}

var _isStrictComparable = isStrictComparable$2;

var isStrictComparable$1 = _isStrictComparable,
    keys$1 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$2;

var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var baseGet$2 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$2(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath = _castPath,
    isArguments = isArguments_1,
    isArray$3 = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey$2 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray$3(object) || isArguments(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn,
    hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual = _baseIsEqual,
    get = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$1 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$2(value) {
  return value;
}

var identity_1 = identity$2;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$1 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity$1 = identity_1,
    isArray$2 = isArray_1,
    property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (typeof value == 'object') {
    return isArray$2(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor,
    keys = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

var _baseForOwn = baseForOwn$1;

var isArrayLike$1 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn = _baseForOwn,
    createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;

var baseEach = _baseEach,
    isArrayLike = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$1(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$1;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */

function baseSortBy$1(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy$1;

var isSymbol = isSymbol_1;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending$1(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending$1;

var compareAscending = _compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple$1(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple$1;

var arrayMap = _arrayMap,
    baseGet = _baseGet,
    baseIteratee = _baseIteratee,
    baseMap = _baseMap,
    baseSortBy = _baseSortBy,
    baseUnary = _baseUnary,
    compareMultiple = _compareMultiple,
    identity = identity_1,
    isArray$1 = isArray_1;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy$1(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray$1(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy$1;

var baseOrderBy = _baseOrderBy,
    isArray = isArray_1;

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

var orderBy_1 = orderBy;

var STAGE_ID = '__node_editor_stage__';
var DRAG_CONNECTION_ID = '__node_editor_drag_connection__';
var CONNECTIONS_ID = '__node_editor_connections__';

var Stage = /*#__PURE__*/forwardRef(function (_ref, wrapper) {
  var scale = _ref.scale,
      translate = _ref.translate,
      editorId = _ref.editorId,
      dispatchStageState = _ref.dispatchStageState,
      children = _ref.children,
      outerStageChildren = _ref.outerStageChildren,
      parentSetSpaceIsPressed = _ref.setSpaceIsPressed,
      numNodes = _ref.numNodes,
      stageRef = _ref.stageRef,
      spaceToPan = _ref.spaceToPan,
      dispatchComments = _ref.dispatchComments,
      disableComments = _ref.disableComments,
      disablePan = _ref.disablePan,
      disableZoom = _ref.disableZoom;
  var nodeTypes = useContext(NodeTypesContext);
  var dispatchNodes = useContext(NodeDispatchContext);
  var translateWrapper = useRef();
  var scaleWrapper = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var _useState3 = useState({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray$1(_useState3, 2),
      menuCoordinates = _useState4[0],
      setMenuCoordinates = _useState4[1];

  var dragData = useRef({
    x: 0,
    y: 0
  });

  var _useState5 = useState(false),
      _useState6 = _slicedToArray$1(_useState5, 2),
      spaceIsPressed = _useState6[0],
      setSpaceIsPressed = _useState6[1];

  var setStageRect = useCallback(function () {
    stageRef.current = wrapper.current.getBoundingClientRect();
  }, []);
  useEffect(function () {
    stageRef.current = wrapper.current.getBoundingClientRect();
    window.addEventListener("resize", setStageRect);
    return function () {
      window.removeEventListener("resize", setStageRect);
    };
  }, [stageRef, setStageRect]);
  var handleWheel = useCallback(function (e) {
    if (e.target.nodeName === "TEXTAREA" || e.target.dataset.comment) {
      if (e.target.clientHeight < e.target.scrollHeight) return;
    }

    e.preventDefault();

    if (numNodes > 0) {
      var delta = e.deltaY;
      dispatchStageState(function (_ref2) {
        var scale = _ref2.scale;
        return {
          type: "SET_SCALE",
          scale: clamp_1(scale - clamp_1(delta, -10, 10) * 0.005, 0.1, 2)
        };
      });
    }
  }, [dispatchStageState, numNodes]);

  var handleDragDelayStart = function handleDragDelayStart(e) {
    wrapper.current.focus();
  };

  var handleDragStart = function handleDragStart(e) {
    e.preventDefault();
    dragData.current = {
      x: e.clientX / scale,
      y: e.clientY / scale
    };
  };

  var handleMouseDrag = function handleMouseDrag(coords, e) {
    var xDistance = dragData.current.x - e.clientX / scale;
    var yDistance = dragData.current.y - e.clientY / scale;
    wrapper.current.style.backgroundPosition = "calc(50% + ".concat(-(translate.x + xDistance) * scale % (10 * scale), "px) calc(50% + ").concat(-(translate.y + yDistance) * scale % (10 * scale), "px) ");
    translateWrapper.current.style.transform = "translate(".concat(-(translate.x + xDistance), "px, ").concat(-(translate.y + yDistance), "px)");
  };

  var handleDragEnd = function handleDragEnd(e) {
    var xDistance = dragData.current.x - e.clientX / scale;
    var yDistance = dragData.current.y - e.clientY / scale;
    dragData.current.x = e.clientX;
    dragData.current.y = e.clientY;
    dispatchStageState(function (_ref3) {
      var tran = _ref3.translate;
      return {
        type: "SET_TRANSLATE",
        translate: {
          x: tran.x + xDistance,
          y: tran.y + yDistance
        }
      };
    });
  };

  var handleContextMenu = function handleContextMenu(e) {
    e.preventDefault();
    setMenuCoordinates({
      x: e.clientX,
      y: e.clientY
    });
    setMenuOpen(true);
    return false;
  };

  var closeContextMenu = function closeContextMenu() {
    setMenuOpen(false);
  };

  var byScale = function byScale(value) {
    return value / scale;
  };

  var addNode = function addNode(_ref4) {
    var node = _ref4.node,
        internalType = _ref4.internalType;
    var wrapperRect = wrapper.current.getBoundingClientRect();
    var x = byScale(menuCoordinates.x - wrapperRect.x - wrapperRect.width / 2) + translate.x;
    var y = byScale(menuCoordinates.y - wrapperRect.y - wrapperRect.height / 2) + translate.y;

    if (internalType === "comment") {
      dispatchComments({
        type: "ADD_COMMENT",
        x: x,
        y: y
      });
    } else {
      dispatchNodes({
        type: "ADD_NODE",
        x: x,
        y: y,
        nodeType: node.type
      });
    }
  };

  var handleDocumentKeyUp = function handleDocumentKeyUp(e) {
    if (e.which === 32) {
      setSpaceIsPressed(false);
      parentSetSpaceIsPressed(false);
      document.removeEventListener("keyup", handleDocumentKeyUp);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.which === 32 && document.activeElement === wrapper.current) {
      e.preventDefault();
      e.stopPropagation();
      parentSetSpaceIsPressed(true);
      setSpaceIsPressed(true);
      document.addEventListener("keyup", handleDocumentKeyUp);
    }
  };

  var handleMouseEnter = function handleMouseEnter() {
    if (!wrapper.current.contains(document.activeElement)) {
      wrapper.current.focus();
    }
  };

  useEffect(function () {
    if (!disableZoom) {
      var stageWrapper = wrapper.current;
      stageWrapper.addEventListener("wheel", handleWheel);
      return function () {
        stageWrapper.removeEventListener("wheel", handleWheel);
      };
    }
  }, [handleWheel, disableZoom]);
  var menuOptions = useMemo(function () {
    var options = orderBy_1(Object.values(nodeTypes).filter(function (node) {
      return node.addable !== false;
    }).map(function (node) {
      return {
        value: node.type,
        label: node.label,
        description: node.description,
        sortIndex: node.sortIndex,
        node: node
      };
    }), ["sortIndex", "label"]);

    if (!disableComments) {
      options.push({
        value: "comment",
        label: "Comment",
        description: "A comment for documenting nodes",
        internalType: "comment"
      });
    }

    return options;
  }, [nodeTypes, disableComments]);
  return /*#__PURE__*/React__default.createElement(Draggable, {
    id: "".concat(STAGE_ID).concat(editorId),
    className: styles$e.wrapper,
    innerRef: wrapper,
    onContextMenu: handleContextMenu,
    onMouseEnter: handleMouseEnter,
    onDragDelayStart: handleDragDelayStart,
    onDragStart: handleDragStart,
    onDrag: handleMouseDrag,
    onDragEnd: handleDragEnd,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    stageState: {
      scale: scale,
      translate: translate
    },
    style: {
      cursor: spaceIsPressed && spaceToPan ? "grab" : "",
      backgroundSize: 10 * scale,
      backgroundOrigin: "center",
      backgroundPosition: "calc(50% + ".concat(-(translate.x * scale) % (10 * scale), "px) calc(50% + ").concat(-(translate.y * scale) % (10 * scale), "px) ")
    },
    disabled: disablePan || spaceToPan && !spaceIsPressed,
    "data-flume-stage": true
  }, menuOpen ? /*#__PURE__*/React__default.createElement(Portal$1, null, /*#__PURE__*/React__default.createElement(ContextMenu, {
    x: menuCoordinates.x,
    y: menuCoordinates.y,
    options: menuOptions,
    onRequestClose: closeContextMenu,
    onOptionSelected: addNode,
    label: "Add Node"
  })) : null, /*#__PURE__*/React__default.createElement("div", {
    ref: scaleWrapper,
    className: styles$e.scaleWrapper,
    style: {
      transformOrigin: "center",
      transform: "scale(".concat(scale, ")")
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: translateWrapper,
    className: styles$e.transformWrapper,
    style: {
      transform: "translate(".concat(-translate.x, "px, ").concat(-translate.y, "px)")
    }
  }, children)), outerStageChildren);
});
Stage.displayName = "Stage";

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$4(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread();
}

var usePrevious$1 = function usePrevious(value) {
  var ref = React__default.useRef();
  React__default.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var useTransputs = (function (transputsFn, transputType, nodeId, inputData, connections) {
  var nodesDispatch = useContext(NodeDispatchContext);
  var executionContext = useContext(ContextContext);
  var transputs = useMemo(function () {
    if (Array.isArray(transputsFn)) return transputsFn;
    return transputsFn(inputData, connections, executionContext);
  }, [transputsFn, inputData, connections, executionContext]);
  var prevTransputs = usePrevious$1(transputs);
  useEffect(function () {
    if (!prevTransputs || Array.isArray(transputsFn)) return;

    var _iterator = _createForOfIteratorHelper$2(prevTransputs),
        _step;

    try {
      var _loop = function _loop() {
        var transput = _step.value;
        var current = transputs.find(function (_ref) {
          var name = _ref.name;
          return transput.name === name;
        });

        if (!current) {
          nodesDispatch({
            type: "DESTROY_TRANSPUT",
            transputType: transputType,
            transput: {
              nodeId: nodeId,
              portName: "" + transput.name
            }
          });
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, [transputsFn, transputs, prevTransputs, nodesDispatch, nodeId, transputType]);
  return transputs;
});

var css_248z$b = ".Node_wrapper__3SmT7{\n  border-radius: 4px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  user-select: none;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  z-index: 1;\n  cursor: default;\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n}\n\n.Node_body__3Pwq7 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.Node_header__3epFg {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: nowrap !important;\n}\n\n.Node_headerMeta__2Oiuo {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n\n.Node_headerMeta__2Oiuo > * + * {\n  margin-left: 4px;\n}\n\n.Node_title__YTBiU {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Node_title__YTBiU > * + * {\n  margin-left: 2px;\n}\n\n.Node_title__YTBiU > img {\n  height: 10px;\n  width: 10px;\n  object-fit: contain;\n}\n\n.Node_title__YTBiU > span.Node_label__3MmhF {\n  font-size: 10px;\n  line-height: 10px;\n  font-weight: bold;\n}\n\n.Node_id__2CRrg {\n  font-size: 10px;\n  line-height: 10px;\n  font-style: italic;\n  transition: all 0.3s ease-out;\n  cursor: copy;\n\n  opacity: .5;\n\n}\n\n.Node_id__2CRrg:hover {\n  font-weight: bold;\n\n  opacity: 1;\n\n}\n\n.Node_headerActions__gTIxf {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n\n.Node_headerActions__gTIxf > * {\n  height: 8px;\n  width: 8px;\n  object-fit: contain;\n}\n\n.Node_description__3r_VO {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 10px;\n  padding: 4px;\n  max-width: 120px;\n}\n";
var styles$c = {"wrapper":"Node_wrapper__3SmT7","body":"Node_body__3Pwq7","header":"Node_header__3epFg","headerMeta":"Node_headerMeta__2Oiuo","title":"Node_title__YTBiU","label":"Node_label__3MmhF","id":"Node_id__2CRrg","headerActions":"Node_headerActions__gTIxf","description":"Node_description__3r_VO"};
styleInject(css_248z$b);

const pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant(x) {
  return function constant() {
    return x;
  };
}

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function line(x$1, y$1) {
  var defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;

  x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant(y$1);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // falls through
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

var curveBundle = (function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);

var css_248z$a = ".Connection_svg__-fKLY{\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  z-index: 0;\n  overflow: visible !important;\n}\n";
var styles$b = {"svg":"Connection_svg__-fKLY"};
styleInject(css_248z$a);

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getPort = function getPort(nodeId, portName) {
  var transputType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "input";
  return document.querySelector("[data-node-id=\"".concat(nodeId, "\"] [data-port-name=\"").concat(portName, "\"][data-port-transput-type=\"").concat(transputType, "\"]"));
};

var getPortRect = function getPortRect(nodeId, portName) {
  var transputType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "input";
  var cache = arguments.length > 3 ? arguments[3] : undefined;

  if (cache) {
    var portCacheName = nodeId + portName + transputType;
    var cachedPort = cache.current.ports[portCacheName];

    if (cachedPort) {
      return cachedPort.getBoundingClientRect();
    } else {
      var port = getPort(nodeId, portName, transputType);
      cache.current.ports[portCacheName] = port;
      return port && port.getBoundingClientRect();
    }
  } else {
    var _port = getPort(nodeId, portName, transputType);

    return _port && _port.getBoundingClientRect();
  }
};
var calculateCurve = function calculateCurve(from, to) {
  var fFrom = from;
  var fTo = to;
  var deltaX = fTo.x - fFrom.x;
  var deltaY = fTo.y - fFrom.y;
  var xSlope = Math.min(deltaX > 0 ? Math.abs(deltaX) / 3 : Math.abs(deltaX) / 3 + 30, 200);
  var ySlope = deltaX < 0 ? deltaY < 10 ? 30 : -deltaY < 10 ? -30 : 0 : 0;
  return line().curve(curveBundle.beta(Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8 ? 0 : 0.75))([[fFrom.x, fFrom.y], [fFrom.x + xSlope, fFrom.y - ySlope], [fTo.x - xSlope, fTo.y + ySlope], [fTo.x, fTo.y]]);
};
var deleteConnection = function deleteConnection(_ref3) {
  var id = _ref3.id;
  var line = document.querySelector("[data-connection-id=\"".concat(id, "\"]"));
  if (line) line.parentNode.remove();
};
var clearConnections = function clearConnections() {
  var lines = document.querySelectorAll("[data-output-node-id], [data-input-node-id]");

  var _iterator = _createForOfIteratorHelper$1(lines),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _line = _step.value;

      _line.parentNode.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var deleteConnectionsByNodeId = function deleteConnectionsByNodeId(nodeId) {
  var lines = document.querySelectorAll("[data-output-node-id=\"".concat(nodeId, "\"], [data-input-node-id=\"").concat(nodeId, "\"]"));

  var _iterator2 = _createForOfIteratorHelper$1(lines),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _line2 = _step2.value;

      _line2.parentNode.remove();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var updateConnection = function updateConnection(_ref4) {
  var line = _ref4.line,
      from = _ref4.from,
      to = _ref4.to;
  line.setAttribute("d", calculateCurve(from, to));
};
var createSVG = function createSVG(_ref5) {
  var from = _ref5.from,
      to = _ref5.to,
      stage = _ref5.stage,
      id = _ref5.id,
      outputNodeId = _ref5.outputNodeId,
      outputPortName = _ref5.outputPortName,
      inputNodeId = _ref5.inputNodeId,
      inputPortName = _ref5.inputPortName;
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", styles$b.svg);
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  var curve = calculateCurve(from, to);
  path.setAttribute("d", curve);
  path.setAttribute("stroke", "white");
  path.setAttribute("stroke-opacity", ".3");
  path.setAttribute("stroke-width", "1");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("fill", "none");
  path.setAttribute("data-connection-id", id);
  path.setAttribute("data-output-node-id", outputNodeId);
  path.setAttribute("data-output-port-name", outputPortName);
  path.setAttribute("data-input-node-id", inputNodeId);
  path.setAttribute("data-input-port-name", inputPortName);
  svg.appendChild(path);
  stage.appendChild(svg);
  return svg;
};
var getStageRef = function getStageRef(editorId) {
  return document.getElementById("".concat(CONNECTIONS_ID).concat(editorId));
};
var createConnections = function createConnections(nodes, _ref6, editorId) {
  var scale = _ref6.scale;
      _ref6.stageId;
  var stageRef = getStageRef(editorId);

  if (stageRef) {
    var stage = stageRef.getBoundingClientRect();
    var stageHalfWidth = stage.width / 2;
    var stageHalfHeight = stage.height / 2;

    var byScale = function byScale(value) {
      return value / scale;
    };

    Object.values(nodes).forEach(function (node) {
      if (node.connections && node.connections.inputs) {
        Object.entries(node.connections.inputs).forEach(function (_ref7, k) {
          var _ref8 = _slicedToArray$1(_ref7, 2),
              inputName = _ref8[0],
              outputs = _ref8[1];

          outputs.forEach(function (output) {
            var fromPort = getPortRect(output.nodeId, output.portName, "output");
            var toPort = getPortRect(node.id, inputName, "input");
            var portHalf = fromPort ? fromPort.width / 2 : 0;

            if (fromPort && toPort) {
              var id = output.nodeId + output.portName + node.id + inputName;
              var existingLine = document.querySelector("[data-connection-id=\"".concat(id, "\"]"));

              if (existingLine) {
                updateConnection({
                  line: existingLine,
                  to: {
                    x: byScale(fromPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(fromPort.y - stage.y + portHalf - stageHalfHeight)
                  },
                  from: {
                    x: byScale(toPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(toPort.y - stage.y + portHalf - stageHalfHeight)
                  }
                });
              } else {
                createSVG({
                  id: id,
                  outputNodeId: output.nodeId,
                  outputPortName: output.portName,
                  inputNodeId: node.id,
                  inputPortName: inputName,
                  to: {
                    x: byScale(fromPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(fromPort.y - stage.y + portHalf - stageHalfHeight)
                  },
                  from: {
                    x: byScale(toPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(toPort.y - stage.y + portHalf - stageHalfHeight)
                  },
                  stage: stageRef
                });
              }
            }
          });
        });
      }
    });
  }
};

var css_248z$9 = ".TextInput_wrapper__1cN0c{\n  background: none;\n  border: none;\n  line-height: 0;\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n  .TextInput_wrapper__1cN0c > * {\n    line-height: normal;\n  }\n\n.TextInput_expander__2z4-N {\n  display: none;\n  border: none;\n  padding: 0;\n  width: 10px;\n  height: 10px;\n\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' fill='white' fill-opacity='.3'%3E %3Cdefs%3E %3Cmask id='msk_pth' x='0' y='0' width='1' height='1'%3E %3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' stroke='white' stroke-linecap='round' stroke-linejoin='round'%3E %3Cpath d='M7.99997 4.22066V1.3938L5.16998 1.3938M0.925781 5.638L0.925781 8.46487H3.75577'/%3E %3Cline x1='1.17037' y1='8.25277' x2='7.53433' y2='1.88881' stroke-dasharray='3 3'/%3E %3C/svg%3E %3C/mask%3E %3C/defs%3E %3Crect x='0' y='0' width='9' height='9' mask='url(%23msk_pth)'/%3E %3C/svg%3E\");\n\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n\n  position: absolute;\n  float: right;\n  margin: 3px 3px 0 0;\n  background-color: transparent;\n}\n\n.TextInput_expander__2z4-N:hover {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' fill='white' fill-opacity='.6'%3E %3Cdefs%3E %3Cmask id='msk_pth' x='0' y='0' width='1' height='1'%3E %3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' stroke='white' stroke-linecap='round' stroke-linejoin='round'%3E %3Cpath d='M7.99997 4.22066V1.3938L5.16998 1.3938M0.925781 5.638L0.925781 8.46487H3.75577'/%3E %3Cline x1='1.17037' y1='8.25277' x2='7.53433' y2='1.88881' stroke-dasharray='3 3'/%3E %3C/svg%3E %3C/mask%3E %3C/defs%3E %3Crect x='0' y='0' width='9' height='9' mask='url(%23msk_pth)'/%3E %3C/svg%3E\");\n  }\n\n.TextInput_input__ujVG- {\n  width: 100%;\n  height: 16px;\n  outline: none;\n  padding: 3px;\n  font-size: 10px;\n  line-height: 10px;\n\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  border-radius: 2px;\n  color: inherit;\n}\n\n.TextInput_input__ujVG-[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none !important;\n    display: none !important;\n  }\n\n.TextInput_input__ujVG-[type=number]::-webkit-inner-spin-button {\n    -webkit-appearance: none !important;\n    opacity: 1 !important;\n    background: transparent !important;\n    border-width: 0;\n    margin: 0;\n    height: 16px;\n    width: 8px;\n    cursor: pointer;\n  }\n\n.TextInput_input__ujVG-::placeholder{\n    font-style: italic;\n    color: inherit;\n    opacity: .3\n  }\n\n.TextInput_input__ujVG-:focus {\n    background-color: rgba(0, 0, 0, 0.25);\n  }\n\n.TextInput_input__ujVG-[type=number]:focus, .TextInput_input__ujVG-[type=number]:active, .TextInput_input__ujVG-[type=number]:hover {\n      background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='10' viewBox='0 0 7 10' fill='none' stroke='white' stroke-opacity='0.3' stroke-linecap='round' stroke-linejoin='round'%3E %3Cpath d='M4.95056 2.99779L2.95167 0.998896M2.95167 0.998896V0.999414M2.95167 0.998896L0.950562 3'/%3E %3Cpath d='M0.950562 7.00221L2.94946 9.0011M2.94946 9.0011V9.00059M2.94946 9.0011L4.95056 7'/%3E %3C/svg%3E\");\n      background-position: calc(100% - 1px) center;\n      background-size: 7px;\n      background-repeat: no-repeat;\n    }\n\n.TextInput_input__ujVG-:not([type=number]):focus + button {\n        display: block;\n      }\n\n.TextInput_input__ujVG-:not([type=number]):focus{\n      padding-right: 13px;\n}\n\n.TextInput_editorWrapper__25W-8 {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  backdrop-filter: blur(1px);\n  z-index: 999;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.TextInput_editor__5v5nz {\n  height: 100%;\n  border-left: 1px solid #3B3B45;\n  width: min(max(50%, 400px), 100%);\n}\n";
var styles$a = {"wrapper":"TextInput_wrapper__1cN0c","expander":"TextInput_expander__2z4-N","input":"TextInput_input__ujVG-","editorWrapper":"TextInput_editorWrapper__25W-8","editor":"TextInput_editor__5v5nz"};
styleInject(css_248z$9);

var NumberInput = function NumberInput(_ref) {
  var placeholder = _ref.placeholder,
      _onChange = _ref.onChange;
      _ref.transformer;
      _ref.predicate;
      var data = _ref.data,
      step = _ref.step;
  var numberInput = React__default.useRef();

  var preventPropagation = function preventPropagation(e) {
    return e.stopPropagation();
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$a.wrapper
  }, /*#__PURE__*/React__default.createElement("input", {
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 69) {
        e.preventDefault();
        return false;
      }
    },
    onChange: function onChange(e) {
      var inputValue = e.target.value.replace(/[^0-9.]+/g, "");

      if (inputValue) {
        var value = parseFloat(inputValue, 10);

        if (Number.isNaN(value)) {
          _onChange(0);
        } else {
          _onChange(value);

          numberInput.current.value = value;
        }
      }
    },
    onBlur: function onBlur(e) {
      if (!e.target.value) {
        _onChange(0);

        numberInput.current.value = 0;
      }
    },
    step: step || "1",
    onDragStart: preventPropagation,
    onMouseDown: preventPropagation,
    type: "number",
    placeholder: placeholder,
    className: styles$a.input,
    defaultValue: data,
    ref: numberInput
  }));
};

var css_248z$8 = ".Control_wrapper__VZIiC {\n  width: 100%;\n  padding: 1px 2px 1px 1px;\n}\n";
var styles$9 = {"wrapper":"Control_wrapper__VZIiC"};
styleInject(css_248z$8);

var css_248z$7 = ".Checkbox_wrapper__aSqyY{\n  display: flex;\n  align-items: center;\n}\n.Checkbox_checkbox__Qv5gn{\n  background: linear-gradient(to bottom, #5b5f62, #6f7477);\n  border: 1px solid #3c3e40;\n  border-radius: 4px;\n  margin-right: 8px;\n}\n.Checkbox_label__2RxP-{\n  padding-top: 2px;\n  font-size: 13px;\n}\n";
var styles$8 = {"wrapper":"Checkbox_wrapper__aSqyY","checkbox":"Checkbox_checkbox__Qv5gn","label":"Checkbox_label__2RxP-"};
styleInject(css_248z$7);

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      data = _ref.data,
      _onChange = _ref.onChange;
  var id = React__default.useRef(nanoid(10));
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.wrapper
  }, /*#__PURE__*/React__default.createElement("input", {
    className: styles$8.checkbox,
    type: "checkbox",
    id: id,
    value: data,
    checked: data,
    onChange: function onChange(e) {
      return _onChange(e.target.checked);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    className: styles$8.label,
    htmlFor: id
  }, label));
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var runtime = {exports: {}};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
}(runtime));

var regenerator = runtime.exports;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$f(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$f(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$f(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$e(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$e(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$e(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry$1(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject$1(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject$1(changes)) errorHandler$1('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler$1('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler$1('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1('handlerType');
  if (isObject$1(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler$1('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler$1('initialIsRequired');
  if (!isObject$1(initial)) errorHandler$1('initialType');
  if (isEmpty(initial)) errorHandler$1('initialContent');
}

function throwError$1(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages$1 = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators$1.initial(initial);
  validators$1.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry$1(didStateUpdate)(state, handler);
  var update = curry$1(updateState)(state);
  var validate = curry$1(validators$1.changes)(initial);
  var getChanges = curry$1(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators$1.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose$1(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index$3 = {
  create: create
};

var config$1 = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs'
  }
};

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!isObject(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2$1(_objectSpread2$1({}, target), source);
}

// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/** the local state of the module */

var _state$create = index$3.create({
  config: config$1,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = _slicedToArray(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config(config) {
  setState(function (state) {
    return {
      config: merge(state.config, validators.config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return makeCancelable(Promise.resolve(window.monaco));
    }

    compose(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$2.apply(this, arguments);
}

const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/React__default.createElement("div", {
    style: loadingStyles
  }, content);
}

const styles$7 = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer$1({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /*#__PURE__*/React__default.createElement("section", _extends$2({
    style: { ...styles$7.wrapper,
      width,
      height
    }
  }, wrapperProps), !isEditorReady && /*#__PURE__*/React__default.createElement(Loading, {
    content: loading
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: _ref,
    style: { ...styles$7.fullWidth,
      ...(!isEditorReady && styles$7.hide)
    },
    className: className
  }));
}

MonacoContainer$1.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
  className: PropTypes.string,
  wrapperProps: PropTypes.object
};

var MonacoContainer = /*#__PURE__*/memo(MonacoContainer$1);

function useMount(effect) {
  useEffect(effect, []);
}

function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = useRef(true);
  useEffect(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}

function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const containerRef = useRef(null);
  const onMountRef = useRef(onMount);
  const beforeMountRef = useRef(beforeMount);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  useUpdate(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  useUpdate(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = getOrCreateModel(monacoRef.current, original, originalLanguage || language, originalModelPath);
    const modifiedModel = getOrCreateModel(monacoRef.current, modified, modifiedLanguage || language, modifiedModelPath);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = useCallback(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/React__default.createElement(MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

DiffEditor.propTypes = {
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,

  /* === */
  originalModelPath: PropTypes.string,
  modifiedModelPath: PropTypes.string,
  keepCurrentOriginalModel: PropTypes.bool,
  keepCurrentModifiedModel: PropTypes.bool,
  theme: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,

  /* === */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,

  /* === */
  beforeMount: PropTypes.func,
  onMount: PropTypes.func
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop
};

var index$2 = /*#__PURE__*/memo(DiffEditor);

function useMonaco() {
  const [monaco, setMonaco] = useState(loader.__getMonacoInstance());
  useMount(() => {
    let cancelable;

    if (!monaco) {
      cancelable = loader.init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const monacoRef = useRef(null);
  const editorRef = useRef(null);
  const containerRef = useRef(null);
  const onMountRef = useRef(onMount);
  const beforeMountRef = useRef(beforeMount);
  const subscriptionRef = useRef(null);
  const valueRef = useRef(value);
  const previousPath = usePrevious(path);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  useUpdate(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  useUpdate(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  useEffect(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  useEffect(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/React__default.createElement(MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

Editor.propTypes = {
  defaultValue: PropTypes.string,
  defaultPath: PropTypes.string,
  defaultLanguage: PropTypes.string,
  value: PropTypes.string,
  language: PropTypes.string,
  path: PropTypes.string,

  /* === */
  theme: PropTypes.string,
  line: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  overrideServices: PropTypes.object,
  saveViewState: PropTypes.bool,
  keepCurrentModel: PropTypes.bool,

  /* === */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,

  /* === */
  beforeMount: PropTypes.func,
  onMount: PropTypes.func,
  onChange: PropTypes.func,
  onValidate: PropTypes.func
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};

var index$1 = /*#__PURE__*/memo(Editor);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  loader: loader,
  DiffEditor: index$2,
  useMonaco: useMonaco,
  'default': index$1
});

var base = "vs-dark";
var inherit = true;
var rules = [
	{
		background: "25252F",
		token: ""
	},
	{
		foreground: "555555",
		token: "comment"
	},
	{
		foreground: "555555",
		token: "comment.block"
	},
	{
		foreground: "ad9361",
		token: "string"
	},
	{
		foreground: "cccccc",
		token: "constant.numeric"
	},
	{
		foreground: "a1a1ff",
		token: "keyword"
	},
	{
		foreground: "2f006e",
		token: "meta.preprocessor"
	},
	{
		fontStyle: "bold",
		token: "keyword.control.import"
	},
	{
		foreground: "a1a1ff",
		token: "support.function"
	},
	{
		foreground: "0000ff",
		token: "declaration.function function-result"
	},
	{
		fontStyle: "bold",
		token: "declaration.function function-name"
	},
	{
		fontStyle: "bold",
		token: "declaration.function argument-name"
	},
	{
		foreground: "0000ff",
		token: "declaration.function function-arg-type"
	},
	{
		fontStyle: "italic",
		token: "declaration.function function-argument"
	},
	{
		fontStyle: "underline",
		token: "declaration.class class-name"
	},
	{
		fontStyle: "italic underline",
		token: "declaration.class class-inheritance"
	},
	{
		foreground: "fff9f9",
		background: "ff0000",
		fontStyle: "bold",
		token: "invalid"
	},
	{
		background: "ffd0d0",
		token: "invalid.deprecated.trailing-whitespace"
	},
	{
		fontStyle: "italic",
		token: "declaration.section section-name"
	},
	{
		foreground: "c10006",
		token: "string.interpolation"
	},
	{
		foreground: "666666",
		token: "string.regexp"
	},
	{
		foreground: "c1c144",
		token: "variable"
	},
	{
		foreground: "6782d3",
		token: "constant"
	},
	{
		foreground: "afa472",
		token: "constant.character"
	},
	{
		foreground: "de8e30",
		fontStyle: "bold",
		token: "constant.language"
	},
	{
		fontStyle: "underline",
		token: "embedded"
	},
	{
		foreground: "858ef4",
		token: "keyword.markup.element-name"
	},
	{
		foreground: "9b456f",
		token: "keyword.markup.attribute-name"
	},
	{
		foreground: "9b456f",
		token: "meta.attribute-with-value"
	},
	{
		foreground: "c82255",
		fontStyle: "bold",
		token: "keyword.exception"
	},
	{
		foreground: "47b8d6",
		token: "keyword.operator"
	},
	{
		foreground: "6969fa",
		fontStyle: "bold",
		token: "keyword.control"
	},
	{
		foreground: "68685b",
		token: "meta.tag.preprocessor.xml"
	},
	{
		foreground: "888888",
		token: "meta.tag.sgml.doctype"
	},
	{
		fontStyle: "italic",
		token: "string.quoted.docinfo.doctype.DTD"
	},
	{
		foreground: "909090",
		token: "comment.other.server-side-include.xhtml"
	},
	{
		foreground: "909090",
		token: "comment.other.server-side-include.html"
	},
	{
		foreground: "858ef4",
		token: "text.html declaration.tag"
	},
	{
		foreground: "858ef4",
		token: "text.html meta.tag"
	},
	{
		foreground: "858ef4",
		token: "text.html entity.name.tag.xhtml"
	},
	{
		foreground: "9b456f",
		token: "keyword.markup.attribute-name"
	},
	{
		foreground: "777777",
		token: "keyword.other.phpdoc.php"
	},
	{
		foreground: "c82255",
		token: "keyword.other.include.php"
	},
	{
		foreground: "de8e20",
		fontStyle: "bold",
		token: "support.constant.core.php"
	},
	{
		foreground: "de8e10",
		fontStyle: "bold",
		token: "support.constant.std.php"
	},
	{
		foreground: "b72e1d",
		token: "variable.other.global.php"
	},
	{
		foreground: "00ff00",
		token: "variable.other.global.safer.php"
	},
	{
		foreground: "bfa36d",
		token: "string.quoted.single.php"
	},
	{
		foreground: "6969fa",
		token: "keyword.storage.php"
	},
	{
		foreground: "ad9361",
		token: "string.quoted.double.php"
	},
	{
		foreground: "ec9e00",
		token: "entity.other.attribute-name.id.css"
	},
	{
		foreground: "b8cd06",
		fontStyle: "bold",
		token: "entity.name.tag.css"
	},
	{
		foreground: "edca06",
		token: "entity.other.attribute-name.class.css"
	},
	{
		foreground: "2e759c",
		token: "entity.other.attribute-name.pseudo-class.css"
	},
	{
		foreground: "ffffff",
		background: "ff0000",
		token: "invalid.bad-comma.css"
	},
	{
		foreground: "9b2e4d",
		token: "support.constant.property-value.css"
	},
	{
		foreground: "e1c96b",
		token: "support.type.property-name.css"
	},
	{
		foreground: "666633",
		token: "constant.other.rgb-value.css"
	},
	{
		foreground: "666633",
		token: "support.constant.font-name.css"
	},
	{
		foreground: "7171f3",
		token: "support.constant.tm-language-def"
	},
	{
		foreground: "7171f3",
		token: "support.constant.name.tm-language-def"
	},
	{
		foreground: "6969fa",
		token: "keyword.other.unit.css"
	}
];
var colors = {
	"editor.foreground": "#DADADA",
	"editor.background": "#25252F",
	"editor.selectionBackground": "#fff5",
	"editor.lineHighlightBackground": "#25252F",
	"editorCursor.foreground": "#FFFFFF",
	"editorWhitespace.foreground": "#4F4D4D"
};
var editorTheme = {
	base: base,
	inherit: inherit,
	rules: rules,
	colors: colors
};

var editorTheme$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  base: base,
  inherit: inherit,
  rules: rules,
  colors: colors,
  'default': editorTheme
});

/**
 * @typedef {import("@monaco-editor/react").Monaco} Monaco
 */

var TextInput = function TextInput(_ref) {
  var placeholder = _ref.placeholder,
      _onChange = _ref.onChange;
      _ref.transformer;
      _ref.predicate;
      var data = _ref.data;

  var preventPropagation = function preventPropagation(e) {
    return e.stopPropagation();
  };
  /** @type {Monaco} */


  var monaco = useMonaco();
  useEffect(function () {
    if (monaco) {
      monaco.editor.defineTheme("custom", editorTheme);
    }
  }, [monaco]); // TODO: there are some cases with unfocusing, need to approve failure and fix after

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$a.wrapper
  }, /*#__PURE__*/React__default.createElement("input", {
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return _onChange(target.value);
    },
    value: data,
    onDragStart: preventPropagation,
    onMouseDown: preventPropagation,
    type: "text",
    placeholder: placeholder,
    className: styles$a.input
  }), /*#__PURE__*/React__default.createElement(PortalWithState$1, {
    closeOnEsc: true,
    closeOnOutsideClick: true,
    node: document.getElementById("editorArea")
  }, function (_ref3) {
    var openPortal = _ref3.openPortal,
        portal = _ref3.portal,
        closePortal = _ref3.closePortal;
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("button", {
      className: styles$a.expander,
      onClick: function onClick() {
        document.activeElement.blur();
        openPortal();
      }
    }), portal( /*#__PURE__*/React__default.createElement("div", {
      className: styles$a.editorWrapper,
      onClick: closePortal
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$a.editor,
      onClick: preventPropagation,
      onDragStart: preventPropagation
    }, /*#__PURE__*/React__default.createElement(index$1, {
      key: "valueEditor",
      autoFocus: true,
      language: "python",
      theme: "custom",
      defaultValue: data,
      options: {
        fontFamily: "monospace",
        minimap: {
          enabled: false
        }
      },
      onChange: /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(d) {
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _onChange(d);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }(),
      onMount: function onMount(editor) {
        editor.setPosition({
          lineNumber: 1,
          column: 1
        });
        editor.focus();
      }
    })))));
  }));
};

var css_248z$6 = ".Select_wrapper__eAPoQ{\n  font-size: 14px;\n  padding: 3px 6px;\n  border-radius: 4px;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  width: 100%;\n  border: 1px solid #3c3e40;\n  padding-right: 15px;\n  position: relative;\n}\n  .Select_wrapper__eAPoQ::after{\n    content: \"\";\n    position: absolute;\n    background: none;\n    right: 5px;\n    top: 8px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 5px 0 5px;\n    border-color: #191b1c transparent transparent transparent;\n  }\n  .Select_wrapper__eAPoQ:hover{\n    background: linear-gradient(to top, #63676a, #777b7e);\n  }\n.Select_chipWrapper__3hK2u{\n  font-size: 14px;\n  padding: 3px 6px;\n  border-radius: 4px;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  border: 1px solid #3c3e40;\n  margin: 2px;\n  position: relative;\n}\n.Select_chipWrapper__3hK2u:hover .Select_deleteButton__1FnLK{\n  opacity: 1;\n}\n.Select_chipsWrapper__4Alw8{\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 6px;\n}\n.Select_deleteButton__1FnLK{\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  height: 100%;\n  width: 22px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  border-radius: 3px;\n  border: none;\n  font-weight: bold;\n  opacity: 0;\n}\n.Select_deleteButton__1FnLK:focus{\n  opacity: 1;\n}\n.Select_deleteButton__1FnLK:hover{\n  background: linear-gradient(to top, #64696c, #797f82);\n}\n.Select_selectedWrapper__SUs4D{\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  width: 100%;\n  border: 1px solid #3c3e40;\n  font-size: 14px;\n  padding: 3px 6px;\n  padding-right: 15px;\n  position: relative;\n}\n.Select_selectedWrapper__SUs4D::after{\n    content: \"\";\n    position: absolute;\n    background: none;\n    right: 5px;\n    top: calc(50% - 4px);\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 5px 0 5px;\n    border-color: #191b1c transparent transparent transparent;\n  }\n.Select_selectedWrapper__SUs4D label{\n    margin: 0px;\n  }\n.Select_selectedWrapper__SUs4D p{\n    margin: 0px;\n    margin-top: 5px;\n    font-size: 12px;\n    font-style: italic;\n    color: rgb(50, 50, 50);\n  }\n";
var styles$6 = {"wrapper":"Select_wrapper__eAPoQ","chipWrapper":"Select_chipWrapper__3hK2u","deleteButton":"Select_deleteButton__1FnLK","chipsWrapper":"Select_chipsWrapper__4Alw8","selectedWrapper":"Select_selectedWrapper__SUs4D"};
styleInject(css_248z$6);

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var MAX_LABEL_LENGTH = 50;

var Select = function Select(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "[Select an option]" : _ref$placeholder,
      onChange = _ref.onChange,
      data = _ref.data,
      allowMultiple = _ref.allowMultiple;

  var _React$useState = React__default.useState(false),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var _React$useState3 = React__default.useState({
    x: 0,
    y: 0
  }),
      _React$useState4 = _slicedToArray$1(_React$useState3, 2),
      drawerCoordinates = _React$useState4[0],
      setDrawerCoordinates = _React$useState4[1];

  var wrapper = React__default.useRef();

  var closeDrawer = function closeDrawer() {
    setDrawerOpen(false);
  };

  var openDrawer = function openDrawer() {
    if (!drawerOpen) {
      var wrapperRect = wrapper.current.getBoundingClientRect();
      setDrawerCoordinates({
        x: wrapperRect.x,
        y: wrapperRect.y + wrapperRect.height
      });
      setDrawerOpen(true);
    }
  };

  var handleOptionSelected = function handleOptionSelected(option) {
    if (allowMultiple) {
      onChange([].concat(_toConsumableArray$1(data), [option.value]));
    } else {
      onChange(option.value);
    }
  };

  var handleOptionDeleted = function handleOptionDeleted(optionIndex) {
    onChange([].concat(_toConsumableArray$1(data.slice(0, optionIndex)), _toConsumableArray$1(data.slice(optionIndex + 1))));
  };

  var getFilteredOptions = function getFilteredOptions() {
    return allowMultiple ? options.filter(function (opt) {
      return !data.includes(opt.value);
    }) : options;
  };

  var selectedOption = React__default.useMemo(function () {
    var option = options.find(function (o) {
      return o.value === data;
    });

    if (option) {
      return _objectSpread$d(_objectSpread$d({}, option), {}, {
        label: option.label.length > MAX_LABEL_LENGTH ? option.label.slice(0, MAX_LABEL_LENGTH) + "..." : option.label
      });
    }
  }, [options, data]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, allowMultiple ? data.length ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.chipsWrapper
  }, data.map(function (val, i) {
    var optLabel = (options.find(function (opt) {
      return opt.value === val;
    }) || {}).label || "";
    return /*#__PURE__*/React__default.createElement(OptionChip, {
      onRequestDelete: function onRequestDelete() {
        return handleOptionDeleted(i);
      },
      key: val
    }, optLabel);
  })) : null : data ? /*#__PURE__*/React__default.createElement(SelectedOption, {
    wrapperRef: wrapper,
    option: selectedOption,
    onClick: openDrawer
  }) : null, (allowMultiple || !data) && /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.wrapper,
    ref: wrapper,
    onClick: openDrawer
  }, placeholder), drawerOpen && /*#__PURE__*/React__default.createElement(Portal$1, null, /*#__PURE__*/React__default.createElement(ContextMenu, {
    x: drawerCoordinates.x,
    y: drawerCoordinates.y,
    emptyText: "There are no options",
    options: getFilteredOptions(),
    onOptionSelected: handleOptionSelected,
    onRequestClose: closeDrawer
  })));
};

var SelectedOption = function SelectedOption(_ref2) {
  var _ref2$option = _ref2.option;
  _ref2$option = _ref2$option === void 0 ? {} : _ref2$option;
  var label = _ref2$option.label,
      description = _ref2$option.description,
      wrapperRef = _ref2.wrapperRef,
      onClick = _ref2.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.selectedWrapper,
    onClick: onClick,
    ref: wrapperRef
  }, /*#__PURE__*/React__default.createElement("label", null, label), description ? /*#__PURE__*/React__default.createElement("p", null, description) : null);
};

var OptionChip = function OptionChip(_ref3) {
  var children = _ref3.children,
      onRequestDelete = _ref3.onRequestDelete;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.chipWrapper
  }, children, /*#__PURE__*/React__default.createElement("button", {
    className: styles$6.deleteButton,
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
    },
    onClick: onRequestDelete
  }, "\u2715"));
};

var Control = function Control(_ref) {
  var type = _ref.type,
      name = _ref.name,
      nodeId = _ref.nodeId,
      portName = _ref.portName,
      label = _ref.label,
      inputLabel = _ref.inputLabel,
      data = _ref.data,
      allData = _ref.allData,
      render = _ref.render,
      predicate = _ref.predicate,
      step = _ref.step;
      _ref.transformer;
      var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      placeholder = _ref.placeholder,
      inputData = _ref.inputData,
      triggerRecalculation = _ref.triggerRecalculation,
      updateNodeConnections = _ref.updateNodeConnections,
      getOptions = _ref.getOptions,
      setValue = _ref.setValue,
      defaultValue = _ref.defaultValue,
      isMonoControl = _ref.isMonoControl;
  var nodesDispatch = React__default.useContext(NodeDispatchContext);
  var executionContext = React__default.useContext(ContextContext);
  var calculatedLabel = isMonoControl ? inputLabel : label;

  var onChange = function onChange(data) {
    nodesDispatch({
      type: "SET_PORT_DATA",
      data: data,
      nodeId: nodeId,
      portName: portName,
      controlName: name,
      setValue: setValue
    });
    triggerRecalculation();
  };

  var getControlByType = function getControlByType(type) {
    var commonProps = {
      triggerRecalculation: triggerRecalculation,
      updateNodeConnections: updateNodeConnections,
      onChange: onChange,
      data: data
    };

    switch (type) {
      case "select":
        return /*#__PURE__*/React__default.createElement(Select, _extends$3({}, commonProps, {
          options: getOptions ? getOptions(inputData, executionContext) : options,
          placeholder: placeholder
        }));

      case "text":
        return /*#__PURE__*/React__default.createElement(TextInput, _extends$3({}, commonProps, {
          predicate: predicate,
          placeholder: placeholder
        }));

      case "number":
        return /*#__PURE__*/React__default.createElement(NumberInput, _extends$3({}, commonProps, {
          step: step,
          predicate: predicate,
          placeholder: placeholder
        }));

      case "checkbox":
        return /*#__PURE__*/React__default.createElement(Checkbox, _extends$3({}, commonProps, {
          label: calculatedLabel
        }));

      case "multiselect":
        return /*#__PURE__*/React__default.createElement(Select, _extends$3({
          allowMultiple: true
        }, commonProps, {
          options: getOptions ? getOptions(inputData, executionContext) : options,
          placeholder: placeholder,
          label: label
        }));

      case "custom":
        return render(data, onChange, executionContext, triggerRecalculation, {
          label: label,
          name: name,
          portName: portName,
          inputLabel: inputLabel,
          defaultValue: defaultValue
        }, allData);

      default:
        return /*#__PURE__*/React__default.createElement("div", null, "Control");
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$9.wrapper
  }, getControlByType(type));
};

var css_248z$5 = ".IoPorts_wrapper__3d2hh {\n  display: flex;\n  flex-direction: column;\n}\n\n.IoPorts_outputs__3JGh- {\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid rgba(0, 0, 0, 0.6);\n  justify-content: center;\n  align-items: center;\n  padding: 8px 1px 8px 0;\n  background: rgba(0, 0, 0, 0.15);\n}\n\n.IoPorts_outputs__3JGh- > * + * {\n    margin-top: 4px\n  }\n\n.IoPorts_outputs__3JGh- > .IoPorts_transput__1wbHA {\n    width: 7px;\n    height: 16px;\n  }\n\n.IoPorts_inputs__2etkb {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid rgba(0, 0, 0, 0.6);\n  justify-content: center;\n  align-items: center;\n  padding: 8px 0 8px 1px;\n  background: rgba(0, 0, 0, 0.15);\n}\n\n.IoPorts_inputs__2etkb > * + * {\n    margin-top: 4px\n  }\n\n.IoPorts_inputs__2etkb > .IoPorts_transput__1wbHA {\n    width: 7px;\n    height: 16px;\n  }\n\ntable.IoPorts_inner__3UgDB {\n  border: none;\n  margin: 0 0 4px;\n  padding: 0;\n  width: max-content;\n  border-spacing: 0;\n\n}\n\ntable.IoPorts_inner__3UgDB > tbody > tr > td {\n      padding: 0;\n      margin: 0;\n    }\n\ntable.IoPorts_inner__3UgDB > tbody > tr > td.IoPorts_portLabel__qOE7y {\n      padding-left: 4px;\n      font-weight: 600;\n      font-size: 10px;\n      line-height: 10px;\n      max-width: 80px;\n\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n\ntable.IoPorts_inner__3UgDB > tbody > tr > td.IoPorts_controls__1dKFt {\n      max-width: 184px;\n      display: flex;\n      flex-wrap: wrap;\n      padding-right: 4px;\n    }\n\ntable.IoPorts_inner__3UgDB > tbody > tr > td.IoPorts_controls__1dKFt > * {\n        float: left;\n        display: inline-block;\n        width: 60px;\n        overflow-x: hidden;\n      }\n\n.IoPorts_port__1_a6J {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  width: 16px;\n  height: 16px;\n\n  background: #50505C;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.IoPorts_port__1_a6J * {\n    pointer-events: none;\n  }\n";
var styles$5 = {"wrapper":"IoPorts_wrapper__3d2hh","outputs":"IoPorts_outputs__3JGh-","transput":"IoPorts_transput__1wbHA","inputs":"IoPorts_inputs__2etkb","inner":"IoPorts_inner__3UgDB","portLabel":"IoPorts_portLabel__qOE7y","controls":"IoPorts_controls__1dKFt","port":"IoPorts_port__1_a6J"};
styleInject(css_248z$5);

var Connection = function Connection(_ref) {
  var from = _ref.from,
      to = _ref.to,
      id = _ref.id,
      lineRef = _ref.lineRef,
      outputNodeId = _ref.outputNodeId,
      outputPortName = _ref.outputPortName,
      inputNodeId = _ref.inputNodeId,
      inputPortName = _ref.inputPortName;
  var curve = calculateCurve(from, to);
  return /*#__PURE__*/React__default.createElement("svg", {
    className: styles$b.svg
  }, /*#__PURE__*/React__default.createElement("path", {
    "data-connection-id": id,
    "data-output-node-id": outputNodeId,
    "data-output-port-name": outputPortName,
    "data-input-node-id": inputNodeId,
    "data-input-port-name": inputPortName,
    stroke: "white",
    strokeOpacity: 0.3,
    fill: "none",
    strokeWidth: 1,
    strokeLinecap: "round",
    d: curve,
    ref: lineRef
  }));
};

var _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgPortArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 4,
    height: 7,
    fill: "none",
    stroke: "#000"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M.502 6.5l2.999-2.998m0 0H3.5m0 0L.5.5",
    strokeOpacity: 0.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var Port = function Port(_ref) {
  var color = _ref.color,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name,
      type = _ref.type,
      isInput = _ref.isInput,
      nodeId = _ref.nodeId,
      triggerRecalculation = _ref.triggerRecalculation;
  var nodesDispatch = useContext(NodeDispatchContext);
  var stageState = useContext(StageContext);
  var editorId = useContext(EditorIdContext);
  var stageId = "".concat(STAGE_ID).concat(editorId);
  var inputTypes = useContext(PortTypesContext);

  var _useState = useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      isDragging = _useState2[0],
      setIsDragging = _useState2[1];

  var _useState3 = useState({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray$1(_useState3, 2),
      dragStartCoordinates = _useState4[0],
      setDragStartCoordinates = _useState4[1];

  var dragStartCoordinatesCache = useRef(dragStartCoordinates);
  var port = useRef();
  var line = useRef();
  var lineInToPort = useRef();

  var byScale = function byScale(value) {
    return value / stageState.scale;
  };

  var handleDrag = function handleDrag(e) {
    var stage = document.getElementById(stageId).getBoundingClientRect();

    if (isInput) {
      var to = {
        x: byScale(e.clientX - stage.x - stage.width / 2) + stageState.translate.x,
        y: byScale(e.clientY - stage.y - stage.height / 2) + stageState.translate.y
      };
      if (lineInToPort.current) lineInToPort.current.setAttribute("d", calculateCurve(to, dragStartCoordinatesCache.current));else line.current.setAttribute("d", calculateCurve(dragStartCoordinatesCache.current, to));
    } else {
      var _to = {
        x: byScale(e.clientX - stage.x - stage.width / 2) + stageState.translate.x,
        y: byScale(e.clientY - stage.y - stage.height / 2) + stageState.translate.y
      };
      line.current.setAttribute("d", calculateCurve(_to, dragStartCoordinatesCache.current));
    }
  }; // TODO: Refactor onDragEnd method (input -> output part)


  var handleDragEnd = function handleDragEnd(e) {
    var droppedOnPort = !!e.target.dataset.portName;

    if (isInput && lineInToPort.current) {
      var _lineInToPort$current = lineInToPort.current.dataset,
          inputNodeId = _lineInToPort$current.inputNodeId,
          inputPortName = _lineInToPort$current.inputPortName,
          outputNodeId = _lineInToPort$current.outputNodeId,
          outputPortName = _lineInToPort$current.outputPortName;
      nodesDispatch({
        type: "REMOVE_CONNECTION",
        input: {
          nodeId: inputNodeId,
          portName: inputPortName
        },
        output: {
          nodeId: outputNodeId,
          portName: outputPortName
        }
      });

      if (droppedOnPort) {
        var _e$target$dataset = e.target.dataset,
            connectToPortName = _e$target$dataset.portName,
            connectToNodeId = _e$target$dataset.nodeId,
            connectToPortType = _e$target$dataset.portType,
            connectToTransputType = _e$target$dataset.portTransputType;
        var isNotSameNode = outputNodeId !== connectToNodeId;

        if (isNotSameNode && connectToTransputType !== "output") {
          var inputWillAcceptConnection = inputTypes[connectToPortType].acceptTypes.includes(type);

          if (inputWillAcceptConnection) {
            nodesDispatch({
              type: "ADD_CONNECTION",
              input: {
                nodeId: connectToNodeId,
                portName: connectToPortName
              },
              output: {
                nodeId: outputNodeId,
                portName: outputPortName
              }
            });
          }
        }
      }
    } else {
      if (droppedOnPort) {
        if (!isInput) {
          var _e$target$dataset2 = e.target.dataset,
              _inputPortName = _e$target$dataset2.portName,
              _inputNodeId = _e$target$dataset2.nodeId,
              inputNodeType = _e$target$dataset2.portType,
              inputTransputType = _e$target$dataset2.portTransputType;

          var _isNotSameNode = _inputNodeId !== nodeId;

          if (_isNotSameNode && inputTransputType !== "output") {
            var _inputWillAcceptConnection = inputTypes[inputNodeType].acceptTypes.includes(type);

            if (_inputWillAcceptConnection) {
              nodesDispatch({
                type: "ADD_CONNECTION",
                output: {
                  nodeId: nodeId,
                  portName: name
                },
                input: {
                  nodeId: _inputNodeId,
                  portName: _inputPortName
                }
              });
              triggerRecalculation();
            }
          }
        } else {
          var _e$target$dataset3 = e.target.dataset,
              _inputPortName2 = _e$target$dataset3.portName,
              _inputNodeId2 = _e$target$dataset3.nodeId,
              _inputNodeType = _e$target$dataset3.portType,
              _inputTransputType = _e$target$dataset3.portTransputType;

          var _isNotSameNode2 = _inputNodeId2 !== nodeId;

          if (_isNotSameNode2 && _inputTransputType === "output") {
            var _inputWillAcceptConnection2 = inputTypes[_inputNodeType].acceptTypes.includes(type);

            if (_inputWillAcceptConnection2) {
              nodesDispatch({
                type: "ADD_CONNECTION",
                output: {
                  nodeId: _inputNodeId2,
                  portName: _inputPortName2
                },
                input: {
                  nodeId: nodeId,
                  portName: name
                }
              });
              triggerRecalculation();
            }
          }
        }
      }
    }

    setIsDragging(false);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("mousemove", handleDrag);
  };

  var handleDragStart = function handleDragStart(e) {
    e.preventDefault();
    e.stopPropagation();
    var startPort = port.current.getBoundingClientRect();
    var stage = document.getElementById(stageId).getBoundingClientRect();

    if (isInput) {
      lineInToPort.current = document.querySelector("[data-input-node-id=\"".concat(nodeId, "\"][data-input-port-name=\"").concat(name, "\"]"));
      var portIsConnected = !!lineInToPort.current;

      if (portIsConnected) {
        lineInToPort.current.parentNode.style.zIndex = 9999;
        var outputPort = getPortRect(lineInToPort.current.dataset.outputNodeId, lineInToPort.current.dataset.outputPortName, "output");
        var coordinates = {
          x: byScale(outputPort.x - stage.x + outputPort.width / 2 - stage.width / 2) + stageState.translate.x,
          y: byScale(outputPort.y - stage.y + outputPort.width / 2 - stage.height / 2) + stageState.translate.y
        };
        setDragStartCoordinates(coordinates);
        dragStartCoordinatesCache.current = coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      } else {
        var _coordinates = {
          x: byScale(startPort.x - stage.x + startPort.width / 2 - stage.width / 2) + stageState.translate.x,
          y: byScale(startPort.y - stage.y + startPort.width / 2 - stage.height / 2) + stageState.translate.y
        };
        setDragStartCoordinates(_coordinates);
        dragStartCoordinatesCache.current = _coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      }
    } else {
      var _coordinates2 = {
        x: byScale(startPort.x - stage.x + startPort.width / 2 - stage.width / 2) + stageState.translate.x,
        y: byScale(startPort.y - stage.y + startPort.width / 2 - stage.height / 2) + stageState.translate.y
      };
      setDragStartCoordinates(_coordinates2);
      dragStartCoordinatesCache.current = _coordinates2;
      setIsDragging(true);
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("mousemove", handleDrag);
    }
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    onMouseDown: handleDragStart,
    className: styles$5.port,
    style: {
      zIndex: 999,
      marginLeft: isInput ? 0 : -9,
      backgroundColor: color
    },
    "data-port-name": name,
    "data-port-type": type,
    "data-port-transput-type": isInput ? "input" : "output",
    "data-node-id": nodeId,
    onDragStart: function onDragStart(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    ref: port
  }, /*#__PURE__*/React__default.createElement(SvgPortArrow, null)), isDragging ? /*#__PURE__*/React__default.createElement(Portal$1, {
    node: document.getElementById("".concat(DRAG_CONNECTION_ID).concat(editorId))
  }, /*#__PURE__*/React__default.createElement(Connection, {
    from: dragStartCoordinates,
    to: dragStartCoordinates,
    lineRef: line
  })) : null);
};

var Inner = function Inner(_ref) {
  var type = _ref.type,
      label = _ref.label,
      name = _ref.name,
      nodeId = _ref.nodeId,
      data = _ref.data,
      localControls = _ref.controls,
      inputTypes = _ref.inputTypes,
      noControls = _ref.noControls,
      triggerRecalculation = _ref.triggerRecalculation,
      updateNodeConnections = _ref.updateNodeConnections,
      inputData = _ref.inputData;

  var _ref2 = inputTypes[type] || {},
      defaultLabel = _ref2.label,
      _ref2$controls = _ref2.controls,
      defaultControls = _ref2$controls === void 0 ? [] : _ref2$controls;

  var controls = localControls || defaultControls;
  return /*#__PURE__*/React__default.createElement("tr", {
    "data-controlless": noControls || !controls.length,
    "data-is-inner": true,
    onDragStart: function onDragStart(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement("td", {
    className: styles$5.portLabel
  }, label || defaultLabel), /*#__PURE__*/React__default.createElement("td", {
    className: styles$5.controls
  }, controls.map(function (control) {
    return /*#__PURE__*/React__default.createElement(Control, _extends$3({}, control, {
      nodeId: nodeId,
      portName: name,
      triggerRecalculation: triggerRecalculation,
      updateNodeConnections: updateNodeConnections,
      inputLabel: label,
      data: data[control.name],
      allData: data,
      key: control.name,
      inputData: inputData,
      isMonoControl: controls.length === 1
    }));
  })));
};

var Input = function Input(_ref) {
  var _ref2;

  var type = _ref.type,
      name = _ref.name,
      nodeId = _ref.nodeId,
      localControls = _ref.controls,
      inputTypes = _ref.inputTypes,
      noControls = _ref.noControls,
      triggerRecalculation = _ref.triggerRecalculation,
      optColor = _ref.optColor,
      isConnected = _ref.isConnected,
      c = _ref.color;
  var _inputTypes$type = inputTypes[type];
      _inputTypes$type.label;
      var color = _inputTypes$type.color,
      _inputTypes$type$cont = _inputTypes$type.controls,
      defaultControls = _inputTypes$type$cont === void 0 ? [] : _inputTypes$type$cont;
  var prevConnected = usePrevious$1(isConnected);
  var controls = localControls || defaultControls;
  useEffect(function () {
    if (isConnected !== prevConnected) {
      triggerRecalculation();
    }
  }, [isConnected, prevConnected, triggerRecalculation]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.transput,
    "data-controlless": isConnected || noControls || !controls.length,
    onDragStart: function onDragStart(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement(Port, {
    type: type,
    color: (_ref2 = color !== null && color !== void 0 ? color : c) !== null && _ref2 !== void 0 ? _ref2 : optColor,
    name: name,
    nodeId: nodeId,
    isInput: true,
    triggerRecalculation: triggerRecalculation
  }));
};

var Output = function Output(_ref) {
  var _ref2;

  var name = _ref.name,
      nodeId = _ref.nodeId,
      type = _ref.type,
      inputTypes = _ref.inputTypes,
      triggerRecalculation = _ref.triggerRecalculation,
      optColor = _ref.optColor,
      c = _ref.color;
  var color = inputTypes[type].color;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.transput,
    "data-controlless": true,
    onDragStart: function onDragStart(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement(Port, {
    type: type,
    name: name,
    color: (_ref2 = color !== null && color !== void 0 ? color : c) !== null && _ref2 !== void 0 ? _ref2 : optColor,
    nodeId: nodeId,
    triggerRecalculation: triggerRecalculation
  }));
};

var IoPorts = function IoPorts(_ref) {
  var nodeId = _ref.nodeId,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? "innerOnly" : _ref$show,
      _ref$resolvedInputs = _ref.resolvedInputs,
      resolvedInputs = _ref$resolvedInputs === void 0 ? [] : _ref$resolvedInputs,
      _ref$resolvedOutputs = _ref.resolvedOutputs,
      resolvedOutputs = _ref$resolvedOutputs === void 0 ? [] : _ref$resolvedOutputs,
      connections = _ref.connections,
      color = _ref.color,
      inputData = _ref.inputData,
      updateNodeConnections = _ref.updateNodeConnections;
  var inputTypes = useContext(PortTypesContext);
  var triggerRecalculation = useContext(ConnectionRecalculateContext);

  switch (show) {
    case "outputsOnly":
      return (resolvedOutputs.length || null) && /*#__PURE__*/React__default.createElement("div", {
        className: styles$5.outputs,
        "data-show": show
      }, resolvedOutputs.map(function (output) {
        return /*#__PURE__*/React__default.createElement(Output, _extends$3({}, output, {
          optColor: color,
          triggerRecalculation: triggerRecalculation,
          inputTypes: inputTypes,
          nodeId: nodeId,
          inputData: inputData,
          key: output.name
        }));
      }));

    case "inputsOnly":
      return resolvedInputs.some(function (_ref2) {
        var hidePort = _ref2.hidePort;
        return !hidePort;
      }) && /*#__PURE__*/React__default.createElement("div", {
        className: styles$5.inputs,
        "data-show": show
      }, resolvedInputs.filter(function (_ref3) {
        var hidePort = _ref3.hidePort;
        return !hidePort;
      }).map(function (input) {
        return /*#__PURE__*/React__default.createElement(Input, _extends$3({
          optColor: color
        }, input, {
          data: inputData[input.name] || {},
          isConnected: !!connections.inputs[input.name],
          triggerRecalculation: triggerRecalculation,
          updateNodeConnections: updateNodeConnections,
          inputTypes: inputTypes,
          nodeId: nodeId,
          inputData: inputData,
          key: input.name
        }));
      }));

    default:
      return resolvedInputs.some(function (_ref4) {
        var hidePort = _ref4.hidePort;
        return hidePort;
      }) && /*#__PURE__*/React__default.createElement("table", {
        className: styles$5.inner
      }, /*#__PURE__*/React__default.createElement("tbody", null, resolvedInputs.filter(function (_ref5) {
        var hidePort = _ref5.hidePort;
        return hidePort;
      }).map(function (input) {
        return /*#__PURE__*/React__default.createElement(Inner, _extends$3({}, input, {
          data: inputData[input.name] || {},
          isConnected: !!connections.inputs[input.name],
          triggerRecalculation: triggerRecalculation,
          updateNodeConnections: updateNodeConnections,
          inputTypes: inputTypes,
          nodeId: nodeId,
          inputData: inputData,
          key: input.name
        }));
      })));
  }
};

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgTicker(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 8,
    height: 6,
    fill: "none",
    stroke: "#B3B3B3"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M1 1.505l2.683 2.993m0 0v-.001m0 .001L6.68 1.502",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var Node = /*#__PURE__*/forwardRef(function (_ref, nodeWrapper) {
  var id = _ref.id;
      _ref.width;
      _ref.height;
      var x = _ref.x,
      isSelected = _ref.isSelected;
      _ref.comment;
      var y = _ref.y,
      expanded = _ref.expanded;
      _ref.delay;
      var stageRect = _ref.stageRect,
      connections = _ref.connections,
      type = _ref.type,
      inputData = _ref.inputData,
      onDragStart = _ref.onDragStart,
      _onDragEnd = _ref.onDragEnd,
      onDragHandle = _ref.onDragHandle;
      _ref.onDrag;
  // const cache = useContext(CacheContext);
  var nodeTypes = useContext(NodeTypesContext);
  var nodesDispatch = useContext(NodeDispatchContext);
  var stageState = useContext(StageContext);
  var recalculateConnections = useContext(ConnectionRecalculateContext);
  var _nodeTypes$type = nodeTypes[type],
      label = _nodeTypes$type.label,
      deletable = _nodeTypes$type.deletable,
      _nodeTypes$type$input = _nodeTypes$type.inputs,
      inputs = _nodeTypes$type$input === void 0 ? [] : _nodeTypes$type$input,
      _nodeTypes$type$outpu = _nodeTypes$type.outputs,
      outputs = _nodeTypes$type$outpu === void 0 ? [] : _nodeTypes$type$outpu,
      icon = _nodeTypes$type.icon,
      description = _nodeTypes$type.description,
      _nodeTypes$type$categ = _nodeTypes$type.category,
      _nodeTypes$type$categ2 = _nodeTypes$type$categ.tileFontColor,
      tileFontColor = _nodeTypes$type$categ2 === void 0 ? "#B3B3B3" : _nodeTypes$type$categ2,
      _nodeTypes$type$categ3 = _nodeTypes$type$categ.tileBackground,
      tileBackground = _nodeTypes$type$categ3 === void 0 ? "rgba(89, 89, 102, 0.9)" : _nodeTypes$type$categ3;

  var _useState = useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var _useState3 = useState({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray$1(_useState3, 2),
      menuCoordinates = _useState4[0],
      setMenuCoordinates = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray$1(_useState5, 2),
      isInputComment = _useState6[0];
      _useState6[1];

  var resolvedInputs = useTransputs(inputs, "input", id, inputData, connections);
  var resolvedOutputs = useTransputs(outputs, "output", id, inputData, connections);
  useRef();

  var byScale = function byScale(value) {
    return value / stageState.scale;
  };

  var updateConnectionsByTransput = function updateConnectionsByTransput() {
    var transput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOutput = arguments.length > 1 ? arguments[1] : undefined;
    Object.entries(transput).forEach(function (_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2),
          portName = _ref3[0],
          outputs = _ref3[1];

      outputs.forEach(function (output) {
        var toRect = getPortRect(id, portName, isOutput ? "output" : "input" // cache
        );
        var fromRect = getPortRect(output.nodeId, output.portName, isOutput ? "input" : "output" // cache
        );
        var portHalf = fromRect.width / 2;
        var combined;

        if (isOutput) {
          combined = id + portName + output.nodeId + output.portName;
        } else {
          combined = output.nodeId + output.portName + id + portName;
        } // const cachedConnection = null; /* cache.current.connections[combined] */


        var cnx = document.querySelector("[data-connection-id=\"".concat(combined, "\"]"));
        var from = {
          x: byScale(toRect.x - stageRect.current.x + portHalf - stageRect.current.width / 2) + stageState.translate.x,
          y: byScale(toRect.y - stageRect.current.y + portHalf - stageRect.current.height / 2) + stageState.translate.y
        };
        var to = {
          x: byScale(fromRect.x - stageRect.current.x + portHalf - stageRect.current.width / 2) + stageState.translate.x,
          y: byScale(fromRect.y - stageRect.current.y + portHalf - stageRect.current.height / 2) + stageState.translate.y
        };
        cnx.setAttribute("d", calculateCurve.apply(void 0, _toConsumableArray$1(isOutput ? [to, from] : [from, to])));
      });
    });
  };

  var updateNodeConnections = function updateNodeConnections() {
    if (connections) {
      updateConnectionsByTransput(connections.inputs);
      updateConnectionsByTransput(connections.outputs, true);
    }
  };

  var handleDrag = function handleDrag(_ref4) {
    var x = _ref4.x,
        y = _ref4.y;
    var oldPositions = nodeWrapper.current.style.transform.match(/^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\);?/);

    if (oldPositions.length === 3) {
      onDragHandle(nodeWrapper.current.dataset.nodeId, x - Number(oldPositions[1]), y - Number(oldPositions[2]));
    }

    nodeWrapper.current.style.transform = "translate(".concat(x, "px,").concat(y, "px)");
    updateNodeConnections();
  };

  var startDrag = function startDrag(e) {
    return onDragStart();
  };

  var handleContextMenu = function handleContextMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    setMenuCoordinates({
      x: e.clientX,
      y: e.clientY
    });
    setMenuOpen(true);
    return false;
  };

  var closeContextMenu = function closeContextMenu() {
    setMenuOpen(false);
  };

  var handleMenuOption = function handleMenuOption(_ref5) {
    var value = _ref5.value;

    switch (value) {
      case "deleteNode":
        nodesDispatch({
          type: "REMOVE_NODE",
          nodeId: id
        });
        break;

      default:
        return;
    }
  };

  var hasInner = useMemo(function () {
    var _resolvedInputs$some;

    return !!(resolvedInputs !== null && resolvedInputs !== void 0 && (_resolvedInputs$some = resolvedInputs.some) !== null && _resolvedInputs$some !== void 0 && _resolvedInputs$some.call(resolvedInputs, function (_ref6) {
      var hidePort = _ref6.hidePort;
      return hidePort;
    }));
  }, [resolvedInputs]);

  return /*#__PURE__*/React__default.createElement(Draggable, {
    className: styles$c.wrapper,
    style: {
      backgroundColor: tileBackground,
      color: tileFontColor,
      boxShadow: isSelected ? "0 0 0 2px rgba(75, 174, 252, 0.5)" : "none",
      transform: "translate(".concat(x, "px, ").concat(y, "px)")
    },
    onDragStart: startDrag,
    onDrag: handleDrag,
    onDragEnd: function onDragEnd(e, coords) {
      return _onDragEnd(e, id, coords);
    },
    innerRef: nodeWrapper,
    "data-node-id": id,
    disabled: isInputComment,
    onContextMenu: handleContextMenu,
    stageState: stageState,
    stageRect: stageRect
  }, /*#__PURE__*/React__default.createElement(IoPorts, {
    nodeId: id,
    resolvedOutputs: resolvedOutputs,
    show: "outputsOnly",
    color: tileBackground,
    connections: connections,
    updateNodeConnections: updateNodeConnections,
    inputData: inputData
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$c.body
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$c.header
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$c.headerMeta
  }, hasInner && /*#__PURE__*/React__default.createElement(SvgTicker, {
    onClick: function onClick() {
      nodesDispatch({
        type: "TOGGLE_NODE_VIEW",
        id: id
      });
      recalculateConnections();
    },
    style: {
      transform: expanded ? "none" : "rotate(-90deg)",
      cursor: "pointer",
      stroke: tileFontColor
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$c.title
  }, icon && /*#__PURE__*/React__default.createElement("img", {
    src: icon
  }), /*#__PURE__*/React__default.createElement("span", {
    className: styles$c.label
  }, label)), /*#__PURE__*/React__default.createElement("span", {
    className: styles$c.id,
    onClick: function onClick() {
      return navigator.clipboard.writeText(id);
    }
  }, id)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$c.headerActions
  })), expanded && hasInner ? /*#__PURE__*/React__default.createElement(IoPorts, {
    nodeId: id,
    resolvedInputs: resolvedInputs,
    show: "innerOnly",
    connections: connections,
    updateNodeConnections: updateNodeConnections,
    inputData: inputData
  }) : // TODO: Provide comment field
  description && /*#__PURE__*/React__default.createElement("div", {
    className: styles$c.description
  }, description)), /*#__PURE__*/React__default.createElement(IoPorts, {
    nodeId: id,
    resolvedInputs: resolvedInputs,
    show: "inputsOnly",
    color: tileBackground,
    connections: connections,
    updateNodeConnections: updateNodeConnections,
    inputData: inputData
  }), menuOpen ? /*#__PURE__*/React__default.createElement(Portal$1, null, /*#__PURE__*/React__default.createElement(ContextMenu, {
    x: menuCoordinates.x,
    y: menuCoordinates.y,
    options: _toConsumableArray$1(deletable !== false ? [{
      label: "Delete Node",
      value: "deleteNode",
      description: "Deletes a node and all of its connections."
    }] : []),
    onRequestClose: closeContextMenu,
    onOptionSelected: handleMenuOption,
    hideFilter: true,
    label: "Node Options",
    emptyText: "This node has no options."
  })) : null);
});
Node.displayName = "Node";

var css_248z$4 = ".Comment_wrapper__1Pnbd {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 5px;\n  background: rgba(147, 154, 158, 0.7);\n  border-radius: 5px;\n  border-bottom-right-radius: 2px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  min-width: 80px;\n  font-size: 14px;\n  display: flex;\n  text-shadow: 0px 1px rgba(255,255,255,.1);\n  border: 1px solid rgba(168, 176, 181, 0.7);\n  user-select: none;\n}\n  .Comment_wrapper__1Pnbd[data-color=\"red\"]{\n    background: rgba(213, 84, 103, 0.65);\n    border-color: rgba(227, 85, 119, 0.65);\n  }\n  .Comment_wrapper__1Pnbd[data-color=\"purple\"]{\n    background: rgba(153, 83, 196, 0.65);\n    border-color: rgba(156, 85, 227, 0.65);\n  }\n  .Comment_wrapper__1Pnbd[data-color=\"blue\"]{\n    background: rgba(76, 142, 203, 0.65);\n    border-color: rgba(85, 159, 227, 0.65);\n  }\n  .Comment_wrapper__1Pnbd[data-color=\"green\"]{\n    background: rgba(70, 200, 130, 0.65);\n    border-color: rgba(85, 227, 150, 0.65);\n  }\n  .Comment_wrapper__1Pnbd[data-color=\"yellow\"]{\n    background: rgba(200, 167, 63, 0.65);\n    border-color: rgba(227, 213, 85, 0.65);\n  }\n  .Comment_wrapper__1Pnbd[data-color=\"orange\"]{\n    background: rgba(215, 123, 64, 0.65);\n    border-color: rgba(227, 149, 85, 0.65);\n  }\n  .Comment_wrapper__1Pnbd[data-color=\"pink\"]{\n    background: rgba(255, 102, 208, 0.65);\n    border-color: rgba(242, 131, 228, 0.65);\n  }\n.Comment_text__Ie2nX{\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  white-space: pre-wrap;\n  cursor: default;\n}\n.Comment_resizeThumb__20KWn {\n  width: 10px;\n  height: 10px;\n  border-radius: 4px 0px 4px 0px;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  overflow: hidden;\n  cursor: nwse-resize;\n}\n.Comment_resizeThumb__20KWn::before,\n  .Comment_resizeThumb__20KWn::after {\n    content: \"\";\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    width: 250%;\n    height: 0px;\n    border-top: 1px solid rgba(0, 0, 0, 0.7);\n    border-bottom: 2px solid rgba(255, 255, 255, 0.7);\n    transform-origin: center right;\n    transform: rotate(-45deg) scale(0.5);\n  }\n.Comment_resizeThumb__20KWn::after {\n    transform: rotate(-45deg) translateY(3px) scale(0.5);\n  }\n.Comment_textarea__2Rze3 {\n  resize: none;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  border-radius: 3px;\n  background: rgba(255,255,255,.1);\n  border: none;\n  outline: none;\n  margin: -2px;\n  margin-top: -1px;\n  padding-top: 0px;\n  font-size: 14px;\n}\n.Comment_textarea__2Rze3::placeholder{\n    color: rgba(0,0,0,.5);\n  }\n";
var styles$4 = {"wrapper":"Comment_wrapper__1Pnbd","text":"Comment_text__Ie2nX","resizeThumb":"Comment_resizeThumb__20KWn","textarea":"Comment_textarea__2Rze3"};
styleInject(css_248z$4);

var css_248z$3 = ".ColorPicker_wrapper__1M1j2{\n  position: fixed;\n  z-index: 9999;\n  background: rgba(29, 32, 34, 0.95);\n  border-radius: 5px;\n  box-shadow: 0px 6px 7px rgba(0,0,0,.3);\n  border: 1px solid rgba(0,0,0,.4);\n  color: #fff;\n  display: flex;\n  width: 102px;\n  flex-wrap: wrap;\n  padding: 2px;\n}\n@supports (backdrop-filter: blur(6px)){\n  .ColorPicker_wrapper__1M1j2{\n    backdrop-filter: blur(6px);\n    background: rgba(29, 32, 34, 0.8);\n  }\n}\n.ColorPicker_colorButtonWrapper__1ijdj{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n}\n.ColorPicker_colorButton__1Qcuq{\n  border-radius: 3px;\n  border: none;\n  width: 20px;\n  height: 20px;\n  background: rgba(204, 204, 204, 1);\n}\n.ColorPicker_colorButton__1Qcuq[data-color=\"red\"]{\n    background: rgba(210, 101, 111, 1)\n  }\n.ColorPicker_colorButton__1Qcuq[data-color=\"purple\"]{\n    background: rgba(159, 101, 210, 1)\n  }\n.ColorPicker_colorButton__1Qcuq[data-color=\"blue\"]{\n    background: rgba(101, 151, 210, 1)\n  }\n.ColorPicker_colorButton__1Qcuq[data-color=\"green\"]{\n    background: rgba(101, 210, 168, 1)\n  }\n.ColorPicker_colorButton__1Qcuq[data-color=\"orange\"]{\n    background: rgba(210, 137, 101, 1)\n  }\n.ColorPicker_colorButton__1Qcuq[data-color=\"yellow\"]{\n    background: rgba(210, 196, 101, 1)\n  }\n.ColorPicker_colorButton__1Qcuq[data-color=\"pink\"]{\n    background: rgba(241, 124, 226, 1)\n  }\n.ColorPicker_colorButton__1Qcuq:hover{\n    opacity: .8;\n  }\n";
var styles$3 = {"wrapper":"ColorPicker_wrapper__1M1j2","colorButtonWrapper":"ColorPicker_colorButtonWrapper__1ijdj","colorButton":"ColorPicker_colorButton__1Qcuq"};
styleInject(css_248z$3);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var checkForCircularNodes = function checkForCircularNodes(nodes, startNodeId) {
  var isCircular = false;

  var walk = function walk(nodeId) {
    var outputs = Object.values(nodes[nodeId].connections.outputs);

    for (var _i = 0, _outputs = outputs; _i < _outputs.length; _i++) {
      var outputConnections = _outputs[_i];

      if (isCircular) {
        break;
      }

      var _iterator = _createForOfIteratorHelper(outputConnections),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var connectedTo = _step.value;

          if (connectedTo.nodeId === startNodeId) {
            isCircular = true;
            break;
          } else {
            walk(connectedTo.nodeId);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  walk(startNodeId);
  return isCircular;
};
var checkColor = function checkColor(color) {
  return RegExp(/(#(?:[0-9a-f]{2}){2,4}$|(#[0-9a-f]{3}$)|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$|black$|silver$|gray$|whitesmoke$|maroon$|red$|purple$|fuchsia$|green$|lime$|olivedrab$|yellow$|navy$|blue$|teal$|aquamarine$|orange$|aliceblue$|antiquewhite$|aqua$|azure$|beige$|bisque$|blanchedalmond$|blueviolet$|brown$|burlywood$|cadetblue$|chartreuse$|chocolate$|coral$|cornflowerblue$|cornsilk$|crimson$|currentcolor$|darkblue$|darkcyan$|darkgoldenrod$|darkgray$|darkgreen$|darkgrey$|darkkhaki$|darkmagenta$|darkolivegreen$|darkorange$|darkorchid$|darkred$|darksalmon$|darkseagreen$|darkslateblue$|darkslategray$|darkslategrey$|darkturquoise$|darkviolet$|deeppink$|deepskyblue$|dimgray$|dimgrey$|dodgerblue$|firebrick$|floralwhite$|forestgreen$|gainsboro$|ghostwhite$|goldenrod$|gold$|greenyellow$|grey$|honeydew$|hotpink$|indianred$|indigo$|ivory$|khaki$|lavenderblush$|lavender$|lawngreen$|lemonchiffon$|lightblue$|lightcoral$|lightcyan$|lightgoldenrodyellow$|lightgray$|lightgreen$|lightgrey$|lightpink$|lightsalmon$|lightseagreen$|lightskyblue$|lightslategray$|lightslategrey$|lightsteelblue$|lightyellow$|limegreen$|linen$|mediumaquamarine$|mediumblue$|mediumorchid$|mediumpurple$|mediumseagreen$|mediumslateblue$|mediumspringgreen$|mediumturquoise$|mediumvioletred$|midnightblue$|mintcream$|mistyrose$|moccasin$|navajowhite$|oldlace$|olive$|orangered$|orchid$|palegoldenrod$|palegreen$|paleturquoise$|palevioletred$|papayawhip$|peachpuff$|peru$|pink$|plum$|powderblue$|rosybrown$|royalblue$|saddlebrown$|salmon$|sandybrown$|seagreen$|seashell$|sienna$|skyblue$|slateblue$|slategray$|slategrey$|snow$|springgreen$|steelblue$|tan$|thistle$|tomato$|transparent$|turquoise$|violet$|wheat$|white$|yellowgreen$|rebeccapurple$)/i).test(color);
};

function _toPropertyKey$3(arg) { var key = _toPrimitive$3(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive$3(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var define = function define(value, defaultValue) {
  return value !== undefined ? value : defaultValue;
};

var buildControlType = function buildControlType(defaultConfig) {
  var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var setup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return {};
  };
  return function (config) {
    validate(config);
    return _objectSpread$c({
      type: defaultConfig.type,
      label: define(config.label, defaultConfig.label || ""),
      name: define(config.name, defaultConfig.name || ""),
      defaultValue: define(config.defaultValue, defaultConfig.defaultValue),
      setValue: define(config.setValue, undefined)
    }, setup(config));
  };
};

var Controls = {
  text: buildControlType({
    type: "text",
    name: "text",
    defaultValue: ""
  }),
  select: buildControlType({
    type: "select",
    name: "select",
    options: [],
    defaultValue: ""
  }, function () {}, function (config) {
    return {
      options: define(config.options, []),
      getOptions: define(config.getOptions, undefined),
      placeholder: define(config.placeholder, undefined)
    };
  }),
  number: buildControlType({
    type: "number",
    name: "number",
    defaultValue: 0
  }, function () {}, function (config) {
    return {
      step: define(config.step, undefined)
    };
  }),
  checkbox: buildControlType({
    type: "checkbox",
    name: "checkbox",
    defaultValue: false
  }),
  multiselect: buildControlType({
    type: "multiselect",
    name: "multiselect",
    options: [],
    defaultValue: []
  }, function () {}, function (config) {
    return {
      options: define(config.options, []),
      getOptions: define(config.getOptions, undefined),
      placeholder: define(config.placeholder, undefined)
    };
  }),
  custom: buildControlType({
    type: "custom",
    name: "custom",
    render: function render() {},
    defaultValue: undefined
  }, function () {}, function (config) {
    return {
      render: define(config.render, function () {})
    };
  })
};
var Colors = {
  yellow: "yellow",
  orange: "orange",
  red: "red",
  pink: "pink",
  purple: "purple",
  blue: "blue",
  green: "green",
  grey: "grey"
};
var getPortBuilders = function getPortBuilders(ports) {
  return Object.values(ports).reduce(function (obj, port) {
    obj[port.type] = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        type: port.type,
        name: config.name || port.name,
        label: config.label || port.label,
        noControls: define(config.noControls, false),
        color: port.color || config.color,
        hidePort: define(config.hidePort, port.hidePort),
        controls: define(config.controls, port.controls)
      };
    };

    return obj;
  }, {});
};
var FlumeConfig = /*#__PURE__*/function () {
  function FlumeConfig(config) {
    _classCallCheck$1(this, FlumeConfig);

    if (config) {
      this.nodeTypes = _objectSpread$c({}, config.nodeTypes);
      this.portTypes = _objectSpread$c({}, config.portTypes);
    } else {
      this.nodeTypes = {};
      this.portTypes = {};
    }
  }

  _createClass$1(FlumeConfig, [{
    key: "addRootNodeType",
    value: function addRootNodeType(config) {
      this.addNodeType(_objectSpread$c(_objectSpread$c({}, config), {}, {
        root: true,
        addable: false,
        deletable: false
      }));
      return this;
    }
  }, {
    key: "addNodeType",
    value: function addNodeType(config) {
      if (_typeof(config) !== "object" && config !== null) {
        throw new Error("You must provide a configuration object when calling addNodeType.");
      }

      if (typeof config.type !== "string") {
        throw new Error("Required key, \"type\" must be a string when calling addNodeType.");
      }

      if (typeof config.initialWidth !== "undefined" && typeof config.initialWidth !== "number") {
        throw new Error("Optional key, \"initialWidth\" must be a number when calling addNodeType.");
      }

      if (this.nodeTypes[config.type] !== undefined) {
        throw new Error("A node with type \"".concat(config.type, "\" has already been declared."));
      }

      var node = {
        type: config.type,
        label: define(config.label, ""),
        description: define(config.description, ""),
        addable: define(config.addable, true),
        deletable: define(config.deletable, true)
      }; // Validating category data of flume action that is used to render action
      // header and label info

      node.category = {};
      var category = config.category;
      node.category.id = category !== null && category !== void 0 && category.id && typeof config.id === "number" ? category.id : -1;
      node.category.label = category !== null && category !== void 0 && category.label && typeof config.label === "string" ? category.label : "Other";
      node.category.description = category !== null && category !== void 0 && category.description && typeof config.description === "string" ? category.description : "Ungrouped actions are stored here"; // Optionally supplying action header color

      if (category !== null && category !== void 0 && category.tileFontColor && typeof category.tileFontColor === "string" && checkColor(category.tileFontColor)) node.category.tileFontColor = category.tileFontColor; // Optionally supplying action header color

      if (category !== null && category !== void 0 && category.tileBackground && typeof category.tileBackground === "string" && checkColor(category.tileBackground)) node.category.tileBackground = category.tileBackground;
      if (typeof config.icon === "string") node.icon = config.icon;
      if (typeof config.comment === "string") node.comment = config.comment;
      node.expanded = config.expanded || true;
      if (config.initialWidth) node.initialWidth = config.initialWidth;
      if (config.sortIndex !== undefined) node.sortIndex = config.sortIndex;

      if (typeof config.inputs === "function") {
        var inputs = config.inputs(getPortBuilders(this.portTypes));
        if (!Array.isArray(inputs) && typeof config.inputs !== "function") throw new Error("When providing a function to the \"inputs\" key, you must return either an array or a function.");
        node.inputs = inputs;
      } else if (config.inputs === undefined) {
        node.inputs = [];
      } else if (!Array.isArray(config.inputs)) {
        throw new Error("Optional key, \"inputs\" must be an array.");
      } else {
        node.inputs = config.inputs;
      }

      if (typeof config.outputs === "function") {
        var outputs = config.outputs(getPortBuilders(this.portTypes));

        if (!Array.isArray(outputs) && typeof config.outputs !== "function") {
          throw new Error("When providing a function to the \"outputs\" key, you must return either an array or a function.");
        }

        node.outputs = outputs;
      } else if (config.outputs === undefined) {
        node.outputs = [];
      } else if (!Array.isArray(config.outputs)) {
        throw new Error("Optional key, \"outputs\" must be an array.");
      } else {
        node.outputs = config.outputs;
      }

      if (config.root !== undefined) {
        if (typeof config.root !== "boolean") {
          throw new Error("Optional key, \"root\" must be a boolean.");
        } else {
          node.root = config.root;
        }
      }

      this.nodeTypes[config.type] = node;
      return this;
    }
  }, {
    key: "removeNodeType",
    value: function removeNodeType(type) {
      if (!this.nodeTypes[type]) {
        console.error("Non-existent node type \"".concat(type, "\" cannot be removed."));
      } else {
        var _this$nodeTypes = this.nodeTypes;
            _this$nodeTypes[type];
            var nodeTypes = _objectWithoutProperties(_this$nodeTypes, [type].map(_toPropertyKey$3));

        this.nodeTypes = nodeTypes;
      }

      return this;
    }
  }, {
    key: "addPortType",
    value: function addPortType(config) {
      if (_typeof(config) !== "object" && config !== null) {
        throw new Error("You must provide a configuration object when calling addPortType");
      }

      if (typeof config.type !== "string") {
        throw new Error("Required key, \"type\" must be a string when calling addPortType.");
      }

      if (this.portTypes[config.type] !== undefined) {
        throw new Error("A port with type \"".concat(config.type, "\" has already been declared."));
      }

      if (typeof config.name !== "string") {
        throw new Error("Required key, \"name\" must be a string when calling addPortType.");
      }

      var port = {
        type: config.type,
        name: config.name,
        label: define(config.label, ""),
        hidePort: define(config.hidePort, true)
      };

      if (config.acceptTypes === undefined) {
        port.acceptTypes = [config.type];
      } else if (!Array.isArray(config.acceptTypes)) {
        throw new Error("Optional key, \"acceptTypes\" must be an array.");
      } else {
        port.acceptTypes = config.acceptTypes;
      }

      if (config.controls === undefined) {
        port.controls = [];
      } else if (!Array.isArray(config.controls)) {
        throw new Error("Optional key, \"controls\" must be an array.");
      } else {
        port.controls = config.controls;
      }

      if (!port.color && config.color && typeof config.color === "string" && checkColor(config.color)) port.color = config.color;
      this.portTypes[config.type] = port;
      return this;
    }
  }, {
    key: "removePortType",
    value: function removePortType(type) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$skipDynamicNodes = _ref.skipDynamicNodesCheck,
          skipDynamicNodesCheck = _ref$skipDynamicNodes === void 0 ? false : _ref$skipDynamicNodes;

      if (!this.portTypes[type]) {
        console.error("Non-existent port type \"".concat(type, "\" cannot be removed."));
      } else {
        if (!skipDynamicNodesCheck) {
          var dynamicNodes = Object.values(this.nodeTypes).filter(function (node) {
            return typeof node.inputs === "function" || typeof node.outputs === "function";
          });

          if (dynamicNodes.length) {
            console.warn("We've detected that one or more of your nodes is using dynamic inputs/outputs. This is a potentially dangerous operation as we are unable to detect if this portType is being used in one of those nodes. You can quiet this message by passing { skipDynamicNodesCheck: true } in as the second argument.");
          }
        }

        var affectedNodes = Object.values(this.nodeTypes).filter(function (node) {
          return Array.isArray(node.inputs) && node.inputs.find(function (p) {
            return p.type === type;
          }) || Array.isArray(node.outputs) && node.outputs.find(function (p) {
            return p.type === type;
          });
        });

        if (affectedNodes.length) {
          throw new Error("Cannot delete port type \"".concat(type, "\" without first deleting all node types using these ports: [").concat(affectedNodes.map(function (n) {
            return "".concat(n.type);
          }).join(", "), "]"));
        } else {
          var _this$portTypes = this.portTypes;
              _this$portTypes[type];
              var portTypes = _objectWithoutProperties(_this$portTypes, [type].map(_toPropertyKey$3));

          this.portTypes = portTypes;
        }
      }

      return this;
    }
  }]);

  return FlumeConfig;
}();

var ColorPicker = (function (_ref) {
  var x = _ref.x,
      y = _ref.y,
      onColorPicked = _ref.onColorPicked,
      onRequestClose = _ref.onRequestClose;
  var wrapper = React__default.useRef();
  var testClickOutside = React__default.useCallback(function (e) {
    if (wrapper.current && !wrapper.current.contains(e.target)) {
      onRequestClose();
      document.removeEventListener("click", testClickOutside);
      document.removeEventListener("contextmenu", testClickOutside);
    }
  }, [wrapper, onRequestClose]);
  var testEscape = React__default.useCallback(function (e) {
    if (e.keyCode === 27) {
      onRequestClose();
      document.removeEventListener("keydown", testEscape);
    }
  }, [onRequestClose]);
  React__default.useEffect(function () {
    document.addEventListener("keydown", testEscape);
    document.addEventListener("click", testClickOutside);
    document.addEventListener("contextmenu", testClickOutside);
    return function () {
      document.removeEventListener("click", testClickOutside);
      document.removeEventListener("contextmenu", testClickOutside);
      document.removeEventListener("keydown", testEscape);
    };
  }, [testClickOutside, testEscape]);
  return /*#__PURE__*/React__default.createElement("div", {
    ref: wrapper,
    className: styles$3.wrapper,
    style: {
      left: x,
      top: y
    }
  }, Object.values(Colors).map(function (color) {
    return /*#__PURE__*/React__default.createElement(ColorButton, {
      onSelected: function onSelected() {
        onColorPicked(color);
        onRequestClose();
      },
      color: color,
      key: color
    });
  }));
});

var ColorButton = function ColorButton(_ref2) {
  var color = _ref2.color,
      onSelected = _ref2.onSelected;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.colorButtonWrapper
  }, /*#__PURE__*/React__default.createElement("button", {
    className: styles$3.colorButton,
    onClick: onSelected,
    "data-color": color,
    "aria-label": color
  }));
};

var Comment = (function (_ref) {
  var dispatch = _ref.dispatch,
      id = _ref.id,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      text = _ref.text,
      stageRect = _ref.stageRect,
      onDragStart = _ref.onDragStart,
      isNew = _ref.isNew;
  var stageState = React__default.useContext(StageContext);
  var wrapper = React__default.useRef();
  var textarea = React__default.useRef();

  var _React$useState = React__default.useState(false),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      isEditing = _React$useState2[0],
      setIsEditing = _React$useState2[1];

  var _React$useState3 = React__default.useState(false),
      _React$useState4 = _slicedToArray$1(_React$useState3, 2),
      isPickingColor = _React$useState4[0],
      setIsPickingColor = _React$useState4[1];

  var _React$useState5 = React__default.useState(false),
      _React$useState6 = _slicedToArray$1(_React$useState5, 2),
      menuOpen = _React$useState6[0],
      setMenuOpen = _React$useState6[1];

  var _React$useState7 = React__default.useState({
    x: 0,
    y: 0
  }),
      _React$useState8 = _slicedToArray$1(_React$useState7, 2),
      menuCoordinates = _React$useState8[0],
      setMenuCoordinates = _React$useState8[1];

  var _React$useState9 = React__default.useState({
    x: 0,
    y: 0
  }),
      _React$useState10 = _slicedToArray$1(_React$useState9, 2),
      colorPickerCoordinates = _React$useState10[0],
      setColorPickerCoordinates = _React$useState10[1];

  var handleContextMenu = function handleContextMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    setMenuCoordinates({
      x: e.clientX,
      y: e.clientY
    });
    setMenuOpen(true);
    return false;
  };

  var closeContextMenu = function closeContextMenu() {
    return setMenuOpen(false);
  };

  var startDrag = function startDrag(e) {
    onDragStart();
  };

  var handleDrag = function handleDrag(_ref2) {
    var x = _ref2.x,
        y = _ref2.y;
    wrapper.current.style.transform = "translate(".concat(x, "px,").concat(y, "px)");
  };

  var handleDragEnd = function handleDragEnd(_, _ref3) {
    var x = _ref3.x,
        y = _ref3.y;
    dispatch({
      type: "SET_COMMENT_COORDINATES",
      id: id,
      x: x,
      y: y
    });
  };

  var handleResize = function handleResize(coordinates) {
    var width = clamp_1(coordinates.x - x + 10, 80, 10000);
    var height = clamp_1(coordinates.y - y + 10, 30, 10000);
    wrapper.current.style.width = "".concat(width, "px");
    wrapper.current.style.height = "".concat(height, "px");
  };

  var handleResizeEnd = function handleResizeEnd(_, coordinates) {
    var width = clamp_1(coordinates.x - x + 10, 80, 10000);
    var height = clamp_1(coordinates.y - y + 10, 30, 10000);
    dispatch({
      type: "SET_COMMENT_DIMENSIONS",
      id: id,
      width: width,
      height: height
    });
  };

  var handleMenuOption = function handleMenuOption(option, e) {
    switch (option.value) {
      case "edit":
        startTextEdit();
        break;

      case "color":
        setColorPickerCoordinates(menuCoordinates);
        setIsPickingColor(true);
        break;

      case "delete":
        dispatch({
          type: "DELETE_COMMENT",
          id: id
        });
        break;
    }
  };

  var startTextEdit = function startTextEdit() {
    setIsEditing(true);
  };

  var endTextEdit = function endTextEdit() {
    setIsEditing(false);
  };

  var handleTextChange = function handleTextChange(e) {
    dispatch({
      type: "SET_COMMENT_TEXT",
      id: id,
      text: e.target.value
    });
  };

  var handleColorPicked = function handleColorPicked(color) {
    dispatch({
      type: "SET_COMMENT_COLOR",
      id: id,
      color: color
    });
  };

  React__default.useEffect(function () {
    if (isNew) {
      setIsEditing(true);
      dispatch({
        type: "REMOVE_COMMENT_NEW",
        id: id
      });
    }
  }, [isNew, dispatch, id]);
  return /*#__PURE__*/React__default.createElement(Draggable, {
    innerRef: wrapper,
    className: styles$4.wrapper,
    style: {
      transform: "translate(".concat(x, "px,").concat(y, "px)"),
      width: width,
      height: height,
      zIndex: isEditing ? 999 : ""
    },
    stageState: stageState,
    stageRect: stageRect,
    onDragStart: startDrag,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onContextMenu: handleContextMenu,
    onDoubleClick: startTextEdit,
    onWheel: function onWheel(e) {
      return e.stopPropagation();
    },
    "data-color": color
  }, isEditing ? /*#__PURE__*/React__default.createElement("textarea", {
    className: styles$4.textarea,
    onChange: handleTextChange,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onBlur: endTextEdit,
    placeholder: "Text of the comment...",
    autoFocus: true,
    value: text,
    ref: textarea
  }) : /*#__PURE__*/React__default.createElement("div", {
    "data-comment": true,
    className: styles$4.text
  }, text), /*#__PURE__*/React__default.createElement(Draggable, {
    className: styles$4.resizeThumb,
    stageState: stageState,
    stageRect: stageRect,
    onDrag: handleResize,
    onDragEnd: handleResizeEnd
  }), menuOpen ? /*#__PURE__*/React__default.createElement(Portal$1, null, /*#__PURE__*/React__default.createElement(ContextMenu, {
    hideFilter: true,
    label: "Comment Options",
    x: menuCoordinates.x,
    y: menuCoordinates.y,
    options: [{
      value: "edit",
      label: "Edit Comment",
      description: "Edit the text of the comment"
    }, {
      value: "color",
      label: "Change Color",
      description: "Change the color of the comment"
    }, {
      value: "delete",
      label: "Delete Comment",
      description: "Delete the comment"
    }],
    onRequestClose: closeContextMenu,
    onOptionSelected: handleMenuOption
  })) : null, isPickingColor ? /*#__PURE__*/React__default.createElement(Portal$1, null, /*#__PURE__*/React__default.createElement(ColorPicker, {
    x: colorPickerCoordinates.x,
    y: colorPickerCoordinates.y,
    onRequestClose: function onRequestClose() {
      return setIsPickingColor(false);
    },
    onColorPicked: handleColorPicked
  })) : null);
});

var css_248z$2 = ".Toaster_toaster__1eC3T{\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 1px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 15px;\n  box-shadow: 0px 5px 10px -2px rgba(0,0,0,.3);\n  pointer-events: none;\n}\n.Toaster_toast__3YHVS{\n  position: absolute;\n  left: calc(50% - 200px);\n  top: 0px;\n  pointer-events: all;\n  width: 400px;\n  padding: 10px;\n  padding-top: 7px;\n  padding-right: 16px;\n  border-radius: 6px;\n  background: rgba(231, 231, 231, 1);\n  border: 1px solid;\n  margin-bottom: 5px;\n  transition: transform 300ms;\n  flex: 0 0 auto;\n  animation: Toaster_fade-in__2526Y 150ms;\n  user-select: none;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  will-change: transform;\n}\n.Toaster_toast__3YHVS[data-type=\"danger\"]{\n    background: rgb(255, 116, 137);\n    border-color: rgb(254, 99, 136);\n    color: rgb(66, 6, 20);\n  }\n.Toaster_toast__3YHVS[data-type=\"info\"]{\n    background: rgb(76, 193, 250);\n    border-color: rgb(103, 182, 255);\n    color: rgb(5, 36, 64);\n  }\n.Toaster_toast__3YHVS[data-type=\"success\"]{\n    background: rgb(81, 230, 150);\n    border-color: rgb(85, 227, 150);\n    color: rgb(7, 57, 30);\n  }\n.Toaster_toast__3YHVS[data-type=\"warning\"]{\n    background: rgb(245, 208, 93);\n    border-color: rgb(247, 235, 125);\n    color: rgb(83, 75, 8);\n  }\n.Toaster_toast__3YHVS[data-exiting=true]{\n    animation: Toaster_fade-out__2lM6E 150ms;\n    animation-fill-mode: forwards;\n  }\n.Toaster_toast__3YHVS p{\n  margin: 0px;\n}\n.Toaster_title__4InNr{\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.Toaster_timer__3dGzF{\n  position: absolute;\n  bottom: -1px;\n  left: -1px;\n  width: calc(100% + 2px);\n  height: 3px;\n  background: rgba(0,0,0,.4);\n  transform-origin: left center;\n  animation: Toaster_timer__3dGzF 1000ms linear;\n  animation-fill-mode: forwards;\n  z-index: 9;\n}\n.Toaster_exitButton__1S_Ks{\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 20px;\n  height: 20px;\n  padding: 0px;\n  background: none;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: inherit;\n  opacity: .6;\n}\n.Toaster_exitButton__1S_Ks:hover{\n  opacity: .9;\n}\n\n@keyframes Toaster_fade-in__2526Y {\n  from{\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n\n@keyframes Toaster_fade-out__2lM6E {\n  from{\n    opacity: 1;\n  }\n  to{\n    opacity: 0;\n  }\n}\n\n@keyframes Toaster_timer__3dGzF {\n  from{\n    transform: scaleX(1);\n  }\n  to{\n    transform: scaleX(0);\n  }\n}\n";
var styles$2 = {"toaster":"Toaster_toaster__1eC3T","toast":"Toaster_toast__3YHVS","fade-in":"Toaster_fade-in__2526Y","fade-out":"Toaster_fade-out__2lM6E","title":"Toaster_title__4InNr","timer":"Toaster_timer__3dGzF","exitButton":"Toaster_exitButton__1S_Ks"};
styleInject(css_248z$2);

var Toaster = (function (_ref) {
  var _ref$toasts = _ref.toasts,
      toasts = _ref$toasts === void 0 ? [] : _ref$toasts,
      dispatchToasts = _ref.dispatchToasts;
  var setHeight = React__default.useCallback(function (id, height) {
    dispatchToasts({
      type: "SET_HEIGHT",
      id: id,
      height: height
    });
  }, [dispatchToasts]);
  var startExit = React__default.useCallback(function (id) {
    dispatchToasts({
      type: "SET_EXITING",
      id: id
    });
  }, [dispatchToasts]);
  var removeToast = React__default.useCallback(function (id) {
    dispatchToasts({
      type: "REMOVE_TOAST",
      id: id
    });
  }, [dispatchToasts]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.toaster
  }, toasts.map(function (toast, i) {
    return /*#__PURE__*/React__default.createElement(Toast, _extends$3({}, toast, {
      onHeightReceived: setHeight,
      onExitRequested: startExit,
      onRemoveRequested: removeToast,
      y: toasts.slice(0, i + 1).reduce(function (y, t) {
        return t.height + y + 5;
      }, 0),
      key: toast.id
    }));
  }));
});

var Toast = function Toast(_ref2) {
  var id = _ref2.id,
      title = _ref2.title,
      message = _ref2.message,
      duration = _ref2.duration,
      type = _ref2.type,
      exiting = _ref2.exiting,
      y = _ref2.y,
      onHeightReceived = _ref2.onHeightReceived,
      onExitRequested = _ref2.onExitRequested,
      onRemoveRequested = _ref2.onRemoveRequested;

  var _React$useState = React__default.useState(false),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      paused = _React$useState2[0],
      setPaused = _React$useState2[1];

  var wrapper = React__default.useRef();
  var timer = React__default.useRef();
  var stopTimer = React__default.useCallback(function () {
    setPaused(true);
    clearTimeout(timer.current);
  }, []);
  var resumeTimer = React__default.useCallback(function () {
    setPaused(false);
    timer.current = setTimeout(function () {
      return onExitRequested(id);
    }, duration);
  }, [id, duration, onExitRequested]);
  React__default.useLayoutEffect(function () {
    var _wrapper$current$getB = wrapper.current.getBoundingClientRect(),
        height = _wrapper$current$getB.height;

    onHeightReceived(id, height);
  }, [onHeightReceived, id]);
  React__default.useEffect(function () {
    resumeTimer();
    return stopTimer;
  }, [resumeTimer, stopTimer]);

  var handleAnimationEnd = function handleAnimationEnd() {
    if (exiting) {
      onRemoveRequested(id);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    ref: wrapper,
    className: styles$2.toast,
    "data-type": type,
    style: {
      transform: "translateY(-".concat(y, "px)")
    },
    "data-exiting": exiting,
    onAnimationEnd: handleAnimationEnd,
    onMouseEnter: stopTimer,
    onMouseLeave: resumeTimer,
    role: "alert"
  }, title ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$2.title
  }, title) : null, /*#__PURE__*/React__default.createElement("p", null, message), !paused && /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.timer,
    style: {
      animationDuration: "".concat(duration, "ms")
    },
    onAnimationEnd: function onAnimationEnd(e) {
      return e.stopPropagation();
    }
  }), /*#__PURE__*/React__default.createElement("button", {
    className: styles$2.exitButton,
    onClick: function onClick() {
      stopTimer();
      onExitRequested(id);
    }
  }, "\u2715"));
};

var css_248z$1 = ".Connections_svgWrapper__3mXcU{\n  position: absolute;\n  left: 0px;\n  height: 0px;\n}\n";
var styles$1 = {"svgWrapper":"Connections_svgWrapper__3mXcU"};
styleInject(css_248z$1);

var Connections = function Connections(_ref) {
  _ref.nodes;
      var editorId = _ref.editorId;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.svgWrapper,
    id: "".concat(CONNECTIONS_ID).concat(editorId)
  });
};

var lodash = {exports: {}};

/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined$1;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined$1 : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined$1 : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined$1) {
        result = result === undefined$1 ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined$1 : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined$1,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1,
        symIterator = Symbol ? Symbol.iterator : undefined$1,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined$1,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1,
        symbolToString = symbolProto ? symbolProto.toString : undefined$1;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined$1;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined$1;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined$1 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined$1) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined$1) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined$1 : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined$1;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined$1 && !eq(object[key], value)) ||
          (value === undefined$1 && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined$1 && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined$1 : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined$1) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined$1) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined$1) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined$1 : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined$1 && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined$1, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined$1
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined$1 || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined$1;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined$1 ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined$1;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined$1 : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined$1 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined$1
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined$1 && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined$1;

          if (newValue === undefined$1) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined$1;

      var isCommon = newValue === undefined$1;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined$1;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
          if (newValue === undefined$1) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined$1;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined$1,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined$1;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined$1 ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined$1,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined$1,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined$1;

        if (newValue === undefined$1) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined$1,
            guard = length > 2 ? sources[2] : undefined$1;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined$1;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined$1 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined$1;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined$1,
            args, holders, undefined$1, undefined$1, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined$1;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined$1;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined$1 : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined$1 && other === undefined$1) {
          return defaultValue;
        }
        if (value !== undefined$1) {
          result = value;
        }
        if (other !== undefined$1) {
          if (result === undefined$1) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined$1 ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined$1;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined$1 ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined$1,
          newHoldersRight = isCurry ? undefined$1 : holders,
          newPartials = isCurry ? partials : undefined$1,
          newPartialsRight = isCurry ? undefined$1 : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined$1, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined$1;
      }
      ary = ary === undefined$1 ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined$1 ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined$1;
      }
      var data = isBindKey ? undefined$1 : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined$1
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined$1, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined$1 ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined$1 : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined$1;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined$1) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined$1
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined$1, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined$1;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined$1;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined$1,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined$1 || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined$1 ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined$1, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined$1 ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined$1)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined$1;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined$1, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined$1) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined$1 ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined$1;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined$1;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined$1, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined$1;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined$1) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined$1;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined$1, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined$1 ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined$1) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return (array && array.length) ? baseUniq(array, undefined$1, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined$1, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined$1;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined$1;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined$1;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined$1;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined$1
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined$1);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined$1) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined$1 : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined$1;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined$1
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined$1;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined$1 ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined$1 : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined$1)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined$1;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined$1 : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined$1;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined$1 : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined$1 : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined$1;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined$1 || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined$1;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined$1;
        return result;
      }

      function cancel() {
        if (timerId !== undefined$1) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined$1;
      }

      function flush() {
        return timerId === undefined$1 ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined$1) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined$1) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined$1 ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      var result = customizer ? customizer(value, other) : undefined$1;
      return result === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined$1;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined$1;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined$1 ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined$1, customDefaultsMerge);
      return apply(mergeWith, undefined$1, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined$1 : baseGet(object, path);
      return result === undefined$1 ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined$1;
      }
      while (++index < length) {
        var value = object == null ? undefined$1 : object[toKey(path[index])];
        if (value === undefined$1) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined$1;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined$1) {
        upper = lower;
        lower = undefined$1;
      }
      if (upper !== undefined$1) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined$1) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined$1) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined$1;
      }
      if (floating === undefined$1) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined$1;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined$1;
        }
      }
      if (lower === undefined$1 && upper === undefined$1) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined$1) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined$1
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined$1)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined$1;
      }
      limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined$1;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined$1, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined$1)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined$1) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined$1 ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined$1 : pattern;

      if (pattern === undefined$1) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined$1, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined$1 : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined$1;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined$1;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined$1;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined$1;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined$1) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined$1 });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined$1
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(commonjsGlobal));
}(lodash, lodash.exports));

var _ = lodash.exports;

var getFilteredTransputs = (function (transputs, nodeId) {
  return Object.entries(transputs).reduce(function (obj, _ref) {
    var _ref2 = _slicedToArray$1(_ref, 2),
        portName = _ref2[0],
        transput = _ref2[1];

    var newTransputs = transput.filter(function (t) {
      return t.nodeId !== nodeId;
    });

    if (newTransputs.length) {
      obj[portName] = newTransputs;
    }

    return obj;
  }, {});
});

var removeConnections = (function (connections, nodeId) {
  return {
    inputs: getFilteredTransputs(connections.inputs, nodeId),
    outputs: getFilteredTransputs(connections.outputs, nodeId)
  };
});

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toPropertyKey$2(arg) { var key = _toPrimitive$2(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive$2(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var removeNode = (function (startNodes, nodeId) {
  var clearView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  startNodes[nodeId];
      var nodes = _objectWithoutProperties(startNodes, [nodeId].map(_toPropertyKey$2));

  nodes = Object.values(nodes).reduce(function (obj, node) {
    obj[node.id] = _objectSpread$b(_objectSpread$b({}, node), {}, {
      connections: removeConnections(node.connections, nodeId)
    });
    return obj;
  }, {});
  clearView && deleteConnectionsByNodeId(nodeId);
  return nodes;
});

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var addConnection = (function (nodes, input, output, portTypes) {
  var _objectSpread4;

  return _objectSpread$a(_objectSpread$a({}, nodes), {}, (_objectSpread4 = {}, _defineProperty$2(_objectSpread4, input.nodeId, _objectSpread$a(_objectSpread$a({}, nodes[input.nodeId]), {}, {
    connections: _objectSpread$a(_objectSpread$a({}, nodes[input.nodeId].connections), {}, {
      inputs: _objectSpread$a(_objectSpread$a({}, nodes[input.nodeId].connections.inputs), {}, _defineProperty$2({}, input.portName, [].concat(_toConsumableArray$1(nodes[input.nodeId].connections.inputs[input.portName] || []), [{
        nodeId: output.nodeId,
        portName: output.portName
      }])))
    })
  })), _defineProperty$2(_objectSpread4, output.nodeId, _objectSpread$a(_objectSpread$a({}, nodes[output.nodeId]), {}, {
    connections: _objectSpread$a(_objectSpread$a({}, nodes[output.nodeId].connections), {}, {
      outputs: _objectSpread$a(_objectSpread$a({}, nodes[output.nodeId].connections.outputs), {}, _defineProperty$2({}, output.portName, [].concat(_toConsumableArray$1(nodes[output.nodeId].connections.outputs[output.portName] || []), [{
        nodeId: input.nodeId,
        portName: input.portName
      }])))
    })
  })), _objectSpread4));
});

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toPropertyKey$1(arg) { var key = _toPrimitive$1(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive$1(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var removeConnection = (function (nodes, input, output) {
  var _objectSpread3;

  var inputNode = nodes[input.nodeId];

  var _inputNode$connection = inputNode.connections.inputs,
      _input$portName = input.portName;
      _inputNode$connection[_input$portName];
      var newInputNodeConnectionsInputs = _objectWithoutProperties(_inputNode$connection, [_input$portName].map(_toPropertyKey$1));

  var newInputNode = _objectSpread$9(_objectSpread$9({}, inputNode), {}, {
    connections: _objectSpread$9(_objectSpread$9({}, inputNode.connections), {}, {
      inputs: newInputNodeConnectionsInputs
    })
  });

  var outputNode = nodes[output.nodeId];
  var filteredOutputNodes = outputNode.connections.outputs[output.portName].filter(function (cnx) {
    return cnx.nodeId === input.nodeId ? cnx.portName !== input.portName : true;
  });

  var newOutputNode = _objectSpread$9(_objectSpread$9({}, outputNode), {}, {
    connections: _objectSpread$9(_objectSpread$9({}, outputNode.connections), {}, {
      outputs: _objectSpread$9(_objectSpread$9({}, outputNode.connections.outputs), {}, _defineProperty$2({}, output.portName, filteredOutputNodes))
    })
  });

  return _objectSpread$9(_objectSpread$9({}, nodes), {}, (_objectSpread3 = {}, _defineProperty$2(_objectSpread3, input.nodeId, newInputNode), _defineProperty$2(_objectSpread3, output.nodeId, newOutputNode), _objectSpread3));
});

var getDefaultData = (function (_ref) {
  var node = _ref.node,
      nodeType = _ref.nodeType,
      portTypes = _ref.portTypes,
      context = _ref.context;
  var inputs = Array.isArray(nodeType.inputs) ? nodeType.inputs : nodeType.inputs(node.inputData, node.connections, context);
  return inputs.reduce(function (obj, input) {
    var inputType = portTypes[input.type];
    obj[input.name || inputType.name] = (input.controls || inputType.controls || []).reduce(function (obj2, control) {
      obj2[control.name] = control.defaultValue;
      return obj2;
    }, {});
    return obj;
  }, {});
});

var _excluded$2 = ["id", "defaultNode"];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var copyObj = function copyObj(o) {
  return JSON.parse(JSON.stringify(o));
};

var copyNodes = function copyNodes(nodes, selectedNodeIds) {
  var clearView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var nodesToDelete = _.difference(_.keys(nodes), selectedNodeIds);

  var nodesToCopy = nodesToDelete.reduce(function (stayNodes, id) {
    return removeNode(stayNodes, id, clearView);
  }, nodes);
  localStorage.setItem("clipboard", JSON.stringify({
    application: "PythonRPA",
    nodes: nodesToCopy
  }));
};

var nodesReducer = function nodesReducer(_ref) {
  var nodesState = _ref.nodesState,
      currentStateIndex = _ref.currentStateIndex;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref2 = arguments.length > 2 ? arguments[2] : undefined,
      nodeTypes = _ref2.nodeTypes,
      portTypes = _ref2.portTypes,
      cache = _ref2.cache,
      circularBehavior = _ref2.circularBehavior,
      context = _ref2.context;

  var dispatchToasts = arguments.length > 3 ? arguments[3] : undefined;
  var nodes = nodesState && nodesState.length && currentStateIndex >= 0 && nodesState[currentStateIndex].state || {};

  switch (action.type) {
    case "ADD_CONNECTION":
      {
        var input = action.input,
            output = action.output;
        var inputIsNotConnected = !nodes[input.nodeId].connections.inputs[input.portName];

        if (inputIsNotConnected) {
          var allowCircular = circularBehavior === "warn" || circularBehavior === "allow";
          var newNodes = addConnection(nodes, input, output);
          var isCircular = checkForCircularNodes(newNodes, output.nodeId);

          if (isCircular && !allowCircular) {
            dispatchToasts({
              type: "ADD_TOAST",
              title: "Unable to connect",
              message: "Connecting these nodes would result in an infinite loop.",
              toastType: "warning",
              duration: 5000
            });
            return nodes;
          } else {
            if (isCircular && circularBehavior === "warn") {
              dispatchToasts({
                type: "ADD_TOAST",
                title: "Circular Connection Detected",
                message: "Connecting these nodes has created an infinite loop.",
                toastType: "warning",
                duration: 5000
              });
            }

            return newNodes;
          }
        } else return nodes;
      }

    case "REMOVE_CONNECTION":
      {
        var _input = action.input,
            _output = action.output;
        var id = _output.nodeId + _output.portName + _input.nodeId + _input.portName;
        delete cache.current.connections[id];
        deleteConnection({
          id: id
        });
        return removeConnection(nodes, _input, _output);
      }

    case "DESTROY_TRANSPUT":
      {
        var transput = action.transput,
            transputType = action.transputType;
        var portId = transput.nodeId + transput.portName + transputType;
        delete cache.current.ports[portId];
        var cnxType = transputType === "input" ? "inputs" : "outputs";
        var connections = nodes[transput.nodeId].connections[cnxType][transput.portName];
        if (!connections || !connections.length) return nodes;
        return connections.reduce(function (nodes, cnx) {
          var _ref3 = transputType === "input" ? [transput, cnx] : [cnx, transput],
              _ref4 = _slicedToArray$1(_ref3, 2),
              input = _ref4[0],
              output = _ref4[1];

          var id = output.nodeId + output.portName + input.nodeId + input.portName;
          delete cache.current.connections[id];
          deleteConnection({
            id: id
          });
          return removeConnection(nodes, input, output);
        }, nodes);
      }

    case "ADD_NODE":
      {
        var x = action.x,
            y = action.y,
            nodeType = action.nodeType,
            _id = action.id,
            defaultNode = action.defaultNode;

        var newNodeId = _id || nanoid(10);

        var newNode = {
          id: newNodeId,
          x: x,
          y: y,
          type: nodeType,
          connections: {
            inputs: {},
            outputs: {}
          },
          inputData: {},
          expanded: true
        };
        newNode.inputData = getDefaultData({
          node: newNode,
          nodeType: nodeTypes[nodeType],
          portTypes: portTypes,
          context: context
        });

        if (defaultNode) {
          newNode.defaultNode = true;
        }

        if (nodeTypes[nodeType].root) {
          newNode.root = true;
        }

        return _objectSpread$8(_objectSpread$8({}, nodes), {}, _defineProperty$2({}, newNodeId, newNode));
      }

    case "COPY_NODES":
      {
        var selectedNodeIds = _.difference(action.selectedNodeIds, _.keys(_.pickBy(nodes, function (_ref5) {
          var root = _ref5.root;
          return root;
        })));

        if (!selectedNodeIds.length) return nodes;
        copyNodes(nodes, selectedNodeIds, false);
        return nodes;
      }

    case "CUT_NODES":
      {
        var _selectedNodeIds = _.difference(action.selectedNodeIds, _.keys(_.pickBy(nodes, function (_ref6) {
          var root = _ref6.root;
          return root;
        })));

        if (!_selectedNodeIds.length) return nodes;
        copyNodes(nodes, _selectedNodeIds);
        return _selectedNodeIds.reduce(function (stayNodes, id) {
          return removeNode(stayNodes, id);
        }, nodes);
      }

    case "PASTE_NODES":
      {
        var JSONString = localStorage.getItem("clipboard");

        var _JSON$parse = JSON.parse(JSONString),
            application = _JSON$parse.application,
            _newNodes = _JSON$parse.nodes;

        if (application === "PythonRPA" && _newNodes) {
          var newJSONString = _.keys(_newNodes).reduce(function (jsonString, id) {
            var newId = nanoid(10);
            return jsonString.replaceAll("\"".concat(id, "\""), "\"".concat(newId, "\""));
          }, JSON.stringify(_newNodes));

          var newJSON = JSON.parse(newJSONString);

          _.forOwn(newJSON, function (_, key) {
            newJSON[key] = _objectSpread$8(_objectSpread$8({}, newJSON[key]), {}, {
              x: newJSON[key].x + 20,
              y: newJSON[key].y + 20
            });
          });

          localStorage.setItem("clipboard", JSON.stringify({
            application: "PythonRPA",
            nodes: newJSON
          }));
          return _objectSpread$8(_objectSpread$8({}, nodes), newJSON);
        }

        return nodes;
      }

    case "REMOVE_NODE":
      {
        var nodeId = action.nodeId;
        return removeNode(nodes, nodeId);
      }

    case "HYDRATE_DEFAULT_NODES":
      {
        var _newNodes2 = _objectSpread$8({}, nodes);

        for (var key in _newNodes2) {
          if (_newNodes2[key].defaultNode) {
            var _newNodeId = nanoid(10);

            var _newNodes2$key = _newNodes2[key];
                _newNodes2$key.id;
                _newNodes2$key.defaultNode;
                var node = _objectWithoutProperties(_newNodes2$key, _excluded$2);

            _newNodes2[_newNodeId] = _objectSpread$8(_objectSpread$8({}, node), {}, {
              id: _newNodeId
            });
            delete _newNodes2[key];
          }
        }

        return _newNodes2;
      }

    case "SET_PORT_DATA":
      {
        var _nodeId = action.nodeId,
            portName = action.portName,
            controlName = action.controlName,
            data = action.data,
            setValue = action.setValue;

        var newData = _objectSpread$8(_objectSpread$8({}, nodes[_nodeId].inputData), {}, _defineProperty$2({}, portName, _objectSpread$8(_objectSpread$8({}, nodes[_nodeId].inputData[portName]), {}, _defineProperty$2({}, controlName, data))));

        if (setValue) {
          newData = setValue(newData, nodes[_nodeId].inputData);
        }

        return _objectSpread$8(_objectSpread$8({}, nodes), {}, _defineProperty$2({}, _nodeId, _objectSpread$8(_objectSpread$8({}, nodes[_nodeId]), {}, {
          inputData: newData
        })));
      }

    case "SET_NODE_DATA":
      {
        var comment = action.comment,
            _nodeId2 = action.nodeId;
        return _objectSpread$8(_objectSpread$8({}, nodes), {}, _defineProperty$2({}, _nodeId2, _objectSpread$8(_objectSpread$8({}, nodes[_nodeId2]), {}, {
          comment: comment !== null && comment !== void 0 && comment.length ? comment : undefined
        })));
      }

    case "SET_NODE_COORDINATES":
      {
        var _x = action.x,
            _y = action.y,
            _nodeId3 = action.nodeId;
        return _objectSpread$8(_objectSpread$8({}, nodes), {}, _defineProperty$2({}, _nodeId3, _objectSpread$8(_objectSpread$8({}, nodes[_nodeId3]), {}, {
          x: _x,
          y: _y
        })));
      }

    case "SET_MULTIPLE_NODES_COORDINATES":
      {
        var nodesInfo = action.nodesInfo;
        return _objectSpread$8(_objectSpread$8({}, nodes), Object.assign.apply(Object, [{}].concat(_toConsumableArray$1(nodesInfo.map(function (_ref7) {
          var nodeId = _ref7.nodeId,
              x = _ref7.x,
              y = _ref7.y;
          return _defineProperty$2({}, nodeId, _objectSpread$8(_objectSpread$8({}, nodes[nodeId]), {}, {
            x: x,
            y: y
          }));
        })))));
      }

    default:
      return nodes;
  }
};
var connectNodesReducer = function connectNodesReducer(reducer, environment, dispatchToasts) {
  return function (state, action) {
    return reducer(state, action, environment, dispatchToasts);
  };
};
var nodesReducer$1 = (function () {
  for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  var _props$ = props[0],
      nodesState = _props$.nodesState,
      currentStateIndex = _props$.currentStateIndex;

  switch (props[1].type) {
    case "UNDO_CHANGES":
      {
        return currentStateIndex > 0 ? {
          currentStateIndex: currentStateIndex - 1,
          nodesState: nodesState
        } : copyObj(props[0]);
      }

    case "REDO_CHANGES":
      {
        return currentStateIndex + 1 < nodesState.length ? {
          currentStateIndex: currentStateIndex + 1,
          nodesState: nodesState
        } : copyObj(props[0]);
      }

    case "COPY_NODES":
      {
        nodesReducer.apply(void 0, props);
        return copyObj(props[0]);
      }

    case "TOGGLE_NODE_VIEW":
      {
        var _props$2 = props[1],
            nodeId = _props$2.id,
            doExpand = _props$2.doExpand;
        var nodes = props[0].nodesState[props[0].currentStateIndex].state;
        var newState = copyObj(props[0]);
        newState.nodesState[newState.currentStateIndex].state = _objectSpread$8(_objectSpread$8({}, nodes), {}, _defineProperty$2({}, nodeId, _objectSpread$8(_objectSpread$8({}, nodes[nodeId]), {}, {
          expanded: doExpand ? doExpand : !nodes[nodeId].expanded
        })));
        return newState;
      }

    default:
      {
        var _nodesState = props[0].nodesState;

        var _nodes = nodesReducer.apply(void 0, props);

        var isSlice = _nodesState.length > 1 && currentStateIndex < _nodesState.length - 1;
        return props[1].type === "HYDRATE_DEFAULT_NODES" ? {
          nodesState: [{
            action: props[1],
            state: _nodes
          }],
          currentStateIndex: 0
        } : {
          nodesState: [].concat(_toConsumableArray$1(_nodesState.slice(0, isSlice ? currentStateIndex + 1 : _nodesState.length)), [{
            action: props[1],
            state: _nodes
          }]),
          currentStateIndex: currentStateIndex + 1
        };
      }
  }
});

var _excluded$1 = ["isNew"];

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var setComment = function setComment(comments, id, merge) {
  return _objectSpread$7(_objectSpread$7({}, comments), {}, _defineProperty$2({}, id, _objectSpread$7(_objectSpread$7({}, comments[id]), merge)));
};

var commentsReducer = (function () {
  var comments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_COMMENT":
      {
        var _comment = {
          id: nanoid(10),
          text: "",
          x: action.x,
          y: action.y,
          width: 200,
          height: 30,
          color: "blue",
          isNew: true
        };
        return _objectSpread$7(_objectSpread$7({}, comments), {}, _defineProperty$2({}, _comment.id, _comment));
      }

    case "REMOVE_COMMENT_NEW":
      var _comments$action$id = comments[action.id];
          _comments$action$id.isNew;
          var comment = _objectWithoutProperties(_comments$action$id, _excluded$1);

      return _objectSpread$7(_objectSpread$7({}, comments), {}, _defineProperty$2({}, action.id, comment));

    case "SET_COMMENT_COORDINATES":
      {
        return setComment(comments, action.id, {
          x: action.x,
          y: action.y
        });
      }

    case "SET_COMMENT_DIMENSIONS":
      {
        return setComment(comments, action.id, {
          width: action.width,
          height: action.height
        });
      }

    case "SET_COMMENT_TEXT":
      {
        return setComment(comments, action.id, {
          text: action.text
        });
      }

    case "SET_COMMENT_COLOR":
      {
        return setComment(comments, action.id, {
          color: action.color
        });
      }

    case "DELETE_COMMENT":
      {
        var _action$id = action.id;
            comments[_action$id];
            var newComments = _objectWithoutProperties(comments, [_action$id].map(_toPropertyKey));

        return newComments;
      }

    default:
      return comments;
  }
});

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var toastsReducer = (function () {
  var toasts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_TOAST":
      return [{
        id: nanoid(5),
        title: action.title,
        message: action.message,
        type: action.toastType || 'info',
        duration: action.duration || 10000,
        height: 0,
        exiting: false
      }].concat(_toConsumableArray$1(toasts));

    case "SET_HEIGHT":
      {
        var index = toasts.findIndex(function (t) {
          return t.id === action.id;
        });
        return [].concat(_toConsumableArray$1(toasts.slice(0, index)), [_objectSpread$6(_objectSpread$6({}, toasts[index]), {}, {
          height: action.height
        })], _toConsumableArray$1(toasts.slice(index + 1)));
      }

    case "SET_EXITING":
      {
        var _index = toasts.findIndex(function (t) {
          return t.id === action.id;
        });

        return [].concat(_toConsumableArray$1(toasts.slice(0, _index)), [_objectSpread$6(_objectSpread$6({}, toasts[_index]), {}, {
          exiting: true
        })], _toConsumableArray$1(toasts.slice(_index + 1)));
      }

    case "REMOVE_TOAST":
      {
        var _index2 = toasts.findIndex(function (t) {
          return t.id === action.id;
        });

        return [].concat(_toConsumableArray$1(toasts.slice(0, _index2)), _toConsumableArray$1(toasts.slice(_index2 + 1)));
      }

    default:
      return toasts;
  }
});

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var stageReducer = (function (state, incomingAction) {
  var action = typeof incomingAction === "function" ? incomingAction(state) : incomingAction;

  switch (action.type) {
    case "SET_SCALE":
      return _objectSpread$5(_objectSpread$5({}, state), {}, {
        scale: action.scale
      });

    case "SET_TRANSLATE":
      return _objectSpread$5(_objectSpread$5({}, state), {}, {
        translate: action.translate
      });

    default:
      return state;
  }
});

var Cache = function Cache() {
  _classCallCheck$1(this, Cache);

  this.ports = {};
  this.connections = {};
};

var css_248z = ".styles_dragWrapper__1P7RD{\n  z-index: 9999;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.styles_debugWrapper__2OSbY{\n  display: flex;\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n  gap: 15px;\n}\n";
var styles = {"dragWrapper":"styles_dragWrapper__1P7RD","debugWrapper":"styles_debugWrapper__2OSbY"};
styleInject(css_248z);

var dist = {};

Object.defineProperty(dist,"__esModule",{value:true});var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={};}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName];}}}else if(!props){props=defaultProps||{};}if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3];}props.children=childArray;}return {$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:""+key,ref:null,props:props,_owner:null}}}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=React__default;var _react2=_interopRequireDefault(_react);var _propTypes=propTypes.exports;_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2}else {return Array.from(arr)}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn$1(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits$1(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function getOffset(props){var offset={top:0,left:0};if(props.offset){offset=Object.assign({},props.offset);}else if(props.target){var boundingBox=props.target.getBoundingClientRect();offset.top=boundingBox.top+window.scrollY;offset.left=boundingBox.left+window.scrollX;}return offset}var Selection=function(_React$PureComponent){_inherits$1(Selection,_React$PureComponent);function Selection(props){_classCallCheck(this,Selection);var _this=_possibleConstructorReturn$1(this,(Selection.__proto__||Object.getPrototypeOf(Selection)).call(this,props));_this.bind=function(){_this.props.target.addEventListener("mousedown",_this.onMouseDown);_this.props.target.addEventListener("touchstart",_this.onTouchStart);};_this.reset=function(){if(_this.props.target){_this.props.target.removeEventListener("mousedown",_this.onMouseDown);}};_this.init=function(e,x,y){if(_this.props.ignoreTargets){var Target=e.target;if(!Target.matches){var defaultMatches=function defaultMatches(s){return [].indexOf.call(window.document.querySelectorAll(s),_this)!==-1};Target.matches=Target.matchesSelector||Target.mozMatchesSelector||Target.msMatchesSelector||Target.oMatchesSelector||Target.webkitMatchesSelector||defaultMatches;}if(Target.matches&&Target.matches(_this.props.ignoreTargets.join(","))){return false}}var nextState={};nextState.mouseDown=true;nextState.startPoint={x:(x-_this.state.offset.left)/_this.state.zoom,y:(y-_this.state.offset.top)/_this.state.zoom};_this.setState(nextState);return true};_this.onMouseDown=function(e){if(_this.props.disabled||e.button===2||e.nativeEvent&&e.nativeEvent.which===2){return}if(_this.init(e,e.pageX,e.pageY)){window.document.addEventListener("mousemove",_this.onMouseMove);window.document.addEventListener("mouseup",_this.onMouseUp);}};_this.onTouchStart=function(e){if(_this.props.disabled||!e.touches||!e.touches[0]||e.touches.length>1){return}if(_this.init(e,e.touches[0].pageX,e.touches[0].pageY)){window.document.addEventListener("touchmove",_this.onTouchMove);window.document.addEventListener("touchend",_this.onMouseUp);}};_this.onMouseUp=function(){window.document.removeEventListener("touchmove",_this.onTouchMove);window.document.removeEventListener("mousemove",_this.onMouseMove);window.document.removeEventListener("mouseup",_this.onMouseUp);window.document.removeEventListener("touchend",_this.onMouseUp);_this.setState({mouseDown:false,startPoint:null,endPoint:null,selectionBox:null});if(_this.props.onSelectionChange){_this.props.onSelectionChange(_this.selectedChildren);}if(_this.props.onHighlightChange){_this.highlightedChildren=[];_this.props.onHighlightChange(_this.highlightedChildren);}_this.selectedChildren=[];};_this.onMouseMove=function(e){e.preventDefault();if(_this.state.mouseDown){var _endPoint={x:(e.pageX-_this.state.offset.left)/_this.state.zoom,y:(e.pageY-_this.state.offset.top)/_this.state.zoom};_this.setState({endPoint:_endPoint,selectionBox:_this.calculateSelectionBox(_this.state.startPoint,_endPoint)});}};_this.onTouchMove=function(e){e.preventDefault();if(_this.state.mouseDown){var _endPoint2={x:(e.touches[0].pageX-_this.state.offset.left)/_this.state.zoom,y:(e.touches[0].pageY-_this.state.offset.top)/_this.state.zoom};_this.setState({endPoint:_endPoint2,selectionBox:_this.calculateSelectionBox(_this.state.startPoint,_endPoint2)});}};_this.lineIntersects=function(lineA,lineB){return lineA[1]>=lineB[0]&&lineB[1]>=lineA[0]};_this.boxIntersects=function(boxA,boxB){var boxAProjection={x:[boxA.left,boxA.left+boxA.width],y:[boxA.top,boxA.top+boxA.height]};var boxBProjection={x:[boxB.left,boxB.left+boxB.width],y:[boxB.top,boxB.top+boxB.height]};return _this.lineIntersects(boxAProjection.x,boxBProjection.x)&&_this.lineIntersects(boxAProjection.y,boxBProjection.y)};_this.updateCollidingChildren=function(selectionBox){_this.selectedChildren=[];if(_this.props.elements){_this.props.elements.forEach(function(ref,$index){if(ref){var refBox=ref.getBoundingClientRect();var tmpBox={top:(refBox.top-_this.state.offset.top+window.scrollY)/_this.state.zoom,left:(refBox.left-_this.state.offset.left+window.scrollX)/_this.state.zoom,width:ref.clientWidth,height:ref.clientHeight};if(_this.boxIntersects(selectionBox,tmpBox)){_this.selectedChildren.push($index);}}});}if(_this.props.onHighlightChange&&JSON.stringify(_this.highlightedChildren)!==JSON.stringify(_this.selectedChildren)){var _onHighlightChange=_this.props.onHighlightChange;_this.highlightedChildren=[].concat(_toConsumableArray(_this.selectedChildren));if(window.requestAnimationFrame){window.requestAnimationFrame(function(){_onHighlightChange(_this.highlightedChildren);});}else {_onHighlightChange(_this.highlightedChildren);}}};_this.calculateSelectionBox=function(startPoint,endPoint){if(!_this.state.mouseDown||!startPoint||!endPoint){return null}var left=Math.min(startPoint.x,endPoint.x)-1;var top=Math.min(startPoint.y,endPoint.y)-1;var width=Math.abs(startPoint.x-endPoint.x)+1;var height=Math.abs(startPoint.y-endPoint.y)+1;return {left:left,top:top,width:width,height:height}};_this.state={mouseDown:false,startPoint:null,endPoint:null,selectionBox:null,offset:getOffset(props),zoom:props.zoom||1};_this.selectedChildren=[];_this.highlightedChildren=[];return _this}_createClass(Selection,[{key:"componentDidMount",value:function componentDidMount(){this.reset();this.bind();}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.setState({offset:getOffset(nextProps)});}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.reset();this.bind();if(this.state.mouseDown&&this.state.selectionBox){this.updateCollidingChildren(this.state.selectionBox);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.reset();window.document.removeEventListener("mousemove",this.onMouseMove);window.document.removeEventListener("mouseup",this.onMouseUp);}},{key:"render",value:function render(){var style=Object.assign({position:"absolute",background:"rgba(159, 217, 255, 0.3)",border:"solid 1px rgba(123, 123, 123, 0.61)",zIndex:9,cursor:"crosshair"},this.props.style);if(this.state.selectionBox){style=Object.assign({},style,this.state.selectionBox);}if(!this.state.mouseDown||!this.state.endPoint||!this.state.startPoint){return null}return _jsx("div",{className:"react-ds-border",style:style})}}]);return Selection}(_react2.default.PureComponent);var _default = dist.default=Selection;

var useSelect = (function (nodes, previousNodes) {
  var _useState = useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      nodeRefs = _useState2[0],
      setNodesRef = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray$1(_useState3, 2),
      selectedNodes = _useState4[0],
      setSelectedNodes = _useState4[1];

  var clearSelection = function clearSelection() {
    return setSelectedNodes([]);
  };

  var handleSelection = function handleSelection(indexes) {
    var multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setSelectedNodes(function (sn) {
      return multiple ? sn.concat(indexes.map(function (i) {
        return nodeRefs[i][0].id;
      })) : indexes.map(function (i) {
        return nodeRefs[i][0].id;
      });
    });
  };

  useMemo(function () {
    if (!nodeRefs.length) {
      setNodesRef(function () {
        return Object.values(nodes).map(function (n) {
          return [n, /*#__PURE__*/createRef()];
        }) || [];
      }) && clearSelection();
    }

    if (previousNodes && nodes !== previousNodes) {
      Object.values(nodes).every(function (_ref) {
        var id = _ref.id;
        return Object.values(previousNodes).some(function (_ref2) {
          var oldId = _ref2.id;
          return id === oldId;
        });
      }) || !setNodesRef(function () {
        return Object.values(nodes).map(function (n) {
          return [n, /*#__PURE__*/createRef()];
        }) || [];
      }) && clearSelection();
    }
  }, [nodes, previousNodes]);
  return [selectedNodes, nodeRefs, handleSelection, clearSelection];
});

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var reconcileNodes = (function (initialNodes, nodeTypes, portTypes, context) {
  var nodes = _objectSpread$4({}, initialNodes); // Delete extraneous nodes


  var nodesToDelete = Object.values(nodes).map(function (node) {
    return !nodeTypes[node.type] ? node.id : undefined;
  }).filter(function (x) {
    return x;
  });
  nodesToDelete.forEach(function (nodeId) {
    nodes = nodesReducer(nodes, {
      type: "REMOVE_NODE",
      nodeId: nodeId
    }, {
      nodeTypes: nodeTypes,
      portTypes: portTypes,
      context: context
    });
  }); // Reconcile input data for each node

  var reconciledNodes = Object.values(nodes).reduce(function (nodesObj, node) {
    var nodeType = nodeTypes[node.type];
    var defaultInputData = getDefaultData({
      node: node,
      nodeType: nodeType,
      portTypes: portTypes,
      context: context
    });
    var currentInputData = Object.entries(node.inputData).reduce(function (dataObj, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 2),
          key = _ref2[0],
          data = _ref2[1];

      if (defaultInputData[key] !== undefined) {
        dataObj[key] = data;
      }

      return dataObj;
    }, {});

    var newInputData = _objectSpread$4(_objectSpread$4({}, defaultInputData), currentInputData);

    nodesObj[node.id] = _objectSpread$4(_objectSpread$4({}, node), {}, {
      inputData: newInputData
    });
    return nodesObj;
  }, {}); // Reconcile node attributes for each node

  reconciledNodes = Object.values(reconciledNodes).reduce(function (nodesObj, node) {
    var newNode = _objectSpread$4({}, node);

    var nodeType = nodeTypes[node.type];

    if (nodeType.root !== node.root) {
      if (nodeType.root && !node.root) {
        newNode.root = nodeType.root;
      } else if (!nodeType.root && node.root) {
        delete newNode.root;
      }
    }

    nodesObj[node.id] = newNode;
    return nodesObj;
  }, {});
  return reconciledNodes;
});

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var getInitialNodes = (function () {
  var initialNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var nodeTypes = arguments.length > 2 ? arguments[2] : undefined;
  var portTypes = arguments.length > 3 ? arguments[3] : undefined;
  var context = arguments.length > 4 ? arguments[4] : undefined;
  var reconciledNodes = reconcileNodes(initialNodes, nodeTypes, portTypes, context);
  return _objectSpread$3(_objectSpread$3({}, reconciledNodes), defaultNodes.reduce(function (nodes, dNode, i) {
    var nodeNotAdded = !Object.values(initialNodes).find(function (n) {
      return n.type === dNode.type;
    });

    if (nodeNotAdded) {
      nodes = nodesReducer(nodes, {
        type: "ADD_NODE",
        id: "default-".concat(i),
        defaultNode: true,
        x: dNode.x || 0,
        y: dNode.y || 0,
        nodeType: dNode.type
      }, {
        nodeTypes: nodeTypes,
        portTypes: portTypes,
        context: context
      });
    }

    return nodes;
  }, {}));
});

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LoopError = /*#__PURE__*/function (_Error) {
  _inherits(LoopError, _Error);

  var _super = _createSuper(LoopError);

  function LoopError(message, code) {
    var _this;

    _classCallCheck$1(this, LoopError);

    _this = _super.call(this, message);
    _this.code = code;
    return _this;
  }

  return LoopError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

_defineProperty$2(LoopError, "maxLoopsExceeded", 1);

var RootEngine = /*#__PURE__*/function () {
  function RootEngine(config, resolveInputControls, fireNodeFunction) {
    _classCallCheck$1(this, RootEngine);

    _defineProperty$2(this, "getRootNode", function (nodes) {
      var roots = Object.values(nodes).filter(function (n) {
        return n.root;
      });

      if (roots.length > 1) {
        throw new Error("The root engine must not be called with more than one root node.");
      }

      return roots[0];
    });

    this.config = config;
    this.fireNodeFunction = fireNodeFunction;
    this.resolveInputControls = resolveInputControls;
    this.loops = 0;
    this.maxLoops = 1000;
  }

  _createClass$1(RootEngine, [{
    key: "resetLoops",
    value: function resetLoops(maxLoops) {
      this.maxLoops = maxLoops !== undefined ? maxLoops : 1000;
      this.loops = 0;
    }
  }, {
    key: "checkLoops",
    value: function checkLoops() {
      if (this.maxLoops >= 0 && this.loops > this.maxLoops) {
        throw new LoopError("Max loop count exceeded.", LoopError.maxLoopsExceeded);
      } else {
        this.loops++;
      }
    }
  }, {
    key: "reduceRootInputs",
    value: function reduceRootInputs(inputs, callback) {
      return Object.entries(inputs).reduce(function (obj, _ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
            inputName = _ref2[0],
            connection = _ref2[1];

        var input = callback(inputName, connection);
        obj[input.name] = input.value;
        return obj;
      }, {});
    }
  }, {
    key: "resolveInputValues",
    value: function resolveInputValues(node, nodeType, nodes, context) {
      var _this2 = this;

      var inputs = nodeType.inputs;

      if (typeof inputs === "function") {
        inputs = inputs(node.inputData, node.connections, context);
      }

      return inputs.reduce(function (obj, input) {
        var inputConnections = node.connections.inputs[input.name] || [];

        if (inputConnections.length > 0) {
          obj[input.name] = _this2.getValueOfConnection(inputConnections[0], nodes, context);
        } else {
          obj[input.name] = _this2.resolveInputControls(input.type, node.inputData[input.name] || {}, context);
        }

        return obj;
      }, {});
    }
  }, {
    key: "getValueOfConnection",
    value: function getValueOfConnection(connection, nodes, context) {
      this.checkLoops();
      var outputNode = nodes[connection.nodeId];
      var outputNodeType = this.config.nodeTypes[outputNode.type];
      var inputValues = this.resolveInputValues(outputNode, outputNodeType, nodes, context);
      return this.fireNodeFunction(outputNode, inputValues, outputNodeType, context)[connection.portName];
    }
  }, {
    key: "resolveRootNode",
    value: function resolveRootNode(nodes) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rootNode = options.rootNodeId ? nodes[options.rootNodeId] : this.getRootNode(nodes);

      if (rootNode) {
        var inputs = this.config.nodeTypes[rootNode.type].inputs;

        if (typeof inputs === "function") {
          inputs = inputs(rootNode.inputData, rootNode.connections, options.context);
        }

        var controlValues = inputs.reduce(function (obj, input) {
          obj[input.name] = _this3.resolveInputControls(input.type, rootNode.inputData[input.name] || {}, options.context);
          return obj;
        }, {});
        var inputValues = this.reduceRootInputs(rootNode.connections.inputs, function (inputName, connection) {
          _this3.resetLoops(options.maxLoops);

          var value;

          try {
            value = _this3.getValueOfConnection(connection[0], nodes, options.context);
          } catch (e) {
            if (e.code === LoopError.maxLoopsExceeded) {
              console.error("".concat(e.message, " Circular nodes detected in ").concat(inputName, " port."));
            } else {
              console.error(e);
            }
          }

          return {
            name: inputName,
            value: value
          };
        });

        if (options.onlyResolveConnected) {
          return inputValues;
        } else {
          return _objectSpread$2(_objectSpread$2({}, controlValues), inputValues);
        }
      } else {
        console.error("A root node was not found. The Root Engine requires that exactly one node be marked as the root node.");
        return {};
      }
    }
  }]);

  return RootEngine;
}();

var u = e=>{var a=useRef(e);return useEffect(()=>{a.current=e;}),a};

var o=function(n,o,c){function i(){l.current&&clearTimeout(l.current),l.current=void 0;}function a(){l.current=void 0;}void 0===o&&(o=100),void 0===c&&(c=0);var v=u(n),l=useRef(),m=[o,c,v];return useEffect(()=>i,m),useCallback((function(){var r=arguments,{current:t}=l;if(void 0===t&&c)return l.current=setTimeout(a,o),v.current.apply(null,r);t&&clearTimeout(t),l.current=setTimeout(()=>{l.current=void 0,v.current.apply(null,r);},o);}),m)},c=(r,t,e)=>{var u=useState(r);return [u[0],o(u[1],t,e),u[1]]};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var tempStateReducer = function tempStateReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MULTISELECT':
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        multiselect: action.doEnable
      });

    case 'SET_STAGE':
      {
        var x = action.x,
            y = action.y,
            scale = action.scale;
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          stage: {
            scale: scale,
            translate: {
              x: x,
              y: y
            }
          }
        });
      }

    case 'SELECT_NODES':
      {
        var selectedNodes = action.selectedNodes;
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          selectedNodes: selectedNodes
        });
      }

    default:
      return state;
  }
};

var useNodeEditorController = (function (_ref) {
  var _ref$initialNodesStat = _ref.initialNodesState,
      initialNodesState = _ref$initialNodesStat === void 0 ? undefined : _ref$initialNodesStat,
      _ref$initialTempState = _ref.initialTempState,
      initialTempState = _ref$initialTempState === void 0 ? {
    multiselect: false,
    selectedNodes: [],
    stage: {
      scale: 1,
      translate: {
        x: 0,
        y: 0
      }
    }
  } : _ref$initialTempState,
      _ref$initialNodes = _ref.initialNodes,
      initialNodes = _ref$initialNodes === void 0 ? undefined : _ref$initialNodes,
      _ref$defaultNodes = _ref.defaultNodes,
      defaultNodes = _ref$defaultNodes === void 0 ? undefined : _ref$defaultNodes;

  var _useState = useState(null),
      _useState2 = _slicedToArray$1(_useState, 2),
      action = _useState2[0],
      setAction = _useState2[1];

  var _useState3 = useState(initialNodesState || {}),
      _useState4 = _slicedToArray$1(_useState3, 2),
      nodesState = _useState4[0],
      setNodesState = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray$1(_useState5, 2),
      comments = _useState6[0],
      setComments = _useState6[1];

  var _useReducer = useReducer(tempStateReducer, {
    initialTempState: initialTempState
  }, function () {
    return initialTempState;
  }),
      _useReducer2 = _slicedToArray$1(_useReducer, 2),
      tempState = _useReducer2[0],
      dispatchTemp = _useReducer2[1];

  var _useDebounce = c(tempState, 1000),
      _useDebounce2 = _slicedToArray$1(_useDebounce, 2),
      tempStateDebounced = _useDebounce2[0],
      setTempStateDebounced = _useDebounce2[1];

  var _useDebounce3 = c(tempState, 200),
      _useDebounce4 = _slicedToArray$1(_useDebounce3, 2),
      nodesStateDebounced = _useDebounce4[0],
      setNodesStateDebounced = _useDebounce4[1];

  useEffect(function () {
    setTempStateDebounced(tempState);
  }, [tempState]);
  useEffect(function () {
    setNodesStateDebounced(nodesState);
  }, [nodesState]);

  var dispatch = function dispatch(type) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return setAction(function () {
      return function () {
        return {
          type: type,
          data: data
        };
      };
    });
  };

  useEffect(function () {
    action && setAction(null);
  }, [action]);
  return [nodesStateDebounced, comments, dispatch, {
    action: action,
    setNodesState: setNodesState,
    setComments: setComments,
    initialNodes: initialNodes,
    initialNodesState: initialNodesState,
    defaultNodes: defaultNodes,
    temp: {
      state: tempState,
      dispatch: dispatchTemp
    }
  }, {
    state: tempStateDebounced,
    dispatch: dispatchTemp
  }];
});

var _excluded = ["initialNodes", "action", "setNodesState", "setComments", "defaultNodes", "temp", "initialNodesState"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultContext = {};
var NodeEditor = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _initialStageParams$t, _initialStageParams$t2;

  var initialComments = _ref.comments,
      _ref$nodeTypes = _ref.nodeTypes,
      nodeTypes = _ref$nodeTypes === void 0 ? {} : _ref$nodeTypes,
      _ref$portTypes = _ref.portTypes,
      portTypes = _ref$portTypes === void 0 ? {} : _ref$portTypes,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? defaultContext : _ref$context,
      _ref$connector = _ref.connector,
      _ref$connector$initia = _ref$connector.initialNodes,
      initialNodes = _ref$connector$initia === void 0 ? {} : _ref$connector$initia,
      connectorAction = _ref$connector.action,
      setNodesState = _ref$connector.setNodesState,
      setComments = _ref$connector.setComments,
      defaultNodes = _ref$connector.defaultNodes,
      _ref$connector$temp = _ref$connector.temp,
      tempState = _ref$connector$temp.state,
      dispatchTemp = _ref$connector$temp.dispatch,
      initialNodesState = _ref$connector.initialNodesState;
      _objectWithoutProperties(_ref$connector, _excluded);
      var _initialStageParams = _ref.initialStageParams,
      _ref$hideComments = _ref.hideComments,
      hideComments = _ref$hideComments === void 0 ? false : _ref$hideComments,
      _ref$disableComments = _ref.disableComments,
      disableComments = _ref$disableComments === void 0 ? false : _ref$disableComments,
      circularBehavior = _ref.circularBehavior,
      debug = _ref.debug;

  var editorId = useId();
  var cache = useRef(new Cache());
  var stage = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray$1(_useState, 2),
      sideEffectToasts = _useState2[0],
      setSideEffectToasts = _useState2[1];

  var _useReducer = useReducer(toastsReducer, []),
      _useReducer2 = _slicedToArray$1(_useReducer, 2),
      toasts = _useReducer2[0],
      dispatchToasts = _useReducer2[1];

  var editorRef = useRef();

  var _useState3 = useState(false),
      _useState4 = _slicedToArray$1(_useState3, 2),
      spaceIsPressed = _useState4[0],
      setSpaceIsPressed = _useState4[1];

  var _useReducer3 = useReducer(connectNodesReducer(nodesReducer$1, {
    nodeTypes: nodeTypes,
    portTypes: portTypes,
    cache: cache,
    circularBehavior: circularBehavior,
    context: context
  }, setSideEffectToasts), {}, function () {
    return initialNodesState || {
      nodesState: [{
        state: getInitialNodes(initialNodes, defaultNodes || [], nodeTypes, portTypes, context),
        action: {
          type: "INITIAL"
        }
      }],
      currentStateIndex: 0
    };
  }),
      _useReducer4 = _slicedToArray$1(_useReducer3, 2),
      _useReducer4$ = _useReducer4[0],
      nodesState = _useReducer4$.nodesState,
      currentStateIndex = _useReducer4$.currentStateIndex,
      dispatchNodes = _useReducer4[1];

  var _useReducer5 = useReducer(commentsReducer, initialComments || {}),
      _useReducer6 = _slicedToArray$1(_useReducer5, 2),
      comments = _useReducer6[0],
      dispatchComments = _useReducer6[1];

  var _useSelect = useSelect(nodesState[currentStateIndex].state || initialNodesState.nodesState[initialNodesState.currentStateIndex], nodesState[Math.max(currentStateIndex - 1, 0)].state || {}),
      _useSelect2 = _slicedToArray$1(_useSelect, 4),
      selectedNodes = _useSelect2[0],
      nodeRefs = _useSelect2[1],
      handleSelection = _useSelect2[2],
      clearSelection = _useSelect2[3];

  var undoChanges = function undoChanges() {
    dispatchNodes({
      type: "UNDO_CHANGES"
    });
    clearConnections();
    triggerRecalculation();
  };

  var redoChanges = function redoChanges() {
    dispatchNodes({
      type: "REDO_CHANGES"
    });
    clearConnections();
    triggerRecalculation();
  };

  useEffect(function () {
    if (connectorAction) {
      var _connectorAction = connectorAction(),
          type = _connectorAction.type,
          data = _connectorAction.data;

      switch (type) {
        case "UNDO":
          undoChanges();
          break;

        case "REDO":
          redoChanges();
          break;

        case "COPY":
          dispatchNodes({
            type: "COPY_NODES",
            selectedNodeIds: selectedNodes
          });
          break;

        case "CUT":
          dispatchNodes({
            type: "CUT_NODES",
            selectedNodeIds: selectedNodes
          });
          clearConnections();
          triggerRecalculation();
          break;

        case "PASTE":
          dispatchNodes({
            type: "PASTE_NODES"
          });
          clearConnections();
          triggerRecalculation();
          break;

        case "TOGGLE_NODES_VIEW":
          {
            var nodeIds = data.nodeIds,
                doExpand = data.doExpand;
            nodeIds.forEach(function (id) {
              dispatchNodes({
                type: "TOGGLE_NODE_VIEW",
                id: id,
                doExpand: doExpand
              });
            });
            break;
          }

        case "ADD_NODE":
          {
            var x = data.x,
                y = data.y,
                _type = data.type;
            dispatchNodes({
              type: "ADD_NODE",
              x: x,
              y: y,
              nodeType: _type
            });
            break;
          }
      }
    }
  }, [connectorAction, redoChanges, selectedNodes, undoChanges]);
  useEffect(function () {
    !currentStateIndex && dispatchNodes({
      type: "HYDRATE_DEFAULT_NODES"
    });
  }, []);

  var _useState5 = useState(true),
      _useState6 = _slicedToArray$1(_useState5, 2),
      shouldRecalculateConnections = _useState6[0],
      setShouldRecalculateConnections = _useState6[1];

  var initialStageParams = _initialStageParams || tempState.stage;

  var _useReducer7 = useReducer(stageReducer, {
    scale: typeof (initialStageParams === null || initialStageParams === void 0 ? void 0 : initialStageParams.scale) === "number" ? clamp_1(initialStageParams === null || initialStageParams === void 0 ? void 0 : initialStageParams.scale, 0.1, 7) : 1,
    translate: {
      x: typeof (initialStageParams === null || initialStageParams === void 0 ? void 0 : (_initialStageParams$t = initialStageParams.translate) === null || _initialStageParams$t === void 0 ? void 0 : _initialStageParams$t.x) === "number" ? initialStageParams.translate.x : 0,
      y: typeof (initialStageParams === null || initialStageParams === void 0 ? void 0 : (_initialStageParams$t2 = initialStageParams.translate) === null || _initialStageParams$t2 === void 0 ? void 0 : _initialStageParams$t2.y) === "number" ? initialStageParams.translate.y : 0
    }
  }),
      _useReducer8 = _slicedToArray$1(_useReducer7, 2),
      stageState = _useReducer8[0],
      dispatchStageState = _useReducer8[1];

  useCallback(function () {
    if (!_.isEqual(stageState, tempState.stage)) {
      var _stageState$translate = stageState.translate,
          x = _stageState$translate.x,
          y = _stageState$translate.y,
          scale = stageState.scale;
      dispatchTemp({
        type: "SET_STAGE",
        scale: scale,
        x: x,
        y: y
      });
    }

    if (!_.isEqual(selectedNodes, tempState.selectedNodes)) {
      dispatchTemp({
        type: "SELECT_NODES",
        selectedNodes: selectedNodes
      });
    }
  }, [stageState, tempState.stage, tempState.selectedNodes, dispatchTemp, selectedNodes]);
  var recalculateConnections = useCallback(function () {
    createConnections(nodesState[currentStateIndex].state, stageState, editorId);
  }, [currentStateIndex, nodesState, editorId, stageState]);
  var recalculateStageRect = useCallback(function () {
    stage.current = document.getElementById("".concat(STAGE_ID).concat(editorId)).getBoundingClientRect();
  }, [stage.current, editorId]);
  useLayoutEffect(function () {
    if (shouldRecalculateConnections) {
      recalculateConnections();
      setShouldRecalculateConnections(false);
    }
  }, [shouldRecalculateConnections, recalculateConnections]);

  var handleDragEnd = function handleDragEnd(e, id, coordinates) {
    if (selectedNodes.length > 0) {
      dispatchNodes({
        type: "SET_MULTIPLE_NODES_COORDINATES",
        nodesInfo: selectedNodes.map(function (id) {
          var nodeRef = nodeRefs.find(function (_ref2) {
            var _ref3 = _slicedToArray$1(_ref2, 1),
                nId = _ref3[0].id;

            return nId === id;
          })[1];
          var newPositions = nodeRef.current.style.transform.match(/^translate\((-?[\d.\\]+)px, ?(-?[\d.\\]+)px\)?/);
          return {
            nodeId: id,
            x: newPositions[1],
            y: newPositions[2]
          };
        })
      });
    } else {
      dispatchNodes(_objectSpread(_objectSpread({
        type: "SET_NODE_COORDINATES"
      }, coordinates), {}, {
        nodeId: id
      }));
    }

    triggerRecalculation();
  }; // eslint-disable-next-line react/jsx-no-constructed-context-values


  var triggerRecalculation = function triggerRecalculation() {
    setShouldRecalculateConnections(true);
  };

  var dragSelectedNodes = function dragSelectedNodes(excludedNodeId, deltaX, deltaY) {
    if (selectedNodes.length > 0) {
      if (selectedNodes.includes(excludedNodeId)) {
        selectedNodes.forEach(function (id) {
          if (id !== excludedNodeId) {
            var nodeRef = nodeRefs.find(function (_ref4) {
              var _ref5 = _slicedToArray$1(_ref4, 1),
                  nId = _ref5[0].id;

              return nId === id;
            })[1];
            var oldPositions = nodeRef.current.style.transform.match(/^translate\((-?[\d.\\]+)px, ?(-?[\d.\\]+)px\)?/);

            if (oldPositions.length === 3) {
              nodeRef.current.style.transform = "translate(".concat(Number(oldPositions[1]) + deltaX, "px,").concat(Number(oldPositions[2]) + deltaY, "px)");
            }
          }
        });
        recalculateConnections();
      } else {
        clearSelection();
      }
    }
  };

  useImperativeHandle(ref, function () {
    return {
      getNodes: function getNodes() {
        return nodesState[currentStateIndex].state;
      },
      getComments: function getComments() {
        return comments;
      }
    };
  });
  useMemo(function () {
    nodesState[Math.max(currentStateIndex - 1, 0)].state && nodesState[currentStateIndex].state !== nodesState[Math.max(currentStateIndex - 1, 0)].state && setNodesState && setNodesState({
      nodesState: nodesState,
      currentStateIndex: currentStateIndex
    });
  }, [nodesState, currentStateIndex, setNodesState]);
  var previousComments = usePrevious$1(comments);
  useEffect(function () {
    previousComments && comments !== previousComments && setComments && setComments(comments);
  }, [comments, previousComments, setComments]);
  useEffect(function () {
    if (sideEffectToasts) {
      dispatchToasts(sideEffectToasts);
      setSideEffectToasts(null);
    }
  }, [sideEffectToasts]);
  return /*#__PURE__*/React__default.createElement(PortTypesContext.Provider, {
    value: portTypes
  }, /*#__PURE__*/React__default.createElement(NodeTypesContext.Provider, {
    value: nodeTypes
  }, /*#__PURE__*/React__default.createElement(NodeDispatchContext.Provider, {
    value: dispatchNodes
  }, /*#__PURE__*/React__default.createElement(ConnectionRecalculateContext.Provider, {
    value: triggerRecalculation
  }, /*#__PURE__*/React__default.createElement(ContextContext.Provider, {
    value: context
  }, /*#__PURE__*/React__default.createElement(StageContext.Provider, {
    value: stageState
  }, /*#__PURE__*/React__default.createElement(CacheContext.Provider, {
    value: cache
  }, /*#__PURE__*/React__default.createElement(EditorIdContext.Provider, {
    value: editorId
  }, /*#__PURE__*/React__default.createElement(RecalculateStageRectContext.Provider, {
    value: recalculateStageRect
  }, editorRef.current && /*#__PURE__*/React__default.createElement(_default, {
    target: editorRef.current,
    elements: nodeRefs.map(function (n) {
      return n[1].current;
    }),
    onSelectionChange: function onSelectionChange(i) {
      return spaceIsPressed || handleSelection(i, tempState.multiselect);
    },
    offset: {
      top: 0,
      left: 0
    },
    ignoreTargets: ['div[class^="Node_wrapper__"]', 'div[class^="Node_wrapper__"] *', 'div[class^="Comment_wrapper__"]', 'div[class^="Comment_wrapper__"] *'],
    style: spaceIsPressed ? {
      display: "none"
    } : {
      zIndex: 100
    }
  }), /*#__PURE__*/React__default.createElement(Stage, {
    ref: editorRef,
    editorId: editorId,
    setSpaceIsPressed: setSpaceIsPressed,
    scale: stageState.scale,
    translate: stageState.translate,
    spaceToPan: true,
    disablePan: false,
    disableZoom: false,
    dispatchStageState: dispatchStageState,
    dispatchComments: dispatchComments,
    disableComments: disableComments || hideComments,
    stageRef: stage,
    numNodes: Object.keys(nodesState[currentStateIndex].state).length,
    outerStageChildren: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, debug && /*#__PURE__*/React__default.createElement("div", {
      className: styles.debugWrapper
    }, /*#__PURE__*/React__default.createElement("button", {
      className: styles.debugButton,
      onClick: function onClick() {
        return console.log(nodesState[currentStateIndex].state);
      }
    }, "Log Nodes"), /*#__PURE__*/React__default.createElement("button", {
      className: styles.debugButton,
      onClick: function onClick() {
        return console.log(JSON.stringify(nodesState[currentStateIndex].state));
      }
    }, "Export Nodes"), /*#__PURE__*/React__default.createElement("button", {
      className: styles.debugButton,
      onClick: function onClick() {
        return console.log(comments);
      }
    }, "Log Comments")), /*#__PURE__*/React__default.createElement(Toaster, {
      toasts: toasts,
      dispatchToasts: dispatchToasts
    }))
  }, !hideComments && Object.values(comments).map(function (comment) {
    return /*#__PURE__*/React__default.createElement(Comment, _extends$3({}, comment, {
      stageRect: stage,
      dispatch: dispatchComments,
      onDragStart: recalculateStageRect,
      key: comment.id
    }));
  }), Object.values(nodesState[currentStateIndex].state).map(function (node) {
    return /*#__PURE__*/React__default.createElement(Node, _extends$3({}, node, {
      isSelected: selectedNodes.includes(node.id),
      ref: nodeRefs.find(function (_ref6) {
        var _ref7 = _slicedToArray$1(_ref6, 1),
            n = _ref7[0];

        return n.id === node.id;
      }) ? nodeRefs.find(function (_ref8) {
        var _ref9 = _slicedToArray$1(_ref8, 1),
            n = _ref9[0];

        return n.id === node.id;
      })[1] : /*#__PURE__*/createRef(),
      stageRect: stage,
      onDragEnd: handleDragEnd,
      onDragHandle: dragSelectedNodes,
      onDragStart: recalculateStageRect,
      key: node.id
    }));
  }), /*#__PURE__*/React__default.createElement(Connections, {
    nodes: nodesState[currentStateIndex].state,
    editorId: editorId
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles.dragWrapper,
    id: "".concat(DRAG_CONNECTION_ID).concat(editorId)
  })))))))))));
});
NodeEditor.displayName = "NodeEditor";
var useRootEngine = function useRootEngine(nodes, engine, context) {
  return Object.keys(nodes).length > 0 ? engine.resolveRootNode(nodes, {
    context: context
  }) : {};
};

export { Colors, Controls, FlumeConfig, NodeEditor, RootEngine, index as monaco, editorTheme$1 as monacoTheme, useNodeEditorController, useRootEngine };
//# sourceMappingURL=index.es.js.map
