'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _draftJsButtons = require('draft-js-buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-array-index-key */


var Toolbar = function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isVisible: false,
      position: undefined,

      /**
       * If this is set, the toolbar will render this instead of the children
       * prop and will also be shown when the editor loses focus.
       * @type {Component}
       */
      overrideContent: undefined
    }, _this.onOverrideContent = function (overrideContent) {
      _this.setState({ overrideContent: overrideContent });
    }, _this.onSelectionChanged = function () {
      // need to wait a tick for window.getSelection() to be accurate
      // when focusing editor with already present selection
      setTimeout(function () {
        if (!_this.toolbar) return;

        // The editor root should be two levels above the node from
        // `getEditorRef`. In case this changes in the future, we
        // attempt to find the node dynamically by traversing upwards.
        var editorRef = _this.props.store.getItem('getEditorRef')();
        if (!editorRef) return;

        // This keeps backwards compatibility with React 15
        var editorRoot = editorRef.refs && editorRef.refs.editor ? editorRef.refs.editor : editorRef.editor;
        while (editorRoot.className.indexOf('DraftEditor-root') === -1) {
          editorRoot = editorRoot.parentNode;
        }
        var editorRootRect = editorRoot.getBoundingClientRect();

        var selectionRect = (0, _draftJs.getVisibleSelectionRect)(window);
        if (!selectionRect) return;

        // The toolbar shouldn't be positioned directly on top of the selected text,
        // but rather with a small offset so the caret doesn't overlap with the text.
        var extraTopOffset = -5;

        var position = {
          top: editorRoot.offsetTop - _this.toolbar.offsetHeight + (selectionRect.top - editorRootRect.top) + extraTopOffset,
          left: editorRoot.offsetLeft + (selectionRect.left - editorRootRect.left) + selectionRect.width / 2
        };
        _this.setState({ position: position });
      });
    }, _this.handleToolbarRef = function (node) {
      _this.toolbar = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toolbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.store.subscribeToItem('selection', this.onSelectionChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unsubscribeFromItem('selection', this.onSelectionChanged);
    }

    /**
     * This can be called by a child in order to render custom content instead
     * of the children prop. It's the responsibility of the callee to call
     * this function again with `undefined` in order to reset `overrideContent`.
     * @param {Component} overrideContent
     */

  }, {
    key: 'getStyle',
    value: function getStyle() {
      var store = this.props.store;
      var _state = this.state,
          overrideContent = _state.overrideContent,
          position = _state.position;

      var selection = store.getItem('getEditorState')().getSelection();
      // overrideContent could for example contain a text input, hence we always show overrideContent
      // TODO: Test readonly mode and possibly set isVisible to false if the editor is readonly
      var isVisible = !selection.isCollapsed() && selection.getHasFocus() || overrideContent;
      var style = _extends({}, position);

      if (isVisible) {
        style.visibility = 'visible';
        style.transform = 'translate(-50%) scale(1)';
        style.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)';
      } else {
        style.transform = 'translate(-50%) scale(0)';
        style.visibility = 'hidden';
      }

      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          store = _props.store;
      var OverrideContent = this.state.overrideContent;

      var childrenProps = {
        theme: theme.buttonStyles,
        getEditorState: store.getItem('getEditorState'),
        setEditorState: store.getItem('setEditorState'),
        onOverrideContent: this.onOverrideContent
      };

      return _react2.default.createElement(
        'div',
        {
          className: theme.toolbarStyles.toolbar,
          style: this.getStyle(),
          ref: this.handleToolbarRef
        },
        OverrideContent ? _react2.default.createElement(OverrideContent, childrenProps) : this.props.children(childrenProps)
      );
    }
  }]);

  return Toolbar;
}(_react2.default.Component);

Toolbar.defaultProps = {
  children: function children(externalProps) {
    return (
      // may be use React.Fragment instead of div to improve perfomance after React 16
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_draftJsButtons.ItalicButton, externalProps),
        _react2.default.createElement(_draftJsButtons.BoldButton, externalProps),
        _react2.default.createElement(_draftJsButtons.UnderlineButton, externalProps),
        _react2.default.createElement(_draftJsButtons.CodeButton, externalProps)
      )
    );
  }
};
exports.default = Toolbar;