/*! For license information please see neeto-icons.js.LICENSE.txt */
!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.neeto_icons = r())
    : (e.neeto_icons = r());
})(self, function () {
  return (() => {
    var e = {
        418: (e) => {
          "use strict";
          var r = Object.getOwnPropertySymbols,
            t = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
          function n(e) {
            if (null == e)
              throw new TypeError(
                "Object.assign cannot be called with null or undefined"
              );
            return Object(e);
          }
          e.exports = (function () {
            try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                return !1;
              for (var r = {}, t = 0; t < 10; t++)
                r["_" + String.fromCharCode(t)] = t;
              if (
                "0123456789" !==
                Object.getOwnPropertyNames(r)
                  .map(function (e) {
                    return r[e];
                  })
                  .join("")
              )
                return !1;
              var o = {};
              return (
                "abcdefghijklmnopqrst".split("").forEach(function (e) {
                  o[e] = e;
                }),
                "abcdefghijklmnopqrst" ===
                  Object.keys(Object.assign({}, o)).join("")
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Object.assign
            : function (e, i) {
                for (var s, l, a = n(e), u = 1; u < arguments.length; u++) {
                  for (var c in (s = Object(arguments[u])))
                    t.call(s, c) && (a[c] = s[c]);
                  if (r) {
                    l = r(s);
                    for (var p = 0; p < l.length; p++)
                      o.call(s, l[p]) && (a[l[p]] = s[l[p]]);
                  }
                }
                return a;
              };
        },
        703: (e, r, t) => {
          "use strict";
          var o = t(414);
          function n() {}
          function i() {}
          (i.resetWarningCache = n),
            (e.exports = function () {
              function e(e, r, t, n, i, s) {
                if (s !== o) {
                  var l = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((l.name = "Invariant Violation"), l);
                }
              }
              function r() {
                return e;
              }
              e.isRequired = e;
              var t = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: r,
                element: e,
                elementType: e,
                instanceOf: r,
                node: e,
                objectOf: r,
                oneOf: r,
                oneOfType: r,
                shape: r,
                exact: r,
                checkPropTypes: i,
                resetWarningCache: n,
              };
              return (t.PropTypes = t), t;
            });
        },
        697: (e, r, t) => {
          e.exports = t(703)();
        },
        414: (e) => {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        408: (e, r, t) => {
          "use strict";
          var o = t(418),
            n = 60103,
            i = 60106;
          (r.Fragment = 60107), (r.StrictMode = 60108), (r.Profiler = 60114);
          var s = 60109,
            l = 60110,
            a = 60112;
          r.Suspense = 60113;
          var u = 60115,
            c = 60116;
          if ("function" == typeof Symbol && Symbol.for) {
            var p = Symbol.for;
            (n = p("react.element")),
              (i = p("react.portal")),
              (r.Fragment = p("react.fragment")),
              (r.StrictMode = p("react.strict_mode")),
              (r.Profiler = p("react.profiler")),
              (s = p("react.provider")),
              (l = p("react.context")),
              (a = p("react.forward_ref")),
              (r.Suspense = p("react.suspense")),
              (u = p("react.memo")),
              (c = p("react.lazy"));
          }
          var f = "function" == typeof Symbol && Symbol.iterator;
          function d(e) {
            for (
              var r =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                t = 1;
              t < arguments.length;
              t++
            )
              r += "&args[]=" + encodeURIComponent(arguments[t]);
            return (
              "Minified React error #" +
              e +
              "; visit " +
              r +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          var h = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            k = {};
          function y(e, r, t) {
            (this.props = e),
              (this.context = r),
              (this.refs = k),
              (this.updater = t || h);
          }
          function O() {}
          function C(e, r, t) {
            (this.props = e),
              (this.context = r),
              (this.refs = k),
              (this.updater = t || h);
          }
          (y.prototype.isReactComponent = {}),
            (y.prototype.setState = function (e, r) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(d(85));
              this.updater.enqueueSetState(this, e, r, "setState");
            }),
            (y.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (O.prototype = y.prototype);
          var g = (C.prototype = new O());
          (g.constructor = C), o(g, y.prototype), (g.isPureReactComponent = !0);
          var b = { current: null },
            v = Object.prototype.hasOwnProperty,
            m = { key: !0, ref: !0, __self: !0, __source: !0 };
          function j(e, r, t) {
            var o,
              i = {},
              s = null,
              l = null;
            if (null != r)
              for (o in (void 0 !== r.ref && (l = r.ref),
              void 0 !== r.key && (s = "" + r.key),
              r))
                v.call(r, o) && !m.hasOwnProperty(o) && (i[o] = r[o]);
            var a = arguments.length - 2;
            if (1 === a) i.children = t;
            else if (1 < a) {
              for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
              i.children = u;
            }
            if (e && e.defaultProps)
              for (o in (a = e.defaultProps)) void 0 === i[o] && (i[o] = a[o]);
            return {
              $$typeof: n,
              type: e,
              key: s,
              ref: l,
              props: i,
              _owner: b.current,
            };
          }
          function L(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }
          var W = /\/+/g;
          function w(e, r) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var r = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return r[e];
                    })
                  );
                })("" + e.key)
              : r.toString(36);
          }
          function E(e, r, t, o, s) {
            var l = typeof e;
            ("undefined" !== l && "boolean" !== l) || (e = null);
            var a = !1;
            if (null === e) a = !0;
            else
              switch (l) {
                case "string":
                case "number":
                  a = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case n:
                    case i:
                      a = !0;
                  }
              }
            if (a)
              return (
                (s = s((a = e))),
                (e = "" === o ? "." + w(a, 0) : o),
                Array.isArray(s)
                  ? ((t = ""),
                    null != e && (t = e.replace(W, "$&/") + "/"),
                    E(s, r, t, "", function (e) {
                      return e;
                    }))
                  : null != s &&
                    (L(s) &&
                      (s = (function (e, r) {
                        return {
                          $$typeof: n,
                          type: e.type,
                          key: r,
                          ref: e.ref,
                          props: e.props,
                          _owner: e._owner,
                        };
                      })(
                        s,
                        t +
                          (!s.key || (a && a.key === s.key)
                            ? ""
                            : ("" + s.key).replace(W, "$&/") + "/") +
                          e
                      )),
                    r.push(s)),
                1
              );
            if (((a = 0), (o = "" === o ? "." : o + ":"), Array.isArray(e)))
              for (var u = 0; u < e.length; u++) {
                var c = o + w((l = e[u]), u);
                a += E(l, r, t, c, s);
              }
            else if (
              "function" ==
              typeof (c = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (f && e[f]) || e["@@iterator"])
                  ? e
                  : null;
              })(e))
            )
              for (e = c.call(e), u = 0; !(l = e.next()).done; )
                a += E((l = l.value), r, t, (c = o + w(l, u++)), s);
            else if ("object" === l)
              throw (
                ((r = "" + e),
                Error(
                  d(
                    31,
                    "[object Object]" === r
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : r
                  )
                ))
              );
            return a;
          }
          function P(e, r, t) {
            if (null == e) return e;
            var o = [],
              n = 0;
            return (
              E(e, o, "", "", function (e) {
                return r.call(t, e, n++);
              }),
              o
            );
          }
          function z(e) {
            if (-1 === e._status) {
              var r = e._result;
              (r = r()),
                (e._status = 0),
                (e._result = r),
                r.then(
                  function (r) {
                    0 === e._status &&
                      ((r = r.default), (e._status = 1), (e._result = r));
                  },
                  function (r) {
                    0 === e._status && ((e._status = 2), (e._result = r));
                  }
                );
            }
            if (1 === e._status) return e._result;
            throw e._result;
          }
          var M = { current: null };
          function x() {
            var e = M.current;
            if (null === e) throw Error(d(321));
            return e;
          }
          var T = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: { transition: 0 },
            ReactCurrentOwner: b,
            IsSomeRendererActing: { current: !1 },
            assign: o,
          };
          (r.Children = {
            map: P,
            forEach: function (e, r, t) {
              P(
                e,
                function () {
                  r.apply(this, arguments);
                },
                t
              );
            },
            count: function (e) {
              var r = 0;
              return (
                P(e, function () {
                  r++;
                }),
                r
              );
            },
            toArray: function (e) {
              return (
                P(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!L(e)) throw Error(d(143));
              return e;
            },
          }),
            (r.Component = y),
            (r.PureComponent = C),
            (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
            (r.cloneElement = function (e, r, t) {
              if (null == e) throw Error(d(267, e));
              var i = o({}, e.props),
                s = e.key,
                l = e.ref,
                a = e._owner;
              if (null != r) {
                if (
                  (void 0 !== r.ref && ((l = r.ref), (a = b.current)),
                  void 0 !== r.key && (s = "" + r.key),
                  e.type && e.type.defaultProps)
                )
                  var u = e.type.defaultProps;
                for (c in r)
                  v.call(r, c) &&
                    !m.hasOwnProperty(c) &&
                    (i[c] = void 0 === r[c] && void 0 !== u ? u[c] : r[c]);
              }
              var c = arguments.length - 2;
              if (1 === c) i.children = t;
              else if (1 < c) {
                u = Array(c);
                for (var p = 0; p < c; p++) u[p] = arguments[p + 2];
                i.children = u;
              }
              return {
                $$typeof: n,
                type: e.type,
                key: s,
                ref: l,
                props: i,
                _owner: a,
              };
            }),
            (r.createContext = function (e, r) {
              return (
                void 0 === r && (r = null),
                ((e = {
                  $$typeof: l,
                  _calculateChangedBits: r,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }).Provider = { $$typeof: s, _context: e }),
                (e.Consumer = e)
              );
            }),
            (r.createElement = j),
            (r.createFactory = function (e) {
              var r = j.bind(null, e);
              return (r.type = e), r;
            }),
            (r.createRef = function () {
              return { current: null };
            }),
            (r.forwardRef = function (e) {
              return { $$typeof: a, render: e };
            }),
            (r.isValidElement = L),
            (r.lazy = function (e) {
              return {
                $$typeof: c,
                _payload: { _status: -1, _result: e },
                _init: z,
              };
            }),
            (r.memo = function (e, r) {
              return { $$typeof: u, type: e, compare: void 0 === r ? null : r };
            }),
            (r.useCallback = function (e, r) {
              return x().useCallback(e, r);
            }),
            (r.useContext = function (e, r) {
              return x().useContext(e, r);
            }),
            (r.useDebugValue = function () {}),
            (r.useEffect = function (e, r) {
              return x().useEffect(e, r);
            }),
            (r.useImperativeHandle = function (e, r, t) {
              return x().useImperativeHandle(e, r, t);
            }),
            (r.useLayoutEffect = function (e, r) {
              return x().useLayoutEffect(e, r);
            }),
            (r.useMemo = function (e, r) {
              return x().useMemo(e, r);
            }),
            (r.useReducer = function (e, r, t) {
              return x().useReducer(e, r, t);
            }),
            (r.useRef = function (e) {
              return x().useRef(e);
            }),
            (r.useState = function (e) {
              return x().useState(e);
            }),
            (r.version = "17.0.2");
        },
        976: (e, r, t) => {
          "use strict";
          e.exports = t(408);
        },
      },
      r = {};
    function t(o) {
      var n = r[o];
      if (void 0 !== n) return n.exports;
      var i = (r[o] = { exports: {} });
      return e[o](i, i.exports, t), i.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var o in r)
          t.o(r, o) &&
            !t.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var o = {};
    return (
      (() => {
        "use strict";
        t.r(o),
          t.d(o, {
            Blockquote: () => l,
            Calendar: () => c,
            Check: () => d,
            Clock: () => y,
            Close: () => g,
            Code: () => m,
            Copy: () => W,
            Dashboard: () => P,
            Delete: () => x,
            Design: () => S,
            Down: () => R,
            DownArrow: () => B,
            Edit: () => A,
            Email: () => F,
            Error: () => K,
            ExternalLink: () => Q,
            Eye: () => re,
            Favorite: () => ne,
            Filter: () => ce,
            FilterAz: () => le,
            Globe: () => de,
            Graph: () => ye,
            Highlight: () => ge,
            Home: () => me,
            Image: () => Pe,
            ImageUpload: () => We,
            Keyboard: () => xe,
            Left: () => Be,
            LeftArrow: () => Se,
            Link: () => Re,
            ListDot: () => Ae,
            ListNumber: () => Fe,
            Loading: () => Ke,
            Location: () => Qe,
            Lock: () => rr,
            MenuHorizontal: () => nr,
            MenuVertical: () => lr,
            Message: () => cr,
            Minus: () => dr,
            Neeto: () => Rr,
            NeetoAnalytics: () => yr,
            NeetoCal: () => gr,
            NeetoChangelog: () => mr,
            NeetoChat: () => Wr,
            NeetoDesk: () => Pr,
            NeetoForm: () => xr,
            NeetoIcon: () => Sr,
            NeetoKb: () => Br,
            Notification: () => Ar,
            Paragraph: () => Fr,
            Plus: () => Kr,
            Print: () => Qr,
            Rating: () => rt,
            Refresh: () => nt,
            Right: () => ct,
            RightArrow: () => lt,
            Search: () => dt,
            Settings: () => yt,
            Share: () => gt,
            TextBold: () => mt,
            TextCross: () => Wt,
            TextH1: () => Pt,
            TextH2: () => xt,
            TextItalic: () => St,
            Translate: () => Bt,
            Up: () => At,
            UpArrow: () => Rt,
            UserCircle: () => Ft,
            UserRemove: () => Kt,
            Video: () => Qt,
            iconList: () => Xt,
          });
        var e = t(976),
          r = t(697),
          n = t.n(r),
          i = ["size", "color", "strokeWidth"];
        function s() {
          return (s =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function l(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            l = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, i);
          return e.createElement(
            "svg",
            s({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, l),
            e.createElement("path", {
              d: "M20.667 20.125H3.33301M20.667 14.708H3.33301M20.667 9.292H16.334M20.667 3.875H16.334M9.29201 6.042H12C12.299 6.042 12.542 6.285 12.542 6.584V8.75C12.542 9.049 12.299 9.292 12 9.292H9.83301C9.53401 9.292 9.29101 9.049 9.29101 8.75L9.29201 6.042ZM9.29201 6.042C9.29201 3.875 9.69801 3.515 10.917 2.792M3.33301 6.042H6.04101C6.34001 6.042 6.58301 6.285 6.58301 6.584V8.75C6.58301 9.049 6.34001 9.292 6.04101 9.292H3.87501C3.57601 9.292 3.33301 9.049 3.33301 8.75V6.042ZM3.33301 6.042C3.33301 3.875 3.73901 3.515 4.95801 2.792",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (l.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (l.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var a = ["size", "color", "strokeWidth"];
        function u() {
          return (u =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function c(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, a);
          return e.createElement(
            "svg",
            u({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18 4.5H6C4.34315 4.5 3 5.84315 3 7.5V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V7.5C21 5.84315 19.6569 4.5 18 4.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M17 16.9862H7",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M7.5 3V6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16.5 3V6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (c.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (c.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var p = ["size", "color", "strokeWidth"];
        function f() {
          return (f =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function d(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, p);
          return e.createElement(
            "svg",
            f({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17.5 9L9 17.5L5 13.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (d.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (d.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var h = ["size", "color", "strokeWidth"];
        function k() {
          return (k =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function y(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, h);
          return e.createElement(
            "svg",
            k({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M8.55691 3.68699C13.1479 1.78499 18.4109 3.96599 20.3129 8.55699C22.2149 13.148 20.0339 18.411 15.4429 20.313C10.8519 22.215 5.58891 20.034 3.68691 15.443C1.78591 10.852 3.96591 5.58899 8.55691 3.68699",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M11.7178 7.98499V12.636L15.3738 14.865",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (y.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (y.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var O = ["size", "color", "strokeWidth"];
        function C() {
          return (C =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function g(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, O);
          return e.createElement(
            "svg",
            C({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M6 6L18 18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18 6L6 18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (g.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (g.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var b = ["size", "color", "strokeWidth"];
        function v() {
          return (v =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function m(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, b);
          return e.createElement(
            "svg",
            v({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M13.78 4L10.22 20M18 8L22 12L18 16M6 16L2 12L6 8",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (m.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (m.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var j = ["size", "color", "strokeWidth"];
        function L() {
          return (L =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function W(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, j);
          return e.createElement(
            "svg",
            L({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M5.167 16C3.97 16 3 15.03 3 13.833V5.167C3 3.97 3.97 3 5.167 3H13.834C15.03 3 16 3.97 16 5.167",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18.833 21H10.166C8.97 21 8 20.03 8 18.833V10.166C8 8.97 8.97 8 10.167 8H18.834C20.03 8 21 8.97 21 10.167V18.834C21 20.03 20.03 21 18.833 21V21Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (W.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (W.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var w = ["size", "color", "strokeWidth"];
        function E() {
          return (E =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function P(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, w);
          return e.createElement(
            "svg",
            E({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              e.createElement("path", {
                d: "M8 10H5C3.895 10 3 9.105 3 8V5C3 3.895 3.895 3 5 3H8C9.105 3 10 3.895 10 5V8C10 9.105 9.105 10 8 10Z",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M19 10H16C14.895 10 14 9.105 14 8V5C14 3.895 14.895 3 16 3H19C20.105 3 21 3.895 21 5V8C21 9.105 20.105 10 19 10Z",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M8 21H5C3.895 21 3 20.105 3 19V16C3 14.895 3.895 14 5 14H8C9.105 14 10 14.895 10 16V19C10 20.105 9.105 21 8 21Z",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M19 21H16C14.895 21 14 20.105 14 19V16C14 14.895 14.895 14 16 14H19C20.105 14 21 14.895 21 16V19C21 20.105 20.105 21 19 21Z",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            ),
            e.createElement(
              "defs",
              null,
              e.createElement(
                "clipPath",
                { id: "clip0" },
                e.createElement("rect", { width: "24", height: "24", fill: o })
              )
            )
          );
        }
        (P.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (P.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var z = ["size", "color", "strokeWidth"];
        function M() {
          return (M =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function x(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, z);
          return e.createElement(
            "svg",
            M({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M15.5414 21H8.45857C7.89171 21 7.34573 20.786 6.92981 20.4009C6.51389 20.0157 6.25868 19.4878 6.2152 18.9226L5.25 6.375H18.75L17.7848 18.9226C17.7413 19.4878 17.4861 20.0157 17.0702 20.4009C16.6543 20.786 16.1083 21 15.5414 21V21Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M20 6.375H4",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9.1875 3H14.8125C15.1109 3 15.397 3.11853 15.608 3.3295C15.819 3.54048 15.9375 3.82663 15.9375 4.125V6.375H8.0625V4.125C8.0625 3.82663 8.18103 3.54048 8.392 3.3295C8.60298 3.11853 8.88913 3 9.1875 3V3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10 17H14",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (x.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (x.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var T = ["size", "color", "strokeWidth"];
        function H() {
          return (H =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function S(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, T);
          return e.createElement(
            "svg",
            H({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12.4062 15.2097L9.38175 15.9658C9.19558 16.0124 9.00053 16.0099 8.8156 15.9587C8.63066 15.9074 8.46215 15.8092 8.32645 15.6735C8.19076 15.5378 8.09252 15.3693 8.0413 15.1844C7.99007 14.9994 7.98761 14.8044 8.03416 14.6182L8.79216 11.5862C8.95331 10.9416 9.32564 10.3695 9.84979 9.96118C10.3739 9.55282 11.0197 9.33171 11.6842 9.33311H11.692C12.4818 9.33477 13.2387 9.6498 13.7964 10.209C14.3542 10.7682 14.6673 11.5259 14.6669 12.3157C14.6666 12.9811 14.4439 13.6272 14.0344 14.1516C13.6248 14.6759 13.0517 15.0483 12.4062 15.2097V15.2097Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M20.8801 6.92001C19.0011 8.79687 16.8987 10.4358 14.6201 11.8",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12.2002 9.37999C13.5665 7.10247 15.2016 4.99738 17.0702 3.10999",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (S.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (S.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var V = ["size", "color", "strokeWidth"];
        function I() {
          return (I =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function B(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, V);
          return e.createElement(
            "svg",
            I({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 16V8",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M15 13L12 16L9 13",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (B.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (B.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Z = ["size", "color", "strokeWidth"];
        function _() {
          return (_ =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function R(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Z);
          return e.createElement(
            "svg",
            _({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M6 9L12 15L18 9",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (R.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (R.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var N = ["size", "color", "strokeWidth"];
        function $() {
          return ($ =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function A(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, N);
          return e.createElement(
            "svg",
            $({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M21 12V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H12",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19 8L16 5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M8 17H16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M17.3796 3.62044L11.7948 9.20544C11.4888 9.51146 11.2903 9.90848 11.2291 10.3369L11.0104 11.8679C10.9889 12.0187 11.0024 12.1725 11.0499 12.3173C11.0974 12.462 11.1776 12.5939 11.2843 12.7027C11.391 12.8114 11.5214 12.8941 11.6652 12.9444C11.8091 12.9946 11.9625 13.011 12.1138 12.9923L13.5916 12.8098C14.0339 12.7552 14.4453 12.5544 14.7604 12.2393L20.3785 6.62276C20.5755 6.4258 20.7318 6.19196 20.8384 5.9346C20.9451 5.67724 21 5.40139 21 5.1228C21 4.84422 20.9452 4.56837 20.8386 4.31099C20.732 4.05361 20.5757 3.81975 20.3787 3.62276L20.3764 3.62044C20.1796 3.42366 19.946 3.26756 19.6889 3.16107C19.4318 3.05457 19.1563 2.99976 18.878 2.99976C18.5997 2.99976 18.3242 3.05457 18.0671 3.16107C17.81 3.26756 17.5764 3.42366 17.3796 3.62044Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (A.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (A.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var D = ["size", "color", "strokeWidth"];
        function U() {
          return (U =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function F(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, D);
          return e.createElement(
            "svg",
            U({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17 21H12C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12V13.5C21 14.163 20.7366 14.7989 20.2678 15.2678C19.7989 15.7366 19.163 16 18.5 16C17.837 16 17.2011 15.7366 16.7322 15.2678C16.2634 14.7989 16 14.163 16 13.5V12C16 10.9391 15.5786 9.92172 14.8284 9.17158C14.0783 8.42143 13.0609 8 12 8V8C11.2089 8 10.4355 8.2346 9.77772 8.67413C9.11993 9.11365 8.60724 9.73837 8.30449 10.4693C8.00174 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61217 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (F.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (F.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var q = ["size", "color", "strokeWidth"];
        function G() {
          return (G =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function K(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, q);
          return e.createElement(
            "svg",
            G({ viewBox: "0 0 16 16", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6 6L10 10",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6 10L10 6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (K.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (K.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Y = ["size", "color", "strokeWidth"];
        function J() {
          return (J =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Q(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Y);
          return e.createElement(
            "svg",
            J({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M19 9V5H15",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13 11L19 5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M20 13V15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20H9C7.67392 20 6.40215 19.4732 5.46447 18.5355C4.52678 17.5979 4 16.3261 4 15V9C4 7.67392 4.52678 6.40215 5.46447 5.46447C6.40215 4.52678 7.67392 4 9 4H11",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Q.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Q.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var X = ["size", "color", "strokeWidth"];
        function ee() {
          return (ee =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function re(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, X);
          return e.createElement(
            "svg",
            ee({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M14.1218 9.87999C15.2928 11.051 15.2928 12.952 14.1218 14.125C12.9508 15.296 11.0498 15.296 9.87679 14.125C8.70579 12.954 8.70579 11.053 9.87679 9.87999C11.0498 8.70699 12.9498 8.70699 14.1218 9.87999Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3 12C3 11.341 3.152 10.689 3.446 10.088C4.961 6.991 8.309 5 12 5C15.691 5 19.039 6.991 20.554 10.088C20.848 10.689 21 11.341 21 12C21 12.659 20.848 13.311 20.554 13.912C19.039 17.009 15.691 19 12 19C8.309 19 4.961 17.009 3.446 13.912C3.152 13.311 3 12.659 3 12V12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (re.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (re.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var te = ["size", "color", "strokeWidth"];
        function oe() {
          return (oe =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function ne(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, te);
          return e.createElement(
            "svg",
            oe({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (ne.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (ne.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var ie = ["size", "color", "strokeWidth"];
        function se() {
          return (se =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function le(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, ie);
          return e.createElement(
            "svg",
            se({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M16.395 14.5H20.606L16.395 19.5H20.606",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M21 9.5L18.5 4.5L16 9.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16.4189 8.662H20.5809",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 19.5H3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 14.5H3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 9.5H3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 4.5H3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (le.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (le.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var ae = ["size", "color", "strokeWidth"];
        function ue() {
          return (ue =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function ce(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, ae);
          return e.createElement(
            "svg",
            ue({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M14.5 13.5L19.707 8.293C19.895 8.105 20 7.851 20 7.586V5C20 4.448 19.552 4 19 4H5C4.448 4 4 4.448 4 5V7.586C4 7.851 4.105 8.106 4.293 8.293L9.5 13.5",
              stroke: o,
              strokeWidth: n,
              strokeMiterlimit: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9.5 13.5V19.749C9.5 20.562 10.264 21.159 11.053 20.962L13.553 20.337C14.109 20.198 14.5 19.698 14.5 19.124V13.5",
              stroke: o,
              strokeWidth: n,
              strokeMiterlimit: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (ce.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (ce.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var pe = ["size", "color", "strokeWidth"];
        function fe() {
          return (fe =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function de(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, pe);
          return e.createElement(
            "svg",
            fe({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3.51318 9H20.3812",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3.51416 15H12.0002",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 12C16.0076 9.20625 15.2587 6.46255 13.833 4.05999C13.6476 3.73787 13.3806 3.47031 13.0589 3.28426C12.7372 3.09821 12.3721 3.00024 12.0005 3.00024C11.6288 3.00024 11.2638 3.09821 10.9421 3.28426C10.6203 3.47031 10.3533 3.73787 10.168 4.05999C8.74895 6.4656 8.00049 9.20753 8.00049 12.0005C8.00049 14.7935 8.74895 17.5354 10.168 19.941C10.3542 20.2625 10.6214 20.5296 10.9431 20.7156C11.2647 20.9015 11.6295 21 12.001 21.001",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19.2439 17.379L17.6879 18.935L16.7549 18.001",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (de.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (de.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var he = ["size", "color", "strokeWidth"];
        function ke() {
          return (ke =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function ye(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, he);
          return e.createElement(
            "svg",
            ke({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M13.5 11.507V16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10.5 8V16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M7.5 13.26V16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16.5 9.75299V16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (ye.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (ye.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Oe = ["size", "color", "strokeWidth"];
        function Ce() {
          return (Ce =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function ge(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Oe);
          return e.createElement(
            "svg",
            Ce({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M10.523 20H6V15.477C6 15.0134 6.18428 14.5684 6.51226 14.2407L17.5294 4.00237C18.211 3.31947 19.3171 3.31841 20 4L20.0024 4.00237L21.5 5.527C22.1829 6.20859 22.184 7.31473 21.5024 7.99763L21.5 8L11.759 19.488C11.431 19.8156 10.9865 19.9997 10.523 20Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M2 20H3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9 12L13.5 16.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (ge.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (ge.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var be = ["size", "color", "strokeWidth"];
        function ve() {
          return (ve =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function me(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, be);
          return e.createElement(
            "svg",
            ve({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M3.734 9.764L12.002 3L20.267 9.764C20.731 10.143 21 10.712 21 11.311V19C21 20.105 20.105 21 19 21H5C3.895 21 3 20.105 3 19V11.312C3 10.712 3.269 10.143 3.734 9.764V9.764Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M8 17H16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (me.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (me.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var je = ["size", "color", "strokeWidth"];
        function Le() {
          return (Le =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function We(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, je);
          return e.createElement(
            "svg",
            Le({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M20.9998 9.99999V17C20.9998 19.2 19.1998 21 16.9998 21H6.99979L6.98979 20.999C4.77979 20.989 2.98979 19.199 2.98979 16.989V6.98899C2.97979 4.77899 4.77979 2.97899 6.97979 2.97899H12.9798",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3 13L4.29 11.7H4.28C5.22 10.75 6.74 10.75 7.68 11.69L11.97 15.98",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M7.00293 21L13.2929 14.7V14.69C14.2329 13.74 15.7529 13.74 16.6929 14.69L20.6229 18.62",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M17.9995 3L15.4995 5.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M20.5 5.5L18 3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18 3V8",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (We.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (We.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var we = ["size", "color", "strokeWidth"];
        function Ee() {
          return (Ee =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Pe(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, we);
          return e.createElement(
            "svg",
            Ee({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              e.createElement("path", {
                d: "M21 16.014L16.707 11.721C16.316 11.33 15.683 11.33 15.293 11.721L11 16.014",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M18 21.014H6C4.343 21.014 3 19.671 3 18.014V6.014C3 4.357 4.343 3.014 6 3.014H18C19.657 3.014 21 4.357 21 6.014V18.014C21 19.671 19.657 21.014 18 21.014Z",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M15.9998 21.014L9.7068 14.721C9.3158 14.33 8.6828 14.33 8.2928 14.721L3.4458 19.568M9.26497 8.74883C9.41142 8.89527 9.41142 9.13271 9.26497 9.27916C9.11852 9.4256 8.88109 9.4256 8.73464 9.27916C8.58819 9.13271 8.58819 8.89527 8.73464 8.74883C8.88109 8.60238 9.11852 8.60238 9.26497 8.74883Z",
                stroke: o,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            ),
            e.createElement(
              "defs",
              null,
              e.createElement(
                "clipPath",
                { id: "clip0" },
                e.createElement("rect", { width: "24", height: "24", fill: o })
              )
            )
          );
        }
        (Pe.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Pe.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var ze = ["size", "color", "strokeWidth"];
        function Me() {
          return (Me =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function xe(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, ze);
          return e.createElement(
            "svg",
            Me({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M9 9H6C4.343 9 3 7.657 3 6C3 4.343 4.343 3 6 3C7.657 3 9 4.343 9 6V9Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9 9H15V15H9V9Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6 21C4.343 21 3 19.657 3 18C3 16.343 4.343 15 6 15H9V18C9 19.657 7.657 21 6 21Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M15 15H18C19.657 15 21 16.343 21 18C21 19.657 19.657 21 18 21C16.343 21 15 19.657 15 18V15Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18 3C19.657 3 21 4.343 21 6C21 7.657 19.657 9 18 9H15V6C15 4.343 16.343 3 18 3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (xe.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (xe.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Te = ["size", "color", "strokeWidth"];
        function He() {
          return (He =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Se(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Te);
          return e.createElement(
            "svg",
            He({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M8 12H16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M11 15L8 12L11 9",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Se.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Se.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Ve = ["size", "color", "strokeWidth"];
        function Ie() {
          return (Ie =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Be(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Ve);
          return e.createElement(
            "svg",
            Ie({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M15 6L9 12L15 18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Be.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Be.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Ze = ["size", "color", "strokeWidth"];
        function _e() {
          return (_e =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Re(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Ze);
          return e.createElement(
            "svg",
            _e({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17.7166 12.3594L19.4466 10.6294C21.1392 8.9873 21.1801 6.284 19.538 4.59141C17.8959 2.89882 15.1926 2.85789 13.5 4.5C13.4691 4.53001 13.4386 4.56048 13.4086 4.59141L10.0109 7.951C8.34355 9.61717 8.3426 12.3195 10.0088 13.9869L10.0109 13.989L9.9999 14C10.3445 14.3381 10.7447 14.6144 11.1829 14.817",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12.806 9.193C13.2443 9.39593 13.6445 9.67262 13.989 10.011C15.6564 11.6772 15.6573 14.3795 13.9912 16.0469L13.989 16.049L10.8082 19.268C9.11565 20.9101 6.41235 20.8692 4.77024 19.1766C3.16318 17.5201 3.16318 14.8865 4.77024 13.23L6.50024 11.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Re.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Re.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Ne = ["size", "color", "strokeWidth"];
        function $e() {
          return ($e =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Ae(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Ne);
          return e.createElement(
            "svg",
            $e({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 5H20",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 19H20M12 12H20H12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Ae.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Ae.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var De = ["size", "color", "strokeWidth"];
        function Ue() {
          return (Ue =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Fe(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, De);
          return e.createElement(
            "svg",
            Ue({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M11 4H20M11.15 9H20M5.25 9V4L4 5.25M11 14H20M11.15 19H20M4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H5.61448C5.87234 14 6.12365 14.0811 6.33284 14.2319C6.54202 14.3827 6.69846 14.5955 6.78 14.8401C6.84709 15.0414 6.86091 15.2566 6.82013 15.4648C6.77935 15.673 6.68534 15.8671 6.54727 16.0282L4 19H7M4 9H6.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Fe.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Fe.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var qe = ["size", "color", "strokeWidth"];
        function Ge() {
          return (Ge =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Ke(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, qe);
          return e.createElement(
            "svg",
            Ge({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M21 12H18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3 12H6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 3V6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 21V18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18.3642 18.364L16.2432 16.243",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M5.63623 5.63599L7.75723 7.75699",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16.2432 7.75699L18.3642 5.63599",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M7.75723 16.243L5.63623 18.364",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Ke.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Ke.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Ye = ["size", "color", "strokeWidth"];
        function Je() {
          return (Je =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Qe(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Ye);
          return e.createElement(
            "svg",
            Je({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M13.5123 8.75949C14.3477 9.59482 14.3477 10.9492 13.5123 11.7845C12.677 12.6198 11.3227 12.6198 10.4873 11.7845C9.65201 10.9492 9.65201 9.59482 10.4873 8.75949C11.3227 7.92416 12.677 7.92416 13.5123 8.75949Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19 10C19 11.901 18.156 13.704 16.695 14.921L14.4 16.834C13.485 17.597 12.801 18.599 12.424 19.729L12 21L11.576 19.729C11.199 18.599 10.515 17.596 9.6 16.834L7.304 14.921C5.844 13.704 5 11.901 5 10V10.036C5 5.668 8.617 3.134 12 3.134C15.383 3.134 19 5.668 19 10.036",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Qe.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Qe.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Xe = ["size", "color", "strokeWidth"];
        function er() {
          return (er =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function rr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Xe);
          return e.createElement(
            "svg",
            er({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17 21H7C5.895 21 5 20.105 5 19V11C5 9.895 5.895 9 7 9H17C18.105 9 19 9.895 19 11V19C19 20.105 18.105 21 17 21Z",
              stroke: o,
              strokeWidth: n,
              strokeMiterlimit: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M15.9998 9V7C15.9998 4.791 14.2088 3 11.9998 3C10.1298 3 8.57179 4.289 8.13379 6.023",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M11.997 14.5C11.722 14.5 11.497 14.725 11.5 15C11.5 15.275 11.725 15.5 12 15.5C12.275 15.5 12.5 15.275 12.5 15C12.5 14.725 12.275 14.5 11.997 14.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (rr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (rr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var tr = ["size", "color", "strokeWidth"];
        function or() {
          return (or =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function nr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, tr);
          return e.createElement(
            "svg",
            or({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18.5 12C18.5 12.0989 18.4707 12.1956 18.4157 12.2778C18.3608 12.36 18.2827 12.4241 18.1913 12.4619C18.1 12.4998 17.9994 12.5097 17.9025 12.4904C17.8055 12.4711 17.7164 12.4235 17.6464 12.3536C17.5765 12.2836 17.5289 12.1945 17.5096 12.0975C17.4903 12.0006 17.5002 11.9 17.5381 11.8087C17.5759 11.7173 17.64 11.6392 17.7222 11.5843C17.8044 11.5293 17.9011 11.5 18 11.5C18.1326 11.5 18.2598 11.5527 18.3536 11.6464C18.4473 11.7402 18.5 11.8674 18.5 12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12.5 12C12.5 12.0989 12.4707 12.1956 12.4157 12.2778C12.3608 12.36 12.2827 12.4241 12.1913 12.4619C12.1 12.4998 11.9994 12.5097 11.9025 12.4904C11.8055 12.4711 11.7164 12.4235 11.6464 12.3536C11.5765 12.2836 11.5289 12.1945 11.5096 12.0975C11.4903 12.0006 11.5002 11.9 11.5381 11.8087C11.5759 11.7173 11.64 11.6392 11.7222 11.5843C11.8044 11.5293 11.9011 11.5 12 11.5C12.1326 11.5 12.2598 11.5527 12.3536 11.6464C12.4473 11.7402 12.5 11.8674 12.5 12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M6.5 12C6.5 12.0989 6.47068 12.1956 6.41574 12.2778C6.36079 12.36 6.28271 12.4241 6.19134 12.4619C6.09998 12.4998 5.99945 12.5097 5.90246 12.4904C5.80546 12.4711 5.71637 12.4235 5.64645 12.3536C5.57652 12.2836 5.5289 12.1945 5.50961 12.0975C5.49031 12.0006 5.50022 11.9 5.53806 11.8087C5.5759 11.7173 5.63999 11.6392 5.72221 11.5843C5.80444 11.5293 5.90111 11.5 6 11.5C6.13261 11.5 6.25979 11.5527 6.35355 11.6464C6.44732 11.7402 6.5 11.8674 6.5 12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (nr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (nr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var ir = ["size", "color", "strokeWidth"];
        function sr() {
          return (sr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function lr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, ir);
          return e.createElement(
            "svg",
            sr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M11.997 17.5C11.722 17.5 11.497 17.725 11.5 18C11.5 18.275 11.725 18.5 12 18.5C12.275 18.5 12.5 18.275 12.5 18C12.5 17.725 12.275 17.5 11.997 17.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M11.997 11.5C11.722 11.5 11.497 11.725 11.5 12C11.5 12.275 11.725 12.5 12 12.5C12.275 12.5 12.5 12.275 12.5 12C12.5 11.725 12.275 11.5 11.997 11.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M11.997 5.5C11.722 5.5 11.497 5.725 11.5 6C11.5 6.275 11.725 6.5 12 6.5C12.275 6.5 12.5 6.275 12.5 6C12.5 5.725 12.275 5.5 11.997 5.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (lr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (lr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var ar = ["size", "color", "strokeWidth"];
        function ur() {
          return (ur =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function cr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, ar);
          return e.createElement(
            "svg",
            ur({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M4.636 5.04501H19.363C20.267 5.04501 21 5.77801 21 6.68201V17.318C21 18.222 20.267 18.954 19.364 18.954H4.636C3.733 18.955 3 18.222 3 17.318V6.68201C3 5.77801 3.733 5.04501 4.636 5.04501V5.04501Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3.11914 6.075L10.8131 11.578C11.5081 12.075 12.4421 12.076 13.1381 11.58L20.8761 6.061",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (cr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (cr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var pr = ["size", "color", "strokeWidth"];
        function fr() {
          return (fr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function dr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, pr);
          return e.createElement(
            "svg",
            fr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17 12H7",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (dr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (dr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var hr = ["size", "color", "strokeWidth"];
        function kr() {
          return (kr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function yr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, hr);
          return e.createElement(
            "svg",
            kr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M21 7V17C21 19.209 19.209 21 17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3H17C19.209 3 21 4.791 21 7Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M21 12.0003H16.309C16.12 12.0003 15.946 12.1073 15.862 12.2763L14.447 15.1053C14.263 15.4743 13.737 15.4743 13.553 15.1053L10.43 8.86127C10.249 8.49927 9.735 8.49127 9.543 8.84727L7.984 11.7373C7.896 11.8993 7.727 12.0003 7.544 12.0003H3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (yr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (yr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Or = ["size", "color", "strokeWidth"];
        function Cr() {
          return (Cr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function gr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Or);
          return e.createElement(
            "svg",
            Cr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18 4.5H6C4.34315 4.5 3 5.84315 3 7.5V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V7.5C21 5.84315 19.6569 4.5 18 4.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M17 16.9863H7.00002",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M7.5 3V6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16.5 3V6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (gr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (gr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var br = ["size", "color", "strokeWidth"];
        function vr() {
          return (vr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function mr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, br);
          return e.createElement(
            "svg",
            vr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10 7H7.5C7.22386 7 7 7.22386 7 7.5V10C7 10.2761 7.22386 10.5 7.5 10.5H10C10.2761 10.5 10.5 10.2761 10.5 10V7.5C10.5 7.22386 10.2761 7 10 7Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13.5 7H17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13.5 10.3301H17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10 13.5H7.5C7.22386 13.5 7 13.7239 7 14V16.5C7 16.7761 7.22386 17 7.5 17H10C10.2761 17 10.5 16.7761 10.5 16.5V14C10.5 13.7239 10.2761 13.5 10 13.5Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13.5 13.5H17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13.5 16.8301H17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (mr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (mr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var jr = ["size", "color", "strokeWidth"];
        function Lr() {
          return (Lr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Wr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, jr);
          return e.createElement(
            "svg",
            Lr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 4C7.03 4 3 7.35868 3 11.4971C3.03694 12.7249 3.39056 13.9223 4.02657 14.9731C4.66258 16.024 5.55939 16.8926 6.63 17.4948C6.41369 18.0826 6.11292 18.6358 5.73714 19.1369C5.63591 19.2847 5.58282 19.4601 5.58511 19.6392C5.58741 19.8184 5.64498 19.9924 5.74996 20.1376C5.85494 20.2827 6.00219 20.3919 6.17159 20.4501C6.34098 20.5084 6.52424 20.5129 6.6963 20.4631C7.89863 20.113 9.03031 19.555 10.04 18.8143C10.6863 18.9354 11.3425 18.9956 12 18.9942C16.97 18.9942 21 15.6355 21 11.4971C21 7.35869 16.97 4 12 4Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9 10H15",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9 13H12",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Wr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Wr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var wr = ["size", "color", "strokeWidth"];
        function Er() {
          return (Er =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Pr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, wr);
          return e.createElement(
            "svg",
            Er({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M3 11.9996C3.00014 13.0538 3.18764 14.0996 3.55376 15.0882C3.63489 15.3106 3.7916 15.4975 3.9965 15.6162C4.20141 15.7349 4.44151 15.7779 4.67486 15.7376L5.66105 15.5637C6.04448 15.4961 6.3866 15.282 6.6151 14.9668C6.8436 14.6515 6.94056 14.2598 6.8855 13.8744L6.58868 11.7966C6.56024 11.5976 6.49205 11.4062 6.38818 11.234C6.28431 11.0618 6.14688 10.9123 5.98405 10.7943C5.82122 10.6762 5.63633 10.5922 5.44035 10.547C5.24438 10.5019 5.04134 10.4967 4.84329 10.5316L3.0827 10.842",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M21 11.9996C20.9999 13.0538 20.8124 14.0996 20.4462 15.0882C20.3651 15.3106 20.2084 15.4975 20.0035 15.6162C19.7986 15.7349 19.5585 15.7779 19.3251 15.7376L18.339 15.5637C17.9555 15.4961 17.6134 15.282 17.3849 14.9668C17.1564 14.6515 17.0594 14.2598 17.1145 13.8744L17.4113 11.7966C17.4398 11.5976 17.508 11.4062 17.6118 11.234C17.7157 11.0618 17.8531 10.9123 18.016 10.7943C18.1788 10.6762 18.3637 10.5922 18.5597 10.547C18.7556 10.5019 18.9587 10.4967 19.1567 10.5316L20.9173 10.842",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13.4925 12.4912C13.491 12.4912 13.4896 12.4917 13.4884 12.4925C13.4871 12.4933 13.4862 12.4945 13.4856 12.4958C13.4851 12.4972 13.4849 12.4987 13.4852 12.5001C13.4855 12.5016 13.4862 12.5029 13.4872 12.504C13.4883 12.505 13.4896 12.5057 13.4911 12.506C13.4925 12.5063 13.494 12.5062 13.4954 12.5056C13.4967 12.505 13.4979 12.5041 13.4987 12.5028C13.4995 12.5016 13.5 12.5002 13.5 12.4987C13.5 12.4977 13.4999 12.4967 13.4995 12.4958C13.4992 12.4948 13.4986 12.494 13.4979 12.4933C13.4972 12.4926 13.4964 12.492 13.4955 12.4917C13.4945 12.4913 13.4935 12.4912 13.4925 12.4912",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10.5075 12.4942C10.506 12.4942 10.5045 12.4946 10.5033 12.4954C10.5021 12.4962 10.5011 12.4974 10.5006 12.4988C10.5 12.5001 10.4999 12.5016 10.5001 12.5031C10.5004 12.5045 10.5011 12.5059 10.5022 12.5069C10.5032 12.508 10.5046 12.5087 10.506 12.509C10.5075 12.5092 10.509 12.5091 10.5103 12.5085C10.5117 12.508 10.5129 12.507 10.5137 12.5058C10.5145 12.5045 10.5149 12.5031 10.5149 12.5016C10.515 12.5006 10.5149 12.4996 10.5145 12.4987C10.5142 12.4977 10.5136 12.4969 10.5129 12.4962C10.5122 12.4955 10.5113 12.4949 10.5104 12.4946C10.5095 12.4942 10.5085 12.4941 10.5075 12.4942",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Pr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Pr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var zr = ["size", "color", "strokeWidth"];
        function Mr() {
          return (Mr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function xr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, zr);
          return e.createElement(
            "svg",
            Mr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17 2V2C19.7614 2 22 4.23858 22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7V7C12 4.23858 14.2386 2 17 2",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M20 14.0003V14.3753V14.3753C20 15.9399 18.7316 17.2083 17.167 17.2083H12.445L7.723 20.9863V17.2083H5.833H5.833C4.26838 17.2083 3 15.9399 3 14.3753V6.81933V6.81933C3 5.25471 4.26838 3.98633 5.833 3.98633H10",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18.358 6.94449C18.3283 6.94226 18.3023 6.96456 18.3001 6.9943C18.3 6.99636 18.2999 6.99843 18.3 7.00049C18.3 7.03142 18.3251 7.05648 18.356 7.05648C18.3869 7.05648 18.412 7.03141 18.412 7.00048C18.412 6.96955 18.3869 6.94448 18.356 6.94448M18.356 6.94448V6.94448Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M15.642 6.94434C15.6111 6.94544 15.587 6.97139 15.5881 7.0023C15.5892 7.03321 15.6151 7.05737 15.646 7.05626C15.6762 7.05519 15.7 7.03047 15.7 7.00034C15.7 6.96979 15.6756 6.94488 15.645 6.94434",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (xr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (xr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Tr = ["size", "color", "strokeWidth"];
        function Hr() {
          return (Hr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Sr(r) {
          var t = r.size,
            o = r.color,
            n =
              (r.strokeWidth,
              (function (e, r) {
                if (null == e) return {};
                var t,
                  o,
                  n = (function (e, r) {
                    if (null == e) return {};
                    var t,
                      o,
                      n = {},
                      i = Object.keys(e);
                    for (o = 0; o < i.length; o++)
                      (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                  })(e, r);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]),
                      r.indexOf(t) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, t) &&
                          (n[t] = e[t]));
                }
                return n;
              })(r, Tr));
          return e.createElement(
            "svg",
            Hr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, n),
            e.createElement("path", {
              d: "M19.1863 9.2727C19.1863 9.99647 19.1863 10.7171 19.1863 11.444C19.1863 12.171 19.1863 12.8916 19.2049 13.6153C19.2386 14.218 19.1257 14.8198 18.8765 15.367C18.6184 15.8937 18.1759 16.3019 17.637 16.5104C17.0343 16.7591 16.4873 16.8557 15.9435 16.7401C15.3997 16.6245 14.859 16.2982 14.2625 15.7027C13.2068 14.6416 12.1543 13.5747 11.1049 12.502C10.0555 11.4292 9.00757 10.3592 7.96124 9.29171C7.79717 9.10072 7.61268 8.92913 7.41122 8.78016C7.30188 8.7087 7.17715 8.66559 7.04782 8.65455C6.9185 8.64351 6.7885 8.66488 6.66908 8.71681C6.53476 8.75956 6.41264 8.83511 6.3133 8.93694C6.21396 9.03876 6.14037 9.16379 6.09892 9.30121C6.03142 9.57268 6.00375 9.85289 6.0168 10.1327C6.0168 11.3152 6.02042 12.4993 6.02765 13.685C6.02765 14.8697 6.02765 16.0606 6.0075 17.2389C5.99528 17.5357 6.04547 17.8316 6.15469 18.1068C6.25958 18.3623 6.44947 18.5715 6.69077 18.6976C6.81331 18.7641 6.94926 18.8007 7.08796 18.8046C7.22666 18.8084 7.36435 18.7794 7.49024 18.7198C7.75031 18.5975 7.98613 18.4273 8.1859 18.2177C8.6662 17.7405 9.14392 17.2601 9.61905 16.7765C10.0942 16.2929 10.5616 15.8041 11.0212 15.3099C11.1103 15.2033 11.2191 15.1156 11.3414 15.052C11.4637 14.9884 11.5971 14.9501 11.7339 14.9393C11.9921 14.9406 12.2434 15.0242 12.4528 15.1785C12.6511 15.3115 12.7426 15.5982 12.7364 15.9007C12.7377 16.2033 12.6301 16.4958 12.4342 16.7226C11.8641 17.3118 11.2986 17.9089 10.7299 18.498C10.1613 19.0872 9.57877 19.67 8.98072 20.2291C8.54153 20.6553 7.97762 20.9223 7.37559 20.9893C6.77021 21.0371 6.16299 20.9247 5.61242 20.663C5.10855 20.4603 4.67981 20.1007 4.38688 19.6352C4.11249 19.1508 3.97918 18.5964 4.00264 18.0372C4.01658 16.5769 4.01503 15.1167 4.01348 13.6549C4.01193 12.1931 4.01348 10.7345 4.01348 9.2727C4.00128 8.69191 4.11948 8.11599 4.35899 7.58918C4.61201 7.07012 5.05006 6.66996 5.58298 6.47105C6.13553 6.23868 6.74262 6.17701 7.32911 6.29367C7.9335 6.43863 8.48137 6.76582 8.9017 7.23284C9.96456 8.34146 11.0367 9.44269 12.1182 10.5365C13.1996 11.6304 14.278 12.7263 15.3532 13.8244C15.4998 13.9882 15.6683 14.13 15.8537 14.2457C15.9468 14.3006 16.0506 14.3338 16.1577 14.3431C16.2648 14.3524 16.3726 14.3375 16.4734 14.2995C16.6678 14.2401 16.8443 14.1311 16.9862 13.9828C17.1305 13.8059 17.2026 13.579 17.1877 13.3493C17.1722 12.0142 17.1722 10.6854 17.1722 9.35664C17.1722 8.02788 17.1722 6.69753 17.1722 5.36877C17.1819 5.16803 17.1508 4.9674 17.0808 4.77961C17.0365 4.68434 16.9744 4.59893 16.8978 4.52827C16.8212 4.45761 16.7318 4.40309 16.6345 4.36784C16.4456 4.27647 16.2393 4.22888 16.0303 4.22847C15.8152 4.24378 15.6102 4.32802 15.4446 4.4692C14.8593 4.93907 14.3084 5.45198 13.7961 6.00385C13.2771 6.54549 12.7704 7.10138 12.2282 7.62085C12.0264 7.84331 11.7585 7.99141 11.4659 8.04213C11.3372 8.04946 11.2086 8.02659 11.0899 7.97525C10.9712 7.92392 10.8655 7.84549 10.7811 7.74597C10.6812 7.64671 10.603 7.52692 10.5518 7.39452C10.5005 7.26212 10.4772 7.1201 10.4836 6.97785C10.5039 6.67123 10.6361 6.38357 10.8539 6.17173C11.4024 5.61214 11.9498 5.05254 12.4962 4.49295C13.0426 3.93336 13.5926 3.378 14.1463 2.82685C14.4931 2.4971 14.911 2.25534 15.3661 2.12109C15.8212 1.98683 16.3008 1.96385 16.7662 2.05398C17.2334 2.12126 17.6785 2.29959 18.066 2.57464C18.4535 2.8497 18.7725 3.21381 18.9973 3.63773C19.0662 3.77419 19.1183 3.9189 19.1522 4.06851C19.1853 4.21976 19.2009 4.37443 19.1987 4.52938C19.1925 5.31809 19.1925 6.10996 19.1987 6.905C19.2049 7.70004 19.2008 8.48927 19.1863 9.2727Z",
              fill: o,
            })
          );
        }
        (Sr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Sr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Vr = ["size", "color", "strokeWidth"];
        function Ir() {
          return (Ir =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Br(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Vr);
          return e.createElement(
            "svg",
            Ir({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19 8H15C14.448 8 14 7.552 14 7V3",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10.5 18H13.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 12V18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9 13.5V12.5C9 12.224 9.224 12 9.5 12H14.5C14.776 12 15 12.224 15 12.5V13.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Br.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Br.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Zr = ["size", "color", "strokeWidth"];
        function _r() {
          return (_r =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Rr(r) {
          var t = r.size,
            o = r.color,
            n =
              (r.strokeWidth,
              (function (e, r) {
                if (null == e) return {};
                var t,
                  o,
                  n = (function (e, r) {
                    if (null == e) return {};
                    var t,
                      o,
                      n = {},
                      i = Object.keys(e);
                    for (o = 0; o < i.length; o++)
                      (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                  })(e, r);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]),
                      r.indexOf(t) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, t) &&
                          (n[t] = e[t]));
                }
                return n;
              })(r, Zr));
          return e.createElement(
            "svg",
            _r({ viewBox: "0 0 103 35", fill: "none", height: t, width: t }, n),
            e.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              e.createElement("path", {
                d: "M27.9733 13.3855C27.9733 14.719 27.9733 16.0466 27.9733 17.3859C27.9733 18.7252 27.9733 20.0529 28.0076 21.3863C28.0696 22.4966 27.8617 23.6054 27.4024 24.6135C26.927 25.584 26.1118 26.336 25.1188 26.7202C24.0084 27.1783 23.0007 27.3563 21.9988 27.1433C20.9969 26.9303 20.0006 26.3292 18.9016 25.2321C16.9568 23.2771 15.0176 21.3114 13.0841 19.3351C11.1507 17.3587 9.22006 15.3872 7.2923 13.4205C6.99002 13.0686 6.65012 12.7525 6.27895 12.478C6.07751 12.3464 5.84769 12.267 5.60943 12.2466C5.37117 12.2263 5.13165 12.2656 4.91163 12.3613C4.66416 12.4401 4.43918 12.5793 4.25615 12.7669C4.07312 12.9545 3.93755 13.1848 3.86117 13.438C3.73682 13.9382 3.68583 14.4544 3.70988 14.9699C3.70988 17.1486 3.71654 19.3302 3.72986 21.5147C3.72986 23.6973 3.72986 25.8915 3.69275 28.0624C3.67023 28.6091 3.7627 29.1544 3.96393 29.6614C4.15718 30.132 4.50703 30.5175 4.9516 30.7498C5.17736 30.8724 5.42783 30.9399 5.68337 30.947C5.93892 30.9541 6.1926 30.9006 6.42453 30.7907C6.90368 30.5654 7.33815 30.2518 7.70621 29.8657C8.59111 28.9864 9.47126 28.1013 10.3466 27.2104C11.222 26.3195 12.0831 25.4188 12.93 24.5085C13.0941 24.3119 13.2946 24.1505 13.5199 24.0333C13.7453 23.9161 13.991 23.8456 14.2431 23.8257C14.7187 23.828 15.1817 23.982 15.5676 24.2663C15.9329 24.5114 16.1014 25.0395 16.0899 25.5968C16.0924 26.1543 15.8943 26.6933 15.5333 27.1112C14.4828 28.1967 13.4409 29.2967 12.3933 30.3822C11.3457 31.4676 10.2724 32.5414 9.17058 33.5714C8.36142 34.3566 7.32248 34.8487 6.2133 34.972C5.09795 35.0601 3.97921 34.8531 2.96485 34.3709C2.03652 33.9974 1.24661 33.3349 0.706923 32.4772C0.201398 31.5848 -0.0442116 30.5633 -0.000997997 29.5331C0.0246927 26.8428 0.0218382 24.1525 0.0189837 21.4593C0.0161291 18.7661 0.0189837 16.0787 0.0189837 13.3855C-0.00349569 12.3155 0.214266 11.2544 0.655542 10.2838C1.1217 9.32748 1.92877 8.59022 2.91061 8.22376C3.92863 7.79563 5.04712 7.68201 6.12766 7.89696C7.2412 8.16403 8.25059 8.76684 9.025 9.62726C10.9832 11.6698 12.9585 13.6987 14.951 15.714C16.9434 17.7292 18.9302 19.7484 20.9112 21.7715C21.1813 22.0733 21.4917 22.3346 21.8332 22.5476C22.0048 22.6488 22.196 22.7101 22.3933 22.7272C22.5907 22.7444 22.7893 22.7169 22.975 22.6469C23.3333 22.5373 23.6584 22.3365 23.9199 22.0633C24.1857 21.7374 24.3185 21.3195 24.291 20.8961C24.2624 18.4363 24.2624 15.9882 24.2624 13.5401C24.2624 11.092 24.2624 8.64102 24.2624 6.19292C24.2805 5.82308 24.2231 5.45345 24.094 5.10746C24.0126 4.93194 23.898 4.77458 23.7569 4.64439C23.6159 4.51421 23.451 4.41376 23.2719 4.34881C22.9238 4.18048 22.5437 4.0928 22.1587 4.09204C21.7623 4.12026 21.3848 4.27545 21.0796 4.53556C20.0013 5.40125 18.9862 6.34623 18.0424 7.36299C17.0862 8.3609 16.1527 9.38508 15.1537 10.3421C14.782 10.752 14.2883 11.0249 13.7492 11.1183C13.5121 11.1318 13.2752 11.0897 13.0565 10.9951C12.8378 10.9005 12.6432 10.756 12.4875 10.5727C12.3035 10.3898 12.1595 10.1691 12.065 9.92515C11.9706 9.68121 11.9278 9.41957 11.9395 9.15748C11.977 8.59257 12.2204 8.06258 12.6217 7.67228C13.6322 6.6413 14.6408 5.61031 15.6475 4.57933C16.6542 3.54834 17.6675 2.52514 18.6876 1.50971C19.3266 0.902187 20.0965 0.456769 20.935 0.209419C21.7734 -0.0379302 22.6571 -0.0802802 23.5145 0.0857883C24.3752 0.209738 25.1954 0.538288 25.9093 1.04504C26.6232 1.5518 27.2108 2.22264 27.6251 3.00367C27.7521 3.25509 27.848 3.52169 27.9105 3.79733C27.9713 4.07599 28.0001 4.36096 27.9961 4.64644C27.9847 6.09954 27.9847 7.55848 27.9961 9.02326C28.0076 10.488 28 11.9421 27.9733 13.3855Z",
                fill: o,
              })
            ),
            e.createElement("path", {
              d: "M36.56 20V8.096H39.272L39.512 10.112C39.88 9.408 40.408 8.848 41.096 8.432C41.8 8.016 42.624 7.808 43.568 7.808C45.04 7.808 46.184 8.272 47 9.2C47.816 10.128 48.224 11.488 48.224 13.28V20H45.152V13.568C45.152 12.544 44.944 11.76 44.528 11.216C44.112 10.672 43.464 10.4 42.584 10.4C41.72 10.4 41.008 10.704 40.448 11.312C39.904 11.92 39.632 12.768 39.632 13.856V20H36.56ZM56.9456 20.288C55.7456 20.288 54.6816 20.032 53.7536 19.52C52.8256 19.008 52.0976 18.288 51.5696 17.36C51.0416 16.432 50.7776 15.36 50.7776 14.144C50.7776 12.912 51.0336 11.816 51.5456 10.856C52.0736 9.896 52.7936 9.152 53.7056 8.624C54.6336 8.08 55.7216 7.808 56.9696 7.808C58.1376 7.808 59.1696 8.064 60.0656 8.576C60.9616 9.088 61.6576 9.792 62.1536 10.688C62.6656 11.568 62.9216 12.552 62.9216 13.64C62.9216 13.816 62.9136 14 62.8976 14.192C62.8976 14.384 62.8896 14.584 62.8736 14.792H53.8256C53.8896 15.72 54.2096 16.448 54.7856 16.976C55.3776 17.504 56.0896 17.768 56.9216 17.768C57.5456 17.768 58.0656 17.632 58.4816 17.36C58.9136 17.072 59.2336 16.704 59.4416 16.256H62.5616C62.3376 17.008 61.9616 17.696 61.4336 18.32C60.9216 18.928 60.2816 19.408 59.5136 19.76C58.7616 20.112 57.9056 20.288 56.9456 20.288ZM56.9696 10.304C56.2176 10.304 55.5536 10.52 54.9776 10.952C54.4016 11.368 54.0336 12.008 53.8736 12.872H59.8016C59.7536 12.088 59.4656 11.464 58.9376 11C58.4096 10.536 57.7536 10.304 56.9696 10.304ZM71.2893 20.288C70.0893 20.288 69.0253 20.032 68.0973 19.52C67.1693 19.008 66.4413 18.288 65.9133 17.36C65.3853 16.432 65.1213 15.36 65.1213 14.144C65.1213 12.912 65.3773 11.816 65.8893 10.856C66.4173 9.896 67.1373 9.152 68.0493 8.624C68.9773 8.08 70.0653 7.808 71.3133 7.808C72.4813 7.808 73.5133 8.064 74.4093 8.576C75.3053 9.088 76.0013 9.792 76.4973 10.688C77.0093 11.568 77.2653 12.552 77.2653 13.64C77.2653 13.816 77.2573 14 77.2413 14.192C77.2413 14.384 77.2333 14.584 77.2173 14.792H68.1693C68.2333 15.72 68.5533 16.448 69.1293 16.976C69.7213 17.504 70.4333 17.768 71.2653 17.768C71.8893 17.768 72.4093 17.632 72.8253 17.36C73.2573 17.072 73.5773 16.704 73.7853 16.256H76.9053C76.6813 17.008 76.3053 17.696 75.7773 18.32C75.2653 18.928 74.6253 19.408 73.8573 19.76C73.1053 20.112 72.2493 20.288 71.2893 20.288ZM71.3133 10.304C70.5613 10.304 69.8973 10.52 69.3213 10.952C68.7453 11.368 68.3773 12.008 68.2173 12.872H74.1453C74.0973 12.088 73.8093 11.464 73.2813 11C72.7533 10.536 72.0973 10.304 71.3133 10.304ZM84.9421 20C83.6941 20 82.6941 19.696 81.9421 19.088C81.1901 18.48 80.8141 17.4 80.8141 15.848V10.664H78.7741V8.096H80.8141L81.1741 4.904H83.8861V8.096H87.1021V10.664H83.8861V15.872C83.8861 16.448 84.0061 16.848 84.2461 17.072C84.5021 17.28 84.9341 17.384 85.5421 17.384H87.0301V20H84.9421ZM95.147 20.288C93.995 20.288 92.955 20.024 92.027 19.496C91.115 18.968 90.387 18.24 89.843 17.312C89.315 16.368 89.051 15.28 89.051 14.048C89.051 12.816 89.323 11.736 89.867 10.808C90.411 9.864 91.139 9.128 92.051 8.6C92.979 8.072 94.019 7.808 95.171 7.808C96.307 7.808 97.331 8.072 98.243 8.6C99.171 9.128 99.899 9.864 100.427 10.808C100.971 11.736 101.243 12.816 101.243 14.048C101.243 15.28 100.971 16.368 100.427 17.312C99.899 18.24 99.171 18.968 98.243 19.496C97.315 20.024 96.283 20.288 95.147 20.288ZM95.147 17.624C95.947 17.624 96.643 17.328 97.235 16.736C97.827 16.128 98.123 15.232 98.123 14.048C98.123 12.864 97.827 11.976 97.235 11.384C96.643 10.776 95.955 10.472 95.171 10.472C94.355 10.472 93.651 10.776 93.059 11.384C92.483 11.976 92.195 12.864 92.195 14.048C92.195 15.232 92.483 16.128 93.059 16.736C93.651 17.328 94.347 17.624 95.147 17.624Z",
              fill: o,
            }),
            e.createElement(
              "defs",
              null,
              e.createElement(
                "clipPath",
                { id: "clip0" },
                e.createElement("rect", { width: "28", height: "35", fill: o })
              )
            )
          );
        }
        (Rr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Rr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Nr = ["size", "color", "strokeWidth"];
        function $r() {
          return ($r =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Ar(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Nr);
          return e.createElement(
            "svg",
            $r({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17.4999 17.359C18.0028 17.359 18.4852 17.1597 18.8413 16.8046C19.1974 16.4496 19.3983 15.9679 19.3999 15.465C19.3996 15.2012 19.3472 14.9401 19.2458 14.6966C19.1444 14.4531 18.9959 14.232 18.8089 14.046L17.5499 12.786V9.043C17.5498 8.31453 17.4061 7.59323 17.127 6.92033C16.848 6.24742 16.4391 5.63611 15.9236 5.12133C15.4082 4.60655 14.7964 4.19839 14.1231 3.9202C13.4499 3.642 12.7284 3.49921 11.9999 3.5V3.5C10.5302 3.5008 9.12103 4.08511 8.082 5.12451C7.04298 6.16391 6.45918 7.57334 6.45891 9.043V12.783L5.19991 14.043C5.01277 14.229 4.86415 14.45 4.76256 14.6935C4.66098 14.937 4.60842 15.1982 4.60791 15.462V15.462C4.6095 15.9649 4.81038 16.4466 5.16652 16.8016C5.52267 17.1567 6.00504 17.356 6.50791 17.356L17.4999 17.359Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10.521 20.5H13.478",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Ar.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Ar.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Dr = ["size", "color", "strokeWidth"];
        function Ur() {
          return (Ur =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Fr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Dr);
          return e.createElement(
            "svg",
            Ur({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M13 4.5H20M13 9.5H20M4 14.5H20M4 19.5H20M9 9.5L6.5 4.5L4 9.5M4.5 8.5H6.5H8.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Fr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Fr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var qr = ["size", "color", "strokeWidth"];
        function Gr() {
          return (Gr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Kr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, qr);
          return e.createElement(
            "svg",
            Gr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 6L12 18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M18 12H6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Kr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Kr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Yr = ["size", "color", "strokeWidth"];
        function Jr() {
          return (Jr =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Qr(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Yr);
          return e.createElement(
            "svg",
            Jr({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M16.814 8V4C16.814 3.448 16.366 3 15.814 3H8.18604C7.63404 3 7.18604 3.448 7.18604 4V8",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M7 17H4C3.448 17 3 16.552 3 16V9C3 8.448 3.448 8 4 8H20C20.552 8 21 8.448 21 9V16C21 16.552 20.552 17 20 17H17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 21H8C7.448 21 7 20.552 7 20V14H17V20C17 20.552 16.552 21 16 21Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Qr.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Qr.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Xr = ["size", "color", "strokeWidth"];
        function et() {
          return (et =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function rt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Xr);
          return e.createElement(
            "svg",
            et({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M7.7328 20.829C7.48434 20.9587 7.20452 21.0162 6.92506 20.9949C6.6456 20.9737 6.37768 20.8746 6.15167 20.7089C5.92566 20.5431 5.7506 20.3174 5.64634 20.0573C5.54208 19.7971 5.5128 19.5129 5.5618 19.237L6.3708 14.6L2.9648 11.336C2.76077 11.1414 2.61571 10.8933 2.54624 10.6201C2.47678 10.3468 2.48573 10.0595 2.57206 9.79116C2.65839 9.52277 2.8186 9.28415 3.03434 9.10265C3.25008 8.92115 3.5126 8.80413 3.7918 8.765L8.5208 8.089L10.6558 3.83C10.7799 3.57959 10.9715 3.36884 11.2089 3.2215C11.4464 3.07415 11.7203 2.99608 11.9998 2.99608C12.2793 2.99608 12.5532 3.07415 12.7906 3.2215C13.0281 3.36884 13.2197 3.57959 13.3438 3.83L15.4788 8.089L20.2078 8.765C20.487 8.80413 20.7495 8.92115 20.9653 9.10265C21.181 9.28415 21.3412 9.52277 21.4275 9.79116C21.5139 10.0595 21.5228 10.3468 21.4533 10.6201C21.3839 10.8933 21.2388 11.1414 21.0348 11.336L17.6288 14.6L18.4378 19.238C18.4868 19.5139 18.4575 19.7981 18.3532 20.0583C18.249 20.3184 18.0739 20.5441 17.8479 20.7099C17.6219 20.8756 17.354 20.9747 17.0745 20.9959C16.7951 21.0172 16.5153 20.9597 16.2668 20.83L11.9998 18.625L7.7328 20.829Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (rt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (rt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var tt = ["size", "color", "strokeWidth"];
        function ot() {
          return (ot =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function nt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, tt);
          return e.createElement(
            "svg",
            ot({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M11.9998 4C10.0503 4.0003 8.16795 4.71245 6.70647 6.00267C5.24498 7.29289 4.30492 9.07237 4.06289 11.0068C3.82086 12.9412 4.29351 14.8975 5.39206 16.508C6.4906 18.1185 8.13943 19.2725 10.0288 19.7531C11.9181 20.2337 13.9179 20.0079 15.6525 19.118C17.3871 18.2282 18.7371 16.7356 19.4488 14.9207C20.1605 13.1057 20.185 11.0933 19.5177 9.26158C18.8504 7.42984 17.5372 5.90481 15.8248 4.973",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M15.8252 8.04799V4.51199H19.3612",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (nt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (nt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var it = ["size", "color", "strokeWidth"];
        function st() {
          return (st =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function lt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, it);
          return e.createElement(
            "svg",
            st({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 12H8",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M13 9L16 12L13 15",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (lt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (lt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var at = ["size", "color", "strokeWidth"];
        function ut() {
          return (ut =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function ct(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, at);
          return e.createElement(
            "svg",
            ut({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M9 18L15 12L9 6",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (ct.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (ct.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var pt = ["size", "color", "strokeWidth"];
        function ft() {
          return (ft =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function dt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, pt);
          return e.createElement(
            "svg",
            ft({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M14.1931 5.58187C16.525 7.91369 16.525 11.6943 14.1931 14.0261C11.8613 16.358 8.08069 16.358 5.74887 14.0261C3.41704 11.6943 3.41704 7.91369 5.74887 5.58187C8.08069 3.25005 11.8613 3.25005 14.1931 5.58187",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M14.1499 14.06L18.5899 18.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (dt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (dt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var ht = ["size", "color", "strokeWidth"];
        function kt() {
          return (kt =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function yt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, ht);
          return e.createElement(
            "svg",
            kt({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12.8001 3C13.006 3.00003 13.2069 3.06363 13.3753 3.18212C13.5438 3.3006 13.6715 3.4682 13.7411 3.662L14.2491 5.077C14.3297 5.29951 14.4863 5.48647 14.6911 5.605L16.1981 6.475C16.4027 6.59307 16.6426 6.63488 16.8751 6.593L18.3551 6.326C18.5579 6.28912 18.7672 6.31583 18.9543 6.40247C19.1413 6.48911 19.2971 6.63145 19.4001 6.81L20.2001 8.19C20.3034 8.36808 20.3493 8.57371 20.3314 8.77882C20.3135 8.98393 20.2327 9.17851 20.1001 9.336L19.1291 10.484C18.9762 10.6645 18.8922 10.8934 18.8921 11.13V12.87C18.8922 13.1066 18.9762 13.3355 19.1291 13.516L20.1001 14.664C20.2327 14.8215 20.3135 15.0161 20.3314 15.2212C20.3493 15.4263 20.3034 15.6319 20.2001 15.81L19.4001 17.19C19.2971 17.3684 19.1416 17.5106 18.9547 17.5972C18.7678 17.6838 18.5588 17.7107 18.3561 17.674L16.8761 17.407C16.6436 17.3651 16.4037 17.4069 16.1991 17.525L14.6921 18.395C14.4873 18.5135 14.3307 18.7005 14.2501 18.923L13.7421 20.338C13.6724 20.532 13.5446 20.6997 13.3759 20.8182C13.2073 20.9367 13.0062 21.0002 12.8001 21H11.2001C10.9942 21 10.7933 20.9364 10.6249 20.8179C10.4564 20.6994 10.3287 20.5318 10.2591 20.338L9.75111 18.923C9.6705 18.7008 9.51442 18.5139 9.31011 18.395L7.80211 17.525C7.59747 17.4069 7.35763 17.3651 7.12511 17.407L5.64511 17.674C5.44228 17.7109 5.23301 17.6842 5.04594 17.5975C4.85887 17.5109 4.70316 17.3686 4.60011 17.19L3.80011 15.81C3.69678 15.6319 3.65093 15.4263 3.66883 15.2212C3.68672 15.0161 3.76749 14.8215 3.90011 14.664L4.87111 13.516C5.02404 13.3355 5.10801 13.1066 5.10811 12.87V11.13C5.10801 10.8934 5.02404 10.6645 4.87111 10.484L3.91011 9.336C3.77749 9.17851 3.69672 8.98393 3.67883 8.77882C3.66093 8.57371 3.70678 8.36808 3.81011 8.19L4.61011 6.81C4.7131 6.63163 4.86865 6.48942 5.05551 6.40279C5.24238 6.31616 5.45143 6.28934 5.65411 6.326L7.13411 6.593C7.36663 6.63488 7.60647 6.59307 7.81111 6.475L9.31911 5.605C9.52342 5.48609 9.6795 5.29923 9.76011 5.077L10.2681 3.662C10.3372 3.46963 10.4635 3.30305 10.6302 3.18469C10.7968 3.06633 10.9957 3.00187 11.2001 3H12.8001Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (yt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (yt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Ot = ["size", "color", "strokeWidth"];
        function Ct() {
          return (Ct =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function gt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Ot);
          return e.createElement(
            "svg",
            Ct({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M8.55286 10.1141C9.59439 11.1556 9.59439 12.8443 8.55286 13.8858C7.51133 14.9273 5.82268 14.9273 4.78115 13.8858C3.73962 12.8443 3.73962 11.1556 4.78115 10.1141C5.82268 9.07256 7.51133 9.07256 8.55286 10.1141",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19.2189 4.78115C20.2604 5.82268 20.2604 7.51133 19.2189 8.55286C18.1773 9.59439 16.4887 9.59439 15.4472 8.55286C14.4056 7.51133 14.4056 5.82268 15.4472 4.78115C16.4887 3.73962 18.1773 3.73962 19.2189 4.78115",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19.2189 15.4471C20.2604 16.4886 20.2604 18.1773 19.2189 19.2188C18.1773 20.2603 16.4887 20.2603 15.4472 19.2188C14.4056 18.1773 14.4056 16.4886 15.4472 15.4471C16.4887 14.4056 18.1773 14.4056 19.2189 15.4471",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9.04004 10.81L14.96 7.85001",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9.04004 13.19L14.96 16.15",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (gt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (gt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var bt = ["size", "color", "strokeWidth"];
        function vt() {
          return (vt =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function mt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, bt);
          return e.createElement(
            "svg",
            vt({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M7 6H12.875C13.6706 6 14.4337 6.31607 14.9963 6.87868C15.5589 7.44129 15.875 8.20435 15.875 9V9C15.875 9.79565 15.5589 10.5587 14.9963 11.1213C14.4337 11.6839 13.6706 12 12.875 12H7V6ZM7 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15V15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H7V12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (mt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (mt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var jt = ["size", "color", "strokeWidth"];
        function Lt() {
          return (Lt =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Wt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, jt);
          return e.createElement(
            "svg",
            Lt({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M8 18H14C14.7956 18 15.5587 17.6839 16.1213 17.1213C16.6839 16.5587 17 15.7956 17 15V15",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M19 12H5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 6H11C10.2044 6 9.44129 6.31607 8.87868 6.87868C8.31607 7.44129 8 8.20435 8 9",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Wt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Wt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var wt = ["size", "color", "strokeWidth"];
        function Et() {
          return (Et =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Pt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, wt);
          return e.createElement(
            "svg",
            Et({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M5 6V18M13 6V18M5 12H13M18.5 18V13L17.25 14.25M20 18H17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Pt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Pt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var zt = ["size", "color", "strokeWidth"];
        function Mt() {
          return (Mt =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function xt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, zt);
          return e.createElement(
            "svg",
            Mt({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M17 14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13H18.6145C18.8723 13 19.1237 13.0811 19.3329 13.2319C19.542 13.3827 19.6985 13.5955 19.78 13.8401C19.8471 14.0414 19.8609 14.2566 19.8202 14.4648C19.7794 14.673 19.6854 14.8671 19.5473 15.0281L17 18H20M5 6V18M13 6V18M5 12H13",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (xt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (xt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Tt = ["size", "color", "strokeWidth"];
        function Ht() {
          return (Ht =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function St(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Tt);
          return e.createElement(
            "svg",
            Ht({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M10 6H17M13.5 6L10.5 18L13.5 6ZM14 18H7H14Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (St.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (St.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Vt = ["size", "color", "strokeWidth"];
        function It() {
          return (It =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Bt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Vt);
          return e.createElement(
            "svg",
            It({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M12 8.5V10.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M14.712 15.5C13.8803 14.9574 13.1968 14.2161 12.7233 13.3432C12.2498 12.4702 12.0012 11.4931 12 10.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12.0001 10.5C11.9988 11.4931 11.7502 12.4702 11.2768 13.3432C10.8033 14.2161 10.1198 14.9574 9.28809 15.5",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M15 10.5H9",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Bt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Bt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Zt = ["size", "color", "strokeWidth"];
        function _t() {
          return (_t =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Rt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Zt);
          return e.createElement(
            "svg",
            _t({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M12 8V16",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M9 11L12 8L15 11",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Rt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Rt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Nt = ["size", "color", "strokeWidth"];
        function $t() {
          return ($t =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function At(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Nt);
          return e.createElement(
            "svg",
            $t({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18 15L12 9L6 15",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (At.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (At.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Dt = ["size", "color", "strokeWidth"];
        function Ut() {
          return (Ut =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Ft(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Dt);
          return e.createElement(
            "svg",
            Ut({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M3 18C3 15.791 4.791 14 7 14H11C13.209 14 15 15.791 15 18",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M16 4.65137C17.381 4.65137 18.5 5.77037 18.5 7.15137C18.5 8.53237 17.381 9.65137 16 9.65137",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M11.4049 4.99613C12.7331 6.3243 12.7331 8.4777 11.4049 9.80587C10.0768 11.134 7.92336 11.134 6.59519 9.80587C5.26702 8.4777 5.26702 6.3243 6.59519 4.99613C7.92336 3.66796 10.0768 3.66796 11.4049 4.99613",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M17 13C19.209 13 21 14.791 21 17",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Ft.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Ft.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var qt = ["size", "color", "strokeWidth"];
        function Gt() {
          return (Gt =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Kt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, qt);
          return e.createElement(
            "svg",
            Gt({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M18 20V19C18 17.9391 17.5786 16.9217 16.8284 16.1716C16.0783 15.4214 15.0609 15 14 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V20",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M20.4144 12.4142L17.5859 9.58578",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.createElement("path", {
              d: "M17.5859 12.4142L20.4144 9.58578",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Kt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Kt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Yt = ["size", "color", "strokeWidth"];
        function Jt() {
          return (Jt =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Qt(r) {
          var t = r.size,
            o = r.color,
            n = r.strokeWidth,
            i = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t,
                    o,
                    n = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++)
                    (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                  return n;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]),
                    r.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, t) &&
                        (n[t] = e[t]));
              }
              return n;
            })(r, Yt);
          return e.createElement(
            "svg",
            Jt({ viewBox: "0 0 24 24", fill: "none", height: t, width: t }, i),
            e.createElement("path", {
              d: "M15.375 13.097L19.17 16.151C19.906 16.744 21 16.22 21 15.275V8.725C21 7.78 19.906 7.256 19.17 7.849L15.375 10.903M13.125 17.75H5.25C4.007 17.75 3 16.743 3 15.5V8.5C3 7.257 4.007 6.25 5.25 6.25H13.125C14.368 6.25 15.375 7.257 15.375 8.5V15.5C15.375 16.743 14.368 17.75 13.125 17.75Z",
              stroke: o,
              strokeWidth: n,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }
        (Qt.defaultProps = {
          color: "currentColor",
          size: 24,
          strokeWidth: "2",
        }),
          (Qt.propTypes = {
            color: n().string,
            size: n().oneOfType([n().string, n().number]),
            strokeWidth: n().oneOfType([n().string, n().number]),
          });
        var Xt = [
          "Blockquote",
          "Calendar",
          "Check",
          "Clock",
          "Close",
          "Code",
          "Copy",
          "Dashboard",
          "Delete",
          "Design",
          "DownArrow",
          "Down",
          "Edit",
          "Email",
          "Error",
          "ExternalLink",
          "Eye",
          "Favorite",
          "FilterAz",
          "Filter",
          "Globe",
          "Graph",
          "Highlight",
          "Home",
          "ImageUpload",
          "Image",
          "Keyboard",
          "LeftArrow",
          "Left",
          "Link",
          "ListDot",
          "ListNumber",
          "Loading",
          "Location",
          "Lock",
          "MenuHorizontal",
          "MenuVertical",
          "Message",
          "Minus",
          "NeetoAnalytics",
          "NeetoCal",
          "NeetoChangelog",
          "NeetoChat",
          "NeetoDesk",
          "NeetoForm",
          "NeetoIcon",
          "NeetoKb",
          "Neeto",
          "Notification",
          "Paragraph",
          "Plus",
          "Print",
          "Rating",
          "Refresh",
          "RightArrow",
          "Right",
          "Search",
          "Settings",
          "Share",
          "TextBold",
          "TextCross",
          "TextH1",
          "TextH2",
          "TextItalic",
          "Translate",
          "UpArrow",
          "Up",
          "UserCircle",
          "UserRemove",
          "Video",
        ];
      })(),
      o
    );
  })();
});
