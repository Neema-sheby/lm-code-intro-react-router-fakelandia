function ff(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
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
function df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vn = {},
  pf = {
    get exports() {
      return Vn;
    },
    set exports(e) {
      Vn = e;
    },
  },
  El = {},
  E = {},
  hf = {
    get exports() {
      return E;
    },
    set exports(e) {
      E = e;
    },
  },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  mf = Symbol.for("react.portal"),
  vf = Symbol.for("react.fragment"),
  gf = Symbol.for("react.strict_mode"),
  yf = Symbol.for("react.profiler"),
  wf = Symbol.for("react.provider"),
  Sf = Symbol.for("react.context"),
  kf = Symbol.for("react.forward_ref"),
  Ef = Symbol.for("react.suspense"),
  Cf = Symbol.for("react.memo"),
  _f = Symbol.for("react.lazy"),
  Su = Symbol.iterator;
function xf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Su && e[Su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hs = Object.assign,
  Ws = {};
function mn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ws),
    (this.updater = n || Vs);
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qs() {}
Qs.prototype = mn.prototype;
function yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ws),
    (this.updater = n || Vs);
}
var wi = (yi.prototype = new Qs());
wi.constructor = yi;
Hs(wi, mn.prototype);
wi.isPureReactComponent = !0;
var ku = Array.isArray,
  Ks = Object.prototype.hasOwnProperty,
  Si = { current: null },
  Ys = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ks.call(t, r) && !Ys.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Si.current,
  };
}
function Nf(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function Pf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Eu = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pf("" + e.key)
    : t.toString(36);
}
function jr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case mf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Vl(i, 0) : r),
      ku(l)
        ? ((n = ""),
          e != null && (n = e.replace(Eu, "$&/") + "/"),
          jr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ki(l) &&
            (l = Nf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Eu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ku(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Vl(o, u);
      i += jr(o, t, n, s, l);
    }
  else if (((s = xf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Vl(o, u++)), (i += jr(o, t, n, s, l));
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
  return i;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Lf(e) {
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
var ce = { current: null },
  Fr = { transition: null },
  Rf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Fr,
    ReactCurrentOwner: Si,
  };
O.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
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
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = mn;
O.Fragment = vf;
O.Profiler = yf;
O.PureComponent = yi;
O.StrictMode = gf;
O.Suspense = Ef;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Hs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Si.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ks.call(t, s) &&
        !Ys.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wf, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Xs;
O.createFactory = function (e) {
  var t = Xs.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: kf, render: e };
};
O.isValidElement = ki;
O.lazy = function (e) {
  return { $$typeof: _f, _payload: { _status: -1, _result: e }, _init: Lf };
};
O.memo = function (e, t) {
  return { $$typeof: Cf, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ce.current.useRef(e);
};
O.useState = function (e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = "18.2.0";
(function (e) {
  e.exports = O;
})(hf);
const Ei = df(E),
  yo = ff({ __proto__: null, default: Ei }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf = E,
  Tf = Symbol.for("react.element"),
  Mf = Symbol.for("react.fragment"),
  Of = Object.prototype.hasOwnProperty,
  If = zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Of.call(t, r) && !Df.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Tf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: If.current,
  };
}
El.Fragment = Mf;
El.jsx = Gs;
El.jsxs = Gs;
(function (e) {
  e.exports = El;
})(pf);
const un = Vn.Fragment,
  y = Vn.jsx,
  M = Vn.jsxs;
var wo = {},
  So = {},
  jf = {
    get exports() {
      return So;
    },
    set exports(e) {
      So = e;
    },
  },
  ke = {},
  ko = {},
  Ff = {
    get exports() {
      return ko;
    },
    set exports(e) {
      ko = e;
    },
  },
  Js = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, z) {
    var T = x.length;
    x.push(z);
    e: for (; 0 < T; ) {
      var K = (T - 1) >>> 1,
        q = x[K];
      if (0 < l(q, z)) (x[K] = z), (x[T] = q), (T = K);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0],
      T = x.pop();
    if (T !== z) {
      x[0] = T;
      e: for (var K = 0, q = x.length, mr = q >>> 1; K < mr; ) {
        var kt = 2 * (K + 1) - 1,
          Bl = x[kt],
          Et = kt + 1,
          vr = x[Et];
        if (0 > l(Bl, T))
          Et < q && 0 > l(vr, Bl)
            ? ((x[K] = vr), (x[Et] = T), (K = Et))
            : ((x[K] = Bl), (x[kt] = T), (K = kt));
        else if (Et < q && 0 > l(vr, T)) (x[K] = vr), (x[Et] = T), (K = Et);
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var T = x.sortIndex - z.sortIndex;
    return T !== 0 ? T : x.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    h = null,
    m = 3,
    v = !1,
    S = !1,
    g = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= x)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function w(x) {
    if (((g = !1), d(x), !S))
      if (n(s) !== null) (S = !0), $l(C);
      else {
        var z = n(a);
        z !== null && Al(w, z.startTime - x);
      }
  }
  function C(x, z) {
    (S = !1), g && ((g = !1), f(R), (R = -1)), (v = !0);
    var T = m;
    try {
      for (
        d(z), h = n(s);
        h !== null && (!(h.expirationTime > z) || (x && !Re()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var q = K(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof q == "function" ? (h.callback = q) : h === n(s) && r(s),
            d(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var mr = !0;
      else {
        var kt = n(a);
        kt !== null && Al(w, kt.startTime - z), (mr = !1);
      }
      return mr;
    } finally {
      (h = null), (m = T), (v = !1);
    }
  }
  var P = !1,
    L = null,
    R = -1,
    Q = 5,
    I = -1;
  function Re() {
    return !(e.unstable_now() - I < Q);
  }
  function yn() {
    if (L !== null) {
      var x = e.unstable_now();
      I = x;
      var z = !0;
      try {
        z = L(!0, x);
      } finally {
        z ? wn() : ((P = !1), (L = null));
      }
    } else P = !1;
  }
  var wn;
  if (typeof c == "function")
    wn = function () {
      c(yn);
    };
  else if (typeof MessageChannel < "u") {
    var wu = new MessageChannel(),
      cf = wu.port2;
    (wu.port1.onmessage = yn),
      (wn = function () {
        cf.postMessage(null);
      });
  } else
    wn = function () {
      N(yn, 0);
    };
  function $l(x) {
    (L = x), P || ((P = !0), wn());
  }
  function Al(x, z) {
    R = N(function () {
      x(e.unstable_now());
    }, z);
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
      S || v || ((S = !0), $l(C));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var T = m;
      m = z;
      try {
        return x();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, z) {
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
      var T = m;
      m = x;
      try {
        return z();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (x, z, T) {
      var K = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? K + T : K))
          : (T = K),
        x)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = T + q),
        (x = {
          id: p++,
          callback: z,
          priorityLevel: x,
          startTime: T,
          expirationTime: q,
          sortIndex: -1,
        }),
        T > K
          ? ((x.sortIndex = T),
            t(a, x),
            n(s) === null &&
              x === n(a) &&
              (g ? (f(R), (R = -1)) : (g = !0), Al(w, T - K)))
          : ((x.sortIndex = q), t(s, x), S || v || ((S = !0), $l(C))),
        x
      );
    }),
    (e.unstable_shouldYield = Re),
    (e.unstable_wrapCallback = function (x) {
      var z = m;
      return function () {
        var T = m;
        m = z;
        try {
          return x.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(Js);
(function (e) {
  e.exports = Js;
})(Ff);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs = E,
  Se = ko;
function k(e) {
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
var qs = new Set(),
  Hn = {};
function Dt(e, t) {
  sn(e, t), sn(e + "Capture", t);
}
function sn(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) qs.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Eo = Object.prototype.hasOwnProperty,
  Uf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cu = {},
  _u = {};
function $f(e) {
  return Eo.call(_u, e)
    ? !0
    : Eo.call(Cu, e)
    ? !1
    : Uf.test(e)
    ? (_u[e] = !0)
    : ((Cu[e] = !0), !1);
}
function Af(e, t, n, r) {
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
function Bf(e, t, n, r) {
  if (t === null || typeof t > "u" || Af(e, t, n, r)) return !0;
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
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ci = /[\-:]([a-z])/g;
function _i(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ci, _i);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ci, _i);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ci, _i);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bf(t, n, l, r) && (n = null),
    r || l === null
      ? $f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var qe = Zs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Ht = Symbol.for("react.fragment"),
  Ni = Symbol.for("react.strict_mode"),
  Co = Symbol.for("react.profiler"),
  bs = Symbol.for("react.provider"),
  ea = Symbol.for("react.context"),
  Pi = Symbol.for("react.forward_ref"),
  _o = Symbol.for("react.suspense"),
  xo = Symbol.for("react.suspense_list"),
  Li = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  ta = Symbol.for("react.offscreen"),
  xu = Symbol.iterator;
function Sn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xu && e[xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Hl;
function Ln(e) {
  if (Hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hl = (t && t[1]) || "";
    }
  return (
    `
` +
    Hl +
    e
  );
}
var Wl = !1;
function Ql(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Wl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function Vf(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ql(e.type, !1)), e;
    case 11:
      return (e = Ql(e.type.render, !1)), e;
    case 1:
      return (e = Ql(e.type, !0)), e;
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ht:
      return "Fragment";
    case Vt:
      return "Portal";
    case Co:
      return "Profiler";
    case Ni:
      return "StrictMode";
    case _o:
      return "Suspense";
    case xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ea:
        return (e.displayName || "Context") + ".Consumer";
      case bs:
        return (e._context.displayName || "Context") + ".Provider";
      case Pi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Li:
        return (
          (t = e.displayName || null), t !== null ? t : No(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return No(e(t));
        } catch {}
    }
  return null;
}
function Hf(e) {
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
      return No(t);
    case 8:
      return t === Ni ? "StrictMode" : "Mode";
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
function vt(e) {
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
function na(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wf(e) {
  var t = na(e) ? "checked" : "value",
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
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Wf(e));
}
function ra(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = na(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Po(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function la(e, t) {
  (t = t.checked), t != null && xi(e, "checked", t, !1);
}
function Lo(e, t) {
  la(e, t);
  var n = vt(t.value),
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
    ? Ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ro(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pu(e, t, n) {
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
function Ro(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vt(n) };
}
function oa(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ia(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function To(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ia(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Sr,
  ua = (function (e) {
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
        Sr = Sr || document.createElement("div"),
          Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
  Qf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function (e) {
  Qf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]);
  });
});
function sa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
    ? ("" + t).trim()
    : t + "px";
}
function aa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = sa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Kf = H(
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
function Mo(e, t) {
  if (t) {
    if (Kf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Oo(e, t) {
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
var Io = null;
function Ri(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  tn = null,
  nn = null;
function zu(e) {
  if ((e = cr(e))) {
    if (typeof Do != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Pl(t)), Do(e.stateNode, e.type, t));
  }
}
function ca(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function fa() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), zu(e), t)) for (e = 0; e < t.length; e++) zu(t[e]);
  }
}
function da(e, t) {
  return e(t);
}
function pa() {}
var Kl = !1;
function ha(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return da(e, t, n);
  } finally {
    (Kl = !1), (tn !== null || nn !== null) && (pa(), fa());
  }
}
function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pl(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var jo = !1;
if (Xe)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        jo = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    jo = !1;
  }
function Yf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var On = !1,
  Jr = null,
  Zr = !1,
  Fo = null,
  Xf = {
    onError: function (e) {
      (On = !0), (Jr = e);
    },
  };
function Gf(e, t, n, r, l, o, i, u, s) {
  (On = !1), (Jr = null), Yf.apply(Xf, arguments);
}
function Jf(e, t, n, r, l, o, i, u, s) {
  if ((Gf.apply(this, arguments), On)) {
    if (On) {
      var a = Jr;
      (On = !1), (Jr = null);
    } else throw Error(k(198));
    Zr || ((Zr = !0), (Fo = a));
  }
}
function jt(e) {
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
function ma(e) {
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
function Tu(e) {
  if (jt(e) !== e) throw Error(k(188));
}
function Zf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(k(188));
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
        if (o === n) return Tu(l), e;
        if (o === r) return Tu(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function va(e) {
  return (e = Zf(e)), e !== null ? ga(e) : null;
}
function ga(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ga(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ya = Se.unstable_scheduleCallback,
  Mu = Se.unstable_cancelCallback,
  qf = Se.unstable_shouldYield,
  bf = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  ed = Se.unstable_getCurrentPriorityLevel,
  zi = Se.unstable_ImmediatePriority,
  wa = Se.unstable_UserBlockingPriority,
  qr = Se.unstable_NormalPriority,
  td = Se.unstable_LowPriority,
  Sa = Se.unstable_IdlePriority,
  Cl = null,
  Ae = null;
function nd(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : od,
  rd = Math.log,
  ld = Math.LN2;
function od(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rd(e) / ld) | 0)) | 0;
}
var kr = 64,
  Er = 4194304;
function zn(e) {
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
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = zn(u)) : ((o &= i), o !== 0 && (r = zn(o)));
  } else (i = n & ~l), i !== 0 ? (r = zn(i)) : o !== 0 && (r = zn(o));
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
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function id(e, t) {
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
function ud(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = id(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Uo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ka() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function sd(e, t) {
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
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ti(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var j = 0;
function Ea(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ca,
  Mi,
  _a,
  xa,
  Na,
  $o = !1,
  Cr = [],
  ut = null,
  st = null,
  at = null,
  Kn = new Map(),
  Yn = new Map(),
  nt = [],
  ad =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && Mi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function cd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ut = En(ut, e, t, n, r, l)), !0;
    case "dragenter":
      return (st = En(st, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = En(at, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kn.set(o, En(Kn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Yn.set(o, En(Yn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Pa(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ma(n)), t !== null)) {
          (e.blockedOn = t),
            Na(e.priority, function () {
              _a(n);
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
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Io = r), n.target.dispatchEvent(r), (Io = null);
    } else return (t = cr(n)), t !== null && Mi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Iu(e, t, n) {
  Ur(e) && n.delete(t);
}
function fd() {
  ($o = !1),
    ut !== null && Ur(ut) && (ut = null),
    st !== null && Ur(st) && (st = null),
    at !== null && Ur(at) && (at = null),
    Kn.forEach(Iu),
    Yn.forEach(Iu);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $o ||
      (($o = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, fd)));
}
function Xn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < Cr.length) {
    Cn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && Cn(ut, e),
      st !== null && Cn(st, e),
      at !== null && Cn(at, e),
      Kn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    Pa(n), n.blockedOn === null && nt.shift();
}
var rn = qe.ReactCurrentBatchConfig,
  el = !0;
function dd(e, t, n, r) {
  var l = j,
    o = rn.transition;
  rn.transition = null;
  try {
    (j = 1), Oi(e, t, n, r);
  } finally {
    (j = l), (rn.transition = o);
  }
}
function pd(e, t, n, r) {
  var l = j,
    o = rn.transition;
  rn.transition = null;
  try {
    (j = 4), Oi(e, t, n, r);
  } finally {
    (j = l), (rn.transition = o);
  }
}
function Oi(e, t, n, r) {
  if (el) {
    var l = Ao(e, t, n, r);
    if (l === null) ro(e, t, r, tl, n), Ou(e, r);
    else if (cd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ou(e, r), t & 4 && -1 < ad.indexOf(e))) {
      for (; l !== null; ) {
        var o = cr(l);
        if (
          (o !== null && Ca(o),
          (o = Ao(e, t, n, r)),
          o === null && ro(e, t, r, tl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var tl = null;
function Ao(e, t, n, r) {
  if (((tl = null), (e = Ri(r)), (e = xt(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ma(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (tl = e), null;
}
function La(e) {
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
      switch (ed()) {
        case zi:
          return 1;
        case wa:
          return 4;
        case qr:
        case td:
          return 16;
        case Sa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  Ii = null,
  $r = null;
function Ra() {
  if ($r) return $r;
  var e,
    t = Ii,
    n = t.length,
    r,
    l = "value" in lt ? lt.value : lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return ($r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ar(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _r() {
  return !0;
}
function Du() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? _r
        : Du),
      (this.isPropagationStopped = Du),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _r));
      },
      persist: function () {},
      isPersistent: _r,
    }),
    t
  );
}
var vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Di = Ee(vn),
  ar = H({}, vn, { view: 0, detail: 0 }),
  hd = Ee(ar),
  Xl,
  Gl,
  _n,
  _l = H({}, ar, {
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
    getModifierState: ji,
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
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Xl = e.screenX - _n.screenX), (Gl = e.screenY - _n.screenY))
              : (Gl = Xl = 0),
            (_n = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gl;
    },
  }),
  ju = Ee(_l),
  md = H({}, _l, { dataTransfer: 0 }),
  vd = Ee(md),
  gd = H({}, ar, { relatedTarget: 0 }),
  Jl = Ee(gd),
  yd = H({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wd = Ee(yd),
  Sd = H({}, vn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kd = Ee(Sd),
  Ed = H({}, vn, { data: 0 }),
  Fu = Ee(Ed),
  Cd = {
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
  _d = {
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
  xd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xd[e]) ? !!t[e] : !1;
}
function ji() {
  return Nd;
}
var Pd = H({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = Cd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _d[e.keyCode] || "Unidentified"
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
    getModifierState: ji,
    charCode: function (e) {
      return e.type === "keypress" ? Ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ar(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ld = Ee(Pd),
  Rd = H({}, _l, {
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
  Uu = Ee(Rd),
  zd = H({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ji,
  }),
  Td = Ee(zd),
  Md = H({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Od = Ee(Md),
  Id = H({}, _l, {
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
  Dd = Ee(Id),
  jd = [9, 13, 27, 32],
  Fi = Xe && "CompositionEvent" in window,
  In = null;
Xe && "documentMode" in document && (In = document.documentMode);
var Fd = Xe && "TextEvent" in window && !In,
  za = Xe && (!Fi || (In && 8 < In && 11 >= In)),
  $u = String.fromCharCode(32),
  Au = !1;
function Ta(e, t) {
  switch (e) {
    case "keyup":
      return jd.indexOf(t.keyCode) !== -1;
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
function Ma(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function Ud(e, t) {
  switch (e) {
    case "compositionend":
      return Ma(t);
    case "keypress":
      return t.which !== 32 ? null : ((Au = !0), $u);
    case "textInput":
      return (e = t.data), e === $u && Au ? null : e;
    default:
      return null;
  }
}
function $d(e, t) {
  if (Wt)
    return e === "compositionend" || (!Fi && Ta(e, t))
      ? ((e = Ra()), ($r = Ii = lt = null), (Wt = !1), e)
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
      return za && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ad = {
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
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ad[e.type] : t === "textarea";
}
function Oa(e, t, n, r) {
  ca(r),
    (t = nl(t, "onChange")),
    0 < t.length &&
      ((n = new Di("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dn = null,
  Gn = null;
function Bd(e) {
  Wa(e, 0);
}
function xl(e) {
  var t = Yt(e);
  if (ra(t)) return e;
}
function Vd(e, t) {
  if (e === "change") return t;
}
var Ia = !1;
if (Xe) {
  var Zl;
  if (Xe) {
    var ql = "oninput" in document;
    if (!ql) {
      var Vu = document.createElement("div");
      Vu.setAttribute("oninput", "return;"),
        (ql = typeof Vu.oninput == "function");
    }
    Zl = ql;
  } else Zl = !1;
  Ia = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Hu() {
  Dn && (Dn.detachEvent("onpropertychange", Da), (Gn = Dn = null));
}
function Da(e) {
  if (e.propertyName === "value" && xl(Gn)) {
    var t = [];
    Oa(t, Gn, e, Ri(e)), ha(Bd, t);
  }
}
function Hd(e, t, n) {
  e === "focusin"
    ? (Hu(), (Dn = t), (Gn = n), Dn.attachEvent("onpropertychange", Da))
    : e === "focusout" && Hu();
}
function Wd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Gn);
}
function Qd(e, t) {
  if (e === "click") return xl(t);
}
function Kd(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function Yd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var je = typeof Object.is == "function" ? Object.is : Yd;
function Jn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Eo.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function Wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qu(e, t) {
  var n = Wu(e);
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
    n = Wu(n);
  }
}
function ja(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ja(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Fa() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function Ui(e) {
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
function Xd(e) {
  var t = Fa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ja(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ui(n)) {
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
          (l = Qu(n, o));
        var i = Qu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Gd = Xe && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Bo = null,
  jn = null,
  Vo = !1;
function Ku(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vo ||
    Qt == null ||
    Qt !== Gr(r) ||
    ((r = Qt),
    "selectionStart" in r && Ui(r)
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
    (jn && Jn(jn, r)) ||
      ((jn = r),
      (r = nl(Bo, "onSelect")),
      0 < r.length &&
        ((t = new Di("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  bl = {},
  Ua = {};
Xe &&
  ((Ua = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  "TransitionEvent" in window || delete Kt.transitionend.transition);
function Nl(e) {
  if (bl[e]) return bl[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ua) return (bl[e] = t[n]);
  return e;
}
var $a = Nl("animationend"),
  Aa = Nl("animationiteration"),
  Ba = Nl("animationstart"),
  Va = Nl("transitionend"),
  Ha = new Map(),
  Yu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  Ha.set(e, t), Dt(t, [e]);
}
for (var eo = 0; eo < Yu.length; eo++) {
  var to = Yu[eo],
    Jd = to.toLowerCase(),
    Zd = to[0].toUpperCase() + to.slice(1);
  yt(Jd, "on" + Zd);
}
yt($a, "onAnimationEnd");
yt(Aa, "onAnimationIteration");
yt(Ba, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Va, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Dt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Xu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jf(r, t, void 0, e), (e.currentTarget = null);
}
function Wa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Xu(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Xu(l, u, a), (o = s);
        }
    }
  }
  if (Zr) throw ((e = Fo), (Zr = !1), (Fo = null), e);
}
function U(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qa(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), Qa(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      qs.forEach(function (n) {
        n !== "selectionchange" && (qd.has(n) || no(n, !1, e), no(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), no("selectionchange", !1, t));
  }
}
function Qa(e, t, n, r) {
  switch (La(t)) {
    case 1:
      var l = dd;
      break;
    case 4:
      l = pd;
      break;
    default:
      l = Oi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !jo ||
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
function ro(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = xt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ha(function () {
    var a = o,
      p = Ri(n),
      h = [];
    e: {
      var m = Ha.get(e);
      if (m !== void 0) {
        var v = Di,
          S = e;
        switch (e) {
          case "keypress":
            if (Ar(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ld;
            break;
          case "focusin":
            (S = "focus"), (v = Jl);
            break;
          case "focusout":
            (S = "blur"), (v = Jl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Jl;
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
            v = ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Td;
            break;
          case $a:
          case Aa:
          case Ba:
            v = wd;
            break;
          case Va:
            v = Od;
            break;
          case "scroll":
            v = hd;
            break;
          case "wheel":
            v = Dd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = kd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Uu;
        }
        var g = (t & 4) !== 0,
          N = !g && e === "scroll",
          f = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (
            (d.tag === 5 &&
              w !== null &&
              ((d = w),
              f !== null && ((w = Qn(c, f)), w != null && g.push(qn(c, w, d)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((m = new v(m, S, null, n, p)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Io &&
            (S = n.relatedTarget || n.fromElement) &&
            (xt(S) || S[Ge]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((S = n.relatedTarget || n.toElement),
              (v = a),
              (S = S ? xt(S) : null),
              S !== null &&
                ((N = jt(S)), S !== N || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = a)),
          v !== S)
        ) {
          if (
            ((g = ju),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Uu),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (N = v == null ? m : Yt(v)),
            (d = S == null ? m : Yt(S)),
            (m = new g(w, c + "leave", v, n, p)),
            (m.target = N),
            (m.relatedTarget = d),
            (w = null),
            xt(p) === a &&
              ((g = new g(f, c + "enter", S, n, p)),
              (g.target = d),
              (g.relatedTarget = N),
              (w = g)),
            (N = w),
            v && S)
          )
            t: {
              for (g = v, f = S, c = 0, d = g; d; d = $t(d)) c++;
              for (d = 0, w = f; w; w = $t(w)) d++;
              for (; 0 < c - d; ) (g = $t(g)), c--;
              for (; 0 < d - c; ) (f = $t(f)), d--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = $t(g)), (f = $t(f));
              }
              g = null;
            }
          else g = null;
          v !== null && Gu(h, m, v, g, !1),
            S !== null && N !== null && Gu(h, N, S, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? Yt(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var C = Vd;
        else if (Bu(m))
          if (Ia) C = Kd;
          else {
            C = Wd;
            var P = Hd;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Qd);
        if (C && (C = C(e, a))) {
          Oa(h, C, n, p);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            Ro(m, "number", m.value);
      }
      switch (((P = a ? Yt(a) : window), e)) {
        case "focusin":
          (Bu(P) || P.contentEditable === "true") &&
            ((Qt = P), (Bo = a), (jn = null));
          break;
        case "focusout":
          jn = Bo = Qt = null;
          break;
        case "mousedown":
          Vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vo = !1), Ku(h, n, p);
          break;
        case "selectionchange":
          if (Gd) break;
        case "keydown":
        case "keyup":
          Ku(h, n, p);
      }
      var L;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Wt
          ? Ta(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (za &&
          n.locale !== "ko" &&
          (Wt || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Wt && (L = Ra())
            : ((lt = p),
              (Ii = "value" in lt ? lt.value : lt.textContent),
              (Wt = !0))),
        (P = nl(a, R)),
        0 < P.length &&
          ((R = new Fu(R, e, null, n, p)),
          h.push({ event: R, listeners: P }),
          L ? (R.data = L) : ((L = Ma(n)), L !== null && (R.data = L)))),
        (L = Fd ? Ud(e, n) : $d(e, n)) &&
          ((a = nl(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new Fu("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = L)));
    }
    Wa(h, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qn(e, n)),
      o != null && r.unshift(qn(e, o, l)),
      (o = Qn(e, t)),
      o != null && r.push(qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Qn(n, o)), s != null && i.unshift(qn(n, s, u)))
        : l || ((s = Qn(n, o)), s != null && i.push(qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bd = /\r\n?/g,
  ep = /\u0000|\uFFFD/g;
function Ju(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bd,
      `
`
    )
    .replace(ep, "");
}
function Pr(e, t, n) {
  if (((t = Ju(t)), Ju(e) !== t && n)) throw Error(k(425));
}
function rl() {}
var Ho = null,
  Wo = null;
function Qo(e, t) {
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
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
  tp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zu = typeof Promise == "function" ? Promise : void 0,
  np =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zu < "u"
      ? function (e) {
          return Zu.resolve(null).then(e).catch(rp);
        }
      : Ko;
function rp(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xn(t);
}
function ct(e) {
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
function qu(e) {
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
var gn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + gn,
  bn = "__reactProps$" + gn,
  Ge = "__reactContainer$" + gn,
  Yo = "__reactEvents$" + gn,
  lp = "__reactListeners$" + gn,
  op = "__reactHandles$" + gn;
function xt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qu(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[$e] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Pl(e) {
  return e[bn] || null;
}
var Xo = [],
  Xt = -1;
function wt(e) {
  return { current: e };
}
function $(e) {
  0 > Xt || ((e.current = Xo[Xt]), (Xo[Xt] = null), Xt--);
}
function F(e, t) {
  Xt++, (Xo[Xt] = e.current), (e.current = t);
}
var gt = {},
  ue = wt(gt),
  he = wt(!1),
  zt = gt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
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
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function ll() {
  $(he), $(ue);
}
function bu(e, t, n) {
  if (ue.current !== gt) throw Error(k(168));
  F(ue, t), F(he, n);
}
function Ka(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Hf(e) || "Unknown", l));
  return H({}, n, r);
}
function ol(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (zt = ue.current),
    F(ue, e),
    F(he, he.current),
    !0
  );
}
function es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Ka(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(he),
      $(ue),
      F(ue, e))
    : $(he),
    F(he, n);
}
var He = null,
  Ll = !1,
  oo = !1;
function Ya(e) {
  He === null ? (He = [e]) : He.push(e);
}
function ip(e) {
  (Ll = !0), Ya(e);
}
function St() {
  if (!oo && He !== null) {
    oo = !0;
    var e = 0,
      t = j;
    try {
      var n = He;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (Ll = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), ya(zi, St), l);
    } finally {
      (j = t), (oo = !1);
    }
  }
  return null;
}
var Gt = [],
  Jt = 0,
  il = null,
  ul = 0,
  Ce = [],
  _e = 0,
  Tt = null,
  We = 1,
  Qe = "";
function Ct(e, t) {
  (Gt[Jt++] = ul), (Gt[Jt++] = il), (il = e), (ul = t);
}
function Xa(e, t, n) {
  (Ce[_e++] = We), (Ce[_e++] = Qe), (Ce[_e++] = Tt), (Tt = e);
  var r = We;
  e = Qe;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Qe = o + e);
  } else (We = (1 << o) | (n << l) | r), (Qe = e);
}
function $i(e) {
  e.return !== null && (Ct(e, 1), Xa(e, 1, 0));
}
function Ai(e) {
  for (; e === il; )
    (il = Gt[--Jt]), (Gt[Jt] = null), (ul = Gt[--Jt]), (Gt[Jt] = null);
  for (; e === Tt; )
    (Tt = Ce[--_e]),
      (Ce[_e] = null),
      (Qe = Ce[--_e]),
      (Ce[_e] = null),
      (We = Ce[--_e]),
      (Ce[_e] = null);
}
var we = null,
  ye = null,
  A = !1,
  Oe = null;
function Ga(e, t) {
  var n = xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
  if (A) {
    var t = ye;
    if (t) {
      var n = t;
      if (!ts(e, t)) {
        if (Go(e)) throw Error(k(418));
        t = ct(n.nextSibling);
        var r = we;
        t && ts(e, t)
          ? Ga(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (we = e));
      }
    } else {
      if (Go(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (we = e);
    }
  }
}
function ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Lr(e) {
  if (e !== we) return !1;
  if (!A) return ns(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Go(e)) throw (Ja(), Error(k(418)));
    for (; t; ) Ga(e, t), (t = ct(t.nextSibling));
  }
  if ((ns(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Ja() {
  for (var e = ye; e; ) e = ct(e.nextSibling);
}
function cn() {
  (ye = we = null), (A = !1);
}
function Bi(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var up = qe.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var sl = wt(null),
  al = null,
  Zt = null,
  Vi = null;
function Hi() {
  Vi = Zt = al = null;
}
function Wi(e) {
  var t = sl.current;
  $(sl), (e._currentValue = t);
}
function Zo(e, t, n) {
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
function ln(e, t) {
  (al = e),
    (Vi = Zt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (Vi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zt === null)) {
      if (al === null) throw Error(k(308));
      (Zt = e), (al.dependencies = { lanes: 0, firstContext: e });
    } else Zt = Zt.next = e;
  return t;
}
var Nt = null;
function Qi(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function Za(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Qi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
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
var tt = !1;
function Ki(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qa(e, t) {
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
function Ye(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Qi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function Br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ti(e, n);
  }
}
function rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
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
function cl(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            g = u;
          switch (((m = t), (v = n), g.tag)) {
            case 1:
              if (((S = g.payload), typeof S == "function")) {
                h = S.call(v, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = g.payload),
                (m = typeof S == "function" ? S.call(v, h, m) : S),
                m == null)
              )
                break e;
              h = H({}, h, m);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = v), (s = h)) : (p = p.next = v),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ot |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function ls(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var ba = new Zs.Component().refs;
function qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = pt(e),
      o = Ye(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ft(e, o, l)),
      t !== null && (De(t, e, l, r), Br(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = pt(e),
      o = Ye(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ft(e, o, l)),
      t !== null && (De(t, e, l, r), Br(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = pt(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ft(e, l, r)),
      t !== null && (De(t, e, r, n), Br(t, e, r));
  },
};
function os(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jn(n, r) || !Jn(l, o)
      : !0
  );
}
function ec(e, t, n) {
  var r = !1,
    l = gt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Pe(o))
      : ((l = me(t) ? zt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? an(e, l) : gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function is(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function bo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ba), Ki(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Pe(o))
    : ((o = me(t) ? zt : ue.current), (l.context = an(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
      cl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === ba && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Rr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function us(e) {
  var t = e._init;
  return t(e._payload);
}
function tc(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = ht(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6
      ? ((c = po(d, f.mode, w)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, w) {
    var C = d.type;
    return C === Ht
      ? p(f, c, d.props.children, w, d.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === et &&
            us(C) === c.type))
      ? ((w = l(c, d.props)), (w.ref = xn(f, c, d)), (w.return = f), w)
      : ((w = Yr(d.type, d.key, d.props, null, f.mode, w)),
        (w.ref = xn(f, c, d)),
        (w.return = f),
        w);
  }
  function a(f, c, d, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ho(d, f.mode, w)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, w, C) {
    return c === null || c.tag !== 7
      ? ((c = Rt(d, f.mode, w, C)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = po("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yr:
          return (
            (d = Yr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = xn(f, null, c)),
            (d.return = f),
            d
          );
        case Vt:
          return (c = ho(c, f.mode, d)), (c.return = f), c;
        case et:
          var w = c._init;
          return h(f, w(c._payload), d);
      }
      if (Rn(c) || Sn(c))
        return (c = Rt(c, f.mode, d, null)), (c.return = f), c;
      Rr(f, c);
    }
    return null;
  }
  function m(f, c, d, w) {
    var C = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case yr:
          return d.key === C ? s(f, c, d, w) : null;
        case Vt:
          return d.key === C ? a(f, c, d, w) : null;
        case et:
          return (C = d._init), m(f, c, C(d._payload), w);
      }
      if (Rn(d) || Sn(d)) return C !== null ? null : p(f, c, d, w, null);
      Rr(f, d);
    }
    return null;
  }
  function v(f, c, d, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(d) || null), u(c, f, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case yr:
          return (f = f.get(w.key === null ? d : w.key) || null), s(c, f, w, C);
        case Vt:
          return (f = f.get(w.key === null ? d : w.key) || null), a(c, f, w, C);
        case et:
          var P = w._init;
          return v(f, c, d, P(w._payload), C);
      }
      if (Rn(w) || Sn(w)) return (f = f.get(d) || null), p(c, f, w, C, null);
      Rr(c, w);
    }
    return null;
  }
  function S(f, c, d, w) {
    for (
      var C = null, P = null, L = c, R = (c = 0), Q = null;
      L !== null && R < d.length;
      R++
    ) {
      L.index > R ? ((Q = L), (L = null)) : (Q = L.sibling);
      var I = m(f, L, d[R], w);
      if (I === null) {
        L === null && (L = Q);
        break;
      }
      e && L && I.alternate === null && t(f, L),
        (c = o(I, c, R)),
        P === null ? (C = I) : (P.sibling = I),
        (P = I),
        (L = Q);
    }
    if (R === d.length) return n(f, L), A && Ct(f, R), C;
    if (L === null) {
      for (; R < d.length; R++)
        (L = h(f, d[R], w)),
          L !== null &&
            ((c = o(L, c, R)), P === null ? (C = L) : (P.sibling = L), (P = L));
      return A && Ct(f, R), C;
    }
    for (L = r(f, L); R < d.length; R++)
      (Q = v(L, f, R, d[R], w)),
        Q !== null &&
          (e && Q.alternate !== null && L.delete(Q.key === null ? R : Q.key),
          (c = o(Q, c, R)),
          P === null ? (C = Q) : (P.sibling = Q),
          (P = Q));
    return (
      e &&
        L.forEach(function (Re) {
          return t(f, Re);
        }),
      A && Ct(f, R),
      C
    );
  }
  function g(f, c, d, w) {
    var C = Sn(d);
    if (typeof C != "function") throw Error(k(150));
    if (((d = C.call(d)), d == null)) throw Error(k(151));
    for (
      var P = (C = null), L = c, R = (c = 0), Q = null, I = d.next();
      L !== null && !I.done;
      R++, I = d.next()
    ) {
      L.index > R ? ((Q = L), (L = null)) : (Q = L.sibling);
      var Re = m(f, L, I.value, w);
      if (Re === null) {
        L === null && (L = Q);
        break;
      }
      e && L && Re.alternate === null && t(f, L),
        (c = o(Re, c, R)),
        P === null ? (C = Re) : (P.sibling = Re),
        (P = Re),
        (L = Q);
    }
    if (I.done) return n(f, L), A && Ct(f, R), C;
    if (L === null) {
      for (; !I.done; R++, I = d.next())
        (I = h(f, I.value, w)),
          I !== null &&
            ((c = o(I, c, R)), P === null ? (C = I) : (P.sibling = I), (P = I));
      return A && Ct(f, R), C;
    }
    for (L = r(f, L); !I.done; R++, I = d.next())
      (I = v(L, f, R, I.value, w)),
        I !== null &&
          (e && I.alternate !== null && L.delete(I.key === null ? R : I.key),
          (c = o(I, c, R)),
          P === null ? (C = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        L.forEach(function (yn) {
          return t(f, yn);
        }),
      A && Ct(f, R),
      C
    );
  }
  function N(f, c, d, w) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ht &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case yr:
          e: {
            for (var C = d.key, P = c; P !== null; ) {
              if (P.key === C) {
                if (((C = d.type), C === Ht)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === et &&
                    us(C) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = xn(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Ht
              ? ((c = Rt(d.props.children, f.mode, w, d.key)),
                (c.return = f),
                (f = c))
              : ((w = Yr(d.type, d.key, d.props, null, f.mode, w)),
                (w.ref = xn(f, c, d)),
                (w.return = f),
                (f = w));
          }
          return i(f);
        case Vt:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ho(d, f.mode, w)), (c.return = f), (f = c);
          }
          return i(f);
        case et:
          return (P = d._init), N(f, c, P(d._payload), w);
      }
      if (Rn(d)) return S(f, c, d, w);
      if (Sn(d)) return g(f, c, d, w);
      Rr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = po(d, f.mode, w)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return N;
}
var fn = tc(!0),
  nc = tc(!1),
  fr = {},
  Be = wt(fr),
  er = wt(fr),
  tr = wt(fr);
function Pt(e) {
  if (e === fr) throw Error(k(174));
  return e;
}
function Yi(e, t) {
  switch ((F(tr, t), F(er, e), F(Be, fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = To(t, e));
  }
  $(Be), F(Be, t);
}
function dn() {
  $(Be), $(er), $(tr);
}
function rc(e) {
  Pt(tr.current);
  var t = Pt(Be.current),
    n = To(t, e.type);
  t !== n && (F(er, e), F(Be, n));
}
function Xi(e) {
  er.current === e && ($(Be), $(er));
}
var B = wt(0);
function fl(e) {
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
var io = [];
function Gi() {
  for (var e = 0; e < io.length; e++)
    io[e]._workInProgressVersionPrimary = null;
  io.length = 0;
}
var Vr = qe.ReactCurrentDispatcher,
  uo = qe.ReactCurrentBatchConfig,
  Mt = 0,
  V = null,
  G = null,
  b = null,
  dl = !1,
  Fn = !1,
  nr = 0,
  sp = 0;
function le() {
  throw Error(k(321));
}
function Ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!je(e[n], t[n])) return !1;
  return !0;
}
function Zi(e, t, n, r, l, o) {
  if (
    ((Mt = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? dp : pp),
    (e = n(r, l)),
    Fn)
  ) {
    o = 0;
    do {
      if (((Fn = !1), (nr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (b = G = null),
        (t.updateQueue = null),
        (Vr.current = hp),
        (e = n(r, l));
    } while (Fn);
  }
  if (
    ((Vr.current = pl),
    (t = G !== null && G.next !== null),
    (Mt = 0),
    (b = G = V = null),
    (dl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function qi() {
  var e = nr !== 0;
  return (nr = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (V.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null) (b = t), (G = e);
  else {
    if (e === null) throw Error(k(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      b === null ? (V.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function so(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Mt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (V.lanes |= p),
          (Ot |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      je(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (V.lanes |= o), (Ot |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    je(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function lc() {}
function oc(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    o = !je(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    bi(sc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lr(9, uc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(k(349));
    Mt & 30 || ic(n, t, l);
  }
  return l;
}
function ic(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ac(t) && cc(e);
}
function sc(e, t, n) {
  return n(function () {
    ac(t) && cc(e);
  });
}
function ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function cc(e) {
  var t = Je(e, 1);
  t !== null && De(t, e, 1, -1);
}
function ss(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fc() {
  return Le().memoizedState;
}
function Hr(e, t, n, r) {
  var l = Ue();
  (V.flags |= e),
    (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function zl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (((o = i.destroy), r !== null && Ji(r, i.deps))) {
      l.memoizedState = lr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = lr(1 | t, n, o, r));
}
function as(e, t) {
  return Hr(8390656, 8, e, t);
}
function bi(e, t) {
  return zl(2048, 8, e, t);
}
function dc(e, t) {
  return zl(4, 2, e, t);
}
function pc(e, t) {
  return zl(4, 4, e, t);
}
function hc(e, t) {
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
function mc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zl(4, 4, hc.bind(null, t, e), n)
  );
}
function eu() {}
function vc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yc(e, t, n) {
  return Mt & 21
    ? (je(n, t) || ((n = ka()), (V.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function ap(e, t) {
  var n = j;
  (j = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (j = n), (uo.transition = r);
  }
}
function wc() {
  return Le().memoizedState;
}
function cp(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sc(e))
  )
    kc(t, n);
  else if (((n = Za(e, t, n, r)), n !== null)) {
    var l = ae();
    De(n, e, r, l), Ec(n, t, r);
  }
}
function fp(e, t, n) {
  var r = pt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(e)) kc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), je(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Qi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Za(e, t, l, r)),
      n !== null && ((l = ae()), De(n, e, r, l), Ec(n, t, r));
  }
}
function Sc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function kc(e, t) {
  Fn = dl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ti(e, n);
  }
}
var pl = {
    readContext: Pe,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  dp = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: as,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, hc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
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
        (e = e.dispatch = cp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ss,
    useDebugValue: eu,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = ss(!1),
        t = e[0];
      return (e = ap.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ue();
      if (A) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        Mt & 30 || ic(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        as(sc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        lr(9, uc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = ee.identifierPrefix;
      if (A) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pp = {
    readContext: Pe,
    useCallback: vc,
    useContext: Pe,
    useEffect: bi,
    useImperativeHandle: mc,
    useInsertionEffect: dc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: so,
    useRef: fc,
    useState: function () {
      return so(rr);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Le();
      return yc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = so(rr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: lc,
    useSyncExternalStore: oc,
    useId: wc,
    unstable_isNewReconciler: !1,
  },
  hp = {
    readContext: Pe,
    useCallback: vc,
    useContext: Pe,
    useEffect: bi,
    useImperativeHandle: mc,
    useInsertionEffect: dc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: ao,
    useRef: fc,
    useState: function () {
      return ao(rr);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Le();
      return G === null ? (t.memoizedState = e) : yc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(rr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: lc,
    useSyncExternalStore: oc,
    useId: wc,
    unstable_isNewReconciler: !1,
  };
function pn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Vf(r)), (r = r.return);
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
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mp = typeof WeakMap == "function" ? WeakMap : Map;
function Cc(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ml || ((ml = !0), (ci = r)), ei(e, t);
    }),
    n
  );
}
function _c(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ei(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ei(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Rp.bind(null, e, t, n)), t.then(e, e));
}
function fs(e) {
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
function ds(e, t, n, r, l) {
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
              : ((t = Ye(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vp = qe.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? nc(t, null, n, r) : fn(t, e.child, n, r);
}
function ps(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    ln(t, l),
    (r = Zi(e, t, n, r, o, l)),
    (n = qi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && n && $i(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function hs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !su(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), xc(e, t, o, r, l))
      : ((e = Yr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ht(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return ti(e, t, n, r, l);
}
function Nc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(bt, ge),
        (ge |= n);
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
          F(bt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(bt, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(bt, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function Pc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ti(e, t, n, r, l) {
  var o = me(n) ? zt : ue.current;
  return (
    (o = an(t, o)),
    ln(t, l),
    (n = Zi(e, t, n, r, o, l)),
    (r = qi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && r && $i(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function ms(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    ol(t);
  } else o = !1;
  if ((ln(t, l), t.stateNode === null))
    Wr(e, t), ec(t, n, r), bo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Pe(a))
      : ((a = me(n) ? zt : ue.current), (a = an(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && is(t, i, r, a)),
      (tt = !1);
    var m = t.memoizedState;
    (i.state = m),
      cl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || he.current || tt
        ? (typeof p == "function" && (qo(t, n, p, r), (s = t.memoizedState)),
          (u = tt || os(t, n, u, r, m, s, a))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      qa(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Te(t.type, u)),
      (i.props = a),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = me(n) ? zt : ue.current), (s = an(t, s)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && is(t, i, r, s)),
      (tt = !1),
      (m = t.memoizedState),
      (i.state = m),
      cl(t, r, i, l);
    var S = t.memoizedState;
    u !== h || m !== S || he.current || tt
      ? (typeof v == "function" && (qo(t, n, v, r), (S = t.memoizedState)),
        (a = tt || os(t, n, a, r, m, S, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ni(e, t, n, r, o, l);
}
function ni(e, t, n, r, l, o) {
  Pc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && es(t, n, !1), Ze(e, t, o);
  (r = t.stateNode), (vp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = fn(t, e.child, null, o)), (t.child = fn(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && es(t, n, !0),
    t.child
  );
}
function Lc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bu(e, t.context, !1),
    Yi(e, t.containerInfo);
}
function vs(e, t, n, r, l) {
  return cn(), Bi(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(B, l & 1),
    e === null)
  )
    return (
      Jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ol(i, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = li(n)),
              (t.memoizedState = ri),
              e)
            : tu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return gp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ht(u, o)) : ((o = Rt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? li(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ri),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ht(o, { mode: "visible", children: r.children })),
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
function tu(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && Bi(r),
    fn(t, e.child, null, n),
    (e = tu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(k(422)))), zr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ol({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Rt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fn(t, e.child, null, i),
        (t.child.memoizedState = li(i)),
        (t.memoizedState = ri),
        o);
  if (!(t.mode & 1)) return zr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = co(o, r, void 0)), zr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
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
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Je(e, l), De(r, e, l, -1));
    }
    return uu(), (r = co(Error(k(421)))), zr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = ct(l.nextSibling)),
      (we = t),
      (A = !0),
      (Oe = null),
      e !== null &&
        ((Ce[_e++] = We),
        (Ce[_e++] = Qe),
        (Ce[_e++] = Tt),
        (We = e.id),
        (Qe = e.overflow),
        (Tt = t)),
      (t = tu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function fo(e, t, n, r, l) {
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
function zc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gs(e, n, t);
        else if (e.tag === 19) gs(e, n, t);
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
  if ((F(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && fl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fo(t, !0, n, null, o);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yp(e, t, n) {
  switch (t.tag) {
    case 3:
      Lc(t), cn();
      break;
    case 5:
      rc(t);
      break;
    case 1:
      me(t.type) && ol(t);
      break;
    case 4:
      Yi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(sl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rc(e, t, n)
          : (F(B, B.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Nc(e, t, n);
  }
  return Ze(e, t, n);
}
var Tc, oi, Mc, Oc;
Tc = function (e, t) {
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
oi = function () {};
Mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Po(e, l)), (r = Po(e, r)), (o = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = zo(e, l)), (r = zo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = rl);
    }
    Mo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Hn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Hn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && U("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Oc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!A)
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
function oe(e) {
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
function wp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ai(t), t.tag)) {
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
      return oe(t), null;
    case 1:
      return me(t.type) && ll(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        $(he),
        $(ue),
        Gi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (pi(Oe), (Oe = null)))),
        oi(e, t),
        oe(t),
        null
      );
    case 5:
      Xi(t);
      var l = Pt(tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return oe(t), null;
        }
        if (((e = Pt(Be.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[$e] = t), (r[bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tn.length; l++) U(Tn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Nu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Lu(r, o), U("invalid", r);
          }
          Mo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Hn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              wr(r), Pu(r, o, !0);
              break;
            case "textarea":
              wr(r), Ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ia(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[$e] = t),
            (e[bn] = r),
            Tc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Oo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tn.length; l++) U(Tn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                Nu(e, r), (l = Po(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Lu(e, r), (l = zo(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Mo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? aa(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ua(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Wn(e, s)
                    : typeof s == "number" && Wn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Hn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && U("scroll", e)
                      : s != null && xi(e, o, s, i));
              }
            switch (n) {
              case "input":
                wr(e), Pu(e, r, !1);
                break;
              case "textarea":
                wr(e), Ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? en(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      en(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = rl);
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
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Oc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Pt(tr.current)), Pt(Be.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (o = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        ($(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ja(), cn(), (t.flags |= 98560), (o = !1);
        else if (((o = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[$e] = t;
          } else
            cn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Oe !== null && (pi(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : uu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        dn(), oi(e, t), e === null && Zn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Wi(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && ll(), oe(t), null;
    case 19:
      if (($(B), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Nn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Nn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > hn &&
            ((t.flags |= 128), (r = !0), Nn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
            )
              return oe(t), null;
          } else
            2 * Y() - o.renderingStartTime > hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          F(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Sp(e, t) {
  switch ((Ai(t), t.tag)) {
    case 1:
      return (
        me(t.type) && ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        $(he),
        $(ue),
        Gi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xi(t), null;
    case 13:
      if (($(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        cn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(B), null;
    case 4:
      return dn(), null;
    case 10:
      return Wi(t.type._context), null;
    case 22:
    case 23:
      return iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1,
  ie = !1,
  kp = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function ii(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var ys = !1;
function Ep(e, t) {
  if (((Ho = el), (e = Fa()), Ui(e))) {
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
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (m = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++p === r && (s = i),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wo = { focusedElem: e, selectionRange: n }, el = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var g = S.memoizedProps,
                    N = S.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Te(t.type, g),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(k(163));
            }
        } catch (w) {
          W(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = ys), (ys = !1), S;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ii(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Tl(e, t) {
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
function ui(e) {
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
function Ic(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[bn], delete t[Yo], delete t[lp], delete t[op])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ws(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dc(e.return)) return null;
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
function si(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), (e = e.sibling);
}
function ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), (e = e.sibling);
}
var te = null,
  Me = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) jc(e, t, n), (n = n.sibling);
}
function jc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(Cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || qt(n, t);
    case 6:
      var r = te,
        l = Me;
      (te = null),
        be(e, t, n),
        (te = r),
        (Me = l),
        te !== null &&
          (Me
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Me
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            Xn(e))
          : lo(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = Me),
        (te = n.stateNode.containerInfo),
        (Me = !0),
        be(e, t, n),
        (te = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ii(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), be(e, t, n), (ie = r))
        : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function Ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kp()),
      t.forEach(function (r) {
        var l = Tp.bind(null, e, r);
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
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (Me = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(k(160));
        jc(o, i, l), (te = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Fc(t, e), (t = t.sibling);
}
function Fc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Fe(e), r & 4)) {
        try {
          Un(3, e, e.return), Tl(3, e);
        } catch (g) {
          W(e, e.return, g);
        }
        try {
          Un(5, e, e.return);
        } catch (g) {
          W(e, e.return, g);
        }
      }
      break;
    case 1:
      ze(t, e), Fe(e), r & 512 && n !== null && qt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Fe(e),
        r & 512 && n !== null && qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, "");
        } catch (g) {
          W(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && la(l, o),
              Oo(u, i);
            var a = Oo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                h = s[i + 1];
              p === "style"
                ? aa(l, h)
                : p === "dangerouslySetInnerHTML"
                ? ua(l, h)
                : p === "children"
                ? Wn(l, h)
                : xi(l, p, h, a);
            }
            switch (u) {
              case "input":
                Lo(l, o);
                break;
              case "textarea":
                oa(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? en(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? en(l, !!o.multiple, o.defaultValue, !0)
                      : en(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[bn] = o;
          } catch (g) {
            W(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          W(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (g) {
          W(e, e.return, g);
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
            (lu = Y())),
        r & 4 && Ss(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || p), ze(t, e), (ie = a)) : ze(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (h = _ = p; _ !== null; ) {
              switch (((m = _), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, m, m.return);
                  break;
                case 1:
                  qt(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (g) {
                      W(r, n, g);
                    }
                  }
                  break;
                case 5:
                  qt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Es(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (_ = v)) : Es(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = sa("display", i)));
              } catch (g) {
                W(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (g) {
                W(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Fe(e), r & 4 && Ss(e);
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
          if (Dc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
          var o = ws(e);
          ai(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ws(e);
          si(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cp(e, t, n) {
  (_ = e), Uc(e);
}
function Uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Tr;
        var a = ie;
        if (((Tr = i), (ie = s) && !a))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Cs(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : Cs(l);
        for (; o !== null; ) (_ = o), Uc(o), (o = o.sibling);
        (_ = l), (Tr = u), (ie = a);
      }
      ks(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : ks(e);
  }
}
function ks(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ls(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ls(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
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
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Xn(h);
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
              throw Error(k(163));
          }
        ie || (t.flags & 512 && ui(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Es(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Cs(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            ui(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ui(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var _p = Math.ceil,
  hl = qe.ReactCurrentDispatcher,
  nu = qe.ReactCurrentOwner,
  Ne = qe.ReactCurrentBatchConfig,
  D = 0,
  ee = null,
  X = null,
  ne = 0,
  ge = 0,
  bt = wt(0),
  J = 0,
  or = null,
  Ot = 0,
  Ml = 0,
  ru = 0,
  $n = null,
  de = null,
  lu = 0,
  hn = 1 / 0,
  Ve = null,
  ml = !1,
  ci = null,
  dt = null,
  Mr = !1,
  ot = null,
  vl = 0,
  An = 0,
  fi = null,
  Qr = -1,
  Kr = 0;
function ae() {
  return D & 6 ? Y() : Qr !== -1 ? Qr : (Qr = Y());
}
function pt(e) {
  return e.mode & 1
    ? D & 2 && ne !== 0
      ? ne & -ne
      : up.transition !== null
      ? (Kr === 0 && (Kr = ka()), Kr)
      : ((e = j),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : La(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < An) throw ((An = 0), (fi = null), Error(k(185)));
  sr(e, n, r),
    (!(D & 2) || e !== ee) &&
      (e === ee && (!(D & 2) && (Ml |= n), J === 4 && rt(e, ne)),
      ve(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((hn = Y() + 500), Ll && St()));
}
function ve(e, t) {
  var n = e.callbackNode;
  ud(e, t);
  var r = br(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mu(n), t === 1))
      e.tag === 0 ? ip(_s.bind(null, e)) : Ya(_s.bind(null, e)),
        np(function () {
          !(D & 6) && St();
        }),
        (n = null);
    else {
      switch (Ea(r)) {
        case 1:
          n = zi;
          break;
        case 4:
          n = wa;
          break;
        case 16:
          n = qr;
          break;
        case 536870912:
          n = Sa;
          break;
        default:
          n = qr;
      }
      n = Kc(n, $c.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $c(e, t) {
  if (((Qr = -1), (Kr = 0), D & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = br(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = Bc();
    (ee !== e || ne !== t) && ((Ve = null), (hn = Y() + 500), Lt(e, t));
    do
      try {
        Pp();
        break;
      } catch (u) {
        Ac(e, u);
      }
    while (1);
    Hi(),
      (hl.current = o),
      (D = l),
      X !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Uo(e)), l !== 0 && ((r = l), (t = di(e, l)))), t === 1)
    )
      throw ((n = or), Lt(e, 0), rt(e, r), ve(e, Y()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !xp(l) &&
          ((t = gl(e, r)),
          t === 2 && ((o = Uo(e)), o !== 0 && ((r = o), (t = di(e, o)))),
          t === 1))
      )
        throw ((n = or), Lt(e, 0), rt(e, r), ve(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          _t(e, de, Ve);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = lu + 500 - Y()), 10 < t))
          ) {
            if (br(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ko(_t.bind(null, e, de, Ve), t);
            break;
          }
          _t(e, de, Ve);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
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
                : 1960 * _p(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ko(_t.bind(null, e, de, Ve), r);
            break;
          }
          _t(e, de, Ve);
          break;
        case 5:
          _t(e, de, Ve);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ve(e, Y()), e.callbackNode === n ? $c.bind(null, e) : null;
}
function di(e, t) {
  var n = $n;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = gl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && pi(t)),
    e
  );
}
function pi(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function xp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!je(o(), l)) return !1;
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
function rt(e, t) {
  for (
    t &= ~ru,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _s(e) {
  if (D & 6) throw Error(k(327));
  on();
  var t = br(e, 0);
  if (!(t & 1)) return ve(e, Y()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Uo(e);
    r !== 0 && ((t = r), (n = di(e, r)));
  }
  if (n === 1) throw ((n = or), Lt(e, 0), rt(e, t), ve(e, Y()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, de, Ve),
    ve(e, Y()),
    null
  );
}
function ou(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((hn = Y() + 500), Ll && St());
  }
}
function It(e) {
  ot !== null && ot.tag === 0 && !(D & 6) && on();
  var t = D;
  D |= 1;
  var n = Ne.transition,
    r = j;
  try {
    if (((Ne.transition = null), (j = 1), e)) return e();
  } finally {
    (j = r), (Ne.transition = n), (D = t), !(D & 6) && St();
  }
}
function iu() {
  (ge = bt.current), $(bt);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tp(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Ai(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ll();
          break;
        case 3:
          dn(), $(he), $(ue), Gi();
          break;
        case 5:
          Xi(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          $(B);
          break;
        case 19:
          $(B);
          break;
        case 10:
          Wi(r.type._context);
          break;
        case 22:
        case 23:
          iu();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (X = e = ht(e.current, null)),
    (ne = ge = t),
    (J = 0),
    (or = null),
    (ru = Ml = Ot = 0),
    (de = $n = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = X;
    try {
      if ((Hi(), (Vr.current = pl), dl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        dl = !1;
      }
      if (
        ((Mt = 0),
        (b = G = V = null),
        (Fn = !1),
        (nr = 0),
        (nu.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (or = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = fs(i);
          if (v !== null) {
            (v.flags &= -257),
              ds(v, i, u, o, t),
              v.mode & 1 && cs(o, a, t),
              (t = v),
              (s = a);
            var S = t.updateQueue;
            if (S === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              cs(o, a, t), uu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (A && u.mode & 1) {
          var N = fs(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              ds(N, i, u, o, t),
              Bi(pn(s, u));
            break e;
          }
        }
        (o = s = pn(s, u)),
          J !== 4 && (J = 2),
          $n === null ? ($n = [o]) : $n.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Cc(o, s, t);
              rs(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (dt === null || !dt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = _c(o, u, t);
                rs(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hc(n);
    } catch (C) {
      (t = C), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Bc() {
  var e = hl.current;
  return (hl.current = pl), e === null ? pl : e;
}
function uu() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Ot & 268435455) && !(Ml & 268435455)) || rt(ee, ne);
}
function gl(e, t) {
  var n = D;
  D |= 2;
  var r = Bc();
  (ee !== e || ne !== t) && ((Ve = null), Lt(e, t));
  do
    try {
      Np();
      break;
    } catch (l) {
      Ac(e, l);
    }
  while (1);
  if ((Hi(), (D = n), (hl.current = r), X !== null)) throw Error(k(261));
  return (ee = null), (ne = 0), J;
}
function Np() {
  for (; X !== null; ) Vc(X);
}
function Pp() {
  for (; X !== null && !qf(); ) Vc(X);
}
function Vc(e) {
  var t = Qc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hc(e) : (X = t),
    (nu.current = null);
}
function Hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sp(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (X = null);
        return;
      }
    } else if (((n = wp(n, t, ge)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function _t(e, t, n) {
  var r = j,
    l = Ne.transition;
  try {
    (Ne.transition = null), (j = 1), Lp(e, t, n, r);
  } finally {
    (Ne.transition = l), (j = r);
  }
  return null;
}
function Lp(e, t, n, r) {
  do on();
  while (ot !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (sd(e, o),
    e === ee && ((X = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      Kc(qr, function () {
        return on(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = j;
    j = 1;
    var u = D;
    (D |= 4),
      (nu.current = null),
      Ep(e, n),
      Fc(n, e),
      Xd(Wo),
      (el = !!Ho),
      (Wo = Ho = null),
      (e.current = n),
      Cp(n),
      bf(),
      (D = u),
      (j = i),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (ot = e), (vl = l)),
    (o = e.pendingLanes),
    o === 0 && (dt = null),
    nd(n.stateNode),
    ve(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ml) throw ((ml = !1), (e = ci), (ci = null), e);
  return (
    vl & 1 && e.tag !== 0 && on(),
    (o = e.pendingLanes),
    o & 1 ? (e === fi ? An++ : ((An = 0), (fi = e))) : (An = 0),
    St(),
    null
  );
}
function on() {
  if (ot !== null) {
    var e = Ea(vl),
      t = Ne.transition,
      n = j;
    try {
      if (((Ne.transition = null), (j = 16 > e ? 16 : e), ot === null))
        var r = !1;
      else {
        if (((e = ot), (ot = null), (vl = 0), D & 6)) throw Error(k(331));
        var l = D;
        for (D |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (_ = h);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var m = p.sibling,
                        v = p.return;
                      if ((Ic(p), p === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (_ = m);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var N = g.sibling;
                    (g.sibling = null), (g = N);
                  } while (g !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Un(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (_ = d);
          else
            e: for (i = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tl(9, u);
                  }
                } catch (C) {
                  W(u, u.return, C);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (_ = w);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((D = l), St(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(Cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (j = n), (Ne.transition = t);
    }
  }
  return !1;
}
function xs(e, t, n) {
  (t = pn(n, t)),
    (t = Cc(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = ae()),
    e !== null && (sr(e, 1, t), ve(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) xs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          (e = pn(n, e)),
            (e = _c(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = ae()),
            t !== null && (sr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > Y() - lu)
        ? Lt(e, 0)
        : (ru |= n)),
    ve(e, t);
}
function Wc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = ae();
  (e = Je(e, t)), e !== null && (sr(e, t, n), ve(e, n));
}
function zp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wc(e, n);
}
function Tp(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), Wc(e, n);
}
var Qc;
Qc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), yp(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), A && t.flags & 1048576 && Xa(t, ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var l = an(t, ue.current);
      ln(t, n), (l = Zi(null, t, r, e, l, n));
      var o = qi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), ol(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ki(t),
            (l.updater = Rl),
            (t.stateNode = l),
            (l._reactInternals = t),
            bo(t, r, e, n),
            (t = ni(null, t, r, !0, o, n)))
          : ((t.tag = 0), A && o && $i(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Op(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = ti(null, t, r, e, n);
            break e;
          case 1:
            t = ms(null, t, r, e, n);
            break e;
          case 11:
            t = ps(null, t, r, e, n);
            break e;
          case 14:
            t = hs(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ti(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ms(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Lc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          qa(e, t),
          cl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = pn(Error(k(423)), t)), (t = vs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = pn(Error(k(424)), t)), (t = vs(e, t, r, n, l));
            break e;
          } else
            for (
              ye = ct(t.stateNode.containerInfo.firstChild),
                we = t,
                A = !0,
                Oe = null,
                n = nc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cn(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rc(t),
        e === null && Jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Qo(r, l) ? (i = null) : o !== null && Qo(r, o) && (t.flags |= 32),
        Pc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return Rc(e, t, n);
    case 4:
      return (
        Yi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ps(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          F(sl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (je(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ye(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Zo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Zo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ln(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        hs(e, t, r, l, n)
      );
    case 15:
      return xc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Wr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), ol(t)) : (e = !1),
        ln(t, n),
        ec(t, r, l),
        bo(t, r, l, n),
        ni(null, t, r, !0, e, n)
      );
    case 19:
      return zc(e, t, n);
    case 22:
      return Nc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Kc(e, t) {
  return ya(e, t);
}
function Mp(e, t, n, r) {
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
  return new Mp(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Op(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pi)) return 11;
    if (e === Li) return 14;
  }
  return 2;
}
function ht(e, t) {
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
function Yr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) su(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ht:
        return Rt(n.children, l, o, t);
      case Ni:
        (i = 8), (l |= 8);
        break;
      case Co:
        return (
          (e = xe(12, n, t, l | 2)), (e.elementType = Co), (e.lanes = o), e
        );
      case _o:
        return (e = xe(13, n, t, l)), (e.elementType = _o), (e.lanes = o), e;
      case xo:
        return (e = xe(19, n, t, l)), (e.elementType = xo), (e.lanes = o), e;
      case ta:
        return Ol(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bs:
              i = 10;
              break e;
            case ea:
              i = 9;
              break e;
            case Pi:
              i = 11;
              break e;
            case Li:
              i = 14;
              break e;
            case et:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rt(e, t, n, r) {
  return (e = xe(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
  return (
    (e = xe(22, e, r, t)),
    (e.elementType = ta),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return (e = xe(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
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
function Ip(e, t, n, r, l) {
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
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function au(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Ip(e, t, n, u, s)),
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
    Ki(o),
    e
  );
}
function Dp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Yc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Ka(e, n, t);
  }
  return t;
}
function Xc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = au(n, r, !0, e, l, o, i, u, s)),
    (e.context = Yc(null)),
    (n = e.current),
    (r = ae()),
    (l = pt(n)),
    (o = Ye(r, l)),
    (o.callback = t ?? null),
    ft(n, o, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ve(e, r),
    e
  );
}
function Il(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = pt(l);
  return (
    (n = Yc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(l, t, i)),
    e !== null && (De(e, l, i, o), Br(e, l, i)),
    i
  );
}
function yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ns(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cu(e, t) {
  Ns(e, t), (e = e.alternate) && Ns(e, t);
}
function jp() {
  return null;
}
var Gc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fu(e) {
  this._internalRoot = e;
}
Dl.prototype.render = fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Il(e, t, null, null);
};
Dl.prototype.unmount = fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function () {
      Il(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function Dl(e) {
  this._internalRoot = e;
}
Dl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && Pa(e);
  }
};
function du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ps() {}
function Fp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = yl(i);
        o.call(a);
      };
    }
    var i = Xc(t, r, e, 0, null, !1, !1, "", Ps);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Zn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = yl(s);
      u.call(a);
    };
  }
  var s = au(e, 0, !1, null, null, !1, !1, "", Ps);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      Il(t, s, n, r);
    }),
    s
  );
}
function Fl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = yl(i);
        u.call(s);
      };
    }
    Il(t, i, e, l);
  } else i = Fp(n, t, e, l, r);
  return yl(i);
}
Ca = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 &&
          (Ti(t, n | 1), ve(t, Y()), !(D & 6) && ((hn = Y() + 500), St()));
      }
      break;
    case 13:
      It(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ae();
          De(r, e, 1, l);
        }
      }),
        cu(e, 1);
  }
};
Mi = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ae();
      De(t, e, 134217728, n);
    }
    cu(e, 134217728);
  }
};
_a = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = Je(e, t);
    if (n !== null) {
      var r = ae();
      De(n, e, t, r);
    }
    cu(e, t);
  }
};
xa = function () {
  return j;
};
Na = function (e, t) {
  var n = j;
  try {
    return (j = e), t();
  } finally {
    j = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Lo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Pl(r);
            if (!l) throw Error(k(90));
            ra(r), Lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      oa(e, n);
      break;
    case "select":
      (t = n.value), t != null && en(e, !!n.multiple, t, !1);
  }
};
da = ou;
pa = It;
var Up = { usingClientEntryPoint: !1, Events: [cr, Yt, Pl, ca, fa, ou] },
  Pn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $p = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = va(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || jp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber)
    try {
      (Cl = Or.inject($p)), (Ae = Or);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Up;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!du(t)) throw Error(k(200));
  return Dp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!du(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Gc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = au(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    new fu(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = va(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return It(e);
};
ke.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(k(200));
  return Fl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!du(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Gc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Xc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    Zn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Dl(t);
};
ke.render = function (e, t, n) {
  if (!jl(t)) throw Error(k(200));
  return Fl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (It(function () {
        Fl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = ou;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Fl(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
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
  t(), (e.exports = ke);
})(jf);
var Ls = So;
(wo.createRoot = Ls.createRoot), (wo.hydrateRoot = Ls.hydrateRoot);
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ir() {
  return (
    (ir = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ir.apply(this, arguments)
  );
}
var it;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(it || (it = {}));
const Rs = "popstate";
function Ap(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = "/",
      search: u = "",
      hash: s = "",
    } = Ft(l.location.hash.substr(1));
    return hi(
      "",
      { pathname: i, search: u, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      u = "";
    if (i && i.getAttribute("href")) {
      let s = l.location.href,
        a = s.indexOf("#");
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + "#" + (typeof o == "string" ? o : wl(o));
  }
  function r(l, o) {
    Bp(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return Hp(t, n, r, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Vp() {
  return Math.random().toString(36).substr(2, 8);
}
function zs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function hi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ir(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ft(t) : t,
      { state: n, key: (t && t.key) || r || Vp() }
    )
  );
}
function wl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ft(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Hp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = it.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), i.replaceState(ir({}, i.state, { idx: a }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = it.Pop;
    let N = p(),
      f = N == null ? null : N - a;
    (a = N), s && s({ action: u, location: g.location, delta: f });
  }
  function m(N, f) {
    u = it.Push;
    let c = hi(g.location, N, f);
    n && n(c, N), (a = p() + 1);
    let d = zs(c, a),
      w = g.createHref(c);
    try {
      i.pushState(d, "", w);
    } catch {
      l.location.assign(w);
    }
    o && s && s({ action: u, location: g.location, delta: 1 });
  }
  function v(N, f) {
    u = it.Replace;
    let c = hi(g.location, N, f);
    n && n(c, N), (a = p());
    let d = zs(c, a),
      w = g.createHref(c);
    i.replaceState(d, "", w),
      o && s && s({ action: u, location: g.location, delta: 0 });
  }
  function S(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof N == "string" ? N : wl(N);
    return (
      Z(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Rs, h),
        (s = N),
        () => {
          l.removeEventListener(Rs, h), (s = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: S,
    encodeLocation(N) {
      let f = S(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: v,
    go(N) {
      return i.go(N);
    },
  };
  return g;
}
var Ts;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ts || (Ts = {}));
function Wp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ft(t) : t,
    l = qc(r.pathname || "/", n);
  if (l == null) return null;
  let o = Jc(e);
  Qp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = eh(o[u], rh(l));
  return i;
}
function Jc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (Z(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = mt([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (Z(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Jc(o.children, t, p, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: qp(a, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Zc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Zc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Zc(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Qp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : bp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Kp = /^:\w+$/,
  Yp = 3,
  Xp = 2,
  Gp = 1,
  Jp = 10,
  Zp = -2,
  Ms = (e) => e === "*";
function qp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ms) && (r += Zp),
    t && (r += Xp),
    n
      .filter((l) => !Ms(l))
      .reduce((l, o) => l + (Kp.test(o) ? Yp : o === "" ? Gp : Jp), r)
  );
}
function bp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function eh(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      p = th(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: mt([l, p.pathname]),
      pathnameBase: uh(mt([l, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== "/" && (l = mt([l, p.pathnameBase]));
  }
  return o;
}
function th(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = nh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, h) => {
      if (p === "*") {
        let m = u[h] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (a[p] = lh(u[h] || "", p)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function nh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function rh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      pu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function lh(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      pu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function qc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function pu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function oh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ft(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ih(n, t)) : t,
    search: sh(r),
    hash: ah(l),
  };
}
function ih(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function mo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ef(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ft(e))
    : ((l = ir({}, e)),
      Z(
        !l.pathname || !l.pathname.includes("?"),
        mo("?", "pathname", "search", l)
      ),
      Z(
        !l.pathname || !l.pathname.includes("#"),
        mo("#", "pathname", "hash", l)
      ),
      Z(!l.search || !l.search.includes("#"), mo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (h -= 1);
      l.pathname = m.join("/");
    }
    u = h >= 0 ? t[h] : "/";
  }
  let s = oh(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || p) && (s.pathname += "/"), s;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  uh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ah = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ch(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const fh = ["post", "put", "patch", "delete"];
[...fh];
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(this, arguments)
  );
}
function dh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const ph = typeof Object.is == "function" ? Object.is : dh,
  { useState: hh, useEffect: mh, useLayoutEffect: vh, useDebugValue: gh } = yo;
function yh(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = hh({ inst: { value: r, getSnapshot: t } });
  return (
    vh(() => {
      (l.value = r), (l.getSnapshot = t), vo(l) && o({ inst: l });
    }, [e, r, t]),
    mh(
      () => (
        vo(l) && o({ inst: l }),
        e(() => {
          vo(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    gh(r),
    r
  );
}
function vo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !ph(n, r);
  } catch {
    return !0;
  }
}
function wh(e, t, n) {
  return t();
}
const Sh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kh = !Sh,
  Eh = kh ? wh : yh;
"useSyncExternalStore" in yo && ((e) => e.useSyncExternalStore)(yo);
const tf = E.createContext(null),
  hu = E.createContext(null),
  dr = E.createContext(null),
  Ul = E.createContext(null),
  Ut = E.createContext({ outlet: null, matches: [] }),
  nf = E.createContext(null);
function Ch(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pr() || Z(!1);
  let { basename: r, navigator: l } = E.useContext(dr),
    { hash: o, pathname: i, search: u } = mu(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : mt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function pr() {
  return E.useContext(Ul) != null;
}
function hr() {
  return pr() || Z(!1), E.useContext(Ul).location;
}
function _h() {
  pr() || Z(!1);
  let { basename: e, navigator: t } = E.useContext(dr),
    { matches: n } = E.useContext(Ut),
    { pathname: r } = hr(),
    l = JSON.stringify(bc(n).map((u) => u.pathnameBase)),
    o = E.useRef(!1);
  return (
    E.useEffect(() => {
      o.current = !0;
    }),
    E.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let a = ef(u, JSON.parse(l), r, s.relative === "path");
        e !== "/" &&
          (a.pathname = a.pathname === "/" ? e : mt([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state, s);
      },
      [e, t, l, r]
    )
  );
}
const xh = E.createContext(null);
function Nh(e) {
  let t = E.useContext(Ut).outlet;
  return t && E.createElement(xh.Provider, { value: e }, t);
}
function mu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = E.useContext(Ut),
    { pathname: l } = hr(),
    o = JSON.stringify(bc(r).map((i) => i.pathnameBase));
  return E.useMemo(() => ef(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Ph(e, t) {
  pr() || Z(!1);
  let { navigator: n } = E.useContext(dr),
    r = E.useContext(hu),
    { matches: l } = E.useContext(Ut),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = hr(),
    a;
  if (t) {
    var p;
    let g = typeof t == "string" ? Ft(t) : t;
    u === "/" || ((p = g.pathname) != null && p.startsWith(u)) || Z(!1),
      (a = g);
  } else a = s;
  let h = a.pathname || "/",
    m = u === "/" ? h : h.slice(u.length) || "/",
    v = Wp(e, { pathname: m }),
    S = Th(
      v &&
        v.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: mt([
              u,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : mt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && S
    ? E.createElement(
        Ul.Provider,
        {
          value: {
            location: mi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: it.Pop,
          },
        },
        S
      )
    : S;
}
function Lh() {
  let e = Dh(),
    t = ch(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: l }, n) : null,
    o
  );
}
class Rh extends E.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? E.createElement(
          Ut.Provider,
          { value: this.props.routeContext },
          E.createElement(nf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function zh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = E.useContext(tf);
  return (
    l &&
      l.static &&
      l.staticContext &&
      n.route.errorElement &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Ut.Provider, { value: t }, r)
  );
}
function Th(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || Z(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let s = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      a = n ? i.route.errorElement || E.createElement(Lh, null) : null,
      p = t.concat(r.slice(0, u + 1)),
      h = () =>
        E.createElement(
          zh,
          { match: i, routeContext: { outlet: o, matches: p } },
          s ? a : i.route.element !== void 0 ? i.route.element : o
        );
    return n && (i.route.errorElement || u === 0)
      ? E.createElement(Rh, {
          location: n.location,
          component: a,
          error: s,
          children: h(),
          routeContext: { outlet: null, matches: p },
        })
      : h();
  }, null);
}
var Os;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Os || (Os = {}));
var Sl;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Sl || (Sl = {}));
function Mh(e) {
  let t = E.useContext(hu);
  return t || Z(!1), t;
}
function Oh(e) {
  let t = E.useContext(Ut);
  return t || Z(!1), t;
}
function Ih(e) {
  let t = Oh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function Dh() {
  var e;
  let t = E.useContext(nf),
    n = Mh(Sl.UseRouteError),
    r = Ih(Sl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function jh(e) {
  return Nh(e.context);
}
function Bt(e) {
  Z(!1);
}
function Fh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = it.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  pr() && Z(!1);
  let u = t.replace(/^\/*/, "/"),
    s = E.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Ft(r));
  let {
      pathname: a = "/",
      search: p = "",
      hash: h = "",
      state: m = null,
      key: v = "default",
    } = r,
    S = E.useMemo(() => {
      let g = qc(a, u);
      return g == null
        ? null
        : { pathname: g, search: p, hash: h, state: m, key: v };
    }, [u, a, p, h, m, v]);
  return S == null
    ? null
    : E.createElement(
        dr.Provider,
        { value: s },
        E.createElement(Ul.Provider, {
          children: n,
          value: { location: S, navigationType: l },
        })
      );
}
function Uh(e) {
  let { children: t, location: n } = e,
    r = E.useContext(tf),
    l = r && !t ? r.router.routes : vi(t);
  return Ph(l, n);
}
var Is;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Is || (Is = {}));
new Promise(() => {});
function vi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, l) => {
      if (!E.isValidElement(r)) return;
      if (r.type === E.Fragment) {
        n.push.apply(n, vi(r.props.children, t));
        return;
      }
      r.type !== Bt && Z(!1), !r.props.index || !r.props.children || Z(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = vi(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kl() {
  return (
    (kl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kl.apply(this, arguments)
  );
}
function rf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function $h(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ah(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$h(e);
}
const Bh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Vh = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function Hh(e) {
  let { basename: t, children: n, window: r } = e,
    l = E.useRef();
  l.current == null && (l.current = Ap({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, u] = E.useState({ action: o.action, location: o.location });
  return (
    E.useLayoutEffect(() => o.listen(u), [o]),
    E.createElement(Fh, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
const Wh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qh = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: p,
      } = t,
      h = rf(t, Bh),
      m,
      v = !1;
    if (Wh && typeof a == "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(a)) {
      m = a;
      let f = new URL(window.location.href),
        c = a.startsWith("//") ? new URL(f.protocol + a) : new URL(a);
      c.origin === f.origin ? (a = c.pathname + c.search + c.hash) : (v = !0);
    }
    let S = Ch(a, { relative: l }),
      g = Kh(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: l,
      });
    function N(f) {
      r && r(f), f.defaultPrevented || g(f);
    }
    return E.createElement(
      "a",
      kl({}, h, { href: m || S, onClick: v || o ? r : N, ref: n, target: s })
    );
  }),
  vu = E.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: s,
        children: a,
      } = t,
      p = rf(t, Vh),
      h = mu(s, { relative: p.relative }),
      m = hr(),
      v = E.useContext(hu),
      { navigator: S } = E.useContext(dr),
      g = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
      N = m.pathname,
      f =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    l ||
      ((N = N.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (g = g.toLowerCase()));
    let c = N === g || (!i && N.startsWith(g) && N.charAt(g.length) === "/"),
      d =
        f != null &&
        (f === g || (!i && f.startsWith(g) && f.charAt(g.length) === "/")),
      w = c ? r : void 0,
      C;
    typeof o == "function"
      ? (C = o({ isActive: c, isPending: d }))
      : (C = [o, c ? "active" : null, d ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let P = typeof u == "function" ? u({ isActive: c, isPending: d }) : u;
    return E.createElement(
      Qh,
      kl({}, p, { "aria-current": w, className: C, ref: n, style: P, to: s }),
      typeof a == "function" ? a({ isActive: c, isPending: d }) : a
    );
  });
var Ds;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ds || (Ds = {}));
var js;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(js || (js = {}));
function Kh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = _h(),
    s = hr(),
    a = mu(e, { relative: i });
  return E.useCallback(
    (p) => {
      if (Ah(p, n)) {
        p.preventDefault();
        let h = r !== void 0 ? r : wl(s) === wl(a);
        u(e, { replace: h, state: l, preventScrollReset: o, relative: i });
      }
    },
    [s, u, a, r, l, n, e, o, i]
  );
}
const gu = E.createContext({
    selfConfessedMisdemeanour: [],
    setSelfConfessedMisdemeanour: () => {},
  }),
  Yh = ({ children: e }) => {
    const [t, n] = E.useState([]),
      r = { selfConfessedMisdemeanour: t, setSelfConfessedMisdemeanour: n };
    return y(gu.Provider, { value: r, children: e });
  },
  At = ({ to: e, ariaLabel: t, content: n, onClick: r }) =>
    y("li", {
      children: y(vu, {
        className: ({ isActive: l }) => (l ? "nav__item active" : "nav__item"),
        to: e,
        "aria-label": t,
        onClick: r,
        children: n,
      }),
    }),
  Fs = "./assets/home-outline-8ed9d0e3.svg",
  Xh = "./assets/menu-faba4d2c.svg",
  Gh = "./assets/x-circle-eee4620e.svg",
  Jh = () => {
    const [e, t] = E.useState(!1),
      [n, r] = E.useState(!1);
    return M(un, {
      children: [
        y("div", {
          className: e && !n ? "hidden" : "nav__menu",
          onClick: () => {
            t(!e), r(!r);
          },
          children: y("svg", {
            className: "icon__menu icon-menu",
            children: y("use", { xlinkHref: `${Xh}#icon-menu` }),
          }),
        }),
        y("div", {
          className: e && !n ? "nav__menu" : "hidden",
          onClick: () => {
            t(!e), r(!r);
          },
          children: y("svg", {
            className: "icon__menu icon-x-circle",
            children: y("use", { xlinkHref: `${Gh}#icon-x-circle` }),
          }),
        }),
        y("nav", {
          className: e && !n ? "nav__menuBar" : "hidden",
          children: M("ul", {
            className: "nav__list",
            children: [
              y(At, {
                to: "/",
                ariaLabel: "home--menu",
                content: y("svg", {
                  className: "icon icon-home-outline",
                  children: y("use", { xlinkHref: `${Fs}#icon-home-outline` }),
                }),
                onClick: () => {
                  r(!0), t(!e);
                },
              }),
              y(At, {
                to: "/misdemeanours",
                ariaLabel: "misdemeanours--menu",
                content: "Misdemeanours",
                onClick: () => {
                  r(!0), t(!e);
                },
              }),
              y(At, {
                to: "/confession",
                ariaLabel: "confession--menu",
                content: "Confess To Us",
                onClick: () => {
                  r(!0), t(!e);
                },
              }),
            ],
          }),
        }),
        y("nav", {
          className: "nav",
          children: M("ul", {
            className: "nav__list",
            children: [
              y(At, {
                to: "/",
                ariaLabel: "home",
                content: y("svg", {
                  className: "icon icon-home-outline",
                  children: y("use", { xlinkHref: `${Fs}#icon-home-outline` }),
                }),
                onClick: () => {},
              }),
              y(At, {
                to: "/misdemeanours",
                ariaLabel: "misdemeanours",
                content: "Misdemeanours",
                onClick: () => {},
              }),
              y(At, {
                to: "/confession",
                ariaLabel: "confession",
                content: "Confess To Us",
                onClick: () => {},
              }),
            ],
          }),
        }),
      ],
    });
  },
  lf = "./assets/justice-e0a6e74e.png",
  of = "./assets/fakelandiaLogo1-f5686c28.png",
  Zh = () =>
    M("header", {
      className: "header",
      children: [
        y("div", {
          className: "header__img-box",
          children: y(vu, {
            to: "/",
            children: M("div", {
              className: "header__img-box",
              children: [
                y("img", {
                  className: "header__img--small",
                  src: lf,
                  alt: "Justice Department of Fakelandia Logo",
                }),
                y("img", {
                  className: "header__img",
                  src: of,
                  alt: "Justice Department of Fakelandia Logo",
                }),
              ],
            }),
          }),
        }),
        y(Jh, {}),
      ],
    }),
  qh = () =>
    M("footer", {
      className: "footer",
      children: [
        y(vu, {
          className: "footer_nav",
          to: "/",
          children: M("div", {
            className: "header__img-box",
            children: [
              y("img", {
                className: "footer__img--small",
                src: lf,
                alt: "Justice Department of Fakelandia Logo",
              }),
              y("img", {
                className: "footer__img",
                src: of,
                alt: "Justice Department of Fakelandia Logo",
              }),
            ],
          }),
        }),
        y("p", {
          children:
            "Copyright © 2023 by Neema. All rights reserved. This website was developed as part of the Tech Returners programme",
        }),
      ],
    }),
  bh = () =>
    M("div", {
      className: "container",
      "aria-label": "container",
      children: [
        y(Zh, {}),
        y("main", {
          className: "main",
          children: y(Yh, { children: y(jh, {}) }),
        }),
        y(qh, {}),
      ],
    }),
  em = () =>
    M("div", {
      className: "home",
      "aria-label": "home-page",
      children: [
        y("h1", {
          children:
            "Welcome to the home of the Justice Department of Fakelandia",
        }),
        y("p", {
          children:
            "Here you can browse a list of recent misdemeanours commited by our citizens, or you can confess to your own misdemeanours.",
        }),
      ],
    }),
  uf = E.createContext([]),
  Xr = (e) => {
    let t = "";
    if (e === "rudeness") t = "🤪";
    else if (e === "lift") t = "🗣";
    else if (e === "vegetables") t = "🥗";
    else if (e === "united") t = "😈";
    else return t;
    return t;
  },
  go = {
    errEmpty: "⛔️ Error : Field is empty !",
    errCharCount:
      "⛔️ Error : Number of characters must be between 10 and 30 characters !",
    errValidString: "⛔️ Error : Please enter a valid string !",
  },
  tm = { errNotSelected: "⛔️ Error : Please select an option !" },
  Us = {
    errEmpty: "⛔️ Error : Field is empty !",
    errCharCount:
      "⛔️ Error : Number of Characters must be between 20 and 100 !",
  },
  Ke = {
    error404: "⛔️ Error: 404 url not found! 🤕",
    error500: "⛔️ Error: 500 🤕",
    error418: "⛔️ Error: 418 😁",
    errorFetch: "⛔️ Error: Oops... something went wrong in fetching data 🤕",
    errorPost: "⛔️ Error: Oops... something went wrong in posting data 🤕",
    errUnsuccessful: "⛔️ Unsuccessful 🤕",
  },
  nm = async (e, t) => {
    try {
      const n = await fetch(e);
      if (!n.ok)
        throw n.status === 500
          ? new Error(`${Ke.error500}`)
          : n.status === 418
          ? new Error(`${Ke.error418}`)
          : n.status === 404
          ? new Error(`${Ke.error404}`)
          : new Error(`${Ke.errorFetch}`);
      const r = await n.json();
      return t(""), r;
    } catch (n) {
      let r = "unknown error";
      n instanceof Error && (r = n.message), t(r);
    }
  },
  Bn = ({ value: e, label: t }) =>
    y("option", { value: e, className: "form__option", children: t }),
  gi = ["rudeness", "vegetables", "lift", "united"],
  rm = ({ setFilteredMisdemeanants: e }) => {
    const [t, n] = E.useState(gi[0]),
      r = E.useContext(uf);
    return y("div", {
      className: "dropdown-container",
      children: y("select", {
        className: "dropdown",
        value: t,
        onChange: (o) => {
          if ((n(o.target.value), o.target.value)) {
            const i = r.filter((u, s) => {
              const { misdemeanour: a } = u.misdemeanours;
              return a + " " + Xr(a) === o.target.value;
            });
            e(i);
          } else e(r);
        },
        children: M(un, {
          children: [
            y(Bn, { value: "", label: "Filter : All" }),
            gi.map((o, i) =>
              y(Bn, { value: o + " " + Xr(o), label: o + " " + Xr(o) }, i + o)
            ),
          ],
        }),
      }),
    });
  },
  sf = 50,
  Ir = 180,
  Dr = 100,
  lm = 10,
  om = 30,
  im = 20,
  um = 100,
  sm = "./assets/stats-dots-755675a4.svg",
  am = () => {
    const [e, t] = E.useState([]),
      [n, r] = E.useState(e),
      [l, o] = E.useState(""),
      [i, u] = E.useState(!1),
      { selfConfessedMisdemeanour: s } = E.useContext(gu);
    E.useEffect(() => {
      a();
    }, [s]);
    const a = async () => {
        o(""), u(!0);
        const v = await nm(`http://localhost:8080/api/misdemeanours/${sf}`, o);
        if (v) {
          u(!1);
          const S = v.misdemeanours.map((g, N) => ({
            misdemeanours: {
              citizenId: g.citizenId,
              date: g.date,
              misdemeanour: g.misdemeanour,
            },
            punishment: {
              src: `https://picsum.photos/${Ir}/${Dr}?random&cb=${N}`,
              alt: `Some Random image from Lorem Picsum of width:${Ir} and height:${Dr}`,
            },
            selfConfession: !1,
            selfConfessionDetails: "none",
          }));
          t(S), r(S), p(S);
        } else u(!1);
      },
      p = (v) => {
        if (s.length !== 0) {
          const S = s.map((g, N) => {
            const {
                misdemeanourInfo: f,
                selfConfession: c,
                selfConfessionDetails: d,
              } = g,
              { citizenId: w, misdemeanour: C, date: P } = f;
            return {
              misdemeanours: { citizenId: w, misdemeanour: C, date: P },
              punishment: {
                src: `https://picsum.photos/${Ir}/${Dr}?random&cb=${N}`,
                alt: `Some Random image from Lorem Picsum of width:${Ir} and height:${Dr}`,
              },
              selfConfession: c,
              selfConfessionDetails: d,
            };
          });
          t([...S, ...v]), r([...S, ...v]);
        }
      },
      h = () =>
        "Total Misdemeanours Today : " +
        e.filter((v, S) => {
          const {
            misdemeanours: { date: g },
          } = v;
          return g === new Date().toLocaleDateString("en-US");
        }).length,
      m = () =>
        "Total Self Confessions Today : " +
        e.filter((v, S) => {
          const { selfConfession: g } = v;
          return g === !0;
        }).length;
    return y(uf.Provider, {
      value: e,
      children: M("div", {
        className: "misdemeanour",
        children: [
          M("div", {
            className: "misdemeanour__sidebar",
            children: [
              M("div", {
                className: "misdemeanour__sidebar-heading",
                children: [
                  y("svg", {
                    className: "icon--small icon-stats-dots",
                    children: y("use", { xlinkHref: `${sm}#icon-stats-dots` }),
                  }),
                  y("h3", { children: "Misdemeanours Data Table" }),
                ],
              }),
              y("p", { children: h() }),
              y("p", { children: m() }),
            ],
          }),
          M("div", {
            className: "misdemeanour__table",
            "aria-label": "misdemeanour-page",
            children: [
              M("table", {
                className: "table",
                children: [
                  y("thead", {
                    className: "table__header",
                    children: M("tr", {
                      className: "table__header-row",
                      children: [
                        y("th", { children: "Citizen Id" }),
                        y("th", { children: "Date" }),
                        M("th", {
                          children: [
                            y("p", { children: " Misdemeanour " }),
                            y(rm, {
                              setFilteredMisdemeanants: (v) => {
                                r(v);
                              },
                            }),
                          ],
                        }),
                        y("th", { children: "Punishment Idea" }),
                        y("th", { children: "Confession Details" }),
                      ],
                    }),
                  }),
                  y("tbody", {
                    className: "table__body",
                    children: n.map((v, S) => {
                      const {
                          citizenId: g,
                          date: N,
                          misdemeanour: f,
                        } = v.misdemeanours,
                        { src: c, alt: d } = v.punishment,
                        { selfConfession: w, selfConfessionDetails: C } = v;
                      return M(
                        "tr",
                        {
                          className:
                            w === !0
                              ? "table__row table__self-confession"
                              : "table__row",
                          children: [
                            M("td", {
                              children: [
                                y("span", {
                                  className: "table__label",
                                  children: "Citizen Id :",
                                }),
                                g,
                              ],
                            }),
                            M("td", {
                              children: [
                                y("span", {
                                  className: "table__label",
                                  children: "Date :",
                                }),
                                N,
                              ],
                            }),
                            M("td", {
                              children: [
                                y("span", {
                                  className: "table__label",
                                  children: "Misdemeanour :",
                                }),
                                f + " " + Xr(f),
                              ],
                            }),
                            M("td", {
                              children: [
                                y("span", {
                                  className: "table__label",
                                  children: "Punishment Idea :",
                                }),
                                y("img", { src: c, alt: d }),
                              ],
                            }),
                            M("td", {
                              children: [
                                y("span", {
                                  className: "table__label",
                                  children: "Confession Details :",
                                }),
                                y("span", {
                                  className: "table__label-detail",
                                  children: C,
                                }),
                              ],
                            }),
                          ],
                        },
                        S + "midemeanour"
                      );
                    }),
                  }),
                ],
              }),
              i &&
                y("div", {
                  className: "table__loading",
                  "aria-label": "misdemeanour-loading",
                  children: "Loading ...",
                }),
              l &&
                y("div", {
                  className: "table__error",
                  "aria-label": "misdemeanour-error",
                  children: l,
                }),
            ],
          }),
        ],
      }),
    });
  },
  cm = Ei.memo(am),
  yu = ({ errorMessage: e }) =>
    y("ul", {
      className: "form__error",
      children: e.map((t, n) =>
        y("li", { className: "form__error-msg", children: t }, n + 1 + "err")
      ),
    }),
  fm = ({
    ContainerClassName: e,
    id: t,
    label: n,
    value: r,
    placeholder: l,
    onChange: o,
    onValidation: i,
  }) =>
    M(un, {
      children: [
        M("div", {
          className: e,
          children: [
            y("label", { htmlFor: t, className: "form__label", children: n }),
            y("input", {
              id: t,
              className: "form__input",
              value: r,
              placeholder: l,
              onChange: o,
            }),
          ],
        }),
        y(yu, { errorMessage: i }),
      ],
    }),
  dm = ({
    id: e,
    value: t,
    label: n,
    onChange: r,
    placeholder: l,
    onClick: o,
    onValidation: i,
  }) =>
    M(un, {
      children: [
        M("div", {
          className: "form__select-container",
          children: [
            y("label", { htmlFor: e, className: "form__label", children: n }),
            y("select", {
              id: e,
              className: "form__select",
              value: t,
              placeholder: l,
              onChange: r,
              onClick: o,
              children: M(un, {
                children: [
                  y(Bn, { value: "", label: "Select reason for confession" }),
                  gi.map((u, s) => y(Bn, { value: u, label: u }, s + u)),
                  y(Bn, { value: "just-talk", label: "I just want to talk" }),
                ],
              }),
            }),
          ],
        }),
        y(yu, { errorMessage: i }),
      ],
    }),
  pm = ({
    ContainerClassName: e,
    id: t,
    label: n,
    value: r,
    placeholder: l,
    onChange: o,
    onValidation: i,
  }) =>
    M(un, {
      children: [
        M("div", {
          className: e,
          children: [
            y("label", { htmlFor: t, className: "form__label", children: n }),
            y("textarea", {
              id: t,
              className: "form__textarea",
              value: r,
              placeholder: l,
              onChange: o,
            }),
          ],
        }),
        y(yu, { errorMessage: i }),
      ],
    }),
  hm = ({ name: e, className: t, onClick: n, disabled: r }) =>
    y("button", { className: t, onClick: n, disabled: r, children: e }),
  af = (e, t, n) => {
    const r = n.length;
    return r >= e && r <= t;
  },
  mm = (e) => {
    let t = [],
      n = !1;
    return (
      e || t.push(go.errEmpty),
      e.match(/[^$A-Za-z-.,\s?!]/g) ? t.push(go.errValidString) : (n = !0),
      n && !af(lm, om, e) && t.push(go.errCharCount),
      t
    );
  },
  $s = (e) => {
    let t = [];
    return e || t.push(tm.errNotSelected), t;
  },
  vm = (e) => {
    let t = [];
    return (
      e || t.push(Us.errEmpty), af(im, um, e) || t.push(Us.errCharCount), t
    );
  },
  gm = ({ message: e }) => {
    console.error(e);
  },
  ym = async (e, t, n) => {
    const r = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t),
    };
    try {
      const l = await fetch(e, r);
      if (!l.ok)
        throw l.status === 500
          ? new Error(Ke.error500)
          : l.status === 418
          ? new Error(Ke.error418)
          : l.status === 404
          ? new Error(Ke.error404)
          : new Error(Ke.errorPost);
      const o = await l.json();
      return n(""), o;
    } catch (l) {
      let o = "unknown error";
      l instanceof Error && (o = l.message), gm({ message: o }), n(o);
    }
  },
  As = { subject: "", reason: "", details: "" },
  Bs = { subject: [], reason: [], details: [] },
  wm = () => {
    const [e, t] = E.useState(As),
      [n, r] = E.useState(Bs),
      [l, o] = E.useState(""),
      [i, u] = E.useState(!1),
      { selfConfessedMisdemeanour: s, setSelfConfessedMisdemeanour: a } =
        E.useContext(gu),
      p = (v) =>
        v === "rudeness" ||
        v === "vegetables" ||
        v === "lift" ||
        v === "united",
      h = async () => {
        const v = await ym("http://localhost:8080/api/confess", e, o);
        if (v && v.success === !0 && v.justTalked === !1) {
          if (p(e.reason)) {
            const S = {
              misdemeanourInfo: {
                citizenId: Math.floor(
                  sf + Math.random() * 37 * (Math.random() * 967)
                ),
                misdemeanour: e.reason,
                date: new Date().toLocaleDateString("en-US"),
              },
              selfConfession: !0,
              selfConfessionDetails: e.details,
            };
            u(!0), a([S, ...s]);
          }
        } else v && v.success === !1 ? o(Ke.errUnsuccessful) : u(!1);
      };
    return M("div", {
      className: "form__container",
      children: [
        M("form", {
          className: "form",
          "aria-label": "form-confession",
          onSubmit: (v) => {
            v.preventDefault(), h(), r(Bs), t(As);
          },
          children: [
            y(fm, {
              id: "confession-subject",
              ContainerClassName: "form__input-container",
              label: "subject :",
              value: e.subject,
              placeholder: "Enter your subject",
              onChange: (v) => {
                u(!1),
                  o(""),
                  r({ ...n, subject: mm(v.target.value) }),
                  t({ ...e, subject: v.target.value });
              },
              onValidation: n.subject,
            }),
            y(dm, {
              id: "confession-reason",
              label: "Reason : ",
              value: e.reason,
              placeholder: "Enter reason for confession",
              onClick: () => {
                o(""), r({ ...n, reason: $s(e.reason) });
              },
              onChange: (v) => {
                o(""),
                  u(!1),
                  r({ ...n, reason: $s(v.target.value) }),
                  t({ ...e, reason: v.target.value });
              },
              onValidation: n.reason,
            }),
            y(pm, {
              id: "confession-textarea",
              ContainerClassName: "=form__textarea-container",
              label: "",
              value: e.details,
              placeholder: "Enter your confession details",
              onChange: (v) => {
                u(!1),
                  r({ ...n, details: vm(v.target.value) }),
                  t({ ...e, details: v.target.value });
              },
              onValidation: n.details,
            }),
            y(hm, {
              className: "button--form",
              name: "Confess",
              disabled: !(
                e.subject &&
                e.reason &&
                e.details &&
                n.subject.length === 0 &&
                n.reason.length === 0 &&
                n.details.length === 0
              ),
            }),
          ],
        }),
        M("div", {
          className: "form__submitted-msg",
          children: [
            i &&
              y("div", {
                role: "alert",
                className: "form__sendMsg",
                children: "✅ Message Send !",
              }),
            l &&
              y("div", {
                role: "alert",
                className: "form__err-server",
                children: l,
              }),
          ],
        }),
      ],
    });
  },
  Sm = "./assets/file-text2-1212dc30.svg",
  km = () =>
    M("div", {
      "aria-label": "confession-page",
      className: "confession",
      children: [
        M("div", {
          className: "confession__text",
          children: [
            y("svg", {
              className: "icon__opacity--medium icon-file-text2",
              children: y("use", { xlinkHref: `${Sm}#icon-file-text2` }),
            }),
            y("h1", {
              className: "heading--form",
              children: "Confession Form",
            }),
            y("p", {
              children:
                "It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.",
            }),
            y("p", {
              children:
                "However, if you're just having a hard day and need to vent then, you're welcome to contact us here too. Up to you !",
            }),
          ],
        }),
        y(wm, {}),
      ],
    }),
  Em = () =>
    y("div", {
      className: "notFound",
      "aria-label": "notFound",
      children: "Oops! Error 404: Page Not Found !",
    }),
  Cm = () =>
    y(Uh, {
      children: M(Bt, {
        path: "/",
        element: y(bh, {}),
        children: [
          y(Bt, { path: "/", element: y(em, {}) }),
          y(Bt, { path: "misdemeanours", element: y(cm, {}) }),
          y(Bt, { path: "confession", element: y(km, {}) }),
          y(Bt, { path: "*", element: y(Em, {}) }),
        ],
      }),
    });
const _m = () => y(Hh, { children: y(Cm, {}) });
wo.createRoot(document.getElementById("root")).render(
  y(Ei.StrictMode, { children: y(_m, {}) })
);
