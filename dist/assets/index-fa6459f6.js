(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var On = {},
  rc = {
    get exports() {
      return On;
    },
    set exports(e) {
      On = e;
    },
  },
  nl = {},
  ae = {},
  lc = {
    get exports() {
      return ae;
    },
    set exports(e) {
      ae = e;
    },
  },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zn = Symbol.for("react.element"),
  oc = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  ic = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  mc = Symbol.for("react.lazy"),
  Uu = Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uu && e[Uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yi = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xi = Object.assign,
  Gi = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gi),
    (this.updater = n || Yi);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zi() {}
Zi.prototype = on.prototype;
function Bo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gi),
    (this.updater = n || Yi);
}
var Ho = (Bo.prototype = new Zi());
Ho.constructor = Bo;
Xi(Ho, on.prototype);
Ho.isPureReactComponent = !0;
var $u = Array.isArray,
  Ji = Object.prototype.hasOwnProperty,
  Wo = { current: null },
  qi = { key: !0, ref: !0, __self: !0, __source: !0 };
function bi(e, t, n) {
  var r,
    l = {},
    o = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ji.call(t, r) && !qi.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
  return {
    $$typeof: Zn,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: Wo.current,
  };
}
function vc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function yc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Au = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : t.toString(36);
}
function Sr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case oc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === "" ? "." + kl(u, 0) : r),
      $u(l)
        ? ((n = ""),
          e != null && (n = e.replace(Au, "$&/") + "/"),
          Sr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ko(l) &&
            (l = vc(
              l,
              n +
                (!l.key || (u && u.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Au, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), $u(e)))
    for (var i = 0; i < e.length; i++) {
      o = e[i];
      var s = r + kl(o, i);
      u += Sr(o, t, n, s, l);
    }
  else if (((s = hc(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + kl(o, i++)), (u += Sr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ie = { current: null },
  kr = { transition: null },
  wc = {
    ReactCurrentDispatcher: ie,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Wo,
  };
L.Children = {
  map: rr,
  forEach: function (e, t, n) {
    rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ko(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = on;
L.Fragment = uc;
L.Profiler = sc;
L.PureComponent = Bo;
L.StrictMode = ic;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xi({}, e.props),
    l = e.key,
    o = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (u = Wo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in t)
      Ji.call(t, s) &&
        !qi.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: o, props: r, _owner: u };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ac, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = bi;
L.createFactory = function (e) {
  var t = bi.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: fc, render: e };
};
L.isValidElement = Ko;
L.lazy = function (e) {
  return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function (e, t) {
  return { $$typeof: pc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return ie.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ie.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ie.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ie.current.useEffect(e, t);
};
L.useId = function () {
  return ie.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ie.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ie.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ie.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ie.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ie.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ie.current.useRef(e);
};
L.useState = function (e) {
  return ie.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ie.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ie.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
  e.exports = L;
})(lc);
const Sc = nc(ae);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = ae,
  Ec = Symbol.for("react.element"),
  xc = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  _c = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    o = null,
    u = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) Cc.call(t, r) && !Nc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ec,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: _c.current,
  };
}
nl.Fragment = xc;
nl.jsx = es;
nl.jsxs = es;
(function (e) {
  e.exports = nl;
})(rc);
const Pc = On.Fragment,
  ne = On.jsx,
  gt = On.jsxs;
var Yl = {},
  Xl = {},
  zc = {
    get exports() {
      return Xl;
    },
    set exports(e) {
      Xl = e;
    },
  },
  we = {},
  Gl = {},
  Lc = {
    get exports() {
      return Gl;
    },
    set exports(e) {
      Gl = e;
    },
  },
  ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, P) {
    var z = x.length;
    x.push(P);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        X = x[B];
      if (0 < l(X, P)) (x[B] = P), (x[z] = X), (z = B);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var P = x[0],
      z = x.pop();
    if (z !== P) {
      x[0] = z;
      e: for (var B = 0, X = x.length, tr = X >>> 1; B < tr; ) {
        var vt = 2 * (B + 1) - 1,
          Sl = x[vt],
          yt = vt + 1,
          nr = x[yt];
        if (0 > l(Sl, z))
          yt < X && 0 > l(nr, Sl)
            ? ((x[B] = nr), (x[yt] = z), (B = yt))
            : ((x[B] = Sl), (x[vt] = z), (B = vt));
        else if (yt < X && 0 > l(nr, z)) (x[B] = nr), (x[yt] = z), (B = yt);
        else break e;
      }
    }
    return P;
  }
  function l(x, P) {
    var z = x.sortIndex - P.sortIndex;
    return z !== 0 ? z : x.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      i = u.now();
    e.unstable_now = function () {
      return u.now() - i;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    S = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= x)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function v(x) {
    if (((S = !1), d(x), !w))
      if (n(s) !== null) (w = !0), gl(k);
      else {
        var P = n(c);
        P !== null && wl(v, P.startTime - x);
      }
  }
  function k(x, P) {
    (w = !1), S && ((S = !1), f(N), (N = -1)), (g = !0);
    var z = p;
    try {
      for (
        d(P), m = n(s);
        m !== null && (!(m.expirationTime > P) || (x && !Pe()));

      ) {
        var B = m.callback;
        if (typeof B == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var X = B(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof X == "function" ? (m.callback = X) : m === n(s) && r(s),
            d(P);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var tr = !0;
      else {
        var vt = n(c);
        vt !== null && wl(v, vt.startTime - P), (tr = !1);
      }
      return tr;
    } finally {
      (m = null), (p = z), (g = !1);
    }
  }
  var C = !1,
    _ = null,
    N = -1,
    Q = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < Q);
  }
  function an() {
    if (_ !== null) {
      var x = e.unstable_now();
      T = x;
      var P = !0;
      try {
        P = _(!0, x);
      } finally {
        P ? cn() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var ju = new MessageChannel(),
      tc = ju.port2;
    (ju.port1.onmessage = an),
      (cn = function () {
        tc.postMessage(null);
      });
  } else
    cn = function () {
      M(an, 0);
    };
  function gl(x) {
    (_ = x), C || ((C = !0), cn());
  }
  function wl(x, P) {
    N = M(function () {
      x(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), gl(k));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var z = p;
      p = P;
      try {
        return x();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, P) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var z = p;
      p = x;
      try {
        return P();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (x, P, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        x)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = z + X),
        (x = {
          id: h++,
          callback: P,
          priorityLevel: x,
          startTime: z,
          expirationTime: X,
          sortIndex: -1,
        }),
        z > B
          ? ((x.sortIndex = z),
            t(c, x),
            n(s) === null &&
              x === n(c) &&
              (S ? (f(N), (N = -1)) : (S = !0), wl(v, z - B)))
          : ((x.sortIndex = X), t(s, x), w || g || ((w = !0), gl(k))),
        x
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (x) {
      var P = p;
      return function () {
        var z = p;
        p = P;
        try {
          return x.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(ts);
(function (e) {
  e.exports = ts;
})(Lc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ns = ae,
  ge = Gl;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rs = new Set(),
  Mn = {};
function Rt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) rs.add(t[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  Tc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vu = {},
  Qu = {};
function Rc(e) {
  return Zl.call(Qu, e)
    ? !0
    : Zl.call(Vu, e)
    ? !1
    : Tc.test(e)
    ? (Qu[e] = !0)
    : ((Vu[e] = !0), !1);
}
function Oc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    b[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  b[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  b[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  b[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    b[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  b[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  b[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  b[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  b[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yo = /[\-:]([a-z])/g;
function Xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yo, Xo);
    b[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yo, Xo);
    b[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yo, Xo);
  b[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  b[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  b[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
  var l = b.hasOwnProperty(t) ? b[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mc(t, n, l, r) && (n = null),
    r || l === null
      ? Rc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = ns.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  Dt = Symbol.for("react.portal"),
  Ft = Symbol.for("react.fragment"),
  Zo = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  ls = Symbol.for("react.provider"),
  os = Symbol.for("react.context"),
  Jo = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  qo = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  us = Symbol.for("react.offscreen"),
  Bu = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bu && e[Bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  El;
function wn(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var xl = !1;
function Cl(e, t) {
  if (!e || xl) return "";
  xl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          u = l.length - 1,
          i = o.length - 1;
        1 <= u && 0 <= i && l[u] !== o[i];

      )
        i--;
      for (; 1 <= u && 0 <= i; u--, i--)
        if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if ((u--, i--, 0 > i || l[u] !== o[i])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= i);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return "";
  }
}
function eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case Dt:
      return "Portal";
    case Jl:
      return "Profiler";
    case Zo:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case os:
        return (e.displayName || "Context") + ".Consumer";
      case ls:
        return (e._context.displayName || "Context") + ".Provider";
      case Jo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qo:
        return (
          (t = e.displayName || null), t !== null ? t : eo(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return eo(e(t));
        } catch {}
    }
  return null;
}
function Fc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eo(t);
    case 8:
      return t === Zo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function is(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ic(e) {
  var t = is(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Ic(e));
}
function ss(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = is(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function to(e, t) {
  var n = t.checked;
  return A({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function as(e, t) {
  (t = t.checked), t != null && Go(e, "checked", t, !1);
}
function no(e, t) {
  as(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ro(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ro(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Kt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function cs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  ds = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function (e) {
  jc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xn[t] = xn[e]);
  });
});
function ps(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xn.hasOwnProperty(e) && xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ms(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ps(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Uc = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uo(e, t) {
  if (t) {
    if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function io(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var so = null;
function bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ao = null,
  Yt = null,
  Xt = null;
function Xu(e) {
  if ((e = bn(e))) {
    if (typeof ao != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = il(t)), ao(e.stateNode, e.type, t));
  }
}
function hs(e) {
  Yt ? (Xt ? Xt.push(e) : (Xt = [e])) : (Yt = e);
}
function vs() {
  if (Yt) {
    var e = Yt,
      t = Xt;
    if (((Xt = Yt = null), Xu(e), t)) for (e = 0; e < t.length; e++) Xu(t[e]);
  }
}
function ys(e, t) {
  return e(t);
}
function gs() {}
var _l = !1;
function ws(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return ys(e, t, n);
  } finally {
    (_l = !1), (Yt !== null || Xt !== null) && (gs(), vs());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var co = !1;
if (We)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        co = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    co = !1;
  }
function $c(e, t, n, r, l, o, u, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1,
  Mr = null,
  Dr = !1,
  fo = null,
  Ac = {
    onError: function (e) {
      (Cn = !0), (Mr = e);
    },
  };
function Vc(e, t, n, r, l, o, u, i, s) {
  (Cn = !1), (Mr = null), $c.apply(Ac, arguments);
}
function Qc(e, t, n, r, l, o, u, i, s) {
  if ((Vc.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = Mr;
      (Cn = !1), (Mr = null);
    } else throw Error(y(198));
    Dr || ((Dr = !0), (fo = c));
  }
}
function Ot(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ss(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gu(e) {
  if (Ot(e) !== e) throw Error(y(188));
}
function Bc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ot(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Gu(l), e;
        if (o === r) return Gu(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === n) {
          (u = !0), (n = l), (r = o);
          break;
        }
        if (i === r) {
          (u = !0), (r = l), (n = o);
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === n) {
            (u = !0), (n = o), (r = l);
            break;
          }
          if (i === r) {
            (u = !0), (r = o), (n = l);
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function ks(e) {
  return (e = Bc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xs = ge.unstable_scheduleCallback,
  Zu = ge.unstable_cancelCallback,
  Hc = ge.unstable_shouldYield,
  Wc = ge.unstable_requestPaint,
  H = ge.unstable_now,
  Kc = ge.unstable_getCurrentPriorityLevel,
  eu = ge.unstable_ImmediatePriority,
  Cs = ge.unstable_UserBlockingPriority,
  Fr = ge.unstable_NormalPriority,
  Yc = ge.unstable_LowPriority,
  _s = ge.unstable_IdlePriority,
  rl = null,
  Ue = null;
function Xc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Jc,
  Gc = Math.log,
  Zc = Math.LN2;
function Jc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gc(e) / Zc) | 0)) | 0;
}
var ir = 64,
  sr = 4194304;
function kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? (r = kn(i)) : ((o &= u), o !== 0 && (r = kn(o)));
  } else (u = n & ~l), u !== 0 ? (r = kn(u)) : o !== 0 && (r = kn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - Oe(o),
      i = 1 << u,
      s = l[u];
    s === -1
      ? (!(i & n) || i & r) && (l[u] = qc(i, t))
      : s <= t && (e.expiredLanes |= i),
      (o &= ~i);
  }
}
function po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ns() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function ef(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function tu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Ps(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zs,
  nu,
  Ls,
  Ts,
  Rs,
  mo = !1,
  ar = [],
  rt = null,
  lt = null,
  ot = null,
  In = new Map(),
  jn = new Map(),
  be = [],
  tf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ju(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      In.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && nu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = pn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return In.set(o, pn(In.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), jn.set(o, pn(jn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Os(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ss(n)), t !== null)) {
          (e.blockedOn = t),
            Rs(e.priority, function () {
              Ls(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (so = r), n.target.dispatchEvent(r), (so = null);
    } else return (t = bn(n)), t !== null && nu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qu(e, t, n) {
  Er(e) && n.delete(t);
}
function rf() {
  (mo = !1),
    rt !== null && Er(rt) && (rt = null),
    lt !== null && Er(lt) && (lt = null),
    ot !== null && Er(ot) && (ot = null),
    In.forEach(qu),
    jn.forEach(qu);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mo ||
      ((mo = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, rf)));
}
function Un(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ar.length) {
    mn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && mn(rt, e),
      lt !== null && mn(lt, e),
      ot !== null && mn(ot, e),
      In.forEach(t),
      jn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Os(n), n.blockedOn === null && be.shift();
}
var Gt = Ge.ReactCurrentBatchConfig,
  jr = !0;
function lf(e, t, n, r) {
  var l = O,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (O = 1), ru(e, t, n, r);
  } finally {
    (O = l), (Gt.transition = o);
  }
}
function of(e, t, n, r) {
  var l = O,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (O = 4), ru(e, t, n, r);
  } finally {
    (O = l), (Gt.transition = o);
  }
}
function ru(e, t, n, r) {
  if (jr) {
    var l = ho(e, t, n, r);
    if (l === null) Il(e, t, r, Ur, n), Ju(e, r);
    else if (nf(l, e, t, n, r)) r.stopPropagation();
    else if ((Ju(e, r), t & 4 && -1 < tf.indexOf(e))) {
      for (; l !== null; ) {
        var o = bn(l);
        if (
          (o !== null && zs(o),
          (o = ho(e, t, n, r)),
          o === null && Il(e, t, r, Ur, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Ur = null;
function ho(e, t, n, r) {
  if (((Ur = null), (e = bo(r)), (e = kt(e)), e !== null))
    if (((t = Ot(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ss(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ur = e), null;
}
function Ms(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case eu:
          return 1;
        case Cs:
          return 4;
        case Fr:
        case Yc:
          return 16;
        case _s:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  lu = null,
  xr = null;
function Ds() {
  if (xr) return xr;
  var e,
    t = lu,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function bu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, u) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? cr
        : bu),
      (this.isPropagationStopped = bu),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ou = Se(un),
  qn = A({}, un, { view: 0, detail: 0 }),
  uf = Se(qn),
  Pl,
  zl,
  hn,
  ll = A({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((Pl = e.screenX - hn.screenX), (zl = e.screenY - hn.screenY))
              : (zl = Pl = 0),
            (hn = e)),
          Pl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  ei = Se(ll),
  sf = A({}, ll, { dataTransfer: 0 }),
  af = Se(sf),
  cf = A({}, qn, { relatedTarget: 0 }),
  Ll = Se(cf),
  ff = A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  df = Se(ff),
  pf = A({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mf = Se(pf),
  hf = A({}, un, { data: 0 }),
  ti = Se(hf),
  vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function uu() {
  return wf;
}
var Sf = A({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = vf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? yf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uu,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kf = Se(Sf),
  Ef = A({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ni = Se(Ef),
  xf = A({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uu,
  }),
  Cf = Se(xf),
  _f = A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nf = Se(_f),
  Pf = A({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zf = Se(Pf),
  Lf = [9, 13, 27, 32],
  iu = We && "CompositionEvent" in window,
  _n = null;
We && "documentMode" in document && (_n = document.documentMode);
var Tf = We && "TextEvent" in window && !_n,
  Fs = We && (!iu || (_n && 8 < _n && 11 >= _n)),
  ri = String.fromCharCode(32),
  li = !1;
function Is(e, t) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function js(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Rf(e, t) {
  switch (e) {
    case "compositionend":
      return js(t);
    case "keypress":
      return t.which !== 32 ? null : ((li = !0), ri);
    case "textInput":
      return (e = t.data), e === ri && li ? null : e;
    default:
      return null;
  }
}
function Of(e, t) {
  if (It)
    return e === "compositionend" || (!iu && Is(e, t))
      ? ((e = Ds()), (xr = lu = tt = null), (It = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Fs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function oi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
function Us(e, t, n, r) {
  hs(r),
    (t = $r(t, "onChange")),
    0 < t.length &&
      ((n = new ou("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Nn = null,
  $n = null;
function Df(e) {
  Gs(e, 0);
}
function ol(e) {
  var t = $t(e);
  if (ss(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var $s = !1;
if (We) {
  var Tl;
  if (We) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var ui = document.createElement("div");
      ui.setAttribute("oninput", "return;"),
        (Rl = typeof ui.oninput == "function");
    }
    Tl = Rl;
  } else Tl = !1;
  $s = Tl && (!document.documentMode || 9 < document.documentMode);
}
function ii() {
  Nn && (Nn.detachEvent("onpropertychange", As), ($n = Nn = null));
}
function As(e) {
  if (e.propertyName === "value" && ol($n)) {
    var t = [];
    Us(t, $n, e, bo(e)), ws(Df, t);
  }
}
function If(e, t, n) {
  e === "focusin"
    ? (ii(), (Nn = t), ($n = n), Nn.attachEvent("onpropertychange", As))
    : e === "focusout" && ii();
}
function jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol($n);
}
function Uf(e, t) {
  if (e === "click") return ol(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Af;
function An(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function si(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ai(e, t) {
  var n = si(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = si(n);
  }
}
function Vs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Vs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qs() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vf(e) {
  var t = Qs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && su(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ai(n, o));
        var u = ai(n, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qf = We && "documentMode" in document && 11 >= document.documentMode,
  jt = null,
  vo = null,
  Pn = null,
  yo = !1;
function ci(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yo ||
    jt == null ||
    jt !== Or(r) ||
    ((r = jt),
    "selectionStart" in r && su(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && An(Pn, r)) ||
      ((Pn = r),
      (r = $r(vo, "onSelect")),
      0 < r.length &&
        ((t = new ou("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jt))));
}
function fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Bs = {};
We &&
  ((Bs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function ul(e) {
  if (Ol[e]) return Ol[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bs) return (Ol[e] = t[n]);
  return e;
}
var Hs = ul("animationend"),
  Ws = ul("animationiteration"),
  Ks = ul("animationstart"),
  Ys = ul("transitionend"),
  Xs = new Map(),
  fi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  Xs.set(e, t), Rt(t, [e]);
}
for (var Ml = 0; Ml < fi.length; Ml++) {
  var Dl = fi[Ml],
    Bf = Dl.toLowerCase(),
    Hf = Dl[0].toUpperCase() + Dl.slice(1);
  pt(Bf, "on" + Hf);
}
pt(Hs, "onAnimationEnd");
pt(Ws, "onAnimationIteration");
pt(Ks, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Ys, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Rt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var En =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function di(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qc(r, t, void 0, e), (e.currentTarget = null);
}
function Gs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u],
            s = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
          di(l, i, c), (o = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((i = r[u]),
            (s = i.instance),
            (c = i.currentTarget),
            (i = i.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          di(l, i, c), (o = s);
        }
    }
  }
  if (Dr) throw ((e = fo), (Dr = !1), (fo = null), e);
}
function F(e, t) {
  var n = t[Eo];
  n === void 0 && (n = t[Eo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zs(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), Zs(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      rs.forEach(function (n) {
        n !== "selectionchange" && (Wf.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Fl("selectionchange", !1, t));
  }
}
function Zs(e, t, n, r) {
  switch (Ms(t)) {
    case 1:
      var l = lf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = ru;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !co ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; i !== null; ) {
          if (((u = kt(i)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  ws(function () {
    var c = o,
      h = bo(n),
      m = [];
    e: {
      var p = Xs.get(e);
      if (p !== void 0) {
        var g = ou,
          w = e;
        switch (e) {
          case "keypress":
            if (Cr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = kf;
            break;
          case "focusin":
            (w = "focus"), (g = Ll);
            break;
          case "focusout":
            (w = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ei;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Cf;
            break;
          case Hs:
          case Ws:
          case Ks:
            g = df;
            break;
          case Ys:
            g = Nf;
            break;
          case "scroll":
            g = uf;
            break;
          case "wheel":
            g = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ni;
        }
        var S = (t & 4) !== 0,
          M = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Fn(a, f)), v != null && S.push(Qn(a, v, d)))),
            M)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new g(p, w, null, n, h)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== so &&
            (w = n.relatedTarget || n.fromElement) &&
            (kt(w) || w[Ke]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? kt(w) : null),
              w !== null &&
                ((M = Ot(w)), w !== M || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((S = ei),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = ni),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (M = g == null ? p : $t(g)),
            (d = w == null ? p : $t(w)),
            (p = new S(v, a + "leave", g, n, h)),
            (p.target = M),
            (p.relatedTarget = d),
            (v = null),
            kt(h) === c &&
              ((S = new S(f, a + "enter", w, n, h)),
              (S.target = d),
              (S.relatedTarget = M),
              (v = S)),
            (M = v),
            g && w)
          )
            t: {
              for (S = g, f = w, a = 0, d = S; d; d = Mt(d)) a++;
              for (d = 0, v = f; v; v = Mt(v)) d++;
              for (; 0 < a - d; ) (S = Mt(S)), a--;
              for (; 0 < d - a; ) (f = Mt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Mt(S)), (f = Mt(f));
              }
              S = null;
            }
          else S = null;
          g !== null && pi(m, p, g, S, !1),
            w !== null && M !== null && pi(m, M, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? $t(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var k = Ff;
        else if (oi(p))
          if ($s) k = $f;
          else {
            k = jf;
            var C = If;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = Uf);
        if (k && (k = k(e, c))) {
          Us(m, k, n, h);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            ro(p, "number", p.value);
      }
      switch (((C = c ? $t(c) : window), e)) {
        case "focusin":
          (oi(C) || C.contentEditable === "true") &&
            ((jt = C), (vo = c), (Pn = null));
          break;
        case "focusout":
          Pn = vo = jt = null;
          break;
        case "mousedown":
          yo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yo = !1), ci(m, n, h);
          break;
        case "selectionchange":
          if (Qf) break;
        case "keydown":
        case "keyup":
          ci(m, n, h);
      }
      var _;
      if (iu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        It
          ? Is(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Fs &&
          n.locale !== "ko" &&
          (It || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && It && (_ = Ds())
            : ((tt = h),
              (lu = "value" in tt ? tt.value : tt.textContent),
              (It = !0))),
        (C = $r(c, N)),
        0 < C.length &&
          ((N = new ti(N, e, null, n, h)),
          m.push({ event: N, listeners: C }),
          _ ? (N.data = _) : ((_ = js(n)), _ !== null && (N.data = _)))),
        (_ = Tf ? Rf(e, n) : Of(e, n)) &&
          ((c = $r(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new ti("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    Gs(m, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Fn(e, n)),
      o != null && r.unshift(Qn(e, o, l)),
      (o = Fn(e, t)),
      o != null && r.push(Qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pi(e, t, n, r, l) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var i = n,
      s = i.alternate,
      c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      l
        ? ((s = Fn(n, o)), s != null && u.unshift(Qn(n, s, i)))
        : l || ((s = Fn(n, o)), s != null && u.push(Qn(n, s, i)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Kf = /\r\n?/g,
  Yf = /\u0000|\uFFFD/g;
function mi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kf,
      `
`
    )
    .replace(Yf, "");
}
function pr(e, t, n) {
  if (((t = mi(t)), mi(e) !== t && n)) throw Error(y(425));
}
function Ar() {}
var go = null,
  wo = null;
function So(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ko = typeof setTimeout == "function" ? setTimeout : void 0,
  Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hi = typeof Promise == "function" ? Promise : void 0,
  Gf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hi < "u"
      ? function (e) {
          return hi.resolve(null).then(e).catch(Zf);
        }
      : ko;
function Zf(e) {
  setTimeout(function () {
    throw e;
  });
}
function jl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Un(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Un(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vi(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  je = "__reactFiber$" + sn,
  Bn = "__reactProps$" + sn,
  Ke = "__reactContainer$" + sn,
  Eo = "__reactEvents$" + sn,
  Jf = "__reactListeners$" + sn,
  qf = "__reactHandles$" + sn;
function kt(e) {
  var t = e[je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vi(e); e !== null; ) {
          if ((n = e[je])) return n;
          e = vi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[je] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Bn] || null;
}
var xo = [],
  At = -1;
function mt(e) {
  return { current: e };
}
function I(e) {
  0 > At || ((e.current = xo[At]), (xo[At] = null), At--);
}
function D(e, t) {
  At++, (xo[At] = e.current), (e.current = t);
}
var dt = {},
  le = mt(dt),
  de = mt(!1),
  Nt = dt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Vr() {
  I(de), I(le);
}
function yi(e, t, n) {
  if (le.current !== dt) throw Error(y(168));
  D(le, t), D(de, n);
}
function Js(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Fc(e) || "Unknown", l));
  return A({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = le.current),
    D(le, e),
    D(de, de.current),
    !0
  );
}
function gi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = Js(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(de),
      I(le),
      D(le, e))
    : I(de),
    D(de, n);
}
var Ve = null,
  sl = !1,
  Ul = !1;
function qs(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function bf(e) {
  (sl = !0), qs(e);
}
function ht() {
  if (!Ul && Ve !== null) {
    Ul = !0;
    var e = 0,
      t = O;
    try {
      var n = Ve;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (sl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), xs(eu, ht), l);
    } finally {
      (O = t), (Ul = !1);
    }
  }
  return null;
}
var Vt = [],
  Qt = 0,
  Br = null,
  Hr = 0,
  ke = [],
  Ee = 0,
  Pt = null,
  Qe = 1,
  Be = "";
function wt(e, t) {
  (Vt[Qt++] = Hr), (Vt[Qt++] = Br), (Br = e), (Hr = t);
}
function bs(e, t, n) {
  (ke[Ee++] = Qe), (ke[Ee++] = Be), (ke[Ee++] = Pt), (Pt = e);
  var r = Qe;
  e = Be;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var u = l - (l % 5);
    (o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (Qe = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Be = o + e);
  } else (Qe = (1 << o) | (n << l) | r), (Be = e);
}
function au(e) {
  e.return !== null && (wt(e, 1), bs(e, 1, 0));
}
function cu(e) {
  for (; e === Br; )
    (Br = Vt[--Qt]), (Vt[Qt] = null), (Hr = Vt[--Qt]), (Vt[Qt] = null);
  for (; e === Pt; )
    (Pt = ke[--Ee]),
      (ke[Ee] = null),
      (Be = ke[--Ee]),
      (ke[Ee] = null),
      (Qe = ke[--Ee]),
      (ke[Ee] = null);
}
var ye = null,
  ve = null,
  j = !1,
  Re = null;
function ea(e, t) {
  var n = xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Qe, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _o(e) {
  if (j) {
    var t = ve;
    if (t) {
      var n = t;
      if (!wi(e, t)) {
        if (Co(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ye;
        t && wi(e, t)
          ? ea(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e));
      }
    } else {
      if (Co(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e);
    }
  }
}
function Si(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!j) return Si(e), (j = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Co(e)) throw (ta(), Error(y(418)));
    for (; t; ) ea(e, t), (t = ut(t.nextSibling));
  }
  if ((Si(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function ta() {
  for (var e = ve; e; ) e = ut(e.nextSibling);
}
function en() {
  (ve = ye = null), (j = !1);
}
function fu(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var ed = Ge.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = A({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wr = mt(null),
  Kr = null,
  Bt = null,
  du = null;
function pu() {
  du = Bt = Kr = null;
}
function mu(e) {
  var t = Wr.current;
  I(Wr), (e._currentValue = t);
}
function No(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zt(e, t) {
  (Kr = e),
    (du = Bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (du !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bt === null)) {
      if (Kr === null) throw Error(y(308));
      (Bt = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else Bt = Bt.next = e;
  return t;
}
var Et = null;
function hu(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function na(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), hu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function vu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ra(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function it(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), hu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function _r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), tu(e, n);
  }
}
function ki(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      c = s.next;
    (s.next = null), u === null ? (o = c) : (u.next = c), (u = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (i = h.lastBaseUpdate),
      i !== u &&
        (i === null ? (h.firstBaseUpdate = c) : (i.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (u = 0), (h = c = s = null), (i = o);
    do {
      var p = i.lane,
        g = i.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            S = i;
          switch (((p = t), (g = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(g, m, p) : w),
                p == null)
              )
                break e;
              m = A({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [i]) : p.push(i));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (u |= p);
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) break;
        (p = i),
          (i = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (u |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Lt |= u), (e.lanes = u), (e.memoizedState = m);
  }
}
function Ei(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var la = new ns.Component().refs;
function Po(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : A({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = it(e, o, l)),
      t !== null && (Me(t, e, l, r), _r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = it(e, o, l)),
      t !== null && (Me(t, e, l, r), _r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = at(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = it(e, l, r)),
      t !== null && (Me(t, e, r, n), _r(t, e, r));
  },
};
function xi(e, t, n, r, l, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !An(n, r) || !An(l, o)
      : !0
  );
}
function oa(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _e(o))
      : ((l = pe(t) ? Nt : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ci(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function zo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = la), vu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = _e(o))
    : ((o = pe(t) ? Nt : le.current), (l.context = bt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Po(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (u) {
            var i = l.refs;
            i === la && (i = l.refs = {}),
              u === null ? delete i[o] : (i[o] = u);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _i(e) {
  var t = e._init;
  return t(e._payload);
}
function ua(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Wl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var k = d.type;
    return k === Ft
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Je &&
            _i(k) === a.type))
      ? ((v = l(a, d.props)), (v.ref = vn(f, a, d)), (v.return = f), v)
      : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = vn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, k) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, v, k)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Wl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (d = Rr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case Dt:
          return (a = Kl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (Sn(a) || fn(a))
        return (a = _t(a, f.mode, d, null)), (a.return = f), a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === k ? s(f, a, d, v) : null;
        case Dt:
          return d.key === k ? c(f, a, d, v) : null;
        case Je:
          return (k = d._init), p(f, a, k(d._payload), v);
      }
      if (Sn(d) || fn(d)) return k !== null ? null : h(f, a, d, v, null);
      hr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), i(a, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, k);
        case Dt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, k);
        case Je:
          var C = v._init;
          return g(f, a, d, C(v._payload), k);
      }
      if (Sn(v) || fn(v)) return (f = f.get(d) || null), h(a, f, v, k, null);
      hr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var k = null, C = null, _ = a, N = (a = 0), Q = null;
      _ !== null && N < d.length;
      N++
    ) {
      _.index > N ? ((Q = _), (_ = null)) : (Q = _.sibling);
      var T = p(f, _, d[N], v);
      if (T === null) {
        _ === null && (_ = Q);
        break;
      }
      e && _ && T.alternate === null && t(f, _),
        (a = o(T, a, N)),
        C === null ? (k = T) : (C.sibling = T),
        (C = T),
        (_ = Q);
    }
    if (N === d.length) return n(f, _), j && wt(f, N), k;
    if (_ === null) {
      for (; N < d.length; N++)
        (_ = m(f, d[N], v)),
          _ !== null &&
            ((a = o(_, a, N)), C === null ? (k = _) : (C.sibling = _), (C = _));
      return j && wt(f, N), k;
    }
    for (_ = r(f, _); N < d.length; N++)
      (Q = g(_, f, N, d[N], v)),
        Q !== null &&
          (e && Q.alternate !== null && _.delete(Q.key === null ? N : Q.key),
          (a = o(Q, a, N)),
          C === null ? (k = Q) : (C.sibling = Q),
          (C = Q));
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe);
        }),
      j && wt(f, N),
      k
    );
  }
  function S(f, a, d, v) {
    var k = fn(d);
    if (typeof k != "function") throw Error(y(150));
    if (((d = k.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (k = null), _ = a, N = (a = 0), Q = null, T = d.next();
      _ !== null && !T.done;
      N++, T = d.next()
    ) {
      _.index > N ? ((Q = _), (_ = null)) : (Q = _.sibling);
      var Pe = p(f, _, T.value, v);
      if (Pe === null) {
        _ === null && (_ = Q);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _),
        (a = o(Pe, a, N)),
        C === null ? (k = Pe) : (C.sibling = Pe),
        (C = Pe),
        (_ = Q);
    }
    if (T.done) return n(f, _), j && wt(f, N), k;
    if (_ === null) {
      for (; !T.done; N++, T = d.next())
        (T = m(f, T.value, v)),
          T !== null &&
            ((a = o(T, a, N)), C === null ? (k = T) : (C.sibling = T), (C = T));
      return j && wt(f, N), k;
    }
    for (_ = r(f, _); !T.done; N++, T = d.next())
      (T = g(_, f, N, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? N : T.key),
          (a = o(T, a, N)),
          C === null ? (k = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        _.forEach(function (an) {
          return t(f, an);
        }),
      j && wt(f, N),
      k
    );
  }
  function M(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ft &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var k = d.key, C = a; C !== null; ) {
              if (C.key === k) {
                if (((k = d.type), k === Ft)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Je &&
                    _i(k) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = vn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ft
              ? ((a = _t(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = vn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return u(f);
        case Dt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Kl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return u(f);
        case Je:
          return (C = d._init), M(f, a, C(d._payload), v);
      }
      if (Sn(d)) return w(f, a, d, v);
      if (fn(d)) return S(f, a, d, v);
      hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Wl(d, f.mode, v)), (a.return = f), (f = a)),
        u(f))
      : n(f, a);
  }
  return M;
}
var tn = ua(!0),
  ia = ua(!1),
  er = {},
  $e = mt(er),
  Hn = mt(er),
  Wn = mt(er);
function xt(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function yu(e, t) {
  switch ((D(Wn, t), D(Hn, e), D($e, er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oo(t, e));
  }
  I($e), D($e, t);
}
function nn() {
  I($e), I(Hn), I(Wn);
}
function sa(e) {
  xt(Wn.current);
  var t = xt($e.current),
    n = oo(t, e.type);
  t !== n && (D(Hn, e), D($e, n));
}
function gu(e) {
  Hn.current === e && (I($e), I(Hn));
}
var U = mt(0);
function Xr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function wu() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Nr = Ge.ReactCurrentDispatcher,
  Al = Ge.ReactCurrentBatchConfig,
  zt = 0,
  $ = null,
  K = null,
  G = null,
  Gr = !1,
  zn = !1,
  Kn = 0,
  td = 0;
function ee() {
  throw Error(y(321));
}
function Su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, l, o) {
  if (
    ((zt = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? od : ud),
    (e = n(r, l)),
    zn)
  ) {
    o = 0;
    do {
      if (((zn = !1), (Kn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (G = K = null),
        (t.updateQueue = null),
        (Nr.current = id),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((Nr.current = Zr),
    (t = K !== null && K.next !== null),
    (zt = 0),
    (G = K = $ = null),
    (Gr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Eu() {
  var e = Kn !== 0;
  return (Kn = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? ($.memoizedState = G = e) : (G = G.next = e), G;
}
function Ne() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = G === null ? $.memoizedState : G.next;
  if (t !== null) (G = t), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      G === null ? ($.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = o.next), (o.next = u);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var i = (u = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((zt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((i = s = m), (u = r)) : (s = s.next = m),
          ($.lanes |= h),
          (Lt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (u = r) : (s.next = i),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Lt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = (l = l.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== l);
    De(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function aa() {}
function ca(e, t) {
  var n = $,
    r = Ne(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    xu(pa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xn(9, da.bind(null, n, r, l, t), void 0, null),
      Z === null)
    )
      throw Error(y(349));
    zt & 30 || fa(n, t, l);
  }
  return l;
}
function fa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ma(t) && ha(e);
}
function pa(e, t, n) {
  return n(function () {
    ma(t) && ha(e);
  });
}
function ma(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function ha(e) {
  var t = Ye(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Ni(e) {
  var t = Ie();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ld.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Xn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function va() {
  return Ne().memoizedState;
}
function Pr(e, t, n, r) {
  var l = Ie();
  ($.flags |= e),
    (l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r));
}
function cl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var u = K.memoizedState;
    if (((o = u.destroy), r !== null && Su(r, u.deps))) {
      l.memoizedState = Xn(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Xn(1 | t, n, o, r));
}
function Pi(e, t) {
  return Pr(8390656, 8, e, t);
}
function xu(e, t) {
  return cl(2048, 8, e, t);
}
function ya(e, t) {
  return cl(4, 2, e, t);
}
function ga(e, t) {
  return cl(4, 4, e, t);
}
function wa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Sa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cl(4, 4, wa.bind(null, t, e), n)
  );
}
function Cu() {}
function ka(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ea(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xa(e, t, n) {
  return zt & 21
    ? (De(n, t) || ((n = Ns()), ($.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function nd(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Al.transition = r);
  }
}
function Ca() {
  return Ne().memoizedState;
}
function rd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _a(e))
  )
    Na(t, n);
  else if (((n = na(e, t, n, r)), n !== null)) {
    var l = ue();
    Me(n, e, r, l), Pa(n, t, r);
  }
}
function ld(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_a(e)) Na(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var u = t.lastRenderedState,
          i = o(u, n);
        if (((l.hasEagerState = !0), (l.eagerState = i), De(i, u))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), hu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = na(e, t, l, r)),
      n !== null && ((l = ue()), Me(n, e, r, l), Pa(n, t, r));
  }
}
function _a(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function Na(e, t) {
  zn = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Pa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), tu(e, n);
  }
}
var Zr = {
    readContext: _e,
    useCallback: ee,
    useContext: ee,
    useEffect: ee,
    useImperativeHandle: ee,
    useInsertionEffect: ee,
    useLayoutEffect: ee,
    useMemo: ee,
    useReducer: ee,
    useRef: ee,
    useState: ee,
    useDebugValue: ee,
    useDeferredValue: ee,
    useTransition: ee,
    useMutableSource: ee,
    useSyncExternalStore: ee,
    useId: ee,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Pi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Pr(4194308, 4, wa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Pr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Pr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ie();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ie();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ie();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ni,
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = Ni(!1),
        t = e[0];
      return (e = nd.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Ie();
      if (j) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), Z === null)) throw Error(y(349));
        zt & 30 || fa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Pi(pa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xn(9, da.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ie(),
        t = Z.identifierPrefix;
      if (j) {
        var n = Be,
          r = Qe;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = td++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: _e,
    useCallback: ka,
    useContext: _e,
    useEffect: xu,
    useImperativeHandle: Sa,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Ea,
    useReducer: Vl,
    useRef: va,
    useState: function () {
      return Vl(Yn);
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = Ne();
      return xa(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Yn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ca,
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: _e,
    useCallback: ka,
    useContext: _e,
    useEffect: xu,
    useImperativeHandle: Sa,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Ea,
    useReducer: Ql,
    useRef: va,
    useState: function () {
      return Ql(Yn);
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = Ne();
      return K === null ? (t.memoizedState = e) : xa(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Yn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ca,
    unstable_isNewReconciler: !1,
  };
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sd = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, t, n) {
  (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      qr || ((qr = !0), ($o = r)), Lo(e, t);
    }),
    n
  );
}
function La(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Lo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Lo(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function zi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ed.bind(null, e, t, n)), t.then(e, e));
}
function Li(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ti(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), it(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ad = Ge.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ia(t, null, n, r) : tn(t, e.child, n, r);
}
function Ri(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zt(t, l),
    (r = ku(e, t, n, r, o, l)),
    (n = Eu()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (j && n && au(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Oi(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ou(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ta(e, t, o, r, l))
      : ((e = Rr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var u = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : An), n(u, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ta(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (An(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return To(e, t, n, r, l);
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Wt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Wt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Wt, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Wt, he),
      (he |= r);
  return oe(e, t, l, n), t.child;
}
function Oa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function To(e, t, n, r, l) {
  var o = pe(n) ? Nt : le.current;
  return (
    (o = bt(t, o)),
    Zt(t, l),
    (n = ku(e, t, n, r, o, l)),
    (r = Eu()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (j && r && au(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Mi(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Qr(t);
  } else o = !1;
  if ((Zt(t, l), t.stateNode === null))
    zr(e, t), oa(t, n, r), zo(t, n, r, l), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      i = t.memoizedProps;
    u.props = i;
    var s = u.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = pe(n) ? Nt : le.current), (c = bt(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== r || s !== c) && Ci(t, u, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (u.state = p),
      Yr(t, r, u, l),
      (s = t.memoizedState),
      i !== r || p !== s || de.current || qe
        ? (typeof h == "function" && (Po(t, n, h, r), (s = t.memoizedState)),
          (i = qe || xi(t, n, i, r, p, s, c))
            ? (m ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = c),
          (r = i))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      ra(e, t),
      (i = t.memoizedProps),
      (c = t.type === t.elementType ? i : Le(t.type, i)),
      (u.props = c),
      (m = t.pendingProps),
      (p = u.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(n) ? Nt : le.current), (s = bt(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== m || p !== s) && Ci(t, u, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (u.state = p),
      Yr(t, r, u, l);
    var w = t.memoizedState;
    i !== m || p !== w || de.current || qe
      ? (typeof g == "function" && (Po(t, n, g, r), (w = t.memoizedState)),
        (c = qe || xi(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, w, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, w, s)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (u.props = r),
        (u.state = w),
        (u.context = s),
        (r = c))
      : (typeof u.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ro(e, t, n, r, o, l);
}
function Ro(e, t, n, r, l, o) {
  Oa(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && gi(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (ad.current = t);
  var i =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, i, o)))
      : oe(e, t, i, o),
    (t.memoizedState = r.state),
    l && gi(t, n, !0),
    t.child
  );
}
function Ma(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yi(e, t.context, !1),
    yu(e, t.containerInfo);
}
function Di(e, t, n, r, l) {
  return en(), fu(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    o = !1,
    u = (t.flags & 128) !== 0,
    i;
  if (
    ((i = u) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(U, l & 1),
    e === null)
  )
    return (
      _o(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = pl(u, r, 0, null)),
              (e = _t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Mo(n)),
              (t.memoizedState = Oo),
              e)
            : _u(t, u))
    );
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
    return cd(e, t, u, r, i, l, n);
  if (o) {
    (o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (o = ct(i, o)) : ((o = _t(o, u, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Mo(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _u(e, t) {
  return (
    (t = pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vr(e, t, n, r) {
  return (
    r !== null && fu(r),
    tn(t, e.child, null, n),
    (e = _u(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cd(e, t, n, r, l, o, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(y(422)))), vr(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = pl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = _t(o, l, u, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, u),
        (t.child.memoizedState = Mo(u)),
        (t.memoizedState = Oo),
        o);
  if (!(t.mode & 1)) return vr(e, t, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (o = Error(y(419))), (r = Bl(o, r, void 0)), vr(e, t, u, r);
  }
  if (((i = (u & e.childLanes) !== 0), fe || i)) {
    if (((r = Z), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Me(r, e, l, -1));
    }
    return Ru(), (r = Bl(Error(y(421)))), vr(e, t, u, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = ut(l.nextSibling)),
      (ye = t),
      (j = !0),
      (Re = null),
      e !== null &&
        ((ke[Ee++] = Qe),
        (ke[Ee++] = Be),
        (ke[Ee++] = Pt),
        (Qe = e.id),
        (Be = e.overflow),
        (Pt = t)),
      (t = _u(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), No(e.return, t, n);
}
function Hl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fi(e, n, t);
        else if (e.tag === 19) Fi(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Xr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Hl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Hl(t, !0, n, null, o);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ma(t), en();
      break;
    case 5:
      sa(t);
      break;
    case 1:
      pe(t.type) && Qr(t);
      break;
    case 4:
      yu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Da(e, t, n)
          : (D(U, U.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      D(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ra(e, t, n);
  }
  return Xe(e, t, n);
}
var Ia, Do, ja, Ua;
Ia = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Do = function () {};
ja = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), xt($e.current);
    var o = null;
    switch (n) {
      case "input":
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = lo(e, l)), (r = lo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ar);
    }
    uo(n, r);
    var u;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Mn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((i = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== i && (s != null || i != null))
      )
        if (c === "style")
          if (i) {
            for (u in i)
              !i.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                i[u] !== s[u] &&
                (n || (n = {}), (n[u] = s[u]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Mn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  o || i === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dd(e, t, n) {
  var r = t.pendingProps;
  switch ((cu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(t), null;
    case 1:
      return pe(t.type) && Vr(), te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        I(de),
        I(le),
        wu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (Qo(Re), (Re = null)))),
        Do(e, t),
        te(t),
        null
      );
    case 5:
      gu(t);
      var l = xt(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ja(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return te(t), null;
        }
        if (((e = xt($e.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[je] = t), (r[Bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < En.length; l++) F(En[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Hu(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Ku(r, o), F("invalid", r);
          }
          uo(n, o), (l = null);
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, i, e),
                    (l = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, i, e),
                    (l = ["children", "" + i]))
                : Mn.hasOwnProperty(u) &&
                  i != null &&
                  u === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), Wu(r, o, !0);
              break;
            case "textarea":
              or(r), Yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ar);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[je] = t),
            (e[Bn] = r),
            Ia(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = io(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) F(En[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Hu(e, r), (l = to(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Ku(e, r), (l = lo(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            uo(n, l), (i = l);
            for (o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style"
                  ? ms(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ds(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Dn(e, s)
                    : typeof s == "number" && Dn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Mn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && F("scroll", e)
                      : s != null && Go(e, o, s, u));
              }
            switch (n) {
              case "input":
                or(e), Wu(e, r, !1);
                break;
              case "textarea":
                or(e), Yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return te(t), null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = xt(Wn.current)), xt($e.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[je] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[je] = t),
            (t.stateNode = r);
      }
      return te(t), null;
    case 13:
      if (
        (I(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (j && ve !== null && t.mode & 1 && !(t.flags & 128))
          ta(), en(), (t.flags |= 98560), (o = !1);
        else if (((o = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[je] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          te(t), (o = !1);
        } else Re !== null && (Qo(Re), (Re = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Ru())),
          t.updateQueue !== null && (t.flags |= 4),
          te(t),
          null);
    case 4:
      return (
        nn(), Do(e, t), e === null && Vn(t.stateNode.containerInfo), te(t), null
      );
    case 10:
      return mu(t.type._context), te(t), null;
    case 17:
      return pe(t.type) && Vr(), te(t), null;
    case 19:
      if ((I(U), (o = t.memoizedState), o === null)) return te(t), null;
      if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) yn(o, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = Xr(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    yn(o, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            H() > ln &&
            ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !u.alternate && !j)
            )
              return te(t), null;
          } else
            2 * H() - o.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = o.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (o.last = u));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = H()),
          (t.sibling = null),
          (n = U.current),
          D(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (te(t), null);
    case 22:
    case 23:
      return (
        Tu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function pd(e, t) {
  switch ((cu(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Vr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        I(de),
        I(le),
        wu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gu(t), null;
    case 13:
      if ((I(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(U), null;
    case 4:
      return nn(), null;
    case 10:
      return mu(t.type._context), null;
    case 22:
    case 23:
      return Tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  re = !1,
  md = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Fo(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Ii = !1;
function hd(e, t) {
  if (((go = jr), (e = Qs()), su(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            i = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (l !== 0 && m.nodeType !== 3) || (i = u + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = u + r),
                m.nodeType === 3 && (u += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (i = u),
                p === o && ++h === r && (s = u),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wo = { focusedElem: e, selectionRange: n }, jr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    M = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Le(t.type, S),
                      M
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = Ii), (Ii = !1), w;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Fo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Io(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[je], delete t[Bn], delete t[Eo], delete t[Jf], delete t[qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ji(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Aa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jo(e, t, n), e = e.sibling; e !== null; ) jo(e, t, n), (e = e.sibling);
}
function Uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uo(e, t, n), e = e.sibling; e !== null; ) Uo(e, t, n), (e = e.sibling);
}
var J = null,
  Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Va(e, t, n), (n = n.sibling);
}
function Va(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Ht(n, t);
    case 6:
      var r = J,
        l = Te;
      (J = null),
        Ze(e, t, n),
        (J = r),
        (Te = l),
        J !== null &&
          (Te
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode));
      break;
    case 18:
      J !== null &&
        (Te
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? jl(e.parentNode, n)
              : e.nodeType === 1 && jl(e, n),
            Un(e))
          : jl(J, n.stateNode));
      break;
    case 4:
      (r = J),
        (l = Te),
        (J = n.stateNode.containerInfo),
        (Te = !0),
        Ze(e, t, n),
        (J = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            u = o.destroy;
          (o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && Fo(n, t, u),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Ht(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          V(n, t, i);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ze(e, t, n), (re = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Ui(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new md()),
      t.forEach(function (r) {
        var l = Cd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          u = t,
          i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (J = i.stateNode), (Te = !1);
              break e;
            case 3:
              (J = i.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (J = i.stateNode.containerInfo), (Te = !0);
              break e;
          }
          i = i.return;
        }
        if (J === null) throw Error(y(160));
        Va(o, u, l), (J = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        V(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qa(t, e), (t = t.sibling);
}
function Qa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Fe(e), r & 4)) {
        try {
          Ln(3, e, e.return), fl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          Ln(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      ze(t, e), Fe(e), r & 512 && n !== null && Ht(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Fe(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Dn(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          u = n !== null ? n.memoizedProps : o,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            i === "input" && o.type === "radio" && o.name != null && as(l, o),
              io(i, u);
            var c = io(i, o);
            for (u = 0; u < s.length; u += 2) {
              var h = s[u],
                m = s[u + 1];
              h === "style"
                ? ms(l, m)
                : h === "dangerouslySetInnerHTML"
                ? ds(l, m)
                : h === "children"
                ? Dn(l, m)
                : Go(l, h, m, c);
            }
            switch (i) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                cs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Kt(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kt(l, !!o.multiple, o.defaultValue, !0)
                      : Kt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bn] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Un(t.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      ze(t, e), Fe(e);
      break;
    case 13:
      ze(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zu = H())),
        r & 4 && Ui(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), ze(t, e), (re = c)) : ze(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (E = e, h = e.child; h !== null; ) {
            for (m = E = h; E !== null; ) {
              switch (((p = E), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, p, p.return);
                  break;
                case 1:
                  Ht(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      V(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Ht(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ai(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (E = g)) : Ai(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((i = m.stateNode),
                      (s = m.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (i.style.display = ps("display", u)));
              } catch (S) {
                V(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                V(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Fe(e), r & 4 && Ui(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Aa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
          var o = ji(e);
          Uo(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            i = ji(e);
          jo(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vd(e, t, n) {
  (E = e), Ba(e);
}
function Ba(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || yr;
      if (!u) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || re;
        i = yr;
        var c = re;
        if (((yr = u), (re = s) && !c))
          for (E = l; E !== null; )
            (u = E),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Vi(l)
                : s !== null
                ? ((s.return = u), (E = s))
                : Vi(l);
        for (; o !== null; ) (E = o), Ba(o), (o = o.sibling);
        (E = l), (yr = i), (re = c);
      }
      $i(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : $i(e);
  }
}
function $i(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ei(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ei(t, u, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Un(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Io(t));
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Ai(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Vi(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var o = t.return;
          try {
            Io(t);
          } catch (s) {
            V(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Io(t);
          } catch (s) {
            V(t, u, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (E = i);
      break;
    }
    E = t.return;
  }
}
var yd = Math.ceil,
  Jr = Ge.ReactCurrentDispatcher,
  Nu = Ge.ReactCurrentOwner,
  Ce = Ge.ReactCurrentBatchConfig,
  R = 0,
  Z = null,
  W = null,
  q = 0,
  he = 0,
  Wt = mt(0),
  Y = 0,
  Gn = null,
  Lt = 0,
  dl = 0,
  Pu = 0,
  Tn = null,
  ce = null,
  zu = 0,
  ln = 1 / 0,
  Ae = null,
  qr = !1,
  $o = null,
  st = null,
  gr = !1,
  nt = null,
  br = 0,
  Rn = 0,
  Ao = null,
  Lr = -1,
  Tr = 0;
function ue() {
  return R & 6 ? H() : Lr !== -1 ? Lr : (Lr = H());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && q !== 0
      ? q & -q
      : ed.transition !== null
      ? (Tr === 0 && (Tr = Ns()), Tr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ms(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Rn) throw ((Rn = 0), (Ao = null), Error(y(185)));
  Jn(e, n, r),
    (!(R & 2) || e !== Z) &&
      (e === Z && (!(R & 2) && (dl |= n), Y === 4 && et(e, q)),
      me(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((ln = H() + 500), sl && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  bc(e, t);
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0)
    n !== null && Zu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zu(n), t === 1))
      e.tag === 0 ? bf(Qi.bind(null, e)) : qs(Qi.bind(null, e)),
        Gf(function () {
          !(R & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ps(r)) {
        case 1:
          n = eu;
          break;
        case 4:
          n = Cs;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = _s;
          break;
        default:
          n = Fr;
      }
      n = Ja(n, Ha.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ha(e, t) {
  if (((Lr = -1), (Tr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Ka();
    (Z !== e || q !== t) && ((Ae = null), (ln = H() + 500), Ct(e, t));
    do
      try {
        Sd();
        break;
      } catch (i) {
        Wa(e, i);
      }
    while (1);
    pu(),
      (Jr.current = o),
      (R = l),
      W !== null ? (t = 0) : ((Z = null), (q = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Vo(e, l)))), t === 1)
    )
      throw ((n = Gn), Ct(e, 0), et(e, r), me(e, H()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gd(l) &&
          ((t = el(e, r)),
          t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = Vo(e, o)))),
          t === 1))
      )
        throw ((n = Gn), Ct(e, 0), et(e, r), me(e, H()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          St(e, ce, Ae);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = zu + 500 - H()), 10 < t))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ko(St.bind(null, e, ce, Ae), t);
            break;
          }
          St(e, ce, Ae);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Oe(r);
            (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
          }
          if (
            ((r = l),
            (r = H() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ko(St.bind(null, e, ce, Ae), r);
            break;
          }
          St(e, ce, Ae);
          break;
        case 5:
          St(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, H()), e.callbackNode === n ? Ha.bind(null, e) : null;
}
function Vo(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = el(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Qo(t)),
    e
  );
}
function Qo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function gd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Pu,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qi(e) {
  if (R & 6) throw Error(y(327));
  Jt();
  var t = Ir(e, 0);
  if (!(t & 1)) return me(e, H()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = po(e);
    r !== 0 && ((t = r), (n = Vo(e, r)));
  }
  if (n === 1) throw ((n = Gn), Ct(e, 0), et(e, t), me(e, H()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    St(e, ce, Ae),
    me(e, H()),
    null
  );
}
function Lu(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((ln = H() + 500), sl && ht());
  }
}
function Tt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && Jt();
  var t = R;
  R |= 1;
  var n = Ce.transition,
    r = O;
  try {
    if (((Ce.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ce.transition = n), (R = t), !(R & 6) && ht();
  }
}
function Tu() {
  (he = Wt.current), I(Wt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xf(n)), W !== null))
    for (n = W.return; n !== null; ) {
      var r = n;
      switch ((cu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vr();
          break;
        case 3:
          nn(), I(de), I(le), wu();
          break;
        case 5:
          gu(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          mu(r.type._context);
          break;
        case 22:
        case 23:
          Tu();
      }
      n = n.return;
    }
  if (
    ((Z = e),
    (W = e = ct(e.current, null)),
    (q = he = t),
    (Y = 0),
    (Gn = null),
    (Pu = dl = Lt = 0),
    (ce = Tn = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var u = o.next;
          (o.next = l), (r.next = u);
        }
        n.pending = r;
      }
    Et = null;
  }
  return e;
}
function Wa(e, t) {
  do {
    var n = W;
    try {
      if ((pu(), (Nr.current = Zr), Gr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((zt = 0),
        (G = K = $ = null),
        (zn = !1),
        (Kn = 0),
        (Nu.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (Gn = t), (W = null);
        break;
      }
      e: {
        var o = e,
          u = n.return,
          i = n,
          s = t;
        if (
          ((t = q),
          (i.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = i,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Li(u);
          if (g !== null) {
            (g.flags &= -257),
              Ti(g, u, i, o, t),
              g.mode & 1 && zi(o, c, t),
              (t = g),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              zi(o, c, t), Ru();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && i.mode & 1) {
          var M = Li(u);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              Ti(M, u, i, o, t),
              fu(rn(s, i));
            break e;
          }
        }
        (o = s = rn(s, i)),
          Y !== 4 && (Y = 2),
          Tn === null ? (Tn = [o]) : Tn.push(o),
          (o = u);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = za(o, s, t);
              ki(o, f);
              break e;
            case 1:
              i = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = La(o, i, t);
                ki(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xa(n);
    } catch (k) {
      (t = k), W === n && n !== null && (W = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ka() {
  var e = Jr.current;
  return (Jr.current = Zr), e === null ? Zr : e;
}
function Ru() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    Z === null || (!(Lt & 268435455) && !(dl & 268435455)) || et(Z, q);
}
function el(e, t) {
  var n = R;
  R |= 2;
  var r = Ka();
  (Z !== e || q !== t) && ((Ae = null), Ct(e, t));
  do
    try {
      wd();
      break;
    } catch (l) {
      Wa(e, l);
    }
  while (1);
  if ((pu(), (R = n), (Jr.current = r), W !== null)) throw Error(y(261));
  return (Z = null), (q = 0), Y;
}
function wd() {
  for (; W !== null; ) Ya(W);
}
function Sd() {
  for (; W !== null && !Hc(); ) Ya(W);
}
function Ya(e) {
  var t = Za(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xa(e) : (W = t),
    (Nu.current = null);
}
function Xa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pd(n, t)), n !== null)) {
        (n.flags &= 32767), (W = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (W = null);
        return;
      }
    } else if (((n = dd(n, t, he)), n !== null)) {
      W = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      W = t;
      return;
    }
    W = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function St(e, t, n) {
  var r = O,
    l = Ce.transition;
  try {
    (Ce.transition = null), (O = 1), kd(e, t, n, r);
  } finally {
    (Ce.transition = l), (O = r);
  }
  return null;
}
function kd(e, t, n, r) {
  do Jt();
  while (nt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ef(e, o),
    e === Z && ((W = Z = null), (q = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      Ja(Fr, function () {
        return Jt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var u = O;
    O = 1;
    var i = R;
    (R |= 4),
      (Nu.current = null),
      hd(e, n),
      Qa(n, e),
      Vf(wo),
      (jr = !!go),
      (wo = go = null),
      (e.current = n),
      vd(n),
      Wc(),
      (R = i),
      (O = u),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), (br = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    Xc(n.stateNode),
    me(e, H()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw ((qr = !1), (e = $o), ($o = null), e);
  return (
    br & 1 && e.tag !== 0 && Jt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ao ? Rn++ : ((Rn = 0), (Ao = e))) : (Rn = 0),
    ht(),
    null
  );
}
function Jt() {
  if (nt !== null) {
    var e = Ps(br),
      t = Ce.transition,
      n = O;
    try {
      if (((Ce.transition = null), (O = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (br = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, E = e.current; E !== null; ) {
          var o = E,
            u = o.child;
          if (E.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (E = c; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (E = m);
                  else
                    for (; E !== null; ) {
                      h = E;
                      var p = h.sibling,
                        g = h.return;
                      if (($a(h), h === c)) {
                        E = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (E = p);
                        break;
                      }
                      E = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var M = S.sibling;
                    (S.sibling = null), (S = M);
                  } while (S !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (E = u);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          u = E;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (E = d);
          else
            e: for (u = a; E !== null; ) {
              if (((i = E), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, i);
                  }
                } catch (k) {
                  V(i, i.return, k);
                }
              if (i === u) {
                E = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (E = v);
                break e;
              }
              E = i.return;
            }
        }
        if (
          ((R = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Bi(e, t, n) {
  (t = rn(n, t)),
    (t = za(e, t, 1)),
    (e = it(e, t, 1)),
    (t = ue()),
    e !== null && (Jn(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Bi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = rn(n, e)),
            (e = La(t, e, 1)),
            (t = it(t, e, 1)),
            (e = ue()),
            t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ed(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Z === e &&
      (q & n) === n &&
      (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > H() - zu)
        ? Ct(e, 0)
        : (Pu |= n)),
    me(e, t);
}
function Ga(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (Jn(e, t, n), me(e, n));
}
function xd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ga(e, n);
}
function Cd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ga(e, n);
}
var Za;
Za = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), fd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), j && t.flags & 1048576 && bs(t, Hr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zr(e, t), (e = t.pendingProps);
      var l = bt(t, le.current);
      Zt(t, n), (l = ku(null, t, r, e, l, n));
      var o = Eu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Qr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            vu(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            zo(t, r, e, n),
            (t = Ro(null, t, r, !0, o, n)))
          : ((t.tag = 0), j && o && au(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nd(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = To(null, t, r, e, n);
            break e;
          case 1:
            t = Mi(null, t, r, e, n);
            break e;
          case 11:
            t = Ri(null, t, r, e, n);
            break e;
          case 14:
            t = Oi(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        To(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Mi(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ma(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ra(e, t),
          Yr(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = rn(Error(y(423)), t)), (t = Di(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(y(424)), t)), (t = Di(e, t, r, n, l));
            break e;
          } else
            for (
              ve = ut(t.stateNode.containerInfo.firstChild),
                ye = t,
                j = !0,
                Re = null,
                n = ia(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sa(t),
        e === null && _o(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = l.children),
        So(r, l) ? (u = null) : o !== null && So(r, o) && (t.flags |= 32),
        Oa(e, t),
        oe(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && _o(t), null;
    case 13:
      return Da(e, t, n);
    case 4:
      return (
        yu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ri(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (u = l.value),
          D(Wr, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (De(o.value, u)) {
            if (o.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var i = o.dependencies;
              if (i !== null) {
                u = o.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      No(o.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(y(341));
                (u.lanes |= n),
                  (i = u.alternate),
                  i !== null && (i.lanes |= n),
                  No(u, n, t),
                  (u = o.sibling);
              } else u = o.child;
              if (u !== null) u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((o = u.sibling), o !== null)) {
                    (o.return = u.return), (u = o);
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Oi(e, t, r, l, n)
      );
    case 15:
      return Ta(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        zr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Qr(t)) : (e = !1),
        Zt(t, n),
        oa(t, r, l),
        zo(t, r, l, n),
        Ro(null, t, r, !0, e, n)
      );
    case 19:
      return Fa(e, t, n);
    case 22:
      return Ra(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Ja(e, t) {
  return xs(e, t);
}
function _d(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xe(e, t, n, r) {
  return new _d(e, t, n, r);
}
function Ou(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nd(e) {
  if (typeof e == "function") return Ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jo)) return 11;
    if (e === qo) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rr(e, t, n, r, l, o) {
  var u = 2;
  if (((r = e), typeof e == "function")) Ou(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Ft:
        return _t(n.children, l, o, t);
      case Zo:
        (u = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = xe(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = o), e
        );
      case ql:
        return (e = xe(13, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
      case bl:
        return (e = xe(19, n, t, l)), (e.elementType = bl), (e.lanes = o), e;
      case us:
        return pl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ls:
              u = 10;
              break e;
            case os:
              u = 9;
              break e;
            case Jo:
              u = 11;
              break e;
            case qo:
              u = 14;
              break e;
            case Je:
              (u = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xe(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _t(e, t, n, r) {
  return (e = xe(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = xe(22, e, r, t)),
    (e.elementType = us),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Wl(e, t, n) {
  return (e = xe(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mu(e, t, n, r, l, o, u, i, s) {
  return (
    (e = new Pd(e, t, n, i, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = xe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vu(o),
    e
  );
}
function zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qa(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return Js(e, n, t);
  }
  return t;
}
function ba(e, t, n, r, l, o, u, i, s) {
  return (
    (e = Mu(n, r, !0, e, l, o, u, i, s)),
    (e.context = qa(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    it(n, o, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    me(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var l = t.current,
    o = ue(),
    u = at(l);
  return (
    (n = qa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = it(l, t, u)),
    e !== null && (Me(e, l, u, o), _r(e, l, u)),
    u
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hi(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Du(e, t) {
  Hi(e, t), (e = e.alternate) && Hi(e, t);
}
function Ld() {
  return null;
}
var ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fu(e) {
  this._internalRoot = e;
}
hl.prototype.render = Fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ml(e, t, null, null);
};
hl.prototype.unmount = Fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      ml(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ts();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Os(e);
  }
};
function Iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wi() {}
function Td(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = tl(u);
        o.call(c);
      };
    }
    var u = ba(t, r, e, 0, null, !1, !1, "", Wi);
    return (
      (e._reactRootContainer = u),
      (e[Ke] = u.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var c = tl(s);
      i.call(c);
    };
  }
  var s = Mu(e, 0, !1, null, null, !1, !1, "", Wi);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function yl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var s = tl(u);
        i.call(s);
      };
    }
    ml(t, u, e, l);
  } else u = Td(n, t, e, l, r);
  return tl(u);
}
zs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (tu(t, n | 1), me(t, H()), !(R & 6) && ((ln = H() + 500), ht()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }),
        Du(e, 1);
  }
};
nu = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Me(t, e, 134217728, n);
    }
    Du(e, 134217728);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Me(n, e, t, r);
    }
    Du(e, t);
  }
};
Ts = function () {
  return O;
};
Rs = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            ss(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      cs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
  }
};
ys = Lu;
gs = Tt;
var Rd = { usingClientEntryPoint: !1, Events: [bn, $t, il, hs, vs, Lu] },
  gn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Od = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ks(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Ld,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (rl = wr.inject(Od)), (Ue = wr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Iu(t)) throw Error(y(200));
  return zd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Iu(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Mu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new Fu(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = ks(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Tt(e);
};
we.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return yl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Iu(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    u = ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = ba(t, null, e, 1, n ?? null, l, !1, o, u)),
    (e[Ke] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new hl(t);
};
we.render = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return yl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Lu;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = we);
})(zc);
var Ki = Xl;
(Yl.createRoot = Ki.createRoot), (Yl.hydrateRoot = Ki.hydrateRoot);
function Md() {
  const [e, t] = ae.useState("Quote"),
    [n, r] = ae.useState("Author"),
    [l, o] = ae.useState("Age"),
    [u, i] = ae.useState(Math.floor(Math.random() * 7e3)),
    [s, c] = ae.useState(0),
    [h, m] = ae.useState([]),
    p = ae.useRef(0),
    g = ae.useRef(),
    w = `https://quote-garden.onrender.com/api/v3/quotes?page=${u}&limit=10`;
  ae.useEffect(() => {
    (async () => await (await fetch(w)).json())().then((d) => {
      p.current = d.pagination.totalPages;
      const v = Math.floor(Math.random() * 10);
      t(d.data[v].quoteText), r(d.data[v].quoteAuthor), o(d.data[v].quoteGenre);
    });
  }, [u]);
  const S = () => {
      g.current.classList.add("animate-spin");
      const a = Math.floor(Math.random() * p.current);
      i(a),
        setTimeout(() => {
          g.current.classList.remove("animate-spin");
        }, 1e3);
    },
    M = () => {
      c(s === 0 ? 1 : 0), f();
    },
    f = () => {
      const a = `https://quote-garden.onrender.com/api/v3/quotes?author=${n}`;
      (async () => await (await fetch(a)).json())().then((v) =>
        m((() => v.data)())
      );
    };
  return gt("div", {
    className:
      "font-raleway my-8 mx-6 md:mx-16 lg:mx-32 flex flex-col gap-24 justify-around select-none",
    children: [
      ne("header", {
        className: "font-raleway font-medium flex justify-end text-[#4F4F4F]",
        children: gt("div", {
          className: "flex items-center gap-2",
          children: [
            ne("button", {
              className: `text-lg leading-5 hover:font-semibold ${
                s === 0 ? "cursor-pointer" : "cursor-not-allowed"
              }`,
              onClick: s === 0 ? S : () => {},
              children: "random",
            }),
            ne("i", {
              className: "material-icons",
              ref: g,
              children: "autorenew",
            }),
          ],
        }),
      }),
      ne("main", {
        className:
          "flex my-8 flex-col gap-8 md:gap-28 lg:gap-32 lg:mx-72 md:mx-32",
        children:
          s === 0
            ? gt(Pc, {
                children: [
                  ne("div", {
                    className: `border-l-[8px] pl-8 ${
                      e === "Quote" ? " border-l-red-500" : "border-l-[#F7DF94]"
                    }`,
                    children: ne("p", {
                      className:
                        "pl-2 text-xl md:text-2xl lg:text-3xl font-medium",
                      children: e === "Quote" ? "loading..." : '"' + e + '"',
                    }),
                  }),
                  gt("div", {
                    className:
                      "md:ml-8 px-4 py-8 flex justify-between items-center bg-black md:bg-inherit text-white md:text-inherit hover:bg-black hover:text-white cursor-pointer w-full group",
                    role: "button",
                    tabIndex: "0",
                    "aria-label": "Click me!",
                    onClick: M,
                    children: [
                      gt("div", {
                        className:
                          "flex flex-col md:text-2xl text-base font-bold",
                        children: [
                          n === "Author" ? "loading..." : n,
                          ne("span", {
                            className: "text-[#828282] font-medium text-sm",
                            children: l === "Age" ? "" : l,
                          }),
                        ],
                      }),
                      ne("i", {
                        className:
                          "material-symbols-outlined text-white group-focus:translate-x-4 pr-2",
                        children: "arrow_right_alt",
                      }),
                    ],
                  }),
                ],
              })
            : gt("div", {
                className: "flex flex-col gap-12",
                children: [
                  ne("p", {
                    className:
                      "pl-12 text-[#333333] md:text-2xl text-base font-bold",
                    children: n,
                  }),
                  ne("ul", {
                    className:
                      "flex flex-col gap-12 pl-2 text-xl md:text-2xl lg:text-3xl h-72 font-medium overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-scroll scrollbar",
                    children:
                      h != null
                        ? h.map((a) =>
                            ne(
                              "li",
                              {
                                className:
                                  "border-l-[8px] pl-8 border-l-[#F7DF94] snap-start scroll-mt-4",
                                children: a.quoteText,
                              },
                              a._id
                            )
                          )
                        : null,
                  }),
                  ne("div", {
                    children: gt("button", {
                      className:
                        "inline-flex gap-2 hover:bg-black group hover:text-white py-4 w-full px-6",
                      onClick: M,
                      children: [
                        ne("i", {
                          className:
                            "material-symbols-outlined invisible group-hover:visible group-focus:-translate-x-4",
                          children: "keyboard_backspace",
                        }),
                        "Back",
                      ],
                    }),
                  }),
                ],
              }),
      }),
      ne("footer", {}),
    ],
  });
}
Yl.createRoot(document.getElementById("root")).render(
  ne(Sc.StrictMode, { children: ne(Md, {}) })
);
