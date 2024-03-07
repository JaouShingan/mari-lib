import { mergeModels as V, useModel as C, ref as h, computed as v, watch as M, openBlock as u, createBlock as y, unref as _, normalizeStyle as R, withCtx as m, renderSlot as F, createElementBlock as g, Fragment as x, renderList as W, mergeProps as S, resolveDynamicComponent as D, createCommentVNode as $, resolveComponent as N, createVNode as f, createElementVNode as E, normalizeClass as P, createTextVNode as b, toDisplayString as z } from "vue";
import { ElForm as A, ElFormItem as T } from "element-plus";
const U = {
  key: 0,
  style: { width: "100%" }
}, B = {
  __name: "index",
  props: /* @__PURE__ */ V({
    columns: {
      type: Array,
      default: () => []
    },
    spans: { type: Number, default: 4 },
    span: { type: Number, default: 1 },
    colgap: { type: Number, default: 0 },
    rowgap: { type: Number, default: 20 },
    labelWidth: { type: String, default: "80px" },
    lastDiv: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t, { expose: i }) {
    const l = t;
    i({
      validate() {
        return s.value.validate(...arguments);
      },
      validateField() {
        return s.value.validateField(...arguments);
      },
      resetFields() {
        return s.value.resetFields(...arguments);
      },
      scrollToField() {
        return s.value.scrollToField(...arguments);
      },
      clearValidate() {
        return s.value.clearValidate(...arguments);
      }
    });
    const a = C(t, "modelValue"), s = h(), p = v(() => ({
      "column-gap": `${l.colgap}px`,
      "row-gap": `${l.rowgap}px`
    })), c = v(() => `calc((100% - ${(l.spans - 1) * l.colgap}px) / ${l.spans})`), d = h({});
    M(
      a,
      () => {
        d.value = l.columns.reduce((r, { key: o, hide: e }) => (e instanceof Function ? r[o] = e(a) : e instanceof Boolean ? r[o] = e : r[o] = !0, r), {});
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const w = v(() => l.columns.map(({ span: r, ...o }) => {
      const e = {
        width: `calc(${c.value} * ${r || l.span || 1})`
      };
      return { ...o, itemStyle: e };
    }));
    return (r, o) => (u(), y(_(A), {
      class: "mari-form",
      ref_key: "formRef",
      ref: s,
      model: a.value,
      inline: "",
      "label-width": t.labelWidth,
      style: R(p.value)
    }, {
      default: m(() => [
        F(r.$slots, "prepend"),
        (u(!0), g(x, null, W(w.value, (e) => (u(), g(x, {
          key: e.key
        }, [
          d.value[e.key] ? (u(), y(_(T), S({
            key: e.key,
            label: e.name,
            prop: e.key,
            style: e.itemStyle
          }, e.itemAttrs), {
            default: m(() => [
              (u(), y(D(e.component), S({
                modelValue: a.value[e.key],
                "onUpdate:modelValue": (n) => a.value[e.key] = n
              }, e.attrs), null, 16, ["modelValue", "onUpdate:modelValue"]))
            ]),
            _: 2
          }, 1040, ["label", "prop", "style"])) : $("", !0)
        ], 64))), 128)),
        F(r.$slots, "append"),
        t.lastDiv ? (u(), g("div", U)) : $("", !0)
      ]),
      _: 3
    }, 8, ["model", "label-width", "style"]));
  }
}, O = { class: "mari-search" }, j = {
  __name: "index",
  props: /* @__PURE__ */ V({
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    spans: { type: Number, default: 4 },
    colgap: { type: Number, default: 20 },
    rowgap: { type: Number, default: 10 },
    searchBtnPosition: {
      type: String,
      default: "row",
      validator(t) {
        return ["follow", "follow-right", "row"].includes(t);
      }
    },
    // 默认折叠状态
    defaultFold: Boolean
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["search", "reset"], ["update:modelValue"]),
  setup(t, { emit: i }) {
    const l = Object.freeze({
      follow: "follow",
      followRight: "follow-right",
      row: "row"
    }), a = t, s = i, p = h(), c = C(t, "modelValue"), d = h(a.defaultFold || !1), w = v(() => {
      let o = 0;
      const e = [];
      if (a.searchBtnPosition === l.row ? o = a.spans : o = a.spans - 1, d.value)
        for (const n of a.columns) {
          if (o === 0)
            break;
          if (!n.span)
            o-- >= 0 && e.push(n);
          else if ((o -= n.span) >= 0)
            e.push(n);
          else
            break;
        }
      else
        e.push(...a.columns);
      return e;
    }), r = function() {
      p.value.resetFields(), c.value = {}, s("reset", c.value);
    };
    return (o, e) => {
      const n = N("el-button");
      return u(), g("div", O, [
        f(_(B), {
          ref_key: "formRef",
          ref: p,
          modelValue: c.value,
          "onUpdate:modelValue": e[2] || (e[2] = (k) => c.value = k),
          columns: w.value,
          rowgap: t.rowgap,
          colgap: t.colgap,
          "last-div": !1
        }, {
          append: m(() => [
            E("div", {
              class: P(["mari-search-btns", `mari-search-btns__${t.searchBtnPosition}`])
            }, [
              f(n, {
                type: "primary",
                onClick: e[0] || (e[0] = (k) => s("search", c.value))
              }, {
                default: m(() => [
                  b("搜索")
                ]),
                _: 1
              }),
              f(n, { onClick: r }, {
                default: m(() => [
                  b("重置")
                ]),
                _: 1
              }),
              f(n, {
                onClick: e[1] || (e[1] = () => d.value = !d.value)
              }, {
                default: m(() => [
                  b(z(d.value ? "展开" : "收起"), 1)
                ]),
                _: 1
              })
            ], 2)
          ]),
          _: 1
        }, 8, ["modelValue", "columns", "rowgap", "colgap"])
      ]);
    };
  }
}, q = (t, i) => {
  const l = t.__vccOpts || t;
  for (const [a, s] of i)
    l[a] = s;
  return l;
}, I = {};
function L(t, i) {
  const l = N("el-select");
  return u(), y(l, { class: "mari-select" });
}
const G = /* @__PURE__ */ q(I, [["render", L]]), K = {
  install(t, i) {
    t.component("MForm", B), t.component("MSearch", j), t.component("MSelect", G);
  }
};
export {
  B as Form,
  j as Search,
  G as Select,
  K as default
};
