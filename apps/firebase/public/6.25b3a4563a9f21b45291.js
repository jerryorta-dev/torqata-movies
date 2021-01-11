(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    X64E: function (t, a, i) {
      'use strict';
      i.r(a),
        i.d(a, 'MoviesFeatureLoginModule', function () {
          return y;
        });
      var r = i('ofXK'),
        n = i('bTqV'),
        o = i('R1ws'),
        e = i('FKr1'),
        c = i('fXoL');
      const d = ['*', [['mat-card-footer']]],
        m = ['*', 'mat-card-footer'];
      let s = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵdir = c.Fb({
              type: t,
              selectors: [
                ['mat-card-content'],
                ['', 'mat-card-content', ''],
                ['', 'matCardContent', ''],
              ],
              hostAttrs: [1, 'mat-card-content'],
            })),
            t
          );
        })(),
        l = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵdir = c.Fb({
              type: t,
              selectors: [
                ['mat-card-title'],
                ['', 'mat-card-title', ''],
                ['', 'matCardTitle', ''],
              ],
              hostAttrs: [1, 'mat-card-title'],
            })),
            t
          );
        })(),
        p = (() => {
          class t {
            constructor(t) {
              this._animationMode = t;
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(c.Kb(o.a, 8));
            }),
            (t.ɵcmp = c.Eb({
              type: t,
              selectors: [['mat-card']],
              hostAttrs: [1, 'mat-card', 'mat-focus-indicator'],
              hostVars: 2,
              hostBindings: function (t, a) {
                2 & t &&
                  c.Cb(
                    '_mat-animation-noopable',
                    'NoopAnimations' === a._animationMode
                  );
              },
              exportAs: ['matCard'],
              ngContentSelectors: m,
              decls: 2,
              vars: 0,
              template: function (t, a) {
                1 & t && (c.cc(d), c.bc(0), c.bc(1, 1));
              },
              styles: [
                '.mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        g = (() => {
          class t {}
          return (
            (t.ɵmod = c.Ib({ type: t })),
            (t.ɵinj = c.Hb({
              factory: function (a) {
                return new (a || t)();
              },
              imports: [[e.b], e.b],
            })),
            t
          );
        })();
      var h = i('NFeN'),
        b = i('cIEA'),
        u = i('tyNb'),
        f = i('JZFu');
      const x = [
        {
          path: '',
          component: (() => {
            class t {
              constructor(t) {
                (this.svgLoader = t), this.svgLoader.addSvgIconSet();
              }
              signInWithGoogle() {
                const t = new f.a.auth.GoogleAuthProvider();
                f.a
                  .auth()
                  .signInWithPopup(t)
                  .then(() => {});
              }
            }
            return (
              (t.ɵfac = function (a) {
                return new (a || t)(c.Kb(b.c));
              }),
              (t.ɵcmp = c.Eb({
                type: t,
                selectors: [['tor-movies-feature-login']],
                decls: 10,
                vars: 0,
                consts: [
                  [
                    'mat-stroked-button',
                    '',
                    'color',
                    'primary',
                    1,
                    'push-top-20',
                    3,
                    'click',
                  ],
                  ['svgIcon', 'icon:google', 1, 'push-right-10'],
                ],
                template: function (t, a) {
                  1 & t &&
                    (c.Pb(0, 'mat-card'),
                    c.Pb(1, 'mat-card-title'),
                    c.lc(2, 'Login'),
                    c.Ob(),
                    c.Pb(3, 'mat-card-content'),
                    c.Pb(4, 'div'),
                    c.lc(5, 'Account is free and private.'),
                    c.Ob(),
                    c.Pb(6, 'button', 0),
                    c.Wb('click', function () {
                      return a.signInWithGoogle();
                    }),
                    c.Lb(7, 'mat-icon', 1),
                    c.Pb(8, 'span'),
                    c.lc(9, ' Sign In With Google'),
                    c.Ob(),
                    c.Ob(),
                    c.Ob(),
                    c.Ob());
                },
                directives: [p, l, s, n.a, h.a],
                styles: [
                  '[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1 1 auto}',
                ],
                changeDetection: 0,
              })),
              t
            );
          })(),
        },
      ];
      let w = (() => {
          class t {}
          return (
            (t.ɵmod = c.Ib({ type: t })),
            (t.ɵinj = c.Hb({
              factory: function (a) {
                return new (a || t)();
              },
              imports: [[u.c.forChild(x)], u.c],
            })),
            t
          );
        })(),
        y = (() => {
          class t {}
          return (
            (t.ɵmod = c.Ib({ type: t })),
            (t.ɵinj = c.Hb({
              factory: function (a) {
                return new (a || t)();
              },
              imports: [[r.b, b.b, g, n.b, h.b, w]],
            })),
            t
          );
        })();
    },
  },
]);
