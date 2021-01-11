(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    NFAr: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'MoviesFeatureDashboardModule', function () {
          return tn;
        });
      var i = n('ofXK'),
        r = n('fXoL'),
        a = n('cp0P'),
        o = n('Cfvw'),
        s = n('lJxs');
      const l = new r.q('NgValueAccessor'),
        c = { provide: l, useExisting: Object(r.U)(() => d), multi: !0 };
      let d = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'checked',
              t
            );
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('change', function (t) {
                  return e.onChange(t.target.checked);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [r.zb([c])],
          })),
          t
        );
      })();
      const h = { provide: l, useExisting: Object(r.U)(() => m), multi: !0 },
        u = new r.q('CompositionEventMode');
      let m = (() => {
        class t {
          constructor(t, e, n) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._compositionMode = n),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function () {
                  const t = Object(i.q)() ? Object(i.q)().getUserAgent() : '';
                  return /android (\d+)/.test(t.toLowerCase());
                })());
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              null == t ? '' : t
            );
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
          _handleInput(t) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l), r.Kb(u, 8));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('input', function (t) {
                  return e._handleInput(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                })('compositionstart', function () {
                  return e._compositionStart();
                })('compositionend', function (t) {
                  return e._compositionEnd(t.target.value);
                });
            },
            features: [r.zb([h])],
          })),
          t
        );
      })();
      function f(t) {
        return null == t || 0 === t.length;
      }
      function p(t) {
        return null != t && 'number' == typeof t.length;
      }
      const b = new r.q('NgValidators'),
        g = new r.q('NgAsyncValidators'),
        _ = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class y {
        static min(t) {
          return (e) => {
            if (f(e.value) || f(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t
              ? { min: { min: t, actual: e.value } }
              : null;
          };
        }
        static max(t) {
          return (e) => {
            if (f(e.value) || f(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t
              ? { max: { max: t, actual: e.value } }
              : null;
          };
        }
        static required(t) {
          return f(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return f(t.value) || _.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return (e) =>
            f(e.value) || !p(e.value)
              ? null
              : e.value.length < t
              ? {
                  minlength: {
                    requiredLength: t,
                    actualLength: e.value.length,
                  },
                }
              : null;
        }
        static maxLength(t) {
          return (e) =>
            p(e.value) && e.value.length > t
              ? {
                  maxlength: {
                    requiredLength: t,
                    actualLength: e.value.length,
                  },
                }
              : null;
        }
        static pattern(t) {
          if (!t) return y.nullValidator;
          let e, n;
          return (
            'string' == typeof t
              ? ((n = ''),
                '^' !== t.charAt(0) && (n += '^'),
                (n += t),
                '$' !== t.charAt(t.length - 1) && (n += '$'),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            (t) => {
              if (f(t.value)) return null;
              const i = t.value;
              return e.test(i)
                ? null
                : { pattern: { requiredPattern: n, actualValue: i } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(v);
          return 0 == e.length
            ? null
            : function (t) {
                return w(O(t, e));
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(v);
          return 0 == e.length
            ? null
            : function (t) {
                const n = O(t, e).map(C);
                return Object(a.a)(n).pipe(Object(s.a)(w));
              };
        }
      }
      function v(t) {
        return null != t;
      }
      function C(t) {
        const e = Object(r.sb)(t) ? Object(o.a)(t) : t;
        return Object(r.rb)(e), e;
      }
      function w(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function O(t, e) {
        return e.map((e) => e(t));
      }
      function V(t) {
        return t.map((t) =>
          (function (t) {
            return !t.validate;
          })(t)
            ? t
            : (e) => t.validate(e)
        );
      }
      function x(t) {
        return null != t ? y.compose(V(t)) : null;
      }
      function A(t) {
        return null != t ? y.composeAsync(V(t)) : null;
      }
      function k(t, e) {
        return null === t ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
      }
      function E(t) {
        return t._rawValidators;
      }
      function S(t) {
        return t._rawAsyncValidators;
      }
      let F = (() => {
          class t {
            constructor() {
              (this._rawValidators = []),
                (this._rawAsyncValidators = []),
                (this._onDestroyCallbacks = []);
            }
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            _setValidators(t) {
              (this._rawValidators = t || []),
                (this._composedValidatorFn = x(this._rawValidators));
            }
            _setAsyncValidators(t) {
              (this._rawAsyncValidators = t || []),
                (this._composedAsyncValidatorFn = A(this._rawAsyncValidators));
            }
            get validator() {
              return this._composedValidatorFn || null;
            }
            get asyncValidator() {
              return this._composedAsyncValidatorFn || null;
            }
            _registerOnDestroy(t) {
              this._onDestroyCallbacks.push(t);
            }
            _invokeOnDestroyCallbacks() {
              this._onDestroyCallbacks.forEach((t) => t()),
                (this._onDestroyCallbacks = []);
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({ type: t })),
            t
          );
        })(),
        P = (() => {
          class t extends F {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return D(e || t);
            }),
            (t.ɵdir = r.Fb({ type: t, features: [r.xb] })),
            t
          );
        })();
      const D = r.Rb(P);
      class M extends F {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class j {
        constructor(t) {
          this._cd = t;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      let L = (() => {
          class t extends j {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(M, 2));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb('ng-untouched', e.ngClassUntouched)(
                    'ng-touched',
                    e.ngClassTouched
                  )('ng-pristine', e.ngClassPristine)(
                    'ng-dirty',
                    e.ngClassDirty
                  )('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [r.xb],
            })),
            t
          );
        })(),
        I = (() => {
          class t extends j {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(P, 2));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb('ng-untouched', e.ngClassUntouched)(
                    'ng-touched',
                    e.ngClassTouched
                  )('ng-pristine', e.ngClassPristine)(
                    'ng-dirty',
                    e.ngClassDirty
                  )('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [r.xb],
            })),
            t
          );
        })();
      const R = { provide: l, useExisting: Object(r.U)(() => T), multi: !0 };
      let T = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              null == t ? '' : t
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'type', 'number', 'formControlName', ''],
              ['input', 'type', 'number', 'formControl', ''],
              ['input', 'type', 'number', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('input', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [r.zb([R])],
          })),
          t
        );
      })();
      const N = { provide: l, useExisting: Object(r.U)(() => q), multi: !0 };
      let z = (() => {
          class t {
            constructor() {
              this._accessors = [];
            }
            add(t, e) {
              this._accessors.push([t, e]);
            }
            remove(t) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t)
                  return void this._accessors.splice(e, 1);
            }
            select(t) {
              this._accessors.forEach((e) => {
                this._isSameGroup(e, t) &&
                  e[1] !== t &&
                  e[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, e) {
              return (
                !!t[0].control &&
                t[0]._parent === e._control._parent &&
                t[1].name === e.name
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        q = (() => {
          class t {
            constructor(t, e, n, i) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._registry = n),
                (this._injector = i),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(M)),
                this._checkName(),
                this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(
                  this._elementRef.nativeElement,
                  'checked',
                  this._state
                );
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                t
              );
            }
            _checkName() {
              !this.name &&
                this.formControlName &&
                (this.name = this.formControlName);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(r.E), r.Kb(r.l), r.Kb(z), r.Kb(r.r));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['input', 'type', 'radio', 'formControlName', ''],
                ['input', 'type', 'radio', 'formControl', ''],
                ['input', 'type', 'radio', 'ngModel', ''],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  r.Wb('change', function () {
                    return e.onChange();
                  })('blur', function () {
                    return e.onTouched();
                  });
              },
              inputs: {
                name: 'name',
                formControlName: 'formControlName',
                value: 'value',
              },
              features: [r.zb([N])],
            })),
            t
          );
        })();
      const K = { provide: l, useExisting: Object(r.U)(() => G), multi: !0 };
      let G = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              parseFloat(t)
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['input', 'type', 'range', 'formControlName', ''],
              ['input', 'type', 'range', 'formControl', ''],
              ['input', 'type', 'range', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('change', function (t) {
                  return e.onChange(t.target.value);
                })('input', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            features: [r.zb([K])],
          })),
          t
        );
      })();
      const U = { provide: l, useExisting: Object(r.U)(() => B), multi: !0 };
      let B = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Object.is);
          }
          set compareWith(t) {
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e &&
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'selectedIndex',
                -1
              );
            const n = (function (t, e) {
              return null == t
                ? `${e}`
                : (e && 'object' == typeof e && (e = 'Object'),
                  `${t}: ${e}`.slice(0, 50));
            })(e, t);
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              n
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['select', 'formControlName', '', 3, 'multiple', ''],
              ['select', 'formControl', '', 3, 'multiple', ''],
              ['select', 'ngModel', '', 3, 'multiple', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('change', function (t) {
                  return e.onChange(t.target.value);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [r.zb([U])],
          })),
          t
        );
      })();
      const W = { provide: l, useExisting: Object(r.U)(() => H), multi: !0 };
      let H = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Object.is);
          }
          set compareWith(t) {
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map((t) => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              const n = [];
              if (void 0 !== e.selectedOptions) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const i = t.item(e),
                    r = this._getOptionValue(i.value);
                  n.push(r);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const i = t.item(e);
                  if (i.selected) {
                    const t = this._getOptionValue(i.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              t
            );
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(r.E), r.Kb(r.l));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [
              ['select', 'multiple', '', 'formControlName', ''],
              ['select', 'multiple', '', 'formControl', ''],
              ['select', 'multiple', '', 'ngModel', ''],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('change', function (t) {
                  return e.onChange(t.target);
                })('blur', function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [r.zb([W])],
          })),
          t
        );
      })();
      function Z(t, e) {
        X(t, e, !0),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange((n) => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && J(t, e);
            });
          })(t, e),
          (function (t, e) {
            const n = (t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            };
            t.registerOnChange(n),
              e._registerOnDestroy(() => {
                t._unregisterOnChange(n);
              });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && J(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          (function (t, e) {
            if (e.valueAccessor.setDisabledState) {
              const n = (t) => {
                e.valueAccessor.setDisabledState(t);
              };
              t.registerOnDisabledChange(n),
                e._registerOnDestroy(() => {
                  t._unregisterOnDisabledChange(n);
                });
            }
          })(t, e);
      }
      function $(t, e) {
        t.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(e);
        });
      }
      function X(t, e, n) {
        const i = E(t);
        null !== e.validator
          ? t.setValidators(k(i, e.validator))
          : 'function' == typeof i && t.setValidators([i]);
        const r = S(t);
        if (
          (null !== e.asyncValidator
            ? t.setAsyncValidators(k(r, e.asyncValidator))
            : 'function' == typeof r && t.setAsyncValidators([r]),
          n)
        ) {
          const n = () => t.updateValueAndValidity();
          $(e._rawValidators, n), $(e._rawAsyncValidators, n);
        }
      }
      function Y(t, e, n) {
        if (null !== t) {
          if (null !== e.validator) {
            const n = E(t);
            Array.isArray(n) &&
              n.length > 0 &&
              t.setValidators(n.filter((t) => t !== e.validator));
          }
          if (null !== e.asyncValidator) {
            const n = S(t);
            Array.isArray(n) &&
              n.length > 0 &&
              t.setAsyncValidators(n.filter((t) => t !== e.asyncValidator));
          }
        }
        if (n) {
          const t = () => {};
          $(e._rawValidators, t), $(e._rawAsyncValidators, t);
        }
      }
      function J(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function Q(t, e) {
        X(t, e, !1);
      }
      const tt = [d, G, T, B, H, q];
      function et(t, e) {
        t._syncPendingControls(),
          e.forEach((t) => {
            const e = t.control;
            'submit' === e.updateOn &&
              e._pendingChange &&
              (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
          });
      }
      function nt(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      const it = 'VALID',
        rt = 'INVALID',
        at = 'PENDING',
        ot = 'DISABLED';
      function st(t) {
        return (ht(t) ? t.validators : t) || null;
      }
      function lt(t) {
        return Array.isArray(t) ? x(t) : t || null;
      }
      function ct(t, e) {
        return (ht(e) ? e.asyncValidators : t) || null;
      }
      function dt(t) {
        return Array.isArray(t) ? A(t) : t || null;
      }
      function ht(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class ut {
        constructor(t, e) {
          (this._hasOwnPendingAsyncValidator = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = lt(this._rawValidators)),
            (this._composedAsyncValidatorFn = dt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === it;
        }
        get invalid() {
          return this.status === rt;
        }
        get pending() {
          return this.status == at;
        }
        get disabled() {
          return this.status === ot;
        }
        get enabled() {
          return this.status !== ot;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = lt(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = dt(t));
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = at),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = ot),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = it),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status !== it && this.status !== at) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? ot : it;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = at), (this._hasOwnPendingAsyncValidator = !0);
            const e = C(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(e, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if (
              (Array.isArray(e) || (e = e.split('.')),
              Array.isArray(e) && 0 === e.length)
            )
              return null;
            let i = t;
            return (
              e.forEach((t) => {
                i =
                  i instanceof ft
                    ? i.controls.hasOwnProperty(t)
                      ? i.controls[t]
                      : null
                    : (i instanceof pt && i.at(t)) || null;
              }),
              i
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new r.n()), (this.statusChanges = new r.n());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? ot
            : this.errors
            ? rt
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(at)
            ? at
            : this._anyControlsHaveStatus(rt)
            ? rt
            : it;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            'object' == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            'value' in t &&
            'disabled' in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          ht(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class mt extends ut {
        constructor(t = null, e, n) {
          super(st(e), ct(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) =>
                t(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          nt(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          nt(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class ft extends ut {
        constructor(t, e, n) {
          super(st(e), ct(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e) {
          this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach((n) => {
            this.controls[n] &&
              this.controls[n].patchValue(t[n], {
                onlySelf: !0,
                emitEvent: e.emitEvent,
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, i) => {
            n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => (
              (t[n] = e instanceof mt ? e.value : e.getRawValue()), t
            )
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (t, e) => !!e._syncPendingControls() || t
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t])
            throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const n = this.controls[e];
            if (this.contains(e) && t(n)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, i) => {
              n = e(n, t, i);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class pt extends ut {
        constructor(t, e, n) {
          super(st(e), ct(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) &&
              this.at(n).patchValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent,
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, i) => {
            n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) =>
            t instanceof mt ? t.value : t.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (t, e) => !!e._syncPendingControls() || t,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t))
            throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const bt = { provide: P, useExisting: Object(r.U)(() => _t) },
        gt = (() => Promise.resolve(null))();
      let _t = (() => {
          class t extends P {
            constructor(t, e) {
              super(),
                (this.submitted = !1),
                (this._directives = []),
                (this.ngSubmit = new r.n()),
                (this.form = new ft({}, x(t), A(e)));
            }
            ngAfterViewInit() {
              this._setUpdateStrategy();
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            get controls() {
              return this.form.controls;
            }
            addControl(t) {
              gt.then(() => {
                const e = this._findContainer(t.path);
                (t.control = e.registerControl(t.name, t.control)),
                  Z(t.control, t),
                  t.control.updateValueAndValidity({ emitEvent: !1 }),
                  this._directives.push(t);
              });
            }
            getControl(t) {
              return this.form.get(t.path);
            }
            removeControl(t) {
              gt.then(() => {
                const e = this._findContainer(t.path);
                e && e.removeControl(t.name), nt(this._directives, t);
              });
            }
            addFormGroup(t) {
              gt.then(() => {
                const e = this._findContainer(t.path),
                  n = new ft({});
                Q(n, t),
                  e.registerControl(t.name, n),
                  n.updateValueAndValidity({ emitEvent: !1 });
              });
            }
            removeFormGroup(t) {
              gt.then(() => {
                const e = this._findContainer(t.path);
                e && e.removeControl(t.name);
              });
            }
            getFormGroup(t) {
              return this.form.get(t.path);
            }
            updateModel(t, e) {
              gt.then(() => {
                this.form.get(t.path).setValue(e);
              });
            }
            setValue(t) {
              this.control.setValue(t);
            }
            onSubmit(t) {
              return (
                (this.submitted = !0),
                et(this.form, this._directives),
                this.ngSubmit.emit(t),
                !1
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(t) {
              this.form.reset(t), (this.submitted = !1);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.form._updateOn = this.options.updateOn);
            }
            _findContainer(t) {
              return t.pop(), t.length ? this.form.get(t) : this.form;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(b, 10), r.Kb(g, 10));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'formGroup', ''],
                ['ng-form'],
                ['', 'ngForm', ''],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  r.Wb('submit', function (t) {
                    return e.onSubmit(t);
                  })('reset', function () {
                    return e.onReset();
                  });
              },
              inputs: { options: ['ngFormOptions', 'options'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [r.zb([bt]), r.xb],
            })),
            t
          );
        })(),
        yt = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
              ],
              hostAttrs: ['novalidate', ''],
            })),
            t
          );
        })();
      const vt = new r.q('NgModelWithFormControlWarning'),
        Ct = { provide: P, useExisting: Object(r.U)(() => wt) };
      let wt = (() => {
        class t extends P {
          constructor(t, e) {
            super(),
              (this.validators = t),
              (this.asyncValidators = e),
              (this.submitted = !1),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new r.n()),
              this._setValidators(t),
              this._setAsyncValidators(e);
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const e = this.form.get(t.path);
            return (
              Z(e, t),
              e.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(t),
              e
            );
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            nt(this.directives, t);
          }
          addFormGroup(t) {
            const e = this.form.get(t.path);
            Q(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormGroup(t) {}
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            const e = this.form.get(t.path);
            Q(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormArray(t) {}
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            this.form.get(t.path).setValue(e);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              et(this.form, this.directives),
              this.ngSubmit.emit(t),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const e = this.form.get(t.path);
              t.control !== e &&
                ((function (t, e) {
                  const n = () => {};
                  e.valueAccessor.registerOnChange(n),
                    e.valueAccessor.registerOnTouched(n),
                    Y(t, e, !0),
                    t &&
                      (e._invokeOnDestroyCallbacks(),
                      t._registerOnCollectionChange(() => {}));
                })(t.control || null, t),
                e && Z(e, t),
                (t.control = e));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(() => this._updateDomValue()),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            X(this.form, this, !1), this._oldForm && Y(this._oldForm, this, !1);
          }
          _checkFormPresent() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(b, 10), r.Kb(g, 10));
          }),
          (t.ɵdir = r.Fb({
            type: t,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (t, e) {
              1 & t &&
                r.Wb('submit', function (t) {
                  return e.onSubmit(t);
                })('reset', function () {
                  return e.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [r.zb([Ct]), r.xb, r.yb],
          })),
          t
        );
      })();
      const Ot = { provide: M, useExisting: Object(r.U)(() => Vt) };
      let Vt = (() => {
          class t extends M {
            constructor(t, e, n, i, a) {
              super(),
                (this._ngModelWarningConfig = a),
                (this._added = !1),
                (this.update = new r.n()),
                (this._ngModelWarningSent = !1),
                (this._parent = t),
                this._setValidators(e),
                this._setAsyncValidators(n),
                (this.valueAccessor = (function (t, e) {
                  if (!e) return null;
                  let n, i, r;
                  return (
                    Array.isArray(e),
                    e.forEach((t) => {
                      var e;
                      t.constructor === m
                        ? (n = t)
                        : ((e = t),
                          tt.some((t) => e.constructor === t)
                            ? (i = t)
                            : (r = t));
                    }),
                    r || i || n || null
                  );
                })(0, i));
            }
            set isDisabled(t) {}
            ngOnChanges(t) {
              this._added || this._setUpControl(),
                (function (t, e) {
                  if (!t.hasOwnProperty('model')) return !1;
                  const n = t.model;
                  return !!n.isFirstChange() || !Object.is(e, n.currentValue);
                })(t, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            get path() {
              return (
                (t = null == this.name ? this.name : this.name.toString()),
                [...this._parent.path, t]
              );
              var t;
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                this.control.disabled &&
                  this.valueAccessor.setDisabledState &&
                  this.valueAccessor.setDisabledState(!0),
                (this._added = !0);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(P, 13),
                r.Kb(b, 10),
                r.Kb(g, 10),
                r.Kb(l, 10),
                r.Kb(vt, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [['', 'formControlName', '']],
              inputs: {
                isDisabled: ['disabled', 'isDisabled'],
                name: ['formControlName', 'name'],
                model: ['ngModel', 'model'],
              },
              outputs: { update: 'ngModelChange' },
              features: [r.zb([Ot]), r.xb, r.yb],
            })),
            (t._ngModelWarningSentOnce = !1),
            t
          );
        })(),
        xt = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        At = (() => {
          class t {
            group(t, e = null) {
              const n = this._reduceControls(t);
              let i,
                r = null,
                a = null;
              return (
                null != e &&
                  ((function (t) {
                    return (
                      void 0 !== t.asyncValidators ||
                      void 0 !== t.validators ||
                      void 0 !== t.updateOn
                    );
                  })(e)
                    ? ((r = null != e.validators ? e.validators : null),
                      (a =
                        null != e.asyncValidators ? e.asyncValidators : null),
                      (i = null != e.updateOn ? e.updateOn : void 0))
                    : ((r = null != e.validator ? e.validator : null),
                      (a =
                        null != e.asyncValidator ? e.asyncValidator : null))),
                new ft(n, { asyncValidators: a, updateOn: i, validators: r })
              );
            }
            control(t, e, n) {
              return new mt(t, e, n);
            }
            array(t, e, n) {
              const i = t.map((t) => this._createControl(t));
              return new pt(i, e, n);
            }
            _reduceControls(t) {
              const e = {};
              return (
                Object.keys(t).forEach((n) => {
                  e[n] = this._createControl(t[n]);
                }),
                e
              );
            }
            _createControl(t) {
              return t instanceof mt || t instanceof ft || t instanceof pt
                ? t
                : Array.isArray(t)
                ? this.control(
                    t[0],
                    t.length > 1 ? t[1] : null,
                    t.length > 2 ? t[2] : null
                  )
                : this.control(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        kt = (() => {
          class t {
            static withConfig(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: vt, useValue: e.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [At, z],
              imports: [xt],
            })),
            t
          );
        })();
      var Et = n('GU7r'),
        St = n('FKr1'),
        Ft = n('8LU1'),
        Pt = n('XNiG'),
        Dt = n('VRyK'),
        Mt = n('HDdC'),
        jt = n('DH7j'),
        Lt = n('n6bG');
      function It(t, e, n, i) {
        return (
          Object(Lt.a)(n) && ((i = n), (n = void 0)),
          i
            ? It(t, e, n).pipe(
                Object(s.a)((t) => (Object(jt.a)(t) ? i(...t) : i(t)))
              )
            : new Mt.a((i) => {
                Rt(
                  t,
                  e,
                  function (t) {
                    i.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  i,
                  n
                );
              })
        );
      }
      function Rt(t, e, n, i, r) {
        let a;
        if (
          (function (t) {
            return (
              t &&
              'function' == typeof t.addEventListener &&
              'function' == typeof t.removeEventListener
            );
          })(t)
        ) {
          const i = t;
          t.addEventListener(e, n, r),
            (a = () => i.removeEventListener(e, n, r));
        } else if (
          (function (t) {
            return t && 'function' == typeof t.on && 'function' == typeof t.off;
          })(t)
        ) {
          const i = t;
          t.on(e, n), (a = () => i.off(e, n));
        } else if (
          (function (t) {
            return (
              t &&
              'function' == typeof t.addListener &&
              'function' == typeof t.removeListener
            );
          })(t)
        ) {
          const i = t;
          t.addListener(e, n), (a = () => i.removeListener(e, n));
        } else {
          if (!t || !t.length) throw new TypeError('Invalid event target');
          for (let a = 0, o = t.length; a < o; a++) Rt(t[a], e, n, i, r);
        }
        i.add(a);
      }
      var Tt = n('JX91'),
        Nt = n('1G5W'),
        zt = n('IzEk'),
        qt = n('R0Ic'),
        Kt = n('R1ws'),
        Gt = n('cH1L'),
        Ut = n('nLfN');
      const Bt = ['underline'],
        Wt = ['connectionContainer'],
        Ht = ['inputContainer'],
        Zt = ['label'];
      function $t(t, e) {
        1 & t &&
          (r.Nb(0),
          r.Pb(1, 'div', 14),
          r.Lb(2, 'div', 15),
          r.Lb(3, 'div', 16),
          r.Lb(4, 'div', 17),
          r.Ob(),
          r.Pb(5, 'div', 18),
          r.Lb(6, 'div', 15),
          r.Lb(7, 'div', 16),
          r.Lb(8, 'div', 17),
          r.Ob(),
          r.Mb());
      }
      function Xt(t, e) {
        1 & t && (r.Pb(0, 'div', 19), r.bc(1, 1), r.Ob());
      }
      function Yt(t, e) {
        if (
          (1 & t &&
            (r.Nb(0), r.bc(1, 2), r.Pb(2, 'span'), r.lc(3), r.Ob(), r.Mb()),
          2 & t)
        ) {
          const t = r.Yb(2);
          r.Ab(3), r.mc(t._control.placeholder);
        }
      }
      function Jt(t, e) {
        1 & t && r.bc(0, 3, ['*ngSwitchCase', 'true']);
      }
      function Qt(t, e) {
        1 & t && (r.Pb(0, 'span', 23), r.lc(1, ' *'), r.Ob());
      }
      function te(t, e) {
        if (1 & t) {
          const t = r.Qb();
          r.Pb(0, 'label', 20, 21),
            r.Wb('cdkObserveContent', function () {
              return r.fc(t), r.Yb().updateOutlineGap();
            }),
            r.kc(2, Yt, 4, 1, 'ng-container', 12),
            r.kc(3, Jt, 1, 0, 'ng-content', 12),
            r.kc(4, Qt, 2, 0, 'span', 22),
            r.Ob();
        }
        if (2 & t) {
          const t = r.Yb();
          r.Cb('mat-empty', t._control.empty && !t._shouldAlwaysFloat())(
            'mat-form-field-empty',
            t._control.empty && !t._shouldAlwaysFloat()
          )('mat-accent', 'accent' == t.color)('mat-warn', 'warn' == t.color),
            r.dc('cdkObserveContentDisabled', 'outline' != t.appearance)(
              'id',
              t._labelId
            )('ngSwitch', t._hasLabel()),
            r.Bb('for', t._control.id)('aria-owns', t._control.id),
            r.Ab(2),
            r.dc('ngSwitchCase', !1),
            r.Ab(1),
            r.dc('ngSwitchCase', !0),
            r.Ab(1),
            r.dc(
              'ngIf',
              !t.hideRequiredMarker &&
                t._control.required &&
                !t._control.disabled
            );
        }
      }
      function ee(t, e) {
        1 & t && (r.Pb(0, 'div', 24), r.bc(1, 4), r.Ob());
      }
      function ne(t, e) {
        if (
          (1 & t && (r.Pb(0, 'div', 25, 26), r.Lb(2, 'span', 27), r.Ob()),
          2 & t)
        ) {
          const t = r.Yb();
          r.Ab(2),
            r.Cb('mat-accent', 'accent' == t.color)(
              'mat-warn',
              'warn' == t.color
            );
        }
      }
      function ie(t, e) {
        if ((1 & t && (r.Pb(0, 'div'), r.bc(1, 5), r.Ob()), 2 & t)) {
          const t = r.Yb();
          r.dc('@transitionMessages', t._subscriptAnimationState);
        }
      }
      function re(t, e) {
        if ((1 & t && (r.Pb(0, 'div', 31), r.lc(1), r.Ob()), 2 & t)) {
          const t = r.Yb(2);
          r.dc('id', t._hintLabelId), r.Ab(1), r.mc(t.hintLabel);
        }
      }
      function ae(t, e) {
        if (
          (1 & t &&
            (r.Pb(0, 'div', 28),
            r.kc(1, re, 2, 2, 'div', 29),
            r.bc(2, 6),
            r.Lb(3, 'div', 30),
            r.bc(4, 7),
            r.Ob()),
          2 & t)
        ) {
          const t = r.Yb();
          r.dc('@transitionMessages', t._subscriptAnimationState),
            r.Ab(1),
            r.dc('ngIf', t.hintLabel);
        }
      }
      const oe = [
          '*',
          [['', 'matPrefix', '']],
          [['mat-placeholder']],
          [['mat-label']],
          [['', 'matSuffix', '']],
          [['mat-error']],
          [['mat-hint', 3, 'align', 'end']],
          [['mat-hint', 'align', 'end']],
        ],
        se = [
          '*',
          '[matPrefix]',
          'mat-placeholder',
          'mat-label',
          '[matSuffix]',
          'mat-error',
          "mat-hint:not([align='end'])",
          "mat-hint[align='end']",
        ],
        le = new r.q('MatError'),
        ce = {
          transitionMessages: Object(qt.j)('transitionMessages', [
            Object(qt.g)(
              'enter',
              Object(qt.h)({ opacity: 1, transform: 'translateY(0%)' })
            ),
            Object(qt.i)('void => enter', [
              Object(qt.h)({ opacity: 0, transform: 'translateY(-100%)' }),
              Object(qt.e)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
            ]),
          ]),
        };
      let de = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵdir = r.Fb({ type: t })),
          t
        );
      })();
      const he = new r.q('MatHint');
      let ue = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({ type: t, selectors: [['mat-label']] })),
            t
          );
        })(),
        me = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Fb({ type: t, selectors: [['mat-placeholder']] })),
            t
          );
        })();
      const fe = new r.q('MatPrefix'),
        pe = new r.q('MatSuffix');
      let be = 0;
      class ge {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const _e = Object(St.e)(ge, 'primary'),
        ye = new r.q('MAT_FORM_FIELD_DEFAULT_OPTIONS'),
        ve = new r.q('MatFormField');
      let Ce = (() => {
          class t extends _e {
            constructor(t, e, n, i, r, a, o, s) {
              super(t),
                (this._elementRef = t),
                (this._changeDetectorRef = e),
                (this._dir = i),
                (this._defaults = r),
                (this._platform = a),
                (this._ngZone = o),
                (this._outlineGapCalculationNeededImmediately = !1),
                (this._outlineGapCalculationNeededOnStable = !1),
                (this._destroyed = new Pt.a()),
                (this._showAlwaysAnimate = !1),
                (this._subscriptAnimationState = ''),
                (this._hintLabel = ''),
                (this._hintLabelId = 'mat-hint-' + be++),
                (this._labelId = 'mat-form-field-label-' + be++),
                (this.floatLabel = this._getDefaultFloatLabelState()),
                (this._animationsEnabled = 'NoopAnimations' !== s),
                (this.appearance = r && r.appearance ? r.appearance : 'legacy'),
                (this._hideRequiredMarker =
                  !(!r || null == r.hideRequiredMarker) &&
                  r.hideRequiredMarker);
            }
            get appearance() {
              return this._appearance;
            }
            set appearance(t) {
              const e = this._appearance;
              (this._appearance =
                t || (this._defaults && this._defaults.appearance) || 'legacy'),
                'outline' === this._appearance &&
                  e !== t &&
                  (this._outlineGapCalculationNeededOnStable = !0);
            }
            get hideRequiredMarker() {
              return this._hideRequiredMarker;
            }
            set hideRequiredMarker(t) {
              this._hideRequiredMarker = Object(Ft.a)(t);
            }
            _shouldAlwaysFloat() {
              return 'always' === this.floatLabel && !this._showAlwaysAnimate;
            }
            _canLabelFloat() {
              return 'never' !== this.floatLabel;
            }
            get hintLabel() {
              return this._hintLabel;
            }
            set hintLabel(t) {
              (this._hintLabel = t), this._processHints();
            }
            get floatLabel() {
              return 'legacy' !== this.appearance &&
                'never' === this._floatLabel
                ? 'auto'
                : this._floatLabel;
            }
            set floatLabel(t) {
              t !== this._floatLabel &&
                ((this._floatLabel = t || this._getDefaultFloatLabelState()),
                this._changeDetectorRef.markForCheck());
            }
            get _control() {
              return (
                this._explicitFormFieldControl ||
                this._controlNonStatic ||
                this._controlStatic
              );
            }
            set _control(t) {
              this._explicitFormFieldControl = t;
            }
            getLabelId() {
              return this._hasFloatingLabel() ? this._labelId : null;
            }
            getConnectedOverlayOrigin() {
              return this._connectionContainerRef || this._elementRef;
            }
            ngAfterContentInit() {
              this._validateControlChild();
              const t = this._control;
              t.controlType &&
                this._elementRef.nativeElement.classList.add(
                  `mat-form-field-type-${t.controlType}`
                ),
                t.stateChanges.pipe(Object(Tt.a)(null)).subscribe(() => {
                  this._validatePlaceholders(),
                    this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                t.ngControl &&
                  t.ngControl.valueChanges &&
                  t.ngControl.valueChanges
                    .pipe(Object(Nt.a)(this._destroyed))
                    .subscribe(() => this._changeDetectorRef.markForCheck()),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable
                    .pipe(Object(Nt.a)(this._destroyed))
                    .subscribe(() => {
                      this._outlineGapCalculationNeededOnStable &&
                        this.updateOutlineGap();
                    });
                }),
                Object(Dt.a)(
                  this._prefixChildren.changes,
                  this._suffixChildren.changes
                ).subscribe(() => {
                  (this._outlineGapCalculationNeededOnStable = !0),
                    this._changeDetectorRef.markForCheck();
                }),
                this._hintChildren.changes
                  .pipe(Object(Tt.a)(null))
                  .subscribe(() => {
                    this._processHints(),
                      this._changeDetectorRef.markForCheck();
                  }),
                this._errorChildren.changes
                  .pipe(Object(Tt.a)(null))
                  .subscribe(() => {
                    this._syncDescribedByIds(),
                      this._changeDetectorRef.markForCheck();
                  }),
                this._dir &&
                  this._dir.change
                    .pipe(Object(Nt.a)(this._destroyed))
                    .subscribe(() => {
                      'function' == typeof requestAnimationFrame
                        ? this._ngZone.runOutsideAngular(() => {
                            requestAnimationFrame(() =>
                              this.updateOutlineGap()
                            );
                          })
                        : this.updateOutlineGap();
                    });
            }
            ngAfterContentChecked() {
              this._validateControlChild(),
                this._outlineGapCalculationNeededImmediately &&
                  this.updateOutlineGap();
            }
            ngAfterViewInit() {
              (this._subscriptAnimationState = 'enter'),
                this._changeDetectorRef.detectChanges();
            }
            ngOnDestroy() {
              this._destroyed.next(), this._destroyed.complete();
            }
            _shouldForward(t) {
              const e = this._control ? this._control.ngControl : null;
              return e && e[t];
            }
            _hasPlaceholder() {
              return !!(
                (this._control && this._control.placeholder) ||
                this._placeholderChild
              );
            }
            _hasLabel() {
              return !(!this._labelChildNonStatic && !this._labelChildStatic);
            }
            _shouldLabelFloat() {
              return (
                this._canLabelFloat() &&
                ((this._control && this._control.shouldLabelFloat) ||
                  this._shouldAlwaysFloat())
              );
            }
            _hideControlPlaceholder() {
              return (
                ('legacy' === this.appearance && !this._hasLabel()) ||
                (this._hasLabel() && !this._shouldLabelFloat())
              );
            }
            _hasFloatingLabel() {
              return (
                this._hasLabel() ||
                ('legacy' === this.appearance && this._hasPlaceholder())
              );
            }
            _getDisplayedMessages() {
              return this._errorChildren &&
                this._errorChildren.length > 0 &&
                this._control.errorState
                ? 'error'
                : 'hint';
            }
            _animateAndLockLabel() {
              this._hasFloatingLabel() &&
                this._canLabelFloat() &&
                (this._animationsEnabled &&
                  this._label &&
                  ((this._showAlwaysAnimate = !0),
                  It(this._label.nativeElement, 'transitionend')
                    .pipe(Object(zt.a)(1))
                    .subscribe(() => {
                      this._showAlwaysAnimate = !1;
                    })),
                (this.floatLabel = 'always'),
                this._changeDetectorRef.markForCheck());
            }
            _validatePlaceholders() {}
            _processHints() {
              this._validateHints(), this._syncDescribedByIds();
            }
            _validateHints() {}
            _getDefaultFloatLabelState() {
              return (this._defaults && this._defaults.floatLabel) || 'auto';
            }
            _syncDescribedByIds() {
              if (this._control) {
                let t = [];
                if (
                  (this._control.userAriaDescribedBy &&
                    'string' == typeof this._control.userAriaDescribedBy &&
                    t.push(...this._control.userAriaDescribedBy.split(' ')),
                  'hint' === this._getDisplayedMessages())
                ) {
                  const e = this._hintChildren
                      ? this._hintChildren.find((t) => 'start' === t.align)
                      : null,
                    n = this._hintChildren
                      ? this._hintChildren.find((t) => 'end' === t.align)
                      : null;
                  e
                    ? t.push(e.id)
                    : this._hintLabel && t.push(this._hintLabelId),
                    n && t.push(n.id);
                } else
                  this._errorChildren &&
                    t.push(...this._errorChildren.map((t) => t.id));
                this._control.setDescribedByIds(t);
              }
            }
            _validateControlChild() {}
            updateOutlineGap() {
              const t = this._label ? this._label.nativeElement : null;
              if (
                'outline' !== this.appearance ||
                !t ||
                !t.children.length ||
                !t.textContent.trim()
              )
                return;
              if (!this._platform.isBrowser) return;
              if (!this._isAttachedToDOM())
                return void (this._outlineGapCalculationNeededImmediately = !0);
              let e = 0,
                n = 0;
              const i = this._connectionContainerRef.nativeElement,
                r = i.querySelectorAll('.mat-form-field-outline-start'),
                a = i.querySelectorAll('.mat-form-field-outline-gap');
              if (this._label && this._label.nativeElement.children.length) {
                const r = i.getBoundingClientRect();
                if (0 === r.width && 0 === r.height)
                  return (
                    (this._outlineGapCalculationNeededOnStable = !0),
                    void (this._outlineGapCalculationNeededImmediately = !1)
                  );
                const a = this._getStartEnd(r),
                  o = t.children,
                  s = this._getStartEnd(o[0].getBoundingClientRect());
                let l = 0;
                for (let t = 0; t < o.length; t++) l += o[t].offsetWidth;
                (e = Math.abs(s - a) - 5), (n = l > 0 ? 0.75 * l + 10 : 0);
              }
              for (let o = 0; o < r.length; o++) r[o].style.width = `${e}px`;
              for (let o = 0; o < a.length; o++) a[o].style.width = `${n}px`;
              this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1;
            }
            _getStartEnd(t) {
              return this._dir && 'rtl' === this._dir.value ? t.right : t.left;
            }
            _isAttachedToDOM() {
              const t = this._elementRef.nativeElement;
              if (t.getRootNode) {
                const e = t.getRootNode();
                return e && e !== t;
              }
              return document.documentElement.contains(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(r.h),
                r.Kb(r.l),
                r.Kb(Gt.b, 8),
                r.Kb(ye, 8),
                r.Kb(Ut.a),
                r.Kb(r.z),
                r.Kb(Kt.a, 8)
              );
            }),
            (t.ɵcmp = r.Eb({
              type: t,
              selectors: [['mat-form-field']],
              contentQueries: function (t, e, n) {
                if (
                  (1 & t &&
                    (r.Db(n, de, !0),
                    r.ic(n, de, !0),
                    r.Db(n, ue, !0),
                    r.ic(n, ue, !0),
                    r.Db(n, me, !0),
                    r.Db(n, le, !0),
                    r.Db(n, he, !0),
                    r.Db(n, fe, !0),
                    r.Db(n, pe, !0)),
                  2 & t)
                ) {
                  let t;
                  r.ec((t = r.Xb())) && (e._controlNonStatic = t.first),
                    r.ec((t = r.Xb())) && (e._controlStatic = t.first),
                    r.ec((t = r.Xb())) && (e._labelChildNonStatic = t.first),
                    r.ec((t = r.Xb())) && (e._labelChildStatic = t.first),
                    r.ec((t = r.Xb())) && (e._placeholderChild = t.first),
                    r.ec((t = r.Xb())) && (e._errorChildren = t),
                    r.ec((t = r.Xb())) && (e._hintChildren = t),
                    r.ec((t = r.Xb())) && (e._prefixChildren = t),
                    r.ec((t = r.Xb())) && (e._suffixChildren = t);
                }
              },
              viewQuery: function (t, e) {
                if (
                  (1 & t &&
                    (r.oc(Bt, !0), r.jc(Wt, !0), r.oc(Ht, !0), r.oc(Zt, !0)),
                  2 & t)
                ) {
                  let t;
                  r.ec((t = r.Xb())) && (e.underlineRef = t.first),
                    r.ec((t = r.Xb())) && (e._connectionContainerRef = t.first),
                    r.ec((t = r.Xb())) && (e._inputContainerRef = t.first),
                    r.ec((t = r.Xb())) && (e._label = t.first);
                }
              },
              hostAttrs: [1, 'mat-form-field'],
              hostVars: 44,
              hostBindings: function (t, e) {
                2 & t &&
                  r.Cb(
                    'mat-form-field-appearance-standard',
                    'standard' == e.appearance
                  )('mat-form-field-appearance-fill', 'fill' == e.appearance)(
                    'mat-form-field-appearance-outline',
                    'outline' == e.appearance
                  )(
                    'mat-form-field-appearance-legacy',
                    'legacy' == e.appearance
                  )('mat-form-field-invalid', e._control.errorState)(
                    'mat-form-field-can-float',
                    e._canLabelFloat()
                  )('mat-form-field-should-float', e._shouldLabelFloat())(
                    'mat-form-field-has-label',
                    e._hasFloatingLabel()
                  )(
                    'mat-form-field-hide-placeholder',
                    e._hideControlPlaceholder()
                  )('mat-form-field-disabled', e._control.disabled)(
                    'mat-form-field-autofilled',
                    e._control.autofilled
                  )('mat-focused', e._control.focused)(
                    'mat-accent',
                    'accent' == e.color
                  )('mat-warn', 'warn' == e.color)(
                    'ng-untouched',
                    e._shouldForward('untouched')
                  )('ng-touched', e._shouldForward('touched'))(
                    'ng-pristine',
                    e._shouldForward('pristine')
                  )('ng-dirty', e._shouldForward('dirty'))(
                    'ng-valid',
                    e._shouldForward('valid')
                  )('ng-invalid', e._shouldForward('invalid'))(
                    'ng-pending',
                    e._shouldForward('pending')
                  )('_mat-animation-noopable', !e._animationsEnabled);
              },
              inputs: {
                color: 'color',
                floatLabel: 'floatLabel',
                appearance: 'appearance',
                hideRequiredMarker: 'hideRequiredMarker',
                hintLabel: 'hintLabel',
              },
              exportAs: ['matFormField'],
              features: [r.zb([{ provide: ve, useExisting: t }]), r.xb],
              ngContentSelectors: se,
              decls: 15,
              vars: 8,
              consts: [
                [1, 'mat-form-field-wrapper'],
                [1, 'mat-form-field-flex', 3, 'click'],
                ['connectionContainer', ''],
                [4, 'ngIf'],
                ['class', 'mat-form-field-prefix', 4, 'ngIf'],
                [1, 'mat-form-field-infix'],
                ['inputContainer', ''],
                [1, 'mat-form-field-label-wrapper'],
                [
                  'class',
                  'mat-form-field-label',
                  3,
                  'cdkObserveContentDisabled',
                  'id',
                  'mat-empty',
                  'mat-form-field-empty',
                  'mat-accent',
                  'mat-warn',
                  'ngSwitch',
                  'cdkObserveContent',
                  4,
                  'ngIf',
                ],
                ['class', 'mat-form-field-suffix', 4, 'ngIf'],
                ['class', 'mat-form-field-underline', 4, 'ngIf'],
                [1, 'mat-form-field-subscript-wrapper', 3, 'ngSwitch'],
                [4, 'ngSwitchCase'],
                ['class', 'mat-form-field-hint-wrapper', 4, 'ngSwitchCase'],
                [1, 'mat-form-field-outline'],
                [1, 'mat-form-field-outline-start'],
                [1, 'mat-form-field-outline-gap'],
                [1, 'mat-form-field-outline-end'],
                [1, 'mat-form-field-outline', 'mat-form-field-outline-thick'],
                [1, 'mat-form-field-prefix'],
                [
                  1,
                  'mat-form-field-label',
                  3,
                  'cdkObserveContentDisabled',
                  'id',
                  'ngSwitch',
                  'cdkObserveContent',
                ],
                ['label', ''],
                [
                  'class',
                  'mat-placeholder-required mat-form-field-required-marker',
                  'aria-hidden',
                  'true',
                  4,
                  'ngIf',
                ],
                [
                  'aria-hidden',
                  'true',
                  1,
                  'mat-placeholder-required',
                  'mat-form-field-required-marker',
                ],
                [1, 'mat-form-field-suffix'],
                [1, 'mat-form-field-underline'],
                ['underline', ''],
                [1, 'mat-form-field-ripple'],
                [1, 'mat-form-field-hint-wrapper'],
                ['class', 'mat-hint', 3, 'id', 4, 'ngIf'],
                [1, 'mat-form-field-hint-spacer'],
                [1, 'mat-hint', 3, 'id'],
              ],
              template: function (t, e) {
                1 & t &&
                  (r.cc(oe),
                  r.Pb(0, 'div', 0),
                  r.Pb(1, 'div', 1, 2),
                  r.Wb('click', function (t) {
                    return (
                      e._control.onContainerClick &&
                      e._control.onContainerClick(t)
                    );
                  }),
                  r.kc(3, $t, 9, 0, 'ng-container', 3),
                  r.kc(4, Xt, 2, 0, 'div', 4),
                  r.Pb(5, 'div', 5, 6),
                  r.bc(7),
                  r.Pb(8, 'span', 7),
                  r.kc(9, te, 5, 16, 'label', 8),
                  r.Ob(),
                  r.Ob(),
                  r.kc(10, ee, 2, 0, 'div', 9),
                  r.Ob(),
                  r.kc(11, ne, 3, 4, 'div', 10),
                  r.Pb(12, 'div', 11),
                  r.kc(13, ie, 2, 1, 'div', 12),
                  r.kc(14, ae, 5, 2, 'div', 13),
                  r.Ob(),
                  r.Ob()),
                  2 & t &&
                    (r.Ab(3),
                    r.dc('ngIf', 'outline' == e.appearance),
                    r.Ab(1),
                    r.dc('ngIf', e._prefixChildren.length),
                    r.Ab(5),
                    r.dc('ngIf', e._hasFloatingLabel()),
                    r.Ab(1),
                    r.dc('ngIf', e._suffixChildren.length),
                    r.Ab(1),
                    r.dc('ngIf', 'outline' != e.appearance),
                    r.Ab(1),
                    r.dc('ngSwitch', e._getDisplayedMessages()),
                    r.Ab(1),
                    r.dc('ngSwitchCase', 'error'),
                    r.Ab(1),
                    r.dc('ngSwitchCase', 'hint'));
              },
              directives: [i.h, i.i, i.j, Et.a],
              styles: [
                '.mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n',
                '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n',
                '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n',
                '.mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n',
                '.mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n',
                '.mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n',
              ],
              encapsulation: 2,
              data: { animation: [ce.transitionMessages] },
              changeDetection: 0,
            })),
            t
          );
        })(),
        we = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, St.b, Et.c], St.b],
            })),
            t
          );
        })();
      var Oe = n('EY2u');
      n('D0XW'), n('l7GE'), n('ZUHj'), n('z+Ro');
      const Ve = Object(Ut.e)({ passive: !0 });
      let xe = (() => {
          class t {
            constructor(t, e) {
              (this._platform = t),
                (this._ngZone = e),
                (this._monitoredElements = new Map());
            }
            monitor(t) {
              if (!this._platform.isBrowser) return Oe.a;
              const e = Object(Ft.b)(t),
                n = this._monitoredElements.get(e);
              if (n) return n.subject;
              const i = new Pt.a(),
                r = 'cdk-text-field-autofilled',
                a = (t) => {
                  'cdk-text-field-autofill-start' !== t.animationName ||
                  e.classList.contains(r)
                    ? 'cdk-text-field-autofill-end' === t.animationName &&
                      e.classList.contains(r) &&
                      (e.classList.remove(r),
                      this._ngZone.run(() =>
                        i.next({ target: t.target, isAutofilled: !1 })
                      ))
                    : (e.classList.add(r),
                      this._ngZone.run(() =>
                        i.next({ target: t.target, isAutofilled: !0 })
                      ));
                };
              return (
                this._ngZone.runOutsideAngular(() => {
                  e.addEventListener('animationstart', a, Ve),
                    e.classList.add('cdk-text-field-autofill-monitored');
                }),
                this._monitoredElements.set(e, {
                  subject: i,
                  unlisten: () => {
                    e.removeEventListener('animationstart', a, Ve);
                  },
                }),
                i
              );
            }
            stopMonitoring(t) {
              const e = Object(Ft.b)(t),
                n = this._monitoredElements.get(e);
              n &&
                (n.unlisten(),
                n.subject.complete(),
                e.classList.remove('cdk-text-field-autofill-monitored'),
                e.classList.remove('cdk-text-field-autofilled'),
                this._monitoredElements.delete(e));
            }
            ngOnDestroy() {
              this._monitoredElements.forEach((t, e) => this.stopMonitoring(e));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Tb(Ut.a), r.Tb(r.z));
            }),
            (t.ɵprov = Object(r.Gb)({
              factory: function () {
                return new t(Object(r.Tb)(Ut.a), Object(r.Tb)(r.z));
              },
              token: t,
              providedIn: 'root',
            })),
            t
          );
        })(),
        Ae = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Ut.b]],
            })),
            t
          );
        })();
      const ke = new r.q('MAT_INPUT_VALUE_ACCESSOR'),
        Ee = [
          'button',
          'checkbox',
          'file',
          'hidden',
          'image',
          'radio',
          'range',
          'reset',
          'submit',
        ];
      let Se = 0;
      class Fe {
        constructor(t, e, n, i) {
          (this._defaultErrorStateMatcher = t),
            (this._parentForm = e),
            (this._parentFormGroup = n),
            (this.ngControl = i);
        }
      }
      const Pe = Object(St.h)(Fe);
      let De = (() => {
          class t extends Pe {
            constructor(t, e, n, i, r, a, o, s, l, c) {
              super(a, i, r, n),
                (this._elementRef = t),
                (this._platform = e),
                (this.ngControl = n),
                (this._autofillMonitor = s),
                (this._formField = c),
                (this._uid = 'mat-input-' + Se++),
                (this.focused = !1),
                (this.stateChanges = new Pt.a()),
                (this.controlType = 'mat-input'),
                (this.autofilled = !1),
                (this._disabled = !1),
                (this._required = !1),
                (this._type = 'text'),
                (this._readonly = !1),
                (this._neverEmptyInputTypes = [
                  'date',
                  'datetime',
                  'datetime-local',
                  'month',
                  'time',
                  'week',
                ].filter((t) => Object(Ut.d)().has(t)));
              const d = this._elementRef.nativeElement,
                h = d.nodeName.toLowerCase();
              (this._inputValueAccessor = o || d),
                (this._previousNativeValue = this.value),
                (this.id = this.id),
                e.IOS &&
                  l.runOutsideAngular(() => {
                    t.nativeElement.addEventListener('keyup', (t) => {
                      let e = t.target;
                      e.value ||
                        e.selectionStart ||
                        e.selectionEnd ||
                        (e.setSelectionRange(1, 1), e.setSelectionRange(0, 0));
                    });
                  }),
                (this._isServer = !this._platform.isBrowser),
                (this._isNativeSelect = 'select' === h),
                (this._isTextarea = 'textarea' === h),
                this._isNativeSelect &&
                  (this.controlType = d.multiple
                    ? 'mat-native-select-multiple'
                    : 'mat-native-select');
            }
            get disabled() {
              return this.ngControl && null !== this.ngControl.disabled
                ? this.ngControl.disabled
                : this._disabled;
            }
            set disabled(t) {
              (this._disabled = Object(Ft.a)(t)),
                this.focused && ((this.focused = !1), this.stateChanges.next());
            }
            get id() {
              return this._id;
            }
            set id(t) {
              this._id = t || this._uid;
            }
            get required() {
              return this._required;
            }
            set required(t) {
              this._required = Object(Ft.a)(t);
            }
            get type() {
              return this._type;
            }
            set type(t) {
              (this._type = t || 'text'),
                this._validateType(),
                !this._isTextarea &&
                  Object(Ut.d)().has(this._type) &&
                  (this._elementRef.nativeElement.type = this._type);
            }
            get value() {
              return this._inputValueAccessor.value;
            }
            set value(t) {
              t !== this.value &&
                ((this._inputValueAccessor.value = t),
                this.stateChanges.next());
            }
            get readonly() {
              return this._readonly;
            }
            set readonly(t) {
              this._readonly = Object(Ft.a)(t);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                this._autofillMonitor
                  .monitor(this._elementRef.nativeElement)
                  .subscribe((t) => {
                    (this.autofilled = t.isAutofilled),
                      this.stateChanges.next();
                  });
            }
            ngOnChanges() {
              this.stateChanges.next();
            }
            ngOnDestroy() {
              this.stateChanges.complete(),
                this._platform.isBrowser &&
                  this._autofillMonitor.stopMonitoring(
                    this._elementRef.nativeElement
                  );
            }
            ngDoCheck() {
              this.ngControl && this.updateErrorState(),
                this._dirtyCheckNativeValue(),
                this._dirtyCheckPlaceholder();
            }
            focus(t) {
              this._elementRef.nativeElement.focus(t);
            }
            _focusChanged(t) {
              t === this.focused ||
                (this.readonly && t) ||
                ((this.focused = t), this.stateChanges.next());
            }
            _onInput() {}
            _dirtyCheckPlaceholder() {
              var t, e;
              const n = (
                null ===
                  (e =
                    null === (t = this._formField) || void 0 === t
                      ? void 0
                      : t._hideControlPlaceholder) || void 0 === e
                  ? void 0
                  : e.call(t)
              )
                ? null
                : this.placeholder;
              if (n !== this._previousPlaceholder) {
                const t = this._elementRef.nativeElement;
                (this._previousPlaceholder = n),
                  n
                    ? t.setAttribute('placeholder', n)
                    : t.removeAttribute('placeholder');
              }
            }
            _dirtyCheckNativeValue() {
              const t = this._elementRef.nativeElement.value;
              this._previousNativeValue !== t &&
                ((this._previousNativeValue = t), this.stateChanges.next());
            }
            _validateType() {
              Ee.indexOf(this._type);
            }
            _isNeverEmpty() {
              return this._neverEmptyInputTypes.indexOf(this._type) > -1;
            }
            _isBadInput() {
              let t = this._elementRef.nativeElement.validity;
              return t && t.badInput;
            }
            get empty() {
              return !(
                this._isNeverEmpty() ||
                this._elementRef.nativeElement.value ||
                this._isBadInput() ||
                this.autofilled
              );
            }
            get shouldLabelFloat() {
              if (this._isNativeSelect) {
                const t = this._elementRef.nativeElement,
                  e = t.options[0];
                return (
                  this.focused ||
                  t.multiple ||
                  !this.empty ||
                  !!(t.selectedIndex > -1 && e && e.label)
                );
              }
              return this.focused || !this.empty;
            }
            setDescribedByIds(t) {
              t.length
                ? this._elementRef.nativeElement.setAttribute(
                    'aria-describedby',
                    t.join(' ')
                  )
                : this._elementRef.nativeElement.removeAttribute(
                    'aria-describedby'
                  );
            }
            onContainerClick() {
              this.focused || this.focus();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(r.l),
                r.Kb(Ut.a),
                r.Kb(M, 10),
                r.Kb(_t, 8),
                r.Kb(wt, 8),
                r.Kb(St.a),
                r.Kb(ke, 10),
                r.Kb(xe),
                r.Kb(r.z),
                r.Kb(ve, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ['input', 'matInput', ''],
                ['textarea', 'matInput', ''],
                ['select', 'matNativeControl', ''],
                ['input', 'matNativeControl', ''],
                ['textarea', 'matNativeControl', ''],
              ],
              hostAttrs: [
                1,
                'mat-input-element',
                'mat-form-field-autofill-control',
              ],
              hostVars: 9,
              hostBindings: function (t, e) {
                1 & t &&
                  r.Wb('focus', function () {
                    return e._focusChanged(!0);
                  })('blur', function () {
                    return e._focusChanged(!1);
                  })('input', function () {
                    return e._onInput();
                  }),
                  2 & t &&
                    (r.Sb('disabled', e.disabled)('required', e.required),
                    r.Bb('id', e.id)('data-placeholder', e.placeholder)(
                      'readonly',
                      (e.readonly && !e._isNativeSelect) || null
                    )('aria-invalid', e.errorState)(
                      'aria-required',
                      e.required.toString()
                    ),
                    r.Cb('mat-input-server', e._isServer));
              },
              inputs: {
                id: 'id',
                disabled: 'disabled',
                required: 'required',
                type: 'type',
                value: 'value',
                readonly: 'readonly',
                placeholder: 'placeholder',
                errorStateMatcher: 'errorStateMatcher',
                userAriaDescribedBy: [
                  'aria-describedby',
                  'userAriaDescribedBy',
                ],
              },
              exportAs: ['matInput'],
              features: [r.zb([{ provide: de, useExisting: t }]), r.xb, r.yb],
            })),
            t
          );
        })(),
        Me = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [St.a],
              imports: [[Ae, we, St.b], Ae, we],
            })),
            t
          );
        })(),
        je = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, kt, Me, we]],
            })),
            t
          );
        })();
      var Le = n('bTqV'),
        Ie = n('/uUt'),
        Re = n('eIep'),
        Te = n('vkgz'),
        Ne = n('JIr8');
      let ze = (() => {
          class t {
            constructor(t, e) {
              var n;
              (this.resetContextObserver = {
                next: () => (this.renderedValue = void 0),
              }),
                (this.updateViewContextObserver = {
                  next: (t) => (this.renderedValue = t),
                }),
                (this.cdAware = (function (t) {
                  const e = new Pt.a(),
                    n = e.pipe(Object(Ie.a)()).pipe(
                      Object(Re.a)((e) =>
                        null == e
                          ? (t.updateViewContextObserver.next(e),
                            t.render(),
                            Oe.a)
                          : (t.resetContextObserver.next(),
                            t.render(),
                            e.pipe(
                              Object(Ie.a)(),
                              Object(Te.a)(t.updateViewContextObserver),
                              Object(Te.a)(() => t.render()),
                              Object(Ne.a)((t) => (console.error(t), Oe.a))
                            ))
                      )
                    );
                  return {
                    nextPotentialObservable(t) {
                      e.next(t);
                    },
                    subscribe: () => n.subscribe(),
                  };
                })({
                  render:
                    ((n = { cdRef: t, ngZone: e }),
                    function () {
                      n.ngZone instanceof r.z
                        ? n.cdRef.markForCheck()
                        : n.cdRef.detectChanges();
                    }),
                  updateViewContextObserver: this.updateViewContextObserver,
                  resetContextObserver: this.resetContextObserver,
                })),
                (this.subscription = this.cdAware.subscribe());
            }
            transform(t) {
              return (
                this.cdAware.nextPotentialObservable(t), this.renderedValue
              );
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Vb(), r.Kb(r.z));
            }),
            (t.ɵpipe = r.Jb({ name: 'ngrxPush', type: t, pure: !1 })),
            t
          );
        })(),
        qe = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        Ke = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, qe, Le.b]],
            })),
            t
          );
        })();
      var Ge = n('tyNb'),
        Ue = n('X+p4'),
        Be = n('MmQB'),
        We = n('l7P3');
      function He(t, e) {
        if (
          (1 & t &&
            (r.Pb(0, 'div', 3), r.Lb(1, 'img', 4), r.Zb(2, 'ngrxPush'), r.Ob()),
          2 & t)
        ) {
          const t = r.Yb();
          r.Ab(1), r.dc('src', r.ac(2, 1, t.displayURL$), r.gc);
        }
      }
      let Ze = (() => {
        class t {
          constructor(t, e) {
            (this.store = t),
              (this.zone = e),
              (this.displayURL$ = this.store.select(Be.a));
          }
          logout() {
            console.log('logout'),
              this.zone.run(() => {
                this.store.dispatch(Object(Ue.n)());
              });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(We.h), r.Kb(r.z));
          }),
          (t.ɵcmp = r.Eb({
            type: t,
            selectors: [['tor-app-navbar']],
            decls: 6,
            vars: 3,
            consts: [
              [1, 'mat-elevation-z8'],
              ['mat-button', '', 1, 'btn-logout', 3, 'click'],
              ['class', 'photo-url push-right-4', 4, 'ngIf'],
              [1, 'photo-url', 'push-right-4'],
              ['alt', 'user image', 3, 'src'],
            ],
            template: function (t, e) {
              1 & t &&
                (r.Pb(0, 'div', 0),
                r.Pb(1, 'button', 1),
                r.Wb('click', function () {
                  return e.logout();
                }),
                r.kc(2, He, 3, 3, 'div', 2),
                r.Zb(3, 'ngrxPush'),
                r.Pb(4, 'span'),
                r.lc(5, 'Logout'),
                r.Ob(),
                r.Ob(),
                r.Ob()),
                2 & t && (r.Ab(2), r.dc('ngIf', r.ac(3, 1, e.displayURL$)));
            },
            directives: [Le.a, i.h],
            pipes: [ze],
            styles: [
              '[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;height:50px;width:100%}[_nghost-%COMP%]   div[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]   .photo-url[_ngcontent-%COMP%]{line-height:0;display:inline-block}[_nghost-%COMP%]   div[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]   .photo-url[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]   .photo-url[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:24px;width:24px}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var $e = n('Ehug'),
        Xe = n('pLZG');
      let Ye = (() => {
        class t {
          constructor(t, e, n) {
            (this.fb = t),
              (this.cd = e),
              (this.search = n),
              (this._onDestroy$ = new Pt.a()),
              (this.changes = new r.n()),
              (this.searchFormGroup = this.buildForm());
          }
          ngOnInit() {
            this.searchFormGroup.valueChanges
              .pipe(
                Object(Xe.a)((t) => t.query.length > 3),
                Object(Nt.a)(this._onDestroy$)
              )
              .subscribe((t) => {
                this.search.query(t.query), this.changes.next(t);
              }),
              this.cd.detectChanges();
          }
          ngOnDestroy() {
            this._onDestroy$.next(!0);
          }
          buildForm() {
            return this.fb.group({ query: [''] });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Kb(At), r.Kb(r.h), r.Kb($e.a));
          }),
          (t.ɵcmp = r.Eb({
            type: t,
            selectors: [['tor-algolia-search']],
            outputs: { changes: 'changes' },
            decls: 5,
            vars: 1,
            consts: [
              [3, 'formGroup'],
              [
                'color',
                'primary',
                'floatLabel',
                'always',
                'appearance',
                'fill',
              ],
              [
                'matInput',
                '',
                'formControlName',
                'query',
                'placeholder',
                'Peter Jackson',
                'autocomplete',
                'off',
              ],
            ],
            template: function (t, e) {
              1 & t &&
                (r.Pb(0, 'form', 0),
                r.Pb(1, 'mat-form-field', 1),
                r.Pb(2, 'mat-label'),
                r.lc(3, 'Search'),
                r.Ob(),
                r.Lb(4, 'input', 2),
                r.Ob(),
                r.Ob()),
                2 & t && r.dc('formGroup', e.searchFormGroup);
            },
            directives: [yt, I, wt, Ce, ue, De, m, L, Vt],
            styles: [
              '[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      const Je = [
        {
          path: '',
          component: (() => {
            class t {
              onQueryInputChanges(t) {
                console.log(t);
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = r.Eb({
                type: t,
                selectors: [['tor-movies-feature-dashboard']],
                decls: 2,
                vars: 0,
                consts: [[3, 'changes']],
                template: function (t, e) {
                  1 & t &&
                    (r.Lb(0, 'tor-app-navbar'),
                    r.Pb(1, 'tor-algolia-search', 0),
                    r.Wb('changes', function (t) {
                      return e.onQueryInputChanges(t);
                    }),
                    r.Ob());
                },
                directives: [Ze, Ye],
                styles: [
                  '[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto}',
                ],
                changeDetection: 0,
              })),
              t
            );
          })(),
        },
      ];
      let Qe = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Ge.c.forChild(Je)], Ge.c],
            })),
            t
          );
        })(),
        tn = (() => {
          class t {}
          return (
            (t.ɵmod = r.Ib({ type: t })),
            (t.ɵinj = r.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Qe, je, Ke]],
            })),
            t
          );
        })();
    },
  },
]);
