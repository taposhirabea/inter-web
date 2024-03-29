'use strict';
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = a() : "function" === typeof define && define.amd ? define(a) : d.FroalaEditor = a()
})(this, function() {
    function d(b) {
        "@babel/helpers - typeof";
        d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(b) {
            return typeof b
        } : function(b) {
            return b && "function" === typeof Symbol && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b
        };
        return d(b)
    }

    function a(b, c, d) {
        if ("string" === typeof b) {
            var e = document.querySelectorAll(b);
            c && c.iframe_document && (e = c.iframe_document.querySelectorAll(b));
            b = [];
            for (var g = 0; g < e.length; g++) {
                var I = e[g]["data-froala.editor"];
                I ? (console.warn("Froala Editor instance already exists."), b.push(I)) : b.push(new a.Bootstrap(e[g], c, d))
            }
            return 1 == b.length ? b[0] : b
        }
        return new a.Bootstrap(b, c, d)
    }

    function c(b) {
        if ("touchend" === b.type && !this.$el.data("touched")) return !0;
        if (1 === b.which || !b.which) {
            this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init");
            this.load(V.MODULES);
            this.load(V.PLUGINS);
            var a = b.originalEvent && b.originalEvent.originalTarget;
            a && "IMG" === a.tagName && f(a).trigger("mousedown");
            "undefined" === typeof this.ul && this.destroy();
            if ("touchend" === b.type && this.image && b.originalEvent && b.originalEvent.target && f(b.originalEvent.target).is("img")) {
                var c = this;
                setTimeout(function() {
                    c.image.edit(f(b.originalEvent.target))
                }, 100)
            }
            this.ready = !0;
            this.events.trigger("initialized")
        }
    }

    function h() {
        this.doc = this.$el.get(0).ownerDocument;
        this.win = "defaultView" in this.doc ? this.doc.defaultView : this.doc.parentWindow;
        this.$doc = f(this.doc);
        this.$win = f(this.win);
        this.opts.pluginsEnabled || (this.opts.pluginsEnabled = Object.keys(V.PLUGINS));
        this.opts.initOnClick ? (this.load(V.MODULES), this.$el.on("touchstart.init", function() {
            f(this).data("touched", !0)
        }), this.$el.on("touchmove.init", function() {
            f(this).removeData("touched")
        }), this.$el.on("mousedown.init touchend.init dragenter.init focus.init", c.bind(this)), this.events.trigger("initializationDelayed")) : (this.load(V.MODULES), this.load(V.PLUGINS), f(this.o_win).scrollTop(this.c_scroll), "undefined" === typeof this.ul && this.destroy(), this.ready = !0, this.events.trigger("initialized"))
    }
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    Element.prototype.closest || (Element.prototype.closest = function(b) {
        var a = this;
        if (!document.documentElement.contains(a)) return null;
        do {
            if (a.matches(b)) return a;
            a = a.parentElement || a.parentNode
        } while (null !== a && 1 === a.nodeType);
        return null
    });
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(b) {
        b = (this.document || this.ownerDocument).querySelectorAll(b);
        for (var a = b.length; 0 <= --a && b.item(a) !== this;);
        return -1 < a
    });
    Array.isArray || (Array.isArray = function(b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(b, a) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(b), e = 1; e < arguments.length; e++) {
                var g = arguments[e];
                if (null != g)
                    for (var d in g) Object.prototype.hasOwnProperty.call(g, d) && (c[d] = g[d])
            }
            return c
        },
        writable: !0,
        configurable: !0
    });
    (function() {
        function b(b, e) {
            var g = b[e];
            b[e] = function(b) {
                var e = !1,
                    d = !1;
                if (b && !Array.isArray(b) && (b.match(a) || b.match(c))) {
                    this.parentNode || (k.appendChild(this), d = !0);
                    var A = this.parentNode;
                    this.id || (this.id = "rootedQuerySelector_id_".concat((new Date).getTime()), e = !0);
                    b = g.call(A, b.replace(a, "#".concat(this.id)).replace(c, ",#".concat(this.id)));
                    e && (this.id = "");
                    d && k.removeChild(this);
                    return b
                }
                return g.call(this, b)
            }
        }
        var a = /^\s*:scope/gi,
            c = /,\s*:scope/gi,
            k = document.createElement("div");
        try {
            var g = k.querySelectorAll(":scope *");
            if (!g || Array.isArray(g)) throw "error";
        } catch (I) {
            b(Element.prototype, "querySelector"), b(Element.prototype, "querySelectorAll"), b(HTMLElement.prototype, "querySelector"), b(HTMLElement.prototype, "querySelectorAll")
        }
    })();
    "document" in self && ("classList" in
        document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || ! function(b) {
            if ("Element" in b) {
                b = b.Element.prototype;
                var a = Object,
                    c = String.prototype.trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    k = Array.prototype.indexOf || function(b) {
                        for (var a = 0, c = this.length; c > a; a++)
                            if (a in this && this[a] === b) return a;
                        return -1
                    },
                    g = function(b, a) {
                        this.name = b;
                        this.code = DOMException[b];
                        this.message = a
                    },
                    d = function(b, a) {
                        if ("" === a) throw new g("SYNTAX_ERR", "The token must not be empty.");
                        if (/\s/.test(a)) throw new g("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                        return k.call(b, a)
                    },
                    A = function(b) {
                        var a = c.call(b.getAttribute("class") || "");
                        a = a ? a.split(/\s+/) : [];
                        for (var e = 0, g = a.length; g > e; e++) this.push(a[e]);
                        this._updateClassName = function() {
                            b.setAttribute("class", this.toString())
                        }
                    },
                    f = A.prototype = [],
                    Z = function() {
                        return new A(this)
                    };
                if (g.prototype = Error.prototype, f.item = function(b) {
                        return this[b] || null
                    }, f.contains = function(b) {
                        return ~d(this, b + "")
                    }, f.add = function() {
                        var b = arguments,
                            a = 0,
                            c = b.length,
                            e = !1;
                        do {
                            var g = b[a] + "";
                            ~d(this, g) || (this.push(g), e = !0)
                        } while (++a < c);
                        e && this._updateClassName()
                    }, f.remove = function() {
                        var b, a = arguments,
                            c = 0,
                            e = a.length,
                            g = !1;
                        do {
                            var k = a[c] + "";
                            for (b = d(this, k); ~b;) this.splice(b, 1), g = !0, b = d(this, k)
                        } while (++c < e);
                        g && this._updateClassName()
                    }, f.toggle = function(b, a) {
                        var c = this.contains(b),
                            e = c ? !0 !== a && "remove" : !1 !== a && "add";
                        return e && this[e](b), !0 === a || !1 === a ? a : !c
                    }, f.replace = function(b, a) {
                        b = d(b + "");
                        ~b && (this.splice(b, 1, a), this._updateClassName())
                    }, f.toString = function() {
                        return this.join(" ")
                    }, a.defineProperty) {
                    f = {
                        get: Z,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        a.defineProperty(b, "classList", f)
                    } catch (E) {
                        void 0 !== E.number && -2146823252 !== E.number || (f.enumerable = !1, a.defineProperty(b, "classList", f))
                    }
                } else a.prototype.__defineGetter__ && b.__defineGetter__("classList", Z)
            }
        }(self),
        function() {
            var b = document.createElement("_");
            if (b.classList.add("c1", "c2"), !b.classList.contains("c2")) {
                var a = function(b) {
                    var a = DOMTokenList.prototype[b];
                    DOMTokenList.prototype[b] = function(b) {
                        var c, e = arguments.length;
                        for (c = 0; e > c; c++) b = arguments[c], a.call(this, b)
                    }
                };
                a("add");
                a("remove")
            }
            if (b.classList.toggle("c3", !1), b.classList.contains("c3")) {
                var c = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(b, a) {
                    return 1 in arguments && !this.contains(b) == !a ? a : c.call(this, b)
                }
            }
            "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(b, a) {
                var c = this.toString().split(" ");
                b = c.indexOf(b + "");
                ~b && (c = c.slice(b), this.remove.apply(this, c), this.add(a), this.add.apply(this, c.slice(1)))
            });
            b = null
        }());
    a.RegisterPlugins = function(b) {
        for (var c = 0; c < b.length; c++) b[c].call(a)
    };
    Object.assign(a, {
        DEFAULTS: {
            initOnClick: !1,
            pluginsEnabled: null
        },
        MODULES: {},
        PLUGINS: {},
        VERSION: "3.2.3",
        INSTANCES: [],
        OPTS_MAPPING: {},
        SHARED: {},
        ID: 0
    });
    a.MODULES.node = function(b) {
        function c(b) {
            return b && "IFRAME" !== b.tagName ? Array.prototype.slice.call(b.childNodes || []) : []
        }

        function d(b) {
            return b && b.nodeType === Node.ELEMENT_NODE ? 0 <= a.BLOCK_TAGS.indexOf(b.tagName.toLowerCase()) : !1
        }

        function k(b) {
            var a = {};
            if (b = b.attributes)
                for (var c = 0; c < b.length; c++) {
                    var e = b[c];
                    a[e.nodeName] = e.value
                }
            return a
        }

        function g(b) {
            var a = "";
            b = k(b);
            for (var c = Object.keys(b).sort(), e = 0; e < c.length; e++) {
                var g = c[e],
                    d = b[g];
                0 > d.indexOf("'") && 0 <= d.indexOf('"') ? a += " ".concat(g, "='").concat(d, "'") : (0 <= d.indexOf('"') && 0 <= d.indexOf("'") && (d = d.replace(/"/g, "&quot;")), a += " ".concat(g, '="').concat(d, '"'))
            }
            return a
        }

        function I(a, c) {
            "undefined" === typeof c && (c = !0);
            for (a = a.previousSibling; a && c && b.node.hasClass(a, "fr-marker");) a = a.previousSibling;
            return a ? a.nodeType === Node.TEXT_NODE && "" === a.textContent ? I(a) : !1 : !0
        }

        function A(a, c) {
            "undefined" === typeof c && (c = !0);
            for (a = a.nextSibling; a && c && b.node.hasClass(a, "fr-marker");) a = a.nextSibling;
            return a ? a.nodeType === Node.TEXT_NODE && "" === a.textContent ? A(a) : !1 : !0
        }

        function f(a) {
            return a === b.el
        }
        var Z = b.$;
        return {
            isBlock: d,
            isEmpty: function(e, g) {
                if (!e) return !0;
                if (e.querySelector("table")) return !1;
                var k = c(e);
                1 === k.length && d(k[0]) && (k = c(k[0]));
                for (var A = !1, Z = 0; Z < k.length; Z++) {
                    var I = k[Z];
                    if (!g || !b.node.hasClass(I, "fr-marker"))
                        if (I.nodeType !== Node.TEXT_NODE || 0 !== I.textContent.length) {
                            if ("BR" !== I.tagName && 0 < (I.textContent || "").replace(/\u200B/gi, "").replace(/\n/g, "").length || A) return !1;
                            "BR" === I.tagName && (A = !0)
                        }
                }
                return e.querySelectorAll(a.VOID_ELEMENTS.join(",")).length - e.querySelectorAll("br").length || e.querySelector("".concat(b.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || 1 < e.querySelectorAll(a.BLOCK_TAGS.join(",")).length || e.querySelector("".concat(b.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) ? !1 : !0
            },
            blockParent: function(a) {
                for (; a && a.parentNode !== b.el && (!a.parentNode || !b.node.hasClass(a.parentNode, "fr-inner"));)
                    if (a = a.parentNode, d(a)) return a;
                return null
            },
            deepestParent: function(c, e, g) {
                "undefined" === typeof e && (e = []);
                "undefined" === typeof g && (g = !0);
                e.push(b.el);
                if (0 <= e.indexOf(c.parentNode) || c.parentNode && b.node.hasClass(c.parentNode, "fr-inner") || c.parentNode && 0 <= a.SIMPLE_ENTER_TAGS.indexOf(c.parentNode.tagName) && g) return null;
                for (; !(!(0 > e.indexOf(c.parentNode) && c.parentNode) || b.node.hasClass(c.parentNode, "fr-inner") || !(0 > a.SIMPLE_ENTER_TAGS.indexOf(c.parentNode.tagName)) && g || d(c) && !d(c.parentNode) || d(c) && d(c.parentNode) && g);) c = c.parentNode;
                return c
            },
            rawAttributes: k,
            attributes: g,
            clearAttributes: function(b) {
                for (var a = b.attributes, c = a.length - 1; 0 <= c; c--) b.removeAttribute(a[c].nodeName)
            },
            openTagString: function(b) {
                return "<".concat(b.tagName.toLowerCase()).concat(g(b), ">")
            },
            closeTagString: function(b) {
                return "</".concat(b.tagName.toLowerCase(), ">")
            },
            isFirstSibling: I,
            isLastSibling: A,
            isList: function(b) {
                return b ? 0 <= ["UL", "OL"].indexOf(b.tagName) : !1
            },
            isLink: function(b) {
                return b && b.nodeType === Node.ELEMENT_NODE ? "a" === b.tagName.toLowerCase() : !1
            },
            isElement: f,
            contents: c,
            isVoid: function(b) {
                return b && b.nodeType === Node.ELEMENT_NODE && 0 <= a.VOID_ELEMENTS.indexOf((b.tagName || "").toLowerCase())
            },
            hasFocus: function(a) {
                return a === b.doc.activeElement && (!b.doc.hasFocus || b.doc.hasFocus()) && !!(f(a) || a.type || a.href || ~a.tabIndex)
            },
            isEditable: function(b) {
                return (!b.getAttribute || "false" !== b.getAttribute("contenteditable")) && 0 > ["STYLE", "SCRIPT"].indexOf(b.tagName)
            },
            isDeletable: function(b) {
                return b && b.nodeType === Node.ELEMENT_NODE && b.getAttribute("class") && 0 <= (b.getAttribute("class") || "").indexOf("fr-deletable")
            },
            hasClass: function(b, a) {
                b instanceof Z && (b = b.get(0));
                return b && b.classList && b.classList.contains(a)
            },
            filter: function(a) {
                return b.browser.msie ? a : {
                    acceptNode: a
                }
            }
        }
    };
    Object.assign(a.DEFAULTS, {
        htmlAllowedTags: "a abbr address area article aside audio b base bdi bdo blockquote br button canvas caption cite code col colgroup datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meter nav noscript object ol optgroup option output p param pre progress queue rp rt ruby s samp script style section select small source span strike strong sub summary sup table tbody td textarea tfoot th thead time tr track u ul var video wbr".split(" "),
        htmlRemoveTags: ["script", "style"],
        htmlAllowedAttrs: "accept accept-charset accesskey action align allowfullscreen allowtransparency alt async autocomplete autofocus autoplay autosave background bgcolor border charset cellpadding cellspacing checked cite class color cols colspan content contenteditable contextmenu controls coords data data-.* datetime default defer dir dirname disabled download draggable dropzone enctype for form formaction frameborder headers height hidden high href hreflang http-equiv icon id ismap itemprop keytype kind label lang language list loop low max maxlength media method min mozallowfullscreen multiple muted name novalidate open optimum pattern ping placeholder playsinline poster preload pubdate radiogroup readonly rel required reversed rows rowspan sandbox scope scoped scrolling seamless selected shape size sizes span src srcdoc srclang srcset start step summary spellcheck style tabindex target title type translate usemap value valign webkitallowfullscreen width wrap".split(" "),
        htmlAllowedStyleProps: [".*"],
        htmlAllowComments: !0,
        htmlUntouched: !1,
        fullPage: !1
    });
    a.HTML5Map = {
        B: "STRONG",
        I: "EM",
        STRIKE: "S"
    };
    a.MODULES.clean = function(b) {
        function c(a) {
            if (a.nodeType === Node.ELEMENT_NODE && a.getAttribute("class") && 0 <= a.getAttribute("class").indexOf("fr-marker")) return !1;
            var z = b.node.contents(a),
                l;
            for (l = 0; l < z.length; l++) z[l].nodeType !== Node.ELEMENT_NODE || b.node.isVoid(z[l]) ? z[l].nodeType === Node.TEXT_NODE && (z[l].textContent = z[l].textContent.replace(/\u200b/g, "")) : z[l].textContent.replace(/\u200b/g, "").length !== z[l].textContent.length && c(z[l]);
            if (a.nodeType === Node.ELEMENT_NODE && !b.node.isVoid(a)) {
                a.normalize();
                z = b.node.contents(a);
                var u = a.querySelectorAll(".fr-marker");
                if (0 === z.length - u.length) {
                    for (l = 0; l < z.length; l++)
                        if (z[l].nodeType === Node.ELEMENT_NODE && 0 > (z[l].getAttribute("class") || "").indexOf("fr-marker")) return !1;
                    for (l = 0; l < u.length; l++) a.parentNode.insertBefore(u[l].cloneNode(!0), a);
                    a.parentNode.removeChild(a);
                    return !1
                }
            }
        }

        function d(a, c) {
            if (a.nodeType === Node.COMMENT_NODE) return "\x3c!--".concat(a.nodeValue, "--\x3e");
            if (a.nodeType === Node.TEXT_NODE) return c ? a.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : a.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00A0/g, "&nbsp;").replace(/\u0009/g, "");
            if (a.nodeType !== Node.ELEMENT_NODE || a.nodeType === Node.ELEMENT_NODE && 0 <= ["STYLE", "SCRIPT", "NOSCRIPT"].indexOf(a.tagName)) return a.outerHTML;
            if (a.nodeType === Node.ELEMENT_NODE && "svg" === a.tagName) return c = document.createElement("div"), a = a.cloneNode(!0), c.appendChild(a), c.innerHTML;
            if ("IFRAME" === a.tagName) return a.outerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            var l = a.childNodes;
            if (0 === l.length) return a.outerHTML;
            for (var u = "", z = 0; z < l.length; z++) "PRE" === a.tagName && (c = !0), u += d(l[z], c);
            return b.node.openTagString(a) + u + b.node.closeTagString(a)
        }

        function k(b) {
            ba = [];
            b = b.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, function(b) {
                ba.push(b);
                return "[FROALA.EDITOR.SCRIPT ".concat(ba.length - 1, "]")
            });
            b = b.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, function(b) {
                ba.push(b);
                return "[FROALA.EDITOR.NOSCRIPT ".concat(ba.length - 1, "]")
            });
            b = b.replace(/<meta((?:[\w\W]*?)) http-equiv="/g, '<meta$1 data-fr-http-equiv="');
            return b = b.replace(/<img((?:[\w\W]*?)) src="/g, '<img$1 data-fr-src="')
        }

        function g(a) {
            a = a.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi, function(a, c) {
                return 0 <= b.opts.htmlRemoveTags.indexOf("script") ? "" : ba[parseInt(c, 10)]
            });
            a = a.replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi, function(a, c) {
                if (0 <= b.opts.htmlRemoveTags.indexOf("noscript")) return "";
                c = ba[parseInt(c, 10)].replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                (a = h(c)) && a.length && (c = f(a.html(), na), a.html(c), c = a.get(0).outerHTML);
                return c
            });
            return a = a.replace(/<img((?:[\w\W]*?)) data-fr-src="/g, '<img$1 src="')
        }

        function I(b) {
            b = b.replace(/;;/gi, ";");
            b = b.replace(/^;/gi, "");
            ";" !== b.charAt(b.length) && (b += ";");
            return b
        }

        function A(a) {
            for (var c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    var l = c.match(da),
                        u = null;
                    "style" === c && b.opts.htmlAllowedStyleProps.length && (u = a[c].match(fa));
                    l && u ? a[c] = I(u.join(";")) : (!l || "style" === c && !u) && delete a[c]
                }
            l = "";
            u = Object.keys(a).sort();
            for (var e = 0; e < u.length; e++) c = u[e], l = 0 > a[c].indexOf('"') ? l + " ".concat(c, '="').concat(a[c], '"') : l + " ".concat(c, "='").concat(a[c], "'");
            return l
        }

        function f(a, c) {
            var l = document.implementation.createHTMLDocument("Froala DOC").createElement("DIV");
            h(l).append(a);
            var u = "";
            if (l) {
                var e = b.node.contents(l);
                for (a = 0; a < e.length; a++) c(e[a]);
                e = b.node.contents(l);
                for (a = 0; a < e.length; a++) u += d(e[a])
            }
            return u
        }

        function Z(a, c, l) {
            var u = a = k(a),
                e = null;
            b.opts.fullPage && (u = b.html.extractNode(a, "body") || (0 <= a.indexOf("<body") ? "" : a), l && (e = b.html.extractNode(a, "head") || ""));
            u = f(u, c);
            e && (e = f(e, c));
            c = u;
            var z = a;
            b.opts.fullPage && (a = b.html.extractDoctype(z), l = A(b.html.extractNodeAttrs(z, "html")), e = null === e ? b.html.extractNode(z, "head") || "<title></title>" : e, u = A(b.html.extractNodeAttrs(z, "head")), z = A(b.html.extractNodeAttrs(z, "body")), c = "".concat(a, "<html").concat(l, "><head").concat(u, ">").concat(e, "</head><body").concat(z, ">").concat(c, "</body></html>"));
            return g(c)
        }

        function E(a) {
            var c = b.doc.createElement("DIV");
            c.innerText = a;
            return c.textContent
        }

        function F(c) {
            if ("SPAN" === c.tagName && 0 <= (c.getAttribute("class") || "").indexOf("fr-marker")) return !1;
            "PRE" === c.tagName && x(c);
            c.nodeType === Node.ELEMENT_NODE && (c.getAttribute("data-fr-src") && 0 !== c.getAttribute("data-fr-src").indexOf("blob:") && c.setAttribute("data-fr-src", b.helpers.sanitizeURL(E(c.getAttribute("data-fr-src")))), c.getAttribute("href") && c.setAttribute("href", b.helpers.sanitizeURL(E(c.getAttribute("href")))), c.getAttribute("src") && c.setAttribute("src", b.helpers.sanitizeURL(E(c.getAttribute("src")))), c.getAttribute("srcdoc") && c.setAttribute("srcdoc", b.clean.html(c.getAttribute("srcdoc"))), 0 <= ["TABLE", "TBODY", "TFOOT", "TR"].indexOf(c.tagName) && (c.innerHTML = c.innerHTML.trim()));
            if (!b.opts.pasteAllowLocalImages && c.nodeType === Node.ELEMENT_NODE && "IMG" === c.tagName && c.getAttribute("data-fr-src") && 0 === c.getAttribute("data-fr-src").indexOf("file://")) return c.parentNode.removeChild(c), !1;
            if (c.nodeType === Node.ELEMENT_NODE && a.HTML5Map[c.tagName] && "" === b.node.attributes(c)) {
                var e = a.HTML5Map[c.tagName];
                e = "<".concat(e, ">").concat(c.innerHTML, "</").concat(e, ">");
                c.insertAdjacentHTML("beforebegin", e);
                c = c.previousSibling;
                c.parentNode.removeChild(c.nextSibling)
            }
            if (b.opts.htmlAllowComments || c.nodeType !== Node.COMMENT_NODE)
                if (c.tagName && c.tagName.match(pa)) "STYLE" == c.tagName && b.helpers.isMac() && function() {
                    var b = c.innerHTML.trim(),
                        a = [],
                        l = /{([^}]+)}/g,
                        u;
                    for (b = b.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*|\x3c!--[\s\S]*?--\x3e$/, ""); u = l.exec(b);) a.push(u[1]);
                    l = function(l) {
                        var u = b.substring(0, b.indexOf("{")).trim();
                        c.parentNode.querySelectorAll(u).forEach(function(b) {
                            b.removeAttribute("class");
                            b.setAttribute("style", a[l])
                        });
                        b = b.substring(b.indexOf("}") + 1)
                    };
                    for (u = 0; - 1 != b.indexOf("{"); u++) l(u)
                }(), c.parentNode.removeChild(c);
                else if (c.tagName && !c.tagName.match(q)) "svg" === c.tagName ? c.parentNode.removeChild(c) : b.browser.safari && "path" === c.tagName && c.parentNode && "svg" === c.parentNode.tagName || (c.outerHTML = c.innerHTML);
            else {
                if (e = c.attributes)
                    for (var l = e.length -
                            1; 0 <= l; l--) {
                        var u = e[l],
                            W = u.nodeName.match(da),
                            H = null;
                        "style" === u.nodeName && b.opts.htmlAllowedStyleProps.length && (H = u.value.match(fa));
                        W && H ? u.value = I(H.join(";")) : (!W || "style" === u.nodeName && !H) && c.removeAttribute(u.nodeName)
                    }
            } else 0 !== c.data.indexOf("[FROALA.EDITOR") && c.parentNode.removeChild(c)
        }

        function na(a) {
            for (var c = b.node.contents(a), l = 0; l < c.length; l++) c[l].nodeType !== Node.TEXT_NODE && na(c[l]);
            F(a)
        }

        function x(b) {
            var a = b.innerHTML;
            0 <= a.indexOf("\n") && (b.innerHTML = a.replace(/\n/g, "<br>"))
        }
        var h = b.$,
            q, pa, da, fa, ba = [];
        return {
            _init: function() {
                b.opts.fullPage && h.merge(b.opts.htmlAllowedTags, "head title style link base body html meta".split(" "))
            },
            html: function(a, c, l, u) {
                "undefined" === typeof c && (c = []);
                "undefined" === typeof l && (l = []);
                u = h.merge([], b.opts.htmlAllowedTags);
                var e;
                for (e = 0; e < c.length; e++) 0 <= u.indexOf(c[e]) && u.splice(u.indexOf(c[e]), 1);
                c = h.merge([], b.opts.htmlAllowedAttrs);
                for (e = 0; e < l.length; e++) 0 <= c.indexOf(l[e]) && c.splice(c.indexOf(l[e]), 1);
                c.push("data-fr-.*");
                c.push("fr-.*");
                q = new RegExp("^".concat(u.join("$|^"), "$"), "gi");
                da = new RegExp("^".concat(c.join("$|^"), "$"), "gi");
                pa = new RegExp("^".concat(b.opts.htmlRemoveTags.join("$|^"), "$"), "gi");
                fa = b.opts.htmlAllowedStyleProps.length ? new RegExp("((^|;|\\s)".concat(b.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)"), ":.+?(?=(;)|$))"), "gi") : null;
                return a = Z(a, na, !0)
            },
            toHTML5: function() {
                var c = b.el.querySelectorAll(Object.keys(a.HTML5Map).join(","));
                if (c.length) {
                    var e = !1;
                    b.el.querySelector(".fr-marker") || (b.selection.save(), e = !0);
                    for (var l = 0; l < c.length; l++) "" === b.node.attributes(c[l]) && h(c[l]).replaceWith("<".concat(a.HTML5Map[c[l].tagName], ">").concat(c[l].innerHTML, "</").concat(a.HTML5Map[c[l].tagName], ">"));
                    e && b.selection.restore()
                }
            },
            tables: function() {
                for (var a = b.el.querySelectorAll("tr"), c = 0; c < a.length; c++) {
                    for (var l = a[c].children, u = !0, e = 0; e < l.length; e++)
                        if ("TH" !== l[e].tagName) {
                            u = !1;
                            break
                        }
                    if (!1 !== u && 0 !== l.length) {
                        for (l = a[c]; l && "TABLE" !== l.tagName && "THEAD" !== l.tagName;) l = l.parentNode;
                        u = l;
                        "THEAD" !== u.tagName && (u = b.doc.createElement("THEAD"), l.insertBefore(u, l.firstChild));
                        u.appendChild(a[c])
                    }
                }
            },
            lists: function() {
                var a = [];
                do {
                    if (a.length) {
                        a = a[0];
                        var c = b.doc.createElement("ul");
                        a.parentNode.insertBefore(c, a);
                        do {
                            var l = a;
                            a = a.nextSibling;
                            c.appendChild(l)
                        } while (a && "LI" === a.tagName)
                    }
                    a = [];
                    c = b.el.querySelectorAll("li");
                    for (l = 0; l < c.length; l++) b.node.isList(c[l].parentNode) || a.push(c[l])
                } while (0 < a.length);
                a = b.el.querySelectorAll("ol + ol, ul + ul");
                for (c = 0; c < a.length; c++)
                    if (l = a[c], b.node.isList(l.previousSibling) && b.node.openTagString(l) === b.node.openTagString(l.previousSibling)) {
                        for (var u = b.node.contents(l), e = 0; e < u.length; e++) l.previousSibling.appendChild(u[e]);
                        l.parentNode.removeChild(l)
                    }
                a = b.el.querySelectorAll("ul, ol");
                for (c = 0; c < a.length; c++)
                    for (l = b.node.contents(a[c]), u = null, e = l.length - 1; 0 <= e; e--) "LI" !== l[e].tagName && "UL" != l[e].tagName && "OL" != l[e].tagName ? (u || (u = h(b.doc.createElement("LI")), u.insertBefore(l[e])), u.prepend(l[e])) : u = null;
                do {
                    c = !1;
                    l = b.el.querySelectorAll("li:empty");
                    for (a = 0; a < l.length; a++) l[a].parentNode.removeChild(l[a]);
                    l = b.el.querySelectorAll("ul, ol");
                    for (a = 0; a < l.length; a++) u = l[a], u.querySelector("LI") || (c = !0, u.parentNode.removeChild(u))
                } while (!0 === c);
                a = b.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul");
                for (c = 0; c < a.length; c++) l = a[c], (u = l.previousSibling) && ("LI" === u.tagName ? u.appendChild(l) : h(l).wrap("<li></li>"));
                a = b.el.querySelectorAll("li > ul, li > ol");
                for (c = 0; c < a.length; c++)
                    if (l = a[c], l.nextSibling)
                        for (u = l.nextSibling; 0 < u.childNodes.length;) l.append(u.childNodes[0]);
                a = b.el.querySelectorAll("li > ul, li > ol");
                for (c = 0; c < a.length; c++)
                    if (l = a[c], b.node.isFirstSibling(l) && "none" != l.parentNode.style.listStyleType) h(l).before("<br/>");
                    else if (l.previousSibling && "BR" === l.previousSibling.tagName) {
                    for (u = l.previousSibling.previousSibling; u && b.node.hasClass(u, "fr-marker");) u = u.previousSibling;
                    u && "BR" !== u.tagName && h(l.previousSibling).remove()
                }
                a = b.el.querySelectorAll("li:empty");
                for (c = 0; c < a.length; c++) h(a[c]).remove()
            },
            invisibleSpaces: function(a) {
                return a.replace(/\u200b/g, "").length === a.length ? a : b.clean.exec(a, c)
            },
            exec: Z
        }
    };
    a.XS = 0;
    a.SM = 1;
    a.MD = 2;
    a.LG = 3;
    a.LinkRegExCommon = "[".concat("a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_\\.", "]{1,}");
    a.LinkRegExEnd = "((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;\\/~+#-\\'*-_{}]*)|())";
    a.LinkRegExTLD = "((".concat(a.LinkRegExCommon, ")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))");
    a.LinkRegExHTTP = "((ftp|http|https):\\/\\/".concat(a.LinkRegExCommon, ")");
    a.LinkRegExAuth = "((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@".concat(a.LinkRegExCommon, ")");
    a.LinkRegExWWW = "(www\\.".concat(a.LinkRegExCommon, "\\.[a-z0-9-]{2,24})");
    a.LinkRegEx = "(".concat(a.LinkRegExTLD, "|").concat(a.LinkRegExHTTP, "|").concat(a.LinkRegExWWW, "|").concat(a.LinkRegExAuth, ")").concat(a.LinkRegExEnd);
    a.LinkProtocols = ["mailto", "tel", "sms", "notes", "data"];
    a.MAIL_REGEX = /.+@.+\..+/i;
    a.MODULES.helpers = function(b) {
        function c() {
            return /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && !g()
        }

        function n() {
            return /(Android)/g.test(navigator.userAgent) && !g()
        }

        function k() {
            return /(Blackberry)/g.test(navigator.userAgent)
        }

        function g() {
            return /(Windows Phone)/gi.test(navigator.userAgent)
        }
        var I = b.$,
            A, f = null;
        return {
            _init: function() {
                var a = {};
                var c = -1;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var e = navigator.userAgent;
                    var g = /MSIE ([0-9]{1,}[\.0-9]{0,})/;
                    null !== g.exec(e) && (c = parseFloat(RegExp.$1))
                } else "Netscape" === navigator.appName && (e = navigator.userAgent, g = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/, null !== g.exec(e) && (c = parseFloat(RegExp.$1)));
                0 < c ? a.msie = !0 : (e = navigator.userAgent.toLowerCase(), e = /(edge)[ /]([\w.]+)/.exec(e) || /(chrome)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [], g = e[1] || "", e[1] && (a[g] = !0), a.chrome ? a.webkit = !0 : a.webkit && (a.safari = !0));
                a.msie && (a.version = c);
                b.browser = a
            },
            isIOS: c,
            isMac: function() {
                null === f && (f = 0 <= navigator.platform.toUpperCase().indexOf("MAC"));
                return f
            },
            isAndroid: n,
            isBlackberry: k,
            isWindowsPhone: g,
            isMobile: function() {
                return n() || c() || k()
            },
            isEmail: function(b) {
                return /^(https?:|ftps?:|)\/\//i.test(b) ? !1 : a.MAIL_REGEX.test(b)
            },
            requestAnimationFrame: function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(b) {
                    window.setTimeout(b, 1E3 / 60)
                }
            },
            getPX: function(b) {
                return parseInt(b, 10) || 0
            },
            screenSize: function() {
                try {
                    var c = b.$box.width();
                    if (768 > c) return a.XS;
                    if (768 <= c && 992 > c) return a.SM;
                    if (992 <= c && 1200 > c) return a.MD;
                    if (1200 <= c) return a.LG
                } catch (E) {
                    return a.LG
                }
            },
            isTouch: function() {
                return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch
            },
            sanitizeURL: function(b) {
                var c = /^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i;
                return /^(https?:|ftps?:|)\/\//i.test(b) || c.test(b) || (new RegExp("^(".concat(a.LinkProtocols.join("|"), "):"), "i")).test(b) ? b : b = encodeURIComponent(b).replace(/%23/g, "#").replace(/%2F/g, "/").replace(/%25/g, "%").replace(/mailto%3A/gi, "mailto:").replace(/file%3A/gi, "file:").replace(/sms%3A/gi, "sms:").replace(/tel%3A/gi, "tel:").replace(/notes%3A/gi, "notes:").replace(/data%3Aimage/gi, "data:image").replace(/blob%3A/gi, "blob:").replace(/%3A(\d)/gi, ":$1").replace(/webkit-fake-url%3A/gi, "webkit-fake-url:").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&").replace(/&amp;/g, "&").replace(/%2C/g, ",").replace(/%3B/g, ";").replace(/%2B/g, "+").replace(/%40/g, "@").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%7B/g, "{").replace(/%7D/g, "}")
            },
            isArray: function(b) {
                return b && !Object.prototype.propertyIsEnumerable.call(b, "length") && "object" === d(b) && "number" === typeof b.length
            },
            RGBToHex: function(b) {
                function a(b) {
                    return "0".concat(parseInt(b, 10).toString(16)).slice(-2)
                }
                try {
                    if (!b || "transparent" === b) return "";
                    if (/^#[0-9A-F]{6}$/i.test(b)) return b;
                    b = b.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                    return "#".concat(a(b[1])).concat(a(b[2])).concat(a(b[3])).toUpperCase()
                } catch (F) {
                    return null
                }
            },
            HEXtoRGB: function(b) {
                b = b.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(b, a, c, e) {
                    return a + a + c + c + e + e
                });
                return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? "rgb(".concat(parseInt(b[1], 16), ", ").concat(parseInt(b[2], 16), ", ").concat(parseInt(b[3], 16), ")") : ""
            },
            isURL: function(b) {
                if (!/^(https?:|ftps?:|)\/\//i.test(b)) return !1;
                b = String(b).replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/ /g, "%20");
                return (new RegExp("^".concat(a.LinkRegExHTTP).concat(a.LinkRegExEnd, "$"), "gi")).test(b)
            },
            getAlignment: function(a) {
                a.css || (a = I(a));
                a = (a.css("text-align") || "").replace(/-(.*)-/g, "");
                if (0 > ["left", "right", "justify", "center"].indexOf(a)) {
                    if (!A) {
                        a = I('<div dir="'.concat("rtl" === b.opts.direction ? "rtl" : "auto", '" style="text-align: ').concat(b.$el.css("text-align"), '; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>'));
                        I("body").first().append(a);
                        var c = a.find("#s1").get(0).getBoundingClientRect().left,
                            e = a.find("#s2").get(0).getBoundingClientRect().left;
                        a.remove();
                        A = c < e ? "left" : "right"
                    }
                    a = A
                }
                return a
            },
            scrollTop: function() {
                return b.o_win.pageYOffset ? b.o_win.pageYOffset : b.o_doc.documentElement && b.o_doc.documentElement.scrollTop ? b.o_doc.documentElement.scrollTop : b.o_doc.body.scrollTop ? b.o_doc.body.scrollTop : 0
            },
            scrollLeft: function() {
                return b.o_win.pageXOffset ? b.o_win.pageXOffset : b.o_doc.documentElement && b.o_doc.documentElement.scrollLeft ? b.o_doc.documentElement.scrollLeft : b.o_doc.body.scrollLeft ? b.o_doc.body.scrollLeft : 0
            },
            isInViewPort: function(b) {
                b = b.getBoundingClientRect();
                b = {
                    top: Math.round(b.top),
                    bottom: Math.round(b.bottom)
                };
                return 0 <= b.top && b.bottom <= (window.innerHeight || document.documentElement.clientHeight) || 0 >= b.top && b.bottom >= (window.innerHeight || document.documentElement.clientHeight)
            }
        }
    };
    a.MODULES.events = function(b) {
        function c(b, a, c) {
            h(b, a, c)
        }

        function d() {
            c(b.$el, "cut copy paste beforepaste", function(b) {
                C(b.type, [b])
            })
        }

        function k() {
            c(b.$el, "click mouseup mousemove mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart", function(b) {
                C(b.type, [b])
            });
            F("mousedown", function() {
                for (var c = 0; c < a.INSTANCES.length; c++) a.INSTANCES[c] !== b && a.INSTANCES[c].popups && a.INSTANCES[c].popups.areVisible() && a.INSTANCES[c].$el.find(".fr-marker").remove()
            })
        }

        function g() {
            c(b.$el, "keydown keypress keyup input", function(b) {
                C(b.type, [b])
            })
        }

        function I() {
            c(b.$win, b._mousedown, function(b) {
                C("window.mousedown", [b]);
                ba = !0
            });
            c(b.$win, b._mouseup, function(b) {
                C("window.mouseup", [b])
            });
            c(b.$win, "cut copy keydown keyup touchmove touchend", function(b) {
                C("window.".concat(b.type), [b])
            })
        }

        function A() {
            c(b.$doc, "dragend drop", function(b) {
                C("document.".concat(b.type), [b])
            })
        }

        function f(c) {
            "undefined" === typeof c && (c = !0);
            if (!b.$wp) return !1;
            b.helpers.isIOS() && b.$win.get(0).focus();
            if (b.core.hasFocus() || !b.core.hasFocus() && c && (c = b.$win.scrollTop(), b.browser.msie && b.$box && b.$box.css("position", "fixed"), b.browser.msie && b.$wp && b.$wp.css("overflow", "visible"), b.browser.msie && b.$sc && b.$sc.css("position", "fixed"), b.browser.msie || (ba = !1, b.el.focus(), b.events.trigger("focus"), ba = !0), b.browser.msie && b.$sc && b.$sc.css("position", ""), b.browser.msie && b.$box && b.$box.css("position", ""), b.browser.msie && b.$wp && b.$wp.css("overflow", "auto"), c !== b.$win.scrollTop() && b.$win.scrollTop(c), c = b.selection.info(b.el), !c.atStart) || !b.core.hasFocus() || 0 < b.$el.find(".fr-marker").length) return !1;
            c = b.selection.info(b.el);
            if (c.atStart && b.selection.isCollapsed() && null !== b.html.defaultTag())
                if ((c = b.markers.insert()) && !b.node.blockParent(c)) {
                    if (da(c).remove(), c = b.$el.find(b.html.blockTagsQuery()).get(0)) da(c).prepend(a.MARKERS), b.selection.restore()
                } else c && da(c).remove()
        }

        function Z() {
            c(b.$el, "focus", function(b) {
                ba && (f(!1), !1 === r && C(b.type, [b]))
            });
            c(b.$el, "blur", function(b) {
                ba && !0 === r && (C(b.type, [b]), ba = !0)
            });
            h(b.$el, "mousedown", '[contenteditable="true"]', function() {
                ba = !1;
                b.$el.blur()
            });
            F("focus", function() {
                r = !0
            });
            F("blur", function() {
                r = !1
            })
        }

        function E(a, c) {
            var l = da(a.currentTarget);
            if (b.edit.isDisabled() || b.node.hasClass(l.get(0), "fr-disabled")) return a.preventDefault(), !1;
            if ("mouseup" === a.type && 1 !== a.which || b.button.getButtons(".fr-selected", !0).get(0) == l.get(0) && !b.node.hasClass(l.get(0), "fr-selected")) return !0;
            if ("touchmove" !== a.type) {
                a.stopPropagation();
                a.stopImmediatePropagation();
                a.preventDefault();
                if (!b.node.hasClass(l.get(0), "fr-selected")) return b.button.getButtons(".fr-selected", !0).removeClass("fr-selected"), !1;
                b.button.getButtons(".fr-selected", !0).removeClass("fr-selected");
                if (l.data("dragging") || l.attr("disabled")) return l.removeData("dragging"), !1;
                var u = l.data("timeout");
                u && (clearTimeout(u), l.removeData("timeout"));
                c.apply(b, [a])
            } else l.data("timeout") || l.data("timeout", setTimeout(function() {
                l.data("dragging", !0)
            }, 100))
        }

        function F(a, c, e) {
            var l = a.split(" ");
            if (1 < l.length) {
                for (a = 0; a < l.length; a++) F(l[a], c, e);
                return !0
            }
            "undefined" === typeof e && (e = !1);
            0 !== a.indexOf("shared.") ? (fa[a] = fa[a] || [], l = fa[a]) : (b.shared._events[a] = b.shared._events[a] || [], l = b.shared._events[a]);
            e ? l.unshift(c) : l.push(c)
        }

        function h(a, c, e, H, g) {
            "function" === typeof e && (g = H, H = e, e = !1);
            var l = g ? b.shared.$_events : z;
            g = g ? b.sid : b.id;
            c = "".concat(c.trim().split(" ").join(".ed".concat(g, " ")), ".ed").concat(g);
            if (e) a.on(c, e, H);
            else a.on(c, H);
            l.push([a, c])
        }

        function x(b) {
            for (var a = 0; a < b.length; a++) b[a][0].off(b[a][1])
        }

        function C(a, c, e) {
            if (!b.edit.isDisabled() || e) {
                if (0 !== a.indexOf("shared.")) e = fa[a];
                else {
                    if (0 < b.shared.count) return !1;
                    e = b.shared._events[a]
                }
                if (e)
                    for (var l = 0; l < e.length; l++) {
                        var u = e[l].apply(b, c);
                        if (!1 === u) return !1
                    }
                return b.opts.events && b.opts.events[a] && (u = b.opts.events[a].apply(b, c), !1 === u) ? !1 : u
            }
        }

        function q() {
            for (var b in fa) Object.prototype.hasOwnProperty.call(fa, b) && delete fa[b]
        }

        function pa() {
            for (var a in b.shared._events) Object.prototype.hasOwnProperty.call(b.shared._events, a) && delete b.shared._events[a]
        }
        var da = b.$,
            fa = {},
            ba, r = !1,
            z = [];
        return {
            _init: function() {
                b.shared.$_events = b.shared.$_events || [];
                b.shared._events = {};
                b.helpers.isMobile() ? (b._mousedown = "touchstart", b._mouseup = "touchend", b._move = "touchmove", b._mousemove = "touchmove") : (b._mousedown = "mousedown", b._mouseup = "mouseup", b._move = "", b._mousemove = "mousemove");
                k();
                I();
                A();
                g();
                Z();
                ba = !0;
                d();
                F("destroy", q);
                F("shared.destroy", pa)
            },
            on: F,
            trigger: C,
            bindClick: function(a, c, e) {
                h(a, b._mousedown, c, function(a) {
                    if (!b.edit.isDisabled()) {
                        var c = da(a.currentTarget);
                        if (b.edit.isDisabled() || b.node.hasClass(c.get(0), "fr-disabled")) a.preventDefault();
                        else if ("mousedown" !== a.type || 1 === a.which) b.helpers.isMobile() || a.preventDefault(), (b.helpers.isAndroid() || b.helpers.isWindowsPhone()) && 0 === c.parents(".fr-dropdown-menu").length && (a.preventDefault(), a.stopPropagation()), c.addClass("fr-selected"), b.events.trigger("commands.mousedown", [c])
                    }
                }, !0);
                h(a, "".concat(b._mouseup, " ").concat(b._move), c, function(a) {
                    b.edit.isDisabled() || E(a, e)
                }, !0);
                h(a, "mousedown click mouseup", c, function(a) {
                    b.edit.isDisabled() || a.stopPropagation()
                }, !0);
                F("window.mouseup", function() {
                    b.edit.isDisabled() || (a.find(c).removeClass("fr-selected"), ba = !0)
                });
                h(a, "mouseover", c, function() {
                    da(this).hasClass("fr-options") && da(this).prev(".fr-btn").addClass("fr-btn-hover");
                    da(this).next(".fr-btn").hasClass("fr-options") && da(this).next(".fr-btn").addClass("fr-btn-hover")
                });
                h(a, "mouseout", c, function() {
                    da(this).hasClass("fr-options") && da(this).prev(".fr-btn").removeClass("fr-btn-hover");
                    da(this).next(".fr-btn").hasClass("fr-options") && da(this).next(".fr-btn").removeClass("fr-btn-hover")
                })
            },
            disableBlur: function() {
                ba = !1
            },
            enableBlur: function() {
                ba = !0
            },
            blurActive: function() {
                return ba
            },
            focus: f,
            chainTrigger: function(a, c, e) {
                if (!b.edit.isDisabled() || e) {
                    if (0 !== a.indexOf("shared.")) e = fa[a];
                    else {
                        if (0 < b.shared.count) return !1;
                        e = b.shared._events[a]
                    }
                    if (e)
                        for (var l = 0; l < e.length; l++) {
                            var u = e[l].apply(b, [c]);
                            "undefined" !== typeof u && (c = u)
                        }
                    b.opts.events && b.opts.events[a] && (u = b.opts.events[a].apply(b, [c]), "undefined" !== typeof u && (c = u));
                    return c
                }
            },
            $on: h,
            $off: function() {
                x(z);
                z = [];
                0 === b.shared.count && (x(b.shared.$_events), b.shared.$_events = [])
            }
        }
    };
    Object.assign(a.DEFAULTS, {
        indentMargin: 20
    });
    a.COMMANDS = {
        bold: {
            title: "Bold",
            toggle: !0,
            refresh: function(b) {
                var a = this.format.is("strong");
                b.toggleClass("fr-active", a).attr("aria-pressed", a)
            }
        },
        italic: {
            title: "Italic",
            toggle: !0,
            refresh: function(b) {
                var a = this.format.is("em");
                b.toggleClass("fr-active", a).attr("aria-pressed", a)
            }
        },
        underline: {
            title: "Underline",
            toggle: !0,
            refresh: function(b) {
                var a = this.format.is("u");
                b.toggleClass("fr-active", a).attr("aria-pressed", a)
            }
        },
        strikeThrough: {
            title: "Strikethrough",
            toggle: !0,
            refresh: function(b) {
                var a = this.format.is("s");
                b.toggleClass("fr-active", a).attr("aria-pressed", a)
            }
        },
        subscript: {
            title: "Subscript",
            toggle: !0,
            refresh: function(b) {
                var a = this.format.is("sub");
                b.toggleClass("fr-active", a).attr("aria-pressed", a)
            }
        },
        superscript: {
            title: "Superscript",
            toggle: !0,
            refresh: function(b) {
                var a = this.format.is("sup");
                b.toggleClass("fr-active", a).attr("aria-pressed", a)
            }
        },
        outdent: {
            title: "Decrease Indent"
        },
        indent: {
            title: "Increase Indent"
        },
        undo: {
            title: "Undo",
            undo: !1,
            forcedRefresh: !0,
            disabled: !0
        },
        redo: {
            title: "Redo",
            undo: !1,
            forcedRefresh: !0,
            disabled: !0
        },
        insertHR: {
            title: "Insert Horizontal Line"
        },
        clearFormatting: {
            title: "Clear Formatting"
        },
        selectAll: {
            title: "Select All",
            undo: !1
        },
        moreText: {
            title: "More Text",
            undo: !1
        },
        moreParagraph: {
            title: "More Paragraph",
            undo: !1
        },
        moreRich: {
            title: "More Rich",
            undo: !1
        },
        moreMisc: {
            title: "More Misc",
            undo: !1
        }
    };
    a.RegisterCommand = function(b, c) {
        a.COMMANDS[b] = c
    };
    a.MODULES.commands = function(b) {
        function c(a) {
            b.html.defaultTag() && (a = "<".concat(b.html.defaultTag(), ">").concat(a, "</").concat(b.html.defaultTag(), ">"));
            return a
        }

        function d(a) {
            a = b.$tb.find("[data-cmd=".concat(a, "]"));
            var c = b.$tb.find('.fr-more-toolbar[data-name="'.concat(a.attr("data-group-name"), '"]'));
            b.$tb.find(".fr-open").not(a).removeClass("fr-open");
            a.toggleClass("fr-open");
            b.$tb.find(".fr-more-toolbar").removeClass("fr-overflow-visible");
            b.$tb.find(".fr-expanded").not(c).length ? (b.$tb.find(".fr-expanded").toggleClass("fr-expanded"), c.toggleClass("fr-expanded")) : (c.toggleClass("fr-expanded"), b.$box.toggleClass("fr-toolbar-open"), b.$tb.toggleClass("fr-toolbar-open"));
            b.toolbar.setMoreToolbarsHeight()
        }

        function k(c, e) {
            if (!1 !== b.events.trigger("commands.before", A.merge([c], e || []))) {
                var g = a.COMMANDS[c] && a.COMMANDS[c].callback || f[c],
                    d = !0,
                    k = !1;
                a.COMMANDS[c] && ("undefined" !== typeof a.COMMANDS[c].focus && (d = a.COMMANDS[c].focus), "undefined" !== typeof a.COMMANDS[c].accessibilityFocus && (k = a.COMMANDS[c].accessibilityFocus));
                (!b.core.hasFocus() && d && !b.popups.areVisible() || !b.core.hasFocus() && k && b.accessibility.hasFocus()) && b.events.focus(!0);
                a.COMMANDS[c] && !1 !== a.COMMANDS[c].undo && (b.$el.find(".fr-marker").length && (b.events.disableBlur(), b.selection.restore()), b.undo.saveStep());
                g && g.apply(b, A.merge([c], e || []));
                b.events.trigger("commands.after", A.merge([c], e || []));
                a.COMMANDS[c] && !1 !== a.COMMANDS[c].undo && b.undo.saveStep()
            }
        }

        function g(a) {
            b.selection.save();
            b.html.wrap(!0, !0, !0, !0);
            b.selection.restore();
            for (var c = b.selection.blocks(), e = 0; e < c.length; e++)
                if ("LI" !== c[e].tagName || "LI" !== c[e].parentNode.tagName) {
                    var g = A(c[e]);
                    "LI" != c[e].tagName && "LI" == c[e].parentNode.tagName && (g = A(c[e].parentNode));
                    var d = "rtl" === b.opts.direction || "rtl" === g.css("direction") ? "margin-right" : "margin-left",
                        k = b.helpers.getPX(g.css(d));
                    g.width() < 2 * b.opts.indentMargin && 0 < a || ("UL" != c[e].parentNode.tagName && "OL" != c[e].parentNode.tagName && "LI" != c[e].parentNode.tagName && g.css(d, Math.max(k + a * b.opts.indentMargin, 0) || ""), g.removeClass("fr-temp-div"))
                }
            b.selection.save();
            b.html.unwrap();
            b.selection.restore()
        }

        function I(b) {
            return function() {
                k(b)
            }
        }
        var A = b.$,
            f = {
                bold: function() {
                    b.format.toggle("strong")
                },
                subscript: function() {
                    b.format.is("sup") && b.format.remove("sup");
                    b.format.toggle("sub")
                },
                superscript: function() {
                    b.format.is("sub") && b.format.remove("sub");
                    b.format.toggle("sup")
                },
                italic: function() {
                    b.format.toggle("em")
                },
                strikeThrough: function() {
                    b.format.toggle("s")
                },
                underline: function() {
                    b.format.toggle("u")
                },
                undo: function() {
                    b.undo.run()
                },
                redo: function() {
                    b.undo.redo()
                },
                indent: function() {
                    g(1)
                },
                outdent: function() {
                    g(-1)
                },
                show: function() {
                    b.opts.toolbarInline && b.toolbar.showInline(null, !0)
                },
                insertHR: function() {
                    b.selection.remove();
                    var e = "";
                    b.core.isEmpty() && (e = c("<br>"));
                    b.html.insert('<hr id="fr-just" class="fr-just">'.concat(e));
                    var g = b.$el.find("hr#fr-just").length ? b.$el.find("hr#fr-just") : b.$el.find(".fr-just");
                    g.removeAttr("id");
                    g.removeAttr("class");
                    var d;
                    0 === g.next().length && ((e = b.html.defaultTag()) ? g.after(A(b.doc.createElement(e)).append("<br>").get(0)) : g.after("<br>"));
                    g.prev().is("hr") ? d = b.selection.setAfter(g.get(0), !1) : g.next().is("hr") ? d = b.selection.setBefore(g.get(0), !1) : b.selection.setAfter(g.get(0), !1) || b.selection.setBefore(g.get(0), !1);
                    d || "undefined" === typeof d || (e = "".concat(a.MARKERS, "<br>"), e = c(e), g.after(e));
                    b.selection.restore()
                },
                clearFormatting: function() {
                    b.format.remove()
                },
                selectAll: function() {
                    b.doc.execCommand("selectAll", !1, !1)
                },
                moreText: function(b) {
                    d(b)
                },
                moreParagraph: function(b) {
                    d(b)
                },
                moreRich: function(b) {
                    d(b)
                },
                moreMisc: function(b) {
                    d(b)
                }
            },
            Z = {},
            E;
        for (E in f) Object.prototype.hasOwnProperty.call(f, E) && (Z[E] = I(E));
        return Object.assign(Z, {
            exec: k,
            _init: function() {
                b.events.on("keydown", function(a) {
                    var c = b.selection.element();
                    if (c && "HR" === c.tagName && !b.keys.isArrow(a.which)) return a.preventDefault(), !1
                });
                b.events.on("keyup", function(c) {
                    var e = b.selection.element();
                    if (e && "HR" === e.tagName)
                        if (c.which === a.KEYCODE.ARROW_LEFT || c.which === a.KEYCODE.ARROW_UP) {
                            if (e.previousSibling) return b.node.isBlock(e.previousSibling) ? b.selection.setAtEnd(e.previousSibling) : A(e).before(a.MARKERS), b.selection.restore(), !1
                        } else if ((c.which === a.KEYCODE.ARROW_RIGHT || c.which === a.KEYCODE.ARROW_DOWN) && e.nextSibling) return b.node.isBlock(e.nextSibling) ? b.selection.setAtStart(e.nextSibling) : A(e).after(a.MARKERS), b.selection.restore(), !1
                });
                b.events.on("mousedown", function(b) {
                    if (b.target && "HR" === b.target.tagName) return b.preventDefault(), b.stopPropagation(), !1
                });
                b.events.on("mouseup", function() {
                    var c = b.selection.element(),
                        e = b.selection.endElement();
                    c === e && c && "HR" === c.tagName && (c.nextSibling && (b.node.isBlock(c.nextSibling) ? b.selection.setAtStart(c.nextSibling) : A(c).after(a.MARKERS)), b.selection.restore())
                })
            }
        })
    };
    a.MODULES.cursorLists = function(b) {
        function c(b) {
            for (;
                "LI" !== b.tagName;) b = b.parentNode;
            return b
        }

        function d(a) {
            for (; !b.node.isList(a);) a = a.parentNode;
            return a
        }
        var k = b.$;
        return {
            _startEnter: function(e) {
                var g = c(e),
                    A = g.nextSibling,
                    f = g.previousSibling,
                    n = b.html.defaultTag();
                if (b.node.isEmpty(g, !0) && A) {
                    A = f = "";
                    for (e = e.parentNode; !b.node.isList(e) && e.parentNode && ("LI" !== e.parentNode.tagName || e.parentNode === g);) f = b.node.openTagString(e) + f, A += b.node.closeTagString(e), e = e.parentNode;
                    f = b.node.openTagString(e) + f;
                    A += b.node.closeTagString(e);
                    for (n = e.parentNode && "LI" === e.parentNode.tagName ? "".concat(A, "<li>").concat(a.MARKERS, "<br>").concat(f) : n ? "".concat(A, "<").concat(n, ">").concat(a.MARKERS, "<br></").concat(n, ">").concat(f) : "".concat(A + a.MARKERS, "<br>").concat(f); 0 > ["UL", "OL"].indexOf(e.tagName) || e.parentNode && "LI" === e.parentNode.tagName;) e = e.parentNode;
                    k(g).replaceWith('<span id="fr-break"></span>');
                    g = b.node.openTagString(e) + k(e).html() + b.node.closeTagString(e);
                    g = g.replace(/<span id="fr-break"><\/span>/g, n);
                    k(e).replaceWith(g);
                    b.$el.find("li:empty").remove()
                } else if (f && A || !b.node.isEmpty(g, !0)) {
                    n = "<br>";
                    for (f = e.parentNode; f && "LI" !== f.tagName;) n = b.node.openTagString(f) + n + b.node.closeTagString(f), f = f.parentNode;
                    k(g).before("<li>".concat(n, "</li>"));
                    k(e).remove()
                } else {
                    if (f) {
                        f = d(g);
                        A = "".concat(a.MARKERS, "<br>");
                        for (e = e.parentNode; e && "LI" !== e.tagName;) A = b.node.openTagString(e) + A + b.node.closeTagString(e), e = e.parentNode;
                        f.parentNode && "LI" === f.parentNode.tagName ? k(f.parentNode).after("<li>".concat(A, "</li>")) : n ? k(f).after("<".concat(n, ">").concat(A, "</").concat(n, ">")) : k(f).after(A)
                    } else f = d(g), f.parentNode && "LI" === f.parentNode.tagName ? A ? k(f.parentNode).before("".concat(b.node.openTagString(g) + a.MARKERS, "<br></li>")) : k(f.parentNode).after("".concat(b.node.openTagString(g) + a.MARKERS, "<br></li>")) : n ? k(f).before("<".concat(n, ">").concat(a.MARKERS, "<br></").concat(n, ">")) : k(f).before("".concat(a.MARKERS, "<br>"));
                    k(g).remove()
                }
            },
            _middleEnter: function(e) {
                for (var g = c(e), d = "", f = e, n = "", E = "", F = !1; f !== g;) {
                    f = f.parentNode;
                    var h = "A" === f.tagName && b.cursor.isAtEnd(e, f) ? "fr-to-remove" : "";
                    F || f == g || b.node.isBlock(f) || (F = !0, n += a.INVISIBLE_SPACE);
                    n = b.node.openTagString(k(f).clone().addClass(h).get(0)) + n;
                    E = b.node.closeTagString(f) + E
                }
                d = E + d + n + a.MARKERS + (b.opts.keepFormatOnDelete ? a.INVISIBLE_SPACE : "");
                k(e).replaceWith('<span id="fr-break"></span>');
                e = b.node.openTagString(g) + k(g).html() + b.node.closeTagString(g);
                e = e.replace(/<span id="fr-break"><\/span>/g, d);
                k(g).replaceWith(e)
            },
            _endEnter: function(e) {
                for (var g = c(e), d = a.MARKERS, f = "", n = e, E = !1; n !== g;)
                    if (n = n.parentNode, !n.classList.contains("fr-img-space-wrap") && !n.classList.contains("fr-img-space-wrap2")) {
                        var F = "A" === n.tagName && b.cursor.isAtEnd(e, n) ? "fr-to-remove" : "";
                        E || n === g || b.node.isBlock(n) || (E = !0, f += a.INVISIBLE_SPACE);
                        f = b.node.openTagString(k(n).clone().addClass(F).get(0)) + f;
                        d += b.node.closeTagString(n)
                    }
                d = f + d;
                k(e).remove();
                k(g).after(d)
            },
            _backspace: function(e) {
                var g = c(e),
                    f = g.previousSibling;
                if (f) {
                    f = k(f).find(b.html.blockTagsQuery()).get(-1) || f;
                    k(e).replaceWith(a.MARKERS);
                    e = b.node.contents(f);
                    e.length && "BR" === e[e.length - 1].tagName && k(e[e.length - 1]).remove();
                    k(g).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                        this.parentNode === g && k(this).replaceWith(k(this).html() + (b.node.isEmpty(this) ? "" : "<br>"))
                    });
                    e = b.node.contents(g)[0];
                    for (var n; e && !b.node.isList(e);) n = e.nextSibling, k(f).append(e), e = n;
                    for (f = g.previousSibling; e;) n = e.nextSibling, k(f).append(e), e = n;
                    e = b.node.contents(f);
                    1 < e.length && "BR" === e[e.length - 1].tagName && k(e[e.length - 1]).remove();
                    k(g).remove()
                } else f = d(g), k(e).replaceWith(a.MARKERS), f.parentNode && "LI" === f.parentNode.tagName ? (e = f.previousSibling, b.node.isBlock(e) ? (k(g).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                    this.parentNode === g && k(this).replaceWith(k(this).html() + (b.node.isEmpty(this) ? "" : "<br>"))
                }), k(e).append(k(g).html())) : k(f).before(k(g).html())) : (e = b.html.defaultTag()) && 0 === k(g).find(b.html.blockTagsQuery()).length ? k(f).before("<".concat(e, ">").concat(k(g).html(), "</").concat(e, ">")) : k(f).before(k(g).html()), k(g).remove(), b.html.wrap(), 0 === k(f).find("li").length && k(f).remove()
            },
            _del: function(e) {
                var d = c(e),
                    g = d.nextSibling;
                if (g) {
                    var f = b.node.contents(g);
                    f.length && "BR" === f[0].tagName && k(f[0]).remove();
                    k(g).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                        this.parentNode === g && k(this).replaceWith(k(this).html() + (b.node.isEmpty(this) ? "" : "<br>"))
                    });
                    f = e;
                    for (var n = b.node.contents(g)[0], E; n && !b.node.isList(n);) E = n.nextSibling, k(f).after(n), f = n, n = E;
                    for (; n;) E = n.nextSibling, k(d).append(n), n = E;
                    k(e).replaceWith(a.MARKERS);
                    k(g).remove()
                } else {
                    for (n = d; !n.nextSibling && n !== b.el;) n = n.parentNode;
                    if (n === b.el) return !1;
                    n = n.nextSibling;
                    if (b.node.isBlock(n)) 0 > a.NO_DELETE_TAGS.indexOf(n.tagName) && (k(e).replaceWith(a.MARKERS), f = b.node.contents(d), f.length && "BR" === f[f.length - 1].tagName && k(f[f.length -
                        1]).remove(), k(d).append(k(n).html()), k(n).remove());
                    else {
                        f = b.node.contents(d);
                        f.length && "BR" === f[f.length - 1].tagName && k(f[f.length - 1]).remove();
                        for (k(e).replaceWith(a.MARKERS); n && !b.node.isBlock(n) && "BR" !== n.tagName;) k(d).append(k(n)), n = n.nextSibling;
                        k(n).remove()
                    }
                }
            }
        }
    };
    a.NO_DELETE_TAGS = ["TH", "TD", "TR", "TABLE", "FORM"];
    a.SIMPLE_ENTER_TAGS = "TH TD LI DL DT FORM".split(" ");
    a.MODULES.cursor = function(b) {
        function c(a) {
            return a ? b.node.isBlock(a) ? !0 : a.nextSibling && a.nextSibling.nodeType === Node.TEXT_NODE && 0 === a.nextSibling.textContent.replace(/\u200b/g, "").length ? c(a.nextSibling) : !a.nextSibling || a.previousSibling && "BR" === a.nextSibling.tagName && !a.nextSibling.nextSibling ? c(a.parentNode) : !1 : !1
        }

        function d(a) {
            return a ? b.node.isBlock(a) ? !0 : a.previousSibling && a.previousSibling.nodeType === Node.TEXT_NODE && 0 === a.previousSibling.textContent.replace(/\u200b/g, "").length ? d(a.previousSibling) : a.previousSibling ? !1 : !a.previousSibling && b.node.hasClass(a.parentNode, "fr-inner") ? !0 : d(a.parentNode) : !1
        }

        function k(a, c) {
            return a && a !== b.$wp.get(0) ? a.previousSibling && a.previousSibling.nodeType === Node.TEXT_NODE && 0 === a.previousSibling.textContent.replace(/\u200b/g, "").length ? k(a.previousSibling, c) : a.previousSibling ? !1 : a.parentNode === c ? !0 : k(a.parentNode, c) : !1
        }

        function g(a, c) {
            return a && a !== b.$wp.get(0) ? a.nextSibling && a.nextSibling.nodeType === Node.TEXT_NODE && 0 === a.nextSibling.textContent.replace(/\u200b/g, "").length ? g(a.nextSibling, c) : !a.nextSibling || a.previousSibling && "BR" === a.nextSibling.tagName && !a.nextSibling.nextSibling ? a.parentNode === c ? !0 : g(a.parentNode, c) : !1 : !1
        }

        function f(a) {
            return 0 < q(a).parentsUntil(b.$el, "LI").length && 0 === q(a).parentsUntil("LI", "TABLE").length
        }

        function A(b, a) {
            a = new RegExp("".concat(a ? "^" : "", "(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})").concat(a ? "" : "$"), "i");
            return (b = b.match(a)) ? b[0].length : 1
        }

        function h(c) {
            for (var e = c; !e.previousSibling;)
                if (e = e.parentNode, b.node.isElement(e)) return !1;
            e = e.previousSibling;
            var d = b.opts.htmlAllowedEmptyTags;
            var g = e.tagName && e.tagName.toLowerCase();
            if ((!b.node.isBlock(e) || e.lastChild && g && 0 <= d.indexOf(g)) && b.node.isEditable(e)) {
                for (d = b.node.contents(e); e.nodeType !== Node.TEXT_NODE && !b.node.isDeletable(e) && d.length && b.node.isEditable(e);) e = d[d.length - 1], d = b.node.contents(e);
                if (e.nodeType === Node.TEXT_NODE) {
                    d = e.textContent;
                    if ((g = d.length) && "\n" === d[d.length - 1]) return e.textContent = d.substring(0, g - 2), 0 === e.textContent.length && e.parentNode.removeChild(e), h(c);
                    b.opts.tabSpaces && d.length >= b.opts.tabSpaces && 0 === d.substr(d.length - b.opts.tabSpaces, d.length -
                        1).replace(/ /g, "").replace(new RegExp(a.UNICODE_NBSP, "g"), "").length && (g = d.length - b.opts.tabSpaces + 1);
                    e.textContent = d.substring(0, g - A(d));
                    b.opts.htmlUntouched && !c.nextSibling && e.textContent.length && " " === e.textContent[e.textContent.length - 1] && (e.textContent = e.textContent.substring(0, e.textContent.length - 1) + a.UNICODE_NBSP);
                    g = d.length !== e.textContent.length;
                    if (0 === e.textContent.length)
                        if (g && b.opts.keepFormatOnDelete) q(e).after(a.INVISIBLE_SPACE + a.MARKERS);
                        else if (0 !== d.length && b.node.isBlock(e.parentNode)) q(e).after(a.MARKERS);
                    else if ((2 != e.parentNode.childNodes.length || e.parentNode != c.parentNode) && 1 != e.parentNode.childNodes.length || b.node.isBlock(e.parentNode) || b.node.isElement(e.parentNode) || !b.node.isDeletable(e.parentNode)) {
                        var f;
                        for (d = e; !b.node.isElement(e.parentNode) && b.node.isEmpty(e.parentNode) && 0 > a.NO_DELETE_TAGS.indexOf(e.parentNode.tagName);)
                            if (e = e.parentNode, "A" === e.tagName) {
                                g = e.childNodes[0];
                                q(e).before(g);
                                for (f = !0; 0 < g.childNodes.length;) g = g.childNodes[0];
                                e.parentNode.removeChild(e);
                                e = g;
                                break
                            }
                        f || (e = d);
                        q(e).after(a.MARKERS);
                        b.node.isElement(e.parentNode) && !c.nextSibling && e.previousSibling && "BR" === e.previousSibling.tagName && q(c).after("<br>");
                        c = e.parentNode;
                        e.parentNode.removeChild(e);
                        b.node.isEmpty(c) && q(c).html(a.INVISIBLE_SPACE + a.MARKERS)
                    } else q(e.parentNode).after(a.MARKERS), q(e.parentNode).remove();
                    else q(e).after(a.MARKERS)
                } else b.node.isDeletable(e) ? (q(e).after(a.MARKERS), q(e).remove()) : c.nextSibling && "BR" === c.nextSibling.tagName && b.node.isVoid(e) && "BR" !== e.tagName ? (q(c.nextSibling).remove(), q(c).replaceWith(a.MARKERS)) : !1 !== b.events.trigger("node.remove", [q(e)]) && (q(e).after(a.MARKERS), q(e).remove())
            } else if (0 > a.NO_DELETE_TAGS.indexOf(e.tagName) && (b.node.isEditable(e) || b.node.isDeletable(e)))
                if (b.node.isDeletable(e)) q(c).replaceWith(a.MARKERS), q(e).remove();
                else if (b.node.isEmpty(e) && !b.node.isList(e)) q(e).remove(), q(c).replaceWith(a.MARKERS);
            else {
                b.node.isList(e) && (e = q(e).find("li").last().get(0));
                (d = b.node.contents(e)) && "BR" === d[d.length - 1].tagName && q(d[d.length - 1]).remove();
                for (d = b.node.contents(e); d && b.node.isBlock(d[d.length -
                        1]);) e = d[d.length - 1], d = b.node.contents(e);
                q(e).append(a.MARKERS);
                for (f = c; !f.previousSibling;) f = f.parentNode;
                for (; f && "BR" !== f.tagName && !b.node.isBlock(f);) d = f, f = f.nextSibling, q(e).append(d);
                f && "BR" === f.tagName && q(f).remove();
                q(c).remove()
            } else c.nextSibling && "BR" === c.nextSibling.tagName && q(c.nextSibling).remove();
            return !0
        }

        function Z(c) {
            var e = 0 < q(c).parentsUntil(b.$el, "BLOCKQUOTE").length;
            if ((e = b.node.deepestParent(c, [], !e)) && "BLOCKQUOTE" === e.tagName) {
                var d = b.node.deepestParent(c, [q(c).parentsUntil(b.$el, "BLOCKQUOTE").get(0)]);
                d && d.nextSibling && (e = d)
            }
            if (null !== e && (d = e.nextSibling, b.node.isBlock(e) && (b.node.isEditable(e) || b.node.isDeletable(e)) && d && 0 > a.NO_DELETE_TAGS.indexOf(d.tagName)))
                if (b.node.isDeletable(d)) q(d).remove(), q(c).replaceWith(a.MARKERS);
                else if (b.node.isBlock(d) && b.node.isEditable(d))
                if (b.node.isList(d))
                    if (b.node.isEmpty(e, !0)) q(e).remove(), q(d).find("li").first().prepend(a.MARKERS);
                    else {
                        var g = q(d).find("li").first();
                        if ("BLOCKQUOTE" === e.tagName) {
                            var f = b.node.contents(e);
                            f.length && b.node.isBlock(f[f.length -
                                1]) && (e = f[f.length - 1])
                        }
                        0 === g.find("ul, ol").length && (q(c).replaceWith(a.MARKERS), g.find(b.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                            this.parentNode === g.get(0) && q(this).replaceWith(q(this).html() + (b.node.isEmpty(this) ? "" : "<br>"))
                        }), q(e).append(b.node.contents(g.get(0))), g.remove(), 0 === q(d).find("li").length && q(d).remove())
                    }
            else {
                f = b.node.contents(d);
                f.length && "BR" === f[0].tagName && q(f[0]).remove();
                if ("BLOCKQUOTE" !== d.tagName && "BLOCKQUOTE" === e.tagName)
                    for (f = b.node.contents(e); f.length && b.node.isBlock(f[f.length - 1]);) e = f[f.length - 1], f = b.node.contents(e);
                else if ("BLOCKQUOTE" === d.tagName && "BLOCKQUOTE" !== e.tagName)
                    for (f = b.node.contents(d); f.length && b.node.isBlock(f[0]);) d = f[0], f = b.node.contents(d);
                q(c).replaceWith(a.MARKERS);
                q(e).append(d.innerHTML);
                q(d).remove()
            } else {
                for (q(c).replaceWith(a.MARKERS); d && "BR" !== d.tagName && !b.node.isBlock(d) && b.node.isEditable(d);) c = d, d = d.nextSibling, q(e).append(c);
                d && "BR" === d.tagName && b.node.isEditable(d) && q(d).remove()
            }
        }

        function E() {
            for (var a = b.el.querySelectorAll("blockquote:empty"), c = 0; c < a.length; c++) a[c].parentNode.removeChild(a[c])
        }

        function F() {
            b.$el.find(".fr-to-remove").each(function() {
                for (var a = b.node.contents(this), c = 0; c < a.length; c++) a[c].nodeType === Node.TEXT_NODE && (a[c].textContent = a[c].textContent.replace(/\u200B/g, ""));
                q(this).replaceWith(this.innerHTML)
            })
        }

        function x(c, e, d) {
            var f = b.node.deepestParent(c, [], !d);
            if (f && "BLOCKQUOTE" === f.tagName) {
                if (g(c, f)) {
                    var k = b.html.defaultTag();
                    e ? q(c).replaceWith("<br>" + a.MARKERS) : k ? q(f).after("<".concat(k, ">").concat(a.MARKERS, "<br></").concat(k, ">")) : q(f).after("".concat(a.MARKERS, "<br>"));
                    q(c).remove();
                    return !1
                }
                y(c, e, d);
                return !1
            }
            if (null === f)(k = b.html.defaultTag()) && b.node.isElement(c.parentNode) ? q(c).replaceWith("<".concat(k, ">").concat(a.MARKERS, "<br></").concat(k, ">")) : !c.previousSibling || q(c.previousSibling).is("br") || c.nextSibling ? q(c).replaceWith("<br>".concat(a.MARKERS)) : q(c).replaceWith("<br>".concat(a.MARKERS, "<br>"));
            else {
                var z = c;
                d = "";
                "PRE" != f.tagName || c.nextSibling || (e = !0);
                if (!b.node.isBlock(f) || e) d = "<br/>";
                var l = "",
                    u = "";
                k = b.html.defaultTag();
                var W = "",
                    H = "";
                k && b.node.isBlock(f) && (W = "<".concat(k, ">"), H = "</".concat(k, ">"), f.tagName === k.toUpperCase() && (W = b.node.openTagString(q(f).clone().removeAttr("id").get(0))));
                do
                    if (z = z.parentNode, !e || z !== f || e && !b.node.isBlock(f)) l += b.node.closeTagString(z), z === f && b.node.isBlock(f) ? u = W + u : (k = ("A" === z.tagName || b.node.hasClass(z, "fa")) && g(c, z) ? "fr-to-remove" : "", u = b.node.openTagString(q(z).clone().addClass(k).get(0)) + u); while (z !== f);
                d = l + d + u + (c.parentNode === f && b.node.isBlock(f) ? "" : a.INVISIBLE_SPACE) + a.MARKERS;
                b.node.isBlock(f) && !q(f).find("*").last().is("br") && q(f).append("<br/>");
                q(c).after('<span id="fr-break"></span>');
                q(c).remove();
                f.nextSibling && !b.node.isBlock(f.nextSibling) || b.node.isBlock(f) || q(f).after("<br>");
                c = !e && b.node.isBlock(f) ? b.node.openTagString(f) + q(f).html() + H : b.node.openTagString(f) + q(f).html() + b.node.closeTagString(f);
                c = c.replace(/<span id="fr-break"><\/span>/g, d);
                q(f).replaceWith(c)
            }
        }

        function C(c, e, d) {
            var f = b.node.deepestParent(c, [], !d);
            if (f && "TABLE" === f.tagName) return q(f).find("td, th").first().prepend(c), C(c, e, d);
            if (f && "BLOCKQUOTE" === f.tagName)
                if (k(c, f)) {
                    if (!e) return (e = b.html.defaultTag()) ? q(f).before("<".concat(e, ">").concat(a.MARKERS, "<br></").concat(e, ">")) : q(f).before("".concat(a.MARKERS, "<br>")), q(c).remove(), !1
                } else g(c, f) ? x(c, e, !0) : y(c, e, !0);
            if (null === f)(e = b.html.defaultTag()) && b.node.isElement(c.parentNode) ? q(c).replaceWith("<".concat(e, ">").concat(a.MARKERS, "<br></").concat(e, ">")) : q(c).replaceWith("<br>".concat(a.MARKERS));
            else {
                b.html.defaultTag();
                if (b.node.isBlock(f))
                    if ("PRE" === f.tagName && (e = !0), e) q(c).remove(), q(f).prepend("<br>".concat(a.MARKERS));
                    else if (c.nextSibling && "IMG" == c.nextSibling.tagName || c.nextSibling && c.nextSibling.nextElementSibling && "IMG" == c.nextSibling.nextElementSibling) q(c).replaceWith("<" + b.html.defaultTag() + ">" + a.MARKERS + "<br></" + b.html.defaultTag() + ">");
                else {
                    if (b.node.isEmpty(f, !0)) return x(c, e, d);
                    if (b.opts.keepFormatOnDelete || "DIV" === f.tagName || "div" === b.html.defaultTag())
                        if (!b.opts.keepFormatOnDelete && "DIV" === f.tagName || "div" === b.html.defaultTag()) q(f).before("<" +
                            b.html.defaultTag() + "><br></" + b.html.defaultTag() + ">");
                        else {
                            e = c;
                            for (d = a.INVISIBLE_SPACE; e !== f && !b.node.isElement(e);) e = e.parentNode, d = b.node.openTagString(e) + d + b.node.closeTagString(e);
                            q(f).before(d)
                        }
                    else q(f).before("".concat(b.node.openTagString(q(f).clone().removeAttr("id").get(0)), "<br>").concat(b.node.closeTagString(f)))
                } else q(f).before("<br>");
                q(c).remove()
            }
        }

        function y(c, e, d) {
            d = b.node.deepestParent(c, [], !d);
            if (null === d) b.html.defaultTag() && c.parentNode === b.el ? q(c).replaceWith("<".concat(b.html.defaultTag(), ">").concat(a.MARKERS, "<br></").concat(b.html.defaultTag(), ">")) : (c.nextSibling && !b.node.isBlock(c.nextSibling) || q(c).after("<br>"), q(c).replaceWith("<br>".concat(a.MARKERS)));
            else if (c.previousSibling && "IMG" == c.previousSibling.tagName || c.nextSibling && "IMG" == c.nextSibling.tagName) q(c).replaceWith("<" + b.html.defaultTag() + ">" + a.MARKERS + "<br></" + b.html.defaultTag() + ">");
            else {
                var f = c,
                    n = "";
                "PRE" === d.tagName && (e = !0);
                if (!b.node.isBlock(d) || e) n = "<br>";
                var z = "",
                    l = "";
                do {
                    var u = f;
                    f = f.parentNode;
                    "BLOCKQUOTE" === d.tagName && b.node.isEmpty(u) && !b.node.hasClass(u, "fr-marker") && q(u).contains(c) && q(u).after(c);
                    if ("BLOCKQUOTE" !== d.tagName || !g(c, f) && !k(c, f)) !e || f !== d || e && !b.node.isBlock(d) ? (z += b.node.closeTagString(f), u = "A" == f.tagName && g(c, f) || b.node.hasClass(f, "fa") ? "fr-to-remove" : "", l = b.node.openTagString(q(f).clone().addClass(u).removeAttr("id").get(0)) + l) : "BLOCKQUOTE" == d.tagName && e && (l = z = "")
                } while (f !== d);
                f = d === c.parentNode && b.node.isBlock(d) || c.nextSibling;
                "BLOCKQUOTE" === d.tagName ? (c.previousSibling && b.node.isBlock(c.previousSibling) && c.nextSibling && "BR" === c.nextSibling.tagName && (q(c.nextSibling).after(c), c.nextSibling && "BR" === c.nextSibling.tagName && q(c.nextSibling).remove()), e ? n = z + n + a.MARKERS + l : (e = b.html.defaultTag(), n = "".concat(z + n + (e ? "<".concat(e, ">") : "") + a.MARKERS, "<br>").concat(e ? "</".concat(e, ">") : "").concat(l))) : n = z + n + l + (f ? "" : a.INVISIBLE_SPACE) + a.MARKERS;
                q(c).replaceWith('<span id="fr-break"></span>');
                c = b.node.openTagString(d) + q(d).html() + b.node.closeTagString(d);
                c = c.replace(/<span id="fr-break"><\/span>/g, n);
                q(d).replaceWith(c)
            }
        }
        var q = b.$;
        return {
            enter: function(e) {
                var g = b.markers.insert();
                if (!g) return !0;
                for (var k = g.parentNode; k && !b.node.isElement(k);) {
                    if ("false" === k.getAttribute("contenteditable")) return q(g).replaceWith(a.MARKERS), b.selection.restore(), !1;
                    if ("true" === k.getAttribute("contenteditable")) break;
                    k = k.parentNode
                }
                b.el.normalize();
                k = !1;
                0 < q(g).parentsUntil(b.$el, "BLOCKQUOTE").length && (k = !0);
                q(g).parentsUntil(b.$el, "TD, TH").length && (k = !1);
                c(g) ? !f(g) || e || k ? x(g, e, k) : b.cursorLists._endEnter(g) : d(g) ? !f(g) || e || k ? C(g, e, k) : b.cursorLists._startEnter(g) : !f(g) || e || k ? y(g, e, k) : b.cursorLists._middleEnter(g);
                F();
                b.html.fillEmptyBlocks(!0);
                b.opts.htmlUntouched || (b.html.cleanEmptyTags(), b.clean.lists(), b.spaces.normalizeAroundCursor());
                b.selection.restore();
                b.$oel[0].offsetHeight > b.o_win.innerHeight && b.o_win.scroll(0, b.$oel[0].scrollHeight)
            },
            backspace: function() {
                var e = !1,
                    g = b.markers.insert();
                if (!g) return !0;
                for (var n = g.parentNode; n && !b.node.isElement(n);) {
                    if ("false" === n.getAttribute("contenteditable")) return q(g).replaceWith(a.MARKERS), b.selection.restore(), !1;
                    if (n.innerText.length && "true" === n.getAttribute("contenteditable")) break;
                    n = n.parentNode
                }
                b.el.normalize();
                if (n = g.previousSibling) {
                    var I = n.textContent;
                    I && I.length && 8203 === I.charCodeAt(I.length - 1) && (1 === I.length ? q(n).remove() : n.textContent = n.textContent.substr(0, I.length - A(I)))
                }
                if (c(g)) f(g) && k(g, q(g).parents("li").first().get(0)) ? b.cursorLists._backspace(g) : e = h(g);
                else if (d(g))
                    if (f(g) && k(g, q(g).parents("li").first().get(0))) b.cursorLists._backspace(g);
                    else {
                        n = 0 < q(g).parentsUntil(b.$el, "BLOCKQUOTE").length;
                        for (I = n = b.node.deepestParent(g, [], !n); n && !n.previousSibling && "BLOCKQUOTE" !== n.tagName && n.parentElement !== b.el && !b.node.hasClass(n.parentElement, "fr-inner") && 0 > a.SIMPLE_ENTER_TAGS.indexOf(n.parentElement.tagName);) n = n.parentElement;
                        if (n && "BLOCKQUOTE" === n.tagName) {
                            var r = b.node.deepestParent(g, [q(g).parentsUntil(b.$el, "BLOCKQUOTE").get(0)]);
                            r && r.previousSibling && (I = n = r)
                        }
                        if (null !== n && (r = n.previousSibling, b.node.isBlock(n) && b.node.isEditable(n)))
                            if (r && 0 > a.NO_DELETE_TAGS.indexOf(r.tagName))
                                if (b.node.isDeletable(r)) q(r).remove(), q(g).replaceWith(a.MARKERS);
                                else {
                                    if (b.node.isEditable(r))
                                        if (b.node.isBlock(r))
                                            if (b.node.isEmpty(r) && !b.node.isList(r)) q(r).remove(), q(g).after(b.opts.keepFormatOnDelete ? a.INVISIBLE_SPACE : "");
                                            else {
                                                b.node.isList(r) && (r = q(r).find("li").last().get(0));
                                                var z = b.node.contents(r);
                                                z.length && "BR" === z[z.length - 1].tagName && q(z[z.length - 1]).remove();
                                                if ("BLOCKQUOTE" === r.tagName && "BLOCKQUOTE" !== n.tagName)
                                                    for (z = b.node.contents(r); z.length && b.node.isBlock(z[z.length - 1]);) r = z[z.length - 1], z = b.node.contents(r);
                                                else if ("BLOCKQUOTE" !== r.tagName && "BLOCKQUOTE" === I.tagName)
                                                    for (z = b.node.contents(I); z.length && b.node.isBlock(z[0]);) I = z[0], z = b.node.contents(I);
                                                b.node.isEmpty(n) ? (q(g).remove(), b.selection.setAtEnd(r, !0)) : (q(g).replaceWith(a.MARKERS), z = r.childNodes, b.node.isBlock(z[z.length - 1]) ? q(z[z.length - 1]).append(I.innerHTML) : q(r).append(I.innerHTML));
                                                q(I).remove();
                                                b.node.isEmpty(n) && q(n).remove()
                                            }
                                    else q(g).replaceWith(a.MARKERS), "BLOCKQUOTE" === n.tagName && r.nodeType === Node.ELEMENT_NODE ? q(r).remove() : (q(r).after(b.node.isEmpty(n) ? "" : q(n).html()), q(n).remove(), "BR" === r.tagName && q(r).remove())
                                }
                        else r || (n && "BLOCKQUOTE" === n.tagName && 0 === q(n).text().replace(/\u200B/g, "").length ? q(n).remove() : b.node.isEmpty(n) && n.parentNode && b.node.isEditable(n.parentNode) && n.parentNode != b.el && q(n.parentNode).remove())
                    }
                else e = h(g);
                q(g).remove();
                E();
                b.html.fillEmptyBlocks(!0);
                b.opts.htmlUntouched || (b.html.cleanEmptyTags(), b.clean.lists(), b.spaces.normalizeAroundCursor());
                b.selection.restore();
                return e
            },
            del: function() {
                var e = b.markers.insert();
                if (!e) return !1;
                b.el.normalize();
                if (c(e))
                    if (f(e))
                        if (0 === q(e).parents("li").first().find("ul, ol").length) b.cursorLists._del(e);
                        else {
                            var g = q(e).parents("li").first().find("ul, ol").first().find("li").first();
                            g = g.find(b.html.blockTagsQuery()).get(-1) || g;
                            g.prepend(e);
                            b.cursorLists._backspace(e)
                        }
                else Z(e);
                else a: {
                    for (d(e), g = e; !g.nextSibling;)
                        if (g = g.parentNode, b.node.isElement(g)) break a;g = g.nextSibling;
                    if ("BR" === g.tagName && b.node.isEditable(g))
                        if (g.nextSibling) {
                            if (b.node.isBlock(g.nextSibling) && b.node.isEditable(g.nextSibling))
                                if (0 > a.NO_DELETE_TAGS.indexOf(g.nextSibling.tagName)) g = g.nextSibling, q(g.previousSibling).remove();
                                else {
                                    q(g).remove();
                                    break a
                                }
                        } else if (c(g)) {
                        f(e) ? b.cursorLists._del(e) : b.node.deepestParent(g) && ((!b.node.isEmpty(b.node.blockParent(g)) || 0 > (b.node.blockParent(g).nextSibling && a.NO_DELETE_TAGS.indexOf(b.node.blockParent(g).nextSibling.tagName))) && q(g).remove(), Z(e));
                        break a
                    }
                    var k;
                    if (!b.node.isBlock(g) && b.node.isEditable(g)) {
                        for (k = b.node.contents(g); g.nodeType !== Node.TEXT_NODE && k.length && !b.node.isDeletable(g) && b.node.isEditable(g);) g = k[0], k = b.node.contents(g);
                        g.nodeType === Node.TEXT_NODE ? (q(g).before(a.MARKERS), g.textContent.length && (g.textContent = g.textContent.substring(A(g.textContent, !0), g.textContent.length))) : b.node.isDeletable(g) ? (q(g).before(a.MARKERS), q(g).remove()) : !1 !== b.events.trigger("node.remove", [q(g)]) && (q(g).before(a.MARKERS), q(g).remove());
                        q(e).remove()
                    } else if (0 > a.NO_DELETE_TAGS.indexOf(g.tagName) && (b.node.isEditable(g) || b.node.isDeletable(g)))
                        if (b.node.isDeletable(g)) q(e).replaceWith(a.MARKERS), q(g).remove();
                        else if (b.node.isList(g)) e.previousSibling ? (q(g).find("li").first().prepend(e), b.cursorLists._backspace(e)) : (q(g).find("li").first().prepend(a.MARKERS), q(e).remove());
                    else if ((k = b.node.contents(g)) && "BR" === k[0].tagName && q(k[0]).remove(), k && "BLOCKQUOTE" === g.tagName) {
                        g = k[0];
                        for (q(e).before(a.MARKERS); g && "BR" !== g.tagName;) k = g, g = g.nextSibling, q(e).before(k);
                        g && "BR" === g.tagName && q(g).remove()
                    } else q(e).after(q(g).html()).after(a.MARKERS),
                    q(g).remove()
                }
                q(e).remove();
                E();
                b.html.fillEmptyBlocks(!0);
                b.opts.htmlUntouched || (b.html.cleanEmptyTags(), b.clean.lists());
                b.spaces.normalizeAroundCursor();
                b.selection.restore()
            },
            isAtEnd: g,
            isAtStart: k
        }
    };
    a.MODULES.data = function(b) {
        function a(a) {
            return a && "block" !== a.css("display") ? (a.remove(), !0) : a && 0 === b.helpers.getPX(a.css("height")) ? (a.remove(), !0) : !(!a || "absolute" !== a.css("position") && "fixed" !== a.css("position")) && (a.remove(), !0)
        }

        function c() {
            if (10 < fa && (b[q("0ppecjvc==")](), setTimeout(function() {
                    h.FE = null
                }, 10)), !b.$box) return !1;
            b.$wp.prepend(q(q(C)));
            t = b.$wp.find("> div").first();
            m = t.find("> a");
            "rtl" === b.opts.direction && t.css("left", "auto").css("right", 0).attr("direction", "rtl");
            fa++
        }

        function d(b) {
            var a = q("9qqG-7amjlwq=="),
                c = q("KA3B3C2A6D1D5H5H1A3=="),
                e = q("3B9B3B5F3C4G3E3=="),
                u = q("QzbzvxyB2yA-9m=="),
                g = q("ji1kacwmgG5bc=="),
                d = q("nmA-13aogi1A3c1jd=="),
                f = q("BA9ggq=="),
                k = q("emznbjbH3fij=="),
                n = q("tkC-22d1qC-13sD1wzF-7=="),
                P = q("tA3jjf=="),
                A = q("1D1brkm==");
            a = [a, c, e, u, g, d, f, k, n, P, A];
            for (c = 0; c < a.length; c++)
                if (String.prototype.endsWith || (String.prototype.endsWith = function(b, a) {
                        return (void 0 === a || a > this.length) && (a = this.length), this.substring(a - b.length, a) === b
                    }), b.endsWith(a[c])) return !0;
            return !1
        }

        function g(b) {
            b = (q(b) || "").split("|");
            return 4 === b.length && "V3" === b[0] ? [b[1], b[3], b[2]] : [null, null, ""]
        }

        function f(b) {
            return null === b || (0 == b.indexOf("TRIAL") ? (b = new Date(b.replace(/TRIAL/, "")), new Date(b) < new Date && (Z = E, !0)) : new Date(b) < new Date(q(x)))
        }

        function A() {
            var b = q(F),
                a = q("tzgatD-13eD1dtdrvmF3c1nrC-7saQcdav==").split(".");
            try {
                return window.parent.document.querySelector(b) && window[a[1]][a[2]]
            } catch (z) {
                return !1
            }
        }
        var h = b.$,
            Z = "sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2FC1A3NB2IF1HE1TH4WB8eB-11zVG2F3I3yYB5ZG4CB2DA15CC5AD3F1A1KG1oLA10B1A6wQF1H3vgale2C4F4XA2qc2A5D5B3pepmriKB3OE1HD1fUC10pjD-11E-11TB4YJ3bC-16zE-11yc1B2CE2BC3jhjKC1pdA-21OA6C1D5B-8vF4QA11pD6sqf1C3lldA-16BD4A2H3qoEA7bB-16rmNH5H1F1vSB7RE2A3TH4YC5A5b1A4d1B3whepyAC3AA2zknC3mbgf1SC4WH4PD8TC5ZB2C3H3jb2A5ZA2EF2aoFC5qqHC4B1H1zeGA7UA5RF4TA29TA6ZC4d1C3hyWA10A3rBB2E3decorationRD3QC10UD3E6E6ZD2F3F3fme2E5uxxrEC9C3E4fB-11azhHB1LD7D6VF4VVTPC6b1C4TYG3qzDD6B3B3AH4I2H2kxbHE1JD1yihfd1QD6WB1D4mhrc1B5rvFG3A14A7cDA2OC1AA1JB5zC-16KA6WB4C-8wvlTB5A5lkZB2C2C7zynBD2D2bI-7C-21d1HE2cubyvPC8A6VB3aroxxZE4C4F4e1I2BE1WjdifH1H4A14NA1GB1YG-10tWA3A14A9sVA2C5XH2A29b2A6gsleGG2jaED2D-13fhE1OA8NjwytyTD4e1sc1D-16ZC3B5C-9e1C2FB6EFF5B2C2JH4E1C2tdLE5A3UG4G-7b2D3B4fA-9oh1G3kqvB4AG3ibnjcAC6D2B1cDA9KC2QA6bRC4VA30RB8hYB2A4A-8h1A21A2B2==",
            E = "7D4YH4fkhHB3pqDC3H2E1fkMD1IB1NF1D3QD9wB5rxqlh1A8c2B4ZA3FD2AA6FB5EB3jJG4D2J-7aC-21GB6PC5RE4TC11QD6XC4XE3XH3mlvnqjbaOA2OC2BE6A1fmI-7ujwbc1G5f1F3e1C11mXF4owBG3E1yD1E4F1D2D-8B-8C-7yC-22HD1MF5UE4cWA3D8D6a1B2C3H3a3I3sZA4B3A2akfwEB3xHD5D1F1wIC11pA-16xdxtVI2C9A6YC4a1A2F3B2GA6B4C3lsjyJB1eMA1D-11MF5PE4ja1D3D7byrf1C3e1C7D-16lwqAF3H2A1B-21wNE1MA1OG1HB2A-16tSE5UD4RB3icRA4F-10wtwzBB3E1C3CC2DA8LA2LA1EB1kdH-8uVB7decorg1J2B7B6qjrqGI2J1C6ijehIB1hkemC-13hqkrH4H-7QD6XF5XF3HLNAC3CB2aD2CD2KB10B4ycg1A-8KA4H4B11jVB5TC4yqpB-21pd1E4pedzGB6MD5B3ncB-7MA4LD2JB6PD5uH-8TB9C7YD5XD2E3I3jmiDB3zeimhLD8E2F2JC1H-9ivkPC5lG-10SB1D3H3A-21rc1A3d1E3fsdqwfGA2KA1OrC-22LA6D1B4afUB16SC7AitC-8qYA11fsxcajGA15avjNE2A-9h1hDB16B9tPC1C5F5UC1G3B8d2A5d1D4RnHJ3C3JB5D3ucMG1yzD-17hafjC-8VD3yWC6e1YD2H3ZE2C8C5oBA3H3D2vFA4WzJC4C2i1A-65fNB8afWA1H4A26mvkC-13ZB3E3h1A21BC4eFB2GD2AA5ghqND2A2B2==",
            F = "MekC-11nB-8tIzpD7pewxvzC6mD-16xerg1==",
            x = "lC4B3A3B2B5A1C2E4G1A2==",
            C = "sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2EE1MA2ND1KD1IE4cA-21pSD2D5ve1G3h1A8b1E5ZC3CD2FA16mC5OC5E1hpnG1NA10B1D7hkUD4I-7b2C3C5nXD2E3F3whidEC2EH3GI2mJE2E2bxci1WA10VC7pllSG2F3A7xd1A4ZC3DB2aaeGA2DE4H2E1j1ywD-13FD1A3VE4WA3D8C6wuc1A2hf1B5B7vnrrjA1B9ic1mpbD1oMB1iSB7rWC4RI4G-7upB6jd1A2F3H2EA4FD3kDF4A2moc1anJD1TD4VI4b2C7oeQF4c1E3XC7ZA3C3G3uDB2wGB6D1JC4D1JD4C1hTE6QC5pH4pD3C-22D7c1A3textAA4gdlB2mpozkmhNC1mrxA3yWA5edhg1I2H3B7ozgmvAI3I2B5GD1LD2RSNH1KA1XA5SB4PA3sA9tlmC-9tnf1G3nd1coBH4I2I2JC3C-16LE6A1tnUA3vbwQB1G3f1A20a3A8a1C6pxAB2eniuE1F3kH2lnjB2hB-16XA5PF1G4zwtYA5B-11mzTG2B9pHB3BE2hGH3B3B2cMD5C1F1wzPA8E7VG5H5vD3H-7C8tyvsVF2I1G2A5fE3bg1mgajoyxMA4fhuzSD8aQB2B4g1A20ukb1A4B3F3GG2CujjanIC1ObiB11SD1C5pWC1D4YB8YE5FE-11jXE2F-7jB4CC2G-10uLH4E1C2tA-13yjUH5d1H1A7sWD5E4hmjF-7pykafoGA16hDD4joyD-8OA33B3C2tC7cRE4SA31a1B8d1e2A4F4g1A2A22CC5zwlAC2C1A12==",
            y = function() {
                for (var b = 0, a = document.domain, c = a.split("."), e = "_gd".concat((new Date).getTime()); b < c.length - 1 && -1 === document.cookie.indexOf("".concat(e, "=").concat(e));) a = c.slice(-1 - ++b).join("."), document.cookie = "".concat(e, "=").concat(e, ";domain=").concat(a, ";");
                return document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=").concat(a, ";"), (a || "").replace(/(^\.*)|(\.*$)/g, "")
            }(),
            q = function(b) {
                if (!b) return b;
                for (var a = "", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(b[0]), e = 1; e < b.length - 2; e++) {
                    var u = (++c).toString();
                    for (var g = 0, d = 0; d < u.length; d++) g += parseInt(u.charAt(d), 10);
                    u = 10 < g ? g % 9 + 1 : g;
                    var f = b.charCodeAt(e);
                    for (g = "";
                        /[0-9-]/.test(b[e + 1]);) g += b[++e];
                    g = parseInt(g, 10) || 0;
                    d = f;
                    for (f = Math.abs(g); 0 < f--;) d -= u;
                    f = (0 > g && (d += 123), d);
                    f ^= c - 1 & 31;
                    a += String.fromCharCode(f)
                }
                return a
            },
            t, m, fa = 0;
        return {
            _init: function() {
                var e = b.opts.key || [""],
                    k = q("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9==");
                "string" == typeof e && (e = [e]);
                b.ul = !0;
                for (var z = !1, l = 0, u = 0; u < e.length; u++) {
                    var W = g(e[u]),
                        H = W[2],
                        n = q(q("LGnD1KNZf1CPBYCAZB-8F3UDSLLSG1VFf1A3C2=="));
                    if (H === n || 0 <= H.indexOf(y, H.length - y.length) || d(y) || A()) {
                        if (!(f(W[1]) && 0 < (y || "").length) || d(y) || A()) {
                            b.ul = !1;
                            break
                        }
                        z = !0;
                        C = Z;
                        l = W[0] || -1
                    }
                }
                e = new Image;
                !0 === b.ul && (c(), e.src = z ? "".concat(q(k), "e=").concat(l) : "".concat(q(k), "u"));
                !0 === b.ul && (b.events.on("contentChanged", function() {
                    (a(t) || a(m) || t && 0 === b.$box.find(t).length || m && 0 === b.$box.find(m).length) && c()
                }), b.events.on("html.get", function(b) {
                    return b + q("qD2H-9G3ioD-17qA1tE1B-8qI3A4hA-13C-11E2C1njfldD1E6pg1C-8sC3hfbkcD2G3stC-22gqgB3G2B-7vtoA4nweeD1A31A15B9uC-16A1F5dkykdc1B8dE-11bA3F2D3A9gd1E7F2tlI-8H-7vtxB2A5B2C3B2F2B5A6ldbyC4iqC-22D-17E-13mA3D2dywiB3oxlvfC1H4C2TjqbzlnI3ntB4E3qA2zaqsC6D3pmnkoE3C6D5wvuE3bwifdhB6hch1E4xibD-17dmrC1rG-7pntnF6nB-8F1D2A11C8plrkmF2F3MC-16bocqA2WwA-21ayeA1C4d1isC-22rD-13D6DfjpjtC2E6hB2G2G4A-7D2==")
                }));
                b.events.on("html.set", function() {
                    var a = b.el.querySelector('[data-f-id="pbf"]');
                    a && h(a).remove()
                });
                b.events.on("destroy", function() {
                    t && t.length && t.remove()
                }, !0)
            }
        }
    };
    a.MODULES.edit = function(b) {
        function a() {
            if (b.browser.mozilla) try {
                b.doc.execCommand("enableObjectResizing", !1, "false"), b.doc.execCommand("enableInlineTableEditing", !1, "false")
            } catch (k) {}
            if (b.browser.msie) try {
                b.doc.body.addEventListener("mscontrolselect", function(b) {
                    b.srcElement.focus();
                    return !1
                })
            } catch (k) {}
        }
        var c = !1;
        return {
            _init: function() {
                b.events.on("focus", function() {
                    if (c) b.edit.off();
                    else b.edit.on()
                })
            },
            on: function() {
                b.$wp ? (b.$el.attr("contenteditable", !0), b.$el.removeClass("fr-disabled").attr("aria-disabled", !1), a()) : b.$el.is("a") && b.$el.attr("contenteditable", !0);
                b.events.trigger("edit.on", [], !0);
                c = !1
            },
            off: function() {
                b.events.disableBlur();
                b.$wp ? (b.$el.attr("contenteditable", !1), b.$el.addClass("fr-disabled").attr("aria-disabled", !0)) : b.$el.is("a") && b.$el.attr("contenteditable", !1);
                b.events.trigger("edit.off");
                b.events.enableBlur();
                c = !0
            },
            disableDesign: a,
            isDisabled: function() {
                return c
            }
        }
    };
    a.MODULES.format = function(b) {
        function c(b, a) {
            b = "<".concat(b);
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b += " ".concat(c, '="').concat(a[c], '"'));
            return b + ">"
        }

        function d(b, a) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b = "id" === c ? b + "#".concat(a[c]) : "class" === c ? b + ".".concat(a[c]) : b + "[".concat(c, '="').concat(a[c], '"]'));
            return b
        }

        function f(b, a) {
            return b && b.nodeType === Node.ELEMENT_NODE ? (b.matches || b.matchesSelector || b.msMatchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.oMatchesSelector).call(b, a) : !1
        }

        function g(a, e, d) {
            if (a) {
                for (; a.nodeType === Node.COMMENT_NODE;) a = a.nextSibling;
                if (a) {
                    if (b.node.isBlock(a) && "HR" !== a.tagName) return b.node.hasClass(a.firstChild, "fr-marker") ? g(a.firstChild.nextSibling, e, d) : g(a.firstChild, e, d), !1;
                    var f = m(b.doc.createElement(e));
                    f.attr(d);
                    f.insertBefore(a);
                    for (var l = a; l && !m(l).hasClass("fr-marker") && 0 === m(l).find(".fr-marker").length && "UL" !== l.tagName && "OL" !== l.tagName;) {
                        var u = l;
                        if (b.node.isBlock(l) && "HR" !== a.tagName) return g(l.firstChild, e, d), !1;
                        l = l.nextSibling;
                        f.append(u)
                    }
                    if (!l) {
                        for (l = f.get(0).parentNode; l && !l.nextSibling && !b.node.isElement(l);) l = l.parentNode;
                        l && (l = l.nextSibling) && (b.node.isBlock(l) ? "HR" === l.tagName ? g(l.nextSibling, e, d) : g(l.firstChild, e, d) : g(l, e, d))
                    } else if (m(l).find(".fr-marker").length || "UL" === l.tagName || "OL" === l.tagName) g(l.firstChild, e, d);
                    else if (b.browser.mozilla && b.node.hasClass(l, "fr-marker")) {
                        a = b.selection.blocks();
                        u = a.length;
                        var W;
                        for (W = 0; W < u; W++) a[W] != l.parentNode && a[W].childNodes.length && a[W].childNodes[0] != l.parentNode && (l = a[W].childNodes[1] || a[W].childNodes[0], f = m(c(e, d)).insertBefore(l), f.append(l))
                    }
                    f.is(":empty") && f.remove()
                }
            }
        }

        function I(e, k) {
            "undefined" === typeof k && (k = {});
            k.style && delete k.style;
            if (b.selection.isCollapsed()) b.markers.insert(), b.$el.find(".fr-marker").replaceWith(c(e, k) + a.INVISIBLE_SPACE + a.MARKERS + "</".concat(e, ">"));
            else {
                b.selection.save();
                var n = b.$el.find('.fr-marker[data-type="true"]').length && b.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling;
                g(n, e, k);
                do {
                    var z = b.$el.find("".concat(d(e, k), " > ").concat(d(e, k)));
                    for (n = 0; n < z.length; n++) z[n].outerHTML = z[n].innerHTML
                } while (z.length);
                b.el.normalize();
                z = b.el.querySelectorAll(".fr-marker");
                for (n = 0; n < z.length; n++) {
                    var l = m(z[n]);
                    !0 === l.data("type") ? f(l.get(0).nextSibling, d(e, k)) && l.next().prepend(l) : f(l.get(0).previousSibling, d(e, k)) && l.prev().append(l)
                }
            }
            b.selection.restore()
        }

        function A(a, c, e, g) {
            if (!g) {
                g = !1;
                if (!0 === a.data("type"))
                    for (; b.node.isFirstSibling(a.get(0)) && !a.parent().is(b.$el) && !a.parent().is("ol") && !a.parent().is("ul");) a.parent().before(a), g = !0;
                else if (!1 === a.data("type"))
                    for (; b.node.isLastSibling(a.get(0)) && !a.parent().is(b.$el) && !a.parent().is("ol") && !a.parent().is("ul");) a.parent().after(a), g = !0;
                if (g) return !0
            }
            if (a.parents(c).length || "undefined" === typeof c) {
                var l = "",
                    u = "";
                g = a.parent();
                if (g.is(b.$el) || b.node.isBlock(g.get(0))) return !1;
                for (; !(b.node.isBlock(g.parent().get(0)) || "undefined" !== typeof c && f(g.get(0), d(c, e)));) l += b.node.closeTagString(g.get(0)), u = b.node.openTagString(g.get(0)) + u, g = g.parent();
                c = a.get(0).outerHTML;
                a.replaceWith('<span id="mark"></span>');
                a = g.html().replace(/<span id="mark"><\/span>/, l + b.node.closeTagString(g.get(0)) + u + c + l + b.node.openTagString(g.get(0)) + u);
                g.replaceWith(b.node.openTagString(g.get(0)) + a + b.node.closeTagString(g.get(0)));
                return !0
            }
            return !1
        }

        function h(a, c, e, g) {
            a = b.node.contents(a.get(0));
            for (var l = 0; l < a.length; l++) {
                var u = a[l];
                u.innerHTML && 8203 == u.innerHTML.charCodeAt() && u.tagName.toLocaleLowerCase() == e && 2 > u.childNodes.length && (u.outerHTML = u.innerHTML);
                if (b.node.hasClass(u, "fr-marker")) c = (c + 1) % 2;
                else if (c)
                    if (0 < m(u).find(".fr-marker").length) c = h(m(u), c, e, g);
                    else {
                        for (var z = m(u).find(e || "*:not(br)"), H = z.length - 1; 0 <= H; H--) {
                            var k = z[H];
                            b.node.isBlock(k) || b.node.isVoid(k) || "undefined" !== typeof e && !f(k, d(e, g)) ? b.node.isBlock(k) && "undefined" === typeof e && "TABLE" !== u.tagName && b.node.clearAttributes(k) : b.node.hasClass(k, "fr-clone") || (k.outerHTML = k.innerHTML)
                        }
                        "undefined" === typeof e && u.nodeType === Node.ELEMENT_NODE && !b.node.isVoid(u) || f(u, d(e, g)) ? b.node.isBlock(u) || b.node.hasClass(u, "fr-clone") || (u.outerHTML = u.innerHTML) : "undefined" === typeof e && u.nodeType === Node.ELEMENT_NODE && b.node.isBlock(u) && "TABLE" !== u.tagName && b.node.clearAttributes(u)
                    }
                else 0 < m(u).find(".fr-marker").length && (c = h(m(u), c, e, g))
            }
            return c
        }

        function Z(c, e) {
            "undefined" === typeof e && (e = {});
            e.style && delete e.style;
            var g = b.selection.isCollapsed();
            b.selection.save();
            for (var d = !0; d;) {
                d = !1;
                for (var l = b.$el.find(".fr-marker"), u = 0; u < l.length; u++) {
                    var f = m(l[u]),
                        H = null;
                    f.attr("data-cloned") || g || (H = f.clone().removeClass("fr-marker").addClass("fr-clone"), f.data("type") && "true" === f.data("type").toString() ? f.attr("data-cloned", !0).after(H) : f.attr("data-cloned", !0).before(H));
                    if (A(f, c, e, g)) {
                        d = !0;
                        break
                    }
                }
            }
            h(b.$el, 0, c, e);
            g || (b.$el.find(".fr-marker").remove(), b.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker"));
            g && b.$el.find(".fr-marker").before(a.INVISIBLE_SPACE).after(a.INVISIBLE_SPACE);
            b.html.cleanEmptyTags();
            b.el.normalize();
            b.selection.restore();
            if (c = b.win.getSelection() && b.win.getSelection().anchorNode)
                if (e = b.node.blockParent(c), g = c.textContent.replace(/\u200B/g, "").length ? !0 : !1, l = b.win.getSelection().getRangeAt(0), d = l.startOffset, l = l.endOffset, b.selection.text().replace(/\u200B/g, "").length || E(e, c), e = b.win.getSelection().getRangeAt(0), c.nodeType === Node.TEXT_NODE) {
                    if (!g || !b.selection.text().length && d === l) {
                        var k = c.textContent.search(/\u200B/g) + 1;
                        b.browser.msie ? (e = b.doc.createRange(), b.selection.get().removeAllRanges(), e.setStart(c, k), e.setEnd(c, k), b.selection.get().addRange(e)) : (e.setStart(c, k), e.setEnd(c, k))
                    }
                } else {
                    g = 0;
                    d = m(c).contents();
                    if (b.browser.msie) {
                        for (; c = d[g];) c.nodeType === Node.TEXT_NODE && 0 <= c.textContent.search(/\u200B/g) && (k = c), g++;
                        k = m(k)
                    } else k = d.filter(function(b) {
                        return b.nodeType === Node.TEXT_NODE && 0 <= b.textContent.search(/\u200B/g)
                    });
                    k.length && (c = k.text().search(/\u200B/g) + 1, e.setStart(k.get(0), c), e.setEnd(k.get(0), c))
                }
        }

        function E(b, a) {
            if (b && a)
                if (b.isSameNode(a) ? b.textContent = b.textContent.replace(/\u200B(?=.*\u200B)/g, "") : b.nodeType === Node.TEXT_NODE && (b.textContent = b.textContent.replace(/\u200B/g, "")), b.childNodes.length) Array.isArray(b.childNodes) && b.childNodes.forEach(function(b) {
                    E(b, a)
                });
                else return !1
        }

        function F(b, a) {
            b = m(b);
            b.css(a, "");
            "" === b.attr("style") && b.replaceWith(b.html())
        }

        function x(b, a) {
            return 0 === m(b).attr("style").indexOf("".concat(a, ":")) || 0 <= m(b).attr("style").indexOf(";".concat(a, ":")) || 0 <= m(b).attr("style").indexOf("; ".concat(a, ":"))
        }

        function C(c, e) {
            var d = null;
            if (b.selection.isCollapsed()) {
                b.markers.insert();
                var f = b.$el.find(".fr-marker");
                var l = f.parent();
                b.node.openTagString(l.get(0)) === '<span style="'.concat(c, ": ").concat(l.css(c), ';">') ? (b.node.isEmpty(l.get(0)) ? (d = m(b.doc.createElement("span")).attr("style", "".concat(c, ": ").concat(e, ";")).html("".concat(a.INVISIBLE_SPACE).concat(a.MARKERS)), l.replaceWith(d)) : (l = {}, l["style*"] = "".concat(c, ":"), A(f, "span", l, !0), f = b.$el.find(".fr-marker"), e ? (d = m(b.doc.createElement("span")).attr("style", "".concat(c, ": ").concat(e, ";")).html("".concat(a.INVISIBLE_SPACE).concat(a.MARKERS)), f.replaceWith(d)) : f.replaceWith(a.INVISIBLE_SPACE + a.MARKERS)), b.html.cleanEmptyTags()) : b.node.isEmpty(l.get(0)) && l.is("span") ? (f.replaceWith(a.MARKERS), l.css(c, e)) : (d = m('<span style="'.concat(c, ": ").concat(e, ';">').concat(a.INVISIBLE_SPACE).concat(a.MARKERS, "</span>")), f.replaceWith(d));
                d && y(d, c, e)
            } else {
                b.selection.save();
                if (null === e || "color" === c && 0 < b.$el.find(".fr-marker").parents("u, a").length)
                    for (d = b.$el.find(".fr-marker"), l = 0; l < d.length; l++)
                        if (f = m(d[l]), !0 === f.data("type") || "true" === f.data("type"))
                            for (; b.node.isFirstSibling(f.get(0)) && !f.parent().is(b.$el) && !b.node.isElement(f.parent().get(0)) && !b.node.isBlock(f.parent().get(0));) f.parent().before(f);
                        else
                            for (; b.node.isLastSibling(f.get(0)) && !f.parent().is(b.$el) && !b.node.isElement(f.parent().get(0)) && !b.node.isBlock(f.parent().get(0));) f.parent().after(f);
                for (d = b.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling; d.firstChild;) d = d.firstChild;
                f = {
                    "class": "fr-unprocessed"
                };
                e && (f.style = "".concat(c, ": ").concat(e, ";"));
                g(d, "span", f);
                b.$el.find(".fr-marker + .fr-unprocessed").each(function() {
                    m(this).prepend(m(this).prev())
                });
                b.$el.find(".fr-unprocessed + .fr-marker").each(function() {
                    m(this).prev().append(m(this))
                });
                for ((e || "").match(/\dem$/) && b.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed"); 0 < b.$el.find("span.fr-unprocessed").length;) {
                    d = b.$el.find("span.fr-unprocessed").first().removeClass("fr-unprocessed");
                    d.parent().get(0).normalize();
                    d.parent().is("span") && 1 === d.parent().get(0).childNodes.length && (d.parent().css(c, e), f = d, d = d.parent(), f.replaceWith(f.html()));
                    f = d.find("span");
                    for (l = f.length - 1; 0 <= l; l--) F(f[l], c);
                    y(d, c, e)
                }
            }
            q()
        }

        function y(a, c, e) {
            var d, l = a.parentsUntil(b.$el, "span[style]"),
                u = [];
            for (d = l.length - 1; 0 <= d; d--) x(l[d], c) || u.push(l[d]);
            l = l.not(u);
            if (l.length) {
                var g = u = d = "",
                    f = "",
                    k = a.get(0);
                do k = k.parentNode, m(k).addClass("fr-split"), d += b.node.closeTagString(k), u = b.node.openTagString(m(k).clone().addClass("fr-split").get(0)) + u, l.get(0) !== k && (g += b.node.closeTagString(k), f = b.node.openTagString(m(k).clone().addClass("fr-split").get(0)) + f); while (l.get(0) !== k);
                var n = "".concat(d + b.node.openTagString(m(l.get(0)).clone().css(c, e || "").get(0)) + f + a.css(c, "").get(0).outerHTML + g, "</span>").concat(u);
                a.replaceWith('<span id="fr-break"></span>');
                a = l.get(0).outerHTML;
                m(l.get(0)).replaceWith(a.replace(/<span id="fr-break"><\/span>/g, function() {
                    return n
                }))
            }
        }

        function q() {
            for (var a; 0 < b.$el.find(".fr-split:empty").length;) b.$el.find(".fr-split:empty").remove();
            b.$el.find(".fr-split").removeClass("fr-split");
            b.$el.find('[style=""]').removeAttr("style");
            b.$el.find('[class=""]').removeAttr("class");
            b.html.cleanEmptyTags();
            a = b.$el.find("span");
            for (var c = a.length - 1; 0 <= c; c--) {
                var e = a[c];
                e.attributes && 0 !== e.attributes.length || m(e).replaceWith(e.innerHTML)
            }
            b.el.normalize();
            c = b.$el.find("span[style] + span[style]");
            for (a = 0; a < c.length; a++) {
                e = m(c[a]);
                var d = m(c[a]).prev();
                e.get(0).previousSibling === d.get(0) && b.node.openTagString(e.get(0)) === b.node.openTagString(d.get(0)) && (e.prepend(d.html()), d.remove())
            }
            b.$el.find("span[style] span[style]").each(function() {
                if (0 <= m(this).attr("style").indexOf("font-size")) {
                    var b = m(this).parents("span[style]");
                    0 <= b.attr("style").indexOf("background-color") && (m(this).attr("style", "".concat(m(this).attr("style"), ";").concat(b.attr("style"))), A(m(this), "span[style]", {}, !1))
                }
            });
            b.el.normalize();
            b.selection.restore()
        }

        function t(a, c) {
            "undefined" === typeof c && (c = {});
            c.style && delete c.style;
            var e = b.selection.ranges(0),
                g = e.startContainer;
            g.nodeType === Node.ELEMENT_NODE && 0 < g.childNodes.length && g.childNodes[e.startOffset] && (g = g.childNodes[e.startOffset]);
            if (!e.collapsed && g.nodeType === Node.TEXT_NODE && e.startOffset === (g.textContent || "").length) {
                for (; !b.node.isBlock(g.parentNode) && !g.nextSibling;) g = g.parentNode;
                g.nextSibling && (g = g.nextSibling)
            }
            for (e = g; e && e.nodeType === Node.ELEMENT_NODE && !f(e, d(a, c));) e = e.firstChild;
            if (e && e.nodeType === Node.ELEMENT_NODE && f(e, d(a, c))) return !0;
            g && g.nodeType !== Node.ELEMENT_NODE && (g = g.parentNode);
            for (; g && g.nodeType === Node.ELEMENT_NODE && g !== b.el && !f(g, d(a, c));) g = g.parentNode;
            return g && g.nodeType === Node.ELEMENT_NODE && g !== b.el && f(g, d(a, c)) ? !0 : !1
        }
        var m = b.$;
        return {
            is: t,
            toggle: function(b, a) {
                t(b, a) ? Z(b, a) : I(b, a)
            },
            apply: I,
            remove: Z,
            applyStyle: C,
            removeStyle: function(b) {
                C(b, null)
            }
        }
    };
    a.MODULES.spaces = function(b) {
        function c(c, e) {
            var d = c.previousSibling,
                g = c.nextSibling,
                f = c.textContent,
                k = c.parentNode,
                n = ["P", "DIV", "BR"],
                F = [a.ENTER_P, a.ENTER_DIV, a.ENTER_BR];
            if (!b.html.isPreformatted(k)) {
                if (e) {
                    f = f.replace(/[\f\n\r\t\v ]{2,}/g, " ");
                    g && "BR" !== g.tagName && !b.node.isBlock(g) || !(b.node.isBlock(k) || b.node.isLink(k) && !k.nextSibling || b.node.isElement(k)) || (f = f.replace(/[\f\n\r\t\v ]{1,}$/g, ""));
                    d && "BR" !== d.tagName && !b.node.isBlock(d) || !(b.node.isBlock(k) || b.node.isLink(k) && !k.previousSibling || b.node.isElement(k)) || (f = f.replace(/^[\f\n\r\t\v ]{1,}/g, ""));
                    if (b.node.isBlock(g) || b.node.isBlock(d)) f = f.replace(/^[\f\n\r\t\v ]{1,}/g, "");
                    " " !== f || !(d && b.node.isVoid(d) || g && b.node.isVoid(g)) || d && g && b.node.isVoid(d) || g && d && b.node.isVoid(g) || (f = "")
                }(!d && b.node.isBlock(g) || !g && b.node.isBlock(d)) && b.node.isBlock(k) && k !== b.el && (f = f.replace(/^[\f\n\r\t\v ]{1,}/g, ""));
                e || (f = f.replace(new RegExp(a.UNICODE_NBSP, "g"), " "));
                k = "";
                for (var h = 0; h < f.length; h++) k = 32 != f.charCodeAt(h) || 0 !== h && 32 != k.charCodeAt(h - 1) || (b.opts.enter !== a.ENTER_BR && b.opts.enter !== a.ENTER_DIV || !(d && "BR" === d.tagName || g && "BR" === g.tagName)) && (d && g && b.node.isVoid(d) || d && g && b.node.isVoid(g)) ? k + f[h] : k + a.UNICODE_NBSP;
                if (!g || g && b.node.isBlock(g) || g && g.nodeType === Node.ELEMENT_NODE && b.win.getComputedStyle(g) && "block" === b.win.getComputedStyle(g).display)
                    if (!b.node.isVoid(d) || d && -1 !== n.indexOf(d.tagName) && -1 !== F.indexOf(b.opts.enter)) k = k.replace(/ $/, a.UNICODE_NBSP);
                !d || b.node.isVoid(d) || b.node.isBlock(d) || (k = k.replace(/^\u00A0([^ $])/, " $1"), 1 !== k.length || 160 !== k.charCodeAt(0) || !g || b.node.isVoid(g) || b.node.isBlock(g) || b.node.hasClass(d, "fr-marker") && b.node.hasClass(g, "fr-marker") || (k = " "));
                e || (k = k.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g, "$1 $2"));
                c.textContent !== k && (c.textContent = k)
            }
        }

        function d(a, e) {
            "undefined" !== typeof a && a || (a = b.el);
            "undefined" === typeof e && (e = !1);
            if (!a.getAttribute || "false" !== a.getAttribute("contenteditable"))
                if (a.nodeType === Node.TEXT_NODE) c(a, e);
                else if (a.nodeType === Node.ELEMENT_NODE)
                for (a = b.doc.createTreeWalker(a, NodeFilter.SHOW_TEXT, b.node.filter(function(a) {
                        for (var c = a.parentNode; c && c !== b.el;)
                            if ("STYLE" !== c.tagName && "IFRAME" !== c.tagName && "PRE" !== c.tagName) c = c.parentNode;
                            else return !1;
                        return null !== a.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g) && !b.node.hasClass(a.parentNode, "fr-marker")
                    }), !1); a.nextNode();) c(a.currentNode, e)
        }
        return {
            normalize: d,
            normalizeAroundCursor: function() {
                for (var a = [], c = b.el.querySelectorAll(".fr-marker"), e = 0; e < c.length; e++) {
                    var f = (f = b.node.blockParent(c[e])) ? f : c[e];
                    for (var n = f.nextSibling, h = f.previousSibling; n && "BR" === n.tagName;) n = n.nextSibling;
                    for (; h && "BR" === h.tagName;) h = h.previousSibling;
                    f && 0 > a.indexOf(f) && a.push(f);
                    h && 0 > a.indexOf(h) && a.push(h);
                    n && 0 > a.indexOf(n) && a.push(n)
                }
                for (c = 0; c < a.length; c++) d(a[c])
            }
        }
    };
    a.INVISIBLE_SPACE = "&#8203;";
    a.START_MARKER = '<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'.concat(a.INVISIBLE_SPACE, "</span>");
    a.END_MARKER = '<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'.concat(a.INVISIBLE_SPACE, "</span>");
    a.MARKERS = a.START_MARKER + a.END_MARKER;
    a.MODULES.markers = function(b) {
        function c(c, e) {
            var d = g(b.doc.createElement("SPAN"));
            d.addClass("fr-marker").attr("data-id", e).attr("data-type", c).attr("style", "display: ".concat(b.browser.safari ? "none" : "inline-block", "; line-height: 0;")).html(a.INVISIBLE_SPACE);
            return d.get(0)
        }

        function d() {
            if (!b.$wp) return null;
            try {
                var c = b.selection.ranges(0),
                    e = c.commonAncestorContainer;
                if (e !== b.el && !b.$el.contains(e)) return null;
                var d = c.cloneRange(),
                    f = c.cloneRange();
                d.collapse(!0);
                var k = g(b.doc.createElement("SPAN")).addClass("fr-marker").attr("style", "display: none; line-height: 0;").html(a.INVISIBLE_SPACE).get(0);
                d.insertNode(k);
                if (k = b.$el.find("span.fr-marker").get(0)) {
                    for (var n = k.nextSibling; n && n.nodeType === Node.TEXT_NODE && 0 === n.textContent.length;) g(n).remove(), n = b.$el.find("span.fr-marker").get(0).nextSibling;
                    b.selection.clear();
                    b.selection.get().addRange(f);
                    return k
                }
                return null
            } catch (na) {
                console.warn("MARKER", na)
            }
        }

        function f() {
            b.$el.find(".fr-marker").remove()
        }
        var g = b.$;
        return {
            place: function(a, e, d) {
                var f;
                try {
                    var k = a.cloneRange();
                    k.collapse(e);
                    k.insertNode(c(e, d));
                    if (!0 === e) {
                        var n = b.$el.find('span.fr-marker[data-type="true"][data-id="'.concat(d, '"]')).get(0);
                        for (f = n.nextSibling; f && f.nodeType === Node.TEXT_NODE && 0 === f.textContent.length;) g(f).remove(), f = n.nextSibling
                    }
                    if (!0 === e && !a.collapsed) {
                        for (; !b.node.isElement(n.parentNode) && !f;) - 1 < /\bfa\b/g.test(n.parentNode.className) && "I" === n.parentNode.tagName ? g(n.parentNode).before(n) : g(n.parentNode).after(n), f = n.nextSibling;
                        if (f && f.nodeType === Node.ELEMENT_NODE && b.node.isBlock(f) && "HR" !== f.tagName) {
                            var A = [f];
                            do f = A[0], A = b.node.contents(f); while (A[0] && b.node.isBlock(A[0]));
                            g(f).prepend(g(n))
                        }
                    }
                    if (!1 === e && !a.collapsed) {
                        n = b.$el.find('span.fr-marker[data-type="false"][data-id="'.concat(d, '"]')).get(0);
                        if ((f = n.previousSibling) && f.nodeType === Node.ELEMENT_NODE && b.node.isBlock(f) && "HR" !== f.tagName) {
                            A = [f];
                            do f = A[A.length - 1], A = b.node.contents(f); while (A[A.length - 1] && b.node.isBlock(A[A.length - 1]));
                            g(f).append(g(n))
                        }
                        if (n.parentNode && 0 <= ["TD", "TH"].indexOf(n.parentNode.tagName) || !n.previousSibling && b.node.isBlock(n.parentElement)) n.parentNode.previousSibling && !n.previousSibling ? g(n.parentNode.previousSibling).append(n) : 0 <= ["TD", "TH"].indexOf(n.parentNode.tagName) && n.parentNode.firstChild === n && (n.parentNode.previousSibling ? g(n.parentNode.previousSibling).append(n) : n.parentNode.parentNode && n.parentNode.parentNode.previousSibling && g(n.parentNode.parentNode.previousSibling).append(n))
                    }
                    var I = b.$el.find('span.fr-marker[data-type="'.concat(e, '"][data-id="').concat(d, '"]')).get(0);
                    I && (I.style.display = "none");
                    return I
                } catch (va) {
                    return null
                }
            },
            insert: d,
            split: function() {
                b.selection.isCollapsed() || b.selection.remove();
                var a = b.$el.find(".fr-marker").get(0);
                a || (a = d());
                if (!a) return null;
                var c = b.node.deepestParent(a);
                c || (c = b.node.blockParent(a)) && "LI" !== c.tagName && (c = null);
                if (c)
                    if (b.node.isBlock(c) && b.node.isEmpty(c)) "LI" !== c.tagName || c.parentNode.firstElementChild !== c || b.node.isEmpty(c.parentNode) ? g(c).replaceWith('<span class="fr-marker"></span>') : g(c).append('<span class="fr-marker"></span>');
                    else if (b.cursor.isAtStart(a, c)) g(c).before('<span class="fr-marker"></span>'), g(a).remove();
                else if (b.cursor.isAtEnd(a, c)) g(c).after('<span class="fr-marker"></span>'), g(a).remove();
                else {
                    var e = a,
                        f = "",
                        k = "";
                    do e = e.parentNode, f += b.node.closeTagString(e), k = b.node.openTagString(e) + k; while (e !== c);
                    g(a).replaceWith('<span id="fr-break"></span>');
                    a = b.node.openTagString(c) + g(c).html() + b.node.closeTagString(c);
                    a = a.replace(/<span id="fr-break"><\/span>/g, "".concat(f, '<span class="fr-marker"></span>').concat(k));
                    g(c).replaceWith(a)
                }
                return b.$el.find(".fr-marker").get(0)
            },
            insertAtPoint: function(a) {
                var c = a.clientX,
                    e = a.clientY;
                f();
                a = null;
                if ("undefined" !== typeof b.doc.caretPositionFromPoint) {
                    var g = b.doc.caretPositionFromPoint(c, e);
                    a = b.doc.createRange();
                    a.setStart(g.offsetNode, g.offset);
                    a.setEnd(g.offsetNode, g.offset)
                } else "undefined" !== typeof b.doc.caretRangeFromPoint && (g = b.doc.caretRangeFromPoint(c, e), a = b.doc.createRange(), a.setStart(g.startContainer, g.startOffset), a.setEnd(g.startContainer, g.startOffset));
                if (null !== a && "undefined" !== typeof b.win.getSelection) c = b.win.getSelection(), c.removeAllRanges(), c.addRange(a);
                else if ("undefined" !== typeof b.doc.body.createTextRange) try {
                    a = b.doc.body.createTextRange();
                    a.moveToPoint(c, e);
                    var k = a.duplicate();
                    k.moveToPoint(c, e);
                    a.setEndPoint("EndToEnd", k);
                    a.select()
                } catch (F) {
                    return !1
                }
                d()
            },
            remove: f
        }
    };
    a.MODULES.selection = function(b) {
        function c() {
            var a = "";
            b.win.getSelection ? a = b.win.getSelection() : b.doc.getSelection ? a = b.doc.getSelection() : b.doc.selection && (a = b.doc.selection.createRange().text);
            return a.toString()
        }

        function d() {
            return b.win.getSelection ? b.win.getSelection() : b.doc.getSelection ? b.doc.getSelection() : b.doc.selection.createRange()
        }

        function f(a) {
            var c = d();
            if (c && c.getRangeAt && c.rangeCount) {
                var e = [];
                for (var g = 0; g < c.rangeCount; g++) e.push(c.getRangeAt(g))
            } else e = b.doc.createRange ? [b.doc.createRange()] : [];
            return "undefined" !== typeof a ? e[a] : e
        }

        function g() {
            var b = d();
            try {
                b.removeAllRanges ? b.removeAllRanges() : b.empty ? b.empty() : b.clear && b.clear()
            } catch (l) {}
        }

        function I(b, a) {
            b.nodeType === Node.ELEMENT_NODE && 0 < b.childNodes.length && b.childNodes[a] && (b = b.childNodes[a]);
            b.nodeType === Node.TEXT_NODE && (b = b.parentNode);
            return b
        }

        function A() {
            if (b.$wp) {
                b.markers.remove();
                var a = f(),
                    c = [],
                    e;
                for (e = 0; e < a.length; e++)
                    if (a[e].startContainer !== b.doc || b.browser.msie) {
                        var d = a[e];
                        var g = d.collapsed,
                            k = b.markers.place(d, !0, e),
                            n = b.markers.place(d, !1, e);
                        "undefined" !== typeof k && k || !g || (r(".fr-marker").remove(), b.selection.setAtEnd(b.el));
                        b.el.normalize();
                        if (b.browser.safari && !g) try {
                            d = b.doc.createRange(), d.setStartAfter(k), d.setEndBefore(n), c.push(d)
                        } catch (K) {}
                    }
                if (b.browser.safari && c.length)
                    for (b.selection.clear(), e = 0; e < c.length; e++) b.selection.get().addRange(c[e])
            }
        }

        function h() {
            var a, c = b.el.querySelectorAll('.fr-marker[data-type="true"]');
            if (!b.$wp) return b.markers.remove(), !1;
            if (0 === c.length) return !1;
            if (b.browser.msie || b.browser.edge)
                for (a = 0; a < c.length; a++) c[a].style.display = "inline-block";
            b.core.hasFocus() || b.browser.msie || b.browser.webkit || b.$el.focus();
            g();
            var e = d();
            for (a = 0; a < c.length; a++) {
                var f = r(c[a]).data("id"),
                    H = c[a],
                    k = b.doc.createRange();
                f = b.$el.find('.fr-marker[data-type="false"][data-id="'.concat(f, '"]'));
                (b.browser.msie || b.browser.edge) && f.css("display", "inline-block");
                var n = null;
                if (0 < f.length) {
                    f = f[0];
                    try {
                        for (var K = !1, P = H.nextSibling, A = null; P && P.nodeType === Node.TEXT_NODE && 0 === P.textContent.length;) A = P, P = P.nextSibling, r(A).remove();
                        for (var I = f.nextSibling; I && I.nodeType === Node.TEXT_NODE && 0 === I.textContent.length;) A = I, I = I.nextSibling, r(A).remove();
                        if (H.nextSibling === f || f.nextSibling === H) {
                            for (var q = H.nextSibling === f ? H : f, h = q === H ? f : H, F = q.previousSibling; F && F.nodeType === Node.TEXT_NODE && 0 === F.length;) A = F, F = F.previousSibling, r(A).remove();
                            if (F && F.nodeType === Node.TEXT_NODE)
                                for (; F && F.previousSibling && F.previousSibling.nodeType === Node.TEXT_NODE;) F.previousSibling.textContent += F.textContent, F = F.previousSibling, r(F.nextSibling).remove();
                            for (var E = h.nextSibling; E && E.nodeType === Node.TEXT_NODE && 0 === E.length;) A = E, E = E.nextSibling, r(A).remove();
                            if (E && E.nodeType === Node.TEXT_NODE)
                                for (; E && E.nextSibling && E.nextSibling.nodeType === Node.TEXT_NODE;) E.nextSibling.textContent = E.textContent + E.nextSibling.textContent, E = E.nextSibling, r(E.previousSibling).remove();
                            F && (b.node.isVoid(F) || b.node.isBlock(F)) && (F = null);
                            E && (b.node.isVoid(E) || b.node.isBlock(E)) && (E = null);
                            if (F && E && F.nodeType === Node.TEXT_NODE && E.nodeType === Node.TEXT_NODE) {
                                r(H).remove();
                                r(f).remove();
                                var m = F.textContent.length;
                                F.textContent += E.textContent;
                                r(E).remove();
                                b.opts.htmlUntouched || b.spaces.normalize(F);
                                k.setStart(F, m);
                                k.setEnd(F, m);
                                K = !0
                            } else !F && E && E.nodeType === Node.TEXT_NODE ? (r(H).remove(), r(f).remove(), b.opts.htmlUntouched || b.spaces.normalize(E), n = r(b.doc.createTextNode("\u200b")).get(0), r(E).before(n), k.setStart(E, 0), k.setEnd(E, 0), K = !0) : !E && F && F.nodeType === Node.TEXT_NODE && (r(H).remove(), r(f).remove(), b.opts.htmlUntouched || b.spaces.normalize(F), n = r(b.doc.createTextNode("\u200b")).get(0), r(F).after(n), k.setStart(F, F.textContent.length), k.setEnd(F, F.textContent.length), K = !0)
                        }
                        K || (A = K = void 0, (b.browser.chrome || b.browser.edge) && H.nextSibling === f ? (K = x(f, k, !0) || k.setStartAfter(f), A = x(H, k, !1) || k.setEndBefore(H)) : (H.previousSibling === f && (H = f, f = H.nextSibling), f.nextSibling && "BR" === f.nextSibling.tagName || !f.nextSibling && b.node.isBlock(H.previousSibling) || H.previousSibling && "BR" === H.previousSibling.tagName || (H.style.display = "inline", f.style.display = "inline", n = r(b.doc.createTextNode("\u200b")).get(0)), K = x(H, k, !0) || r(H).before(n) && k.setStartBefore(H), A = x(f, k, !1) || r(f).after(n) && k.setEndAfter(f)), "function" === typeof K && K(), "function" === typeof A && A())
                    } catch (B) {
                        console.warn("RESTORE RANGE", B)
                    }
                }
                n && r(n).remove();
                try {
                    e.addRange(k)
                } catch (B) {
                    console.warn("ADD RANGE", B)
                }
            }
            b.markers.remove()
        }

        function x(a, c, e) {
            var d = a.previousSibling,
                f = a.nextSibling;
            if (d && f && d.nodeType === Node.TEXT_NODE && f.nodeType === Node.TEXT_NODE) {
                var g = d.textContent.length;
                if (e) return f.textContent = d.textContent + f.textContent, r(d).remove(), r(a).remove(), b.opts.htmlUntouched || b.spaces.normalize(f),
                    function() {
                        c.setStart(f, g)
                    };
                d.textContent += f.textContent;
                r(f).remove();
                r(a).remove();
                b.opts.htmlUntouched || b.spaces.normalize(d);
                return function() {
                    c.setEnd(d, g)
                }
            }
            if (d && !f && d.nodeType === Node.TEXT_NODE) {
                g = d.textContent.length;
                if (e) return b.opts.htmlUntouched || b.spaces.normalize(d),
                    function() {
                        c.setStart(d, g)
                    };
                b.opts.htmlUntouched || b.spaces.normalize(d);
                return function() {
                    c.setEnd(d, g)
                }
            }
            if (f && !d && f.nodeType === Node.TEXT_NODE) {
                if (e) return b.opts.htmlUntouched || b.spaces.normalize(f),
                    function() {
                        c.setStart(f, 0)
                    };
                b.opts.htmlUntouched || b.spaces.normalize(f);
                return function() {
                    c.setEnd(f, 0)
                }
            }
            return !1
        }

        function E() {
            for (var a = b.$el.find(".fr-marker"), c = 0; c < a.length; c++)
                if (r(a[c]).parentsUntil('.fr-element, [contenteditable="true"]', '[contenteditable="false"]').length) return !1;
            return !0
        }

        function F() {
            for (var b = f(), a = 0; a < b.length; a++)
                if (!b[a].collapsed) return !1;
            return !0
        }

        function m(a) {
            var c = !1,
                e = !1;
            if (b.win.getSelection) {
                var d = b.win.getSelection();
                d.rangeCount && (e = d.getRangeAt(0), d = e.cloneRange(), d.selectNodeContents(a), d.setEnd(e.startContainer, e.startOffset), c = C(d), d.selectNodeContents(a), d.setStart(e.endContainer, e.endOffset), e = C(d))
            } else b.doc.selection && "Control" !== b.doc.selection.type && (e = b.doc.selection.createRange(), d = e.duplicate(), d.moveToElementText(a), d.setEndPoint("EndToStart", e), c = C(d), d.moveToElementText(a), d.setEndPoint("StartToEnd", e), e = C(d));
            return {
                atStart: c,
                atEnd: e
            }
        }

        function C(b) {
            return "" === b.toString().replace(/[\u200B-\u200D\uFEFF]/g, "")
        }

        function y(a, c) {
            "undefined" === typeof c && (c = !0);
            var e = r(a).html();
            e && e.replace(/\u200b/g, "").length !== e.length && r(a).html(e.replace(/\u200b/g, ""));
            e = b.node.contents(a);
            for (var d = 0; d < e.length; d++) e[d].nodeType !== Node.ELEMENT_NODE ? r(e[d]).remove() : (y(e[d], 0 === d), 0 === d && (c = !1));
            a.nodeType === Node.TEXT_NODE ? (c = r(document.createElement("span")).attr("data-first", "true").attr("data-text", "true"), r(a)[0].replaceWith(c[0])) : c && r(a).attr("data-first", !0)
        }

        function q() {
            return 0 === r(this).find("fr-inner").length
        }

        function t(a, c) {
            var e = b.node.contents(a.get(0));
            0 <= ["TD", "TH"].indexOf(a.get(0).tagName) && 1 === a.find(".fr-marker").length && (b.node.hasClass(e[0], "fr-marker") || "BR" == e[0].tagName && b.node.hasClass(e[0].nextElementSibling, "fr-marker")) && a.attr("data-del-cell", !0);
            for (a = 0; a < e.length; a++) {
                var d = e[a];
                b.node.hasClass(d, "fr-marker") ? c = (c + 1) % 2 : c ? 0 < r(d).find(".fr-marker").length ? c = t(r(d), c) : 0 > ["TD", "TH"].indexOf(d.tagName) && !b.node.hasClass(d, "fr-inner") ? !b.opts.keepFormatOnDelete || 0 < b.$el.find("[data-first]").length || b.node.isVoid(d) ? r(d).remove() : y(d) : b.node.hasClass(d, "fr-inner") ? 0 === r(d).find(".fr-inner").length ? r(d).html("<br>") : r(d).find(".fr-inner").filter(q).html("<br>") : (r(d).empty(), r(d).attr("data-del-cell", !0)) : 0 < r(d).find(".fr-marker").length && (c = t(r(d), c))
            }
            return c
        }

        function L() {
            try {
                if (!b.$wp) return !1;
                for (var a = f(0).commonAncestorContainer; a && !b.node.isElement(a);) a = a.parentNode;
                return b.node.isElement(a) ? !0 : !1
            } catch (l) {
                return !1
            }
        }

        function G(c, e) {
            if (!c || 0 < c.getElementsByClassName("fr-marker").length) return !1;
            for (var d = c.firstChild; d && (b.node.isBlock(d) || e && !b.node.isVoid(d) && d.nodeType === Node.ELEMENT_NODE);) c = d, d = d.firstChild;
            c.innerHTML = a.MARKERS + c.innerHTML
        }

        function w(c, e) {
            if (!c || 0 < c.getElementsByClassName("fr-marker").length) return !1;
            for (var d = c.lastChild; d && (b.node.isBlock(d) || e && !b.node.isVoid(d) && d.nodeType === Node.ELEMENT_NODE);) c = d, d = d.lastChild;
            e = b.doc.createElement("SPAN");
            e.setAttribute("id", "fr-sel-markers");
            for (e.innerHTML = a.MARKERS; c.parentNode && b.opts.htmlAllowedEmptyTags && 0 <= b.opts.htmlAllowedEmptyTags.indexOf(c.tagName.toLowerCase());) c = c.parentNode;
            c.appendChild(e);
            c = c.querySelector("#fr-sel-markers");
            c.outerHTML = c.innerHTML
        }
        var r = b.$;
        return {
            text: c,
            get: d,
            ranges: f,
            clear: g,
            element: function() {
                var a = d();
                try {
                    if (a.rangeCount) {
                        var e = f(0),
                            g = e.startContainer,
                            k;
                        if (b.node.isElement(g) && 0 === e.startOffset && g.childNodes.length)
                            for (; g.childNodes.length && g.childNodes[0].nodeType === Node.ELEMENT_NODE;) g = g.childNodes[0];
                        g.nodeType === Node.TEXT_NODE && e.startOffset === (g.textContent || "").length && g.nextSibling && (g = g.nextSibling);
                        if (g.nodeType === Node.ELEMENT_NODE) {
                            a = !1;
                            if (0 < g.childNodes.length && g.childNodes[e.startOffset]) {
                                for (k = g.childNodes[e.startOffset]; k && k.nodeType === Node.TEXT_NODE && 0 === k.textContent.length;) k = k.nextSibling;
                                k && k.textContent.replace(/\u200B/g, "") === c().replace(/\u200B/g, "") && (g = k, a = !0);
                                if (!a && 1 < g.childNodes.length && 0 < e.startOffset && g.childNodes[e.startOffset - 1]) {
                                    for (k = g.childNodes[e.startOffset - 1]; k && k.nodeType === Node.TEXT_NODE && 0 === k.textContent.length;) k = k.nextSibling;
                                    k && k.textContent.replace(/\u200B/g, "") === c().replace(/\u200B/g, "") && (g = k, a = !0)
                                }
                            } else !e.collapsed && g.nextSibling && g.nextSibling.nodeType === Node.ELEMENT_NODE && (k = g.nextSibling) && k.textContent.replace(/\u200B/g, "") === c().replace(/\u200B/g, "") && (g = k, a = !0);
                            !a && 0 < g.childNodes.length && r(g.childNodes[0]).text().replace(/\u200B/g, "") === c().replace(/\u200B/g, "") && 0 > ["BR", "IMG", "HR"].indexOf(g.childNodes[0].tagName) && (g = g.childNodes[0])
                        }
                        for (; g.nodeType !== Node.ELEMENT_NODE && g.parentNode;) g = g.parentNode;
                        for (e = g; e && "HTML" !== e.tagName;) {
                            if (e === b.el) return g;
                            e = r(e).parent()[0]
                        }
                    }
                } catch (H) {}
                return b.el
            },
            endElement: function() {
                var a = d();
                try {
                    if (a.rangeCount) {
                        var e = f(0),
                            g = e.endContainer,
                            k;
                        g.nodeType === Node.ELEMENT_NODE && (a = !1, 0 < g.childNodes.length && g.childNodes[e.endOffset] && r(g.childNodes[e.endOffset]).text() === c() ? (g = g.childNodes[e.endOffset], a = !0) : !e.collapsed && g.previousSibling && g.previousSibling.nodeType === Node.ELEMENT_NODE ? (k = g.previousSibling) && k.textContent.replace(/\u200B/g, "") === c().replace(/\u200B/g, "") && (g = k, a = !0) : !e.collapsed && 0 < g.childNodes.length && g.childNodes[e.endOffset] && (k = g.childNodes[e.endOffset].previousSibling, k.nodeType === Node.ELEMENT_NODE && k && k.textContent.replace(/\u200B/g, "") === c().replace(/\u200B/g, "") && (g = k, a = !0)), !a && 0 < g.childNodes.length && r(g.childNodes[g.childNodes.length - 1]).text() === c() && 0 > ["BR", "IMG", "HR"].indexOf(g.childNodes[g.childNodes.length - 1].tagName) && (g = g.childNodes[g.childNodes.length - 1]));
                        g.nodeType === Node.TEXT_NODE && 0 === e.endOffset && g.previousSibling && g.previousSibling.nodeType === Node.ELEMENT_NODE && (g = g.previousSibling);
                        for (; g.nodeType !== Node.ELEMENT_NODE && g.parentNode;) g = g.parentNode;
                        for (e = g; e && "HTML" !== e.tagName;) {
                            if (e === b.el) return g;
                            e = r(e).parent()[0]
                        }
                    }
                } catch (H) {}
                return b.el
            },
            save: A,
            restore: h,
            isCollapsed: F,
            isFull: function() {
                if (F()) return !1;
                b.selection.save();
                var a = b.el.querySelectorAll("td, th, img, br"),
                    c;
                for (c = 0; c < a.length; c++)
                    if (a[c].nextSibling || "IMG" === a[c].tagName) a[c].innerHTML = '<span class="fr-mk" style="display: none;">&nbsp;</span>'.concat(a[c].innerHTML);
                var e = !1;
                a = m(b.el);
                a.atStart && a.atEnd && (e = !0);
                a = b.el.querySelectorAll(".fr-mk");
                for (c = 0; c < a.length; c++) a[c].parentNode.removeChild(a[c]);
                b.selection.restore();
                return e
            },
            inEditor: L,
            remove: function() {
                function c(b) {
                    for (b = b.previousSibling; b && b.nodeType === Node.TEXT_NODE && 0 === b.textContent.length;) {
                        var a = b;
                        b = b.previousSibling;
                        r(a).remove()
                    }
                    return b
                }

                function e(b) {
                    for (b = b.nextSibling; b && b.nodeType === Node.TEXT_NODE && 0 === b.textContent.length;) {
                        var a = b;
                        b = b.nextSibling;
                        r(a).remove()
                    }
                    return b
                }
                if (F()) return !0;
                var d;
                A();
                var g = b.$el.find('.fr-marker[data-type="true"]');
                for (d = 0; d < g.length; d++)
                    for (var f = g[d]; !(c(f) || b.node.isBlock(f.parentNode) || b.$el.is(f.parentNode) || b.node.hasClass(f.parentNode, "fr-inner"));) r(f.parentNode).before(f);
                g = b.$el.find('.fr-marker[data-type="false"]');
                for (d = 0; d < g.length; d++) {
                    for (f = g[d]; !(e(f) || b.node.isBlock(f.parentNode) || b.$el.is(f.parentNode) || b.node.hasClass(f.parentNode, "fr-inner"));) r(f.parentNode).after(f);
                    f.parentNode && b.node.isBlock(f.parentNode) && b.node.isEmpty(f.parentNode) && !b.$el.is(f.parentNode) && !b.node.hasClass(f.parentNode, "fr-inner") && b.opts.keepFormatOnDelete && r(f.parentNode).after(f)
                }
                if (E())
                    if (t(b.$el, 0), d = b.$el.find('[data-first="true"]'), d.length) b.$el.find(".fr-marker").remove(), d.append(a.INVISIBLE_SPACE + a.MARKERS).removeAttr("data-first"), d.attr("data-text") && d.replaceWith(d.html());
                    else
                        for (b.$el.find("table").filter(function() {
                                return 0 < r(this).find("[data-del-cell]").length && r(this).find("[data-del-cell]").length === r(this).find("td, th").length
                            }).remove(), b.$el.find("[data-del-cell]").removeAttr("data-del-cell"), g = b.$el.find('.fr-marker[data-type="true"]'), d = 0; d < g.length; d++) {
                            f = g[d];
                            var k = f.nextSibling,
                                n = b.$el.find('.fr-marker[data-type="false"][data-id="'.concat(r(f).data("id"), '"]')).get(0);
                            if (n) {
                                if (f && (!k || k !== n)) {
                                    var K = b.node.blockParent(f);
                                    k = b.node.blockParent(n);
                                    var P = !1,
                                        I = !1;
                                    K && 0 <= ["UL", "OL"].indexOf(K.tagName) && (K = null, P = !0);
                                    k && 0 <= ["UL", "OL"].indexOf(k.tagName) && (k = null, I = !0);
                                    r(f).after(n);
                                    if (K !== k)
                                        if (null !== K || P)
                                            if (null !== k || I || 0 !== r(K).parentsUntil(b.$el, "table").length) K && k && 0 === r(K).parentsUntil(b.$el, "table").length && 0 === r(k).parentsUntil(b.$el, "table").length && !r(K).contains(k) && !r(k).contains(K) && (r(K).append(r(k).html()), r(k).remove());
                                            else {
                                                for (k = K; !k.nextSibling && k.parentNode !== b.el;) k = k.parentNode;
                                                for (k = k.nextSibling; k && "BR" !== k.tagName;) f = k.nextSibling, r(K).append(k), k = f;
                                                k && "BR" === k.tagName && r(k).remove()
                                            }
                                    else(K = b.node.deepestParent(f)) ? (r(K).after(r(k).html()), r(k).remove()) : 0 === r(k).parentsUntil(b.$el, "table").length && (r(f).next().after(r(k).html()), r(k).remove())
                                }
                            } else n = r(f).clone().attr("data-type", !1), r(f).after(n)
                        }
                b.$el.find("li:empty").remove();
                b.opts.keepFormatOnDelete || b.html.fillEmptyBlocks();
                b.html.cleanEmptyTags(!0);
                b.opts.htmlUntouched || (b.clean.lists(), b.$el.find("li:empty").append("<br>"), b.spaces.normalize());
                d = b.$el.find(".fr-marker").last().get(0);
                g = b.$el.find(".fr-marker").first().get(0);
                "undefined" !== typeof d && "undefined" !== typeof g && !d.nextSibling && g.previousSibling && "BR" === g.previousSibling.tagName && b.node.isElement(d.parentNode) && b.node.isElement(g.parentNode) && b.$el.append("<br>");
                h()
            },
            blocks: function(a) {
                var c = [],
                    e;
                var g = d();
                if (L() && g.rangeCount) {
                    var k = f();
                    for (g = 0; g < k.length; g++) {
                        var n = k[g],
                            z = I(n.startContainer, n.startOffset),
                            K = I(n.endContainer, n.endOffset);
                        (b.node.isBlock(z) || b.node.hasClass(z, "fr-inner")) && 0 > c.indexOf(z) && c.push(z);
                        (e = b.node.blockParent(z)) && 0 > c.indexOf(e) && c.push(e);
                        for (e = []; z !== K && z !== b.el;) 0 > e.indexOf(z) && z.children && z.children.length ? (e.push(z), z = z.children[0]) : z.nextSibling ? z = z.nextSibling : z.parentNode && (z = z.parentNode, e.push(z)), b.node.isBlock(z) && 0 > e.indexOf(z) && 0 > c.indexOf(z) && (z !== K || 0 < n.endOffset) && c.push(z);
                        b.node.isBlock(K) && 0 > c.indexOf(K) && 0 < n.endOffset && c.push(K);
                        (e = b.node.blockParent(K)) && 0 > c.indexOf(e) && c.push(e)
                    }
                }
                for (g = c.length - 1; 0 < g; g--) !r(c[g]).find(c).length || a && r(c[g]).find("ul, ol").length || c.splice(g, 1);
                return c
            },
            info: m,
            setAtEnd: w,
            setAtStart: G,
            setBefore: function(c, e) {
                "undefined" === typeof e && (e = !0);
                for (var d = c.previousSibling; d && d.nodeType === Node.TEXT_NODE && 0 === d.textContent.length;) d = d.previousSibling;
                return d ? (b.node.isBlock(d) ? w(d) : "BR" === d.tagName ? r(d).before(a.MARKERS) : r(d).after(a.MARKERS), !0) : e ? (b.node.isBlock(c) ? G(c) : r(c).before(a.MARKERS), !0) : !1
            },
            setAfter: function(c, e) {
                "undefined" === typeof e && (e = !0);
                for (var d = c.nextSibling; d && d.nodeType === Node.TEXT_NODE && 0 === d.textContent.length;) d = d.nextSibling;
                return d ? (b.node.isBlock(d) ? G(d) : r(d).before(a.MARKERS), !0) : e ? (b.node.isBlock(c) ? w(c) : r(c).after(a.MARKERS), !0) : !1
            },
            rangeElement: I
        }
    };
    Object.assign(a.DEFAULTS, {
        language: null
    });
    a.LANGUAGE = {};
    a.MODULES.language = function(b) {
        var c;
        return {
            _init: function() {
                a.LANGUAGE && (c = a.LANGUAGE[b.opts.language]);
                c && c.direction && (b.opts.direction = c.direction)
            },
            translate: function(b) {
                return c && c.translation[b] && c.translation[b].length ? c.translation[b] : b
            }
        }
    };
    Object.assign(a.DEFAULTS, {
        placeholderText: "Type something"
    });
    a.MODULES.placeholder = function(b) {
        function a() {
            b.$placeholder || (b.$placeholder = g(b.doc.createElement("SPAN")).addClass("fr-placeholder"), b.$wp.append(b.$placeholder));
            var a = b.opts.iframe ? b.$iframe.prev().outerHeight(!0) : b.$el.prev().outerHeight(!0),
                c = 0,
                e = 0,
                d = 0,
                f = 0,
                k = 0,
                n = 0,
                h = b.node.contents(b.el),
                x = g(b.selection.element()).css("text-align");
            h.length && h[0].nodeType === Node.ELEMENT_NODE ? (h = g(h[0]), (0 < b.$wp.prev().length || 0 < b.$el.prev().length) && b.ready && (c = b.helpers.getPX(h.css("margin-top")), f = b.helpers.getPX(h.css("padding-top")), e = b.helpers.getPX(h.css("margin-left")), d = b.helpers.getPX(h.css("margin-right")), k = b.helpers.getPX(h.css("padding-left")), n = b.helpers.getPX(h.css("padding-right"))), b.$placeholder.css("font-size", h.css("font-size")), b.$placeholder.css("line-height", h.css("line-height"))) : (b.$placeholder.css("font-size", b.$el.css("font-size")), b.$placeholder.css("line-height", b.$el.css("line-height")));
            b.$wp.addClass("show-placeholder");
            b.$placeholder.css({
                marginTop: Math.max(b.helpers.getPX(b.$el.css("margin-top")), c) + (a ? a : 0),
                paddingTop: Math.max(b.helpers.getPX(b.$el.css("padding-top")), f),
                paddingLeft: Math.max(b.helpers.getPX(b.$el.css("padding-left")), k),
                marginLeft: Math.max(b.helpers.getPX(b.$el.css("margin-left")), e),
                paddingRight: Math.max(b.helpers.getPX(b.$el.css("padding-right")), n),
                marginRight: Math.max(b.helpers.getPX(b.$el.css("margin-right")), d),
                textAlign: x
            }).text(b.language.translate(b.opts.placeholderText || b.$oel.attr("placeholder") || ""));
            b.$placeholder.html(b.$placeholder.text().replace(/\n/g, "<br>"))
        }

        function c() {
            b.$wp.removeClass("show-placeholder")
        }

        function d() {
            if (!b.$wp) return !1;
            b.core.isEmpty() ? a() : c()
        }
        var g = b.$;
        return {
            _init: function() {
                if (!b.$wp) return !1;
                b.events.on("init input keydown keyup contentChanged initialized", d)
            },
            show: a,
            hide: c,
            refresh: d,
            isVisible: function() {
                return b.$wp ? b.node.hasClass(b.$wp.get(0), "show-placeholder") : !0
            }
        }
    };
    a.UNICODE_NBSP = String.fromCharCode(160);
    a.VOID_ELEMENTS = "area base br col embed hr img input keygen link menuitem meta param source track wbr".split(" ");
    a.BLOCK_TAGS = "address article aside audio blockquote canvas details dd div dl dt fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr li main nav noscript ol output p pre section table tbody td tfoot th thead tr ul video".split(" ");
    Object.assign(a.DEFAULTS, {
        htmlAllowedEmptyTags: "textarea a iframe object video style script .fa .fr-emoticon .fr-inner path line hr".split(" "),
        htmlDoNotWrapTags: ["script", "style"],
        htmlSimpleAmpersand: !1,
        htmlIgnoreCSSProperties: [],
        htmlExecuteScripts: !0
    });
    a.MODULES.html = function(b) {
        function c() {
            if (b.opts.enter === a.ENTER_P) return "p";
            if (b.opts.enter === a.ENTER_DIV) return "div";
            if (b.opts.enter === a.ENTER_BR) return null
        }

        function d(a, c) {
            return a && a !== b.el ? c ? -1 != ["PRE", "SCRIPT", "STYLE"].indexOf(a.tagName) ? !0 : d(a.parentNode, c) : -1 !== ["PRE", "SCRIPT", "STYLE"].indexOf(a.tagName) : !1
        }

        function f(c) {
            var e = [],
                d = [];
            if (c) {
                var f = b.el.querySelectorAll(".fr-marker");
                for (c = 0; c < f.length; c++) {
                    var k = b.node.blockParent(f[c]) || f[c];
                    if (k) {
                        var l = k.nextSibling,
                            H = k.previousSibling;
                        k && 0 > d.indexOf(k) && b.node.isBlock(k) && d.push(k);
                        H && b.node.isBlock(H) && 0 > d.indexOf(H) && d.push(H);
                        l && b.node.isBlock(l) && 0 > d.indexOf(l) && d.push(l)
                    }
                }
            } else d = b.el.querySelectorAll(g());
            f = g();
            f += ",".concat(a.VOID_ELEMENTS.join(","));
            f = f + ", .fr-inner" + ",".concat(b.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)");
            for (c = d.length - 1; 0 <= c; c--)
                if (!(d[c].textContent && 0 < d[c].textContent.replace(/\u200B|\n/g, "").length || 0 < d[c].querySelectorAll(f).length)) {
                    k = b.node.contents(d[c]);
                    l = !1;
                    for (H = 0; H < k.length; H++)
                        if (k[H].nodeType !== Node.COMMENT_NODE && k[H].textContent && 0 < k[H].textContent.replace(/\u200B|\n/g, "").length) {
                            l = !0;
                            break
                        }
                    l || e.push(d[c])
                }
            return e
        }

        function g() {
            return a.BLOCK_TAGS.join(", ")
        }

        function I(c) {
            var e = K.merge([], a.VOID_ELEMENTS);
            e = K.merge(e, b.opts.htmlAllowedEmptyTags);
            e = "undefined" === typeof c ? K.merge(e, a.BLOCK_TAGS) : K.merge(e, a.NO_DELETE_TAGS);
            c = b.el.querySelectorAll("*:empty:not(".concat(e.join("):not("), "):not(.fr-marker):not(template)"));
            do {
                var d = !1;
                for (var g = 0; g < c.length; g++)
                    if (0 === c[g].attributes.length || "undefined" !== typeof c[g].getAttribute("href")) c[g].parentNode.removeChild(c[g]), d = !0;
                c = b.el.querySelectorAll("*:empty:not(".concat(e.join("):not("), "):not(.fr-marker):not(template)"))
            } while (c.length && d)
        }

        function A(a, e) {
            var d = c();
            e && (d = "div");
            if (d) {
                for (var g = b.doc.createDocumentFragment(), f = null, k = !1, l = a.firstChild, H = !1; l;) {
                    var n = l.nextSibling;
                    if (l.nodeType === Node.ELEMENT_NODE && (b.node.isBlock(l) || 0 <= b.opts.htmlDoNotWrapTags.indexOf(l.tagName.toLowerCase()) && !b.node.hasClass(l, "fr-marker"))) f = null, g.appendChild(l.cloneNode(!0));
                    else if (l.nodeType !== Node.ELEMENT_NODE && l.nodeType !== Node.TEXT_NODE) f = null, g.appendChild(l.cloneNode(!0));
                    else if ("BR" === l.tagName) null === f ? (f = b.doc.createElement(d), H = !0, e && (f.setAttribute("class", "fr-temp-div"), f.setAttribute("data-empty", !0)), f.appendChild(l.cloneNode(!0)), g.appendChild(f)) : !1 === k && (f.appendChild(b.doc.createElement("br")), e && (f.setAttribute("class", "fr-temp-div"), f.setAttribute("data-empty", !0))), f = null;
                    else {
                        var u = l.textContent;
                        l.nodeType !== Node.TEXT_NODE || 0 < u.replace(/\n/g, "").replace(/(^ *)|( *$)/g, "").length || u.replace(/(^ *)|( *$)/g, "").length && 0 > u.indexOf("\n") ? (null === f && (f = b.doc.createElement(d), H = !0, e && f.setAttribute("class", "fr-temp-div"), g.appendChild(f), k = !1), f.appendChild(l.cloneNode(!0)), k || b.node.hasClass(l, "fr-marker") || l.nodeType === Node.TEXT_NODE && 0 === u.replace(/ /g, "").length || (k = !0)) : H = !0
                    }
                    l = n
                }
                H && (a.innerHTML = "", a.appendChild(g))
            }
        }

        function h(b, a) {
            for (var c = b.length - 1; 0 <= c; c--) A(b[c], a)
        }

        function x(a, c, e, d, g) {
            if (!b.$wp) return !1;
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof e && (e = !1);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof g && (g = !1);
            var f = b.$wp.scrollTop();
            A(b.el, a);
            d && h(b.el.querySelectorAll(".fr-inner"), a);
            c && h(b.el.querySelectorAll("td, th"), a);
            e && h(b.el.querySelectorAll("blockquote"), a);
            g && h(b.el.querySelectorAll("li"), a);
            f !== b.$wp.scrollTop() && b.$wp.scrollTop(f)
        }

        function E(a) {
            "undefined" === typeof a && (a = b.el);
            if (a && 0 <= ["SCRIPT", "STYLE", "PRE"].indexOf(a.tagName)) return !1;
            for (a = b.doc.createTreeWalker(a, NodeFilter.SHOW_TEXT, b.node.filter(function(b) {
                    return null !== b.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)
                }), !1); a.nextNode();) {
                var c = a.currentNode;
                if (!d(c.parentNode, !0)) {
                    var e = b.node.isBlock(c.parentNode) || b.node.isElement(c.parentNode),
                        g = c.textContent.replace(/(?!^)( ){2,}(?!$)/g, " ").replace(/\n/g, " ").replace(/^[ ]{2,}/g, " ").replace(/[ ]{2,}$/g, " ");
                    if (e) {
                        e = c.previousSibling;
                        var f = c.nextSibling;
                        e && f && " " === g ? g = b.node.isBlock(e) && b.node.isBlock(f) ? "" : " " : (e || (g = g.replace(/^ */, "")), f || (g = g.replace(/ *$/, "")))
                    }
                    c.textContent = g
                }
            }
        }

        function F(b, a, c) {
            return (b = (new RegExp(a, "gi")).exec(b)) ? b[c] : null
        }

        function m(b, a) {
            return (b = b.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i)) ? a.implementation.createDocumentType(b[1], b[3], b[4]) : a.implementation.createDocumentType("html")
        }

        function C(b) {
            b = b.doctype;
            var a = "<!DOCTYPE html>";
            b && (a = "<!DOCTYPE ".concat(b.name).concat(b.publicId ? ' PUBLIC "'.concat(b.publicId, '"') : "").concat(!b.publicId && b.systemId ? " SYSTEM" : "").concat(b.systemId ? ' "'.concat(b.systemId, '"') : "", ">"));
            return a
        }

        function y(c) {
            var e = c.parentNode;
            if (e && (b.node.isBlock(e) || b.node.isElement(e)) && 0 > ["TD", "TH"].indexOf(e.tagName)) {
                for (var d = c.previousSibling, g = c.nextSibling; d && (d.nodeType === Node.TEXT_NODE && 0 === d.textContent.replace(/\n|\r/g, "").length || b.node.hasClass(d, "fr-tmp"));) d = d.previousSibling;
                if (g) return !1;
                d && e && "BR" !== d.tagName && !b.node.isBlock(d) && !g && 0 < e.textContent.replace(/\u200B/g, "").length && 0 < d.textContent.length && !b.node.hasClass(d, "fr-marker") && (b.el !== e || g || b.opts.enter !== a.ENTER_BR || !b.browser.msie) && c.parentNode.removeChild(c)
            } else !e || b.node.isBlock(e) || b.node.isElement(e) || c.previousSibling || c.nextSibling || !b.node.isDeletable(c.parentNode) || y(c.parentNode)
        }

        function q() {
            b.opts.htmlUntouched || (I(), x(), E(), b.spaces.normalize(null, !0), b.html.fillEmptyBlocks(), b.clean.lists(), b.clean.tables(), b.clean.toHTML5(), b.html.cleanBRs());
            b.selection.restore();
            t();
            b.placeholder.refresh()
        }

        function t() {
            b.node.isEmpty(b.el) && (null !== c() ? b.el.querySelector(g()) || b.el.querySelector("".concat(b.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || (b.core.hasFocus() ? (b.$el.html("<".concat(c(), ">").concat(a.MARKERS, "<br/></").concat(c(), ">")), b.selection.restore()) : b.$el.html("<".concat(c(), "><br/></").concat(c(), ">"))) : b.el.querySelector("*:not(.fr-marker):not(br)") || (b.core.hasFocus() ? (b.$el.html("".concat(a.MARKERS, "<br/>")), b.selection.restore()) : b.$el.html("<br/>")))
        }

        function G(b, a) {
            return F(b, "<".concat(a, "[^>]*?>([\\w\\W]*)</").concat(a, ">"), 1)
        }

        function L(a, c) {
            a = K("<div ".concat(F(a, "<".concat(c, "([^>]*?)>"), 1) || "", ">"));
            return b.node.rawAttributes(a.get(0))
        }

        function w(b) {
            return (F(b, "<!DOCTYPE([^>]*?)>", 0) || "<!DOCTYPE html>").replace(/\n/g, " ").replace(/ {2,}/g, " ")
        }

        function r(a, c) {
            b.opts.htmlExecuteScripts ? a.html(c) : a.get(0).innerHTML = c
        }

        function z(b) {
            var a = /:not\(([^)]*)\)/g;
            a.test(b) && (b = b.replace(a, "     $1 "));
            a = 100 * (b.match(/(#[^\s+>~.[:]+)/g) || []).length + 10 * (b.match(/(\[[^]]+\])/g) || []).length + 10 * (b.match(/(\.[^\s+>~.[:]+)/g) || []).length + 10 * (b.match(/(:[\w-]+\([^)]*\))/gi) || []).length + 10 * (b.match(/(:[^\s+>~.[:]+)/g) || []).length + (b.match(/(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi) || []).length;
            b = b.replace(/[*\s+>~]/g, " ");
            b = b.replace(/[#.]/g, " ");
            return a += (b.match(/([^\s+>~.[:]+)/g) || []).length
        }

        function l(a) {
            b.events.trigger("html.processGet", [a]);
            a && a.getAttribute && "" === a.getAttribute("class") && a.removeAttribute("class");
            a && a.getAttribute && "" === a.getAttribute("style") && a.removeAttribute("style");
            if (a && a.nodeType === Node.ELEMENT_NODE) {
                var c = a.querySelectorAll('[class=""],[style=""]'),
                    e;
                for (e = 0; e < c.length; e++) {
                    var d = c[e];
                    "" === d.getAttribute("class") && d.removeAttribute("class");
                    "" === d.getAttribute("style") && d.removeAttribute("style")
                }
                if ("BR" === a.tagName) y(a);
                else
                    for (a = a.querySelectorAll("br"), e = 0; e < a.length; e++) y(a[e])
            }
        }

        function u(b, a) {
            return b[3] - a[3]
        }

        function W() {
            for (var a = b.el.querySelectorAll("input, textarea"), c = 0; c < a.length; c++) {
                if ("checkbox" === a[c].type || "radio" === a[c].type) a[c].checked ? a[c].setAttribute("checked", a[c].checked) : b.$(a[c]).removeAttr("checked");
                a[c].getAttribute("value") && a[c].setAttribute("value", a[c].value)
            }
        }

        function H(a) {
            var c = b.doc.createElement("div");
            c.innerHTML = a;
            return null !== c.querySelector(g())
        }

        function T(a) {
            var c = null;
            "undefined" === typeof a && (c = b.selection.element());
            if (b.opts.keepFormatOnDelete) return !1;
            a = c ? (c.textContent.match(/\u200B/g) || []).length - c.querySelectorAll(".fr-marker").length : 0;
            if ((b.el.textContent.match(/\u200B/g) || []).length - b.el.querySelectorAll(".fr-marker").length === a) return !1;
            do {
                var e = !1;
                a = b.el.querySelectorAll("*:not(.fr-marker)");
                for (var d = 0; d < a.length; d++) {
                    var g = a[d];
                    if (c !== g) {
                        var f = g.textContent;
                        0 === g.children.length && 1 === f.length && 8203 === f.charCodeAt(0) && "TD" !== g.tagName && (K(g).remove(), e = !0)
                    }
                }
            } while (e)
        }

        function ka() {
            T();
            b.placeholder && setTimeout(b.placeholder.refresh, 0)
        }
        var K = b.$;
        return {
            defaultTag: c,
            isPreformatted: d,
            emptyBlocks: f,
            emptyBlockTagsQuery: function() {
                return "".concat(a.BLOCK_TAGS.join(":empty, "), ":empty")
            },
            blockTagsQuery: g,
            fillEmptyBlocks: function(c) {
                c = f(c);
                b.node.isEmpty(b.el) && b.opts.enter === a.ENTER_BR && c.push(b.el);
                for (var e = 0; e < c.length; e++) {
                    var d = c[e];
                    "false" === d.getAttribute("contenteditable") || d.querySelector("".concat(b.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || b.node.isVoid(d) || "TABLE" !== d.tagName && "TBODY" !== d.tagName && "TR" !== d.tagName && "UL" !== d.tagName && "OL" !== d.tagName && d.appendChild(b.doc.createElement("br"))
                }
                b.browser.msie && b.opts.enter === a.ENTER_BR && (c = b.node.contents(b.el), c.length && c[c.length - 1].nodeType === Node.TEXT_NODE && b.$el.append("<br>"))
            },
            cleanEmptyTags: I,
            cleanWhiteTags: T,
            cleanBlankSpaces: E,
            blocks: function() {
                return b.$el.get(0).querySelectorAll(g())
            },
            getDoctype: C,
            set: function(a) {
                var c = b.clean.html((a || "").trim(), [], [], b.opts.fullPage).replace(/%3A\/\//g, "://");
                if (b.opts.fullPage) {
                    a = G(c, "body") || (0 <= c.indexOf("<body") ? "" : c);
                    var e = L(c, "body"),
                        d = G(c, "head") || "<title></title>",
                        g = L(c, "head"),
                        f = K("<div>");
                    f.append(d).contents().each(function() {
                        (this.nodeType === Node.COMMENT_NODE || 0 <= "BASE LINK META NOSCRIPT SCRIPT STYLE TEMPLATE TITLE".split(" ").indexOf(this.tagName)) && this.parentNode.removeChild(this)
                    });
                    f = f.html().trim();
                    d = K("<div>").append(d).contents().map(function() {
                        return this.nodeType === Node.COMMENT_NODE ? "\x3c!--".concat(this.nodeValue, "--\x3e") : 0 <= "BASE LINK META NOSCRIPT SCRIPT STYLE TEMPLATE TITLE".split(" ").indexOf(this.tagName) ? this.outerHTML : ""
                    }).toArray().join("");
                    var k = w(c);
                    c = L(c, "html");
                    r(b.$el, "".concat(f, "\n").concat(a));
                    b.node.clearAttributes(b.el);
                    b.$el.attr(e);
                    b.$el.addClass("fr-view");
                    b.$el.attr("spellcheck", b.opts.spellcheck);
                    b.$el.attr("dir", b.opts.direction);
                    r(b.$head, d);
                    b.node.clearAttributes(b.$head.get(0));
                    b.$head.attr(g);
                    b.node.clearAttributes(b.$html.get(0));
                    b.$html.attr(c);
                    b.iframe_document.doctype.parentNode.replaceChild(m(k, b.iframe_document), b.iframe_document.doctype)
                } else r(b.$el, c);
                a = b.edit.isDisabled();
                b.edit.on();
                b.core.injectStyle(b.opts.iframeDefaultStyle + b.opts.iframeStyle);
                q();
                b.opts.useClasses || (b.$el.find("[fr-original-class]").each(function() {
                    this.setAttribute("class", this.getAttribute("fr-original-class"));
                    this.removeAttribute("fr-original-class")
                }), b.$el.find("[fr-original-style]").each(function() {
                    this.setAttribute("style", this.getAttribute("fr-original-style"));
                    this.removeAttribute("fr-original-style")
                }));
                a && b.edit.off();
                b.events.trigger("html.set");
                b.events.trigger("charCounter.update")
            },
            syncInputs: W,
            get: function(a, c) {
                if (!b.$wp) return b.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;
                var e = "";
                b.events.trigger("html.beforeGet");
                var d = [],
                    g = {},
                    f, k = [];
                W();
                if (!b.opts.useClasses && !c) {
                    var H = new RegExp("^".concat(b.opts.htmlIgnoreCSSProperties.join("$|^"), "$"), "gi");
                    for (f = 0; f < b.doc.styleSheets.length; f++) {
                        var n = void 0,
                            K = 0;
                        try {
                            n = b.doc.styleSheets[f].cssRules, b.doc.styleSheets[f].ownerNode && "STYLE" === b.doc.styleSheets[f].ownerNode.nodeType && (K = 1)
                        } catch (aa) {}
                        if (n)
                            for (var A = 0, I = n.length; A < I; A++)
                                if (n[A].selectorText && 0 < n[A].style.cssText.length) {
                                    var h = n[A].selectorText.replace(/body |\.fr-view /g, "").replace(/::/g, ":");
                                    var T = void 0;
                                    try {
                                        T = b.el.querySelectorAll(h)
                                    } catch (aa) {
                                        T = []
                                    }
                                    for (h = 0; h < T.length; h++) {
                                        !T[h].getAttribute("fr-original-style") && T[h].getAttribute("style") ? (T[h].setAttribute("fr-original-style", T[h].getAttribute("style")), d.push(T[h])) : T[h].getAttribute("fr-original-style") || (T[h].setAttribute("fr-original-style", ""), d.push(T[h]));
                                        g[T[h]] || (g[T[h]] = {});
                                        for (var q = 1E3 * K + z(n[A].selectorText), F = n[A].style.cssText.split(";"), E = 0; E < F.length; E++) {
                                            var p = F[E].trim().split(":")[0];
                                            if (p && !p.match(H) && (g[T[h]][p] || (g[T[h]][p] = 0, 0 <= (T[h].getAttribute("fr-original-style") || "").indexOf("".concat(p, ":")) && (g[T[h]][p] = 1E4)), q >= g[T[h]][p] && (g[T[h]][p] = q, F[E].trim().length))) {
                                                var Y = F[E].trim().split(":");
                                                Y.splice(0, 1);
                                                k.push([T[h], p.trim(), Y.join(":").trim(), q])
                                            }
                                        }
                                    }
                                }
                    }
                    k.sort(u);
                    for (f = 0; f < k.length; f++) h = k[f], h[0].style[h[1]] = h[2];
                    for (f = 0; f < d.length; f++)
                        if (d[f].getAttribute("class") && (d[f].setAttribute("fr-original-class", d[f].getAttribute("class")), d[f].removeAttribute("class")), 0 < (d[f].getAttribute("fr-original-style") || "").trim().length)
                            for (k = d[f].getAttribute("fr-original-style").split(";"), h = 0; h < k.length; h++) 0 < k[h].indexOf(":") && (g = k[h].split(":"), H = g[0], g.splice(0, 1), d[f].style[H.trim()] = g.join(":").trim())
                }
                b.node.isEmpty(b.el) ? b.opts.fullPage && (e = C(b.iframe_document), e += "<html".concat(b.node.attributes(b.$html.get(0)), ">").concat(b.$html.find("head").get(0).outerHTML, "<body></body></html>")) : ("undefined" === typeof a && (a = !1), b.opts.fullPage ? (e = C(b.iframe_document), b.$el.removeClass("fr-view"), f = b.opts.heightMin, h = b.opts.height, k = b.opts.heightMax, b.opts.heightMin = null, b.opts.height = null, b.opts.heightMax = null, b.size.refresh(), e += "<html".concat(b.node.attributes(b.$html.get(0)), ">").concat(b.$html.html(), "</html>"), b.opts.heightMin = f, b.opts.height = h, b.opts.heightMax = k, b.size.refresh(), b.$el.addClass("fr-view")) : e = b.$el.html());
                if (!b.opts.useClasses && !c)
                    for (f = 0; f < d.length; f++) d[f].getAttribute("fr-original-class") && (d[f].setAttribute("class", d[f].getAttribute("fr-original-class")), d[f].removeAttribute("fr-original-class")), null !== d[f].getAttribute("fr-original-style") && "undefined" !== typeof d[f].getAttribute("fr-original-style") ? (0 !== d[f].getAttribute("fr-original-style").length ? d[f].setAttribute("style", d[f].getAttribute("fr-original-style")) : d[f].removeAttribute("style"), d[f].removeAttribute("fr-original-style")) : d[f].removeAttribute("style");
                b.opts.fullPage && (e = e.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g, ""), e = e.replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g, ""), e = e.replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g, ""), e = e.replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$2>$3</body>"), e = e.replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$3>$4</body>"), e = e.replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$3>$4</body>"), e = e.replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, '<body$1class="$2$4"$5>$6</body>'), e = e.replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$2>$3</body>"));
                b.opts.htmlSimpleAmpersand && (e = e.replace(/&amp;/gi, "&"));
                b.events.trigger("html.afterGet");
                a || (e = e.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi, ""));
                e = b.clean.invisibleSpaces(e);
                e = b.clean.exec(e, l);
                a = b.events.chainTrigger("html.get", e);
                "string" === typeof a && (e = a);
                e = e.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g, function(b) {
                    return b.replace(/<br>/g, "\n")
                });
                return e = e.replace(/<meta((?:[\w\W]*?)) data-fr-http-equiv="/g, '<meta$1 http-equiv="')
            },
            getSelected: function() {
                function a(a, c) {
                    for (; !(!c || c.nodeType !== Node.TEXT_NODE && b.node.isBlock(c) || b.node.isElement(c) || b.node.hasClass(c, "fr-inner"));) c && c.nodeType !== Node.TEXT_NODE && K(a).wrapInner(b.node.openTagString(c) + b.node.closeTagString(c)), c = c.parentNode;
                    c && a.innerHTML === c.innerHTML ? a.innerHTML = c.outerHTML : -1 != c.innerText.indexOf(a.innerHTML) && (a.innerHTML = b.node.openTagString(c) + c.innerHTML + b.node.closeTagString(c))
                }

                function c() {
                    var a = null,
                        c;
                    b.win.getSelection ? (c = b.win.getSelection()) && c.rangeCount && (a = c.getRangeAt(0).commonAncestorContainer, a.nodeType !== Node.ELEMENT_NODE && (a = a.parentNode)) : (c = b.doc.selection) && "Control" !== c.type && (a = c.createRange().parentElement());
                    return null !== a && (0 <= K(a).parents().toArray().indexOf(b.el) || a === b.el) ? a : null
                }
                var e = "";
                if ("undefined" !== typeof b.win.getSelection) {
                    b.browser.mozilla && (b.selection.save(), 1 < b.$el.find('.fr-marker[data-type="false"]').length && (b.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(), b.$el.find('.fr-marker[data-type="false"]:last').attr("data-id", "0"), b.$el.find(".fr-marker").not('[data-id="0"]').remove()), b.selection.restore());
                    for (var d = b.selection.ranges(), g = 0; g < d.length; g++) {
                        var f = document.createElement("div");
                        f.appendChild(d[g].cloneContents());
                        a(f, c());
                        0 < K(f).find(".fr-element").length && (f = b.el);
                        e += f.innerHTML
                    }
                } else "undefined" !== typeof b.doc.selection && "Text" === b.doc.selection.type && (e = b.doc.selection.createRange().htmlText);
                return e
            },
            insert: function(a, c, e) {
                b.selection.isCollapsed() || b.selection.remove();
                c = c ? a : b.clean.html(a);
                0 > a.indexOf('class="fr-marker"') && (a = b.doc.createElement("div"), a.innerHTML = c, b.selection.setAtEnd(a, !0), c = a.innerHTML);
                if (b.node.isEmpty(b.el) && !b.opts.keepFormatOnDelete && H(c)) b.el.innerHTML = c;
                else if (a = b.markers.insert()) {
                    b.node.isLastSibling(a) && K(a).parent().hasClass("fr-deletable") && K(a).insertAfter(K(a).parent());
                    var d = b.node.blockParent(a);
                    if ((H(c) || e) && (b.node.deepestParent(a) || d && "LI" === d.tagName)) {
                        if (d && "LI" === d.tagName && b.html.defaultTag()) {
                            e = b.doc.createElement("div");
                            e.innerHTML = c;
                            c = e.querySelectorAll(":scope > ".concat(b.html.defaultTag()));
                            for (a = c.length -
                                1; 0 <= a; a--) d = c[a], b.node.isBlock(d.previousSibling) || (d.previousSibling && !b.node.isEmpty(d) && K("<br>").insertAfter(d.previousSibling), d.outerHTML = d.innerHTML);
                            c = e.innerHTML
                        }
                        a = b.markers.split();
                        if (!a) return !1
                    }
                    a.outerHTML = c
                } else b.el.innerHTML += c;
                q();
                b.keys.positionCaret();
                b.events.trigger("html.inserted")
            },
            wrap: x,
            unwrap: function() {
                b.$el.find("div.fr-temp-div").each(function() {
                    this.previousSibling && this.previousSibling.nodeType === Node.TEXT_NODE && K(this).before("<br>");
                    K(this).attr("data-empty") || !this.nextSibling || b.node.isBlock(this.nextSibling) && !K(this.nextSibling).hasClass("fr-temp-div") ? K(this).replaceWith(K(this).html()) : K(this).replaceWith("".concat(K(this).html(), "<br>"))
                });
                b.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function() {
                    return "" === K(this).attr("class")
                }).removeAttr("class")
            },
            escapeEntities: function(b) {
                return b.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/"/gi, "&quot;").replace(/'/gi, "&#39;")
            },
            checkIfEmpty: t,
            extractNode: G,
            extractNodeAttrs: L,
            extractDoctype: w,
            cleanBRs: function() {
                for (var a = b.el.getElementsByTagName("br"), c = 0; c < a.length; c++) y(a[c])
            },
            _init: function() {
                b.events.$on(b.$el, "mousemove", "span.fr-word-select", function(b) {
                    window.getSelection();
                    var a = window.getSelection();
                    var c = document.createRange();
                    c.selectNodeContents(b.target);
                    a.removeAllRanges();
                    a.addRange(c)
                });
                b.$wp && (b.events.on("mouseup", ka), b.events.on("keydown", ka), b.events.on("contentChanged", t))
            },
            _setHtml: r
        }
    };
    a.ENTER_P = 0;
    a.ENTER_DIV = 1;
    a.ENTER_BR = 2;
    a.KEYCODE = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        FF_SEMICOLON: 59,
        FF_EQUALS: 61,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        FF_HYPHEN: 173,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        HYPHEN: 189,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        TILDE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        IME: 229
    };
    Object.assign(a.DEFAULTS, {
        enter: a.ENTER_P,
        multiLine: !0,
        tabSpaces: 0
    });
    a.MODULES.keys = function(b) {
        function c() {
            setTimeout(function() {
                b.events.disableBlur();
                b.events.focus()
            }, 0)
        }

        function d(a) {
            b.selection.isCollapsed() ? (0 > ["INPUT", "BUTTON", "TEXTAREA"].indexOf(a.target && a.target.tagName) && b.cursor.backspace(), b.helpers.isIOS() ? (a = b.selection.ranges(0), a.deleteContents(), a.insertNode(document.createTextNode("\u200b")), b.selection.get().modify("move", "forward", "character")) : (0 > ["INPUT", "BUTTON", "TEXTAREA"].indexOf(a.target && a.target.tagName) && a.preventDefault(), a.stopPropagation())) : (a.preventDefault(), a.stopPropagation(), b.selection.remove());
            b.placeholder.refresh()
        }

        function f(a) {
            0 > ["INPUT", "BUTTON", "TEXTAREA"].indexOf(a.target && a.target.tagName) && a.preventDefault();
            a.stopPropagation();
            "" !== b.selection.text() || !b.selection.isCollapsed() && "IMG" == b.selection.element().tagName ? b.selection.remove() : b.cursor.del();
            b.placeholder.refresh()
        }

        function g() {
            if (b.browser.mozilla && b.selection.isCollapsed() && !W) {
                var a = b.selection.ranges(0),
                    c = a.startContainer;
                a = a.startOffset;
                c && c.nodeType === Node.TEXT_NODE && a <= c.textContent.length && 0 < a && 32 === c.textContent.charCodeAt(a - 1) && (b.selection.save(), b.spaces.normalize(), b.selection.restore())
            }
        }

        function h() {
            b.selection.isFull() && setTimeout(function() {
                var c = b.html.defaultTag();
                c ? b.$el.html("<".concat(c, ">").concat(a.MARKERS, "<br/></").concat(c, ">")) : b.$el.html("".concat(a.MARKERS, "<br/>"));
                b.selection.restore();
                b.placeholder.refresh();
                b.button.bulkRefresh();
                b.undo.saveStep()
            }, 0)
        }

        function A() {
            W = !1
        }

        function x() {
            W = !1
        }

        function m() {
            var c = b.html.defaultTag();
            c ? b.$el.html("<".concat(c, ">").concat(a.MARKERS, "<br/></").concat(c, ">")) : b.$el.html("".concat(a.MARKERS, "<br/>"));
            b.selection.restore()
        }

        function E(b, a) {
            if (-1 < b.innerHTML.indexOf("<span") || -1 < b.parentElement.innerHTML.indexOf("<span") || -1 < b.parentElement.parentElement.innerHTML.indexOf("<span"))
                if (b.classList.contains("fr-img-space-wrap") || b.parentElement.classList.contains("fr-img-space-wrap") || b.parentElement.parentElement.classList.contains("fr-img-space-wrap")) {
                    if (u(b.parentElement).is("p")) {
                        var c = b.parentElement.innerHTML;
                        c = c.replace(/<br>/g, "");
                        1 > c.length ? b.parentElement.insertAdjacentHTML("afterbegin", "&nbsp;") : "&nbsp;" != c && " " != c && "Backspace" == a.key ? d(a) : "&nbsp;" != c && " " != c && "Delete" == a.key && f(a);
                        return !0
                    }
                    if (u(b).is("p")) return c = b.innerHTML.replace(/<br>/g, ""), 1 > c.length ? b.insertAdjacentHTML("afterbegin", "&nbsp;") : "&nbsp;" != c && " " != c && "Backspace" == a.key ? d(a) : "&nbsp;" != c && " " != c && "Delete" == a.key && f(a), !0
                }
            return !1
        }

        function F(e) {
            var g = b.selection.element();
            if (g && 0 <= ["INPUT", "TEXTAREA"].indexOf(g.tagName) || e && L(e.which)) return !0;
            b.events.disableBlur();
            var k = e.which;
            if (16 === k) return !0;
            H = k;
            if (k === a.KEYCODE.IME) return W = !0;
            W = !1;
            var l = G(k) && !q(e) && !e.altKey,
                n = k === a.KEYCODE.BACKSPACE || k === a.KEYCODE.DELETE;
            if (b.selection.isFull() && !b.opts.keepFormatOnDelete && !b.placeholder.isVisible() || n && b.placeholder.isVisible() && b.opts.keepFormatOnDelete)
                if (l || n)
                    if (m(), !G(k)) return e.preventDefault(), !0;
            if (k === a.KEYCODE.ENTER) e.shiftKey || g.classList.contains("fr-inner") || g.parentElement.classList.contains("fr-inner") ? (e.preventDefault(), e.stopPropagation(), b.opts.multiLine && (b.selection.isCollapsed() || b.selection.remove(), b.cursor.enter(!0))) : b.opts.multiLine ? (b.helpers.isIOS() || (e.preventDefault(), e.stopPropagation()), b.selection.isCollapsed() || b.selection.remove(), b.cursor.enter()) : (e.preventDefault(), e.stopPropagation());
            else if (k === a.KEYCODE.BACKSPACE && (e.metaKey || e.ctrlKey)) c();
            else if (k !== a.KEYCODE.BACKSPACE || q(e) || e.altKey)
                if (k !== a.KEYCODE.DELETE || q(e) || e.altKey || e.shiftKey)
                    if (k === a.KEYCODE.SPACE) {
                        if (g = b.selection.element(), !b.helpers.isMobile() && g && "A" === g.tagName && (e.preventDefault(), e.stopPropagation(), b.selection.isCollapsed() || b.selection.remove(), e = b.markers.insert())) g = e.previousSibling, !e.nextSibling && e.parentNode && "A" === e.parentNode.tagName ? (e.parentNode.insertAdjacentHTML("afterend", "&nbsp;".concat(a.MARKERS)), e.parentNode.removeChild(e)) : (g && g.nodeType === Node.TEXT_NODE && 1 === g.textContent.length && 160 === g.textContent.charCodeAt(0) ? g.textContent += " " : e.insertAdjacentHTML("beforebegin", "&nbsp;"), e.outerHTML = a.MARKERS), b.selection.restore()
                    } else if (k === a.KEYCODE.TAB) {
                if (0 < b.opts.tabSpaces)
                    if (b.selection.isCollapsed()) {
                        b.undo.saveStep();
                        e.preventDefault();
                        e.stopPropagation();
                        e = "";
                        for (g = 0; g < b.opts.tabSpaces; g++) e += "&nbsp;";
                        b.html.insert(e);
                        b.placeholder.refresh();
                        b.undo.saveStep()
                    } else e.preventDefault(), e.stopPropagation(), e.shiftKey ? b.commands.outdent() : b.commands.indent()
            } else q(e) || !G(e.which) || b.selection.isCollapsed() || e.ctrlKey || e.altKey || b.selection.remove();
            else {
                if (E(g, e)) {
                    e.preventDefault();
                    e.stopPropagation();
                    return
                }
                b.placeholder.isVisible() ? (b.opts.keepFormatOnDelete || m(), e.preventDefault(), e.stopPropagation()) : f(e)
            } else {
                if (E(g, e)) {
                    e.preventDefault();
                    e.stopPropagation();
                    return
                }
                b.placeholder.isVisible() ? (b.opts.keepFormatOnDelete || m(), e.preventDefault(), e.stopPropagation()) : d(e)
            }
            b.events.enableBlur()
        }

        function C(a) {
            for (a = b.doc.createTreeWalker(a, NodeFilter.SHOW_TEXT, b.node.filter(function(b) {
                    return /\u200B/gi.test(b.textContent)
                }), !1); a.nextNode();) {
                var c = a.currentNode;
                c.textContent = c.textContent.replace(/\u200B/gi, "")
            }
        }

        function y() {
            if (!b.$wp) return !0;
            if (b.opts.height || b.opts.heightMax) {
                var a = b.position.getBoundingRect().top;
                if (b.helpers.isIOS() || b.helpers.isAndroid()) a -= b.helpers.scrollTop();
                b.opts.iframe && (a += b.$iframe.offset().top);
                a > b.$wp.offset().top - b.helpers.scrollTop() + b.$wp.height() - 20 && b.$wp.scrollTop(a + b.$wp.scrollTop() - (b.$wp.height() + b.$wp.offset().top) + b.helpers.scrollTop() + 20)
            } else {
                a = b.position.getBoundingRect().top;
                b.opts.toolbarBottom && (a += b.opts.toolbarStickyOffset);
                if (b.helpers.isIOS() || b.helpers.isAndroid()) a -= b.helpers.scrollTop();
                b.opts.iframe && (a += b.$iframe.offset().top, a -= b.helpers.scrollTop());
                a += b.opts.toolbarStickyOffset;
                a > b.o_win.innerHeight -
                    20 && u(b.o_win).scrollTop(a + b.helpers.scrollTop() - b.o_win.innerHeight + 20);
                a = b.position.getBoundingRect().top;
                b.opts.toolbarBottom || (a -= b.opts.toolbarStickyOffset);
                if (b.helpers.isIOS() || b.helpers.isAndroid()) a -= b.helpers.scrollTop();
                b.opts.iframe && (a += b.$iframe.offset().top, a -= b.helpers.scrollTop());
                100 > a && u(b.o_win).scrollTop(a + b.helpers.scrollTop() - 100)
            }
        }

        function t(c) {
            function e(a) {
                var c = /[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi;
                return !b.helpers.isIOS() || 0 === ((a.textContent || "").match(c) || []).length
            }
            var d = b.selection.element();
            if (d && 0 <= ["INPUT", "TEXTAREA"].indexOf(d.tagName)) return !0;
            c && 0 === c.which && H && (c.which = H);
            if (b.helpers.isAndroid() && b.browser.mozilla) return !0;
            if (W) return !1;
            c && b.helpers.isIOS() && c.which === a.KEYCODE.ENTER && b.doc.execCommand("undo");
            if (!b.selection.isCollapsed() || c && (c.which === a.KEYCODE.META || c.which === a.KEYCODE.CTRL) || c && L(c.which)) return !0;
            if (c && !b.helpers.isIOS() && (c.which === a.KEYCODE.ENTER || c.which === a.KEYCODE.BACKSPACE || 37 <= c.which && 40 >= c.which && !b.browser.msie)) try {
                y()
            } catch (ea) {}
            c = b.selection.element();
            (function(b) {
                if (!b) return !1;
                b = b.innerHTML;
                return (b = b.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi, "")) && /\u200B/.test(b) && 0 < b.replace(/\u200B/gi, "").length ? !0 : !1
            })(c) && !b.node.hasClass(c, "fr-marker") && "IFRAME" !== c.tagName && e(c) && (b.selection.save(), C(c), b.selection.restore())
        }

        function q(b) {
            if (-1 !== navigator.userAgent.indexOf("Mac OS X")) {
                if (b.metaKey && !b.altKey) return !0
            } else if (b.ctrlKey && !b.altKey) return !0;
            return !1
        }

        function L(b) {
            if (b >= a.KEYCODE.ARROW_LEFT && b <= a.KEYCODE.ARROW_DOWN) return !0
        }

        function G(c) {
            if (c >= a.KEYCODE.ZERO && c <= a.KEYCODE.NINE || c >= a.KEYCODE.NUM_ZERO && c <= a.KEYCODE.NUM_MULTIPLY || c >= a.KEYCODE.A && c <= a.KEYCODE.Z || b.browser.webkit && 0 === c) return !0;
            switch (c) {
                case a.KEYCODE.SPACE:
                case a.KEYCODE.QUESTION_MARK:
                case a.KEYCODE.NUM_PLUS:
                case a.KEYCODE.NUM_MINUS:
                case a.KEYCODE.NUM_PERIOD:
                case a.KEYCODE.NUM_DIVISION:
                case a.KEYCODE.SEMICOLON:
                case a.KEYCODE.FF_SEMICOLON:
                case a.KEYCODE.DASH:
                case a.KEYCODE.EQUALS:
                case a.KEYCODE.FF_EQUALS:
                case a.KEYCODE.COMMA:
                case a.KEYCODE.PERIOD:
                case a.KEYCODE.SLASH:
                case a.KEYCODE.APOSTROPHE:
                case a.KEYCODE.SINGLE_QUOTE:
                case a.KEYCODE.OPEN_SQUARE_BRACKET:
                case a.KEYCODE.BACKSLASH:
                case a.KEYCODE.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
            }
        }

        function w(c) {
            var e = c.which;
            if (q(c) || 37 <= e && 40 >= e || !G(e) && e !== a.KEYCODE.DELETE && e !== a.KEYCODE.BACKSPACE && e !== a.KEYCODE.ENTER && e !== a.KEYCODE.IME) return !0;
            T || (ka = b.snapshot.get(), b.undo.canDo() || b.undo.saveStep());
            clearTimeout(T);
            T = setTimeout(function() {
                T = null;
                b.undo.saveStep()
            }, Math.max(250, b.opts.typingTimer))
        }

        function v(a) {
            var c = a.which;
            if (q(a) || 37 <= c && 40 >= c) return !0;
            ka && T ? (b.undo.saveStep(ka), ka = null) : "undefined" !== typeof c && 0 !== c || ka || T || b.undo.saveStep()
        }

        function r(a) {
            if (a && "BR" === a.tagName) return !1;
            try {
                return 0 === (a.textContent || "").length && a.querySelector && !a.querySelector(":scope > br") || a.childNodes && 1 === a.childNodes.length && a.childNodes[0].getAttribute && ("false" === a.childNodes[0].getAttribute("contenteditable") || b.node.hasClass(a.childNodes[0], "fr-img-caption"))
            } catch (P) {
                return !1
            }
        }

        function z(c) {
            var e = b.el.childNodes,
                d = b.html.defaultTag(),
                g = b.node.blockParent(b.selection.blocks()[0]);
            g && "TR" == g.tagName && void 0 == g.getAttribute("contenteditable") && (g = g.closest("table"));
            !b.node.isEditable(c.target) || g && "false" === g.getAttribute("contenteditable") ? b.toolbar.disable() : b.toolbar.enable();
            if (c.target && c.target !== b.el || 0 === e.length) return !0;
            e[0].offsetHeight + e[0].offsetTop <= c.offsetY ? r(e[e.length - 1]) && (d ? b.$el.append("<".concat(d, ">").concat(a.MARKERS, "<br></").concat(d, ">")) : b.$el.append("".concat(a.MARKERS, "<br>")), b.selection.restore(), y()) : 10 >= c.offsetY && r(e[0]) && (d ? b.$el.prepend("<".concat(d, ">").concat(a.MARKERS, "<br></").concat(d, ">")) : b.$el.prepend("".concat(a.MARKERS, "<br>")), b.selection.restore(), y())
        }

        function l() {
            T && clearTimeout(T)
        }
        var u = b.$,
            W = !1,
            H, T, ka;
        return {
            _init: function() {
                b.events.on("keydown", w);
                b.events.on("input", g);
                b.events.on("mousedown", x);
                b.events.on("keyup input", v);
                b.events.on("keypress", A);
                b.events.on("keydown", F);
                b.events.on("keyup", t);
                b.events.on("destroy", l);
                b.events.on("html.inserted", t);
                b.events.on("cut", h);
                if (b.opts.multiLine) b.events.on("click", z)
            },
            ctrlKey: q,
            isCharacter: G,
            isArrow: L,
            forceUndo: function() {
                T && (clearTimeout(T), b.undo.saveStep(), ka = null)
            },
            isIME: function() {
                return W
            },
            isBrowserAction: function(b) {
                var c = b.which;
                return q(b) || c === a.KEYCODE.F5
            },
            positionCaret: y
        }
    };
    Object.assign(a.DEFAULTS, {
        pastePlain: !1,
        pasteDeniedTags: ["colgroup", "col", "meta"],
        pasteDeniedAttrs: ["class", "id"],
        pasteAllowedStyleProps: [".*"],
        pasteAllowLocalImages: !1
    });
    a.MODULES.paste = function(b) {
        function c(a, c) {
            try {
                b.win.localStorage.setItem("fr-copied-html", a), b.win.localStorage.setItem("fr-copied-text", c)
            } catch (ka) {}
        }

        function d(a) {
            var e = b.html.getSelected();
            c(e, w(b.doc.createElement("div")).html(e).text());
            "cut" === a.type && (b.undo.saveStep(), setTimeout(function() {
                b.selection.save();
                b.html.wrap();
                b.selection.restore();
                b.events.focus();
                b.undo.saveStep()
            }, 0))
        }

        function f(a) {
            if ("INPUT" === a.target.nodeName && "text" === a.target.type) return !0;
            if (b.edit.isDisabled() || g(a.target) || W) return !1;
            a.originalEvent && (a = a.originalEvent);
            if (!1 === b.events.trigger("paste.before", [a])) return a.preventDefault(), !1;
            if (a && a.clipboardData && a.clipboardData.getData) {
                var c = "",
                    e = a.clipboardData.types;
                if (b.helpers.isArray(e))
                    for (var d = 0; d < e.length; d++) c += "".concat(e[d], ";");
                else c = e;
                v = "";
                /text\/rtf/.test(c) && (r = a.clipboardData.getData("text/rtf"));
                /text\/html/.test(c) && !b.browser.safari ? v = a.clipboardData.getData("text/html") : /text\/rtf/.test(c) && b.browser.safari ? v = r : /public.rtf/.test(c) && b.browser.safari && (v = a.clipboardData.getData("text/rtf"));
                z = a.clipboardData.getData("text");
                if ("" !== v) return E(), a.preventDefault && (a.stopPropagation(), a.preventDefault()), !1;
                v = null
            }
            A();
            return !1
        }

        function g(b) {
            return b && "false" === b.contentEditable
        }

        function h(c) {
            c.originalEvent && (c = c.originalEvent);
            if (g(c.target)) return !1;
            if (c && c.dataTransfer && c.dataTransfer.getData) {
                var e = "",
                    d = c.dataTransfer.types;
                if (b.helpers.isArray(d))
                    for (var f = 0; f < d.length; f++) e += "".concat(d[f], ";");
                else e = d;
                v = "";
                /text\/rtf/.test(e) && (r = c.dataTransfer.getData("text/rtf"));
                /text\/html/.test(e) ? v = c.dataTransfer.getData("text/html") : /text\/rtf/.test(e) && b.browser.safari ? v = r : /text\/plain/.test(e) && !this.browser.mozilla && (v = b.html.escapeEntities(c.dataTransfer.getData("text/plain")).replace(/\n/g, "<br>"));
                if ("" !== v) {
                    if (b.keys.forceUndo(), u = b.snapshot.get(), b.selection.save(), b.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper"), e = b.markers.insertAtPoint(c), b.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"), b.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"), b.selection.restore(), b.selection.remove(), b.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"), !1 !== e) return e = b.el.querySelector(".fr-marker"), w(e).replaceWith(a.MARKERS), b.selection.restore(), E(), c.preventDefault && (c.stopPropagation(), c.preventDefault()), !1
                } else v = null
            }
        }

        function A() {
            b.selection.save();
            b.events.disableBlur();
            v = null;
            l ? (l.html(""), b.browser.edge && b.opts.iframe && b.$el.append(l)) : (l = w('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>'), b.browser.webkit || b.browser.mozilla ? (l.css("top", b.$sc.scrollTop()), b.$el.after(l)) : b.browser.edge && b.opts.iframe ? b.$el.append(l) : b.$box.after(l), b.events.on("destroy", function() {
                l.remove()
            }));
            var a;
            b.helpers.isIOS() && b.$sc && (a = b.$sc.scrollTop());
            b.opts.iframe && b.$el.attr("contenteditable", "false");
            l.focus();
            b.helpers.isIOS() && b.$sc && b.$sc.scrollTop(a);
            b.win.setTimeout(E, 1)
        }

        function x(a) {
            var c;
            a = a.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li>$3</li></ul>");
            a = a.replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li>$3</li></ol>");
            a = a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li$3>$5</li>");
            a = a.replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li$3>$5</li>");
            a = a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>");
            a = a.replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>");
            a = a.replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>");
            a = a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ul>");
            a = a.replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ol>");
            a = a.replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi, "<span><span");
            a = a.replace(/\x3c!--\[if !supportLists\]--\x3e([\s\S]*?)\x3c!--\[endif\]--\x3e/gi, "");
            a = a.replace(/<!\[if !supportLists\]>([\s\S]*?)<!\[endif\]>/gi, "");
            a = a.replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi, " ");
            a = a.replace(/\x3c!--[\s\S]*?--\x3e/gi, "");
            a = a.replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi, "");
            var e = "style script applet embed noframes noscript".split(" ");
            for (c = 0; c < e.length; c++) {
                var d = new RegExp("<".concat(e[c], ".*?").concat(e[c], "(.*?)>"), "gi");
                a = a.replace(d, "")
            }
            a = a.replace(/&nbsp;/gi, " ");
            a = a.replace(/<td([^>]*)><\/td>/g, "<td$1><br></td>");
            a = a.replace(/<th([^>]*)><\/th>/g, "<th$1><br></th>");
            do c = a, a = a.replace(/<[^/>][^>]*><\/[^>]+>/gi, ""); while (a !== c);
            a = a.replace(/<lilevel([^1])([^>]*)>/gi, '<li data-indent="true"$2>');
            a = a.replace(/<lilevel1([^>]*)>/gi, "<li$1>");
            a = b.clean.html(a, b.opts.pasteDeniedTags, b.opts.pasteDeniedAttrs);
            a = a.replace(/<a>(.[^<]+)<\/a>/gi, "$1");
            a = a.replace(/<br> */g, "<br>");
            e = b.o_doc.createElement("div");
            e.innerHTML = a;
            a = e.querySelectorAll("li[data-indent]");
            for (c = 0; c < a.length; c++) {
                d = a[c];
                var g = d.previousElementSibling;
                if (g && "LI" === g.tagName) {
                    var f = g.querySelector(":scope > ul, :scope > ol");
                    f || (f = document.createElement("ul"), g.appendChild(f));
                    f.appendChild(d)
                } else d.removeAttribute("data-indent")
            }
            b.html.cleanBlankSpaces(e);
            return a = e.innerHTML
        }

        function m(a) {
            function c(a) {
                a = b.node.contents(a);
                for (var e = 0; e < a.length; e++) a[e].nodeType !== Node.TEXT_NODE && a[e].nodeType !== Node.ELEMENT_NODE ? a[e].parentNode.removeChild(a[e]) : c(a[e])
            }
            var e = null,
                d = b.doc.createElement("div");
            d.innerHTML = a;
            var g = d.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");
            for (a = 0; a < g.length; a++) e = g[a], e.outerHTML = "<".concat(b.html.defaultTag() || "DIV", ">").concat(e.innerHTML, "</").concat(b.html.defaultTag() || "DIV", ">");
            g = d.querySelectorAll("*:not(".concat("p; div; h1; h2; h3; h4; h5; h6; pre; blockquote; ul; ol; li; table; tbody; thead; tr; td; br; img".split(";").join("):not("), ")"));
            for (a = g.length - 1; 0 <= a; a--) e = g[a], e.outerHTML = e.innerHTML;
            c(d);
            return d.innerHTML
        }

        function E() {
            b.opts.iframe && b.$el.attr("contenteditable", "true");
            b.browser.edge && b.opts.iframe && b.$box.after(l);
            u || (b.keys.forceUndo(), u = b.snapshot.get());
            v || (v = l.get(0).innerHTML, z = l.text(), b.selection.restore(), b.events.enableBlur());
            var a = v.match(/(class="?Mso|class='?Mso|class="?Xl|class='?Xl|class=Xl|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument|LibreOffice)/gi),
                c = b.events.chainTrigger("paste.beforeCleanup", v);
            c && "string" === typeof c && (v = c);
            (!a || a && !1 !== b.events.trigger("paste.wordPaste", [v])) && y(v, a)
        }

        function F() {
            var a = null;
            try {
                a = b.win.localStorage.getItem("fr-copied-text")
            } catch (T) {}
            return a && z && (z.replace(/\u00A0/gi, " ").replace(/\r|\n/gi, "") === a.replace(/\u00A0/gi, " ").replace(/\r|\n/gi, "") || z.replace(/\s/g, "") === a.replace(/\s/g, "")) ? !0 : !1
        }

        function C(b) {
            for (var a = "", c = 0; c++ < b;) a += "&nbsp;";
            return a
        }

        function y(c, e, d) {
            var g = null,
                f = null;
            if (0 <= c.toLowerCase().indexOf("<body")) {
                var k = "";
                0 <= c.indexOf("<style") && (k = c.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi, "$1"));
                c = k + c.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi, "$1");
                c = c.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g, function(b) {
                    return b.replace(/ \n/g, "<br />")
                });
                c = c.replace(/ \n/g, " ").replace(/\n /g, " ").replace(/([^>])\n([^<])/g, "$1 $2")
            }
            g = !1;
            0 <= c.indexOf('id="docs-internal-guid') && (c = c.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g, "$1"), g = !0);
            0 <= c.indexOf('content="Sheets"') && (c = c.replace(/width:0px;/g, ""));
            k = !1;
            e || ((k = F()) && (c = b.win.localStorage.getItem("fr-copied-html")), k ? c = b.clean.html(c, b.opts.pasteDeniedTags, b.opts.pasteDeniedAttrs) : (f = b.opts.htmlAllowedStyleProps, b.opts.htmlAllowedStyleProps = b.opts.pasteAllowedStyleProps, b.opts.htmlAllowComments = !1, c = c.replace(/<span class="Apple-tab-span">\s*<\/span>/g, C(b.opts.tabSpaces || 4)), c = c.replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g, function(a, c) {
                return C(c.length * (b.opts.tabSpaces || 4))
            }), c = c.replace(/\t/g, C(b.opts.tabSpaces || 4)), c = b.clean.html(c, b.opts.pasteDeniedTags, b.opts.pasteDeniedAttrs), b.opts.htmlAllowedStyleProps = f, b.opts.htmlAllowComments = !0, c = q(c), c = c.replace(/\r/g, ""), c = c.replace(/^ */g, "").replace(/ *$/g, "")));
            !e || b.wordPaste && d || (c = c.replace(/^\n*/g, "").replace(/^ /g, ""), 0 === c.indexOf("<colgroup>") && (c = "<table>".concat(c, "</table>")), c = x(c), c = q(c));
            b.opts.pastePlain && !k && (c = m(c));
            e = b.events.chainTrigger("paste.afterCleanup", c);
            "string" === typeof e && (c = e);
            if ("" !== c) {
                e = b.o_doc.createElement("div");
                e.innerHTML = c;
                0 <= c.indexOf("<body>") ? (b.html.cleanBlankSpaces(e), b.spaces.normalize(e, !0)) : b.spaces.normalize(e);
                d = e.getElementsByTagName("span");
                for (c = d.length - 1; 0 <= c; c--) f = d[c], 0 === f.attributes.length && (f.outerHTML = f.innerHTML);
                if (!0 === b.opts.linkAlwaysBlank)
                    for (d = e.getElementsByTagName("a"), c = d.length - 1; 0 <= c; c--) f = d[c], f.getAttribute("target") || f.setAttribute("target", "_blank");
                c = b.selection.element();
                d = !1;
                c && w(c).parentsUntil(b.el, "ul, ol").length && (d = !0);
                d && (c = e.children, 1 === c.length && 0 <= ["OL", "UL"].indexOf(c[0].tagName) && (c[0].outerHTML = c[0].innerHTML));
                if (!g)
                    for (g = e.getElementsByTagName("br"), c = g.length -
                        1; 0 <= c; c--) d = g[c], b.node.isBlock(d.previousSibling) && d.parentNode.removeChild(d);
                if (b.opts.enter === a.ENTER_BR)
                    for (g = e.querySelectorAll("p, div"), c = g.length - 1; 0 <= c; c--) f = g[c], 0 === f.attributes.length && (f.outerHTML = f.innerHTML + (f.nextSibling && !b.node.isEmpty(f) ? "<br>" : ""));
                else if (b.opts.enter === a.ENTER_DIV)
                    for (g = e.getElementsByTagName("p"), c = g.length - 1; 0 <= c; c--) f = g[c], 0 === f.attributes.length && (f.outerHTML = "<div>".concat(f.innerHTML, "</div>"));
                else b.opts.enter === a.ENTER_P && 1 === e.childNodes.length && "P" === e.childNodes[0].tagName && 0 === e.childNodes[0].attributes.length && (e.childNodes[0].outerHTML = e.childNodes[0].innerHTML);
                c = e.innerHTML;
                k && (c = G(c));
                b.html.insert(c, !0)
            }
            b.events.trigger("paste.after");
            b.undo.saveStep(u);
            u = null;
            b.undo.saveStep()
        }

        function t(b) {
            for (var a = b.length - 1; 0 <= a; a--) b[a].attributes && b[a].attributes.length && b.splice(a, 1);
            return b
        }

        function q(a) {
            var c = b.o_doc.createElement("div");
            c.innerHTML = a;
            for (var e = t(Array.prototype.slice.call(c.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])"))); e.length;) a = e[e.length - 1], b.html.defaultTag() && "div" !== b.html.defaultTag() ? a.querySelector(b.html.blockTagsQuery()) ? a.outerHTML = a.innerHTML : a.outerHTML = "<".concat(b.html.defaultTag(), ">").concat(a.innerHTML, "</").concat(b.html.defaultTag(), ">") : (e = a.querySelectorAll("*"), a.outerHTML = !e.length || "BR" !== e[e.length - 1].tagName && 0 === a.innerText.length ? a.innerHTML + (a.nextSibling ? "<br>" : "") : !e.length || "BR" !== e[e.length - 1].tagName || e[e.length - 1].nextSibling ? a.innerHTML + (a.nextSibling ? "<br>" : "") : a.innerHTML), e = t(Array.prototype.slice.call(c.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));
            for (e = t(Array.prototype.slice.call(c.querySelectorAll("div:not([style])"))); e.length;) {
                for (a = 0; a < e.length; a++) {
                    var d = e[a],
                        g = d.innerHTML.replace(/\u0009/gi, "").trim();
                    d.outerHTML = g
                }
                e = t(Array.prototype.slice.call(c.querySelectorAll("div:not([style])")))
            }
            return c.innerHTML
        }

        function G(c) {
            var e = b.o_doc.createElement("div");
            e.innerHTML = c;
            for (var d = e.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(a.VOID_ELEMENTS.join("):not("), "):not(").concat(b.opts.htmlAllowedEmptyTags.join("):not("), ")")); d.length;) {
                for (c = 0; c < d.length; c++) d[c].parentNode.removeChild(d[c]);
                d = e.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(a.VOID_ELEMENTS.join("):not("), "):not(").concat(b.opts.htmlAllowedEmptyTags.join("):not("), ")"))
            }
            return e.innerHTML
        }

        function L() {
            b.el.removeEventListener("copy", d);
            b.el.removeEventListener("cut", d);
            b.el.removeEventListener("paste", f)
        }
        var w = b.$,
            v, r, z, l, u, W = !1;
        return {
            _init: function() {
                b.el.addEventListener("copy", d);
                b.el.addEventListener("cut", d);
                b.el.addEventListener("paste", f, {
                    capture: !0
                });
                b.events.on("drop", h);
                b.browser.msie && 11 > b.browser.version && (b.events.on("mouseup", function(b) {
                    2 === b.button && (setTimeout(function() {
                        W = !1
                    }, 50), W = !0)
                }, !0), b.events.on("beforepaste", f));
                b.events.on("destroy", L)
            },
            cleanEmptyTagsAndDivs: q,
            getRtfClipboard: function() {
                return r
            },
            saveCopiedText: c,
            clean: y
        }
    };
    Object.assign(a.DEFAULTS, {
        shortcutsEnabled: [],
        shortcutsHint: !0
    });
    a.SHORTCUTS_MAP = {};
    a.RegisterShortcut = function(b, c, d, f, g, h) {
        a.SHORTCUTS_MAP[(g ? "^" : "") + (h ? "@" : "") + b] = {
            cmd: c,
            val: d,
            letter: f,
            shift: g,
            option: h
        };
        a.DEFAULTS.shortcutsEnabled.push(c)
    };
    a.RegisterShortcut(a.KEYCODE.E, "show", null, "E", !1, !1);
    a.RegisterShortcut(a.KEYCODE.B, "bold", null, "B", !1, !1);
    a.RegisterShortcut(a.KEYCODE.I, "italic", null, "I", !1, !1);
    a.RegisterShortcut(a.KEYCODE.U, "underline", null, "U", !1, !1);
    a.RegisterShortcut(a.KEYCODE.S, "strikeThrough", null, "S", !1, !1);
    a.RegisterShortcut(a.KEYCODE.CLOSE_SQUARE_BRACKET, "indent", null, "]", !1, !1);
    a.RegisterShortcut(a.KEYCODE.OPEN_SQUARE_BRACKET, "outdent", null, "[", !1, !1);
    a.RegisterShortcut(a.KEYCODE.Z, "undo", null, "Z", !1, !1);
    a.RegisterShortcut(a.KEYCODE.Z, "redo", null, "Z", !0, !1);
    a.RegisterShortcut(a.KEYCODE.Y, "redo", null, "Y", !1, !1);
    a.MODULES.shortcuts = function(b) {
        function c(c) {
            if (!b.core.hasFocus()) return !0;
            var e = c.which,
                d = -1 !== navigator.userAgent.indexOf("Mac OS X") ? c.metaKey : c.ctrlKey;
            if ("keyup" === c.type && f && e !== a.KEYCODE.META) return f = !1;
            "keydown" === c.type && (f = !1);
            e = (c.shiftKey ? "^" : "") + (c.altKey ? "@" : "") + e;
            var g = b.node.blockParent(b.selection.blocks()[0]);
            g && "TR" == g.tagName && void 0 == g.getAttribute("contenteditable") && (g = g.closest("table"));
            if (d && a.SHORTCUTS_MAP[e] && (!g || "false" !== g.getAttribute("contenteditable")) && (d = a.SHORTCUTS_MAP[e].cmd) && 0 <= b.opts.shortcutsEnabled.indexOf(d))
                if (!1 !== b.events.trigger("shortcut", [c, d, a.SHORTCUTS_MAP[e].val])) {
                    if (d && (b.commands[d] || a.COMMANDS[d] && a.COMMANDS[d].callback)) return c.preventDefault(), c.stopPropagation(), "keydown" === c.type && ((b.commands[d] || a.COMMANDS[d].callback)(), f = !0), !1
                } else return f = !0, !1
        }
        var d = null,
            f = !1;
        return {
            _init: function() {
                b.events.on("keydown", c, !0);
                b.events.on("keyup", c, !0)
            },
            get: function(c) {
                if (!b.opts.shortcutsHint) return null;
                if (!d) {
                    d = {};
                    for (var e in a.SHORTCUTS_MAP) Object.prototype.hasOwnProperty.call(a.SHORTCUTS_MAP, e) && 0 <= b.opts.shortcutsEnabled.indexOf(a.SHORTCUTS_MAP[e].cmd) && (d["".concat(a.SHORTCUTS_MAP[e].cmd, ".").concat(a.SHORTCUTS_MAP[e].val || "")] = {
                        shift: a.SHORTCUTS_MAP[e].shift,
                        option: a.SHORTCUTS_MAP[e].option,
                        letter: a.SHORTCUTS_MAP[e].letter
                    })
                }
                return (c = d[c]) ? (b.helpers.isMac() ? String.fromCharCode(8984) : "".concat(b.language.translate("Ctrl"), "+")) + (c.shift ? b.helpers.isMac() ? String.fromCharCode(8679) : "".concat(b.language.translate("Shift"), "+") : "") + (c.option ? b.helpers.isMac() ? String.fromCharCode(8997) : "".concat(b.language.translate("Alt"), "+") : "") + c.letter : null
            }
        }
    };
    a.MODULES.snapshot = function(b) {
        function a(b) {
            for (var a = b.parentNode.childNodes, c = 0, e = null, d = 0; d < a.length; d++) {
                if (e) {
                    var g = e.nodeType === Node.TEXT_NODE && a[d].nodeType === Node.TEXT_NODE;
                    e = e.nodeType === Node.TEXT_NODE && "" === e.textContent;
                    a[d].nodeType === Node.TEXT_NODE && "" === a[d].textContent || g || e || c++
                }
                if (a[d] === b) return c;
                e = a[d]
            }
        }

        function c(c) {
            var e = [];
            if (!c.parentNode) return [];
            for (; !b.node.isElement(c);) e.push(a(c)), c = c.parentNode;
            return e.reverse()
        }

        function d(b, a) {
            for (; b && b.nodeType === Node.TEXT_NODE;)(b = b.previousSibling) && b.nodeType === Node.TEXT_NODE && (a += b.textContent.length);
            return a
        }

        function g(b) {
            return {
                scLoc: c(b.startContainer),
                scOffset: d(b.startContainer, b.startOffset),
                ecLoc: c(b.endContainer),
                ecOffset: d(b.endContainer, b.endOffset)
            }
        }

        function f(a) {
            for (var c = b.el, e = 0; e < a.length; e++) c = c.childNodes[a[e]];
            return c
        }
        return {
            get: function() {
                var a = {};
                b.events.trigger("snapshot.before");
                a.html = (b.$wp ? b.$el.html() : b.$oel.get(0).outerHTML).replace(/ style=""/g, "");
                a.ranges = [];
                if (b.$wp && b.selection.inEditor() && b.core.hasFocus())
                    for (var c = b.selection.ranges(), e = 0; e < c.length; e++) a.ranges.push(g(c[e]));
                b.events.trigger("snapshot.after", [a]);
                return a
            },
            restore: function(a) {
                b.$el.html() !== a.html && (b.opts.htmlExecuteScripts ? b.$el.html(a.html) : b.el.innerHTML = a.html);
                var c = b.selection.get();
                b.selection.clear();
                b.events.focus(!0);
                for (var e = 0; e < a.ranges.length; e++) {
                    var d = c,
                        g = a.ranges[e];
                    try {
                        var k = f(g.scLoc),
                            n = g.scOffset,
                            h = f(g.ecLoc),
                            A = g.ecOffset,
                            I = b.doc.createRange();
                        I.setStart(k, n);
                        I.setEnd(h, A);
                        d.addRange(I)
                    } catch (da) {}
                }
            },
            equal: function(a, c) {
                return a.html !== c.html || b.core.hasFocus() && JSON.stringify(a.ranges) !== JSON.stringify(c.ranges) ? !1 : !0
            }
        }
    };
    a.MODULES.undo = function(b) {
        function c(c) {
            var e = c.which;
            b.keys.ctrlKey(c) && (e === a.KEYCODE.Z && c.shiftKey && c.preventDefault(), e === a.KEYCODE.Z && c.preventDefault())
        }

        function d() {
            if (b.undo_stack && !b.undoing)
                for (; b.undo_stack.length > b.undo_index;) b.undo_stack.pop()
        }

        function f() {
            b.undo_index = 0;
            b.undo_stack = []
        }

        function g() {
            b.undo_stack = []
        }
        var h = null;
        return {
            _init: function() {
                f();
                b.events.on("initialized", function() {
                    h = (b.$wp ? b.$el.html() : b.$oel.get(0).outerHTML).replace(/ style=""/g, "")
                });
                b.events.on("blur", function() {
                    b.el.querySelector(".fr-dragging") || b.undo.saveStep()
                });
                b.events.on("keydown", c);
                b.events.on("destroy", g)
            },
            run: function() {
                if (1 < b.undo_index) {
                    b.undoing = !0;
                    var a = b.undo_stack[--b.undo_index - 1];
                    clearTimeout(b._content_changed_timer);
                    b.snapshot.restore(a);
                    h = a.html;
                    b.popups.hideAll();
                    b.toolbar.enable();
                    b.events.trigger("contentChanged");
                    b.events.trigger("commands.undo");
                    b.undoing = !1
                }
            },
            redo: function() {
                if (b.undo_index < b.undo_stack.length) {
                    b.undoing = !0;
                    var a = b.undo_stack[b.undo_index++];
                    clearTimeout(b._content_changed_timer);
                    b.snapshot.restore(a);
                    h = a.html;
                    b.popups.hideAll();
                    b.toolbar.enable();
                    b.events.trigger("contentChanged");
                    b.events.trigger("commands.redo");
                    b.undoing = !1
                }
            },
            canDo: function() {
                return 0 === b.undo_stack.length || 1 >= b.undo_index ? !1 : !0
            },
            canRedo: function() {
                return b.undo_index === b.undo_stack.length ? !1 : !0
            },
            dropRedo: d,
            reset: f,
            saveStep: function(a) {
                !b.undo_stack || b.undoing || b.el.querySelector(".fr-marker") || ("undefined" === typeof a ? (a = b.snapshot.get(), b.undo_stack[b.undo_index - 1] && b.snapshot.equal(b.undo_stack[b.undo_index - 1], a) || (d(), b.undo_stack.push(a), b.undo_index++, a.html !== h && (b.events.trigger("contentChanged"), h = a.html))) : (d(), 0 < b.undo_index ? b.undo_stack[b.undo_index - 1] = a : (b.undo_stack.push(a), b.undo_index++)))
            }
        }
    };
    Object.assign(a.DEFAULTS, {
        height: null,
        heightMax: null,
        heightMin: null,
        width: null
    });
    a.MODULES.size = function(b) {
        function a() {
            c();
            b.opts.height && b.$el.css("minHeight", b.opts.height - b.helpers.getPX(b.$el.css("padding-top")) - b.helpers.getPX(b.$el.css("padding-bottom")));
            b.$iframe.height(b.$el.outerHeight(!0))
        }

        function c() {
            b.opts.heightMin ? b.$el.css("minHeight", b.opts.heightMin) : b.$el.css("minHeight", "");
            b.opts.heightMax ? (b.$wp.css("maxHeight", b.opts.heightMax), b.$wp.css("overflow", "auto")) : (b.$wp.css("maxHeight", ""), b.$wp.css("overflow", ""));
            b.opts.height ? (b.$wp.css("height", b.opts.height), b.$wp.css("overflow", "auto"), b.$el.css("minHeight", b.opts.height - b.helpers.getPX(b.$el.css("padding-top")) - b.helpers.getPX(b.$el.css("padding-bottom")))) : (b.$wp.css("height", ""), b.opts.heightMin || b.$el.css("minHeight", ""), b.opts.heightMax || b.$wp.css("overflow", ""));
            b.opts.width && b.$box.width(b.opts.width)
        }
        return {
            _init: function() {
                if (!b.$wp) return !1;
                c();
                b.$iframe && (b.events.on("keyup keydown", function() {
                    setTimeout(a, 0)
                }, !0), b.events.on("commands.after html.set init initialized paste.after", a))
            },
            syncIframe: a,
            refresh: c
        }
    };
    Object.assign(a.DEFAULTS, {
        documentReady: !1,
        editorClass: null,
        typingTimer: 500,
        iframe: !1,
        requestWithCORS: !0,
        requestWithCredentials: !1,
        requestHeaders: {},
        useClasses: !0,
        spellcheck: !0,
        iframeDefaultStyle: 'html{margin:0px;height:auto;}body{height:auto;padding:20px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}',
        iframeStyle: "",
        iframeStyleFiles: [],
        direction: "auto",
        zIndex: 1,
        tabIndex: null,
        disableRightClick: !1,
        scrollableContainer: "body",
        keepFormatOnDelete: !1,
        theme: null
    });
    a.MODULES.core = function(b) {
        function c() {
            b.$box.addClass("fr-box".concat(b.opts.editorClass ? " ".concat(b.opts.editorClass) : ""));
            b.$box.attr("role", "application");
            b.$wp.addClass("fr-wrapper");
            b.opts.documentReady && b.$box.addClass("fr-document");
            b.opts.iframe || b.$el.addClass("fr-element fr-view");
            if (b.opts.iframe) {
                b.$iframe.addClass("fr-iframe");
                b.$el.addClass("fr-view");
                for (var a = 0; a < b.o_doc.styleSheets.length; a++) {
                    var c = void 0;
                    try {
                        c = b.o_doc.styleSheets[a].cssRules
                    } catch (ua) {}
                    if (c)
                        for (var e = 0, d = c.length; e < d; e++) c[e].selectorText && (0 === c[e].selectorText.indexOf(".fr-view") || 0 === c[e].selectorText.indexOf(".fr-element")) && 0 < c[e].style.cssText.length && (0 === c[e].selectorText.indexOf(".fr-view") ? b.opts.iframeStyle += "".concat(c[e].selectorText.replace(/\.fr-view/g, "body"), "{").concat(c[e].style.cssText, "}") : b.opts.iframeStyle += "".concat(c[e].selectorText.replace(/\.fr-element/g, "body"), "{").concat(c[e].style.cssText, "}"))
                }
            }
            "auto" !== b.opts.direction && b.$box.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(b.opts.direction));
            b.$el.attr("dir", b.opts.direction);
            b.$wp.attr("dir", b.opts.direction);
            1 < b.opts.zIndex && b.$box.css("z-index", b.opts.zIndex);
            b.opts.theme && b.$box.addClass("".concat(b.opts.theme, "-theme"));
            b.opts.tabIndex = b.opts.tabIndex || b.$oel.attr("tabIndex");
            b.opts.tabIndex && b.$el.attr("tabIndex", b.opts.tabIndex)
        }
        var d = b.$;
        return {
            _init: function() {
                a.INSTANCES.push(b);
                b.drag_support = {
                    filereader: "undefined" !== typeof FileReader,
                    formdata: !!b.win.FormData,
                    progress: "upload" in new XMLHttpRequest
                };
                if (b.$wp) {
                    c();
                    b.html.set(b._original_html);
                    b.$el.attr("spellcheck", b.opts.spellcheck);
                    b.helpers.isMobile() && (b.$el.attr("autocomplete", b.opts.spellcheck ? "on" : "off"), b.$el.attr("autocorrect", b.opts.spellcheck ? "on" : "off"), b.$el.attr("autocapitalize", b.opts.spellcheck ? "on" : "off"));
                    b.opts.disableRightClick && b.events.$on(b.$el, "contextmenu", function(b) {
                        if (2 === b.button) return b.preventDefault(), b.stopPropagation(), !1
                    });
                    try {
                        b.doc.execCommand("styleWithCSS", !1, !1)
                    } catch (k) {}
                }
                "TEXTAREA" === b.$oel.get(0).tagName && (b.events.on("contentChanged", function() {
                    b.$oel.val(b.html.get())
                }), b.events.on("form.submit", function() {
                    b.$oel.val(b.html.get())
                }), b.events.on("form.reset", function() {
                    b.html.set(b._original_html)
                }), b.$oel.val(b.html.get()));
                b.helpers.isIOS() && b.events.$on(b.$doc, "selectionchange", function() {
                    b.$doc.get(0).hasFocus() || b.$win.get(0).focus()
                });
                b.events.trigger("init");
                if (b.opts.autofocus && !b.opts.initOnClick && b.$wp) b.events.on("initialized", function() {
                    b.events.focus(!0)
                })
            },
            destroy: function(a) {
                "TEXTAREA" === b.$oel.get(0).tagName && b.$oel.val(a);
                b.$box && b.$box.removeAttr("role");
                b.$wp && ("TEXTAREA" === b.$oel.get(0).tagName ? (b.$el.html(""), b.$wp.html(""), b.$box.replaceWith(b.$oel), b.$oel.show()) : (b.$wp.replaceWith(a), b.$el.html(""), b.$box.removeClass("fr-view fr-ltr fr-box ".concat(b.opts.editorClass || "")), b.opts.theme && b.$box.addClass("".concat(b.opts.theme, "-theme"))));
                this.$box = this.el = this.$el = this.$wp = null
            },
            isEmpty: function() {
                return b.node.isEmpty(b.el)
            },
            getXHR: function(a, c) {
                var e = new XMLHttpRequest;
                e.open(c, a, !0);
                b.opts.requestWithCredentials && (e.withCredentials = !0);
                for (var d in b.opts.requestHeaders) Object.prototype.hasOwnProperty.call(b.opts.requestHeaders, d) && e.setRequestHeader(d, b.opts.requestHeaders[d]);
                return e
            },
            injectStyle: function(a) {
                if (b.opts.iframe)
                    for (b.$head.find("style[data-fr-style], link[data-fr-style]").remove(), b.$head.append('<style data-fr-style="true">'.concat(a, "</style>")), a = 0; a < b.opts.iframeStyleFiles.length; a++) {
                        var c = d('<link data-fr-style="true" rel="stylesheet" href="'.concat(b.opts.iframeStyleFiles[a], '">'));
                        c.get(0).addEventListener("load", b.size.syncIframe);
                        b.$head.append(c)
                    }
            },
            hasFocus: function() {
                return b.browser.mozilla && b.helpers.isMobile() ? b.selection.inEditor() : b.node.hasFocus(b.el) || 0 < b.$el.find("*:focus").length
            },
            sameInstance: function(a) {
                return a ? (a = a.data("instance")) ? a.id === b.id : !1 : !1
            }
        }
    };
    a.POPUP_TEMPLATES = {
        "text.edit": "[_EDIT_]"
    };
    a.RegisterTemplate = function(b, c) {
        a.POPUP_TEMPLATES[b] = c
    };
    a.MODULES.popups = function(b) {
        function c(a, c) {
            c.isVisible() || (c = b.$sc);
            c.is(r[a].data("container")) || (r[a].data("container", c), c.append(r[a]))
        }

        function d(a) {
            a.find(".fr-upload-progress").addClass("fr-height-set");
            a.find(".fr-upload-progress").removeClass("fr-height-auto");
            b.popups.get("filesManager.insert").removeClass("fr-height-auto");
            var c;
            a.find(".fr-files-upload-layer").hasClass("fr-active") ? c = 1 : "";
            a.find(".fr-files-by-url-layer").hasClass("fr-active") ? c = 2 : "";
            a.find(".fr-files-embed-layer").hasClass("fr-active") ? c = 3 : "";
            a.find(".fr-upload-progress-layer").get(0).clientHeight + 10 < a.find(".fr-upload-progress").get(0).clientHeight && a.find(".fr-upload-progress").addClass("fr-height-auto");
            400 < a[0].clientHeight && (a[0].childNodes[4].style.height = "".concat(a[0].clientHeight - (a[0].childNodes[0].clientHeight + a[0].childNodes[c].clientHeight) - 80, "px"))
        }

        function f() {
            w(this).toggleClass("fr-not-empty", !0)
        }

        function g() {
            var b = w(this);
            b.toggleClass("fr-not-empty", "" !== b.val())
        }

        function h(b) {
            for (var a = 0; a < b.length; a++) {
                var c = w(b[a]);
                0 === c.next().length && c.attr("placeholder") && (c.after('<label for="'.concat(c.attr("id"), '">').concat(c.attr("placeholder"), "</label>")), c.attr("placeholder", ""))
            }
        }

        function A(a) {
            return r[a] && b.node.hasClass(r[a], "fr-active") && b.core.sameInstance(r[a]) || !1
        }

        function x(b) {
            for (var a in r)
                if (Object.prototype.hasOwnProperty.call(r, a) && A(a) && ("undefined" === typeof b || r[a].data("instance") === b)) return r[a];
            return !1
        }

        function m(a) {
            var c = null;
            c = "string" !== typeof a ? a : r[a];
            if ("filesManager.insert" === a && void 0 !== b.filesManager && b.filesManager.isChildWindowOpen()) return !1;
            if (c && b.node.hasClass(c, "fr-active") && (c.removeClass("fr-active fr-above"), b.events.trigger("popups.hide.".concat(a)), b.$tb && (1 < b.opts.zIndex ? b.$tb.css("zIndex", b.opts.zIndex + 1) : b.$tb.css("zIndex", "")), b.events.disableBlur(), c.find("input, textarea, button").each(function() {
                    this === this.ownerDocument.activeElement && this.blur()
                }), c.find("input, textarea").attr("disabled", "disabled"), z))
                for (a = 0; a < z.length; a++) w(z[a]).removeClass("fr-btn-active-popup")
        }

        function E(b) {
            "undefined" === typeof b && (b = []);
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && 0 > b.indexOf(a) && m(a)
        }

        function F() {
            b.shared.exit_flag = !0
        }

        function C() {
            b.shared.exit_flag = !1
        }

        function y(c, e) {
            var d;
            if (d = a.POPUP_TEMPLATES[c]) {
                "function" === typeof d && (d = d.apply(b));
                for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (d = d.replace("[_".concat(f.toUpperCase(), "_]"), e[f]))
            } else d = null;
            e = w(b.doc.createElement("DIV"));
            if (!d) return "filesManager.insert" === c ? e.addClass("fr-popup fr-files-manager fr-empty") : e.addClass("fr-popup fr-empty"), d = w("body").first(), d.append(e), e.data("container", d), r[c] = e;
            "filesManager.insert" === c ? e.addClass("fr-popup fr-files-manager".concat(b.helpers.isMobile() ? " fr-mobile" : " fr-desktop").concat(b.opts.toolbarInline ? " fr-inline" : "")) : e.addClass("fr-popup".concat(b.helpers.isMobile() ? " fr-mobile" : " fr-desktop").concat(b.opts.toolbarInline ? " fr-inline" : ""));
            e.html(d);
            b.opts.theme && e.addClass("".concat(b.opts.theme, "-theme"));
            1 < b.opts.zIndex && (!b.opts.editInPopup && b.$tb ? b.$tb.css("z-index", b.opts.zIndex + 2) : e.css("z-index", b.opts.zIndex + 2));
            "auto" !== b.opts.direction && e.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(b.opts.direction));
            e.find("input, textarea").attr("dir", b.opts.direction).attr("disabled", "disabled");
            d = w("body").first();
            d.append(e);
            e.data("container", d);
            r[c] = e;
            c = e.find(".fr-color-hex-layer");
            if (0 < c.length) {
                d = b.helpers.getPX(e.find(".fr-color-set > span").css("width"));
                f = b.helpers.getPX(c.css("paddingLeft"));
                var g = b.helpers.getPX(c.css("paddingRight"));
                c.css("width", d * b.opts.colorsStep + f + g)
            }
            b.button.bindCommands(e, !1);
            return e
        }

        function t(c) {
            var e = r[c];
            return {
                _windowResize: function() {
                    var a = e.data("instance") || b;
                    !a.helpers.isMobile() && e.isVisible() && (a.events.disableBlur(), a.popups.hide(c), a.events.enableBlur())
                },
                _inputFocus: function(a) {
                    var c = e.data("instance") || b,
                        d = w(a.currentTarget);
                    d.is("input:file") && d.closest(".fr-layer").addClass("fr-input-focus");
                    a.preventDefault();
                    a.stopPropagation();
                    setTimeout(function() {
                        c.events.enableBlur()
                    }, 100);
                    if (c.helpers.isMobile()) {
                        var f = w(c.o_win).scrollTop();
                        setTimeout(function() {
                            w(c.o_win).scrollTop(f)
                        }, 0)
                    }
                },
                _inputBlur: function(a) {
                    var c = e.data("instance") || b;
                    a = w(a.currentTarget);
                    a.is("input:file") && a.closest(".fr-layer").removeClass("fr-input-focus");
                    document.activeElement !== this && w(this).isVisible() && (c.events.blurActive() && c.events.trigger("blur"), c.events.enableBlur())
                },
                _editorKeydown: function(d) {
                    var f = e.data("instance") || b;
                    f.keys.ctrlKey(d) || d.which === a.KEYCODE.ALT || d.which === a.KEYCODE.ESC || (A(c) && e.findVisible(".fr-back").length ? f.button.exec(e.findVisible(".fr-back").first()) : d.which !== a.KEYCODE.ALT && f.popups.hide(c))
                },
                _preventFocus: function(a) {
                    var c = e.data("instance") || b,
                        d = a.originalEvent ? a.originalEvent.target || a.originalEvent.originalTarget : null;
                    "mouseup" === a.type || w(d).is(":focus") || c.events.disableBlur();
                    "mouseup" !== a.type || w(d).hasClass("fr-command") || 0 < w(d).parents(".fr-command").length || w(d).hasClass("fr-dropdown-content") || b.button.hideActiveDropdowns(e);
                    (b.browser.safari || b.browser.mozilla) && "mousedown" === a.type && w(d).is("input[type=file]") && c.events.disableBlur();
                    if (d && !w(d).is("input, textarea, button, select, label, .fr-command") && 0 === w(d).parents("input, textarea, button, select, label, .fr-command").length) return a.stopPropagation(), !1;
                    d && w(d).is("input, textarea, button, select, label, .fr-command") && a.stopPropagation();
                    C()
                },
                _editorMouseup: function() {
                    e.isVisible() && b.shared.exit_flag && 0 < e.findVisible("input:focus, textarea:focus, button:focus, select:focus").length && b.events.disableBlur()
                },
                _windowMouseup: function(a) {
                    if (!b.core.sameInstance(e)) return !0;
                    var d = e.data("instance") || b;
                    e.isVisible() && b.shared.exit_flag && (a.stopPropagation(), d.markers.remove(), d.popups.hide(c), C())
                },
                _windowKeydown: function(d) {
                    if (!b.core.sameInstance(e)) return !0;
                    var f = e.data("instance") || b;
                    if (a.KEYCODE.ESC === d.which) {
                        if (f.popups.isVisible(c) && f.opts.toolbarInline) return d.stopPropagation(), f.popups.isVisible(c) && (e.findVisible(".fr-back").length ? (f.button.exec(e.findVisible(".fr-back").first()), f.accessibility.focusPopupButton(e)) : e.findVisible(".fr-dismiss").length ? f.button.exec(e.findVisible(".fr-dismiss").first()) : (f.popups.hide(c), f.toolbar.showInline(null, !0), f.accessibility.focusPopupButton(e))), !1;
                        if (f.popups.isVisible(c)) return e.findVisible(".fr-back").length ? (f.button.exec(e.findVisible(".fr-back").first), f.accessibility.focusPopupButton(e)) : e.findVisible(".fr-dismiss").length ? f.button.exec(e.findVisible(".fr-dismiss").first()) : (f.popups.hide(c), f.accessibility.focusPopupButton(e)), !1
                    }
                },
                _repositionPopup: function() {
                    if (!b.opts.height && !b.opts.heightMax || b.opts.toolbarInline) return !0;
                    if (b.$wp && A(c) && e.parent().get(0) === b.$sc.get(0)) {
                        var a = e.offset().top - b.$wp.offset().top,
                            d = b.$wp.outerHeight();
                        b.node.hasClass(e.get(0), "fr-above") && (a += e.outerHeight());
                        a > d || 0 > a ? e.addClass("fr-hidden") : e.removeClass("fr-hidden")
                    }
                }
            }
        }

        function q(a, c) {
            b.events.on("mouseup", a._editorMouseup, !0);
            if (b.$wp) b.events.on("keydown", a._editorKeydown);
            b.events.on("focus", function() {
                r[c].removeClass("focused")
            });
            b.events.on("blur", function() {
                x() && b.markers.remove();
                b.helpers.isMobile() ? r[c].hasClass("focused") ? (E(), r[c].removeClass("focused")) : r[c].addClass("focused") : r[c].find("iframe").length || E()
            });
            b.$wp && !b.helpers.isMobile() && b.events.$on(b.$wp, "scroll.popup".concat(c), a._repositionPopup);
            b.events.on("window.mouseup", a._windowMouseup, !0);
            b.events.on("window.keydown", a._windowKeydown, !0);
            r[c].data("inst".concat(b.id), !0);
            b.events.on("destroy", function() {
                b.core.sameInstance(r[c]) && (w("body").first().append(r[c]), r[c].removeClass("fr-active"))
            }, !0)
        }

        function G() {
            var b = w(this).prev().children().first();
            b.attr("checked", !b.attr("checked"))
        }

        function L() {
            for (var b in r)
                if (Object.prototype.hasOwnProperty.call(r, b)) {
                    var a = r[b];
                    a && (a.html("").removeData().remove(), r[b] = null)
                }
            r = []
        }
        var w = b.$,
            v;
        b.shared.popups || (b.shared.popups = {});
        var r = b.shared.popups,
            z, l = 2E3;
        b.shared.exit_flag = !1;
        return {
            _init: function() {
                v = window.innerHeight;
                b.events.on("shared.destroy", L, !0);
                b.events.on("window.mousedown", F);
                b.events.on("window.touchmove", C);
                b.events.$on(w(b.o_win), "scroll", C);
                b.events.on("mousedown", function(a) {
                    x() && (a.stopPropagation(), b.$el.find(".fr-marker").remove(), F(), b.events.disableBlur())
                })
            },
            create: function(a, c) {
                c = y(a, c);
                var e = t(a);
                q(e, a);
                b.events.$on(c, "mousedown mouseup touchstart touchend touch", "*", e._preventFocus, !0);
                b.events.$on(c, "focus", "input, textarea, button, select", e._inputFocus, !0);
                b.events.$on(c, "blur", "input, textarea, button, select", e._inputBlur, !0);
                var d = c.find("input, textarea");
                h(d);
                b.events.$on(d, "focus", f);
                b.events.$on(d, "blur change", g);
                b.events.$on(c, "click", ".fr-checkbox + label", G);
                b.accessibility.registerPopup(a);
                b.helpers.isIOS() && b.events.$on(c, "touchend", "label", function() {
                    w("#".concat(w(this).attr("for"))).prop("checked", function(b, a) {
                        return !a
                    })
                }, !0);
                b.events.$on(w(b.o_win), "resize", e._windowResize, !0);
                "filesManager.insert" === a && r["filesManager.insert"].css("zIndex", 2147483641);
                return c
            },
            get: function(a) {
                var c = r[a];
                if (c && !c.data("inst".concat(b.id))) {
                    var e = t(a);
                    q(e, a)
                }
                return c
            },
            show: function(a, e, d, f, g) {
                A(a) || (x() && 0 < b.$el.find(".fr-marker").length ? (b.events.disableBlur(), b.selection.restore()) : x() || (b.events.disableBlur(), b.events.focus(), b.events.enableBlur()));
                E([a]);
                if (!r[a]) return !1;
                var k = b.button.getButtons(".fr-dropdown.fr-active");
                k.removeClass("fr-active").attr("aria-expanded", !1).parents(".fr-toolbar").css("zIndex", "").find("> .fr-dropdown-wrapper").css("height", "");
                k.next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", "");
                r[a].data("instance", b);
                b.$tb && b.$tb.data("instance", b);
                k = A(a);
                r[a].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");
                var l = r[a].data("container"),
                    n = l;
                n.isVisible() || (n = b.$sc);
                n.contains([r[a].get(0)]) || n.append(r[a]);
                b.opts.toolbarInline && l && b.$tb && l.get(0) === b.$tb.get(0) && (c(a, b.$sc), d = b.$tb.offset().top - b.helpers.getPX(b.$tb.css("margin-top")), e = b.$tb.offset().left + b.$tb.outerWidth() / 2, b.node.hasClass(b.$tb.get(0), "fr-above") && d && (d += b.$tb.outerHeight()), f = 0);
                l = r[a].data("container");
                if (b.opts.iframe && !f && !k) {
                    n = b.helpers.getPX(b.$wp.find(".fr-iframe").css("padding-top"));
                    var u = b.helpers.getPX(b.$wp.find(".fr-iframe").css("padding-left"));
                    e && (e -= b.$iframe.offset().left + u);
                    d && (d -= b.$iframe.offset().top + n)
                }
                l.is(b.$tb) ? b.$tb.css("zIndex", (b.opts.zIndex || 1) + 4) : r[a].css("zIndex", (b.opts.zIndex || 1) + 3);
                b.opts.toolbarBottom && l && b.$tb && l.get(0) === b.$tb.get(0) && (r[a].addClass("fr-above"), d && (d -= r[a].outerHeight()));
                g && (e -= r[a].width() / 2);
                e + r[a].outerWidth() > b.$sc.offset().left + b.$sc.width() && (e -= e + r[a].outerWidth() - b.$sc.offset().left - b.$sc.width());
                e < b.$sc.offset().left && "rtl" === b.opts.direction && (e = b.$sc.offset().left);
                r[a].removeClass("fr-active");
                b.position.at(e, d, r[a], f || 0);
                (e = b.node.blockParent(b.selection.blocks()[0])) && "false" === e.getAttribute("contenteditable") ? r[a].removeClass("fr-active") : (e = b.selection.element().parentElement.getAttribute("contenteditable")) && "false" === e ? r[a].removeClass("fr-active") : r[a].addClass("fr-active");
                k || b.accessibility.focusPopup(r[a]);
                b.opts.toolbarInline && b.toolbar.hide();
                b.$tb && (z = b.$tb.find(".fr-btn-active-popup"));
                b.events.trigger("popups.show.".concat(a));
                t(a)._repositionPopup();
                C()
            },
            hide: m,
            onHide: function(a, c) {
                b.events.on("popups.hide.".concat(a), c)
            },
            hideAll: E,
            setContainer: c,
            refresh: function(a) {
                r[a].data("instance", b);
                b.events.trigger("popups.refresh.".concat(a));
                a = r[a].find(".fr-command");
                for (var c = 0; c < a.length; c++) {
                    var e = w(a[c]);
                    0 === e.parents(".fr-dropdown-menu").length && b.button.refresh(e)
                }
            },
            onRefresh: function(a, c) {
                b.events.on("popups.refresh.".concat(a), c)
            },
            onShow: function(a, c) {
                b.events.on("popups.show.".concat(a), c)
            },
            isVisible: A,
            setFileListHeight: d,
            areVisible: x,
            setPopupDimensions: function(a, c) {
                c && a.find(".fr-upload-progress-layer").get(0).clientHeight < l && (a.find(".fr-upload-progress").addClass("fr-height-auto"), b.popups.get("filesManager.insert").addClass("fr-height-auto"), a.find(".fr-upload-progress").removeClass("fr-height-set"), l = 2E3);
                a.get(0).clientHeight > window.innerHeight / 2 && (500 > window.innerWidth ? a.get(0).clientHeight > .6 * v && d(a) : 400 < a.get(0).clientHeight && d(a), l = a.find(".fr-upload-progress-layer").get(0).clientHeight);
                c = window.innerWidth;
                switch (!0) {
                    case 320 >= c:
                        a.width(200);
                        break;
                    case 420 >= c:
                        a.width(250);
                        break;
                    case 520 >= c:
                        a.width(300);
                        break;
                    case 720 >= c:
                        a.width(400);
                        break;
                    case 720 < c:
                        a.width(530)
                }
            }
        }
    };
    a.MODULES.accessibility = function(b) {
        function c(a) {
            for (var c = b.$el.find('[contenteditable="true"]'), e = !1, d = 0; c.get(d);) r(c.get(d)).is(":focus") && (e = !0), d++;
            a && a.length && !e && (a.data("blur-event-set") || a.parents(".fr-popup").length || (b.events.$on(a, "blur", function() {
                var c = a.parents(".fr-toolbar, .fr-popup").data("instance") || b;
                c.events.blurActive() && !b.core.hasFocus() && c.events.trigger("blur");
                setTimeout(function() {
                    c.events.enableBlur()
                }, 100)
            }, !0), a.data("blur-event-set", !0)), (a.parents(".fr-toolbar, .fr-popup").data("instance") || b).events.disableBlur(), a.get(0).focus(), b.shared.$f_el = a)
        }

        function d(b, a) {
            a = a ? "last" : "first";
            b = m(E(b))[a]();
            if (b.length) return c(b), !0
        }

        function f(a) {
            a.is("input, textarea, select") && h();
            b.events.disableBlur();
            a.get(0).focus();
            return !0
        }

        function g(a, c) {
            var e = a.find("input, textarea, button, select").filter(function() {
                return r(this).isVisible()
            }).not(":disabled");
            e = c ? e.last() : e.first();
            if (e.length) return f(e);
            if (b.shared.with_kb) {
                c = a.findVisible(".fr-active-item").first();
                if (c.length) return f(c);
                a = a.findVisible("[tabIndex]").first();
                if (a.length) return f(a)
            }
        }

        function h() {
            0 === b.$el.find(".fr-marker").length && b.core.hasFocus() && b.selection.save()
        }

        function A() {
            var a = b.popups.areVisible();
            if (a) {
                var c = a.find(".fr-buttons");
                return c.find("button:focus, .fr-group span:focus").length ? !d(a.data("instance").$tb) : !d(c)
            }
            return !d(b.$tb)
        }

        function x() {
            var a = null;
            b.shared.$f_el.is(".fr-dropdown.fr-active") ? a = b.shared.$f_el : b.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active") && (a = b.shared.$f_el.closest(".fr-dropdown-menu").prev());
            return a
        }

        function m(a) {
            for (var c = -1, e = 0; e < a.length; e++) r(a[e]).hasClass("fr-open") && (c = e);
            var d = a.index(b.$tb.find(".fr-more-toolbar.fr-expanded > button.fr-command").first());
            if (0 < d && -1 !== c) {
                e = a.slice(d, a.length);
                a = a.slice(0, d);
                d = a.slice(0, c + 1);
                c = a.slice(c + 1, a.length);
                a = d;
                for (d = 0; d < e.length; d++) a.push(e[d]);
                for (e = 0; e < c.length; e++) a.push(c[e])
            }
            return a
        }

        function E(b) {
            return b.findVisible("button:not(.fr-disabled), .fr-group span.fr-command").filter(function(b) {
                b = r(b).parents(".fr-more-toolbar");
                return 0 === b.length || 0 < b.length && b.hasClass("fr-expanded")
            })
        }

        function F(a, e, f) {
            if (b.shared.$f_el) {
                var k = x();
                k && (b.button.click(k), b.shared.$f_el = k);
                k = m(E(a));
                var l = k.index(b.shared.$f_el);
                if (0 === l && !f || l === k.length - 1 && f) {
                    if (e) {
                        if (a.parent().is(".fr-popup")) {
                            var n = a.parent().children().not(".fr-buttons");
                            n = !g(n, !f)
                        }!1 === n && (b.shared.$f_el = null)
                    }
                    e && !1 === n || d(a, !f)
                } else c(r(k.get(l + (f ? 1 : -1))));
                return !1
            }
        }

        function C(a) {
            if (b.shared.$f_el) {
                if (b.shared.$f_el.is(".fr-dropdown.fr-active")) {
                    var e = a ? b.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first() : b.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last();
                    c(e);
                    return !1
                }
                if (b.shared.$f_el.is("a.fr-command")) return e = a ? b.shared.$f_el.closest("li").nextAllVisible().first().find(".fr-command:not(.fr-disabled)").first() : b.shared.$f_el.closest("li").prevAllVisible().first().find(".fr-command:not(.fr-disabled)").first(), e.length || (e = a ? b.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first() : b.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()), c(e), !1
            }
        }

        function t() {
            if (b.shared.$f_el) {
                if (b.shared.$f_el.hasClass("fr-dropdown")) b.button.click(b.shared.$f_el);
                else if (b.shared.$f_el.is("button.fr-back")) {
                    b.opts.toolbarInline && (b.events.disableBlur(), b.events.focus());
                    var a = b.popups.areVisible(b);
                    a && (b.shared.with_kb = !1);
                    b.button.click(b.shared.$f_el);
                    G(a)
                } else {
                    b.events.disableBlur();
                    b.button.click(b.shared.$f_el);
                    if (b.shared.$f_el.attr("data-group-name")) {
                        a = b.$tb.find('.fr-more-toolbar[data-name="'.concat(b.shared.$f_el.attr("data-group-name"), '"]'));
                        var e = b.shared.$f_el;
                        a.hasClass("fr-expanded") && (e = a.findVisible("button:not(.fr-disabled)").first());
                        e && c(e)
                    } else b.shared.$f_el.attr("data-popup") ? (a = b.popups.areVisible(b)) && a.data("popup-button", b.shared.$f_el) : b.shared.$f_el.attr("data-modal") && (a = b.modals.areVisible(b)) && a.data("modal-button", b.shared.$f_el);
                    b.shared.$f_el = null
                }
                return !1
            }
        }

        function y() {
            b.shared.$f_el && (b.events.disableBlur(), b.shared.$f_el.blur(), b.shared.$f_el = null);
            !1 !== b.events.trigger("toolbar.focusEditor") && (b.events.disableBlur(), b.$el.get(0).focus(), b.events.focus())
        }

        function q(a) {
            a && a.length && (b.events.$on(a, "keydown", function(c) {
                if (!r(c.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command")) return !0;
                var e = a.parents(".fr-popup").data("instance") || a.data("instance") || b;
                b.shared.with_kb = !0;
                c = e.accessibility.exec(c, a);
                b.shared.with_kb = !1;
                return c
            }, !0), b.events.$on(a, "mouseenter", "[tabIndex]", function(c) {
                var e = a.parents(".fr-popup").data("instance") || a.data("instance") || b;
                z ? (c = r(c.currentTarget), e.shared.$f_el && e.shared.$f_el.not(c) && e.accessibility.focusEditor()) : (c.stopPropagation(), c.preventDefault())
            }, !0), b.$tb && b.events.$on(b.$tb, "transitionend", ".fr-more-toolbar", function() {
                b.shared.$f_el = r(document.activeElement)
            }))
        }

        function w(c) {
            var e = b.popups.get(c);
            return {
                _tiKeydown: function(f) {
                    var k = e.data("instance") || b;
                    if (!1 === k.events.trigger("popup.tab", [f])) return !1;
                    var l = f.which,
                        n = e.find(":focus").first();
                    if (a.KEYCODE.TAB === l) {
                        f.preventDefault();
                        l = e.children().not(".fr-buttons");
                        n = l.findVisible("input, textarea, button, select").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray();
                        var z = n.indexOf(this) + (f.shiftKey ? -1 : 1);
                        if (0 <= z && z < n.length) return k.events.disableBlur(), r(n[z]).focus(), f.stopPropagation(), !1;
                        k = e.find(".fr-buttons");
                        if (k.length && d(k, !!f.shiftKey) || g(l)) return f.stopPropagation(), !1
                    } else if (a.KEYCODE.ENTER === l && f.target && "TEXTAREA" !== f.target.tagName) l = null, 0 < e.findVisible(".fr-submit").length ? l = e.findVisible(".fr-submit").first() : e.findVisible(".fr-dismiss").length && (l = e.findVisible(".fr-dismiss").first()), l && (f.preventDefault(), f.stopPropagation(), k.events.disableBlur(), k.button.exec(l));
                    else {
                        if (a.KEYCODE.ESC === l) return f.preventDefault(), f.stopPropagation(), k.accessibility.restoreSelection(), k.popups.isVisible(c) && e.findVisible(".fr-back").length ? (k.opts.toolbarInline && (k.events.disableBlur(), k.events.focus()), k.button.exec(e.findVisible(".fr-back").first()), G(e)) : k.popups.isVisible(c) && e.findVisible(".fr-dismiss").length ? k.button.exec(e.findVisible(".fr-dismiss").first()) : (k.popups.hide(c), k.opts.toolbarInline && k.toolbar.showInline(null, !0), G(e)), !1;
                        if (a.KEYCODE.SPACE === l && (n.is(".fr-submit") || n.is(".fr-dismiss"))) return f.preventDefault(), f.stopPropagation(), k.events.disableBlur(), k.button.exec(n), !0;
                        if (k.keys.isBrowserAction(f)) f.stopPropagation();
                        else if (n.is("input[type=text], textarea")) f.stopPropagation();
                        else if (a.KEYCODE.SPACE === l && (n.is(".fr-link-attr") || n.is("input[type=file]"))) f.stopPropagation();
                        else return f.stopPropagation(), f.preventDefault(), !1
                    }
                },
                _tiMouseenter: function() {
                    var a = e.data("instance") || b;
                    L(a)
                }
            }
        }

        function G(b) {
            var a = b.data("popup-button");
            a && setTimeout(function() {
                c(a);
                b.data("popup-button", null)
            }, 0)
        }

        function L(a) {
            (a = b.popups.areVisible(a)) && a.data("popup-button", null)
        }

        function v(c) {
            var e = -1 !== navigator.userAgent.indexOf("Mac OS X") ? c.metaKey : c.ctrlKey;
            if (c.which === a.KEYCODE.F10 && !e && !c.shiftKey && c.altKey) {
                b.shared.with_kb = !0;
                e = b.popups.areVisible(b);
                var d = !1;
                e && (d = g(e.children().not(".fr-buttons")));
                d || A();
                b.shared.with_kb = !1;
                c.preventDefault();
                c.stopPropagation();
                return !1
            }
            return !0
        }
        var r = b.$,
            z = !0;
        return {
            _init: function() {
                if (b.$wp) b.events.on("keydown", v, !0);
                else b.events.$on(b.$win, "keydown", v, !0);
                b.events.on("mousedown", function(a) {
                    L(b);
                    b.shared.$f_el && b.el.isSameNode(b.shared.$f_el[0]) && (b.accessibility.restoreSelection(), a.stopPropagation(), b.events.disableBlur(), b.shared.$f_el = null)
                }, !0);
                b.events.on("blur", function() {
                    b.shared.$f_el = null;
                    L(b)
                }, !0)
            },
            registerPopup: function(a) {
                var c = b.popups.get(a),
                    e = w(a);
                q(c.find(".fr-buttons"));
                b.events.$on(c, "mouseenter", "tabIndex", e._tiMouseenter, !0);
                b.events.$on(c.children().not(".fr-buttons"), "keydown", "[tabIndex]", e._tiKeydown, !0);
                b.popups.onHide(a, function() {
                    (c.data("instance") || b).accessibility.restoreSelection()
                });
                b.popups.onShow(a, function() {
                    z = !1;
                    setTimeout(function() {
                        z = !0
                    }, 0)
                })
            },
            registerToolbar: q,
            focusToolbarElement: c,
            focusToolbar: d,
            focusContent: g,
            focusPopup: function(a) {
                var c = a.children().not(".fr-buttons");
                c.data("mouseenter-event-set") || (b.events.$on(c, "mouseenter", "[tabIndex]", function(e) {
                    var d = a.data("instance") || b;
                    z ? (e = c.find(":focus").first(), e.length && !e.is("input, button, textarea, select") && (d.events.disableBlur(), e.blur(), d.events.disableBlur(), d.events.focus())) : (e.stopPropagation(), e.preventDefault())
                }), c.data("mouseenter-event-set", !0));
                !g(c) && b.shared.with_kb && d(a.find(".fr-buttons"))
            },
            focusModal: function(a) {
                b.core.hasFocus() || (b.events.disableBlur(), b.events.focus());
                b.accessibility.saveSelection();
                b.events.disableBlur();
                b.el.blur();
                b.selection.clear();
                b.events.disableBlur();
                b.shared.with_kb ? a.find(".fr-command[tabIndex], [tabIndex]").first().focus() : a.find("[tabIndex]").first().focus()
            },
            focusEditor: y,
            focusPopupButton: G,
            focusModalButton: function(b) {
                var a = b.data("modal-button");
                a && setTimeout(function() {
                    c(a);
                    b.data("modal-button", null)
                }, 0)
            },
            hasFocus: function() {
                return null !== b.shared.$f_el
            },
            exec: function(e, d) {
                var f = -1 !== navigator.userAgent.indexOf("Mac OS X") ? e.metaKey : e.ctrlKey,
                    g = e.which,
                    k = !1;
                g !== a.KEYCODE.TAB || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.ARROW_RIGHT || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.TAB || f || !e.shiftKey || e.altKey ? g !== a.KEYCODE.ARROW_LEFT || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.ARROW_UP || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.ARROW_DOWN || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.ENTER && g !== a.KEYCODE.SPACE || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.ESC || f || e.shiftKey || e.altKey ? g !== a.KEYCODE.F10 || f || e.shiftKey || !e.altKey || (k = A()) : b.shared.$f_el ? ((f = x()) ? (b.button.click(f), c(f)) : d.parent().findVisible(".fr-back").length ? (b.shared.with_kb = !1, b.opts.toolbarInline && (b.events.disableBlur(), b.events.focus()), b.button.exec(d.parent().findVisible(".fr-back")).first(), G(d.parent())) : b.shared.$f_el.is("button, .fr-group span") && (d.parent().is(".fr-popup") ? (b.accessibility.restoreSelection(), b.shared.$f_el = null, !1 !== b.events.trigger("toolbar.esc") && (b.popups.hide(d.parent()), b.opts.toolbarInline && b.toolbar.showInline(null, !0), G(d.parent()))) : y()), k = !1) : k = void 0 : k = t() : k = b.shared.$f_el && b.shared.$f_el.is(".fr-dropdown:not(.fr-active)") ? t() : C(!0) : k = C() : k = F(d, void 0) : k = F(d, !0) : k = F(d, void 0, !0) : k = F(d, !0, !0);
                b.shared.$f_el || "undefined" !== typeof k || (k = !0);
                !k && b.keys.isBrowserAction(e) && (k = !0);
                if (k) return !0;
                e.preventDefault();
                e.stopPropagation();
                return !1
            },
            saveSelection: h,
            restoreSelection: function() {
                b.$el.find(".fr-marker").length && (b.events.disableBlur(), b.selection.restore(), b.events.enableBlur())
            }
        }
    };
    Object.assign(a.DEFAULTS, {
        tooltips: !0
    });
    a.MODULES.tooltip = function(b) {
        function a() {
            b.helpers.isMobile() || b.$tooltip && b.$tooltip.removeClass("fr-visible").css("left", "-3000px").css("position", "fixed")
        }

        function c(a, c) {
            if (!b.helpers.isMobile() && (a.data("title") || a.data("title", a.attr("title")), a.data("title"))) {
                b.$tooltip || d();
                a.removeAttr("title");
                b.$tooltip.text(b.language.translate(a.data("title")));
                b.$tooltip.addClass("fr-visible");
                var e = a.offset().left +
                    (a.outerWidth() - b.$tooltip.outerWidth()) / 2;
                0 > e && (e = 0);
                e + b.$tooltip.outerWidth() > f(b.o_win).width() && (e = f(b.o_win).width() - b.$tooltip.outerWidth());
                "undefined" === typeof c && (c = b.opts.toolbarBottom);
                a.offset().top - f(window).scrollTop() + a.outerHeight() + 10 >= f(window).height() && (c = !0);
                a = c ? a.offset().top - b.$tooltip.height() : a.offset().top + a.outerHeight();
                b.$tooltip.css("position", "");
                b.$tooltip.css("left", e);
                b.$tooltip.css("top", Math.ceil(a));
                "static" !== f(b.o_doc).find("body").first().css("position") ? (b.$tooltip.css("margin-left", -f(b.o_doc).find("body").first().offset().left), b.$tooltip.css("margin-top", -f(b.o_doc).find("body").first().offset().top)) : (b.$tooltip.css("margin-left", ""), b.$tooltip.css("margin-top", ""))
            }
        }

        function d() {
            b.opts.tooltips && !b.helpers.isMobile() && (b.shared.$tooltip ? b.$tooltip = b.shared.$tooltip : (b.shared.$tooltip = f(b.doc.createElement("DIV")).addClass("fr-tooltip"), b.$tooltip = b.shared.$tooltip, b.opts.theme && b.$tooltip.addClass("".concat(b.opts.theme, "-theme")), f(b.o_doc).find("body").first().append(b.$tooltip)), b.events.on("shared.destroy", function() {
                b.$tooltip.html("").removeData().remove();
                b.$tooltip = null
            }, !0))
        }
        var f = b.$;
        return {
            hide: a,
            to: c,
            bind: function(e, d, g) {
                b.opts.tooltips && !b.helpers.isMobile() && (b.events.$on(e, "mouseover", d, function(a) {
                    b.node.hasClass(a.currentTarget, "fr-disabled") || b.edit.isDisabled() || c(f(a.currentTarget), g)
                }, !0), b.events.$on(e, "mouseout ".concat(b._mousedown, " ").concat(b._mouseup), d, function() {
                    a()
                }, !0))
            }
        }
    };
    a.TOOLBAR_VISIBLE_BUTTONS = 3;
    a.MODULES.button = function(b) {
        function c(b, a, c) {
            for (var e = G(), d = 0; d < b.length; d++) {
                var f = G(b[d]);
                f.is(a) && (e = e.add(f));
                c && f.is(".fr-dropdown") && (f = f.next().find(a), e = e.add(f))
            }
            return e
        }

        function d(a, e) {
            var d = G(),
                f;
            if (!a) return d;
            d = d.add(c(L, a, e));
            d = d.add(c(v, a, e));
            for (f in b.shared.popups) Object.prototype.hasOwnProperty.call(b.shared.popups, f) && (e = b.shared.popups[f].children().find(a), d = d.add(e));
            for (f in b.shared.modals) Object.prototype.hasOwnProperty.call(b.shared.modals, f) && (e = b.shared.modals[f].$modal.find(a), d = d.add(e));
            return d
        }

        function f(b, a, c) {
            a >= c && b.parent().css("overflow", "auto");
            b.css("height", Math.min(a, c))
        }

        function g(c) {
            var e = c.next(),
                g = b.node.hasClass(c.get(0), "fr-active"),
                k = d(".fr-dropdown.fr-active").not(c),
                n = c.parents(".fr-toolbar, .fr-popup").data("instance") || b;
            n.helpers.isIOS() && !n.el.querySelector(".fr-marker") && (n.selection.save(), n.selection.clear(), n.selection.restore());
            e.parents(".fr-more-toolbar").addClass("fr-overflow-visible");
            var h = 0,
                z = 0,
                q = e.find("> .fr-dropdown-wrapper");
            g || (h = c.data("cmd"), e.find(".fr-command").removeClass("fr-active").attr("aria-selected", !1), a.COMMANDS[h] && a.COMMANDS[h].refreshOnShow && a.COMMANDS[h].refreshOnShow.apply(n, [c, e]), e.css("left", c.offset().left - c.parents(".fr-btn-wrap, .fr-toolbar, .fr-buttons").offset().left - ("rtl" === b.opts.direction ? e.width() - c.outerWidth() : 0)), e.addClass("test-height"), h = e.outerHeight(), z = b.helpers.getPX(q.css("max-height")), e.removeClass("test-height"), e.css("top", "").css("bottom", ""), n = c.outerHeight() / 10, !b.opts.toolbarBottom && e.offset().top + c.outerHeight() + h < G(b.o_doc).height() ? e.css("top", c.position().top +
                c.outerHeight() - n) : (n = 0, g = c.parents(".fr-more-toolbar"), 0 < g.length && (n = g.first().height()), e.css("bottom", c.parents(".fr-popup, .fr-toolbar").first().height() - n - c.position().top)));
            c.addClass("fr-blink").toggleClass("fr-active");
            c.hasClass("fr-options") && c.prev().toggleClass("fr-expanded");
            c.hasClass("fr-active") ? (e.attr("aria-hidden", !1), c.attr("aria-expanded", !0), f(q, h, z)) : (e.attr("aria-hidden", !0).css("overflow", ""), c.attr("aria-expanded", !1), q.css("height", ""));
            setTimeout(function() {
                c.removeClass("fr-blink")
            }, 300);
            e.css("margin-left", "");
            e.offset().left + e.outerWidth() > b.$sc.offset().left + b.$sc.width() && e.css("margin-left", -(e.offset().left + e.outerWidth() - b.$sc.offset().left - b.$sc.width()));
            e.offset().left < b.$sc.offset().left && "rtl" === b.opts.direction && e.css("margin-left", b.$sc.offset().left);
            k.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", "");
            k.prev(".fr-expanded").removeClass("fr-expanded");
            k.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", "");
            0 !== c.parents(".fr-popup").length || b.opts.toolbarInline || (b.node.hasClass(c.get(0), "fr-active") ? b.$tb.css("zIndex", (b.opts.zIndex || 1) + 4) : b.$tb.css("zIndex", ""));
            e = e.find("a.fr-command.fr-active").first();
            b.helpers.isMobile() || (e.length ? (b.accessibility.focusToolbarElement(e), q.scrollTop(Math.abs(e.parents(".fr-dropdown-content").offset().top - e.offset().top) - e.offset().top)) : (b.accessibility.focusToolbarElement(c), q.scrollTop(0)))
        }

        function h(b) {
            b.addClass("fr-blink");
            setTimeout(function() {
                b.removeClass("fr-blink")
            }, 500);
            for (var a = b.data("cmd"), c = [];
                "undefined" !== typeof b.data("param".concat(c.length + 1));) c.push(b.data("param".concat(c.length + 1)));
            var e = d(".fr-dropdown.fr-active");
            e.length && (e.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), e.prev(".fr-expanded").removeClass("fr-expanded"), e.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""));
            b.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(a, c)
        }

        function A(c) {
            var e = c.parents(".fr-popup, .fr-toolbar").data("instance");
            0 === c.parents(".fr-popup").length && c.data("popup") && !c.hasClass("fr-btn-active-popup") && c.addClass("fr-btn-active-popup");
            0 !== c.parents(".fr-popup").length || c.data("popup") || e.popups.hideAll();
            if (e.popups.areVisible() && !e.popups.areVisible(e)) {
                for (var d = 0; d < a.INSTANCES.length; d++) a.INSTANCES[d] !== e && a.INSTANCES[d].popups && a.INSTANCES[d].popups.areVisible() && a.INSTANCES[d].$el.find(".fr-marker").remove();
                e.popups.hideAll()
            }
            b.node.hasClass(c.get(0), "fr-dropdown") ? g(c) : (h(c), a.COMMANDS[c.data("cmd")] && !1 !== a.COMMANDS[c.data("cmd")].refreshAfterCallback && e.button.bulkRefresh())
        }

        function x(b) {
            b = G(b.currentTarget);
            A(b)
        }

        function m(b) {
            b = b.find(".fr-dropdown.fr-active");
            b.length && (b.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), b.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""), b.prev().removeClass("fr-expanded"))
        }

        function E(b) {
            b.preventDefault();
            b.stopPropagation()
        }

        function F(a) {
            a.stopPropagation();
            if (!b.helpers.isMobile()) return !1
        }

        function C(a) {
            var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                e = 2 < arguments.length ? arguments[2] : void 0;
            if (b.helpers.isMobile() && !1 === c.showOnMobile) return "";
            var d = c.displaySelection;
            "function" === typeof d && (d = d(b));
            var f = "";
            "options" !== c.type && (d ? (f = "function" === typeof c.defaultSelection ? c.defaultSelection(b) : c.defaultSelection, f = '<span style="width:'.concat(c.displaySelectionWidth || 100, 'px">').concat(b.language.translate(f || c.title), "</span>")) : (f = b.icon.create(c.icon || a), f += '<span class="fr-sr-only">'.concat(b.language.translate(c.title) || "", "</span>")));
            var g = c.popup ? ' data-popup="true"' : "",
                k = c.modal ? ' data-modal="true"' : "",
                n = b.shortcuts.get("".concat(a, "."));
            n = n ? " (".concat(n, ")") : "";
            d = "".concat(a, "-").concat(b.id);
            var h = "dropdown-menu-".concat(d);
            f = '<button id="'.concat(d, '"').concat(c.more_btn ? ' data-group-name="'.concat(d, '" ') : "", 'type="button" tabIndex="-1" role="button"').concat(c.toggle ? ' aria-pressed="false"' : "").concat("dropdown" === c.type || "options" === c.type ? ' aria-controls="'.concat(h, '" aria-expanded="false" aria-haspopup="true"') : "").concat(c.disabled ? ' aria-disabled="true"' : "", ' title="').concat(b.language.translate(c.title) || "").concat(n, '" class="fr-command fr-btn').concat("dropdown" === c.type || "options" == c.type ? " fr-dropdown" : "").concat("options" == c.type ? " fr-options" : "").concat("more" == c.type ? " fr-more" : "").concat(c.displaySelection ? " fr-selection" : "").concat(c.back ? " fr-back" : "").concat(c.disabled ? " fr-disabled" : "").concat(e ? "" : " fr-hidden", '" data-cmd="').concat(a, '"').concat(g).concat(k, ">").concat(f, "</button>");
            if ("dropdown" === c.type || "options" === c.type) {
                d = '<div id="'.concat(h, '" class="fr-dropdown-menu" role="listbox" aria-labelledby="').concat(d, '" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">');
                h = "";
                if (c.html) h = "function" === typeof c.html ? h + c.html.call(b) : h + c.html;
                else {
                    g = c.options;
                    "function" === typeof g && (g = g());
                    h += '<ul class="fr-dropdown-list" role="presentation">';
                    for (var z in g) Object.prototype.hasOwnProperty.call(g, z) && ((k = b.shortcuts.get("".concat(a, ".").concat(z))) && '<span class="fr-shortcut">'.concat(k, "</span>"), h += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'.concat("options" === c.type ? a.replace(/Options/g, "") : a, '" data-param1="').concat(z, '" title="').concat(g[z], '">').concat(b.language.translate(g[z]), "</a></li>"));
                    h += "</ul>"
                }
                f += d + h + "</div></div></div>"
            }
            c.hasOptions && c.hasOptions.apply(b) && (f = '<div class="fr-btn-wrap">'.concat(f, " ").concat(C(a + "Options", Object.assign({}, c, {
                type: "options",
                hasOptions: !1
            }), e), "  </div>"));
            return f
        }

        function t(c) {
            var e = b.$tb ? b.$tb.data("instance") || b : b;
            if (!1 === b.events.trigger("buttons.refresh")) return !0;
            setTimeout(function() {
                for (var d = e.selection.inEditor() && e.core.hasFocus(), f = 0; f < c.length; f++) {
                    var g = G(c[f]),
                        k = g.data("cmd");
                    0 === g.parents(".fr-popup").length ? d || a.COMMANDS[k] && a.COMMANDS[k].forcedRefresh ? e.button.refresh(g) : b.node.hasClass(g.get(0), "fr-dropdown") || (g.removeClass("fr-active"), g.attr("aria-pressed") && g.attr("aria-pressed", !1)) : g.parents(".fr-popup").isVisible() && e.button.refresh(g)
                }
            }, 0)
        }

        function y() {
            t(L);
            t(v)
        }

        function q() {
            L = [];
            v = []
        }

        function w() {
            clearTimeout(r);
            r = setTimeout(y, 50)
        }
        var G = b.$,
            L = [];
        if (b.opts.toolbarInline || b.opts.toolbarContainer) b.shared.buttons || (b.shared.buttons = []), L = b.shared.buttons;
        var v = [];
        b.shared.popup_buttons || (b.shared.popup_buttons = []);
        v = b.shared.popup_buttons;
        var r = null;
        return {
            _init: function() {
                if (b.opts.toolbarInline) b.events.on("toolbar.show", y);
                else b.events.on("mouseup", w), b.events.on("keyup", w), b.events.on("blur", w), b.events.on("focus", w), b.events.on("contentChanged", w), b.helpers.isMobile() && b.events.$on(b.$doc, "selectionchange", y);
                b.events.on("shared.destroy", q)
            },
            build: C,
            buildList: function(c, e) {
                for (var d = "", f = 0; f < c.length; f++) {
                    var g = c[f],
                        k = a.COMMANDS[g];
                    if (!(k && "undefined" !== typeof k.plugin && 0 > b.opts.pluginsEnabled.indexOf(k.plugin)))
                        if (k) {
                            var n = "undefined" !== typeof e ? 0 <= e.indexOf(g) : !0;
                            d += C(g, k, n)
                        } else "|" === g ? d += '<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>' : "-" === g && (d += '<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>')
                }
                return d
            },
            buildGroup: function(c) {
                var e = "",
                    d = "",
                    f;
                for (f in c) {
                    var g = c[f];
                    if (g.buttons) {
                        for (var k = "", n = "", h = 0, q = "left", z = a.TOOLBAR_VISIBLE_BUTTONS, A = 0; A < g.buttons.length; A++) {
                            var F = g.buttons[A],
                                x = a.COMMANDS[F];
                            x || ("|" == F ? k += '<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>' : "-" == F && (k += '<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'));
                            !x || x && "undefined" !== typeof x.plugin && 0 > b.opts.pluginsEnabled.indexOf(x.plugin) || (void 0 !== c[f].align && (q = c[f].align), void 0 !== c[f].buttonsVisible && (z = c[f].buttonsVisible), c.showMoreButtons && h >= z ? n += C(F, x, !0) : k += C(F, x, !0), h++)
                        }
                        c.showMoreButtons && h > z && (g = f, h = a.COMMANDS[g], h.more_btn = !0, k += C(g, h, !0));
                        e += '<div class="fr-btn-grp fr-float-'.concat(q, '">').concat(k, "</div>");
                        c.showMoreButtons && 0 < n.length && (d += '<div class="fr-more-toolbar" data-name="'.concat(f + "-" + b.id, '">').concat(n, "</div>"))
                    }
                }
                return b.opts.toolbarBottom ? "".concat(d, '<div class="fr-newline"></div>').concat(e) : "".concat(e, '<div class="fr-newline"></div>').concat(d)
            },
            bindCommands: function(c, e) {
                function d(e) {
                    (!e || e.type === b._mouseup && e.target !== G("html").get(0) || "keydown" === e.type && (b.keys.isCharacter(e.which) && !b.keys.ctrlKey(e) || e.which === a.KEYCODE.ESC)) && m(c)
                }
                b.events.bindClick(c, ".fr-command:not(.fr-disabled)", x);
                b.events.$on(c, "".concat(b._mousedown, " ").concat(b._mouseup, " ").concat(b._move), ".fr-dropdown-menu", E, !0);
                b.events.$on(c, "".concat(b._mousedown, " ").concat(b._mouseup, " ").concat(b._move), ".fr-dropdown-menu .fr-dropdown-wrapper", F, !0);
                var f = c.get(0).ownerDocument;
                b.events.$on(G("defaultView" in f ? f.defaultView : f.parentWindow), "".concat(b._mouseup, " resize keydown"), d, !0);
                b.opts.iframe && b.events.$on(b.$win, b._mouseup, d, !0);
                b.node.hasClass(c.get(0), "fr-popup") ? G.merge(v, c.find(".fr-btn").toArray()) : G.merge(L, c.find(".fr-btn").toArray());
                b.tooltip.bind(c, ".fr-btn, .fr-title", e)
            },
            refresh: function(c) {
                var e = c.parents(".fr-popup, .fr-toolbar").data("instance") || b,
                    d = c.data("cmd");
                if (b.node.hasClass(c.get(0), "fr-dropdown")) var f = c.next();
                else c.removeClass("fr-active"), c.attr("aria-pressed") && c.attr("aria-pressed", !1);
                if (a.COMMANDS[d] && a.COMMANDS[d].refresh) a.COMMANDS[d].refresh.apply(e, [c, f]);
                else if (b.refresh[d]) e.refresh[d](c, f)
            },
            bulkRefresh: y,
            exec: h,
            click: A,
            hideActiveDropdowns: m,
            addButtons: function(b) {
                for (var a = 0; a < b.length; a++) L.push(b)
            },
            getButtons: d,
            getPosition: function(a) {
                var c = a.offset().left,
                    e = b.opts.toolbarBottom ? 10 : a.outerHeight() - 10;
                a = a.offset().top +
                    e;
                return {
                    left: c,
                    top: a
                }
            }
        }
    };
    a.ICON_TEMPLATES = {
        font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>',
        font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',
        font_awesome_5r: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',
        font_awesome_5l: '<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>',
        font_awesome_5b: '<i class="fab fa-[FA5NAME]" aria-hidden="true"></i>',
        text: '<span style="text-align: center;">[NAME]</span>',
        image: "<img src=[SRC] alt=[ALT] />",
        svg: '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="[PATH]"/></svg>',
        empty: " "
    };
    a.ICONS = {
        bold: {
            NAME: "bold",
            SVG_KEY: "bold"
        },
        italic: {
            NAME: "italic",
            SVG_KEY: "italic"
        },
        underline: {
            NAME: "underline",
            SVG_KEY: "underline"
        },
        strikeThrough: {
            NAME: "strikethrough",
            SVG_KEY: "strikeThrough"
        },
        subscript: {
            NAME: "subscript",
            SVG_KEY: "subscript"
        },
        superscript: {
            NAME: "superscript",
            SVG_KEY: "superscript"
        },
        cancel: {
            NAME: "cancel",
            SVG_KEY: "cancel"
        },
        color: {
            NAME: "tint",
            SVG_KEY: "textColor"
        },
        outdent: {
            NAME: "outdent",
            SVG_KEY: "outdent"
        },
        indent: {
            NAME: "indent",
            SVG_KEY: "indent"
        },
        undo: {
            NAME: "rotate-left",
            FA5NAME: "undo",
            SVG_KEY: "undo"
        },
        redo: {
            NAME: "rotate-right",
            FA5NAME: "redo",
            SVG_KEY: "redo"
        },
        insert: {
            NAME: "insert",
            SVG_KEY: "insert"
        },
        insertAll: {
            NAME: "insertAll",
            SVG_KEY: "insertAll"
        },
        insertHR: {
            NAME: "minus",
            SVG_KEY: "horizontalLine"
        },
        clearFormatting: {
            NAME: "eraser",
            SVG_KEY: "clearFormatting"
        },
        selectAll: {
            NAME: "mouse-pointer",
            SVG_KEY: "selectAll"
        },
        minimize: {
            NAME: "minimize",
            SVG_KEY: "minimize"
        },
        moreText: {
            NAME: "ellipsis-v",
            SVG_KEY: "textMore"
        },
        moreParagraph: {
            NAME: "ellipsis-v",
            SVG_KEY: "paragraphMore"
        },
        moreRich: {
            NAME: "ellipsis-v",
            SVG_KEY: "insertMore"
        },
        moreMisc: {
            NAME: "ellipsis-v",
            SVG_KEY: "more"
        }
    };
    a.DefineIconTemplate = function(b, c) {
        a.ICON_TEMPLATES[b] = c
    };
    a.DefineIcon = function(b, c) {
        a.ICONS[b] = c
    };
    Object.assign(a.DEFAULTS, {
        iconsTemplate: "svg"
    });
    a.MODULES.icon = function(b) {
        return {
            create: function(c) {
                var e = null,
                    d = a.ICONS[c];
                if ("undefined" !== typeof d) {
                    var f = d.template || a.ICON_DEFAULT_TEMPLATE || b.opts.iconsTemplate;
                    f && f.apply && (f = f.apply(b));
                    d.FA5NAME || (d.FA5NAME = d.NAME);
                    "svg" !== f || d.PATH || (d.PATH = a.SVG[d.SVG_KEY] || "");
                    f && (f = a.ICON_TEMPLATES[f]) && (e = f.replace(/\[([a-zA-Z0-9]*)\]/g, function(b, a) {
                        return "NAME" === a ? d[a] || c : d[a]
                    }))
                }
                return e || c
            },
            getTemplate: function(c) {
                c = a.ICONS[c];
                var e = b.opts.iconsTemplate;
                "undefined" !== typeof c && (e = c.template || a.ICON_DEFAULT_TEMPLATE || b.opts.iconsTemplate);
                return e
            },
            getFileIcon: function(b) {
                var c = a.FILEICONS[b];
                return "undefined" !== typeof c ? c : b
            }
        }
    };
    a.SVG = {
        add: "M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z",
        advancedImageEditor: "M3,17v2h6v-2H3z M3,5v2h10V5H3z M13,21v-2h8v-2h-8v-2h-2v6H13z M7,9v2H3v2h4v2h2V9H7z M21,13v-2H11v2H21z M15,9h2V7h4V5h-4  V3h-2V9z",
        alignCenter: "M9,18h6v-2H9V18z M6,11v2h12v-2H6z M3,6v2h18V6H3z",
        alignJustify: "M3,18h18v-2H3V18z M3,11v2h18v-2H3z M3,6v2h18V6H3z",
        alignLeft: "M3,18h6v-2H3V18z M3,11v2h12v-2H3z M3,6v2h18V6H3z",
        alignRight: "M15,18h6v-2h-6V18z M9,11v2h12v-2H9z M3,6v2h18V6H3z",
        anchors: "M16,4h-4H8C6.9,4,6,4.9,6,6v4v10l6-2.6l6,2.6V10V6C18,4.9,17.1,4,16,4z M16,17l-4-1.8L8,17v-7V6h4h4v4V17z",
        autoplay: "M 7.570312 0.292969 C 7.542969 0.292969 7.515625 0.292969 7.488281 0.296875 C 7.203125 0.324219 6.984375 0.539062 6.980469 0.792969 L 6.925781 3.535156 C 2.796875 3.808594 -0.0078125 6.425781 -0.0859375 10.09375 C -0.121094 11.96875 0.710938 13.6875 2.265625 14.921875 C 3.769531 16.117188 5.839844 16.796875 8.097656 16.828125 C 8.140625 16.828125 12.835938 16.898438 13.035156 16.886719 C 15.171875 16.796875 17.136719 16.128906 18.558594 15.003906 C 20.066406 13.816406 20.882812 12.226562 20.917969 10.40625 C 20.960938 8.410156 20.023438 6.605469 18.289062 5.335938 C 18.214844 5.277344 18.128906 5.230469 18.035156 5.203125 C 17.636719 5.074219 17.222656 5.199219 17 5.476562 L 15.546875 7.308594 C 15.304688 7.609375 15.363281 8.007812 15.664062 8.265625 C 16.351562 8.851562 16.707031 9.625 16.6875 10.5 C 16.652344 12.25 15.070312 13.390625 12.757812 13.535156 C 12.59375 13.539062 8.527344 13.472656 8.164062 13.464844 C 5.703125 13.429688 4.101562 12.191406 4.140625 10.3125 C 4.175781 8.570312 5.132812 7.46875 6.847656 7.199219 L 6.796875 9.738281 C 6.792969 9.992188 7 10.214844 7.285156 10.253906 C 7.3125 10.257812 7.339844 10.257812 7.367188 10.257812 C 7.503906 10.261719 7.632812 10.222656 7.738281 10.148438 L 14.039062 5.785156 C 14.171875 5.691406 14.253906 5.558594 14.253906 5.410156 C 14.257812 5.261719 14.1875 5.125 14.058594 5.027344 L 7.941406 0.414062 C 7.835938 0.335938 7.707031 0.292969 7.570312 0.292969 ",
        back: "M20 11L7.83 11 11.425 7.405 10.01 5.991 5.416 10.586 5.414 10.584 4 11.998 4.002 12 4 12.002 5.414 13.416 5.416 13.414 10.01 18.009 11.425 16.595 7.83 13 20 13 20 13 20 11 20 11Z",
        backgroundColor: "M9.91752,12.24082l7.74791-5.39017,1.17942,1.29591-6.094,7.20747L9.91752,12.24082M7.58741,12.652l4.53533,4.98327a.93412.93412,0,0,0,1.39531-.0909L20.96943,8.7314A.90827.90827,0,0,0,20.99075,7.533l-2.513-2.76116a.90827.90827,0,0,0-1.19509-.09132L7.809,11.27135A.93412.93412,0,0,0,7.58741,12.652ZM2.7939,18.52772,8.41126,19.5l1.47913-1.34617-3.02889-3.328Z",
        blockquote: "M10.31788,5l.93817,1.3226A12.88271,12.88271,0,0,0,8.1653,9.40125a5.54242,5.54242,0,0,0-.998,3.07866v.33733q.36089-.04773.66067-.084a4.75723,4.75723,0,0,1,.56519-.03691,2.87044,2.87044,0,0,1,2.11693.8427,2.8416,2.8416,0,0,1,.8427,2.09274,3.37183,3.37183,0,0,1-.8898,2.453A3.143,3.143,0,0,1,8.10547,19,3.40532,3.40532,0,0,1,5.375,17.7245,4.91156,4.91156,0,0,1,4.30442,14.453,9.3672,9.3672,0,0,1,5.82051,9.32933,14.75716,14.75716,0,0,1,10.31788,5Zm8.39243,0,.9369,1.3226a12.88289,12.88289,0,0,0-3.09075,3.07865,5.54241,5.54241,0,0,0-.998,3.07866v.33733q.33606-.04773.63775-.084a4.91773,4.91773,0,0,1,.58938-.03691,2.8043,2.8043,0,0,1,2.1042.83,2.89952,2.89952,0,0,1,.80578,2.10547,3.42336,3.42336,0,0,1-.86561,2.453A3.06291,3.06291,0,0,1,16.49664,19,3.47924,3.47924,0,0,1,13.742,17.7245,4.846,4.846,0,0,1,12.64721,14.453,9.25867,9.25867,0,0,1,14.17476,9.3898,15.26076,15.26076,0,0,1,18.71031,5Z",
        bold: "M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z",
        cancel: "M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z",
        cellBackground: "M16.6,12.4L7.6,3.5L6.2,4.9l2.4,2.4l-5.2,5.2c-0.6,0.6-0.6,1.5,0,2.1l5.5,5.5c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4  l5.5-5.5C17.2,14,17.2,13,16.6,12.4z M5.2,13.5L10,8.7l4.8,4.8H5.2z M19,15c0,0-2,2.2-2,3.5c0,1.1,0.9,2,2,2s2-0.9,2-2  C21,17.2,19,15,19,15z",
        cellBorderColor: "M22,22H2v2h20V22z",
        cellOptions: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M9.5,6.5h5V9h-5V6.5z M8,17.5H4  c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z   M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4  c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0V9z",
        cellStyle: "M20,19.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L12.3,17h3.8l1.7-3.5l1.4,3.5H23L20,19.9z M20,5H4C2.9,5,2,5.9,2,7v10  c0,1.1,0.9,2,2,2h7.5l-0.6-0.6L10,17.5H9.5V15h5.4l1.1-2.3v-2.2h4.5v3H20l0.6,1.5H22V7C22,5.9,21.1,5,20,5z M3.5,7  c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0.1,0h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M4,17.5c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0-0.1v-2H8v2.5H4  z M14.5,9h-5V6.5h5V9z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0.1V9z",
        clearFormatting: "M11.48,10.09l-1.2-1.21L8.8,7.41,6.43,5,5.37,6.1,8.25,9,4.66,19h2l1.43-4h5.14l1.43,4h2l-.89-2.51L18.27,19l1.07-1.06L14.59,13.2ZM8.8,13l.92-2.56L12.27,13Zm.56-7.15L9.66,5h2l1.75,4.9Z",
        close: "M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z",
        codeView: "M9.4,16.6,4.8,12,9.4,7.4,8,6,2,12l6,6Zm5.2,0L19.2,12,14.6,7.4,16,6l6,6-6,6Z",
        cogs: "M18.877 12.907a6.459 6.459 0 0 0 0 -1.814l1.952 -1.526a0.468 0.468 0 0 0 0.111 -0.593l-1.851 -3.2a0.461 0.461 0 0 0 -0.407 -0.231 0.421 0.421 0 0 0 -0.157 0.028l-2.3 0.925a6.755 6.755 0 0 0 -1.563 -0.907l-0.352 -2.452a0.451 0.451 0 0 0 -0.453 -0.388h-3.7a0.451 0.451 0 0 0 -0.454 0.388L9.347 5.588A7.077 7.077 0 0 0 7.783 6.5l-2.3 -0.925a0.508 0.508 0 0 0 -0.166 -0.028 0.457 0.457 0 0 0 -0.4 0.231l-1.851 3.2a0.457 0.457 0 0 0 0.111 0.593l1.952 1.526A7.348 7.348 0 0 0 5.063 12a7.348 7.348 0 0 0 0.064 0.907L3.175 14.433a0.468 0.468 0 0 0 -0.111 0.593l1.851 3.2a0.461 0.461 0 0 0 0.407 0.231 0.421 0.421 0 0 0 0.157 -0.028l2.3 -0.925a6.74 6.74 0 0 0 1.564 0.907L9.7 20.864a0.451 0.451 0 0 0 0.454 0.388h3.7a0.451 0.451 0 0 0 0.453 -0.388l0.352 -2.452a7.093 7.093 0 0 0 1.563 -0.907l2.3 0.925a0.513 0.513 0 0 0 0.167 0.028 0.457 0.457 0 0 0 0.4 -0.231l1.851 -3.2a0.468 0.468 0 0 0 -0.111 -0.593Zm-0.09 2.029l-0.854 1.476 -2.117 -0.852 -0.673 0.508a5.426 5.426 0 0 1 -1.164 0.679l-0.795 0.323 -0.33 2.269h-1.7l-0.32 -2.269 -0.793 -0.322a5.3 5.3 0 0 1 -1.147 -0.662L8.2 15.56l-2.133 0.86 -0.854 -1.475 1.806 -1.411 -0.1 -0.847c-0.028 -0.292 -0.046 -0.5 -0.046 -0.687s0.018 -0.4 0.045 -0.672l0.106 -0.854L5.217 9.064l0.854 -1.475 2.117 0.851 0.673 -0.508a5.426 5.426 0 0 1 1.164 -0.679l0.8 -0.323 0.331 -2.269h1.7l0.321 2.269 0.792 0.322a5.3 5.3 0 0 1 1.148 0.661l0.684 0.526 2.133 -0.859 0.853 1.473 -1.8 1.421 0.1 0.847a5 5 0 0 1 0.046 0.679c0 0.193 -0.018 0.4 -0.045 0.672l-0.106 0.853ZM12 14.544A2.544 2.544 0 1 1 14.546 12 2.552 2.552 0 0 1 12 14.544Z",
        columns: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z",
        edit: "M17,11.2L12.8,7L5,14.8V19h4.2L17,11.2z M7,16.8v-1.5l5.6-5.6l1.4,1.5l-5.6,5.6H7z M13.5,6.3l0.7-0.7c0.8-0.8,2.1-0.8,2.8,0  c0,0,0,0,0,0L18.4,7c0.8,0.8,0.8,2,0,2.8l-0.7,0.7L13.5,6.3z",
        exitFullscreen: "M5,16H8v3h2V14H5ZM8,8H5v2h5V5H8Zm6,11h2V16h3V14H14ZM16,8V5H14v5h5V8Z",
        fileInsert: "M 8.09375 12.75 L 5.90625 12.75 C 5.542969 12.75 5.25 12.394531 5.25 11.953125 L 5.25 6.375 L 2.851562 6.375 C 2.367188 6.375 2.121094 5.660156 2.464844 5.242188 L 6.625 0.1875 C 6.832031 -0.0585938 7.167969 -0.0585938 7.371094 0.1875 L 11.535156 5.242188 C 11.878906 5.660156 11.632812 6.375 11.148438 6.375 L 8.75 6.375 L 8.75 11.953125 C 8.75 12.394531 8.457031 12.75 8.09375 12.75 Z M 14 12.484375 L 14 16.203125 C 14 16.644531 13.707031 17 13.34375 17 L 0.65625 17 C 0.292969 17 0 16.644531 0 16.203125 L 0 12.484375 C 0 12.042969 0.292969 11.6875 0.65625 11.6875 L 4.375 11.6875 L 4.375 11.953125 C 4.375 12.980469 5.0625 13.8125 5.90625 13.8125 L 8.09375 13.8125 C 8.9375 13.8125 9.625 12.980469 9.625 11.953125 L 9.625 11.6875 L 13.34375 11.6875 C 13.707031 11.6875 14 12.042969 14 12.484375 Z M 10.609375 15.40625 C 10.609375 15.039062 10.363281 14.742188 10.0625 14.742188 C 9.761719 14.742188 9.515625 15.039062 9.515625 15.40625 C 9.515625 15.773438 9.761719 16.070312 10.0625 16.070312 C 10.363281 16.070312 10.609375 15.773438 10.609375 15.40625 Z M 12.359375 15.40625 C 12.359375 15.039062 12.113281 14.742188 11.8125 14.742188 C 11.511719 14.742188 11.265625 15.039062 11.265625 15.40625 C 11.265625 15.773438 11.511719 16.070312 11.8125 16.070312 C 12.113281 16.070312 12.359375 15.773438 12.359375 15.40625 Z M 12.359375 15.40625 ",
        fileManager: "M 0 5.625 L 20.996094 5.625 L 21 15.75 C 21 16.371094 20.410156 16.875 19.6875 16.875 L 1.3125 16.875 C 0.585938 16.875 0 16.371094 0 15.75 Z M 0 5.625 M 21 4.5 L 0 4.5 L 0 2.25 C 0 1.628906 0.585938 1.125 1.3125 1.125 L 6.921875 1.125 C 7.480469 1.125 8.015625 1.316406 8.40625 1.652344 L 9.800781 2.847656 C 10.195312 3.183594 10.730469 3.375 11.289062 3.375 L 19.6875 3.375 C 20.414062 3.375 21 3.878906 21 4.5 Z M 21 4.5",
        fontAwesome: "M18.99018,13.98212V7.52679c-.08038-1.21875-1.33929-.683-1.33929-.683-2.933,1.39282-4.36274.61938-5.85938.15625a6.23272,6.23272,0,0,0-2.79376-.20062l-.00946.004A1.98777,1.98777,0,0,0,7.62189,5.106a.984.984,0,0,0-.17517-.05432c-.02447-.0055-.04882-.01032-.0736-.0149A.9565.9565,0,0,0,7.1908,5H6.82539a.9565.9565,0,0,0-.18232.0368c-.02472.00458-.04907.0094-.07348.01484a.985.985,0,0,0-.17523.05438,1.98585,1.98585,0,0,0-.573,3.49585v9.394A1.004,1.004,0,0,0,6.82539,19H7.1908a1.00406,1.00406,0,0,0,1.00409-1.00409V15.52234c3.64221-1.09827,5.19709.64282,7.09888.57587a5.57291,5.57291,0,0,0,3.25446-1.05805A1.2458,1.2458,0,0,0,18.99018,13.98212Z",
        fontFamily: "M16,19h2L13,5H11L6,19H8l1.43-4h5.14Zm-5.86-6L12,7.8,13.86,13Z",
        fontSize: "M20.75,19h1.5l-3-10h-1.5l-3,10h1.5L17,16.5h3Zm-3.3-4,1.05-3.5L19.55,15Zm-5.7,4h2l-5-14h-2l-5,14h2l1.43-4h5.14ZM5.89,13,7.75,7.8,9.61,13Z",
        fullscreen: "M7,14H5v5h5V17H7ZM5,10H7V7h3V5H5Zm12,7H14v2h5V14H17ZM14,5V7h3v3h2V5Z",
        help: "M11,17h2v2h-2V17z M12,5C9.8,5,8,6.8,8,9h2c0-1.1,0.9-2,2-2s2,0.9,2,2c0,2-3,1.7-3,5v1h2v-1c0-2.2,3-2.5,3-5  C16,6.8,14.2,5,12,5z",
        horizontalLine: "M5,12h14 M19,11H5v2h14V11z",
        imageAltText: "M19,7h-6v12h-2V7H5V5h6h2h6V7z",
        imageCaption: "M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z M22,22H2v2h20V22z",
        imageClass: "M9.5,13.4l-2.9-2.9h3.8L12.2,7l1.4,3.5h3.8l-3,2.9l0.9,3.6L12,15.1L8.8,17L9.5,13.4z M22,6v12c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,6H4v12h16V8.8V6z",
        imageDisplay: "M3,5h18v2H3V5z M13,9h8v2h-8V9z M13,13h8v2h-8V13z M3,17h18v2H3V17z M3,9h8v6H3V9z",
        imageManager: "M20,6h-7l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h6.2l2,2H20V18z   M18,16l-3.8-5H14l-2.9,3.8L9,12.1L6,16H18z M10,9.5C10,8.7,9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11S10,10.3,10,9.5z",
        imageSize: "M16.9,4c-0.3,0-0.5,0.2-0.8,0.3L3.3,13c-0.9,0.6-1.1,1.9-0.5,2.8l2.2,3.3c0.4,0.7,1.2,1,2,0.8c0.3,0,0.5-0.2,0.8-0.3  L20.7,11c0.9-0.6,1.1-1.9,0.5-2.8l-2.2-3.3C18.5,4.2,17.7,3.9,16.9,4L16.9,4z M16.9,9.9L18.1,9l-2-2.9L17,5.6c0.1,0,0.1-0.1,0.2-0.1  c0.2,0,0.4,0,0.5,0.2L19.9,9c0.2,0.2,0.1,0.5-0.1,0.7L7,18.4c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0-0.4,0-0.5-0.2L4.1,15  c-0.2-0.2-0.1-0.5,0.1-0.7L5,13.7l2,2.9l1.2-0.8l-2-2.9L7.5,12l1.1,1.7l1.2-0.8l-1.1-1.7l1.2-0.8l2,2.9l1.2-0.8l-2-2.9l1.2-0.8  l1.1,1.7l1.2-0.8l-1.1-1.7L14.9,7L16.9,9.9z",
        indent: "M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z",
        inlineClass: "M9.9,13.313A1.2,1.2,0,0,1,9.968,13H6.277l1.86-5.2,1.841,5.148A1.291,1.291,0,0,1,11.212,12h.426l-2.5-7h-2l-5,14h2l1.43-4H9.9Zm2.651,6.727a2.884,2.884,0,0,1-.655-2.018v-2.71A1.309,1.309,0,0,1,13.208,14h3.113a3.039,3.039,0,0,1,2,1.092s1.728,1.818,2.964,2.928a1.383,1.383,0,0,1,.318,1.931,1.44,1.44,0,0,1-.19.215l-3.347,3.31a1.309,1.309,0,0,1-1.832.258h0a1.282,1.282,0,0,1-.258-.257l-1.71-1.728Zm2.48-3.96a.773.773,0,1,0,.008,0Z",
        inlineStyle: "M11.88,15h.7l.7-1.7-3-8.3h-2l-5,14h2l1.4-4Zm-4.4-2,1.9-5.2,1.9,5.2ZM15.4,21.545l3.246,1.949-.909-3.637L20.72,17H16.954l-1.429-3.506L13.837,17H10.071l2.857,2.857-.779,3.637Z",
        insert: "M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10",
        insertEmbed: "M20.73889,15.45929a3.4768,3.4768,0,0,0-5.45965-.28662L9.5661,12.50861a3.49811,3.49811,0,0,0-.00873-1.01331l5.72174-2.66809a3.55783,3.55783,0,1,0-.84527-1.81262L8.70966,9.6839a3.50851,3.50851,0,1,0,.0111,4.63727l5.7132,2.66412a3.49763,3.49763,0,1,0,6.30493-1.526ZM18.00745,5.01056A1.49993,1.49993,0,1,1,16.39551,6.3894,1.49994,1.49994,0,0,1,18.00745,5.01056ZM5.99237,13.49536a1.49989,1.49989,0,1,1,1.61194-1.37878A1.49982,1.49982,0,0,1,5.99237,13.49536Zm11.78211,5.494a1.49993,1.49993,0,1,1,1.61193-1.37885A1.49987,1.49987,0,0,1,17.77448,18.98932Z",
        insertFile: "M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z",
        insertImage: "M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z",
        insertLink: "M11,17H7A5,5,0,0,1,7,7h4V9H7a3,3,0,0,0,0,6h4ZM17,7H13V9h4a3,3,0,0,1,0,6H13v2h4A5,5,0,0,0,17,7Zm-1,4H8v2h8Z",
        insertMore: "M16.5,13h-6v6h-2V13h-6V11h6V5h2v6h6Zm5,4.5A1.5,1.5,0,1,1,20,16,1.5,1.5,0,0,1,21.5,17.5Zm0-4A1.5,1.5,0,1,1,20,12,1.5,1.5,0,0,1,21.5,13.5Zm0-4A1.5,1.5,0,1,1,20,8,1.5,1.5,0,0,1,21.5,9.5Z",
        insertTable: "M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M9.5,13.5v-3  h5v3H9.5z M14.5,15v2.5h-5V15H14.5z M9.5,9V6.5h5V9H9.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M3.5,17  v-2H8v2.5H4C3.7,17.5,3.5,17.3,3.5,17z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M16,9V6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16z",
        insertVideo: "M15,8v8H5V8H15m2,2.5V7a1,1,0,0,0-1-1H4A1,1,0,0,0,3,7V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V13.5l2.29,2.29A1,1,0,0,0,21,15.08V8.91a1,1,0,0,0-1.71-.71Z",
        upload: "M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z",
        uploadFiles: "M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z",
        italic: "M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z",
        search: "M15.5 14h-0.79l-0.28 -0.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09 -0.59 4.23 -1.57l0.27 0.28v0.79l5 4.99L20.49 19l-4.99 -5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
        lineHeight: "M6.25,7h2.5L5.25,3.5,1.75,7h2.5V17H1.75l3.5,3.5L8.75,17H6.25Zm4-2V7h12V5Zm0,14h12V17h-12Zm0-6h12V11h-12Z",
        linkStyles: "M19,17.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L11.3,15h3.8l1.7-3.5l1.4,3.5H22L19,17.9z M20,12c0,0.3-0.1,0.7-0.2,1h2.1  c0.1-0.3,0.1-0.6,0.1-1c0-2.8-2.2-5-5-5h-4v2h4C18.7,9,20,10.3,20,12z M14.8,11H8v2h3.3h2.5L14.8,11z M9.9,16.4L8.5,15H7  c-1.7,0-3-1.3-3-3s1.3-3,3-3h4V7H7c-2.8,0-5,2.2-5,5s2.2,5,5,5h3.5L9.9,16.4z",
        mention: "M12.4,5c-4.1,0-7.5,3.4-7.5,7.5S8.3,20,12.4,20h3.8v-1.5h-3.8c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6v1.1  c0,0.6-0.5,1.2-1.1,1.2s-1.1-0.6-1.1-1.2v-1.1c0-2.1-1.7-3.8-3.8-3.8s-3.7,1.7-3.7,3.8s1.7,3.8,3.8,3.8c1,0,2-0.4,2.7-1.1  c0.5,0.7,1.3,1.1,2.2,1.1c1.5,0,2.6-1.2,2.6-2.7v-1.1C19.9,8.4,16.6,5,12.4,5z M12.4,14.7c-1.2,0-2.3-1-2.3-2.2s1-2.3,2.3-2.3  s2.3,1,2.3,2.3S13.6,14.7,12.4,14.7z",
        minimize: "M5,12h14 M19,11H5v2h14V11z",
        more: "M13.5,17c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,16.2,13.5,17z M13.5,12c0,0.8-0.7,1.5-1.5,1.5 s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,11.2,13.5,12z M13.5,7c0,0.8-0.7,1.5-1.5,1.5S10.5,7.8,10.5,7s0.7-1.5,1.5-1.5 S13.5,6.2,13.5,7z",
        openLink: "M17,17H7V7h3V5H7C6,5,5,6,5,7v10c0,1,1,2,2,2h10c1,0,2-1,2-2v-3h-2V17z M14,5v2h1.6l-5.8,5.8l1.4,1.4L17,8.4V10h2V5H14z",
        orderedList: "M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z",
        outdent: "M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z",
        pageBreaker: "M3,9v6l3-3L3,9z M21,9H8V4h2v3h9V4h2V9z M21,20h-2v-3h-9v3H8v-5h13V20z M11,13H8v-2h3V13z M16,13h-3v-2h3V13z M21,13h-3v-2  h3V13z",
        paragraphFormat: "M10.15,5A4.11,4.11,0,0,0,6.08,8.18,4,4,0,0,0,10,13v6h2V7h2V19h2V7h2V5ZM8,9a2,2,0,0,1,2-2v4A2,2,0,0,1,8,9Z",
        paragraphMore: "M7.682,5a4.11,4.11,0,0,0-4.07,3.18,4,4,0,0,0,3.11,4.725h0l.027.005a3.766,3.766,0,0,0,.82.09v6h2V7h2V19h2V7h2V5ZM5.532,9a2,2,0,0,1,2-2v4A2,2,0,0,1,5.532,9Zm14.94,8.491a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,17.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,13.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,9.491Z",
        paragraphStyle: "M4,9c0-1.1,0.9-2,2-2v4C4.9,11,4,10.1,4,9z M16.7,20.5l3.2,1.9L19,18.8l3-2.9h-3.7l-1.4-3.5L15.3,16h-3.8l2.9,2.9l-0.9,3.6  L16.7,20.5z M10,17.4V19h1.6L10,17.4z M6.1,5c-1.9,0-3.6,1.3-4,3.2c-0.5,2.1,0.8,4.2,2.9,4.7c0,0,0,0,0,0h0.2C5.5,13,5.8,13,6,13v6  h2V7h2v7h2V7h2V5H6.1z",
        pdfExport: "M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z M16.3,13.5  c-0.2-0.6-1.1-0.8-2.6-0.8c-0.1,0-0.1,0-0.2,0c-0.3-0.3-0.8-0.9-1-1.2c-0.2-0.2-0.3-0.3-0.4-0.6c0.2-0.7,0.2-1,0.3-1.5  c0.1-0.9,0-1.6-0.2-1.8c-0.4-0.2-0.7-0.2-0.9-0.2c-0.1,0-0.3,0.2-0.7,0.7c-0.2,0.7-0.1,1.8,0.6,2.8c-0.2,0.8-0.7,1.6-1,2.4  c-0.8,0.2-1.5,0.7-1.9,1.1c-0.7,0.7-0.9,1.1-0.7,1.6c0,0.3,0.2,0.6,0.7,0.6c0.3-0.1,0.3-0.2,0.7-0.3c0.6-0.3,1.2-1.7,1.7-2.4  c0.8-0.2,1.7-0.3,2-0.3c0.1,0,0.3,0,0.6,0c0.8,0.8,1.2,1.1,1.8,1.2c0.1,0,0.2,0,0.3,0c0.3,0,0.8-0.1,1-0.6  C16.4,14.1,16.4,13.9,16.3,13.5z M8.3,15.7c-0.1,0.1-0.2,0.1-0.2,0.1c0-0.1,0-0.3,0.6-0.8c0.2-0.2,0.6-0.3,0.9-0.7  C9,15,8.6,15.5,8.3,15.7z M11.3,9c0-0.1,0.1-0.2,0.1-0.2S11.6,9,11.5,10c0,0.1,0,0.3-0.1,0.7C11.3,10.1,11,9.5,11.3,9z M10.9,13.1  c0.2-0.6,0.6-1,0.7-1.5c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.2,0.3,0.7,0.7,0.9C12.2,12.8,11.6,13,10.9,13.1z M15.2,14.1  c-0.1,0-0.1,0-0.2,0c-0.2,0-0.7-0.2-1-0.7c1.1,0,1.6,0.2,1.6,0.6C15.5,14.1,15.4,14.1,15.2,14.1z",
        print: "M16.1,17c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1s-0.4,1-1,1C16.5,18,16.1,17.6,16.1,17z M22,15v4c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h1V5c0-1.1,0.9-2,2-2h7.4L19,7.6V13h1C21.1,13,22,13.9,22,15z M7,13h10V9h-4V5H7V13z M20,15H4  v4h16V15z",
        redo: "M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z",
        removeTable: "M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z",
        insertAll: "M 9.25 12 L 6.75 12 C 6.335938 12 6 11.664062 6 11.25 L 6 6 L 3.257812 6 C 2.703125 6 2.425781 5.328125 2.820312 4.933594 L 7.570312 0.179688 C 7.804688 -0.0546875 8.191406 -0.0546875 8.425781 0.179688 L 13.179688 4.933594 C 13.574219 5.328125 13.296875 6 12.742188 6 L 10 6 L 10 11.25 C 10 11.664062 9.664062 12 9.25 12 Z M 16 11.75 L 16 15.25 C 16 15.664062 15.664062 16 15.25 16 L 0.75 16 C 0.335938 16 0 15.664062 0 15.25 L 0 11.75 C 0 11.335938 0.335938 11 0.75 11 L 5 11 L 5 11.25 C 5 12.214844 5.785156 13 6.75 13 L 9.25 13 C 10.214844 13 11 12.214844 11 11.25 L 11 11 L 15.25 11 C 15.664062 11 16 11.335938 16 11.75 Z M 12.125 14.5 C 12.125 14.15625 11.84375 13.875 11.5 13.875 C 11.15625 13.875 10.875 14.15625 10.875 14.5 C 10.875 14.84375 11.15625 15.125 11.5 15.125 C 11.84375 15.125 12.125 14.84375 12.125 14.5 Z M 14.125 14.5 C 14.125 14.15625 13.84375 13.875 13.5 13.875 C 13.15625 13.875 12.875 14.15625 12.875 14.5 C 12.875 14.84375 13.15625 15.125 13.5 15.125 C 13.84375 15.125 14.125 14.84375 14.125 14.5 Z M 14.125 14.5 ",
        remove: "M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z",
        replaceImage: "M16,5v3H4v2h12v3l4-4L16,5z M8,19v-3h12v-2H8v-3l-4,4L8,19z",
        row: "M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z",
        selectAll: "M5,7h2V5C5.9,5,5,5.9,5,7z M5,11h2V9H5V11z M9,19h2v-2H9V19z M5,11h2V9H5V11z M15,5h-2v2h2V5z M17,5v2h2C19,5.9,18.1,5,17,5  z M7,19v-2H5C5,18.1,5.9,19,7,19z M5,15h2v-2H5V15z M11,5H9v2h2V5z M13,19h2v-2h-2V19z M17,11h2V9h-2V11z M17,19c1.1,0,2-0.9,2-2h-2  V19z M17,11h2V9h-2V11z M17,15h2v-2h-2V15z M13,19h2v-2h-2V19z M13,7h2V5h-2V7z M9,15h6V9H9V15z M11,11h2v2h-2V11z",
        smile: "M11.991,3A9,9,0,1,0,21,12,8.99557,8.99557,0,0,0,11.991,3ZM12,19a7,7,0,1,1,7-7A6.99808,6.99808,0,0,1,12,19Zm3.105-5.2h1.503a4.94542,4.94542,0,0,1-9.216,0H8.895a3.57808,3.57808,0,0,0,6.21,0ZM7.5,9.75A1.35,1.35,0,1,1,8.85,11.1,1.35,1.35,0,0,1,7.5,9.75Zm6.3,0a1.35,1.35,0,1,1,1.35,1.35A1.35,1.35,0,0,1,13.8,9.75Z",
        spellcheck: "M19.1,13.6l-5.6,5.6l-2.7-2.7l-1.4,1.4l4.1,4.1l7-7L19.1,13.6z M10.8,13.7l2.7,2.7l0.8-0.8L10.5,5h-2l-5,14h2l1.4-4h2.6  L10.8,13.7z M9.5,7.8l1.9,5.2H7.6L9.5,7.8z",
        star: "M12.1,7.7l1,2.5l0.4,0.9h1h2.4l-2.1,2l-0.6,0.6l0.2,0.9l0.6,2.3l-2.2-1.3L12,15.2l-0.8,0.5L9,17l0.5-2.5l0.1-0.8L9,13.1  l-2-2h2.5h0.9l0.4-0.8L12.1,7.7 M12.2,4L9.5,9.6H3.4L8,14.2L6.9,20l5.1-3.1l5.3,3.1l-1.5-5.8l4.8-4.6h-6.1L12.2,4L12.2,4z",
        strikeThrough: "M3,12.20294H21v1.5H16.63422a3.59782,3.59782,0,0,1,.34942,1.5929,3.252,3.252,0,0,1-1.31427,2.6997A5.55082,5.55082,0,0,1,12.20251,19a6.4421,6.4421,0,0,1-2.62335-.539,4.46335,4.46335,0,0,1-1.89264-1.48816,3.668,3.668,0,0,1-.67016-2.15546V14.704h.28723v-.0011h.34149v.0011H9.02v.11334a2.18275,2.18275,0,0,0,.85413,1.83069,3.69,3.69,0,0,0,2.32836.67926,3.38778,3.38778,0,0,0,2.07666-.5462,1.73346,1.73346,0,0,0,.7013-1.46655,1.69749,1.69749,0,0,0-.647-1.43439,3.00525,3.00525,0,0,0-.27491-.17725H3ZM16.34473,7.05981A4.18163,4.18163,0,0,0,14.6236,5.5462,5.627,5.627,0,0,0,12.11072,5,5.16083,5.16083,0,0,0,8.74719,6.06213,3.36315,3.36315,0,0,0,7.44006,8.76855a3.22923,3.22923,0,0,0,.3216,1.42786h2.59668c-.08338-.05365-.18537-.10577-.25269-.16064a1.60652,1.60652,0,0,1-.65283-1.30036,1.79843,1.79843,0,0,1,.68842-1.5108,3.12971,3.12971,0,0,1,1.96948-.55243,3.04779,3.04779,0,0,1,2.106.6687,2.35066,2.35066,0,0,1,.736,1.83258v.11341h2.00317V9.17346A3.90013,3.90013,0,0,0,16.34473,7.05981Z",
        subscript: "M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z",
        superscript: "M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z",
        symbols: "M15.77493,16.98885a8.21343,8.21343,0,0,0,1.96753-2.57651,7.34824,7.34824,0,0,0,.6034-3.07618A6.09092,6.09092,0,0,0,11.99515,5a6.13347,6.13347,0,0,0-4.585,1.79187,6.417,6.417,0,0,0-1.756,4.69207,6.93955,6.93955,0,0,0,.622,2.97415,8.06587,8.06587,0,0,0,1.949,2.53076H5.41452V19h5.54114v-.04331h-.00147V16.84107a5.82825,5.82825,0,0,1-2.2052-2.2352A6.40513,6.40513,0,0,1,7.97672,11.447,4.68548,4.68548,0,0,1,9.07785,8.19191a3.73232,3.73232,0,0,1,2.9173-1.22462,3.76839,3.76839,0,0,1,2.91241,1.21489,4.482,4.482,0,0,1,1.11572,3.154,6.71141,6.71141,0,0,1-.75384,3.24732,5.83562,5.83562,0,0,1-2.22357,2.25759v2.11562H13.0444V19h5.54108V16.98885Z",
        tags: "M8.9749 7.47489a1.5 1.5 0 1 1 -1.5 1.5A1.5 1.5 0 0 1 8.9749 7.47489Zm3.78866 -3.12713L16.5362 8.12041l0.33565 0.33564 2.77038 2.77038a2.01988 2.01988 0 0 1 0.59 1.42 1.95518 1.95518 0 0 1 -0.5854 1.40455l0.00044 0.00043 -5.59583 5.59583 -0.00043 -0.00044a1.95518 1.95518 0 0 1 -1.40455 0.5854 1.98762 1.98762 0 0 1 -1.41 -0.58L8.45605 16.87185l-0.33564 -0.33565L4.35777 12.77357a1.99576 1.99576 0 0 1 -0.59 -1.42V9.36358l0 -3.59582a2.00579 2.00579 0 0 1 2 -2l3.59582 0h1.98995A1.98762 1.98762 0 0 1 12.76356 4.34776ZM15.46186 9.866l-0.33564 -0.33564L11.36359 5.76776H5.76776v5.59583L9.866 15.46186l2.7794 2.7794 5.5878 -5.60385 -0.001 -0.001Z",
        tableHeader: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  l0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M14.5,17.5h-5V15h5V17.5z M14.5,13.5h-5v-3h5V13.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5l0,0  H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9h-4.4H16h-1.5h-5H8H7.9H3.5V7c0-0.3,0.2-0.5,0.4-0.5l0,0h4l0,0h8.2l0,0H20  c0.3,0,0.5,0.2,0.5,0.4l0,0V9z",
        tableStyle: "M20.0171,19.89752l.9,3.6-3.2-1.9-3.3,1.9.8-3.6-2.9-2.9h3.8l1.7-3.5,1.4,3.5h3.8ZM20,5H4A2.00591,2.00591,0,0,0,2,7V17a2.00591,2.00591,0,0,0,2,2h7.49115l-.58826-.58826L9.99115,17.5H9.5V14.9975h5.36511L16,12.66089V10.5h4.5v3h-.52783l.599,1.4975H22V7A2.00591,2.00591,0,0,0,20,5ZM3.5,7A.4724.4724,0,0,1,4,6.5H8V9H3.5Zm0,3.5H8v3H3.5Zm.5,7a.4724.4724,0,0,1-.5-.5V15H8v2.5Zm10.5-4h-5v-3h5Zm0-4.5h-5V6.5h5Zm6,0H16V6.5h4a.4724.4724,0,0,1,.5.5Z",
        textColor: "M15.2,13.494s-3.6,3.9-3.6,6.3a3.65,3.65,0,0,0,7.3.1v-.1C18.9,17.394,15.2,13.494,15.2,13.494Zm-1.47-1.357.669-.724L12.1,5h-2l-5,14h2l1.43-4h2.943A24.426,24.426,0,0,1,13.726,12.137ZM11.1,7.8l1.86,5.2H9.244Z",
        textMore: "M13.55,19h2l-5-14h-2l-5,14h2l1.4-4h5.1Zm-5.9-6,1.9-5.2,1.9,5.2Zm12.8,4.5a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,17.5Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,13.5Zm0-4A1.5,1.5,0,1,1,18.95,8,1.5,1.5,0,0,1,20.45,9.5Z",
        underline: "M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z",
        undo: "M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z",
        unlink: "M14.4,11l1.6,1.6V11H14.4z M17,7h-4v1.9h4c1.7,0,3.1,1.4,3.1,3.1c0,1.3-0.8,2.4-1.9,2.8l1.4,1.4C21,15.4,22,13.8,22,12  C22,9.2,19.8,7,17,7z M2,4.3l3.1,3.1C3.3,8.1,2,9.9,2,12c0,2.8,2.2,5,5,5h4v-1.9H7c-1.7,0-3.1-1.4-3.1-3.1c0-1.6,1.2-2.9,2.8-3.1  L8.7,11H8v2h2.7l2.3,2.3V17h1.7l4,4l1.4-1.4L3.4,2.9L2,4.3z",
        unorderedList: "M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z",
        verticalAlignBottom: "M16,13h-3V3h-2v10H8l4,4L16,13z M3,19v2h18v-2H3z",
        verticalAlignMiddle: "M3,11v2h18v-2H3z M8,18h3v3h2v-3h3l-4-4L8,18z M16,6h-3V3h-2v3H8l4,4L16,6z",
        verticalAlignTop: "M8,11h3v10h2V11h3l-4-4L8,11z M21,5V3H3v2H21z"
    };
    a.FILEICONS = {
        docIcon: {
            extension: ".doc",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.617188 46.875 C 13.234375 46.875 16.160156 43.929688 16.160156 40.292969 C 16.160156 36.695312 13.234375 33.75 9.617188 33.75 L 7.402344 33.75 C 6.820312 33.75 6.371094 34.199219 6.371094 34.78125 L 6.371094 45.84375 C 6.371094 46.335938 6.714844 46.757812 7.191406 46.855469 L 7.402344 46.875 Z M 9.617188 44.792969 L 8.453125 44.792969 L 8.453125 35.832031 L 9.617188 35.832031 C 12.089844 35.832031 14.078125 37.835938 14.078125 40.292969 C 14.078125 42.789062 12.089844 44.773438 9.617188 44.792969 Z M 24.816406 46.875 C 26.539062 46.875 28.191406 46.085938 29.296875 44.867188 C 30.460938 43.648438 31.191406 41.980469 31.191406 40.125 C 31.191406 38.269531 30.460938 36.617188 29.296875 35.382812 C 28.191406 34.144531 26.539062 33.375 24.816406 33.375 C 23.015625 33.375 21.367188 34.144531 20.222656 35.382812 C 19.058594 36.617188 18.367188 38.269531 18.367188 40.125 C 18.367188 41.980469 19.058594 43.648438 20.222656 44.867188 C 21.367188 46.085938 23.015625 46.875 24.816406 46.875 Z M 24.816406 44.738281 C 23.617188 44.738281 22.566406 44.230469 21.777344 43.386719 C 20.992188 42.582031 20.503906 41.398438 20.503906 40.125 C 20.503906 38.851562 20.992188 37.667969 21.777344 36.84375 C 22.566406 36 23.617188 35.511719 24.816406 35.511719 C 25.941406 35.511719 26.992188 36 27.777344 36.84375 C 28.546875 37.667969 29.054688 38.851562 29.054688 40.125 C 29.054688 41.398438 28.546875 42.582031 27.777344 43.386719 C 26.992188 44.230469 25.941406 44.738281 24.816406 44.738281 Z M 39.996094 46.875 C 41.648438 46.875 43.148438 46.332031 44.328125 45.414062 C 44.777344 45.054688 44.851562 44.382812 44.515625 43.914062 C 44.140625 43.460938 43.445312 43.386719 43.015625 43.707031 C 42.171875 44.382812 41.160156 44.738281 39.996094 44.738281 C 38.703125 44.738281 37.503906 44.210938 36.621094 43.386719 C 35.777344 42.5625 35.253906 41.398438 35.253906 40.125 C 35.253906 38.851562 35.777344 37.726562 36.621094 36.863281 C 37.503906 36.039062 38.703125 35.511719 39.996094 35.511719 C 41.160156 35.511719 42.191406 35.867188 43.015625 36.542969 C 43.445312 36.882812 44.140625 36.804688 44.515625 36.335938 C 44.851562 35.867188 44.777344 35.210938 44.328125 34.835938 C 43.148438 33.917969 41.648438 33.375 39.996094 33.375 C 36.246094 33.394531 33.132812 36.414062 33.117188 40.125 C 33.132812 43.855469 36.246094 46.875 39.996094 46.875 Z M 39.996094 46.875 "/>\n      </g>'
        },
        gifIcon: {
            extension: ".gif",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 17.394531 46.875 C 18.988281 46.875 20.46875 46.332031 21.648438 45.414062 C 21.835938 45.28125 21.949219 45.132812 22.003906 44.960938 L 22.003906 44.945312 C 22.023438 44.90625 22.023438 44.886719 22.042969 44.851562 C 22.0625 44.738281 22.097656 44.664062 22.097656 44.53125 L 22.097656 40.386719 C 22.097656 39.789062 21.613281 39.335938 21.011719 39.335938 L 17.28125 39.335938 C 16.699219 39.335938 16.210938 39.789062 16.210938 40.386719 C 16.210938 40.96875 16.699219 41.457031 17.28125 41.457031 L 19.960938 41.457031 L 19.960938 44.023438 C 19.210938 44.457031 18.332031 44.738281 17.394531 44.738281 C 16.042969 44.738281 14.863281 44.230469 14.019531 43.367188 C 13.136719 42.523438 12.613281 41.382812 12.613281 40.144531 C 12.613281 38.867188 13.136719 37.726562 14.019531 36.882812 C 14.863281 36.019531 16.042969 35.511719 17.394531 35.511719 C 18.519531 35.511719 19.550781 35.90625 20.355469 36.523438 C 20.824219 36.898438 21.519531 36.804688 21.875 36.355469 C 22.230469 35.886719 22.15625 35.195312 21.667969 34.835938 C 20.503906 33.917969 18.988281 33.375 17.394531 33.375 C 13.585938 33.375 10.472656 36.375 10.472656 40.144531 C 10.472656 43.894531 13.585938 46.875 17.394531 46.875 Z M 26.945312 46.875 C 27.507812 46.875 27.996094 46.425781 27.996094 45.84375 L 27.996094 34.78125 C 27.996094 34.199219 27.507812 33.75 26.945312 33.75 C 26.363281 33.75 25.914062 34.199219 25.914062 34.78125 L 25.914062 45.84375 C 25.914062 46.425781 26.363281 46.875 26.945312 46.875 Z M 33.066406 46.875 C 33.648438 46.875 34.117188 46.40625 34.117188 45.84375 L 34.117188 41.34375 L 38.488281 41.34375 C 39.050781 41.34375 39.519531 40.875 39.519531 40.292969 C 39.519531 39.75 39.050781 39.261719 38.488281 39.261719 L 34.117188 39.261719 L 34.117188 35.832031 L 39.199219 35.832031 C 39.742188 35.832031 40.230469 35.363281 40.230469 34.78125 C 40.230469 34.21875 39.742188 33.75 39.199219 33.75 L 33.066406 33.75 C 32.488281 33.75 32.035156 34.21875 32.035156 34.78125 L 32.035156 45.84375 C 32.035156 46.40625 32.488281 46.875 33.066406 46.875 Z M 33.066406 46.875 "/>\n      </g>'
        },
        jpegIcon: {
            extension: ".jpeg",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9 43.75 C 11.140625 43.75 12.890625 42.015625 12.890625 39.875 L 12.890625 33.671875 C 12.890625 33.1875 12.5 32.8125 12.03125 32.8125 C 11.546875 32.8125 11.15625 33.1875 11.15625 33.671875 L 11.15625 39.875 C 11.15625 41.046875 10.1875 42.015625 9 42.015625 C 8.046875 42.015625 7.234375 41.390625 6.953125 40.53125 C 6.8125 40.078125 6.328125 39.828125 5.859375 39.984375 C 5.421875 40.109375 5.15625 40.59375 5.3125 41.0625 C 5.8125 42.625 7.28125 43.75 9 43.75 Z M 15.640625 43.75 C 16.125 43.75 16.515625 43.359375 16.515625 42.890625 L 16.515625 39.5 L 18.4375 39.5 C 20.296875 39.5 21.796875 38 21.796875 36.171875 C 21.796875 34.3125 20.296875 32.8125 18.4375 32.8125 L 15.640625 32.8125 C 15.171875 32.8125 14.78125 33.1875 14.78125 33.671875 L 14.78125 42.890625 C 14.78125 43.359375 15.171875 43.75 15.640625 43.75 Z M 18.4375 37.765625 L 16.515625 37.765625 L 16.515625 34.546875 L 18.4375 34.546875 C 19.34375 34.546875 20.046875 35.265625 20.0625 36.171875 C 20.046875 37.046875 19.34375 37.765625 18.4375 37.765625 Z M 29.234375 43.75 C 29.6875 43.75 30.09375 43.359375 30.09375 42.890625 C 30.09375 42.40625 29.6875 42.015625 29.234375 42.015625 L 25 42.015625 L 25 39.140625 L 28.640625 39.140625 C 29.109375 39.140625 29.5 38.75 29.5 38.265625 C 29.5 37.8125 29.109375 37.40625 28.640625 37.40625 L 25 37.40625 L 25 34.546875 L 29.234375 34.546875 C 29.6875 34.546875 30.09375 34.15625 30.09375 33.671875 C 30.09375 33.1875 29.6875 32.8125 29.234375 32.8125 L 24.125 32.8125 C 23.640625 32.8125 23.265625 33.1875 23.265625 33.671875 L 23.265625 42.890625 C 23.265625 43.359375 23.640625 43.75 24.125 43.75 C 24.125 43.75 24.140625 43.734375 24.140625 43.734375 C 24.140625 43.734375 24.140625 43.75 24.171875 43.75 Z M 37.1875 43.75 C 38.515625 43.75 39.75 43.296875 40.734375 42.53125 C 40.890625 42.421875 40.984375 42.296875 41.03125 42.15625 L 41.03125 42.140625 C 41.046875 42.109375 41.046875 42.09375 41.0625 42.0625 C 41.078125 41.96875 41.109375 41.90625 41.109375 41.796875 L 41.109375 38.34375 C 41.109375 37.914062 40.8125 37.578125 40.410156 37.492188 L 40.203125 37.46875 L 37.09375 37.46875 C 36.609375 37.46875 36.203125 37.84375 36.203125 38.34375 C 36.203125 38.828125 36.609375 39.234375 37.09375 39.234375 L 39.328125 39.234375 L 39.328125 41.375 C 38.703125 41.734375 37.96875 41.96875 37.1875 41.96875 C 36.0625 41.96875 35.078125 41.546875 34.375 40.828125 C 33.640625 40.125 33.203125 39.171875 33.203125 38.140625 C 33.203125 37.078125 33.640625 36.125 34.375 35.421875 C 35.078125 34.703125 36.0625 34.28125 37.1875 34.28125 C 38.125 34.28125 38.984375 34.609375 39.65625 35.125 C 40.046875 35.4375 40.625 35.359375 40.921875 34.984375 C 41.21875 34.59375 41.15625 34.015625 40.75 33.71875 C 39.78125 32.953125 38.515625 32.5 37.1875 32.5 C 34.015625 32.5 31.421875 35 31.421875 38.140625 C 31.421875 41.265625 34.015625 43.75 37.1875 43.75 Z M 37.1875 43.75 "/>\n      </g>'
        },
        logIcon: {
            extension: ".log",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.542969 46.875 C 14.085938 46.875 14.574219 46.40625 14.574219 45.84375 C 14.574219 45.261719 14.085938 44.792969 13.542969 44.792969 L 8.460938 44.792969 L 8.460938 34.78125 C 8.460938 34.21875 7.992188 33.75 7.410156 33.75 C 6.828125 33.75 6.378906 34.21875 6.378906 34.78125 L 6.378906 45.84375 C 6.378906 46.40625 6.828125 46.875 7.410156 46.875 Z M 21.742188 46.875 C 23.46875 46.875 25.117188 46.085938 26.222656 44.867188 C 27.386719 43.648438 28.117188 41.980469 28.117188 40.125 C 28.117188 38.269531 27.386719 36.617188 26.222656 35.382812 C 25.117188 34.144531 23.46875 33.375 21.742188 33.375 C 19.941406 33.375 18.292969 34.144531 17.148438 35.382812 C 15.984375 36.617188 15.292969 38.269531 15.292969 40.125 C 15.292969 41.980469 15.984375 43.648438 17.148438 44.867188 C 18.292969 46.085938 19.941406 46.875 21.742188 46.875 Z M 21.742188 44.738281 C 20.542969 44.738281 19.492188 44.230469 18.703125 43.386719 C 17.917969 42.582031 17.429688 41.398438 17.429688 40.125 C 17.429688 38.851562 17.917969 37.667969 18.703125 36.84375 C 19.492188 36 20.542969 35.511719 21.742188 35.511719 C 22.867188 35.511719 23.917969 36 24.703125 36.84375 C 25.472656 37.667969 25.980469 38.851562 25.980469 40.125 C 25.980469 41.398438 25.472656 42.582031 24.703125 43.386719 C 23.917969 44.230469 22.867188 44.738281 21.742188 44.738281 Z M 37.300781 46.875 C 38.894531 46.875 40.375 46.332031 41.558594 45.414062 C 41.746094 45.28125 41.855469 45.132812 41.914062 44.960938 L 41.914062 44.945312 L 41.949219 44.851562 C 41.96875 44.738281 42.007812 44.664062 42.007812 44.53125 L 42.007812 40.386719 C 42.007812 39.789062 41.519531 39.335938 40.917969 39.335938 L 37.1875 39.335938 C 36.605469 39.335938 36.121094 39.789062 36.121094 40.386719 C 36.121094 40.96875 36.605469 41.457031 37.1875 41.457031 L 39.871094 41.457031 L 39.871094 44.023438 C 39.121094 44.457031 38.238281 44.738281 37.300781 44.738281 C 35.949219 44.738281 34.769531 44.230469 33.925781 43.367188 C 33.042969 42.523438 32.519531 41.382812 32.519531 40.144531 C 32.519531 38.867188 33.042969 37.726562 33.925781 36.882812 C 34.769531 36.019531 35.949219 35.511719 37.300781 35.511719 C 38.425781 35.511719 39.457031 35.90625 40.261719 36.523438 C 40.730469 36.898438 41.425781 36.804688 41.78125 36.355469 C 42.136719 35.886719 42.0625 35.195312 41.574219 34.835938 C 40.414062 33.917969 38.894531 33.375 37.300781 33.375 C 33.496094 33.375 30.382812 36.375 30.382812 40.144531 C 30.382812 43.894531 33.496094 46.875 37.300781 46.875 Z M 37.300781 46.875 "/>\n      </g>'
        },
        movIcon: {
            extension: ".mov",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 15.472656 46.875 C 16.035156 46.875 16.523438 46.40625 16.523438 45.84375 L 16.523438 34.78125 C 16.523438 34.289062 16.152344 33.882812 15.679688 33.777344 L 15.472656 33.75 L 15.453125 33.75 C 15.117188 33.75 14.816406 33.898438 14.609375 34.179688 L 10.878906 39.355469 L 7.148438 34.179688 C 6.960938 33.898438 6.625 33.75 6.324219 33.75 L 6.265625 33.75 C 5.703125 33.75 5.234375 34.21875 5.234375 34.78125 L 5.234375 45.84375 C 5.234375 46.40625 5.703125 46.875 6.265625 46.875 C 6.847656 46.875 7.316406 46.40625 7.316406 45.84375 L 7.316406 37.949219 L 10 41.699219 C 10.203125 41.980469 10.523438 42.132812 10.859375 42.132812 L 10.898438 42.132812 C 11.234375 42.132812 11.535156 41.980469 11.742188 41.699219 L 14.441406 37.949219 L 14.441406 45.84375 C 14.441406 46.40625 14.890625 46.875 15.472656 46.875 Z M 25.460938 46.875 C 27.1875 46.875 28.835938 46.085938 29.941406 44.867188 C 31.105469 43.648438 31.835938 41.980469 31.835938 40.125 C 31.835938 38.269531 31.105469 36.617188 29.941406 35.382812 C 28.835938 34.144531 27.1875 33.375 25.460938 33.375 C 23.660156 33.375 22.011719 34.144531 20.867188 35.382812 C 19.703125 36.617188 19.011719 38.269531 19.011719 40.125 C 19.011719 41.980469 19.703125 43.648438 20.867188 44.867188 C 22.011719 46.085938 23.660156 46.875 25.460938 46.875 Z M 25.460938 44.738281 C 24.261719 44.738281 23.210938 44.230469 22.421875 43.386719 C 21.636719 42.582031 21.148438 41.398438 21.148438 40.125 C 21.148438 38.851562 21.636719 37.667969 22.421875 36.84375 C 23.210938 36 24.261719 35.511719 25.460938 35.511719 C 26.585938 35.511719 27.636719 36 28.421875 36.84375 C 29.191406 37.667969 29.699219 38.851562 29.699219 40.125 C 29.699219 41.398438 29.191406 42.582031 28.421875 43.386719 C 27.636719 44.230469 26.585938 44.738281 25.460938 44.738281 Z M 38.683594 46.855469 L 38.71875 46.855469 C 38.777344 46.835938 38.8125 46.820312 38.871094 46.820312 C 38.886719 46.800781 38.886719 46.800781 38.90625 46.800781 C 38.964844 46.78125 39.019531 46.726562 39.058594 46.707031 L 39.09375 46.6875 L 39.207031 46.59375 C 39.226562 46.574219 39.226562 46.574219 39.246094 46.539062 L 39.339844 46.425781 C 39.355469 46.425781 39.355469 46.425781 39.355469 46.40625 C 39.394531 46.367188 39.414062 46.292969 39.433594 46.257812 L 44.0625 35.304688 C 44.269531 34.800781 44.027344 34.179688 43.5 33.976562 C 42.996094 33.75 42.375 33.992188 42.152344 34.519531 L 38.496094 43.199219 L 34.839844 34.519531 C 34.613281 33.992188 34.011719 33.75 33.507812 33.976562 C 32.964844 34.179688 32.71875 34.800781 32.945312 35.304688 L 37.539062 46.257812 C 37.574219 46.292969 37.613281 46.367188 37.632812 46.40625 C 37.632812 46.425781 37.652344 46.425781 37.652344 46.425781 C 37.667969 46.460938 37.707031 46.5 37.746094 46.539062 C 37.746094 46.574219 37.761719 46.574219 37.761719 46.59375 C 37.820312 46.632812 37.855469 46.648438 37.894531 46.6875 L 37.914062 46.6875 C 37.96875 46.726562 38.042969 46.78125 38.082031 46.800781 L 38.101562 46.800781 C 38.101562 46.800781 38.121094 46.800781 38.121094 46.820312 C 38.15625 46.820312 38.230469 46.835938 38.269531 46.855469 L 38.308594 46.855469 L 38.402344 46.871094 L 38.496094 46.875 C 38.550781 46.875 38.605469 46.875 38.683594 46.855469 Z M 38.683594 46.855469 "/>\n      </g>'
        },
        ogvIcon: {
            extension: ".ogv",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.511719 46.875 C 13.238281 46.875 14.886719 46.085938 15.996094 44.867188 C 17.15625 43.648438 17.886719 41.980469 17.886719 40.125 C 17.886719 38.269531 17.15625 36.617188 15.996094 35.382812 C 14.886719 34.144531 13.238281 33.375 11.511719 33.375 C 9.714844 33.375 8.0625 34.144531 6.917969 35.382812 C 5.757812 36.617188 5.0625 38.269531 5.0625 40.125 C 5.0625 41.980469 5.757812 43.648438 6.917969 44.867188 C 8.0625 46.085938 9.714844 46.875 11.511719 46.875 Z M 11.511719 44.738281 C 10.3125 44.738281 9.261719 44.230469 8.476562 43.386719 C 7.6875 42.582031 7.199219 41.398438 7.199219 40.125 C 7.199219 38.851562 7.6875 37.667969 8.476562 36.84375 C 9.261719 36 10.3125 35.511719 11.511719 35.511719 C 12.636719 35.511719 13.6875 36 14.476562 36.84375 C 15.246094 37.667969 15.75 38.851562 15.75 40.125 C 15.75 41.398438 15.246094 42.582031 14.476562 43.386719 C 13.6875 44.230469 12.636719 44.738281 11.511719 44.738281 Z M 27.25 46.875 C 28.84375 46.875 30.324219 46.332031 31.507812 45.414062 C 31.695312 45.28125 31.804688 45.132812 31.863281 44.960938 L 31.863281 44.945312 C 31.882812 44.90625 31.882812 44.886719 31.898438 44.851562 C 31.917969 44.738281 31.957031 44.664062 31.957031 44.53125 L 31.957031 40.386719 C 31.957031 39.789062 31.46875 39.335938 30.867188 39.335938 L 27.136719 39.335938 C 26.554688 39.335938 26.070312 39.789062 26.070312 40.386719 C 26.070312 40.96875 26.554688 41.457031 27.136719 41.457031 L 29.820312 41.457031 L 29.820312 44.023438 C 29.070312 44.457031 28.1875 44.738281 27.25 44.738281 C 25.898438 44.738281 24.71875 44.230469 23.875 43.367188 C 22.992188 42.523438 22.46875 41.382812 22.46875 40.144531 C 22.46875 38.867188 22.992188 37.726562 23.875 36.882812 C 24.71875 36.019531 25.898438 35.511719 27.25 35.511719 C 28.375 35.511719 29.40625 35.90625 30.210938 36.523438 C 30.679688 36.898438 31.375 36.804688 31.730469 36.355469 C 32.085938 35.886719 32.011719 35.195312 31.523438 34.835938 C 30.363281 33.917969 28.84375 33.375 27.25 33.375 C 23.445312 33.375 20.332031 36.375 20.332031 40.144531 C 20.332031 43.894531 23.445312 46.875 27.25 46.875 Z M 40.191406 46.855469 L 40.230469 46.855469 C 40.285156 46.835938 40.324219 46.820312 40.378906 46.820312 C 40.398438 46.800781 40.398438 46.800781 40.417969 46.800781 C 40.472656 46.78125 40.53125 46.726562 40.566406 46.707031 C 40.605469 46.6875 40.605469 46.6875 40.605469 46.6875 L 40.71875 46.59375 C 40.738281 46.574219 40.738281 46.574219 40.753906 46.539062 L 40.847656 46.425781 C 40.867188 46.425781 40.867188 46.425781 40.867188 46.40625 C 40.90625 46.367188 40.925781 46.292969 40.941406 46.257812 L 45.574219 35.304688 C 45.78125 34.800781 45.535156 34.179688 45.011719 33.976562 C 44.503906 33.75 43.886719 33.992188 43.660156 34.519531 L 40.003906 43.199219 L 36.347656 34.519531 C 36.125 33.992188 35.523438 33.75 35.019531 33.976562 C 34.472656 34.179688 34.230469 34.800781 34.457031 35.304688 L 39.050781 46.257812 C 39.085938 46.292969 39.125 46.367188 39.144531 46.40625 C 39.144531 46.425781 39.160156 46.425781 39.160156 46.425781 C 39.179688 46.460938 39.21875 46.5 39.253906 46.539062 C 39.253906 46.574219 39.273438 46.574219 39.273438 46.59375 C 39.332031 46.632812 39.367188 46.648438 39.40625 46.6875 L 39.425781 46.6875 C 39.480469 46.726562 39.554688 46.78125 39.59375 46.800781 L 39.613281 46.800781 C 39.613281 46.800781 39.628906 46.800781 39.628906 46.820312 C 39.667969 46.820312 39.742188 46.835938 39.78125 46.855469 L 39.816406 46.855469 L 39.910156 46.871094 L 40.003906 46.875 C 40.0625 46.875 40.117188 46.875 40.191406 46.855469 Z M 40.191406 46.855469 "/>\n      </g>'
        },
        pngIcon: {
            extension: ".png",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.523438 46.875 C 8.105469 46.875 8.574219 46.40625 8.574219 45.84375 L 8.574219 41.773438 L 10.878906 41.773438 C 13.109375 41.773438 14.910156 39.976562 14.910156 37.78125 C 14.910156 35.550781 13.109375 33.75 10.878906 33.75 L 7.523438 33.75 C 6.960938 33.75 6.492188 34.199219 6.492188 34.78125 L 6.492188 45.84375 C 6.492188 46.40625 6.960938 46.875 7.523438 46.875 Z M 10.878906 39.695312 L 8.574219 39.695312 L 8.574219 35.832031 L 10.878906 35.832031 C 11.964844 35.832031 12.808594 36.695312 12.828125 37.78125 C 12.808594 38.832031 11.964844 39.695312 10.878906 39.695312 Z M 26.75 46.875 C 27.3125 46.875 27.78125 46.40625 27.78125 45.84375 L 27.78125 34.949219 C 27.78125 34.40625 27.3125 33.9375 26.75 33.9375 C 26.1875 33.9375 25.738281 34.40625 25.738281 34.949219 L 25.738281 42.675781 L 19.679688 34.292969 C 19.363281 33.84375 18.722656 33.75 18.253906 34.070312 C 17.972656 34.273438 17.824219 34.613281 17.84375 34.929688 L 17.84375 45.84375 C 17.84375 46.40625 18.292969 46.875 18.875 46.875 C 19.417969 46.875 19.886719 46.40625 19.886719 45.84375 L 19.886719 38.0625 L 25.886719 46.386719 C 25.90625 46.425781 25.941406 46.460938 25.980469 46.5 C 26.167969 46.726562 26.449219 46.875 26.75 46.875 Z M 38.082031 46.875 C 39.675781 46.875 41.15625 46.332031 42.339844 45.414062 C 42.527344 45.28125 42.636719 45.132812 42.695312 44.960938 L 42.695312 44.945312 C 42.714844 44.90625 42.714844 44.886719 42.730469 44.851562 C 42.75 44.738281 42.789062 44.664062 42.789062 44.53125 L 42.789062 40.386719 C 42.789062 39.789062 42.300781 39.335938 41.699219 39.335938 L 37.96875 39.335938 C 37.386719 39.335938 36.902344 39.789062 36.902344 40.386719 C 36.902344 40.96875 37.386719 41.457031 37.96875 41.457031 L 40.652344 41.457031 L 40.652344 44.023438 C 39.902344 44.457031 39.019531 44.738281 38.082031 44.738281 C 36.730469 44.738281 35.550781 44.230469 34.707031 43.367188 C 33.824219 42.523438 33.300781 41.382812 33.300781 40.144531 C 33.300781 38.867188 33.824219 37.726562 34.707031 36.882812 C 35.550781 36.019531 36.730469 35.511719 38.082031 35.511719 C 39.207031 35.511719 40.238281 35.90625 41.042969 36.523438 C 41.511719 36.898438 42.207031 36.804688 42.5625 36.355469 C 42.917969 35.886719 42.84375 35.195312 42.355469 34.835938 C 41.195312 33.917969 39.675781 33.375 38.082031 33.375 C 34.277344 33.375 31.164062 36.375 31.164062 40.144531 C 31.164062 43.894531 34.277344 46.875 38.082031 46.875 Z M 38.082031 46.875 "/>\n      </g>'
        },
        txtIcon: {
            extension: ".txt",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.847656 46.875 C 13.429688 46.875 13.878906 46.425781 13.878906 45.84375 L 13.878906 35.832031 L 16.859375 35.832031 C 17.421875 35.832031 17.890625 35.34375 17.890625 34.78125 C 17.890625 34.199219 17.421875 33.75 16.859375 33.75 L 8.855469 33.75 C 8.273438 33.75 7.824219 34.199219 7.824219 34.78125 C 7.824219 35.34375 8.273438 35.832031 8.855469 35.832031 L 11.816406 35.832031 L 11.816406 45.84375 C 11.816406 46.425781 12.285156 46.875 12.847656 46.875 Z M 29.019531 46.875 C 29.222656 46.875 29.429688 46.800781 29.617188 46.667969 C 30.085938 46.351562 30.160156 45.695312 29.84375 45.242188 L 26.28125 40.367188 L 29.84375 35.53125 C 30.160156 35.0625 30.085938 34.425781 29.617188 34.105469 C 29.148438 33.75 28.53125 33.84375 28.175781 34.332031 L 25.023438 38.644531 L 21.855469 34.332031 C 21.535156 33.84375 20.878906 33.75 20.429688 34.105469 C 19.960938 34.425781 19.867188 35.0625 20.1875 35.53125 L 23.75 40.367188 L 20.1875 45.242188 C 19.867188 45.695312 19.960938 46.351562 20.429688 46.667969 C 20.597656 46.800781 20.804688 46.875 21.03125 46.875 C 21.347656 46.875 21.648438 46.707031 21.855469 46.445312 L 25.023438 42.113281 L 28.175781 46.445312 C 28.378906 46.707031 28.679688 46.875 29.019531 46.875 Z M 37.464844 46.875 C 38.042969 46.875 38.496094 46.425781 38.496094 45.84375 L 38.496094 35.832031 L 41.476562 35.832031 C 42.039062 35.832031 42.507812 35.34375 42.507812 34.78125 C 42.507812 34.199219 42.039062 33.75 41.476562 33.75 L 33.46875 33.75 C 32.886719 33.75 32.4375 34.199219 32.4375 34.78125 C 32.4375 35.34375 32.886719 35.832031 33.46875 35.832031 L 36.433594 35.832031 L 36.433594 45.84375 C 36.433594 46.425781 36.902344 46.875 37.464844 46.875 Z M 37.464844 46.875 "/>\n      </g>'
        },
        webmIcon: {
            extension: ".webm",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.195312 43.734375 L 7.242188 43.734375 C 7.273438 43.71875 7.304688 43.703125 7.367188 43.703125 C 7.367188 43.6875 7.382812 43.6875 7.382812 43.6875 L 7.398438 43.6875 C 7.429688 43.671875 7.476562 43.625 7.523438 43.59375 L 7.554688 43.59375 C 7.585938 43.5625 7.617188 43.53125 7.648438 43.515625 C 7.648438 43.5 7.664062 43.5 7.664062 43.46875 L 7.757812 43.375 C 7.757812 43.375 7.757812 43.359375 7.773438 43.359375 C 7.789062 43.328125 7.820312 43.265625 7.835938 43.21875 L 9.882812 38.375 L 11.929688 43.21875 C 11.945312 43.265625 11.960938 43.328125 11.992188 43.359375 C 11.992188 43.359375 11.992188 43.375 12.023438 43.375 L 12.085938 43.46875 C 12.101562 43.5 12.101562 43.5 12.117188 43.515625 C 12.148438 43.53125 12.179688 43.5625 12.226562 43.59375 L 12.242188 43.59375 C 12.273438 43.625 12.320312 43.671875 12.382812 43.6875 C 12.398438 43.6875 12.398438 43.6875 12.414062 43.703125 C 12.445312 43.703125 12.476562 43.71875 12.523438 43.734375 L 12.570312 43.734375 L 12.640625 43.746094 L 12.710938 43.75 C 12.773438 43.75 12.820312 43.75 12.867188 43.734375 L 12.898438 43.734375 C 12.945312 43.71875 12.992188 43.703125 13.023438 43.703125 C 13.023438 43.6875 13.039062 43.6875 13.039062 43.6875 L 13.054688 43.6875 C 13.117188 43.671875 13.148438 43.625 13.195312 43.59375 L 13.210938 43.59375 C 13.242188 43.5625 13.289062 43.53125 13.320312 43.515625 C 13.320312 43.5 13.335938 43.5 13.335938 43.46875 C 13.367188 43.4375 13.398438 43.40625 13.414062 43.375 C 13.414062 43.375 13.429688 43.359375 13.429688 43.359375 C 13.460938 43.328125 13.492188 43.265625 13.507812 43.21875 L 17.335938 34.109375 C 17.523438 33.6875 17.320312 33.171875 16.898438 33 C 16.445312 32.8125 15.945312 33.015625 15.757812 33.453125 L 12.710938 40.6875 L 10.695312 35.890625 C 10.539062 35.546875 10.210938 35.359375 9.882812 35.359375 C 9.539062 35.359375 9.210938 35.546875 9.070312 35.890625 L 7.054688 40.6875 L 3.992188 33.453125 C 3.820312 33.015625 3.304688 32.8125 2.882812 33 C 2.429688 33.171875 2.242188 33.6875 2.414062 34.109375 L 6.257812 43.21875 C 6.289062 43.265625 6.304688 43.328125 6.335938 43.359375 L 6.335938 43.375 C 6.367188 43.40625 6.382812 43.4375 6.414062 43.46875 C 6.429688 43.5 6.429688 43.5 6.445312 43.515625 C 6.492188 43.53125 6.507812 43.5625 6.554688 43.59375 L 6.570312 43.59375 C 6.601562 43.625 6.664062 43.671875 6.710938 43.6875 C 6.726562 43.6875 6.726562 43.6875 6.742188 43.703125 C 6.773438 43.703125 6.804688 43.71875 6.851562 43.734375 L 6.898438 43.734375 L 6.976562 43.746094 L 7.054688 43.75 C 7.101562 43.75 7.148438 43.75 7.195312 43.734375 Z M 25.179688 43.75 C 25.632812 43.75 26.039062 43.359375 26.039062 42.890625 C 26.039062 42.40625 25.632812 42.015625 25.179688 42.015625 L 20.945312 42.015625 L 20.945312 39.140625 L 24.585938 39.140625 C 25.054688 39.140625 25.445312 38.75 25.445312 38.265625 C 25.445312 37.8125 25.054688 37.40625 24.585938 37.40625 L 20.945312 37.40625 L 20.945312 34.546875 L 25.179688 34.546875 C 25.632812 34.546875 26.039062 34.15625 26.039062 33.671875 C 26.039062 33.1875 25.632812 32.8125 25.179688 32.8125 L 20.070312 32.8125 C 19.585938 32.8125 19.210938 33.1875 19.210938 33.671875 L 19.210938 42.890625 C 19.210938 43.359375 19.585938 43.75 20.070312 43.75 C 20.070312 43.75 20.085938 43.734375 20.085938 43.734375 C 20.085938 43.734375 20.085938 43.75 20.117188 43.75 Z M 31.539062 43.75 C 33.382812 43.75 34.882812 42.25 34.882812 40.390625 C 34.882812 39.203125 34.242188 38.15625 33.304688 37.5625 C 33.679688 37.0625 33.898438 36.453125 33.898438 35.78125 C 33.898438 34.140625 32.570312 32.8125 30.929688 32.8125 L 28.710938 32.8125 C 28.242188 32.8125 27.851562 33.1875 27.851562 33.671875 L 27.851562 42.890625 C 27.851562 43.359375 28.242188 43.75 28.710938 43.75 L 28.757812 43.734375 C 28.757812 43.734375 28.757812 43.75 28.773438 43.75 Z M 30.929688 37.046875 L 29.585938 37.046875 L 29.585938 34.546875 L 30.929688 34.546875 C 31.617188 34.546875 32.164062 35.09375 32.164062 35.78125 C 32.164062 36.46875 31.617188 37.046875 30.929688 37.046875 Z M 31.539062 42.015625 L 29.585938 42.015625 L 29.585938 38.78125 L 31.539062 38.78125 C 32.429688 38.796875 33.148438 39.5 33.148438 40.390625 C 33.148438 41.296875 32.429688 42 31.539062 42.015625 Z M 45.664062 43.75 C 46.132812 43.75 46.539062 43.359375 46.539062 42.890625 L 46.539062 33.671875 C 46.539062 33.269531 46.242188 32.9375 45.859375 32.839844 L 45.664062 32.8125 L 45.648438 32.8125 C 45.367188 32.8125 45.117188 32.9375 44.945312 33.171875 L 41.835938 37.484375 L 38.726562 33.171875 C 38.570312 32.9375 38.289062 32.8125 38.039062 32.8125 L 37.992188 32.8125 C 37.523438 32.8125 37.132812 33.203125 37.132812 33.671875 L 37.132812 42.890625 C 37.132812 43.359375 37.523438 43.75 37.992188 43.75 C 38.476562 43.75 38.867188 43.359375 38.867188 42.890625 L 38.867188 36.3125 L 41.101562 39.4375 C 41.273438 39.671875 41.539062 39.796875 41.820312 39.796875 L 41.851562 39.796875 C 42.132812 39.796875 42.382812 39.671875 42.554688 39.4375 L 44.804688 36.3125 L 44.804688 42.890625 C 44.804688 43.359375 45.179688 43.75 45.664062 43.75 Z M 45.664062 43.75 "/>\n      </g>'
        },
        webpIcon: {
            extension: ".webp",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.234375 43.734375 L 9.28125 43.734375 C 9.3125 43.71875 9.34375 43.703125 9.40625 43.703125 L 9.414062 43.6875 C 9.421875 43.6875 9.421875 43.6875 9.4375 43.6875 C 9.46875 43.671875 9.515625 43.625 9.5625 43.59375 L 9.59375 43.59375 C 9.625 43.5625 9.65625 43.53125 9.6875 43.515625 C 9.6875 43.5 9.703125 43.5 9.703125 43.46875 L 9.796875 43.375 C 9.796875 43.375 9.796875 43.359375 9.8125 43.359375 C 9.828125 43.328125 9.859375 43.265625 9.875 43.21875 L 11.921875 38.375 L 13.96875 43.21875 C 13.984375 43.265625 14 43.328125 14.03125 43.359375 C 14.03125 43.359375 14.03125 43.375 14.0625 43.375 L 14.125 43.46875 C 14.140625 43.5 14.140625 43.5 14.15625 43.515625 L 14.203125 43.546875 L 14.265625 43.59375 C 14.265625 43.59375 14.265625 43.59375 14.28125 43.59375 C 14.3125 43.625 14.359375 43.671875 14.421875 43.6875 C 14.4375 43.6875 14.4375 43.6875 14.453125 43.703125 C 14.484375 43.703125 14.515625 43.71875 14.5625 43.734375 L 14.609375 43.734375 L 14.679688 43.746094 L 14.75 43.75 C 14.8125 43.75 14.859375 43.75 14.90625 43.734375 L 14.9375 43.734375 C 14.984375 43.71875 15.03125 43.703125 15.0625 43.703125 C 15.0625 43.6875 15.078125 43.6875 15.078125 43.6875 L 15.09375 43.6875 C 15.15625 43.671875 15.1875 43.625 15.234375 43.59375 L 15.25 43.59375 C 15.28125 43.5625 15.328125 43.53125 15.359375 43.515625 C 15.359375 43.5 15.375 43.5 15.375 43.46875 C 15.40625 43.4375 15.4375 43.40625 15.453125 43.375 L 15.46875 43.359375 C 15.5 43.328125 15.53125 43.265625 15.546875 43.21875 L 19.375 34.109375 C 19.5625 33.6875 19.359375 33.171875 18.9375 33 C 18.484375 32.8125 17.984375 33.015625 17.796875 33.453125 L 14.75 40.6875 L 12.734375 35.890625 C 12.578125 35.546875 12.25 35.359375 11.921875 35.359375 C 11.578125 35.359375 11.25 35.546875 11.109375 35.890625 L 9.09375 40.6875 L 6.03125 33.453125 C 5.859375 33.015625 5.34375 32.8125 4.921875 33 C 4.46875 33.171875 4.28125 33.6875 4.453125 34.109375 L 8.296875 43.21875 C 8.328125 43.265625 8.34375 43.328125 8.375 43.359375 L 8.375 43.375 C 8.40625 43.40625 8.421875 43.4375 8.453125 43.46875 C 8.46875 43.5 8.46875 43.5 8.484375 43.515625 L 8.539062 43.546875 L 8.59375 43.59375 C 8.59375 43.59375 8.59375 43.59375 8.609375 43.59375 C 8.640625 43.625 8.703125 43.671875 8.75 43.6875 C 8.765625 43.6875 8.765625 43.6875 8.78125 43.703125 C 8.8125 43.703125 8.84375 43.71875 8.890625 43.734375 L 8.9375 43.734375 L 9.015625 43.746094 L 9.09375 43.75 C 9.140625 43.75 9.1875 43.75 9.234375 43.734375 Z M 27.21875 43.75 C 27.671875 43.75 28.078125 43.359375 28.078125 42.890625 C 28.078125 42.40625 27.671875 42.015625 27.21875 42.015625 L 22.984375 42.015625 L 22.984375 39.140625 L 26.625 39.140625 C 27.09375 39.140625 27.484375 38.75 27.484375 38.265625 C 27.484375 37.8125 27.09375 37.40625 26.625 37.40625 L 22.984375 37.40625 L 22.984375 34.546875 L 27.21875 34.546875 C 27.671875 34.546875 28.078125 34.15625 28.078125 33.671875 C 28.078125 33.1875 27.671875 32.8125 27.21875 32.8125 L 22.109375 32.8125 C 21.625 32.8125 21.25 33.1875 21.25 33.671875 L 21.25 42.890625 C 21.25 43.359375 21.625 43.75 22.109375 43.75 L 22.125 43.734375 C 22.125 43.734375 22.125 43.75 22.15625 43.75 Z M 33.578125 43.75 C 35.421875 43.75 36.921875 42.25 36.921875 40.390625 C 36.921875 39.203125 36.28125 38.15625 35.34375 37.5625 C 35.71875 37.0625 35.9375 36.453125 35.9375 35.78125 C 35.9375 34.140625 34.609375 32.8125 32.96875 32.8125 L 30.75 32.8125 C 30.28125 32.8125 29.890625 33.1875 29.890625 33.671875 L 29.890625 42.890625 C 29.890625 43.359375 30.28125 43.75 30.75 43.75 C 30.765625 43.75 30.765625 43.734375 30.796875 43.734375 C 30.796875 43.734375 30.796875 43.75 30.8125 43.75 Z M 32.96875 37.046875 L 31.625 37.046875 L 31.625 34.546875 L 32.96875 34.546875 C 33.65625 34.546875 34.203125 35.09375 34.203125 35.78125 C 34.203125 36.46875 33.65625 37.046875 32.96875 37.046875 Z M 33.578125 42.015625 L 31.625 42.015625 L 31.625 38.78125 L 33.578125 38.78125 C 34.46875 38.796875 35.1875 39.5 35.1875 40.390625 C 35.1875 41.296875 34.46875 42 33.578125 42.015625 Z M 40.03125 43.75 C 40.515625 43.75 40.90625 43.359375 40.90625 42.890625 L 40.90625 39.5 L 42.828125 39.5 C 44.6875 39.5 46.1875 38 46.1875 36.171875 C 46.1875 34.3125 44.6875 32.8125 42.828125 32.8125 L 40.03125 32.8125 C 39.5625 32.8125 39.171875 33.1875 39.171875 33.671875 L 39.171875 42.890625 C 39.171875 43.359375 39.5625 43.75 40.03125 43.75 Z M 42.828125 37.765625 L 40.90625 37.765625 L 40.90625 34.546875 L 42.828125 34.546875 C 43.734375 34.546875 44.4375 35.265625 44.453125 36.171875 C 44.4375 37.046875 43.734375 37.765625 42.828125 37.765625 Z M 42.828125 37.765625 "/>\n      </g>'
        },
        wmvIcon: {
            extension: ".wmv",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.484375 43.734375 L 8.53125 43.734375 C 8.5625 43.71875 8.59375 43.703125 8.65625 43.703125 L 8.664062 43.6875 C 8.671875 43.6875 8.671875 43.6875 8.6875 43.6875 C 8.71875 43.671875 8.765625 43.625 8.8125 43.59375 L 8.84375 43.59375 C 8.875 43.5625 8.90625 43.53125 8.9375 43.515625 C 8.9375 43.5 8.953125 43.5 8.953125 43.46875 L 9.046875 43.375 C 9.046875 43.375 9.046875 43.359375 9.0625 43.359375 C 9.078125 43.328125 9.109375 43.265625 9.125 43.21875 L 11.171875 38.375 L 13.21875 43.21875 C 13.234375 43.265625 13.25 43.328125 13.28125 43.359375 C 13.28125 43.359375 13.28125 43.375 13.3125 43.375 L 13.375 43.46875 C 13.390625 43.5 13.390625 43.5 13.40625 43.515625 L 13.453125 43.546875 L 13.515625 43.59375 C 13.515625 43.59375 13.515625 43.59375 13.53125 43.59375 C 13.5625 43.625 13.609375 43.671875 13.671875 43.6875 C 13.6875 43.6875 13.6875 43.6875 13.703125 43.703125 C 13.734375 43.703125 13.765625 43.71875 13.8125 43.734375 L 13.859375 43.734375 L 13.929688 43.746094 L 14 43.75 C 14.0625 43.75 14.109375 43.75 14.15625 43.734375 L 14.1875 43.734375 C 14.234375 43.71875 14.28125 43.703125 14.3125 43.703125 C 14.3125 43.6875 14.328125 43.6875 14.328125 43.6875 L 14.34375 43.6875 C 14.40625 43.671875 14.4375 43.625 14.484375 43.59375 L 14.5 43.59375 C 14.53125 43.5625 14.578125 43.53125 14.609375 43.515625 C 14.609375 43.5 14.625 43.5 14.625 43.46875 C 14.65625 43.4375 14.6875 43.40625 14.703125 43.375 L 14.71875 43.359375 C 14.75 43.328125 14.78125 43.265625 14.796875 43.21875 L 18.625 34.109375 C 18.8125 33.6875 18.609375 33.171875 18.1875 33 C 17.734375 32.8125 17.234375 33.015625 17.046875 33.453125 L 14 40.6875 L 11.984375 35.890625 C 11.828125 35.546875 11.5 35.359375 11.171875 35.359375 C 10.828125 35.359375 10.5 35.546875 10.359375 35.890625 L 8.34375 40.6875 L 5.28125 33.453125 C 5.109375 33.015625 4.59375 32.8125 4.171875 33 C 3.71875 33.171875 3.53125 33.6875 3.703125 34.109375 L 7.546875 43.21875 C 7.578125 43.265625 7.59375 43.328125 7.625 43.359375 L 7.625 43.375 C 7.65625 43.40625 7.671875 43.4375 7.703125 43.46875 C 7.71875 43.5 7.71875 43.5 7.734375 43.515625 L 7.789062 43.546875 L 7.84375 43.59375 C 7.84375 43.59375 7.84375 43.59375 7.859375 43.59375 C 7.890625 43.625 7.953125 43.671875 8 43.6875 C 8.015625 43.6875 8.015625 43.6875 8.03125 43.703125 C 8.0625 43.703125 8.09375 43.71875 8.140625 43.734375 L 8.1875 43.734375 L 8.265625 43.746094 L 8.34375 43.75 C 8.390625 43.75 8.4375 43.75 8.484375 43.734375 Z M 29.03125 43.75 C 29.5 43.75 29.90625 43.359375 29.90625 42.890625 L 29.90625 33.671875 C 29.90625 33.269531 29.609375 32.9375 29.226562 32.839844 L 29.03125 32.8125 L 29.015625 32.8125 C 28.734375 32.8125 28.484375 32.9375 28.3125 33.171875 L 25.203125 37.484375 L 22.09375 33.171875 C 21.9375 32.9375 21.65625 32.8125 21.40625 32.8125 L 21.359375 32.8125 C 20.890625 32.8125 20.5 33.203125 20.5 33.671875 L 20.5 42.890625 C 20.5 43.359375 20.890625 43.75 21.359375 43.75 C 21.84375 43.75 22.234375 43.359375 22.234375 42.890625 L 22.234375 36.3125 L 24.46875 39.4375 C 24.640625 39.671875 24.90625 39.796875 25.1875 39.796875 L 25.21875 39.796875 C 25.5 39.796875 25.75 39.671875 25.921875 39.4375 L 28.171875 36.3125 L 28.171875 42.890625 C 28.171875 43.359375 28.546875 43.75 29.03125 43.75 Z M 37.015625 43.734375 L 37.0625 43.734375 C 37.09375 43.71875 37.125 43.703125 37.1875 43.703125 L 37.195312 43.6875 C 37.203125 43.6875 37.203125 43.6875 37.21875 43.6875 C 37.25 43.671875 37.296875 43.625 37.34375 43.59375 L 37.375 43.59375 C 37.40625 43.5625 37.4375 43.53125 37.46875 43.515625 C 37.46875 43.5 37.484375 43.5 37.484375 43.46875 L 37.578125 43.375 C 37.578125 43.375 37.578125 43.359375 37.59375 43.359375 C 37.609375 43.328125 37.640625 43.265625 37.65625 43.21875 L 39.703125 38.375 L 41.75 43.21875 C 41.765625 43.265625 41.78125 43.328125 41.8125 43.359375 C 41.8125 43.359375 41.8125 43.375 41.84375 43.375 L 41.90625 43.46875 C 41.921875 43.5 41.921875 43.5 41.9375 43.515625 L 41.984375 43.546875 L 42.046875 43.59375 C 42.046875 43.59375 42.046875 43.59375 42.0625 43.59375 C 42.09375 43.625 42.140625 43.671875 42.203125 43.6875 C 42.21875 43.6875 42.21875 43.6875 42.234375 43.703125 C 42.265625 43.703125 42.296875 43.71875 42.34375 43.734375 L 42.390625 43.734375 L 42.460938 43.746094 L 42.53125 43.75 C 42.59375 43.75 42.640625 43.75 42.6875 43.734375 L 42.71875 43.734375 C 42.765625 43.71875 42.8125 43.703125 42.84375 43.703125 C 42.84375 43.6875 42.859375 43.6875 42.859375 43.6875 L 42.875 43.6875 C 42.9375 43.671875 42.96875 43.625 43.015625 43.59375 L 43.03125 43.59375 C 43.0625 43.5625 43.109375 43.53125 43.140625 43.515625 C 43.140625 43.5 43.15625 43.5 43.15625 43.46875 C 43.1875 43.4375 43.21875 43.40625 43.234375 43.375 L 43.25 43.359375 C 43.28125 43.328125 43.3125 43.265625 43.328125 43.21875 L 47.15625 34.109375 C 47.34375 33.6875 47.140625 33.171875 46.71875 33 C 46.265625 32.8125 45.765625 33.015625 45.578125 33.453125 L 42.53125 40.6875 L 40.515625 35.890625 C 40.359375 35.546875 40.03125 35.359375 39.703125 35.359375 C 39.359375 35.359375 39.03125 35.546875 38.890625 35.890625 L 36.875 40.6875 L 33.8125 33.453125 C 33.640625 33.015625 33.125 32.8125 32.703125 33 C 32.25 33.171875 32.0625 33.6875 32.234375 34.109375 L 36.078125 43.21875 C 36.109375 43.265625 36.125 43.328125 36.15625 43.359375 L 36.15625 43.375 C 36.1875 43.40625 36.203125 43.4375 36.234375 43.46875 C 36.25 43.5 36.25 43.5 36.265625 43.515625 L 36.320312 43.546875 L 36.375 43.59375 C 36.375 43.59375 36.375 43.59375 36.390625 43.59375 C 36.421875 43.625 36.484375 43.671875 36.53125 43.6875 C 36.546875 43.6875 36.546875 43.6875 36.5625 43.703125 C 36.59375 43.703125 36.625 43.71875 36.671875 43.734375 L 36.71875 43.734375 L 36.796875 43.746094 L 36.875 43.75 C 36.921875 43.75 36.96875 43.75 37.015625 43.734375 Z M 37.015625 43.734375 "/>\n      </g>'
        },
        xlsIcon: {
            extension: ".xls",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 17.21875 46.875 C 17.425781 46.875 17.632812 46.800781 17.820312 46.667969 C 18.289062 46.351562 18.363281 45.695312 18.042969 45.242188 L 14.480469 40.367188 L 18.042969 35.53125 C 18.363281 35.0625 18.289062 34.425781 17.820312 34.105469 C 17.351562 33.75 16.730469 33.84375 16.375 34.332031 L 13.226562 38.644531 L 10.054688 34.332031 C 9.738281 33.84375 9.082031 33.75 8.632812 34.105469 C 8.164062 34.425781 8.070312 35.0625 8.386719 35.53125 L 11.949219 40.367188 L 8.386719 45.242188 C 8.070312 45.695312 8.164062 46.351562 8.632812 46.667969 C 8.800781 46.800781 9.007812 46.875 9.230469 46.875 C 9.550781 46.875 9.851562 46.707031 10.054688 46.445312 L 13.226562 42.113281 L 16.375 46.445312 C 16.582031 46.707031 16.882812 46.875 17.21875 46.875 Z M 29.351562 46.875 C 29.894531 46.875 30.382812 46.40625 30.382812 45.84375 C 30.382812 45.261719 29.894531 44.792969 29.351562 44.792969 L 24.269531 44.792969 L 24.269531 34.78125 C 24.269531 34.21875 23.800781 33.75 23.21875 33.75 C 22.636719 33.75 22.1875 34.21875 22.1875 34.78125 L 22.1875 45.84375 C 22.1875 46.335938 22.53125 46.757812 23.007812 46.855469 L 23.222656 46.875 Z M 37.28125 46.855469 C 38.613281 46.855469 39.832031 46.460938 40.75 45.789062 C 41.6875 45.113281 42.363281 44.082031 42.363281 42.882812 C 42.363281 42.300781 42.195312 41.738281 41.914062 41.289062 C 41.480469 40.59375 40.804688 40.105469 40.039062 39.730469 C 39.289062 39.375 38.40625 39.132812 37.449219 38.945312 L 37.414062 38.945312 C 36.398438 38.757812 35.554688 38.457031 35.070312 38.117188 C 34.824219 37.949219 34.65625 37.78125 34.5625 37.632812 C 34.46875 37.480469 34.429688 37.332031 34.429688 37.105469 C 34.429688 36.710938 34.636719 36.300781 35.144531 35.925781 C 35.648438 35.550781 36.398438 35.289062 37.242188 35.289062 C 38.386719 35.289062 39.304688 35.851562 40.261719 36.488281 C 40.710938 36.789062 41.3125 36.65625 41.59375 36.207031 C 41.894531 35.773438 41.761719 35.175781 41.332031 34.875 C 40.375 34.257812 39.042969 33.375 37.242188 33.375 C 36.023438 33.375 34.882812 33.730469 34 34.367188 C 33.136719 35.007812 32.5 35.980469 32.5 37.105469 C 32.5 37.667969 32.648438 38.195312 32.929688 38.644531 C 33.34375 39.300781 33.960938 39.769531 34.675781 40.105469 C 35.386719 40.445312 36.210938 40.667969 37.09375 40.835938 L 37.132812 40.835938 C 38.238281 41.042969 39.15625 41.363281 39.699219 41.71875 C 39.980469 41.90625 40.148438 42.09375 40.261719 42.28125 C 40.375 42.46875 40.429688 42.636719 40.429688 42.882812 C 40.429688 43.351562 40.1875 43.820312 39.625 44.230469 C 39.0625 44.644531 38.21875 44.925781 37.28125 44.925781 C 35.949219 44.945312 34.523438 44.15625 33.699219 43.480469 C 33.289062 43.144531 32.667969 43.199219 32.332031 43.613281 C 32.011719 44.023438 32.070312 44.644531 32.480469 44.980469 C 33.550781 45.824219 35.257812 46.835938 37.28125 46.855469 Z M 37.28125 46.855469 "/>\n      </g>'
        },
        xlsxIcon: {
            extension: ".xlsx",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.070312 43.75 C 13.242188 43.75 13.414062 43.6875 13.570312 43.578125 C 13.960938 43.3125 14.023438 42.765625 13.757812 42.390625 L 10.789062 38.328125 L 13.757812 34.296875 C 14.023438 33.90625 13.960938 33.375 13.570312 33.109375 C 13.179688 32.8125 12.664062 32.890625 12.367188 33.296875 L 9.742188 36.890625 L 7.101562 33.296875 C 6.835938 32.890625 6.289062 32.8125 5.914062 33.109375 C 5.523438 33.375 5.445312 33.90625 5.710938 34.296875 L 8.679688 38.328125 L 5.710938 42.390625 C 5.445312 42.765625 5.523438 43.3125 5.914062 43.578125 C 6.054688 43.6875 6.226562 43.75 6.414062 43.75 C 6.679688 43.75 6.929688 43.609375 7.101562 43.390625 L 9.742188 39.78125 L 12.367188 43.390625 C 12.539062 43.609375 12.789062 43.75 13.070312 43.75 Z M 23.179688 43.75 C 23.632812 43.75 24.039062 43.359375 24.039062 42.890625 C 24.039062 42.40625 23.632812 42.015625 23.179688 42.015625 L 18.945312 42.015625 L 18.945312 33.671875 C 18.945312 33.203125 18.554688 32.8125 18.070312 32.8125 C 17.585938 32.8125 17.210938 33.203125 17.210938 33.671875 L 17.210938 42.890625 C 17.210938 43.359375 17.585938 43.75 18.070312 43.75 Z M 29.789062 43.734375 C 30.898438 43.734375 31.914062 43.40625 32.679688 42.84375 C 33.460938 42.28125 34.023438 41.421875 34.023438 40.421875 C 34.023438 39.9375 33.882812 39.46875 33.648438 39.09375 C 33.289062 38.515625 32.726562 38.109375 32.085938 37.796875 C 31.460938 37.5 30.726562 37.296875 29.929688 37.140625 L 29.898438 37.140625 C 29.054688 36.984375 28.351562 36.734375 27.945312 36.453125 C 27.742188 36.3125 27.601562 36.171875 27.523438 36.046875 C 27.445312 35.921875 27.414062 35.796875 27.414062 35.609375 C 27.414062 35.28125 27.585938 34.9375 28.007812 34.625 C 28.429688 34.3125 29.054688 34.09375 29.757812 34.09375 C 30.710938 34.09375 31.476562 34.5625 32.273438 35.09375 C 32.648438 35.34375 33.148438 35.234375 33.382812 34.859375 C 33.632812 34.5 33.523438 34 33.164062 33.75 C 32.367188 33.234375 31.257812 32.5 29.757812 32.5 C 28.742188 32.5 27.789062 32.796875 27.054688 33.328125 C 26.335938 33.859375 25.804688 34.671875 25.804688 35.609375 C 25.804688 36.078125 25.929688 36.515625 26.164062 36.890625 C 26.507812 37.4375 27.023438 37.828125 27.617188 38.109375 C 28.210938 38.390625 28.898438 38.578125 29.632812 38.71875 L 29.664062 38.71875 C 30.585938 38.890625 31.351562 39.15625 31.804688 39.453125 C 32.039062 39.609375 32.179688 39.765625 32.273438 39.921875 C 32.367188 40.078125 32.414062 40.21875 32.414062 40.421875 C 32.414062 40.8125 32.210938 41.203125 31.742188 41.546875 C 31.273438 41.890625 30.570312 42.125 29.789062 42.125 C 28.679688 42.140625 27.492188 41.484375 26.804688 40.921875 C 26.460938 40.640625 25.945312 40.6875 25.664062 41.03125 C 25.398438 41.375 25.445312 41.890625 25.789062 42.171875 C 26.679688 42.875 28.101562 43.71875 29.789062 43.734375 Z M 43.179688 43.75 C 43.351562 43.75 43.523438 43.6875 43.679688 43.578125 C 44.070312 43.3125 44.132812 42.765625 43.867188 42.390625 L 40.898438 38.328125 L 43.867188 34.296875 C 44.132812 33.90625 44.070312 33.375 43.679688 33.109375 C 43.289062 32.8125 42.773438 32.890625 42.476562 33.296875 L 39.851562 36.890625 L 37.210938 33.296875 C 36.945312 32.890625 36.398438 32.8125 36.023438 33.109375 C 35.632812 33.375 35.554688 33.90625 35.820312 34.296875 L 38.789062 38.328125 L 35.820312 42.390625 C 35.554688 42.765625 35.632812 43.3125 36.023438 43.578125 C 36.164062 43.6875 36.335938 43.75 36.523438 43.75 C 36.789062 43.75 37.039062 43.609375 37.210938 43.390625 L 39.851562 39.78125 L 42.476562 43.390625 C 42.648438 43.609375 42.898438 43.75 43.179688 43.75 Z M 43.179688 43.75 "/>\n      </g>'
        },
        zipIcon: {
            extension: ".zip",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 20.175781 46.875 C 20.855469 46.875 21.402344 46.351562 21.402344 45.671875 C 21.402344 44.992188 20.855469 44.445312 20.175781 44.445312 L 13.132812 44.445312 L 21.183594 33.488281 L 21.183594 33.445312 C 21.203125 33.421875 21.226562 33.378906 21.25 33.335938 C 21.269531 33.3125 21.269531 33.289062 21.292969 33.269531 C 21.3125 33.203125 21.3125 33.179688 21.335938 33.136719 C 21.335938 33.09375 21.378906 33.070312 21.378906 33.007812 C 21.378906 32.984375 21.378906 32.960938 21.402344 32.917969 L 21.402344 32.679688 C 21.402344 32.632812 21.402344 32.613281 21.378906 32.546875 C 21.378906 32.503906 21.378906 32.480469 21.335938 32.4375 C 21.335938 32.414062 21.3125 32.371094 21.3125 32.304688 C 21.292969 32.285156 21.269531 32.242188 21.269531 32.21875 C 21.25 32.195312 21.226562 32.152344 21.203125 32.109375 C 21.183594 32.066406 21.160156 32.042969 21.117188 32.023438 C 21.09375 32 21.074219 31.957031 21.050781 31.933594 C 21.03125 31.914062 21.007812 31.867188 20.964844 31.847656 C 20.941406 31.824219 20.941406 31.804688 20.898438 31.78125 L 20.875 31.78125 C 20.832031 31.757812 20.8125 31.738281 20.765625 31.714844 C 20.746094 31.695312 20.722656 31.648438 20.65625 31.648438 L 20.570312 31.605469 L 20.4375 31.585938 C 20.417969 31.585938 20.375 31.5625 20.351562 31.5625 L 10.75 31.5625 C 10.070312 31.5625 9.546875 32.085938 9.546875 32.765625 C 9.546875 33.421875 10.070312 33.992188 10.75 33.992188 L 17.8125 33.992188 L 9.785156 44.972656 L 9.765625 44.972656 C 9.742188 45.015625 9.71875 45.058594 9.699219 45.082031 C 9.699219 45.101562 9.675781 45.148438 9.632812 45.167969 C 9.632812 45.210938 9.609375 45.257812 9.609375 45.277344 C 9.589844 45.320312 9.589844 45.367188 9.566406 45.386719 L 9.566406 45.496094 C 9.546875 45.539062 9.546875 45.585938 9.546875 45.648438 L 9.546875 45.738281 C 9.546875 45.78125 9.566406 45.824219 9.566406 45.890625 C 9.566406 45.933594 9.589844 45.957031 9.589844 45.976562 L 9.632812 46.109375 C 9.632812 46.152344 9.675781 46.175781 9.699219 46.21875 C 9.699219 46.242188 9.71875 46.261719 9.742188 46.328125 C 9.765625 46.351562 9.785156 46.394531 9.808594 46.414062 C 9.828125 46.4375 9.851562 46.460938 9.894531 46.480469 L 9.9375 46.542969 L 9.984375 46.589844 C 10.003906 46.613281 10.027344 46.632812 10.046875 46.632812 L 10.046875 46.65625 C 10.070312 46.679688 10.09375 46.679688 10.136719 46.699219 C 10.179688 46.722656 10.222656 46.742188 10.246094 46.742188 C 10.265625 46.789062 10.289062 46.789062 10.3125 46.808594 C 10.375 46.808594 10.421875 46.832031 10.464844 46.832031 C 10.484375 46.851562 10.507812 46.851562 10.53125 46.851562 L 10.648438 46.871094 Z M 26.214844 46.875 C 26.871094 46.875 27.4375 46.351562 27.4375 45.671875 L 27.4375 32.765625 C 27.4375 32.085938 26.871094 31.5625 26.214844 31.5625 C 25.535156 31.5625 25.011719 32.085938 25.011719 32.765625 L 25.011719 45.671875 C 25.011719 46.351562 25.535156 46.875 26.214844 46.875 Z M 32.734375 46.875 C 33.410156 46.875 33.957031 46.328125 33.957031 45.671875 L 33.957031 40.925781 L 36.648438 40.925781 C 39.25 40.925781 41.351562 38.824219 41.351562 36.265625 C 41.351562 33.664062 39.25 31.5625 36.648438 31.5625 L 32.734375 31.5625 C 32.078125 31.5625 31.53125 32.085938 31.53125 32.765625 L 31.53125 45.671875 C 31.53125 46.328125 32.078125 46.875 32.734375 46.875 Z M 36.648438 38.496094 L 33.957031 38.496094 L 33.957031 33.992188 L 36.648438 33.992188 C 37.917969 33.992188 38.902344 34.996094 38.921875 36.265625 C 38.902344 37.492188 37.917969 38.496094 36.648438 38.496094 Z M 36.648438 38.496094 "/>\n      </g>'
        },
        docxIcon: {
            extension: ".docx",
            path: '<g id="surface9" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.789062 43.75 C 9.589844 43.75 10.988281 43.269531 11.984375 42.304688 C 12.980469 41.339844 13.476562 39.984375 13.476562 38.234375 C 13.476562 36.496094 12.980469 35.144531 11.984375 34.179688 C 10.988281 33.214844 9.589844 32.734375 7.789062 32.734375 L 4.695312 32.734375 C 4.394531 32.734375 4.15625 32.816406 3.984375 32.984375 C 3.8125 33.152344 3.726562 33.386719 3.726562 33.6875 L 3.726562 42.796875 C 3.726562 43.097656 3.8125 43.332031 3.984375 43.5 C 4.15625 43.667969 4.394531 43.75 4.695312 43.75 Z M 7.664062 42.109375 L 5.742188 42.109375 L 5.742188 34.375 L 7.664062 34.375 C 10.195312 34.375 11.460938 35.660156 11.460938 38.234375 C 11.460938 40.816406 10.195312 42.109375 7.664062 42.109375 Z M 20.414062 43.890625 C 21.476562 43.890625 22.402344 43.660156 23.1875 43.203125 C 23.972656 42.746094 24.582031 42.089844 25.007812 41.234375 C 25.433594 40.378906 25.648438 39.378906 25.648438 38.234375 C 25.648438 37.089844 25.4375 36.089844 25.015625 35.242188 C 24.59375 34.394531 23.988281 33.738281 23.203125 33.28125 C 22.417969 32.824219 21.488281 32.59375 20.414062 32.59375 C 19.339844 32.59375 18.410156 32.824219 17.617188 33.28125 C 16.824219 33.738281 16.21875 34.394531 15.796875 35.242188 C 15.375 36.089844 15.164062 37.089844 15.164062 38.234375 C 15.164062 39.378906 15.378906 40.378906 15.804688 41.234375 C 16.230469 42.089844 16.839844 42.746094 17.625 43.203125 C 18.410156 43.660156 19.339844 43.890625 20.414062 43.890625 Z M 20.414062 42.28125 C 19.394531 42.28125 18.597656 41.933594 18.03125 41.234375 C 17.464844 40.535156 17.179688 39.535156 17.179688 38.234375 C 17.179688 36.933594 17.464844 35.933594 18.03125 35.242188 C 18.597656 34.550781 19.394531 34.203125 20.414062 34.203125 C 21.425781 34.203125 22.214844 34.550781 22.78125 35.242188 C 23.347656 35.933594 23.632812 36.933594 23.632812 38.234375 C 23.632812 39.535156 23.347656 40.535156 22.78125 41.234375 C 22.214844 41.933594 21.425781 42.28125 20.414062 42.28125 Z M 32.601562 43.890625 C 33.289062 43.890625 33.933594 43.789062 34.539062 43.585938 C 35.144531 43.382812 35.679688 43.089844 36.148438 42.703125 C 36.285156 42.597656 36.378906 42.488281 36.429688 42.367188 C 36.480469 42.246094 36.507812 42.109375 36.507812 41.953125 C 36.507812 41.722656 36.445312 41.53125 36.320312 41.375 C 36.195312 41.21875 36.042969 41.140625 35.867188 41.140625 C 35.753906 41.140625 35.644531 41.160156 35.539062 41.203125 C 35.433594 41.246094 35.332031 41.296875 35.226562 41.359375 C 34.746094 41.683594 34.316406 41.910156 33.9375 42.046875 C 33.558594 42.183594 33.144531 42.25 32.695312 42.25 C 31.613281 42.25 30.792969 41.910156 30.234375 41.234375 C 29.675781 40.558594 29.398438 39.558594 29.398438 38.234375 C 29.398438 36.921875 29.675781 35.925781 30.234375 35.25 C 30.792969 34.574219 31.613281 34.234375 32.695312 34.234375 C 33.164062 34.234375 33.589844 34.300781 33.976562 34.429688 C 34.363281 34.558594 34.777344 34.792969 35.226562 35.125 C 35.445312 35.269531 35.660156 35.34375 35.867188 35.34375 C 36.042969 35.34375 36.195312 35.265625 36.320312 35.109375 C 36.445312 34.953125 36.507812 34.761719 36.507812 34.53125 C 36.507812 34.363281 36.480469 34.222656 36.429688 34.109375 C 36.378906 33.996094 36.285156 33.886719 36.148438 33.78125 C 35.679688 33.394531 35.144531 33.101562 34.539062 32.898438 C 33.933594 32.695312 33.289062 32.59375 32.601562 32.59375 C 31.539062 32.59375 30.609375 32.824219 29.8125 33.28125 C 29.015625 33.738281 28.402344 34.394531 27.976562 35.242188 C 27.550781 36.089844 27.335938 37.089844 27.335938 38.234375 C 27.335938 39.378906 27.550781 40.378906 27.976562 41.234375 C 28.402344 42.089844 29.015625 42.746094 29.8125 43.203125 C 30.609375 43.660156 31.539062 43.890625 32.601562 43.890625 Z M 46.132812 43.84375 C 46.382812 43.84375 46.605469 43.75 46.796875 43.5625 C 46.988281 43.375 47.085938 43.15625 47.085938 42.90625 C 47.085938 42.707031 47.003906 42.511719 46.835938 42.3125 L 43.445312 38.15625 L 46.710938 34.171875 C 46.867188 34.003906 46.945312 33.808594 46.945312 33.578125 C 46.945312 33.328125 46.847656 33.113281 46.65625 32.929688 C 46.464844 32.746094 46.242188 32.65625 45.992188 32.65625 C 45.730469 32.65625 45.507812 32.769531 45.320312 33 L 42.273438 36.765625 L 39.226562 33 C 39.027344 32.769531 38.800781 32.65625 38.539062 32.65625 C 38.289062 32.65625 38.070312 32.746094 37.882812 32.929688 C 37.695312 33.113281 37.601562 33.328125 37.601562 33.578125 C 37.601562 33.808594 37.679688 34.003906 37.835938 34.171875 L 41.101562 38.15625 L 37.695312 42.3125 C 37.539062 42.5 37.460938 42.699219 37.460938 42.90625 C 37.460938 43.15625 37.558594 43.371094 37.75 43.554688 C 37.941406 43.738281 38.164062 43.828125 38.414062 43.828125 C 38.675781 43.828125 38.898438 43.71875 39.085938 43.5 L 42.273438 39.5625 L 45.445312 43.5 C 45.644531 43.730469 45.871094 43.84375 46.132812 43.84375 Z M 46.132812 43.84375 "/>\n      </g>'
        },
        jpgIcon: {
            extension: ".jpg",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.789062 47.007812 L 9.488281 46.960938 C 12.214844 46.757812 13.578125 45.277344 13.578125 42.523438 L 13.578125 32.742188 C 13.578125 32.320312 13.453125 31.980469 13.195312 31.726562 C 12.941406 31.472656 12.59375 31.34375 12.15625 31.34375 C 11.734375 31.34375 11.394531 31.472656 11.140625 31.726562 C 10.886719 31.980469 10.757812 32.320312 10.757812 32.742188 L 10.757812 42.523438 C 10.757812 43.238281 10.605469 43.769531 10.296875 44.117188 C 9.992188 44.46875 9.539062 44.660156 8.941406 44.6875 L 8.242188 44.730469 C 7.847656 44.761719 7.558594 44.867188 7.378906 45.046875 C 7.195312 45.230469 7.105469 45.496094 7.105469 45.847656 C 7.105469 46.664062 7.667969 47.050781 8.789062 47.007812 Z M 18.304688 47.007812 C 18.742188 47.007812 19.089844 46.878906 19.34375 46.625 C 19.597656 46.367188 19.726562 46.023438 19.726562 45.585938 L 19.726562 40.882812 L 23.640625 40.882812 C 25.289062 40.882812 26.574219 40.464844 27.492188 39.632812 C 28.410156 38.804688 28.871094 37.644531 28.871094 36.15625 C 28.871094 34.667969 28.410156 33.511719 27.492188 32.6875 C 26.574219 31.863281 25.289062 31.453125 23.640625 31.453125 L 18.261719 31.453125 C 17.839844 31.453125 17.507812 31.570312 17.265625 31.804688 C 17.023438 32.035156 16.90625 32.363281 16.90625 32.789062 L 16.90625 45.585938 C 16.90625 46.023438 17.03125 46.367188 17.289062 46.625 C 17.542969 46.878906 17.882812 47.007812 18.304688 47.007812 Z M 23.292969 38.714844 L 19.726562 38.714844 L 19.726562 33.640625 L 23.292969 33.640625 C 25.230469 33.640625 26.203125 34.488281 26.203125 36.179688 C 26.203125 37.871094 25.230469 38.714844 23.292969 38.714844 Z M 38.605469 47.070312 C 39.320312 47.070312 40.0625 47.011719 40.835938 46.898438 C 41.609375 46.78125 42.285156 46.621094 42.871094 46.414062 C 43.410156 46.242188 43.765625 46.015625 43.941406 45.738281 C 44.117188 45.460938 44.203125 44.988281 44.203125 44.316406 L 44.203125 39.613281 C 44.203125 39.292969 44.101562 39.03125 43.898438 38.835938 C 43.695312 38.640625 43.425781 38.539062 43.089844 38.539062 L 39.21875 38.539062 C 38.867188 38.539062 38.59375 38.628906 38.398438 38.804688 C 38.199219 38.976562 38.101562 39.226562 38.101562 39.546875 C 38.101562 39.867188 38.199219 40.117188 38.398438 40.289062 C 38.59375 40.464844 38.867188 40.554688 39.21875 40.554688 L 41.6875 40.554688 L 41.6875 44.425781 C 40.699219 44.703125 39.707031 44.839844 38.714844 44.839844 C 35.390625 44.839844 33.726562 42.945312 33.726562 39.152344 C 33.726562 37.300781 34.132812 35.90625 34.941406 34.964844 C 35.75 34.023438 36.949219 33.554688 38.539062 33.554688 C 39.238281 33.554688 39.867188 33.644531 40.421875 33.828125 C 40.972656 34.007812 41.574219 34.324219 42.214844 34.777344 C 42.390625 34.894531 42.542969 34.980469 42.671875 35.03125 C 42.804688 35.082031 42.949219 35.105469 43.109375 35.105469 C 43.359375 35.105469 43.570312 34.996094 43.746094 34.777344 C 43.921875 34.558594 44.007812 34.289062 44.007812 33.96875 C 44.007812 33.75 43.96875 33.558594 43.886719 33.398438 C 43.808594 33.238281 43.679688 33.078125 43.503906 32.917969 C 42.191406 31.808594 40.507812 31.257812 38.453125 31.257812 C 36.90625 31.257812 35.5625 31.574219 34.425781 32.207031 C 33.289062 32.84375 32.410156 33.753906 31.789062 34.941406 C 31.171875 36.128906 30.859375 37.535156 30.859375 39.152344 C 30.859375 40.800781 31.171875 42.21875 31.789062 43.40625 C 32.410156 44.597656 33.304688 45.503906 34.46875 46.132812 C 35.636719 46.757812 37.015625 47.070312 38.605469 47.070312 Z M 38.605469 47.070312 "/>\n      </g>'
        },
        mp3Icon: {
            extension: ".mp3",
            path: '<g id="surface9" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 43.828125 43.710938 C 43.605469 44.28125 43.273438 44.804688 42.84375 45.265625 C 42.40625 45.730469 41.867188 46.113281 41.242188 46.398438 C 40.597656 46.699219 39.851562 46.855469 39.027344 46.855469 C 38.328125 46.855469 37.703125 46.757812 37.160156 46.570312 C 36.609375 46.378906 36.160156 46.136719 35.769531 45.839844 C 35.386719 45.550781 35.050781 45.210938 34.796875 44.832031 C 34.570312 44.507812 34.394531 44.195312 34.265625 43.890625 C 34.140625 43.59375 34.054688 43.335938 33.996094 43.101562 C 33.792969 42.261719 34.304688 41.417969 35.140625 41.210938 C 35.980469 41.007812 36.828125 41.519531 37.03125 42.355469 C 37.039062 42.390625 37.066406 42.488281 37.144531 42.671875 C 37.191406 42.777344 37.265625 42.914062 37.371094 43.0625 C 37.4375 43.160156 37.53125 43.257812 37.65625 43.351562 C 37.792969 43.453125 37.972656 43.542969 38.195312 43.625 C 38.332031 43.667969 38.59375 43.730469 39.027344 43.730469 C 39.390625 43.730469 39.695312 43.675781 39.925781 43.566406 C 40.1875 43.445312 40.398438 43.300781 40.558594 43.132812 C 40.71875 42.957031 40.839844 42.773438 40.914062 42.578125 C 40.996094 42.371094 41.03125 42.195312 41.03125 42.023438 C 41.03125 41.789062 41 41.585938 40.921875 41.398438 C 40.871094 41.257812 40.785156 41.148438 40.660156 41.039062 C 40.515625 40.910156 40.296875 40.792969 40.011719 40.699219 C 39.6875 40.59375 39.253906 40.539062 38.738281 40.535156 C 37.882812 40.527344 37.1875 39.832031 37.1875 38.972656 L 37.1875 38.832031 C 37.1875 37.984375 37.859375 37.292969 38.699219 37.265625 C 39.070312 37.257812 39.398438 37.195312 39.679688 37.101562 C 39.921875 37.011719 40.121094 36.902344 40.273438 36.773438 C 40.40625 36.652344 40.507812 36.519531 40.582031 36.359375 C 40.652344 36.210938 40.6875 36.027344 40.6875 35.8125 C 40.6875 35.523438 40.644531 35.289062 40.574219 35.125 C 40.5 34.96875 40.414062 34.847656 40.304688 34.757812 C 40.1875 34.660156 40.042969 34.582031 39.867188 34.53125 C 39.402344 34.386719 38.878906 34.398438 38.480469 34.542969 C 38.289062 34.617188 38.121094 34.714844 37.976562 34.84375 C 37.820312 34.984375 37.695312 35.148438 37.59375 35.339844 C 37.484375 35.550781 37.40625 35.773438 37.367188 36.039062 C 37.230469 36.890625 36.429688 37.472656 35.574219 37.335938 C 34.722656 37.195312 34.140625 36.398438 34.28125 35.542969 C 34.378906 34.9375 34.5625 34.378906 34.835938 33.871094 C 35.109375 33.355469 35.464844 32.898438 35.890625 32.519531 C 36.320312 32.132812 36.824219 31.828125 37.382812 31.617188 C 38.433594 31.226562 39.667969 31.199219 40.78125 31.539062 C 41.351562 31.714844 41.863281 31.992188 42.308594 32.355469 C 42.777344 32.753906 43.148438 33.242188 43.414062 33.824219 C 43.679688 34.402344 43.8125 35.070312 43.8125 35.8125 C 43.8125 36.476562 43.679688 37.097656 43.421875 37.660156 C 43.25 38.046875 43.023438 38.394531 42.746094 38.707031 C 43.242188 39.148438 43.609375 39.671875 43.835938 40.261719 C 44.046875 40.804688 44.15625 41.398438 44.15625 42.023438 C 44.15625 42.578125 44.046875 43.148438 43.828125 43.710938 Z M 31.445312 38.492188 C 31.148438 39.140625 30.734375 39.703125 30.199219 40.164062 C 29.6875 40.605469 29.078125 40.957031 28.390625 41.199219 C 27.71875 41.4375 26.976562 41.5625 26.191406 41.5625 L 25 41.5625 L 25 45 C 25 45.859375 24.296875 46.5625 23.4375 46.5625 C 22.578125 46.5625 21.875 45.859375 21.875 45 L 21.875 32.8125 C 21.875 31.945312 22.578125 31.25 23.4375 31.25 L 26.191406 31.25 C 27.890625 31.25 29.257812 31.667969 30.253906 32.5 C 31.339844 33.398438 31.886719 34.714844 31.886719 36.40625 C 31.886719 37.148438 31.738281 37.851562 31.445312 38.492188 Z M 18.730469 45.210938 C 18.730469 46.070312 18.03125 46.773438 17.167969 46.773438 C 16.300781 46.773438 15.605469 46.070312 15.605469 45.210938 L 15.605469 39.28125 L 14.015625 43.140625 C 14.007812 43.164062 13.996094 43.191406 13.984375 43.214844 C 13.71875 43.777344 13.15625 44.117188 12.566406 44.117188 L 12.53125 44.117188 C 11.9375 44.117188 11.375 43.777344 11.109375 43.214844 L 11.082031 43.160156 L 9.339844 39.101562 L 9.339844 45.210938 C 9.339844 46.070312 8.640625 46.773438 7.777344 46.773438 C 6.910156 46.773438 6.214844 46.070312 6.214844 45.210938 L 6.214844 32.824219 C 6.214844 31.960938 6.910156 31.261719 7.777344 31.261719 L 7.835938 31.261719 C 8.472656 31.261719 9.046875 31.617188 9.335938 32.1875 L 12.527344 39.09375 L 15.59375 32.207031 C 15.894531 31.617188 16.46875 31.261719 17.105469 31.261719 L 17.167969 31.261719 C 18.03125 31.261719 18.730469 31.960938 18.730469 32.824219 Z M 41.382812 28.125 L 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.136719 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.136719 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 41.382812 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 28.257812 34.902344 C 27.835938 34.550781 27.140625 34.375 26.191406 34.375 L 25 34.375 L 25 38.4375 L 26.191406 38.4375 C 26.621094 38.4375 27.007812 38.375 27.34375 38.253906 C 27.667969 38.140625 27.929688 37.992188 28.148438 37.804688 C 28.34375 37.632812 28.492188 37.4375 28.601562 37.195312 C 28.710938 36.964844 28.757812 36.703125 28.757812 36.40625 C 28.757812 35.324219 28.382812 35.003906 28.257812 34.902344 "/>\n      <path style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(99.607843%,99.607843%,99.607843%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11.34125 13.57875 C 11.345 13.5925 11.3525 13.62375 11.36375 13.67375 C 11.3775 13.7225 11.3975 13.78125 11.42625 13.85 C 11.45375 13.9175 11.49375 13.9875 11.54625 14.0625 C 11.5975 14.13875 11.66625 14.20875 11.75 14.27125 C 11.83375 14.33625 11.9375 14.38875 12.0575 14.43125 C 12.1775 14.4725 12.32 14.49375 12.4875 14.49375 C 12.67875 14.49375 12.845 14.46125 12.9875 14.39375 C 13.13 14.32875 13.24875 14.245 13.34375 14.1425 C 13.43875 14.0425 13.51125 13.93 13.55875 13.8075 C 13.6075 13.6825 13.63125 13.56375 13.63125 13.4475 C 13.63125 13.31125 13.6075 13.1825 13.5625 13.065 C 13.515 12.9475 13.4425 12.845 13.3425 12.7575 C 13.2425 12.67 13.115 12.6 12.96 12.55 C 12.805 12.49875 12.6175 12.4725 12.4 12.4725 L 12.4 12.42625 C 12.57 12.42 12.72375 12.3925 12.8625 12.34375 C 13.0025 12.29625 13.11875 12.2275 13.21625 12.14375 C 13.31375 12.05875 13.3875 11.96 13.44125 11.845 C 13.4925 11.7275 13.52 11.60125 13.52 11.46 C 13.52 11.29375 13.4925 11.1525 13.43875 11.0325 C 13.38375 10.91375 13.31125 10.81625 13.21875 10.74 C 13.1275 10.66375 13.0225 10.6075 12.90375 10.5725 C 12.78625 10.535 12.66375 10.5175 12.5375 10.5175 C 12.395 10.5175 12.26125 10.54 12.14 10.58625 C 12.0175 10.6325 11.91 10.69625 11.81875 10.77875 C 11.72625 10.8625 11.64875 10.96 11.5875 11.07375 C 11.5275 11.18875 11.48625 11.315 11.4625 11.45375 M 7.5 14.4 L 7.5 10.5 L 8.3825 10.5 C 8.8075 10.5 9.13375 10.595 9.3625 10.78375 C 9.59 10.975 9.7025 11.2625 9.7025 11.65 C 9.7025 11.81625 9.6725 11.97125 9.6075 12.11125 C 9.5425 12.2525 9.4525 12.37375 9.335 12.475 C 9.21875 12.5775 9.0775 12.65625 8.9175 12.71375 C 8.75625 12.77125 8.5775 12.8 8.3825 12.8 L 7.6 12.8 M 2.4875 14.4675 L 2.4875 10.50375 L 2.5075 10.50375 C 2.5225 10.50375 2.53375 10.5125 2.5425 10.52625 L 3.9925 13.58625 C 3.99875 13.5975 4.005 13.6075 4.00875 13.6175 M 4.02125 13.6175 C 4.02625 13.6075 4.03125 13.5975 4.0375 13.58625 L 5.44 10.52625 C 5.4475 10.5125 5.45875 10.50375 5.4725 10.50375 L 5.4925 10.50375 L 5.4925 14.4675 " transform="matrix(3.125,0,0,3.125,0,0)"/>\n      </g>'
        },
        mp4Icon: {
            extension: ".mp4",
            path: '<g id="surface6" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 36.898438 40.625 L 40.625 35.480469 L 40.625 40.625 Z M 28.761719 36.40625 C 28.761719 36.703125 28.707031 36.964844 28.605469 37.195312 C 28.496094 37.433594 28.347656 37.632812 28.148438 37.804688 C 27.929688 37.992188 27.667969 38.144531 27.34375 38.257812 C 27.003906 38.375 26.621094 38.4375 26.191406 38.4375 L 25 38.4375 L 25 34.375 L 26.191406 34.375 C 27.140625 34.375 27.835938 34.554688 28.253906 34.902344 C 28.378906 35.007812 28.761719 35.324219 28.761719 36.40625 Z M 44.6875 43.75 L 43.75 43.75 L 43.75 45.3125 C 43.75 46.175781 43.050781 46.875 42.1875 46.875 C 41.324219 46.875 40.625 46.175781 40.625 45.3125 L 40.625 43.75 L 34.066406 43.75 C 33.199219 43.75 32.503906 43.050781 32.503906 42.1875 L 32.503906 41.875 C 32.503906 41.546875 32.605469 41.226562 32.800781 40.957031 L 39.363281 31.898438 C 39.660156 31.492188 40.128906 31.25 40.628906 31.25 L 42.1875 31.25 C 43.050781 31.25 43.75 31.949219 43.75 32.8125 L 43.75 40.625 L 44.6875 40.625 C 45.550781 40.625 46.25 41.324219 46.25 42.1875 C 46.25 43.050781 45.550781 43.75 44.6875 43.75 Z M 31.445312 38.492188 C 31.148438 39.140625 30.730469 39.703125 30.195312 40.167969 C 29.6875 40.605469 29.082031 40.957031 28.390625 41.203125 C 27.71875 41.441406 26.976562 41.5625 26.191406 41.5625 L 25 41.5625 L 25 45 C 25 45.863281 24.300781 46.5625 23.4375 46.5625 C 22.578125 46.5625 21.875 45.863281 21.875 45 L 21.875 32.8125 C 21.875 31.949219 22.578125 31.25 23.4375 31.25 L 26.191406 31.25 C 27.890625 31.25 29.257812 31.671875 30.253906 32.5 C 31.339844 33.398438 31.886719 34.714844 31.886719 36.40625 C 31.886719 37.148438 31.738281 37.851562 31.445312 38.492188 Z M 18.730469 45.210938 C 18.730469 46.070312 18.027344 46.773438 17.167969 46.773438 C 16.300781 46.773438 15.605469 46.070312 15.605469 45.210938 L 15.605469 39.6875 L 14.035156 43.105469 C 14.019531 43.144531 14.003906 43.179688 13.984375 43.214844 C 13.71875 43.78125 13.15625 44.117188 12.566406 44.117188 L 12.53125 44.117188 C 11.941406 44.117188 11.378906 43.78125 11.113281 43.214844 C 11.097656 43.183594 11.078125 43.152344 11.066406 43.125 L 9.339844 39.484375 L 9.339844 45.210938 C 9.339844 46.070312 8.640625 46.773438 7.777344 46.773438 C 6.910156 46.773438 6.214844 46.070312 6.214844 45.210938 L 6.214844 32.824219 C 6.214844 31.960938 6.910156 31.261719 7.777344 31.261719 L 7.835938 31.261719 C 8.472656 31.261719 9.046875 31.617188 9.335938 32.191406 L 9.355469 32.226562 L 12.523438 38.90625 L 15.578125 32.242188 C 15.585938 32.226562 15.597656 32.210938 15.605469 32.191406 C 15.894531 31.617188 16.46875 31.261719 17.105469 31.261719 L 17.164062 31.261719 C 18.027344 31.261719 18.726562 31.960938 18.726562 32.824219 L 18.726562 45.210938 Z M 41.382812 28.125 L 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 41.382812 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface6" mask="url(#mask0)"/>\n      <path style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(99.607843%,99.607843%,99.607843%);stroke-opacity:1;stroke-miterlimit:4;" d="M 14.3 13.5 L 10.90125 13.5 L 10.90125 13.4 L 13.00125 10.5 L 13.5 10.5 L 13.5 14.5 M 7.5 14.4 L 7.5 10.5 L 8.3825 10.5 C 8.8075 10.5 9.13375 10.595 9.3625 10.78375 C 9.59 10.975 9.7025 11.2625 9.7025 11.65 C 9.7025 11.81625 9.6725 11.97125 9.6075 12.11125 C 9.5425 12.2525 9.4525 12.37375 9.335 12.47625 C 9.21875 12.5775 9.0775 12.65625 8.9175 12.71375 C 8.75625 12.77125 8.5775 12.8 8.3825 12.8 L 7.6 12.8 M 2.4875 14.4675 L 2.4875 10.50375 L 2.5075 10.50375 C 2.5225 10.50375 2.53375 10.5125 2.5425 10.52625 L 3.9925 13.58625 C 3.99875 13.5975 4.005 13.6075 4.00875 13.6175 M 4.02125 13.6175 C 4.02625 13.6075 4.03125 13.5975 4.0375 13.58625 L 5.44 10.52625 C 5.4475 10.5125 5.45875 10.50375 5.4725 10.50375 L 5.4925 10.50375 L 5.4925 14.4675 " transform="matrix(3.125,0,0,3.125,0,0)"/>\n      </g>'
        },
        oggIcon: {
            extension: ".ogg",
            path: '<g id="surface9" clip-path="url(#clip1)">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>\n      </g>\n      </defs>\n      <g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>\n      <use xlink:href="#surface9" mask="url(#mask0)"/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.976562 47.070312 C 10.464844 47.070312 11.757812 46.75 12.859375 46.109375 C 13.960938 45.46875 14.808594 44.550781 15.40625 43.351562 C 16.003906 42.15625 16.304688 40.757812 16.304688 39.152344 C 16.304688 37.550781 16.007812 36.152344 15.417969 34.964844 C 14.828125 33.777344 13.980469 32.859375 12.882812 32.21875 C 11.78125 31.578125 10.480469 31.257812 8.976562 31.257812 C 7.472656 31.257812 6.167969 31.578125 5.0625 32.21875 C 3.953125 32.859375 3.101562 33.777344 2.511719 34.964844 C 1.921875 36.152344 1.625 37.550781 1.625 39.152344 C 1.625 40.757812 1.925781 42.15625 2.523438 43.351562 C 3.121094 44.550781 3.972656 45.46875 5.070312 46.109375 C 6.171875 46.75 7.472656 47.070312 8.976562 47.070312 Z M 8.976562 44.820312 C 7.546875 44.820312 6.433594 44.332031 5.640625 43.351562 C 4.847656 42.375 4.449219 40.976562 4.449219 39.152344 C 4.449219 37.332031 4.847656 35.933594 5.640625 34.964844 C 6.433594 33.996094 7.546875 33.507812 8.976562 33.507812 C 10.390625 33.507812 11.496094 33.996094 12.289062 34.964844 C 13.085938 35.933594 13.484375 37.332031 13.484375 39.152344 C 13.484375 40.976562 13.085938 42.375 12.289062 43.351562 C 11.496094 44.332031 10.390625 44.820312 8.976562 44.820312 Z M 26.410156 47.070312 C 27.125 47.070312 27.871094 47.011719 28.640625 46.898438 C 29.414062 46.78125 30.09375 46.621094 30.675781 46.414062 C 31.214844 46.242188 31.574219 46.015625 31.75 45.738281 C 31.921875 45.460938 32.011719 44.988281 32.011719 44.316406 L 32.011719 39.613281 C 32.011719 39.292969 31.910156 39.03125 31.703125 38.835938 C 31.5 38.640625 31.230469 38.539062 30.894531 38.539062 L 27.023438 38.539062 C 26.671875 38.539062 26.398438 38.628906 26.203125 38.804688 C 26.007812 38.976562 25.90625 39.226562 25.90625 39.546875 C 25.90625 39.867188 26.007812 40.117188 26.203125 40.289062 C 26.398438 40.464844 26.671875 40.554688 27.023438 40.554688 L 29.496094 40.554688 L 29.496094 44.425781 C 28.503906 44.703125 27.511719 44.839844 26.519531 44.839844 C 23.195312 44.839844 21.53125 42.945312 21.53125 39.152344 C 21.53125 37.300781 21.9375 35.90625 22.746094 34.964844 C 23.554688 34.023438 24.753906 33.554688 26.34375 33.554688 C 27.046875 33.554688 27.671875 33.644531 28.226562 33.828125 C 28.78125 34.007812 29.378906 34.324219 30.019531 34.777344 C 30.195312 34.894531 30.347656 34.980469 30.480469 35.03125 C 30.609375 35.082031 30.757812 35.105469 30.917969 35.105469 C 31.164062 35.105469 31.375 34.996094 31.550781 34.777344 C 31.726562 34.558594 31.8125 34.289062 31.8125 33.96875 C 31.8125 33.75 31.773438 33.558594 31.695312 33.398438 C 31.613281 33.238281 31.484375 33.078125 31.3125 32.917969 C 30 31.808594 28.3125 31.257812 26.257812 31.257812 C 24.710938 31.257812 23.371094 31.574219 22.234375 32.207031 C 21.09375 32.84375 20.214844 33.753906 19.597656 34.941406 C 18.976562 36.128906 18.667969 37.535156 18.667969 39.152344 C 18.667969 40.800781 18.976562 42.21875 19.597656 43.40625 C 20.214844 44.597656 21.109375 45.503906 22.277344 46.132812 C 23.441406 46.757812 24.820312 47.070312 26.410156 47.070312 Z M 42.445312 47.070312 C 43.160156 47.070312 43.902344 47.011719 44.675781 46.898438 C 45.449219 46.78125 46.128906 46.621094 46.710938 46.414062 C 47.25 46.242188 47.609375 46.015625 47.78125 45.738281 C 47.957031 45.460938 48.046875 44.988281 48.046875 44.316406 L 48.046875 39.613281 C 48.046875 39.292969 47.941406 39.03125 47.738281 38.835938 C 47.535156 38.640625 47.265625 38.539062 46.929688 38.539062 L 43.058594 38.539062 C 42.707031 38.539062 42.433594 38.628906 42.238281 38.804688 C 42.039062 38.976562 41.941406 39.226562 41.941406 39.546875 C 41.941406 39.867188 42.039062 40.117188 42.238281 40.289062 C 42.433594 40.464844 42.707031 40.554688 43.058594 40.554688 L 45.53125 40.554688 L 45.53125 44.425781 C 44.539062 44.703125 43.546875 44.839844 42.554688 44.839844 C 39.230469 44.839844 37.566406 42.945312 37.566406 39.152344 C 37.566406 37.300781 37.972656 35.90625 38.78125 34.964844 C 39.589844 34.023438 40.789062 33.554688 42.378906 33.554688 C 43.078125 33.554688 43.707031 33.644531 44.261719 33.828125 C 44.816406 34.007812 45.414062 34.324219 46.054688 34.777344 C 46.230469 34.894531 46.382812 34.980469 46.515625 35.03125 C 46.644531 35.082031 46.792969 35.105469 46.953125 35.105469 C 47.199219 35.105469 47.410156 34.996094 47.585938 34.777344 C 47.761719 34.558594 47.847656 34.289062 47.847656 33.96875 C 47.847656 33.75 47.808594 33.558594 47.726562 33.398438 C 47.648438 33.238281 47.519531 33.078125 47.34375 32.917969 C 46.03125 31.808594 44.347656 31.257812 42.292969 31.257812 C 40.746094 31.257812 39.40625 31.574219 38.265625 32.207031 C 37.128906 32.84375 36.25 33.753906 35.632812 34.941406 C 35.011719 36.128906 34.703125 37.535156 34.703125 39.152344 C 34.703125 40.800781 35.011719 42.21875 35.632812 43.40625 C 36.25 44.597656 37.144531 45.503906 38.3125 46.132812 C 39.476562 46.757812 40.855469 47.070312 42.445312 47.070312 Z M 42.445312 47.070312 "/>\n      </g>'
        },
        pdfIcon: {
            extension: ".pdf",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.59375 25 L 39.4375 25 C 41.476562 25.003906 43.484375 25.472656 45.3125 26.375 L 45.3125 15.375 C 45.347656 14.191406 44.867188 13.054688 44 12.25 L 34.625 2.875 C 33.875 2.003906 32.773438 1.523438 31.625 1.5625 L 6.625 1.5625 C 5.589844 1.5625 4.75 2.402344 4.75 3.4375 L 4.75 26.375 C 6.566406 25.480469 8.566406 25.007812 10.59375 25 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.71875 L 42.15625 12.5 L 34.53125 12.5 C 34.480469 12.511719 34.425781 12.511719 34.375 12.5 Z M 6.25 25.71875 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.300781 13.980469 32.316406 15.253906 33.75 15.625 C 33.957031 15.675781 34.167969 15.675781 34.375 15.625 L 43.75 15.625 L 43.75 25.71875 C 44.859375 26.09375 45.910156 26.621094 46.875 27.28125 L 46.875 15.375 C 46.964844 13.722656 46.3125 12.117188 45.09375 11 L 35.71875 1.625 C 34.648438 0.523438 33.160156 -0.0664062 31.625 0 L 6.625 0 C 5.703125 -0.015625 4.8125 0.339844 4.152344 0.984375 C 3.496094 1.632812 3.125 2.515625 3.125 3.4375 L 3.125 27.28125 C 4.09375 26.625 5.144531 26.101562 6.25 25.71875 Z M 6.25 25.71875 "/>\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.625 28.125 C 6.335938 28.117188 4.136719 29.023438 2.515625 30.640625 C 0.898438 32.261719 -0.0078125 34.460938 0 36.75 L 0 41.375 C 0 46.136719 3.863281 50 8.625 50 L 41.375 50 C 46.132812 49.984375 49.984375 46.132812 50 41.375 L 50 36.75 C 50 31.988281 46.136719 28.125 41.375 28.125 Z M 8.625 28.125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.40625 41.78125 L 12.09375 41.78125 L 12.09375 45.84375 C 12.003906 46.351562 11.5625 46.726562 11.046875 46.726562 C 10.53125 46.726562 10.089844 46.351562 10 45.84375 L 10 34.78125 C 10 34.210938 10.460938 33.75 11.03125 33.75 L 14.40625 33.75 C 15.925781 33.617188 17.390625 34.351562 18.191406 35.648438 C 18.992188 36.945312 18.992188 38.585938 18.191406 39.882812 C 17.390625 41.179688 15.925781 41.914062 14.40625 41.78125 Z M 12.09375 39.6875 L 14.40625 39.6875 C 15.152344 39.78125 15.882812 39.4375 16.289062 38.804688 C 16.691406 38.171875 16.691406 37.359375 16.289062 36.726562 C 15.882812 36.09375 15.152344 35.75 14.40625 35.84375 L 12.09375 35.84375 Z M 12.09375 39.6875 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 20.3125 45.84375 L 20.3125 34.78125 C 20.3125 34.210938 20.773438 33.75 21.34375 33.75 L 23.5625 33.75 C 27.1875 33.75 30.125 36.6875 30.125 40.3125 C 30.125 43.9375 27.1875 46.875 23.5625 46.875 L 21.34375 46.875 C 20.773438 46.875 20.3125 46.414062 20.3125 45.84375 Z M 22.40625 44.78125 L 23.5625 44.78125 C 26.03125 44.78125 28.03125 42.78125 28.03125 40.3125 C 28.03125 37.84375 26.03125 35.84375 23.5625 35.84375 L 22.40625 35.84375 Z M 22.40625 44.78125 "/>\n      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 33.1875 45.84375 L 33.1875 34.78125 C 33.183594 34.476562 33.3125 34.1875 33.542969 33.992188 C 33.769531 33.792969 34.074219 33.703125 34.375 33.75 L 40.625 33.75 C 41.132812 33.839844 41.507812 34.28125 41.507812 34.796875 C 41.507812 35.3125 41.132812 35.753906 40.625 35.84375 L 35.25 35.84375 L 35.25 39.28125 L 39.625 39.28125 C 40.195312 39.28125 40.65625 39.742188 40.65625 40.3125 C 40.65625 40.882812 40.195312 41.34375 39.625 41.34375 L 35.25 41.34375 L 35.25 45.84375 C 35.257812 46.359375 34.882812 46.796875 34.375 46.875 C 34.074219 46.921875 33.769531 46.832031 33.542969 46.632812 C 33.3125 46.4375 33.183594 46.148438 33.1875 45.84375 Z M 33.1875 45.84375 "/>\n      </g>'
        },
        defaultIcon: {
            extension: ".default",
            path: '<g id="surface1">\n      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 3.117188 44.777344 C 1.394531 44.777344 0 43.386719 0 41.671875 L 0 3.484375 C 0 1.769531 1.394531 0.378906 3.117188 0.378906 L 25.792969 0.378906 C 27.164062 0.304688 28.5 0.808594 29.480469 1.765625 L 37.980469 10.230469 C 39.144531 11.242188 39.769531 12.730469 39.683594 14.265625 L 39.683594 41.671875 C 39.683594 43.386719 38.289062 44.777344 36.5625 44.777344 Z M 25.511719 3.203125 L 3.117188 3.203125 C 2.960938 3.203125 2.832031 3.328125 2.832031 3.484375 L 2.832031 41.671875 C 2.832031 41.828125 2.960938 41.957031 3.117188 41.957031 L 36.5625 41.957031 C 36.679688 41.949219 36.785156 41.867188 36.820312 41.757812 L 36.820312 14.492188 L 28.34375 14.492188 C 28.160156 14.539062 27.964844 14.539062 27.777344 14.492188 C 26.480469 14.15625 25.554688 13.007812 25.511719 11.671875 Z M 28.34375 4.640625 L 28.34375 11.671875 C 28.390625 11.683594 28.441406 11.683594 28.488281 11.671875 L 35.402344 11.671875 Z M 28.34375 4.640625 "/>\n      </g>'
        }
    };
    a.MODULES.modals = function(b) {
        function c(c, e) {
            var d = '<div tabIndex="-1" class="fr-modal'.concat(b.opts.theme ? " ".concat(b.opts.theme, "-theme") : "", '"><div class="fr-modal-wrapper">'),
                f = '<button title="'.concat(b.language.translate("Cancel"), '" class="fr-command fr-btn fr-modal-close"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="').concat(a.SVG.close, '"/></svg></button>');
            d += '<div class="fr-modal-head">'.concat(c).concat(f, "</div>");
            d += '<div tabIndex="-1" class="fr-modal-body">'.concat(e, "</div>");
            d += "</div></div>";
            c = h(b.doc.createElement("DIV"));
            c.html(d);
            return c.find("> .fr-modal")
        }

        function d() {
            for (var b in x)
                if (Object.prototype.hasOwnProperty.call(x, b)) {
                    var a = x[b];
                    a && a.$modal && a.$modal.removeData().remove()
                }
            C && C.removeData().remove();
            x = {}
        }

        function f(a, c) {
            if (x[a]) {
                a = x[a].$modal;
                var e = a.data("instance") || b;
                e.events.enableBlur();
                a.hide();
                C.hide();
                h(e.o_doc).find("body").first().removeClass("fr-prevent-scroll fr-mobile");
                a.removeClass("fr-active");
                c || (e.accessibility.restoreSelection(), e.events.trigger("modals.hide"))
            }
        }

        function g(a) {
            if ("string" === typeof a) {
                if (!x[a]) return;
                a = x[a].$modal
            }
            return a && b.node.hasClass(a, "fr-active") && b.core.sameInstance(a) || !1
        }
        var h = b.$;
        b.shared.modals || (b.shared.modals = {});
        var x = b.shared.modals,
            C;
        return {
            _init: function() {
                b.events.on("shared.destroy", d, !0)
            },
            get: function(b) {
                return x[b]
            },
            create: function(e, d, g) {
                d = '<div class="fr-modal-head-line">'.concat(d, "</div>");
                b.shared.$overlay || (b.shared.$overlay = h(b.doc.createElement("DIV")).addClass("fr-overlay"), h("body").first().append(b.shared.$overlay));
                C = b.shared.$overlay;
                b.opts.theme && C.addClass("".concat(b.opts.theme, "-theme"));
                if (!x[e]) {
                    var k = c(d, g);
                    x[e] = {
                        $modal: k,
                        $head: k.find(".fr-modal-head"),
                        $body: k.find(".fr-modal-body")
                    };
                    b.helpers.isMobile() || k.addClass("fr-desktop");
                    h("body").first().append(k);
                    b.events.$on(k, "click", ".fr-modal-close", function() {
                        f(e)
                    }, !0);
                    x[e].$body.css("margin-top", x[e].$head.outerHeight());
                    b.events.$on(k, "keydown", function(c) {
                        var d = c.which;
                        return d === a.KEYCODE.ESC ? (f(e), b.accessibility.focusModalButton(k), !1) : h(c.currentTarget).is("input[type=text], textarea") || d === a.KEYCODE.ARROW_UP || d === a.KEYCODE.ARROW_DOWN || b.keys.isBrowserAction(c) ? !0 : (c.preventDefault(), c.stopPropagation(), !1)
                    }, !0);
                    f(e, !0)
                }
                return x[e]
            },
            show: function(a) {
                x[a] && (a = x[a].$modal, a.data("instance", b), a.show(), C.show(), h(b.o_doc).find("body").first().addClass("fr-prevent-scroll"), b.helpers.isMobile() && h(b.o_doc).find("body").first().addClass("fr-mobile"), a.addClass("fr-active"), b.accessibility.focusModal(a))
            },
            hide: f,
            resize: function(a) {
                if (x[a]) {
                    var c = x[a];
                    a = c.$body;
                    var e = b.o_win.innerHeight,
                        d = c.$modal.find(".fr-modal-wrapper");
                    c = d.outerHeight(!0);
                    d = d.height() - (a.outerHeight(!0) - a.height());
                    e = e - c + d;
                    c = "auto";
                    a.get(0).scrollHeight > e && (c = e);
                    a.height(c)
                }
            },
            isVisible: g,
            areVisible: function(b) {
                for (var a in x)
                    if (Object.prototype.hasOwnProperty.call(x, a) && g(a) && ("undefined" === typeof b || x[a].$modal.data("instance") === b)) return x[a].$modal;
                return !1
            }
        }
    };
    a.MODULES.position = function(b) {
        function a() {
            var a = b.selection.ranges(0).getBoundingClientRect();
            if (0 === a.top && 0 === a.left && 0 === a.width || 0 === a.height) {
                var c = !1;
                0 === b.$el.find(".fr-marker").length && (b.selection.save(), c = !0);
                a = b.$el.find(".fr-marker").first();
                a.css("display", "inline");
                a.css("line-height", "");
                var e = a.offset(),
                    d = a.outerHeight();
                a.css("display", "none");
                a.css("line-height", 0);
                a = {};
                a.left = e && e.left;
                a.width = 0;
                a.height = d;
                a.top = e && e.top - (b.helpers.isMobile() && !b.helpers.isIOS() || b.opts.iframe ? 0 : b.helpers.scrollTop());
                a.right = 1;
                a.bottom = 1;
                a.ok = !0;
                c && b.selection.restore()
            }
            return a
        }

        function c(a, c, e) {
            var d = a.outerHeight(!0);
            if (!b.helpers.isMobile() && b.$tb && a.parent().get(0) !== b.$tb.get(0)) {
                var f = a.parent().offset().top;
                e = c - d - (e || 0);
                a.parent().get(0) === b.$sc.get(0) && (f -= a.parent().position().top);
                var g = b.$sc.get(0).clientHeight;
                f + c + d > b.$sc.offset().top + g && 0 < a.parent().offset().top + e && 0 < e ? e > b.$wp.scrollTop() && (c = e, a.addClass("fr-above")) : a.removeClass("fr-above")
            }
            return c
        }

        function d(a, e, d, f) {
            var g = d.data("container");
            !g || "BODY" === g.get(0).tagName && "static" === g.css("position") || (a && (a -= g.offset().left), e && (e -= g.offset().top), "BODY" !== g.get(0).tagName ? (a && (a += g.get(0).scrollLeft), e && (e += g.get(0).scrollTop)) : "absolute" === g.css("position") && (a && (a += g.position().left), e && (e += g.position().top)));
            if (b.opts.iframe && g && b.$tb && g.get(0) !== b.$tb.get(0)) {
                g = b.helpers.getPX(b.$wp.find(".fr-iframe").css("padding-top"));
                var k = b.helpers.getPX(b.$wp.find(".fr-iframe").css("padding-left"));
                a && (a += b.$iframe.offset().left + k);
                e && (e += b.$iframe.offset().top + g)
            }
            g = a;
            k = d.outerWidth(!0);
            g + k > b.$sc.get(0).clientWidth - 10 && (g = b.$sc.get(0).clientWidth - k - 10);
            0 > g && (g = 10);
            a && d.css("left", g);
            e && d.css("top", c(d, e, f))
        }

        function f(a) {
            var c = m(a),
                e = c.is(".fr-sticky-on"),
                d = c.data("sticky-top"),
                f = c.data("sticky-scheduled");
            if ("undefined" === typeof d) {
                c.data("sticky-top", 0);
                var g = m('<div class="fr-sticky-dummy" style="height: '.concat(c.outerHeight(), 'px;"></div>'));
                b.$box.prepend(g)
            } else b.$box.find(".fr-sticky-dummy").css("height", c.outerHeight());
            b.core.hasFocus() || 0 < b.$tb.findVisible("input:focus").length ? (a = b.helpers.scrollTop(), g = Math.min(Math.max(a - b.$tb.parent().offset().top, 0), b.$tb.parent().outerHeight() - c.outerHeight()), g !== d && g !== f && (clearTimeout(c.data("sticky-timeout")), c.data("sticky-scheduled", g), c.outerHeight() < a - b.$tb.parent().offset().top && c.addClass("fr-opacity-0"), c.data("sticky-timeout", setTimeout(function() {
                var a = b.helpers.scrollTop();
                a = Math.min(Math.max(a - b.$tb.parent().offset().top, 0), b.$tb.parent().outerHeight() - c.outerHeight());
                0 < a && "BODY" === b.$tb.parent().get(0).tagName && (a += b.$tb.parent().position().top);
                a !== d && (c.css("top", Math.max(a, 0)), c.data("sticky-top", a), c.data("sticky-scheduled", a));
                c.removeClass("fr-opacity-0")
            }, 100))), e || (e = b.$tb.parent(), f = e.get(0).offsetWidth - e.get(0).clientWidth, c.css("top", "0"), c.width(e.width() - f), c.addClass("fr-sticky-on"), b.$box.addClass("fr-sticky-box"))) : (clearTimeout(m(a).css("sticky-timeout")), c.css("top", "0"), c.css("position", ""), c.css("width", ""), c.data("sticky-top", 0), c.removeClass("fr-sticky-on"), b.$box.removeClass("fr-sticky-box"))
        }

        function h() {
            b.helpers.requestAnimationFrame()(h);
            if (!1 !== b.events.trigger("position.refresh"))
                for (var a = 0; a < b._stickyElements.length; a++) f(b._stickyElements[a])
        }

        function x() {
            b._stickyElements = [];
            b.helpers.isIOS() ? (h(), b.events.$on(m(b.o_win), "scroll", function() {
                if (b.core.hasFocus())
                    for (var a = 0; a < b._stickyElements.length; a++) {
                        var c = m(b._stickyElements[a]),
                            e = c.parent(),
                            d = b.helpers.scrollTop();
                        c.outerHeight() < d - e.offset().top && (c.addClass("fr-opacity-0"), c.data("sticky-top", -1), c.data("sticky-scheduled", -1))
                    }
            }, !0)) : ("body" !== b.opts.scrollableContainer && b.events.$on(m(b.opts.scrollableContainer), "scroll", C, !0), b.events.$on(m(b.o_win), "scroll", C, !0), b.events.$on(m(b.o_win), "resize", C, !0), b.events.on("initialized", C), b.events.on("focus", C), b.events.$on(m(b.o_win), "resize", "textarea", C, !0));
            b.events.on("destroy", function() {
                b._stickyElements = []
            })
        }

        function C() {
            if (b._stickyElements)
                for (var a = 0; a < b._stickyElements.length; a++) {
                    var c = b._stickyElements[a];
                    if (c.offsetWidth) {
                        c = m(c);
                        var e = c.outerHeight(),
                            d = c.data("sticky-position"),
                            f = m("body" === b.opts.scrollableContainer ? b.o_win : b.opts.scrollableContainer).outerHeight(),
                            g = 0,
                            k = 0;
                        "body" !== b.opts.scrollableContainer && (g = b.$sc.offset().top, k = m(b.o_win).outerHeight() - g - f);
                        var n = "body" === b.opts.scrollableContainer ? b.helpers.scrollTop() : g,
                            h = c.is(".fr-sticky-on");
                        c.data("sticky-parent") || c.data("sticky-parent", c.parent());
                        var x = c.data("sticky-parent"),
                            r = x.offset().top,
                            z = x.outerHeight();
                        c.data("sticky-offset") ? b.$box.find(".fr-sticky-dummy").css("height", "".concat(e, "px")) : (c.data("sticky-offset", !0), c.after('<div class="fr-sticky-dummy" style="height: '.concat(e, 'px;"></div>')));
                        if (!d) {
                            var l = "auto" !== c.css("top") || "auto" !== c.css("bottom");
                            l || c.css("position", "fixed");
                            d = {
                                top: b.node.hasClass(c.get(0), "fr-top"),
                                bottom: b.node.hasClass(c.get(0), "fr-bottom")
                            };
                            l || c.css("position", "");
                            c.data("sticky-position", d);
                            c.data("top", b.node.hasClass(c.get(0), "fr-top") ? c.css("top") : "auto");
                            c.data("bottom", b.node.hasClass(c.get(0), "fr-bottom") ? c.css("bottom") : "auto")
                        }
                        var C = b.helpers.getPX(c.data("top"));
                        l = b.helpers.getPX(c.data("bottom"));
                        C = d.top && r < n + C && r + z - e >= n + C && (b.helpers.isInViewPort(b.$sc.get(0)) || "body" === b.opts.scrollableContainer);
                        e = d.bottom && r + e < n + f - l && r + z > n + f - l;
                        C || e ? (d = x.get(0).offsetWidth - x.get(0).clientWidth, c.css("width", "".concat(x.get(0).getBoundingClientRect().width - d, "px")), h || (c.addClass("fr-sticky-on"), c.removeClass("fr-sticky-off"), c.css("top") && ("auto" !== c.data("top") ? c.css("top", b.helpers.getPX(c.data("top")) + g) : c.data("top", "auto")), c.css("bottom") && ("auto" !== c.data("bottom") ? c.css("bottom", b.helpers.getPX(c.data("bottom")) + k) : c.css("bottom", "auto")))) : b.node.hasClass(c.get(0), "fr-sticky-off") || (c.css("width", ""), c.removeClass("fr-sticky-on"), c.addClass("fr-sticky-off"), c.css("top") && "auto" !== c.data("top") && d.top && c.css("top", 0), c.css("bottom") && "auto" !== c.data("bottom") && d.bottom && c.css("bottom", 0))
                    }
                }
        }
        var m = b.$;
        return {
            _init: function() {
                x()
            },
            forSelection: function(c) {
                var e = a();
                c.css({
                    top: 0,
                    left: 0
                });
                var f = e.top + e.height,
                    g = e.left + e.width / 2 - c.get(0).offsetWidth / 2 + b.helpers.scrollLeft();
                b.opts.iframe || (f += b.helpers.scrollTop());
                d(g, f, c, e.height)
            },
            addSticky: function(a) {
                a.addClass("fr-sticky");
                b.helpers.isIOS() && a.addClass("fr-sticky-ios");
                a.removeClass("fr-sticky");
                b._stickyElements.push(a.get(0))
            },
            refresh: C,
            at: d,
            getBoundingRect: a
        }
    };
    a.MODULES.refresh = function(b) {
        function a(b, a) {
            b.toggleClass("fr-disabled", a).attr("aria-disabled", a)
        }

        function c(a) {
            var c = b.$tb.find('.fr-more-toolbar[data-name="'.concat(a.attr("data-group-name"), '"]'));
            a = d(a, c);
            "rtl" === b.opts.direction ? c.css("padding-right", a) : c.css("padding-left", a)
        }

        function d(a, c) {
            var e = 0;
            c = c.find("> .fr-command, > .fr-btn-wrap");
            c.each(function(b, a) {
                e += f(a).outerWidth(!0)
            });
            var d = "rtl" === b.opts.direction ? b.$tb.outerWidth() - a.offset().left + b.$tb.offset().left - (e + a.outerWidth() + 0 * c.length) / 2 : a.offset().left - b.$tb.offset().left - (e - a.outerWidth() + 0 * c.length) / 2;
            d + e + 0 * c.length > b.$tb.outerWidth() && (d -= (e + 0 * c.length - a.outerWidth()) / 2);
            0 > d && (d = 0);
            return d
        }
        var f = b.$;
        return {
            undo: function(c) {
                a(c, !b.undo.canDo())
            },
            redo: function(c) {
                a(c, !b.undo.canRedo())
            },
            outdent: function(c) {
                if (b.node.hasClass(c.get(0), "fr-no-refresh")) return !1;
                for (var e = b.selection.blocks(), d = 0; d < e.length; d++) {
                    var g = "rtl" === b.opts.direction || "rtl" === f(e[d]).css("direction") ? "margin-right" : "margin-left",
                        k = e[0].parentElement;
                    if ("UL" != k.parentNode.tagName && "OL" != k.parentNode.tagName && "LI" != k.parentNode.tagName || e[0].previousSibling && "none" == k.parentNode.style.listStyleType) return a(c, !0), !0;
                    if ("LI" === e[d].tagName || "LI" === e[d].parentNode.tagName || 0 < b.helpers.getPX(f(e[d]).css(g))) return a(c, !1), !0
                }
                a(c, !0)
            },
            indent: function(c) {
                if (b.node.hasClass(c.get(0), "fr-no-refresh")) return !1;
                for (var e = b.selection.blocks(), d = 0; d < e.length; d++) {
                    for (var f = e[d].previousSibling; f && f.nodeType === Node.TEXT_NODE && 0 === f.textContent.length;) f = f.previousSibling;
                    if ("LI" !== e[d].tagName || f) return a(c, !1), !0;
                    a(c, !0)
                }
            },
            moreText: c,
            moreParagraph: c,
            moreMisc: c,
            moreRich: c
        }
    };
    Object.assign(a.DEFAULTS, {
        attribution: !0,
        toolbarBottom: !1,
        toolbarButtons: null,
        toolbarButtonsXS: null,
        toolbarButtonsSM: null,
        toolbarButtonsMD: null,
        toolbarContainer: null,
        toolbarInline: !1,
        toolbarSticky: !0,
        toolbarStickyOffset: 0,
        toolbarVisibleWithoutSelection: !1
    });
    a.TOOLBAR_BUTTONS = {
        moreText: {
            buttons: "bold italic underline strikeThrough subscript superscript fontFamily fontSize textColor backgroundColor inlineClass inlineStyle clearFormatting".split(" ")
        },
        moreParagraph: {
            buttons: "alignLeft alignCenter formatOLSimple alignRight alignJustify formatOL formatUL paragraphFormat paragraphStyle lineHeight outdent indent quote".split(" ")
        },
        moreRich: {
            buttons: "insertLink insertFiles insertImage insertVideo insertTable emoticons fontAwesome specialCharacters embedly insertFile insertHR".split(" ")
        },
        moreMisc: {
            buttons: "undo redo fullscreen print getPDF spellChecker selectAll html help".split(" "),
            align: "right",
            buttonsVisible: 2
        }
    };
    a.TOOLBAR_BUTTONS_MD = null;
    a.TOOLBAR_BUTTONS_SM = {};
    a.TOOLBAR_BUTTONS_SM.moreText = Object.assign({}, a.TOOLBAR_BUTTONS.moreText, {
        buttonsVisible: 2
    });
    a.TOOLBAR_BUTTONS_SM.moreParagraph = Object.assign({}, a.TOOLBAR_BUTTONS.moreParagraph, {
        buttonsVisible: 2
    });
    a.TOOLBAR_BUTTONS_SM.moreRich = Object.assign({}, a.TOOLBAR_BUTTONS.moreRich, {
        buttonsVisible: 2
    });
    a.TOOLBAR_BUTTONS_SM.moreMisc = Object.assign({}, a.TOOLBAR_BUTTONS.moreMisc, {
        buttonsVisible: 2
    });
    a.TOOLBAR_BUTTONS_XS = {};
    a.TOOLBAR_BUTTONS_XS.moreText = Object.assign({}, a.TOOLBAR_BUTTONS.moreText, {
        buttonsVisible: 0
    });
    a.TOOLBAR_BUTTONS_XS.moreParagraph = Object.assign({}, a.TOOLBAR_BUTTONS.moreParagraph, {
        buttonsVisible: 0
    });
    a.TOOLBAR_BUTTONS_XS.moreRich = Object.assign({}, a.TOOLBAR_BUTTONS.moreRich, {
        buttonsVisible: 0
    });
    a.TOOLBAR_BUTTONS_XS.moreMisc = Object.assign({}, a.TOOLBAR_BUTTONS.moreMisc, {
        buttonsVisible: 2
    });
    a.POWERED_BY = '<a id="fr-logo" href="https://froala.com/wysiwyg-editor" target="_blank" title="Froala WYSIWYG HTML Editor"><span>Powered by</span><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 822.8 355.33"><defs><style>.fr-logo{fill:#b1b2b7;}</style></defs><title>Froala</title><path class="fr-logo" d="M123.58,78.65A16.16,16.16,0,0,0,111.13,73H16.6C7.6,73,0,80.78,0,89.94V128.3a16.45,16.45,0,0,0,32.9,0V104.14h78.5A15.63,15.63,0,0,0,126.87,91.2,15.14,15.14,0,0,0,123.58,78.65Z"/><path class="fr-logo" d="M103.54,170a16.05,16.05,0,0,0-11.44-4.85H15.79A15.81,15.81,0,0,0,0,180.93v88.69a16.88,16.88,0,0,0,5,11.92,16,16,0,0,0,11.35,4.7h.17a16.45,16.45,0,0,0,16.41-16.6v-73.4H92.2A15.61,15.61,0,0,0,107.89,181,15.1,15.1,0,0,0,103.54,170Z"/><path class="fr-logo" d="M233,144.17c-5.29-6.22-16-7.52-24.14-7.52-16.68,0-28.72,7.71-36.5,23.47v-5.67a16.15,16.15,0,1,0-32.3,0v115.5a16.15,16.15,0,1,0,32.3,0v-38.7c0-19.09,3.5-63.5,35.9-63.5a44.73,44.73,0,0,1,5.95.27h.12c12.79,1.2,20.06-2.73,21.6-11.69C236.76,151.48,235.78,147.39,233,144.17Z"/><path class="fr-logo" d="M371.83,157c-13.93-13.11-32.9-20.33-53.43-20.33S279,143.86,265.12,157c-14.67,13.88-22.42,32.82-22.42,54.77,0,21.68,8,41.28,22.4,55.2,13.92,13.41,32.85,20.8,53.3,20.8s39.44-7.38,53.44-20.79c14.55-13.94,22.56-33.54,22.56-55.21S386.39,170.67,371.83,157Zm-9.73,54.77c0,25.84-18.38,44.6-43.7,44.6s-43.7-18.76-43.7-44.6c0-25.15,18.38-43.4,43.7-43.4S362.1,186.59,362.1,211.74Z"/><path class="fr-logo" d="M552.7,138.14a16.17,16.17,0,0,0-16,16.3v1C526.41,143.85,509,136.64,490,136.64c-19.83,0-38.19,7.24-51.69,20.4C424,171,416.4,190,416.4,212c0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,552.7,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C513.73,168.34,536.4,183.55,536.4,211.74Z"/><path class="fr-logo" d="M623.5,61.94a16.17,16.17,0,0,0-16,16.3v191.7a16.15,16.15,0,1,0,32.3,0V78.24A16.32,16.32,0,0,0,623.5,61.94Z"/><path class="fr-logo" d="M806.5,138.14a16.17,16.17,0,0,0-16,16.3v1c-10.29-11.63-27.74-18.84-46.7-18.84-19.83,0-38.19,7.24-51.69,20.4-14.33,14-21.91,33-21.91,55,0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,806.5,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C767.53,168.34,790.2,183.55,790.2,211.74Z"/></svg></a>';
    a.MODULES.toolbar = function(b) {
        function c(b) {
            var a = {};
            if (Array.isArray(b)) {
                if (!Array.isArray(b[0])) {
                    for (var c = [], e = [], f = 0; f < b.length; f++) "|" === b[f] || "-" === b[f] ? (0 < e.length && c.push(e), e = []) : e.push(b[f]);
                    0 < e.length && c.push(e);
                    b = c
                }
                b.forEach(function(b, c) {
                    a["group".concat(c + 1)] = {
                        buttons: b
                    }
                });
                a.showMoreButtons = !1
            } else "object" !== d(b) || Array.isArray(b) || (a = b, a.showMoreButtons = !0);
            return a
        }

        function f() {
            var a = b.button.buildGroup(k());
            b.$tb.append(a);
            h();
            b.button.bindCommands(b.$tb)
        }

        function k() {
            var a = b.helpers.screenSize();
            M = a;
            return S[a]
        }

        function g() {
            for (var a = b.$tb.find(".fr-btn-grp, .fr-more-toolbar"), c = function(b) {
                    var c = v(a[b]);
                    c.children().each(function(b, a) {
                        c.before(a)
                    });
                    c.remove()
                }, e = 0; e < a.length; e++) c(e)
        }

        function h() {
            for (var a = b.$tb.find(".fr-more-toolbar"), c = "", e = 0; e < a.length; e++) {
                var d = v(a[e]);
                d.hasClass("fr-expanded") ? function() {
                    var a = b.helpers.getPX(d.css("padding-left")),
                        e = d.find("> .fr-command, > .fr-btn-wrap"),
                        f = v(e[0]),
                        g = b.helpers.getPX(f.css("margin-top")),
                        k = b.helpers.getPX(f.css("margin-bottom"));
                    e.each(function(b, c) {
                        a += v(c).outerWidth(!0)
                    });
                    e = b.$tb.outerWidth();
                    a > e && (e = Math.floor(a / b.$tb.outerWidth()), a += a / d[0].childElementCount * e, e = Math.ceil(a / b.$tb.outerWidth()), f = (b.helpers.getPX(f.css("height")) + g + k) * e, d.css("height", f), c = f)
                }() : d.css("height", "")
            }
            b.$tb.css("padding-bottom", c)
        }

        function x() {
            if (M !== b.helpers.screenSize()) {
                var c = k(),
                    e = v(),
                    d = v();
                b.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-grp > .fr-btn-wrap > .fr-command, .fr-more-toolbar > .fr-btn-wrap > .fr-command").addClass("fr-hidden");
                g();
                for (var f in c) {
                    var n = c[f];
                    if (n.buttons) {
                        var x = void 0,
                            q = 0,
                            C = 3,
                            m = v('<div class="fr-btn-grp fr-float-'.concat(c[f].align ? c[f].align : "left", '"></div>'));
                        c.showMoreButtons && (x = v('<div class="fr-more-toolbar"></div>').data("name", "".concat(f, "-").concat(b.id)));
                        for (var r = 0; r < n.buttons.length; r++) {
                            void 0 !== n.buttonsVisible && (C = n.buttonsVisible);
                            var t = b.$tb.find('> .fr-command[data-cmd="' + n.buttons[r] + '"], > div.fr-btn-wrap > .fr-command[data-cmd="' + n.buttons[r] + '"]'),
                                y = null;
                            b.node.hasClass(t.next().get(0), "fr-dropdown-menu") && (y = t.next());
                            b.node.hasClass(t.next().get(0), "fr-options") && (t.removeClass("fr-hidden"), t.next().removeClass("fr-hidden"), t = t.parent());
                            t.removeClass("fr-hidden");
                            c.showMoreButtons && q >= C ? (x.append(t), y && x.append(y)) : (m.append(t), y && m.append(y));
                            q++
                        }
                        c.showMoreButtons && q > C && (n = b.$tb.find('.fr-command[data-cmd="'.concat(f, '"]')), 0 < n.length ? n.removeClass("fr-hidden fr-open") : (n = f, q = a.COMMANDS[n], q.more_btn = !0, n = v(b.button.build(n, q, !0)), b.button.addButtons(n)), m.append(n));
                        e.push(m);
                        c.showMoreButtons && d.push(x)
                    }
                }
                b.opts.toolbarBottom ? (b.$tb.append(d), b.$tb.find(".fr-newline").remove(), b.$tb.append('<div class="fr-newline"></div>'), b.$tb.append(e)) : (b.$tb.append(e), b.$tb.find(".fr-newline").remove(), b.$tb.append('<div class="fr-newline"></div>'), b.$tb.append(d));
                b.$tb.removeClass("fr-toolbar-open");
                b.$box.removeClass("fr-toolbar-open");
                b.events.trigger("codeView.toggle")
            }
            h()
        }

        function C(c, e) {
            setTimeout(function() {
                c && c.which == a.KEYCODE.ESC || !b.selection.inEditor() || !b.core.hasFocus() || b.popups.areVisible() || "false" == v(b.selection.blocks()[0]).closest("table").attr("contenteditable") || !b.opts.toolbarVisibleWithoutSelection && (b.selection.isCollapsed() || b.keys.isIME()) && !e || (b.$tb.data("instance", b), !1 !== b.events.trigger("toolbar.show", [c]) && (b.$tb.show(), b.opts.toolbarContainer || b.position.forSelection(b.$tb), 1 < b.opts.zIndex ? b.$tb.css("z-index", b.opts.zIndex + 1) : b.$tb.css("z-index", null)))
            }, 0)
        }

        function m(a) {
            if (a && "blur" === a.type && document.activeElement === b.el) return !1;
            if (a && "keydown" === a.type && b.keys.ctrlKey(a) || b.button.getButtons(".fr-dropdown.fr-active").next().find(b.o_doc.activeElement).length) return !0;
            !1 !== b.events.trigger("toolbar.hide") && b.$tb.hide()
        }

        function y(c) {
            clearTimeout(V);
            c && c.which === a.KEYCODE.ESC || (V = setTimeout(C, b.opts.typingTimer))
        }

        function t() {
            b.events.on("window.mousedown", m);
            b.events.on("keydown", m);
            b.events.on("blur", m);
            b.events.$on(b.$tb, "transitionend", ".fr-more-toolbar", function() {
                b.position.forSelection(b.$tb)
            });
            if (!b.helpers.isMobile()) b.events.on("window.mouseup", C);
            if (b.helpers.isMobile()) b.helpers.isIOS() || (b.events.on("window.touchend", C), b.browser.mozilla && setInterval(C, 200));
            else b.events.on("window.keyup", y);
            b.events.on("keydown", function(b) {
                b && b.which === a.KEYCODE.ESC && m()
            });
            b.events.on("keydown", function(b) {
                if (b.which === a.KEYCODE.ALT) return b.stopPropagation(), !1
            }, !0);
            b.events.$on(b.$wp, "scroll.toolbar", C);
            b.events.on("commands.after", C);
            b.helpers.isMobile() && (b.events.$on(b.$doc, "selectionchange", y), b.events.$on(b.$doc, "orientationchange", C))
        }

        function w() {
            b.$tb.html("").removeData().remove();
            b.$tb = null;
            b.$second_tb && (b.$second_tb.html("").removeData().remove(), b.$second_tb = null)
        }

        function G() {
            b.$box.removeClass("fr-top fr-bottom fr-inline fr-basic");
            b.$box.find(".fr-sticky-dummy").remove()
        }

        function L() {
            b.opts.theme && b.$tb.addClass("".concat(b.opts.theme, "-theme"));
            1 < b.opts.zIndex && b.$tb.css("z-index", b.opts.zIndex + 1);
            "auto" !== b.opts.direction && b.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(b.opts.direction));
            b.helpers.isMobile() ? b.$tb.addClass("fr-mobile") : b.$tb.addClass("fr-desktop");
            b.opts.toolbarContainer ? (b.opts.toolbarInline && (t(), m()), b.opts.toolbarBottom ? b.$tb.addClass("fr-bottom") : b.$tb.addClass("fr-top")) : b.opts.toolbarInline ? (b.$sc.append(b.$tb), b.$tb.data("container", b.$sc), b.$tb.addClass("fr-inline"), t(), b.opts.toolbarBottom = !1) : (b.opts.toolbarBottom && !b.helpers.isIOS() ? (b.$box.append(b.$tb), b.$tb.addClass("fr-bottom"), b.$box.addClass("fr-bottom")) : (b.opts.toolbarBottom = !1, b.$box.prepend(b.$tb), b.$tb.addClass("fr-top"), b.$box.addClass("fr-top")), b.$tb.addClass("fr-basic"), b.opts.toolbarSticky && (b.opts.toolbarStickyOffset && (b.opts.toolbarBottom ? b.$tb.css("bottom", b.opts.toolbarStickyOffset) : b.$tb.css("top", b.opts.toolbarStickyOffset)), b.position.addSticky(b.$tb)));
            f();
            b.events.$on(v(b.o_win), "resize", x);
            b.events.$on(v(b.o_win), "orientationchange", x);
            b.accessibility.registerToolbar(b.$tb);
            b.events.$on(b.$tb, "".concat(b._mousedown, " ").concat(b._mouseup), function(a) {
                var c = a.originalEvent ? a.originalEvent.target || a.originalEvent.originalTarget : null;
                if (c && "INPUT" !== c.tagName && !b.edit.isDisabled()) return a.stopPropagation(), a.preventDefault(), !1
            }, !0);
            b.helpers.isMobile() && b.events.$on(b.$tb, "click", function() {
                b.popups.areVisible().length || b.$el.focus()
            });
            b.events.$on(b.$tb, "transitionend", ".fr-more-toolbar", function() {
                b.$box.hasClass("fr-fullscreen") && (b.opts.height = b.o_win.innerHeight - (b.opts.toolbarInline ? 0 : b.$tb.outerHeight() + (b.$second_tb ? b.$second_tb.outerHeight() : 0)), b.size.refresh())
            })
        }

        function q() {
            b.events.on("shortcut", function(a, c, e) {
                var d;
                c && !e ? d = b.$tb.find('.fr-command[data-cmd="'.concat(c, '"]')) : c && e && (d = b.$tb.find('.fr-command[data-cmd="'.concat(c, '"][data-param1="').concat(e, '"]')));
                if (d.length && (a.preventDefault(), a.stopPropagation(), d.parents(".fr-toolbar").data("instance", b), "keydown" === a.type)) return b.button.exec(d), !1
            })
        }
        var v = b.$,
            S = [];
        S[a.XS] = c(b.opts.toolbarButtonsXS || b.opts.toolbarButtons || a.TOOLBAR_BUTTONS_XS || a.TOOLBAR_BUTTONS || []);
        S[a.SM] = c(b.opts.toolbarButtonsSM || b.opts.toolbarButtons || a.TOOLBAR_BUTTONS_SM || a.TOOLBAR_BUTTONS || []);
        S[a.MD] = c(b.opts.toolbarButtonsMD || b.opts.toolbarButtons || a.TOOLBAR_BUTTONS_MD || a.TOOLBAR_BUTTONS || []);
        S[a.LG] = c(b.opts.toolbarButtons || a.TOOLBAR_BUTTONS || []);
        var M, V = null,
            r = !1;
        return {
            _init: function() {
                b.$sc = v(b.opts.scrollableContainer).first();
                if (!b.$wp) return !1;
                b.opts.toolbarInline || b.opts.toolbarBottom || (b.$second_tb = v(b.doc.createElement("div")).attr("class", "fr-second-toolbar"), b.$box.append(b.$second_tb), (!1 !== b.ul || b.opts.attribution) && b.$second_tb.prepend(a.POWERED_BY));
                b.opts.toolbarContainer ? (b.shared.$tb ? (b.$tb = b.shared.$tb, b.opts.toolbarInline && t()) : (b.shared.$tb = v(b.doc.createElement("DIV")), b.shared.$tb.addClass("fr-toolbar"), b.$tb = b.shared.$tb, v(b.opts.toolbarContainer).append(b.$tb), L(), b.$tb.data("instance", b)), b.opts.toolbarInline ? b.$box.addClass("fr-inline") : b.$box.addClass("fr-basic"), b.events.on("focus", function() {
                    b.$tb.data("instance", b)
                }, !0), b.opts.toolbarInline = !1) : b.opts.toolbarInline ? (b.$box.addClass("fr-inline"), b.shared.$tb ? (b.$tb = b.shared.$tb, t()) : (b.shared.$tb = v(b.doc.createElement("DIV")), b.shared.$tb.addClass("fr-toolbar"), b.$tb = b.shared.$tb, L())) : (b.$box.addClass("fr-basic"), b.$tb = v(b.doc.createElement("DIV")), b.$tb.addClass("fr-toolbar"), L(), b.$tb.data("instance", b));
                b.events.on("destroy", G, !0);
                b.events.on(b.opts.toolbarInline || b.opts.toolbarContainer ? "shared.destroy" : "destroy", w, !0);
                b.events.on("edit.on", function() {
                    b.$tb.removeClass("fr-disabled").removeAttr("aria-disabled")
                });
                b.events.on("edit.off", function() {
                    b.$tb.addClass("fr-disabled").attr("aria-disabled", !0)
                });
                q()
            },
            hide: m,
            show: function() {
                if (!1 === b.events.trigger("toolbar.show")) return !1;
                b.$tb.show()
            },
            showInline: C,
            disable: function() {
                !r && b.$tb && (b.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled", !0), r = !0)
            },
            enable: function() {
                r && b.$tb && (b.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled", !1), r = !1);
                b.button.bulkRefresh()
            },
            setMoreToolbarsHeight: h
        }
    };
    var M = ["scroll", "wheel", "touchmove", "touchstart", "touchend"],
        R = ["webkit", "moz", "ms", "o"],
        X = ["transitionend"],
        v = document.createElement("div").style,
        m = "Webkit Moz ms O css style".split(" "),
        t = {
            visibility: "hidden",
            display: "block"
        },
        L = ["focus", "blur", "click"],
        y = {},
        S = function(b, a) {
            return {
                altKey: b.altKey,
                bubbles: b.bubbles,
                cancelable: b.cancelable,
                changedTouches: b.changedTouches,
                ctrlKey: b.ctrlKey,
                detail: b.detail,
                eventPhase: b.eventPhase,
                metaKey: b.metaKey,
                pageX: b.pageX,
                pageY: b.pageY,
                shiftKey: b.shiftKey,
                view: b.view,
                "char": b["char"],
                key: b.key,
                keyCode: b.keyCode,
                button: b.button,
                buttons: b.buttons,
                clientX: b.clientX,
                clientY: b.clientY,
                offsetX: b.offsetX,
                offsetY: b.offsetY,
                pointerId: b.pointerId,
                pointerType: b.pointerType,
                screenX: b.screenX,
                screenY: b.screenY,
                targetTouches: b.targetTouches,
                toElement: b.toElement,
                touches: b.touches,
                type: b.type,
                which: b.which,
                target: b.target,
                currentTarget: a,
                originalEvent: b,
                stopPropagation: function() {
                    b.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    b.stopImmediatePropagation()
                },
                preventDefault: function() {
                    -1 === M.indexOf(b.type) && b.preventDefault()
                }
            }
        },
        w = function(b, a) {
            return function(c) {
                var e = c.target;
                if (a)
                    for (a = x(a); e && e !== this;) e.matches && e.matches(x(a)) && b.call(e, S(c, e)), e = e.parentNode;
                else {
                    var d = e;
                    (d.ownerDocument && d.ownerDocument.body.contains(d) || "#document" === d.nodeName || "HTML" === d.nodeName || d === window) && b.call(e, S(c, e))
                }
            }
        },
        f = function(b, a) {
            return new oa(b, a)
        },
        x = function(b) {
            return b && "string" == typeof b ? b.replace(/^\s*>/g, ":scope >").replace(/,\s*>/g, ", :scope >") : b
        },
        C = function(b) {
            return "function" === typeof b && "number" !== typeof b.nodeType
        },
        G = f;
    f.fn = f.prototype = {
        constructor: f,
        length: 0,
        contains: function(b) {
            if (!b) return !1;
            if (Array.isArray(b)) {
                for (var a = 0; a < b.length; a++)
                    if (this.contains(b[a]) && this != b[a]) return !0;
                return !1
            }
            for (a = 0; a < this.length; a++)
                for (var c = b; c;) {
                    if (c == this[a] || c[0] && c[0].isEqualNode(this[a])) return !0;
                    c = c.parentNode
                }
            return !1
        },
        findVisible: function(b) {
            b = this.find(b);
            for (var a = b.length - 1; 0 <= a; a--) G(b[a]).isVisible() || b.splice(a, 1);
            return b
        },
        formatParams: function(b) {
            var a = "".concat(Object.keys(b).map(function(a) {
                return "".concat(a, "=").concat(encodeURIComponent(b[a]))
            }).join("&"));
            return a ? a : ""
        },
        ajax: function(b) {
            var a = new XMLHttpRequest,
                c = this.formatParams(b.data);
            "GET" === b.method.toUpperCase() && (b.url = c ? b.url + "?" + c : b.url);
            a.open(b.method, b.url, !0);
            b.withCredentials && (a.withCredentials = !0);
            b.crossDomain && a.setRequestHeader("Access-Control-Allow-Origin", "*");
            for (var d in b.headers) Object.prototype.hasOwnProperty.call(b.headers, d) && a.setRequestHeader(d, b.headers[d]);
            Object.prototype.hasOwnProperty.call(b.headers, "Content-Type") || ("json" === b.dataType ? a.setRequestHeader("Content-Type", "application/json") : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"));
            a.onload = function() {
                if (200 == a.status) {
                    var c = a.responseText;
                    "json" === b.dataType && (c = JSON.parse(c));
                    b.done(c, a.status, a)
                } else b.fail(a)
            };
            a.send(c)
        },
        prevAll: function() {
            var b = G();
            if (!this[0]) return b;
            for (var a = this[0]; a && a.previousSibling;) a = a.previousSibling, b.push(a);
            return b
        },
        index: function(b) {
            return b ? "string" === typeof b ? [].indexOf.call(G(b), this[0]) : [].indexOf.call(this, b.length ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        isVisible: function() {
            return this[0] ? !!(this[0].offsetWidth || this[0].offsetHeight || this[0].getClientRects().length) : !1
        },
        toArray: function() {
            return [].slice.call(this)
        },
        get: function(b) {
            return null == b ? [].slice.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = f.merge(this.constructor(), b);
            b.prevObject = this;
            return b
        },
        wrapAll: function(b) {
            this[0] && (C(b) && (b = b.call(this[0])), b = f(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this));
            return this
        },
        wrapInner: function(b) {
            if ("string" === typeof b) {
                for (var a = b.split(" "), c = 0; c < a.length && 0 === a[c].trim().length;) c++;
                c < a.length && (G(b).length && a[c].trim() === G(b)[0].tagName && (b = document.createElement(a[c].trim())), c++);
                if ("string" !== typeof b)
                    for (var d = G(b); c < a.length; c++) {
                        a[c] = a[c].trim();
                        var f = a[c].split("=");
                        d.attr(f[0], f[1].replace('"', ""))
                    }
            }
            for (; this[0].firstChild && this[0].firstChild !== b && "string" !== typeof b;) b.appendChild(this[0].firstChild)
        },
        wrap: function(b) {
            var a = C(b);
            return this.each(function(c) {
                G(this).wrapAll(a ? b.call(this, c) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                this.nodeName && this.nodeName.toLowerCase() === name.toLowerCase() || f(this).replaceWith(this.childNodes)
            })
        },
        grep: function(b, a, c) {
            for (var e = [], d = 0, f = b.length, n = !c; d < f; d++) c = !a(b[d], d), c !== n && e.push(b[d]);
            return e
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(a, c) {
                return b.call(a, c, a)
            }))
        },
        slice: function() {
            return this.pushStack([].slice.apply(this, arguments))
        },
        each: function(b) {
            if (this.length)
                for (var a = 0; a < this.length && !1 !== b.call(this[a], a, this[a]); a++);
            return this
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var a = this.length;
            b = +b + (0 > b ? a : 0);
            return this.pushStack(0 <= b && b < a ? [this[b]] : [])
        },
        empty: function() {
            for (var b = 0; b < this.length; b++) this[b].innerHTML = ""
        },
        contents: function() {
            for (var b = G(), a = 0; a < this.length; a++)
                for (var c = this[a].childNodes, d = 0; d < c.length; d++) b.push(c[d]);
            return b
        },
        attr: function(b, a) {
            if ("object" === d(b)) {
                for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && null !== b[c] && this.attr(c, b[c]);
                return this
            }
            if ("undefined" !== typeof a) {
                if ("checked" === b)
                    for (b = 0; b < this.length; b++) this[b].checked = a;
                else if ("tagName" === b)
                    for (b = 0; b < this.length; b++) this[b].tagName = a;
                else
                    for (c = 0; c < this.length; c++) this[c].setAttribute(b, a);
                return this
            }
            if (0 !== this.length && (this[0].getAttribute || "checked" === b)) return "checked" === b ? this[0].checked : "tagName" === b ? this[0].tagName : this[0].getAttribute(b)
        },
        removeAttr: function(b) {
            for (var a = 0; a < this.length; a++) this[a].removeAttribute && this[a].removeAttribute(b);
            return this
        },
        hide: function() {
            this.css("display", "none");
            return this
        },
        show: function() {
            this.css("display", "block");
            return this
        },
        focus: function() {
            this.length && this[0].focus();
            return this
        },
        blur: function() {
            this.length && this[0].blur();
            return this
        },
        data: function(b, a) {
            if ("undefined" !== typeof a) {
                for (var c = 0; c < this.length; c++) this[c]["data-" +
                    b
                ] = a, "object" !== d(a) && "function" !== typeof a && this[c].setAttribute && this[c].setAttribute("data-" + b, a);
                return this
            }
            if ("undefined" !== typeof a) return this.attr("data-" + b, a);
            if (0 !== this.length)
                for (a = 0; a < this.length; a++)
                    if (c = this[a]["data-" + b], ("undefined" === typeof c || null === c) && this[a].getAttribute && (c = this[a].getAttribute("data-" + b)), "undefined" != typeof c && null != c) return c
        },
        removeData: function(a) {
            for (var b = 0; b < this.length; b++) this[b].removeAttribute && this[b].removeAttribute("data-" + a), this[b]["data-" +
                a
            ] = null;
            return this
        },
        getCorrectStyleName: function(a) {
            if (!y[a]) {
                var b;
                a in v && (b = a);
                for (var c = a[0].toUpperCase() + a.slice(1), d = m.length; d--;) a = m[d] + c, a in v && (b = a);
                y[a] = b
            }
            return y[a]
        },
        css: function(a, c) {
            if ("undefined" !== typeof c) {
                if (0 === this.length) return this;
                ("string" !== typeof c || "" === c.trim() || isNaN(c)) && "number" !== typeof c || !/(margin)|(padding)|(height)|(width)|(top)|(left)|(right)|(bottom)/gi.test(a) || /(line-height)/gi.test(a) || (c += "px");
                for (var b = 0; b < this.length; b++) a = G(this).getCorrectStyleName(a), this[b].style[a] = c;
                return this
            }
            if ("string" == typeof a) {
                if (0 === this.length) return;
                c = this[0].ownerDocument || document;
                c = c.defaultView || c.parentWindow;
                a = G(this).getCorrectStyleName(a);
                return c.getComputedStyle(this[0])[a]
            }
            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && this.css(b, a[b]);
            return this
        },
        toggleClass: function(a, c) {
            if (1 < a.split(" ").length) {
                a = a.split(" ");
                for (var b = 0; b < a.length; b++) this.toggleClass(a[b], c);
                return this
            }
            for (b = 0; b < this.length; b++) "undefined" === typeof c ? this[b].classList.contains(a) ? this[b].classList.remove(a) : this[b].classList.add(a) : c ? this[b].classList.contains(a) || this[b].classList.add(a) : this[b].classList.contains(a) && this[b].classList.remove(a);
            return this
        },
        addClass: function(a) {
            if (0 === a.length) return this;
            if (1 < a.split(" ").length) {
                a = a.split(" ");
                for (var b = 0; b < a.length; b++) this.addClass(a[b]);
                return this
            }
            for (b = 0; b < this.length; b++) this[b].classList.add(a);
            return this
        },
        removeClass: function(a) {
            if (1 < a.split(" ").length) {
                a = a.split(" ");
                for (var b = 0; b < a.length; b++) a[b] = a[b].trim(), a[b].length && this.removeClass(a[b]);
                return this
            }
            for (b = 0; b < this.length; b++) a.length && this[b].classList.remove(a);
            return this
        },
        getClass: function(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        },
        stripAndCollapse: function(a) {
            return (a.match(/[^\x20\t\r\n\f]+/g) || []).join(" ")
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + G(this).stripAndCollapse(G(this).getClass(b)) + " ").indexOf(a)) return !0;
            return !1
        },
        scrollTop: function(a) {
            if ("undefined" !== typeof a)
                for (var b = 0; b < this.length; b++) this[b] === document ? window.scrollTo(document.documentElement.scrollLeft, a) : this[b].scrollTop = a;
            else if (0 !== this.length) return this[0] === document ? document.documentElement.scrollTop : this[0].scrollTop
        },
        scrollLeft: function(a) {
            if ("undefined" !== typeof a)
                for (var b = 0; b < this.length; b++) this[b] === document ? window.scrollTo(a, document.documentElement.scrollTop) : this[b].scrollLeft = a;
            else if (0 !== this.length) return this[0] === document ? document.documentElement.scrollLeft : this[0].scrollLeft
        },
        on: function(a, c, d) {
            if (1 < a.split(" ").length) {
                for (var b = a.split(" "), e = 0; e < b.length; e++)
                    if (-1 !== X.indexOf(a))
                        for (var f = 0; f < R.length; f++) this.on(R[f] + a[0].toUpperCase() + a.slice(1), c, d);
                    else this.on(b[e], c, d);
                return this
            }
            d = "function" === typeof c ? w(c, null) : w(d, c);
            for (c = 0; c < this.length; c++) b = G(this[c]), b.data("events") || b.data("events", []), b.data("events").push([a, d]), e = a.split("."), e = e[0], 0 <= M.indexOf(e) ? b.get(0).addEventListener(e, d, {
                passive: !0
            }) : b.get(0).addEventListener(e, d)
        },
        off: function(a) {
            if (1 < a.split(" ").length) {
                a = a.split(" ");
                for (var b = 0; b < a.length; b++) this.off(a[b]);
                return this
            }
            for (b = 0; b < this.length; b++) {
                var c = G(this[b]);
                if (c.data("events")) {
                    var d = a.split(".");
                    d = d[0];
                    for (var f = c.data("events") || [], h = f.length - 1; 0 <= h; h--) {
                        var x = f[h];
                        x[0] == a && (c.get(0).removeEventListener(d, x[1]), f.splice(h, 1))
                    }
                }
            }
        },
        trigger: function(a) {
            for (var b = 0; b < this.length; b++) {
                if ("function" === typeof Event) var c = 0 <= a.search(/^mouse/g) ? new MouseEvent(a, {
                    view: window,
                    cancelable: !0,
                    bubbles: !0
                }) : new Event(a);
                else 0 <= a.search(/^mouse/g) ? (c = document.createEvent("MouseEvents"), c.initMouseEvent(a, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null)) : (c = document.createEvent("Event"), c.initEvent(a, !0, !0));
                if (0 <= L.indexOf(a) && "function" === typeof this[b][a]) this[b][a]();
                else this[b].dispatchEvent(c)
            }
        },
        triggerHandler: function() {},
        val: function(a) {
            if ("undefined" != typeof a) {
                for (var b = 0; b < this.length; b++) this[b].value = a;
                return this
            }
            return this[0].value
        },
        siblings: function() {
            return G(this[0]).parent().children().not(this)
        },
        find: function(a) {
            var b = G();
            if ("string" !== typeof a) {
                for (var c = 0; c < a.length; c++)
                    for (var f = 0; f < this.length; f++)
                        if (this[f] !== a[c] && G(this[f]).contains(a[c])) {
                            b.push(a[c]);
                            break
                        }
                return b
            }
            a = x(a);
            for (c = 0; c < this.length; c++)
                if (this[c].querySelectorAll) {
                    f = [];
                    if (a && "string" == typeof a) f = this[c].querySelectorAll(a);
                    else {
                        var g = a;
                        ("object" === ("undefined" === typeof HTMLElement ? "undefined" : d(HTMLElement)) ? g instanceof HTMLElement : g && "object" === d(g) && null !== g && 1 === g.nodeType && "string" === typeof g.nodeName) && (f = [a])
                    }
                    for (g = 0; g < f.length; g++) b.push(f[g])
                }
            return b
        },
        children: function() {
            for (var a = G(), c = 0; c < this.length; c++)
                for (var d = this[c].children, f = 0; f < d.length; f++) a.push(d[f]);
            return a
        },
        not: function(a) {
            if ("string" === typeof a)
                for (var b = this.length - 1; 0 <= b; b--) this[b].matches(a) && this.splice(b, 1);
            else if (a instanceof f)
                for (b = this.length - 1; 0 <= b; b--)
                    for (var c = 0; c < a.length; c++) {
                        if (this[b] === a[c]) {
                            this.splice(b, 1);
                            break
                        }
                    } else
                        for (b = this.length - 1; 0 <= b; b--) this[b] === a[0] && this.splice(b, 1);
            return this
        },
        add: function(a) {
            for (var b = 0; b < a.length; b++) this.push(a[b]);
            return this
        },
        closest: function(a) {
            for (var b = 0; b < this.length; b++) {
                var c = this[b].closest && this[b].closest(a);
                if (c) return G(c)
            }
            return G()
        },
        html: function(a) {
            if ("undefined" == typeof a) return 0 === this.length ? void 0 : this[0].innerHTML;
            if ("string" === typeof a)
                for (var b = 0; b < this.length; b++) {
                    this[b].innerHTML = a;
                    for (var c = this[b].children, d = this[b].ownerDocument || document, f = 0; f < c.length; f++)
                        if ("SCRIPT" === c[f].tagName) {
                            var h = d.createElement("script");
                            h.innerHTML = c[f].innerHTML;
                            d.head.appendChild(h).parentNode.removeChild(h)
                        }
                } else this[0].innerHTML = "", this.append(a[0]), b = this[0].ownerDocument || document, "SCRIPT" === a[0].tagName && (c = b.createElement("script"), c.innerHTML = a[0].innerHTML, b.head.appendChild(c).parentNode.removeChild(c));
            return this
        },
        text: function(a) {
            if (a)
                for (var b = 0; b < this.length; b++) this[b].textContent = a;
            else return this.length ? this[0].textContent : ""
        },
        after: function(a) {
            if (a)
                if ("string" == typeof a)
                    for (var b = 0; b < this.length; b++) {
                        var c = this[b];
                        if (c.nodeType != Node.ELEMENT_NODE) {
                            var d = c.ownerDocument.createElement("SPAN");
                            G(c).after(d);
                            G(d).after(a).remove()
                        } else c.insertAdjacentHTML("afterend", a)
                    } else if (b = this[0], b.nextSibling)
                        if (a instanceof f)
                            for (c = 0; c < a.length; c++) b.nextSibling.parentNode.insertBefore(a[c], b.nextSibling);
                        else b.nextSibling.parentNode.insertBefore(a, b.nextSibling);
            else G(b.parentNode).append(a);
            return this
        },
        clone: function(a) {
            for (var b = G(), c = 0; c < this.length; c++) b.push(this[c].cloneNode(a));
            return b
        },
        replaceWith: function(a) {
            if ("string" === typeof a)
                for (var b = 0; b < this.length; b++) this[b].parentNode && (this[b].outerHTML = a);
            else if (a.length)
                for (b = 0; b < this.length; b++) this.replaceWith(a[b]);
            else this.after(a).remove()
        },
        insertBefore: function(a) {
            G(a).before(this[0]);
            return this
        },
        before: function(a) {
            if (a instanceof f) {
                for (var b = 0; b < a.length; b++) this.before(a[b]);
                return this
            }
            if (a)
                if ("string" == typeof a)
                    for (b = 0; b < this.length; b++) {
                        var c = this[b];
                        if (c.nodeType != Node.ELEMENT_NODE) {
                            var d = c.ownerDocument.createElement("SPAN");
                            G(c).before(d);
                            G(d).before(a).remove()
                        } else c.parentNode && c.insertAdjacentHTML("beforebegin", a)
                    } else if (b = this[0], b.parentNode)
                        if (a instanceof f)
                            for (c = 0; c < a.length; c++) b.parentNode.insertBefore(a[c], b);
                        else b.parentNode.insertBefore(a, b);
            return this
        },
        append: function(a) {
            if (0 == this.length) return this;
            if ("string" == typeof a)
                for (var b = 0; b < this.length; b++) {
                    var c = this[b],
                        d = c.ownerDocument.createElement("SPAN");
                    G(c).append(d);
                    G(d).after(a).remove()
                } else if (a instanceof f || Array.isArray(a))
                    for (b = 0; b < a.length; b++) this.append(a[b]);
                else "function" !== typeof a && this[0].appendChild(a);
            return this
        },
        prepend: function(a) {
            if (0 == this.length) return this;
            if ("string" == typeof a)
                for (var b = 0; b < this.length; b++) {
                    var c = this[b],
                        d = c.ownerDocument.createElement("SPAN");
                    G(c).prepend(d);
                    G(d).before(a).remove()
                } else if (a instanceof f)
                    for (b = 0; b < a.length; b++) this.prepend(a[b]);
                else b = this[0], b.firstChild ? b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a) : G(b).append(a);
            return this
        },
        remove: function() {
            for (var a = 0; a < this.length; a++) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
            return this
        },
        prev: function() {
            return this.length && this[0].previousElementSibling ? G(this[0].previousElementSibling) : G()
        },
        next: function() {
            return this.length && this[0].nextElementSibling ? G(this[0].nextElementSibling) : G()
        },
        nextAllVisible: function() {
            return this.next()
        },
        prevAllVisible: function() {
            return this.prev()
        },
        outerHeight: function(a) {
            if (0 !== this.length) {
                var b = this[0];
                if (b === b.window) return b.innerHeight;
                var c = {},
                    d = this.isVisible();
                if (!d)
                    for (var f in t) c[f] = b.style[f], b.style[f] = t[f];
                f = b.offsetHeight;
                a && (f += parseInt(G(b).css("marginTop")) + parseInt(G(b).css("marginBottom")));
                if (!d)
                    for (var h in t) b.style[h] = c[h];
                return f
            }
        },
        outerWidth: function(a) {
            if (0 !== this.length) {
                var b = this[0];
                if (b === b.window) return b.outerWidth;
                var c = {},
                    d = this.isVisible();
                if (!d)
                    for (var f in t) c[f] = b.style[f], b.style[f] = t[f];
                f = b.offsetWidth;
                a && (f += parseInt(G(b).css("marginLeft")) + parseInt(G(b).css("marginRight")));
                if (!d)
                    for (var h in t) b.style[h] = c[h];
                return f
            }
        },
        width: function(a) {
            if (void 0 === a) return this[0] instanceof HTMLDocument ? this[0].body.offsetWidth : this[0].offsetWidth;
            this[0].style.width = a + "px"
        },
        height: function(a) {
            var b = this[0];
            if (void 0 === a) return b instanceof HTMLDocument ? (a = b.documentElement, Math.max(b.body.scrollHeight, a.scrollHeight, b.body.offsetHeight, a.offsetHeight, a.clientHeight)) : b.offsetHeight;
            b.style.height = a + "px"
        },
        is: function(a) {
            return 0 === this.length ? !1 : "string" == typeof a && this[0].matches ? this[0].matches(a) : a instanceof f ? this[0] == a[0] : this[0] == a
        },
        parent: function() {
            return 0 === this.length ? G() : G(this[0].parentNode)
        },
        _matches: function(a, c) {
            var b = a.matches || a.matchesSelector || a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.oMatchesSelector;
            return a && !c ? b : b.call(a, c)
        },
        parents: function(a) {
            for (var b = G(), c = 0; c < this.length; c++)
                for (var d = this[c].parentNode; d && d != document && this._matches(d);) a ? this._matches(d, a) && b.push(d) : b.push(d), d = d.parentNode;
            return b
        },
        parentsUntil: function(a, c) {
            var b = G();
            a instanceof f && 0 < a.length && (a = a[0]);
            for (var e = 0; e < this.length; e++)
                for (var d = this[e].parentNode; d && d != document && d.matches && d != a && this[e] != a && ("string" != typeof a || !d.matches(a));) c ? d.matches(c) && b.push(d) : b.push(d), d = d.parentNode;
            return b
        },
        insertAfter: function(a) {
            var b = a.parent()[0];
            b && b.insertBefore(this[0], a[0].nextElementSibling)
        },
        filter: function(a) {
            var b = G();
            if ("function" === typeof a)
                for (var c = 0; c < this.length; c++) a.call(this[c], this[c]) && b.push(this[c]);
            else if ("string" === typeof a)
                for (c = 0; c < this.length; c++) this[c].matches(a) && b.push(this[c]);
            return b
        },
        offset: function() {
            var a = this[0].getBoundingClientRect(),
                c = this[0].ownerDocument.defaultView;
            return {
                top: a.top + c.pageYOffset,
                left: a.left + c.pageXOffset
            }
        },
        position: function() {
            return {
                left: this[0].offsetLeft,
                top: this[0].offsetTop
            }
        },
        push: [].push,
        splice: [].splice
    };
    f.extend = function(a) {
        a = a || {};
        for (var b = 1; b < arguments.length; b++)
            if (arguments[b])
                for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
        return a
    };
    f.merge = function(a, c) {
        for (var b = +c.length, e = 0, d = a.length; e < b; e++) a[d++] = c[e];
        a.length = d;
        return a
    };
    f.map = function(a, c, d) {
        var b, e = 0,
            f = [];
        if (Array.isArray(a))
            for (b = a.length; e < b; e++) {
                var h = c(a[e], e, d);
                null != h && f.push(h)
            } else
                for (e in a) h = c(a[e], e, d), null != h && f.push(h);
        return [].concat.apply([], f)
    };
    var oa = function(a, c) {
        if (!a) return this;
        if ("string" == typeof a && "<" === a[0]) return c = document.createElement("DIV"), c.innerHTML = a, G(c.firstElementChild);
        c = c instanceof f ? c[0] : c;
        if ("string" == typeof a) {
            a = x(a);
            a = (c || document).querySelectorAll(a);
            for (c = 0; c < a.length; c++) this[c] = a[c];
            this.length = a.length;
            return this
        }
        return a instanceof f ? a : (this[0] = a, this.length = 1, this)
    };
    oa.prototype = f.prototype;
    var V = a;
    V.Bootstrap = function(a, c, h) {
        this.id = ++V.ID;
        this.$ = f;
        var b = {};
        "function" == typeof c && (h = c, c = {});
        h && (c.events || (c.events = {}), c.events.initialized = h);
        c && c.documentReady && (b.toolbarButtons = [
            ["fullscreen", "undo", "redo", "getPDF", "print"], "bold italic underline textColor backgroundColor clearFormatting".split(" "), ["alignLeft", "alignCenter", "alignRight", "alignJustify"],
            ["formatOL", "formatUL", "indent", "outdent"],
            ["paragraphFormat"],
            ["fontFamily"],
            ["fontSize"],
            ["insertLink", "insertImage", "quote"]
        ], b.paragraphFormatSelection = !0, b.fontFamilySelection = !0, b.fontSizeSelection = !0, b.placeholderText = "", b.quickInsertEnabled = !1, b.charCounterCount = !1);
        this.opts = Object.assign({}, Object.assign({}, V.DEFAULTS, b, "object" === d(c) && c));
        c = JSON.stringify(this.opts);
        V.OPTS_MAPPING[c] = V.OPTS_MAPPING[c] || this.id;
        this.sid = V.OPTS_MAPPING[c];
        V.SHARED[this.sid] = V.SHARED[this.sid] || {};
        this.shared = V.SHARED[this.sid];
        this.shared.count = (this.shared.count || 0) + 1;
        this.$oel = f(a);
        this.$oel.data("froala.editor", this);
        this.o_doc = a.ownerDocument;
        this.o_win = "defaultView" in this.o_doc ? this.o_doc.defaultView : this.o_doc.parentWindow;
        this.c_scroll = f(this.o_win).scrollTop();
        this._init()
    };
    V.Bootstrap.prototype._init = function() {
        var a = this.$oel.get(0).tagName;
        1 <= this.$oel.closest("label").length && console.warn("Note! It is not recommended to initialize the Froala Editor within a label tag.");
        var c = function() {
                "TEXTAREA" !== a && (this._original_html = this._original_html || this.$oel.html());
                this.$box = this.$box || this.$oel;
                this.opts.fullPage && (this.opts.iframe = !0);
                this.opts.iframe ? (this.$iframe = f('<iframe src="about:blank" frameBorder="0">'), this.$wp = f("<div></div>"), this.$box.html(this.$wp), this.$wp.append(this.$iframe), this.$iframe.get(0).contentWindow.document.open(), this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"), this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"), this.$iframe.get(0).contentWindow.document.close(), this.iframe_document = this.$iframe.get(0).contentWindow.document, this.$el = f(this.iframe_document.querySelector("body")), this.el = this.$el.get(0), this.$head = f(this.iframe_document.querySelector("head")), this.$html = f(this.iframe_document.querySelector("html"))) : (this.$el = f(this.o_doc.createElement("DIV")), this.el = this.$el.get(0), this.$wp = f(this.o_doc.createElement("DIV")).append(this.$el), this.$box.html(this.$wp));
                setTimeout(h.bind(this), 0)
            }.bind(this),
            d = function() {
                this.$box = f("<div>");
                this.$oel.before(this.$box).hide();
                this._original_html = this.$oel.val();
                var a = this;
                this.$oel.parents("form").on("submit.".concat(this.id), function() {
                    a.events.trigger("form.submit")
                });
                this.$oel.parents("form").on("reset.".concat(this.id), function() {
                    a.events.trigger("form.reset")
                });
                c()
            }.bind(this),
            k = function() {
                this.$el = this.$oel;
                this.el = this.$el.get(0);
                this.$el.attr("contenteditable", !0).css("outline", "none").css("display", "inline-block");
                this.opts.multiLine = !1;
                this.opts.toolbarInline = !1;
                setTimeout(h.bind(this), 0)
            }.bind(this),
            g = function() {
                this.$el = this.$oel;
                this.el = this.$el.get(0);
                this.opts.toolbarInline = !1;
                setTimeout(h.bind(this), 0)
            }.bind(this),
            x = function() {
                this.$el = this.$oel;
                this.el = this.$el.get(0);
                this.opts.toolbarInline = !1;
                this.$oel.on("click.popup", function(a) {
                    a.preventDefault()
                });
                setTimeout(h.bind(this), 0)
            }.bind(this);
        this.opts.editInPopup ? x() : "TEXTAREA" === a ? d() : "A" === a ? k() : "IMG" === a ? g() : "BUTTON" === a || "INPUT" === a ? (this.opts.editInPopup = !0, this.opts.toolbarInline = !1, x()) : c()
    };
    V.Bootstrap.prototype.load = function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b) && !this[b] && !(V.PLUGINS[b] && 0 > this.opts.pluginsEnabled.indexOf(b)) && (this[b] = new a[b](this), this[b]._init && (this[b]._init(), this.opts.initOnClick && "core" === b))) return !1
    };
    V.Bootstrap.prototype.destroy = function() {
        this.destrying = !0;
        this.shared.count--;
        this.events && this.events.$off();
        var a = this.html && this.html.get();
        this.opts.iframe && (this.events.disableBlur(), this.win.focus(), this.events.enableBlur());
        this.events && (this.events.trigger("destroy", [], !0), this.events.trigger("shared.destroy", [], !0));
        if (0 === this.shared.count) {
            for (var c in this.shared) Object.prototype.hasOwnProperty.call(this.shared, c) && (this.shared[c] = null, V.SHARED[this.sid][c] = null);
            delete V.SHARED[this.sid]
        }
        this.$oel.parents("form").off(".".concat(this.id));
        this.$oel.off("click.popup");
        this.$oel.removeData("froala.editor");
        this.$oel.off("froalaEditor");
        this.core && this.core.destroy(a);
        V.INSTANCES.splice(V.INSTANCES.indexOf(this), 1)
    };
    return a
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    d.PLUGINS.align = function(a) {
        var c = a.$;
        return {
            apply: function(d) {
                var h = a.selection.element();
                if (c(h).parents(".fr-img-caption").length) c(h).css("text-align", d);
                else {
                    a.selection.save();
                    a.html.wrap(!0, !0, !0, !0);
                    a.selection.restore();
                    h = a.selection.blocks();
                    for (var R = 0; R < h.length; R++) c(h[R]).css("text-align", d).removeClass("fr-temp-div"), "" === c(h[R]).attr("class") && c(h[R]).removeAttr("class"), "" === c(h[R]).attr("style") && c(h[R]).removeAttr("style");
                    a.selection.save();
                    a.html.unwrap();
                    a.selection.restore()
                }
            },
            refresh: function(d) {
                var h = a.selection.blocks();
                h.length && (h = a.helpers.getAlignment(c(h[0])), d.find("> *").first().replaceWith(a.icon.create("align-".concat(h))))
            },
            refreshOnShow: function(d, M) {
                d = a.selection.blocks();
                d.length && (d = a.helpers.getAlignment(c(d[0])), M.find('a.fr-command[data-param1="'.concat(d, '"]')).addClass("fr-active").attr("aria-selected", !0))
            },
            refreshForToolbar: function(d) {
                var h = a.selection.blocks();
                h.length && (h = a.helpers.getAlignment(c(h[0])), h = h.charAt(0).toUpperCase() + h.slice(1), "align".concat(h) === d.attr("data-cmd") && d.addClass("fr-active"))
            }
        }
    };
    d.DefineIcon("align", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("align-left", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("align-right", {
        NAME: "align-right",
        SVG_KEY: "alignRight"
    });
    d.DefineIcon("align-center", {
        NAME: "align-center",
        SVG_KEY: "alignCenter"
    });
    d.DefineIcon("align-justify", {
        NAME: "align-justify",
        SVG_KEY: "alignJustify"
    });
    d.RegisterCommand("align", {
        type: "dropdown",
        title: "Align",
        options: {
            left: "Align Left",
            center: "Align Center",
            right: "Align Right",
            justify: "Align Justify"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.align.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align"data-param1="\n        '.concat(h, '" title="').concat(this.language.translate(c[h]), '">').concat(this.icon.create("align-".concat(h)), '<span class="fr-sr-only">\n        ').concat(this.language.translate(c[h]), "</span></a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.align.apply(c)
        },
        refresh: function(a) {
            this.align.refresh(a)
        },
        refreshOnShow: function(a, c) {
            this.align.refreshOnShow(a, c)
        },
        plugin: "align"
    });
    d.RegisterCommand("alignLeft", {
        type: "button",
        icon: "align-left",
        title: "Align Left",
        callback: function() {
            this.align.apply("left")
        },
        refresh: function(a) {
            this.align.refreshForToolbar(a)
        },
        plugin: "align"
    });
    d.RegisterCommand("alignRight", {
        type: "button",
        icon: "align-right",
        title: "Align Right",
        callback: function() {
            this.align.apply("right")
        },
        refresh: function(a) {
            this.align.refreshForToolbar(a)
        },
        plugin: "align"
    });
    d.RegisterCommand("alignCenter", {
        type: "button",
        icon: "align-center",
        title: "Align Center",
        callback: function() {
            this.align.apply("center")
        },
        refresh: function(a) {
            this.align.refreshForToolbar(a)
        },
        plugin: "align"
    });
    d.RegisterCommand("alignJustify", {
        type: "button",
        icon: "align-justify",
        title: "Align Justify",
        callback: function() {
            this.align.apply("justify")
        },
        refresh: function(a) {
            this.align.refreshForToolbar(a)
        },
        plugin: "align"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.POPUP_TEMPLATES, {
        "textColor.picker": "[_BUTTONS_][_TEXT_COLORS_][_CUSTOM_COLOR_]",
        "backgroundColor.picker": "[_BUTTONS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"
    });
    Object.assign(d.DEFAULTS, {
        colorsText: "#61BD6D #1ABC9C #54ACD2 #2C82C9 #9365B8 #475577 #CCCCCC #41A85F #00A885 #3D8EB9 #2969B0 #553982 #28324E #000000 #F7DA64 #FBA026 #EB6B56 #E25041 #A38F84 #EFEFEF #FFFFFF #FAC51C #F37934 #D14841 #B8312F #7C706B #D1D5D8 REMOVE".split(" "),
        colorsBackground: "#61BD6D #1ABC9C #54ACD2 #2C82C9 #9365B8 #475577 #CCCCCC #41A85F #00A885 #3D8EB9 #2969B0 #553982 #28324E #000000 #F7DA64 #FBA026 #EB6B56 #E25041 #A38F84 #EFEFEF #FFFFFF #FAC51C #F37934 #D14841 #B8312F #7C706B #D1D5D8 REMOVE".split(" "),
        colorsStep: 7,
        colorsHEXInput: !0,
        colorsButtons: ["colorsBack", "|", "-"]
    });
    d.PLUGINS.colors = function(a) {
        function c(c) {
            for (var d = "text" === c ? a.opts.colorsText : a.opts.colorsBackground, h = '<div class="fr-color-set fr-'.concat(c, '-color fr-selected-set">'), m = 0; m < d.length; m++) 0 !== m && 0 === m % a.opts.colorsStep && (h += "<br>"), h = "REMOVE" !== d[m] ? h + '<span class="fr-command fr-select-color" style="background:'.concat(d[m], ';" \n        tabIndex="-1" aria-selected="false" role="button" data-cmd="apply').concat(c, 'Color" \n        data-param1="').concat(d[m], '"><span class="fr-sr-only"> ').concat(a.language.translate("Color")).concat(d[m], " \n        &nbsp;&nbsp;&nbsp;</span></span>") : h + '<span class="fr-command fr-select-color" data-cmd="apply'.concat(c, 'Color"\n         tabIndex="-1" role="button" data-param1="REMOVE" \n         title="').concat(a.language.translate("Clear Formatting"), '">').concat(a.icon.create("remove"), ' \n        <span class="fr-sr-only"> ').concat(a.language.translate("Clear Formatting"), " </span></span>");
            return "".concat(h, "</div>")
        }

        function h(c, h) {
            a.events.on("popup.tab", function(m) {
                var t = v(m.currentTarget);
                if (!a.popups.isVisible(h) || !t.is("span")) return !0;
                var y = m.which,
                    f = !0;
                if (d.KEYCODE.TAB === y) y = c.find(".fr-buttons"), f = !a.accessibility.focusToolbar(y, m.shiftKey ? !0 : !1);
                else if (d.KEYCODE.ARROW_UP === y || d.KEYCODE.ARROW_DOWN === y || d.KEYCODE.ARROW_LEFT === y || d.KEYCODE.ARROW_RIGHT === y) {
                    if (t.is("span.fr-select-color")) {
                        f = t.parent().find("span.fr-select-color");
                        var x = f.index(t);
                        t = a.opts.colorsStep;
                        x = Math.floor(x / t) * t + x % t;
                        var C = Math.floor(f.length / t) * t;
                        d.KEYCODE.ARROW_UP === y ? x = ((x - t) % C + C) % C : d.KEYCODE.ARROW_DOWN === y ? x = (x + t) % C : d.KEYCODE.ARROW_LEFT === y ? x = ((x - 1) % C + C) % C : d.KEYCODE.ARROW_RIGHT === y && (x = (x + 1) % C);
                        y = v(f.get(x));
                        a.events.disableBlur();
                        y.focus();
                        f = !1
                    }
                } else d.KEYCODE.ENTER === y && (a.button.exec(t), f = !1);
                !1 === f && (m.preventDefault(), m.stopPropagation());
                return f
            }, !0)
        }

        function M(c) {
            var d = a.popups.get("".concat(c, "Color.picker")),
                h = v(a.selection.element());
            var m = "background" === c ? "background-color" : "color";
            var t = d.find(".fr-".concat(c, "-color .fr-select-color"));
            t.find(".fr-selected-color").remove();
            t.removeClass("fr-active-item");
            for (t.not('[data-param1="REMOVE"]').attr("aria-selected", !1); h.get(0) !== a.el;)
                if ("transparent" === h.css(m) || "rgba(0, 0, 0, 0)" === h.css(m)) h = h.parent();
                else {
                    d = d.find(".fr-".concat(c, '-color .fr-select-color[data-param1="').concat(a.helpers.RGBToHex(h.css(m)), '"]'));
                    d.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>');
                    d.addClass("fr-active-item").attr("aria-selected", !0);
                    break
                }
            d = a.popups.get("".concat(c, "Color.picker"));
            c = d.find(".fr-".concat(c, "-color .fr-active-item")).attr("data-param1");
            d = d.find(".fr-color-hex-layer input");
            c || (c = "");
            d.length && v(d.val(c).input).trigger("change")
        }

        function R(c) {
            "REMOVE" !== c ? a.format.applyStyle("background-color", a.helpers.HEXtoRGB(c)) : a.format.removeStyle("background-color");
            a.popups.hide("backgroundColor.picker")
        }

        function X(c) {
            "REMOVE" !== c ? a.format.applyStyle("color", a.helpers.HEXtoRGB(c)) : a.format.removeStyle("color");
            a.popups.hide("textColor.picker")
        }
        var v = a.$,
            m = '<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer- \n  '.concat(a.id, '"><div class="fr-input-line"><input maxlength="7" id="[ID]"\n  type="text" placeholder="').concat(a.language.translate("HEX Color"), '" \n  tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button \n  type="button" class="fr-command fr-submit" data-cmd="[COMMAND]" tabIndex="2" role="button">\n  ').concat(a.language.translate("OK"), "</button></div></div>");
        return {
            showColorsPopup: function(d) {
                var t = a.$tb.find('.fr-command[data-cmd="'.concat(d, '"]')),
                    y = a.popups.get("".concat(d, ".picker"));
                if (!y) {
                    y = "";
                    a.opts.toolbarInline && 0 < a.opts.colorsButtons.length && (y += '<div class="fr-buttons fr-colors-buttons fr-tabs">\n        '.concat(a.button.buildList(a.opts.colorsButtons), "\n        </div>"));
                    var v = "";
                    "textColor" === d ? (a.opts.colorsHEXInput && (v = m.replace(/\[ID\]/g, "fr-color-hex-layer-text-".concat(a.id)).replace(/\[COMMAND\]/g, "customTextColor")), y = {
                        buttons: y,
                        text_colors: c("text"),
                        custom_color: v
                    }) : (a.opts.colorsHEXInput && (v = m.replace(/\[ID\]/g, "fr-color-hex-layer-background-".concat(a.id)).replace(/\[COMMAND\]/g, "customBackgroundColor")), y = {
                        buttons: y,
                        background_colors: c("background"),
                        custom_color: v
                    });
                    y = a.popups.create("".concat(d, ".picker"), y);
                    h(y, "".concat(d, ".picker"))
                }
                y.hasClass("fr-active") || (a.popups.setContainer("".concat(d, ".picker"), a.$tb), "textColor" === d ? M("text") : M("background"), t.isVisible() ? (v = a.button.getPosition(t), y = v.left, v = v.top, a.popups.show("".concat(d, ".picker"), y, v, t.outerHeight())) : (a.position.forSelection(y), a.popups.show("".concat(d, ".picker"))))
            },
            background: R,
            customColor: function(c) {
                var d = a.popups.get("".concat(c, "Color.picker")).find(".fr-color-hex-layer input");
                d.length && (d = d.val(), "background" === c ? R(d) : X(d))
            },
            text: X,
            back: function() {
                a.popups.hide("textColor.picker");
                a.popups.hide("backgroundColor.picker");
                a.toolbar.showInline()
            }
        }
    };
    d.DefineIcon("textColor", {
        NAME: "tint",
        SVG_KEY: "textColor"
    });
    d.RegisterCommand("textColor", {
        title: "Text Color",
        undo: !1,
        focus: !0,
        refreshOnCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("textColor.picker") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("textColor.picker")) : this.colors.showColorsPopup("textColor")
        }
    });
    d.RegisterCommand("applytextColor", {
        undo: !0,
        callback: function(a, c) {
            this.colors.text(c)
        }
    });
    d.RegisterCommand("customTextColor", {
        title: "OK",
        undo: !0,
        callback: function() {
            this.colors.customColor("text")
        }
    });
    d.DefineIcon("backgroundColor", {
        NAME: "paint-brush",
        SVG_KEY: "backgroundColor"
    });
    d.RegisterCommand("backgroundColor", {
        title: "Background Color",
        undo: !1,
        focus: !0,
        refreshOnCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("backgroundColor.picker") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("backgroundColor.picker")) : this.colors.showColorsPopup("backgroundColor")
        }
    });
    d.RegisterCommand("applybackgroundColor", {
        undo: !0,
        callback: function(a, c) {
            this.colors.background(c)
        }
    });
    d.RegisterCommand("customBackgroundColor", {
        title: "OK",
        undo: !0,
        callback: function() {
            this.colors.customColor("background")
        }
    });
    d.DefineIcon("colorsBack", {
        NAME: "arrow-left",
        SVG_KEY: "back"
    });
    d.RegisterCommand("colorsBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.colors.back()
        }
    });
    d.DefineIcon("remove", {
        NAME: "eraser",
        SVG_KEY: "remove"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.DEFAULTS, {
        dragInline: !0
    });
    d.PLUGINS.draggable = function(a) {
        function c(c) {
            if (c.originalEvent && c.originalEvent.target && c.originalEvent.target.nodeType === Node.TEXT_NODE) return !0;
            c.target && "A" === c.target.tagName && 1 === c.target.childNodes.length && "IMG" === c.target.childNodes[0].tagName && (c.target = c.target.childNodes[0]);
            if (!y(c.target).hasClass("fr-draggable")) return c.preventDefault(), !1;
            a.undo.canDo() || a.undo.saveStep();
            a.opts.dragInline ? a.$el.attr("contenteditable", !0) : a.$el.attr("contenteditable", !1);
            a.opts.toolbarInline && a.toolbar.hide();
            y(c.target).addClass("fr-dragging");
            a.browser.msie || a.browser.edge || a.selection.clear();
            c.originalEvent.dataTransfer.setData("text", "Froala")
        }

        function h(c, d, h) {
            if (a.opts.iframe) {
                var f = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-top")),
                    x = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-left"));
                c += a.$iframe.offset().top + f;
                d += a.$iframe.offset().left + x
            }
            w.offset().top !== c && w.css("top", c);
            w.offset().left !== d && w.css("left", d);
            w.width() !== h && w.css("width", h)
        }

        function M(c) {
            var f = a.doc.elementFromPoint(c.originalEvent.pageX - a.win.pageXOffset, c.originalEvent.pageY - a.win.pageYOffset);
            if (!S(f)) {
                for (var m = 0, t = f; !S(t) && t === f && 0 < c.originalEvent.pageY - a.win.pageYOffset - m;) m++, t = a.doc.elementFromPoint(c.originalEvent.pageX - a.win.pageXOffset, c.originalEvent.pageY - a.win.pageYOffset - m);
                if (!S(t) || w && 0 === a.$el.find(t).length && t !== w.get(0)) t = null;
                for (var v = 0, L = f; !S(L) && L === f && c.originalEvent.pageY - a.win.pageYOffset + v < y(a.doc).height();) v++, L = a.doc.elementFromPoint(c.originalEvent.pageX - a.win.pageXOffset, c.originalEvent.pageY - a.win.pageYOffset + v);
                if (!S(L) || w && 0 === a.$el.find(L).length && L !== w.get(0)) L = null;
                f = null === L && t ? t : L && null === t ? L : L && t ? m < v ? t : L : null
            }
            if (y(f).hasClass("fr-drag-helper")) return !1;
            f && !a.node.isBlock(f) && (f = a.node.blockParent(f));
            f && 0 <= ["TD", "TH", "TR", "THEAD", "TBODY"].indexOf(f.tagName) && (f = y(f).parents("table").get(0));
            f && 0 <= ["LI"].indexOf(f.tagName) && (f = y(f).parents("UL, OL").get(0));
            f && !y(f).hasClass("fr-drag-helper") ? (w || (d.$draggable_helper || (d.$draggable_helper = y(document.createElement("div")).attr("class", "fr-drag-helper")), w = d.$draggable_helper, a.events.on("shared.destroy", function() {
                w.html("").removeData().remove();
                w = null
            }, !0)), c = c.originalEvent.pageY < y(f).offset().top + y(f).outerHeight() / 2 ? !0 : !1, m = y(f), t = 0, c || 0 !== m.next().length ? (c || (m = m.next()), "before" === w.data("fr-position") && m.is(w.data("fr-tag")) || (0 < m.prev().length && (t = parseFloat(m.prev().css("margin-bottom")) || 0), t = Math.max(t, parseFloat(m.css("margin-top")) || 0), h(m.offset().top - t / 2 - a.$box.offset().top, m.offset().left - a.win.pageXOffset - a.$box.offset().left, m.width()), w.data("fr-position", "before"))) : "after" === w.data("fr-position") && m.is(w.data("fr-tag")) || (t = parseFloat(m.css("margin-bottom")) || 0, h(m.offset().top + y(f).height() + t / 2 - a.$box.offset().top, m.offset().left - a.win.pageXOffset - a.$box.offset().left, m.width()), w.data("fr-position", "after")), w.data("fr-tag", m), w.addClass("fr-visible"), a.$box.append(w)) : w && 0 < a.$box.find(w).length && w.removeClass("fr-visible")
        }

        function R(c) {
            c.originalEvent.dataTransfer.dropEffect = v(c);
            if (a.opts.dragInline) {
                a: {
                    for (var f = 0; f < d.INSTANCES.length; f++) {
                        var h = d.INSTANCES[f].$el.find(".fr-dragging");
                        if (h.length) {
                            h = h.get(0);
                            break a
                        }
                    }
                    h = void 0
                }(!h || a.browser.msie || a.browser.edge) && c.preventDefault()
            }
            else c.preventDefault(), M(c)
        }

        function X(c) {
            c.originalEvent.dataTransfer.dropEffect = v(c);
            a.opts.dragInline || c.preventDefault()
        }

        function v(c) {
            c = c.originalEvent.dataTransfer;
            return !c.types || 1 != c.types.length || "Files" != c.types[0] || (c = a.opts, c.fileUpload || c.imageUpload) ? "move" : "none"
        }

        function m(c) {
            a.$el.attr("contenteditable", !0);
            var d = a.$el.find(".fr-dragging");
            w && w.hasClass("fr-visible") && a.$box.find(w).length ? t(c) : d.length && (c.preventDefault(), c.stopPropagation());
            w && a.$box.find(w).length && w.removeClass("fr-visible");
            d.removeClass("fr-dragging")
        }

        function t(c) {
            a.$el.attr("contenteditable", !0);
            for (var f, h, m = 0; m < d.INSTANCES.length; m++)
                if (f = d.INSTANCES[m].$el.find(".fr-dragging"), f.length) {
                    h = d.INSTANCES[m];
                    break
                }
            if (f.length) {
                c.preventDefault();
                c.stopPropagation();
                if (w && w.hasClass("fr-visible") && a.$box.find(w).length) w.data("fr-tag")[w.data("fr-position")]('<span class="fr-marker"></span>'), w.removeClass("fr-visible");
                else if (!1 === a.markers.insertAtPoint(c.originalEvent)) return !1;
                f.removeClass("fr-dragging");
                f = a.events.chainTrigger("element.beforeDrop", f);
                if (!1 === f) return !1;
                c = f;
                f.parent().is("A") && 1 === f.parent().get(0).childNodes.length && (c = f.parent());
                a.core.isEmpty() ? a.events.focus() : (a.$el.find(".fr-marker").replaceWith(d.MARKERS), a.selection.restore());
                h === a || a.undo.canDo() || a.undo.saveStep();
                a.core.isEmpty() ? a.$el.html(c) : (m = a.markers.insert(), 0 === c.find(m).length ? y(m).replaceWith(c) : 0 === f.find(m).length && y(m).replaceWith(f), f.after(d.MARKERS), a.selection.restore());
                a.popups.hideAll();
                a.selection.save();
                a.$el.find(a.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").not(a.opts.htmlAllowedEmptyTags.join(",")).remove();
                a.html.wrap();
                a.html.fillEmptyBlocks();
                a.selection.restore();
                a.undo.saveStep();
                a.opts.iframe && a.size.syncIframe();
                h !== a && (h.popups.hideAll(), h.$el.find(h.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(), h.html.wrap(), h.html.fillEmptyBlocks(), h.undo.saveStep(), h.events.trigger("element.dropped"), h.opts.iframe && h.size.syncIframe());
                a.events.trigger("element.dropped", [c]);
                return !1
            }
            w && w.removeClass("fr-visible");
            a.undo.canDo() || a.undo.saveStep();
            setTimeout(function() {
                a.undo.saveStep()
            }, 0)
        }

        function L(c) {
            if (c && "DIV" === c.tagName && a.node.hasClass(c, "fr-drag-helper")) c.parentNode.removeChild(c);
            else if (c && c.nodeType === Node.ELEMENT_NODE) {
                c = c.querySelectorAll("div.fr-drag-helper");
                for (var d = 0; d < c.length; d++) c[d].parentNode.removeChild(c[d])
            }
        }
        var y = a.$,
            S = function(c) {
                return !(c && ("HTML" === c.tagName || "BODY" === c.tagName || a.node.isElement(c)))
            },
            w;
        return {
            _init: function() {
                a.opts.enter === d.ENTER_BR && (a.opts.dragInline = !0);
                a.events.on("dragstart", c, !0);
                a.events.on("dragover", R, !0);
                a.events.on("dragenter", X, !0);
                a.events.on("document.dragend", m, !0);
                a.events.on("document.drop", m, !0);
                a.events.on("drop", t, !0);
                a.events.on("html.processGet", L)
            }
        }
    }
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.POPUP_TEMPLATES, {
        "file.insert": "[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"
    });
    Object.assign(d.DEFAULTS, {
        fileUpload: !0,
        fileUploadURL: null,
        fileUploadParam: "file",
        fileUploadParams: {},
        fileUploadToS3: !1,
        fileUploadToAzure: !1,
        fileUploadMethod: "POST",
        fileMaxSize: 10485760,
        fileAllowedTypes: ["*"],
        fileInsertButtons: ["fileBack", "|"],
        fileUseSelectedText: !1
    });
    d.PLUGINS.file = function(a) {
        function c() {
            var b = a.popups.get("file.insert");
            b || (b = x());
            b.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive");
            b.find(".fr-file-progress-bar-layer").addClass("fr-active");
            b.find(".fr-buttons").hide();
            M(a.language.translate("Uploading"), 0)
        }

        function h(b) {
            var c = a.popups.get("file.insert");
            c && (c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"), c.find(".fr-file-progress-bar-layer").removeClass("fr-active"), c.find(".fr-buttons").show(), b && (a.events.focus(), a.popups.hide("file.insert")))
        }

        function M(b, c) {
            var e = a.popups.get("file.insert");
            e && (e = e.find(".fr-file-progress-bar-layer"), e.find("h3").text(b + (c ? " ".concat(c, "%") : "")), e.removeClass("fr-error"), c ? (e.find("div").removeClass("fr-indeterminate"), e.find("div > span").css("width", "".concat(c, "%"))) : e.find("div").addClass("fr-indeterminate"))
        }

        function R(b, c, e) {
            a.edit.on();
            a.events.focus(!0);
            a.selection.restore();
            a.opts.fileUseSelectedText && a.selection.text().length && (c = a.selection.text());
            a.html.insert('<a href="'.concat(b, '" target="_blank" id="fr-inserted-file" class="fr-file">').concat(c, "</a>"));
            b = a.$el.find("#fr-inserted-file");
            b.removeAttr("id");
            a.popups.hide("file.insert");
            a.undo.saveStep();
            V();
            a.events.trigger("file.inserted", [b, e])
        }

        function X(b) {
            try {
                if (!1 === a.events.trigger("file.uploaded", [b], !0)) return a.edit.on(), !1;
                var c = JSON.parse(b);
                if (c.link) return c;
                t(2, b);
                return !1
            } catch (I) {
                return t(4, b), !1
            }
        }

        function v() {
            t(4, this.response || this.responseText || this.responseXML)
        }

        function m(b) {
            b.lengthComputable && (b = b.loaded / b.total * 100 | 0, M(a.language.translate("Uploading"), b))
        }

        function t(b, d) {
            a.edit.on();
            var f = a.language.translate("Something went wrong. Please try again.");
            c();
            var g = a.popups.get("file.insert").find(".fr-file-progress-bar-layer");
            g.addClass("fr-error");
            g = g.find("h3");
            g.text(f);
            a.events.disableBlur();
            g.focus();
            a.events.trigger("file.error", [{
                code: b,
                message: e[b]
            }, d])
        }

        function L() {
            a.edit.on();
            h(!0)
        }

        function y(b) {
            var e = new FileReader;
            e.onload = function() {
                var c = atob(e.result.split(",")[1]);
                for (var d = [], f = 0; f < c.length; f++) d.push(c.charCodeAt(f));
                c = window.URL.createObjectURL(new Blob([new Uint8Array(d)], {
                    type: b.type
                }));
                a.file.insert(c, b.name, null)
            };
            c();
            e.readAsDataURL(b)
        }

        function S(e) {
            if ("undefined" !== typeof e && 0 < e.length) {
                if (!1 === a.events.trigger("file.beforeUpload", [e])) return !1;
                var d = e[0];
                if (!(null !== a.opts.fileUploadURL && "https://i.froala.com/upload" !== a.opts.fileUploadURL || a.opts.fileUploadToS3 || a.opts.fileUploadToAzure)) return y(d), !1;
                if (d.size > a.opts.fileMaxSize) return t(5), !1;
                if (0 > a.opts.fileAllowedTypes.indexOf("*") && 0 > a.opts.fileAllowedTypes.indexOf(d.type.replace(/file\//g, ""))) return t(6), !1;
                var f;
                a.drag_support.formdata && (f = a.drag_support.formdata ? new FormData : null);
                if (f) {
                    var k;
                    if (!1 !== a.opts.fileUploadToS3)
                        for (k in f.append("key", a.opts.fileUploadToS3.keyStart + (new Date).getTime() + "-" + (d.name || "untitled")), f.append("success_action_status", "201"), f.append("X-Requested-With", "xhr"), f.append("Content-Type", d.type), a.opts.fileUploadToS3.params) a.opts.fileUploadToS3.params.hasOwnProperty(k) && f.append(k, a.opts.fileUploadToS3.params[k]);
                    for (k in a.opts.fileUploadParams) a.opts.fileUploadParams.hasOwnProperty(k) && f.append(k, a.opts.fileUploadParams[k]);
                    f.append(a.opts.fileUploadParam, d);
                    var h = a.opts.fileUploadURL;
                    a.opts.fileUploadToS3 && (h = a.opts.fileUploadToS3.uploadURL ? a.opts.fileUploadToS3.uploadURL : "https://".concat(a.opts.fileUploadToS3.region, ".amazonaws.com/").concat(a.opts.fileUploadToS3.bucket));
                    e = a.opts.fileUploadMethod;
                    if (a.opts.fileUploadToAzure) {
                        var n = h = a.opts.fileUploadToAzure.uploadURL ? "".concat(a.opts.fileUploadToAzure.uploadURL, "/").concat(d.name) : encodeURI("https://".concat(a.opts.fileUploadToAzure.account, ".blob.core.windows.net/").concat(a.opts.fileUploadToAzure.container, "/").concat(d.name));
                        a.opts.fileUploadToAzure.SASToken && (h += a.opts.fileUploadToAzure.SASToken);
                        e = "PUT"
                    }
                    var x = a.core.getXHR(h, e);
                    if (a.opts.fileUploadToAzure) {
                        h = (new Date).toUTCString();
                        if (!a.opts.fileUploadToAzure.SASToken && a.opts.fileUploadToAzure.accessKey) {
                            var C = a.opts.fileUploadToAzure.account,
                                w = a.opts.fileUploadToAzure.container;
                            a.opts.fileUploadToAzure.uploadURL && (C = a.opts.fileUploadToAzure.uploadURL.split("/"), w = C.pop(), C = C.pop().split(".")[0]);
                            var G = "x-ms-blob-type:BlockBlob\nx-ms-date:".concat(h, "\nx-ms-version:2019-07-07");
                            w = encodeURI("/" + C + "/" + w + "/" + d.name);
                            var V = e = a.cryptoJSPlugin.cryptoJS.HmacSHA256(e + "\n\n\n" + d.size + "\n\n" + d.type + "\n\n\n\n\n\n\n" + G + "\n" + w, a.cryptoJSPlugin.cryptoJS.enc.Base64.parse(a.opts.fileUploadToAzure.accessKey)).toString(a.cryptoJSPlugin.cryptoJS.enc.Base64);
                            x.setRequestHeader("Authorization", "SharedKey " + C + ":" + e)
                        }
                        x.setRequestHeader("x-ms-version", "2019-07-07");
                        x.setRequestHeader("x-ms-date", h);
                        x.setRequestHeader("Content-Type", d.type);
                        x.setRequestHeader("x-ms-blob-type", "BlockBlob");
                        for (k in a.opts.fileUploadParams) a.opts.fileUploadParams.hasOwnProperty(k) && x.setRequestHeader(k, a.opts.fileUploadParams[k]);
                        for (k in a.opts.fileUploadToAzure.params) a.opts.fileUploadToAzure.params.hasOwnProperty(k) && x.setRequestHeader(k, a.opts.fileUploadToAzure.params[k])
                    }
                    x.onload = function() {
                        a: {
                            var c = d.name,
                                e = n,
                                f = x.status,
                                g = x.response,
                                k = x.responseXML,
                                h = x.responseText;
                            try {
                                if (a.opts.fileUploadToS3 || a.opts.fileUploadToAzure)
                                    if (201 === f) {
                                        if (a.opts.fileUploadToAzure) {
                                            if (!1 === a.events.trigger("file.uploadedToAzure", [x.responseURL, V, g], !0)) {
                                                a.edit.on();
                                                break a
                                            }
                                            var m = e
                                        } else try {
                                            var l = b(k).find("Location").text(),
                                                C = b(k).find("Key").text();
                                            !1 === a.events.trigger("file.uploadedToS3", [l, C, k], !0) ? (a.edit.on(), m = !1) : m = l
                                        } catch (H) {
                                            t(4, k), m = !1
                                        }
                                        m && R(m, c, g || k)
                                    } else t(4, g || k);
                                else if (200 <= f && 300 > f) {
                                    var y = X(h);
                                    y && R(y.link, c, g || h)
                                } else t(3, g || h)
                            } catch (H) {
                                t(4, g || h)
                            }
                        }
                    };
                    x.onerror = v;
                    x.upload.onprogress = m;
                    x.onabort = L;
                    c();
                    if (k = a.popups.get("file.insert")) k.off("abortUpload"), k.on("abortUpload", function() {
                        4 !== x.readyState && x.abort()
                    });
                    x.send(a.opts.fileUploadToAzure ? d : f)
                }
            }
        }

        function w(c) {
            a.events.$on(c, "dragover dragenter", ".fr-file-upload-layer", function() {
                b(this).addClass("fr-drop");
                return !1
            }, !0);
            a.events.$on(c, "dragleave dragend", ".fr-file-upload-layer", function() {
                b(this).removeClass("fr-drop");
                return !1
            }, !0);
            a.events.$on(c, "drop", ".fr-file-upload-layer", function(e) {
                e.preventDefault();
                e.stopPropagation();
                b(this).removeClass("fr-drop");
                (e = e.originalEvent.dataTransfer) && e.files && (c.data("instance") || a).file.upload(e.files)
            }, !0);
            a.helpers.isIOS() && a.events.$on(c, "touchstart", '.fr-file-upload-layer input[type="file"]', function() {
                b(this).trigger("click")
            });
            a.events.$on(c, "change", '.fr-file-upload-layer input[type="file"]', function() {
                if (this.files) {
                    var e = c.data("instance") || a;
                    e.events.disableBlur();
                    c.find("input:focus").blur();
                    e.events.enableBlur();
                    e.file.upload(this.files)
                }
                b(this).val("")
            }, !0)
        }

        function f() {
            h()
        }

        function x(b) {
            if (b) return a.popups.onHide("file.insert", f), !0;
            a.opts.fileUpload || a.opts.fileInsertButtons.splice(a.opts.fileInsertButtons.indexOf("fileUpload"), 1);
            b = '<div class="fr-buttons fr-tabs">'.concat(a.button.buildList(a.opts.fileInsertButtons), "</div>");
            var c = "";
            a.opts.fileUpload && (c = '<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'.concat(a.id, '"><strong>').concat(a.language.translate("Drop file"), "</strong><br>(").concat(a.language.translate("or click"), ')<div class="fr-form"><input type="file" name="').concat(a.opts.fileUploadParam, '" accept="').concat(0 <= a.opts.fileAllowedTypes.indexOf("*") ? "/" : "").concat(a.opts.fileAllowedTypes.join(", ").toLowerCase(), '" tabIndex="-1" aria-labelledby="fr-file-upload-layer-').concat(a.id, '" role="button"></div></div>'));
            b = a.popups.create("file.insert", {
                buttons: b,
                upload_layer: c,
                progress_bar: '<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>'
            });
            w(b);
            return b
        }

        function C(b) {
            a.node.hasClass(b, "fr-file")
        }

        function G(b) {
            var e = b.originalEvent.dataTransfer;
            if (e && e.files && e.files.length) {
                var f = e.files[0];
                if (f && "undefined" !== typeof f.type) {
                    if (0 > f.type.indexOf("image")) {
                        if (!a.opts.fileUpload) return b.preventDefault(), b.stopPropagation(), !1;
                        a.markers.remove();
                        a.markers.insertAtPoint(b.originalEvent);
                        a.$el.find(".fr-marker").replaceWith(d.MARKERS);
                        a.popups.hideAll();
                        a.popups.get("file.insert") || x();
                        a.popups.setContainer("file.insert", a.$sc);
                        a.popups.show("file.insert", b.originalEvent.pageX, b.originalEvent.pageY);
                        c();
                        S(e.files);
                        b.preventDefault();
                        b.stopPropagation();
                        return !1
                    }
                } else 0 > f.type.indexOf("image") && (b.preventDefault(), b.stopPropagation())
            }
        }

        function oa() {
            a.events.on("drop", G);
            a.events.$on(a.$win, "keydown", function(b) {
                b = b.which;
                var c = a.popups.get("file.insert");
                c && b === d.KEYCODE.ESC && c.trigger("abortUpload")
            });
            a.events.on("destroy", function() {
                var b = a.popups.get("file.insert");
                b && b.trigger("abortUpload")
            })
        }

        function V() {
            var b = Array.prototype.slice.call(a.el.querySelectorAll("a.fr-file")),
                c = [],
                e;
            for (e = 0; e < b.length; e++) c.push(b[e].getAttribute("href"));
            if (n)
                for (e = 0; e < n.length; e++) 0 > c.indexOf(n[e].getAttribute("href")) && a.events.trigger("file.unlink", [n[e]]);
            n = b
        }
        var b = a.$,
            e = {
                1: "File cannot be loaded from the passed link.",
                2: "No link in upload response.",
                3: "Error during file upload.",
                4: "Parsing response failed.",
                5: "File is too large.",
                6: "File file type is invalid.",
                7: "Files can be uploaded only to same domain in IE 8 and IE 9."
            },
            n;
        return {
            _init: function() {
                oa();
                a.events.on("link.beforeRemove", C);
                a.$wp && (V(), a.events.on("contentChanged", V));
                x(!0)
            },
            showInsertPopup: function() {
                var b = a.$tb.find('.fr-command[data-cmd="insertFile"]'),
                    c = a.popups.get("file.insert");
                c || (c = x());
                h();
                c.hasClass("fr-active") || (a.popups.refresh("file.insert"), a.popups.setContainer("file.insert", a.$tb), b.isVisible ? (c = a.button.getPosition(b), a.popups.show("file.insert", c.left, c.top, b.outerHeight())) : (a.position.forSelection(c), a.popups.show("file.insert")))
            },
            upload: S,
            insert: R,
            back: function() {
                a.events.disableBlur();
                a.selection.restore();
                a.events.enableBlur();
                a.popups.hide("file.insert");
                a.toolbar.showInline()
            },
            hideProgressBar: h
        }
    };
    d.DefineIcon("insertFile", {
        NAME: "file-o",
        FA5NAME: "file",
        SVG_KEY: "insertFile"
    });
    d.RegisterCommand("insertFile", {
        title: "Upload File",
        undo: !1,
        focus: !0,
        refreshAfterCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("file.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("file.insert")) : this.file.showInsertPopup()
        },
        plugin: "file"
    });
    d.DefineIcon("fileBack", {
        NAME: "arrow-left",
        SVG_KEY: "back"
    });
    d.RegisterCommand("fileBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.file.back()
        },
        refresh: function(a) {
            this.opts.toolbarInline ? (a.removeClass("fr-hidden"), a.next(".fr-separator").removeClass("fr-hidden")) : (a.addClass("fr-hidden"), a.next(".fr-separator").addClass("fr-hidden"))
        }
    });
    d.RegisterCommand("fileDismissError", {
        title: "OK",
        callback: function() {
            this.file.hideProgressBar(!0)
        }
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.DEFAULTS, {
        fontFamily: {
            "Arial,Helvetica,sans-serif": "Arial",
            "Georgia,serif": "Georgia",
            "Impact,Charcoal,sans-serif": "Impact",
            "Tahoma,Geneva,sans-serif": "Tahoma",
            "Times New Roman,Times,serif,-webkit-standard": "Times New Roman",
            "Verdana,Geneva,sans-serif": "Verdana"
        },
        fontFamilySelection: !1,
        fontFamilyDefaultSelection: "Font Family"
    });
    d.PLUGINS.fontFamily = function(a) {
        function c(a) {
            a = a.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi, "").replace(/"|'| /g, "").split(",");
            return R(this).grep(a, function(a) {
                return 0 < a.length
            })
        }

        function d(a, c) {
            for (var d = 0; d < a.length; d++)
                for (var h = 0; h < c.length; h++)
                    if (a[d].toLowerCase() === c[h].toLowerCase()) return [d, h];
            return null
        }

        function M() {
            var h = R(a.selection.element()).css("font-family");
            h = c(h);
            var v = [],
                m;
            for (m in a.opts.fontFamily)
                if (a.opts.fontFamily.hasOwnProperty(m)) {
                    var t = c(m);
                    (t = d(h, t)) && v.push([m, t])
                }
            if (0 === v.length) return null;
            v.sort(function(a, c) {
                var d = a[1][0] - c[1][0];
                return 0 === d ? a[1][1] - c[1][1] : d
            });
            return v[0][0]
        }
        var R = a.$;
        return {
            apply: function(c) {
                a.format.applyStyle("font-family", c)
            },
            refreshOnShow: function(a, c) {
                c.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected", !1);
                c.find('.fr-command[data-param1="'.concat(M(), '"]')).addClass("fr-active").attr("aria-selected", !0)
            },
            refresh: function(c) {
                if (a.opts.fontFamilySelection) {
                    var d = R(a.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi, "").replace(/"|'|/g, "").split(",");
                    c.find("> span").text(a.opts.fontFamily[M()] || d[0] || a.language.translate(a.opts.fontFamilyDefaultSelection))
                }
            }
        }
    };
    d.RegisterCommand("fontFamily", {
        type: "dropdown",
        displaySelection: function(a) {
            return a.opts.fontFamilySelection
        },
        defaultSelection: function(a) {
            return a.opts.fontFamilyDefaultSelection
        },
        displaySelectionWidth: 120,
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = this.opts.fontFamily,
                d;
            for (d in c) c.hasOwnProperty(d) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'.concat(d, '" \n        style="font-family: ').concat(d, '" title="').concat(c[d], '">').concat(c[d], "</a></li>"));
            return a + "</ul>"
        },
        title: "Font Family",
        callback: function(a, c) {
            this.fontFamily.apply(c)
        },
        refresh: function(a) {
            this.fontFamily.refresh(a)
        },
        refreshOnShow: function(a, c) {
            this.fontFamily.refreshOnShow(a, c)
        },
        plugin: "fontFamily"
    });
    d.DefineIcon("fontFamily", {
        NAME: "font",
        SVG_KEY: "fontFamily"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.DEFAULTS, {
        fontSize: "8 9 10 11 12 14 18 24 30 36 48 60 72 96".split(" "),
        fontSizeSelection: !1,
        fontSizeDefaultSelection: "12",
        fontSizeUnit: "px"
    });
    d.PLUGINS.fontSize = function(a) {
        var c = a.$;
        return {
            apply: function(c) {
                a.format.applyStyle("font-size", c)
            },
            refreshOnShow: function(d, M) {
                d = c(a.selection.element()).css("font-size");
                "pt" === a.opts.fontSizeUnit && (d = "".concat(Math.round(72 * parseFloat(d, 10) / 96), "pt"));
                M.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected", !1);
                M.find('.fr-command[data-param1="'.concat(d, '"]')).addClass("fr-active").attr("aria-selected", !0)
            },
            refresh: function(d) {
                if (a.opts.fontSizeSelection) {
                    var h = a.helpers.getPX(c(a.selection.element()).css("font-size"));
                    "pt" === a.opts.fontSizeUnit && (h = "".concat(Math.round(72 * parseFloat(h, 10) / 96), "pt"));
                    d.find("> span").text(h)
                }
            }
        }
    };
    d.RegisterCommand("fontSize", {
        type: "dropdown",
        title: "Font Size",
        displaySelection: function(a) {
            return a.opts.fontSizeSelection
        },
        displaySelectionWidth: 30,
        defaultSelection: function(a) {
            return a.opts.fontSizeDefaultSelection
        },
        html: function() {
            for (var a = '<ul class="fr-dropdown-list" role="presentation">', c = this.opts.fontSize, d = 0; d < c.length; d++) {
                var M = c[d];
                a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'.concat(M).concat(this.opts.fontSizeUnit, '" title="').concat(M, '">').concat(M, "</a></li>")
            }
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.fontSize.apply(c)
        },
        refresh: function(a) {
            this.fontSize.refresh(a)
        },
        refreshOnShow: function(a, c) {
            this.fontSize.refreshOnShow(a, c)
        },
        plugin: "fontSize"
    });
    d.DefineIcon("fontSize", {
        NAME: "text-height",
        SVG_KEY: "fontSize"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    function a(c) {
        "@babel/helpers - typeof";
        a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        return a(c)
    }
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.POPUP_TEMPLATES, {
        "image.insert": "[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]",
        "image.edit": "[_BUTTONS_]",
        "image.alt": "[_BUTTONS_][_ALT_LAYER_]",
        "image.size": "[_BUTTONS_][_SIZE_LAYER_]"
    });
    Object.assign(d.DEFAULTS, {
        imageInsertButtons: ["imageBack", "|", "imageUpload", "imageByURL"],
        imageEditButtons: "imageReplace imageAlign imageCaption imageRemove imageLink linkOpen linkEdit linkRemove - imageDisplay imageStyle imageAlt imageSize".split(" "),
        imageAltButtons: ["imageBack", "|"],
        imageSizeButtons: ["imageBack", "|"],
        imageUpload: !0,
        imageUploadURL: null,
        imageCORSProxy: "https://cors-anywhere.froala.com",
        imageUploadRemoteUrls: !0,
        imageUploadParam: "file",
        imageUploadParams: {},
        imageUploadToS3: !1,
        imageUploadToAzure: !1,
        imageUploadMethod: "POST",
        imageMaxSize: 10485760,
        imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"],
        imageResize: !0,
        imageResizeWithPercent: !1,
        imageRoundPercent: !1,
        imageDefaultWidth: 300,
        imageDefaultAlign: "center",
        imageDefaultDisplay: "block",
        imageSplitHTML: !1,
        imageStyles: {
            "fr-rounded": "Rounded",
            "fr-bordered": "Bordered",
            "fr-shadow": "Shadow"
        },
        imageMove: !0,
        imageMultipleStyles: !0,
        imageTextNear: !0,
        imagePaste: !0,
        imagePasteProcess: !1,
        imageMinWidth: 16,
        imageOutputSize: !1,
        imageDefaultMargin: 5,
        imageAddNewLine: !1
    });
    d.PLUGINS.image = function(c) {
        function h() {
            var a = c.popups.get("image.insert").find(".fr-image-by-url-layer input");
            a.val("");
            p && a.val(p.attr("src"));
            a.trigger("change")
        }

        function M() {
            var a = c.popups.get("image.edit");
            a || (a = x());
            if (a) {
                a = ca();
                ia() && (a = a.find(".fr-img-wrap"));
                c.popups.setContainer("image.edit", c.$sc);
                c.popups.refresh("image.edit");
                var b = a.offset().left + a.outerWidth() / 2,
                    e = a.offset().top + a.outerHeight();
                p.hasClass("fr-uploading") ? C() : c.popups.show("image.edit", b, e, a.outerHeight(), !0)
            }
        }

        function R() {
            G()
        }

        function X() {
            for (var a = "IMG" == c.el.tagName ? [c.el] : c.el.querySelectorAll("img"), b = 0; b < a.length; b++) {
                var e = O(a[b]);
                if (!c.opts.htmlUntouched && c.opts.useClasses) {
                    if (c.opts.imageDefaultAlign || c.opts.imageDefaultDisplay) {
                        var d = e;
                        0 < d.parents(".fr-img-caption").length && (d = d.parents(".fr-img-caption").first());
                        d.hasClass("fr-dii") || d.hasClass("fr-dib") || (d.addClass("fr-fi".concat(D(d)[0])), d.addClass("fr-di".concat(N(d)[0])), d.css("margin", ""), d.css("float", ""), d.css("display", ""), d.css("z-index", ""), d.css("position", ""), d.css("overflow", ""), d.css("vertical-align", ""))
                    }
                    c.opts.imageTextNear || (0 < e.parents(".fr-img-caption").length ? e.parents(".fr-img-caption").first().removeClass("fr-dii").addClass("fr-dib") : e.removeClass("fr-dii").addClass("fr-dib"))
                } else if (!c.opts.htmlUntouched && !c.opts.useClasses && (c.opts.imageDefaultAlign || c.opts.imageDefaultDisplay)) {
                    d = e;
                    0 < d.parents(".fr-img-caption").length && (d = d.parents(".fr-img-caption").first());
                    var f = d.hasClass("fr-dib") ? "block" : d.hasClass("fr-dii") ? "inline" : null,
                        g = d.hasClass("fr-fil") ? "left" : d.hasClass("fr-fir") ? "right" : D(d);
                    B(d, f, g);
                    d.removeClass("fr-dib fr-dii fr-fir fr-fil")
                }
                if (c.opts.iframe) e.on("load", c.size.syncIframe)
            }
        }

        function v(a) {
            "undefined" === typeof a && (a = !0);
            var b = Array.prototype.slice.call(c.el.querySelectorAll("img")),
                e = [],
                d;
            for (d = 0; d < b.length; d++)
                if (e.push(b[d].getAttribute("src")), O(b[d]).toggleClass("fr-draggable", c.opts.imageMove), "" === b[d].getAttribute("class") && b[d].removeAttribute("class"), "" === b[d].getAttribute("style") && b[d].removeAttribute("style"), b[d].parentNode && b[d].parentNode.parentNode && c.node.hasClass(b[d].parentNode.parentNode, "fr-img-caption")) {
                    var f = b[d].parentNode.parentNode;
                    c.browser.mozilla || f.setAttribute("contenteditable", !1);
                    f.setAttribute("draggable", !1);
                    f.classList.add("fr-draggable");
                    (f = b[d].nextSibling) && !c.browser.mozilla && f.setAttribute("contenteditable", !0)
                }
            if (ta)
                for (d = 0; d < ta.length; d++) 0 > e.indexOf(ta[d].getAttribute("src")) && c.events.trigger("image.removed", [O(ta[d])]);
            if (ta && a) {
                a = [];
                for (d = 0; d < ta.length; d++) a.push(ta[d].getAttribute("src"));
                for (d = 0; d < b.length; d++) 0 > a.indexOf(b[d].getAttribute("src")) && c.events.trigger("image.loaded", [O(b[d])])
            }
            ta = b
        }

        function m() {
            Y || W();
            if (!p) return !1;
            var a = c.$wp || c.$sc;
            a.append(Y);
            Y.data("instance", c);
            var b = a.scrollTop() - ("static" != a.css("position") ? a.offset().top : 0),
                d = a.scrollLeft() - ("static" != a.css("position") ? a.offset().left : 0);
            d -= c.helpers.getPX(a.css("border-left-width"));
            b -= c.helpers.getPX(a.css("border-top-width"));
            c.$el.is("img") && c.$sc.is("body") && (d = b = 0);
            a = ca();
            ia() && (a = a.find(".fr-img-wrap"));
            var e = 0,
                f = 0;
            c.opts.iframe && (e = c.helpers.getPX(c.$wp.find(".fr-iframe").css("padding-top")), f = c.helpers.getPX(c.$wp.find(".fr-iframe").css("padding-left")));
            Y.css("top", (c.opts.iframe ? a.offset().top + e : a.offset().top + b) - 1).css("left", (c.opts.iframe ? a.offset().left + f : a.offset().left + d) - 1).css("width", a.get(0).getBoundingClientRect().width).css("height", a.get(0).getBoundingClientRect().height).addClass("fr-active")
        }

        function t(a) {
            return '<div class="fr-handler fr-h'.concat(a, '"></div>')
        }

        function L(a) {
            ia() ? p.parents(".fr-img-caption").css("width", a) : p.css("width", a)
        }

        function y(a) {
            if (!c.core.sameInstance(Y)) return !0;
            a.preventDefault();
            a.stopPropagation();
            if (c.$el.find("img.fr-error").left) return !1;
            c.undo.canDo() || c.undo.saveStep();
            var b = a.pageX || a.originalEvent.touches[0].pageX;
            if ("mousedown" == a.type) {
                a = c.$oel.get(0).ownerDocument;
                a = a.defaultView || a.parentWindow;
                var d = !1;
                try {
                    d = a.location != a.parent.location && !(a.$ && a.$.FE)
                } catch (Fa) {}
                d && a.frameElement && (b += c.helpers.getPX(O(a.frameElement).offset().left) + a.frameElement.clientLeft)
            }
            aa = O(this);
            aa.data("start-x", b);
            aa.data("start-width", p.width());
            aa.data("start-height", p.height());
            b = p.width();
            c.opts.imageResizeWithPercent && (a = p.parentsUntil(c.$el, c.html.blockTagsQuery()).get(0) || c.el, b = (b / O(a).outerWidth() * 100).toFixed(2) + "%");
            L(b);
            sa.show();
            c.popups.hideAll();
            xa = !1
        }

        function S(a) {
            if (!c.core.sameInstance(Y)) return !0;
            if (aa && p) {
                a.preventDefault();
                if (c.$el.find("img.fr-error").left) return !1;
                a = a.pageX || (a.originalEvent.touches ? a.originalEvent.touches[0].pageX : null);
                if (!a) return !1;
                var b = aa.data("start-x");
                a -= b;
                b = aa.data("start-width");
                if (aa.hasClass("fr-hnw") || aa.hasClass("fr-hsw")) a = 0 - a;
                if (c.opts.imageResizeWithPercent) {
                    var d = p.parentsUntil(c.$el, c.html.blockTagsQuery()).get(0) || c.el;
                    b = ((b + a) / O(d).outerWidth() * 100).toFixed(2);
                    c.opts.imageRoundPercent && (b = Math.round(b));
                    L("".concat(b, "%"));
                    d = ia() ? (c.helpers.getPX(p.parents(".fr-img-caption").css("width")) / O(d).outerWidth() * 100).toFixed(2) : (c.helpers.getPX(p.css("width")) / O(d).outerWidth() * 100).toFixed(2);
                    d === b || c.opts.imageRoundPercent || L("".concat(d, "%"));
                    p.css("height", "").removeAttr("height")
                } else if (b + a >= c.opts.imageMinWidth && (L(b + a), d = ia() ? c.helpers.getPX(p.parents(".fr-img-caption").css("width")) : c.helpers.getPX(p.css("width"))), d !== b + a && L(d), (p.attr("style") || "").match(/(^height:)|(; *height:)/) || p.attr("height")) p.css("height", aa.data("start-height") * p.width() / aa.data("start-width")), p.removeAttr("height");
                m();
                c.events.trigger("image.resize", [p])
            }
        }

        function w(a) {
            if (!c.core.sameInstance(Y)) return !0;
            if (aa && p) {
                a && a.stopPropagation();
                if (c.$el.find("img.fr-error").left) return !1;
                aa = null;
                sa.hide();
                m();
                M();
                c.undo.saveStep();
                c.events.trigger("image.resizeEnd", [p])
            } else Y.removeClass("fr-active")
        }

        function f(a, b, d) {
            c.edit.on();
            p && p.addClass("fr-error");
            Aa[a] ? V(c.language.translate(Aa[a])) : V(c.language.translate("Something went wrong. Please try again."));
            !p && d && H(d);
            c.events.trigger("image.error", [{
                code: a,
                message: Aa[a]
            }, b, d])
        }

        function x(a) {
            return a ? (c.$wp && c.events.$on(c.$wp, "scroll.image-edit", function() {
                p && c.popups.isVisible("image.edit") && (c.events.disableBlur(), M())
            }), !0) : 0 < c.opts.imageEditButtons.length ? (a = "" + '<div class="fr-buttons"> \n        '.concat(c.button.buildList(c.opts.imageEditButtons), "\n        </div>"), c.popups.create("image.edit", {
                buttons: a
            })) : !1
        }

        function C(a) {
            var b = c.popups.get("image.insert");
            b || (b = pa());
            b.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive");
            b.find(".fr-image-progress-bar-layer").addClass("fr-active");
            b.find(".fr-buttons").hide();
            if (p) {
                b = ca();
                c.popups.setContainer("image.insert", c.$sc);
                var d = b.offset().left,
                    e = b.offset().top + b.height();
                c.popups.show("image.insert", d, e, b.outerHeight())
            }
            "undefined" == typeof a && oa(c.language.translate("Uploading"), 0)
        }

        function G(a) {
            var b = c.popups.get("image.insert");
            b && (b.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"), b.find(".fr-image-progress-bar-layer").removeClass("fr-active"), b.find(".fr-buttons").show(), a || c.$el.find("img.fr-error").length) && (c.events.focus(), c.$el.find("img.fr-error").length && (c.$el.find("img.fr-error").remove(), c.undo.saveStep(), c.undo.run(), c.undo.dropRedo()), !c.$wp && p && (a = p, Q(!0), c.selection.setAfter(a.get(0)), c.selection.restore()), c.popups.hide("image.insert"))
        }

        function oa(a, b) {
            var d = c.popups.get("image.insert");
            d && (d = d.find(".fr-image-progress-bar-layer"), d.find("h3").text(a + (b ? " ".concat(b, "%") : "")), d.removeClass("fr-error"), b ? (d.find("div").removeClass("fr-indeterminate"), d.find("div > span").css("width", "".concat(b, "%"))) : d.find("div").addClass("fr-indeterminate"))
        }

        function V(a) {
            C();
            var b = c.popups.get("image.insert").find(".fr-image-progress-bar-layer");
            b.addClass("fr-error");
            b = b.find("h3");
            b.text(a);
            c.events.disableBlur();
            b.focus()
        }

        function b(a) {
            J.call(a.get(0))
        }

        function e() {
            var a = O(this);
            c.popups.hide("image.insert");
            a.removeClass("fr-uploading");
            a.next().is("br") && a.next().remove();
            b(a);
            c.events.trigger("image.loaded", [a])
        }

        function n(a, b, d, g, p) {
            g && "string" === typeof g && (g = c.$(g));
            c.edit.off();
            oa(c.language.translate("Loading image"));
            b && (a = c.helpers.sanitizeURL(a));
            b = new Image;
            b.onload = function() {
                var b;
                if (g) {
                    c.undo.canDo() || g.hasClass("fr-uploading") || c.undo.saveStep();
                    var f = g.data("fr-old-src");
                    g.data("fr-image-pasted") && (f = null);
                    if (c.$wp) {
                        var k = g.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted");
                        k.off("load");
                        f && g.attr("src", f);
                        g.replaceWith(k)
                    } else k = g;
                    for (var ja = k.get(0).attributes, h = 0; h < ja.length; h++) {
                        var Y = ja[h];
                        0 === Y.nodeName.indexOf("data-") ? k.removeAttr(Y.nodeName) : d.hasOwnProperty(Y.nodeName) && k.removeAttr(Y.nodeName)
                    }
                    if ("undefined" != typeof d)
                        for (b in d) d.hasOwnProperty(b) && "link" != b && k.attr("".concat(b), d[b]);
                    k.on("load", e);
                    k.attr("src", a);
                    c.edit.on();
                    v(!1);
                    c.undo.saveStep();
                    c.events.disableBlur();
                    c.$el.blur();
                    c.events.trigger(f ? "image.replaced" : "image.inserted", [k, p])
                } else k = A(a, d, e), v(!1), c.undo.saveStep(), c.events.disableBlur(), c.$el.blur(), c.events.trigger("image.inserted", [k, p])
            };
            b.onerror = function() {
                f(1)
            };
            C(c.language.translate("Loading image"));
            b.src = a
        }

        function k(a) {
            try {
                if (!1 === c.events.trigger("image.uploaded", [a], !0)) return c.edit.on(), !1;
                var b = JSON.parse(a);
                if (b.link) return b;
                f(2, a);
                return !1
            } catch (Ea) {
                return f(4, a), !1
            }
        }

        function g() {
            f(4, this.response || this.responseText || this.responseXML)
        }

        function I(a) {
            a.lengthComputable && (a = a.loaded / a.total * 100 | 0, oa(c.language.translate("Uploading"), a))
        }

        function A(a, b, d) {
            var e = "",
                f;
            a = O(document.createElement("img")).attr("src", a);
            if (b && "undefined" != typeof b)
                for (f in b) b.hasOwnProperty(f) && "link" != f && (e += " data-".concat(f, '="').concat(b[f], '"'), a.attr("".concat(f), b[f]));
            (b = c.opts.imageDefaultWidth) && "auto" != b && (b = c.opts.imageResizeWithPercent ? "100%" : "".concat(b, "px"));
            a.attr("style", b ? "width: ".concat(b, ";") : "");
            B(a, c.opts.imageDefaultDisplay, c.opts.imageDefaultAlign);
            a.on("load", d);
            a.on("error", d);
            c.edit.on();
            c.events.focus(!0);
            c.selection.restore();
            c.undo.saveStep();
            c.opts.imageSplitHTML ? c.markers.split() : c.markers.insert();
            c.html.wrap();
            d = c.$el.find(".fr-marker");
            d.length ? (d.parent().is("hr") && d.parent().after(d), c.node.isLastSibling(d) && d.parent().hasClass("fr-deletable") && d.insertAfter(d.parent()), d.replaceWith(a)) : c.$el.append(a);
            c.selection.clear();
            return a
        }

        function ua() {
            c.edit.on();
            G(!0)
        }

        function Z(a, d, e, p, h, Y) {
            function ja() {
                var ja = O(this);
                ja.off("load");
                ja.addClass("fr-uploading");
                ja.next().is("br") && ja.next().remove();
                c.placeholder.refresh();
                b(ja);
                m();
                C();
                c.edit.off();
                a.onload = function() {
                    a: {
                        oa(c.language.translate("Loading image"));
                        var b = a.status,
                            d = a.response,
                            e = a.responseXML,
                            g = a.responseText;
                        try {
                            if (c.opts.imageUploadToS3 || c.opts.imageUploadToAzure)
                                if (201 == b) {
                                    if (c.opts.imageUploadToAzure) {
                                        if (!1 === c.events.trigger("image.uploadedToAzure", [a.responseURL, Y, d], !0)) {
                                            c.edit.on();
                                            break a
                                        }
                                        var p = h
                                    } else try {
                                        var aa = O(e).find("Location").text(),
                                            B = O(e).find("Key").text();
                                        !1 === c.events.trigger("image.uploadedToS3", [aa, B, e], !0) ? (c.edit.on(), p = !1) : p = aa
                                    } catch (Da) {
                                        f(4, e), p = !1
                                    }
                                    p && n(p, !1, [], ja, d || e)
                                } else f(4, d || e, ja);
                            else if (200 <= b && 300 > b) {
                                var l = k(g);
                                l && n(l.link, !1, l, ja, d || g)
                            } else f(3, d || g, ja)
                        } catch (Da) {
                            f(4, d || g, ja)
                        }
                    }
                };
                a.onerror = g;
                a.upload.onprogress = I;
                a.onabort = ua;
                O(ja.off("abortUpload")).on("abortUpload", function() {
                    4 != a.readyState && (a.abort(), p ? (p.attr("src", p.data("fr-old-src")), p.removeClass("fr-uploading")) : ja.remove(), Q(!0))
                });
                a.send(c.opts.imageUploadToAzure ? e : d)
            }
            var aa = new FileReader;
            aa.onload = function() {
                var a = aa.result;
                if (0 > aa.result.indexOf("svg+xml")) {
                    a = atob(aa.result.split(",")[1]);
                    for (var b = [], d = 0; d < a.length; d++) b.push(a.charCodeAt(d));
                    a = window.URL.createObjectURL(new Blob([new Uint8Array(b)], {
                        type: "image/jpeg"
                    }))
                }
                p ? (p.on("load", ja), p.on("error", function() {
                    ja();
                    O(this).off("error")
                }), c.edit.on(), c.undo.saveStep(), p.data("fr-old-src", p.attr("src")), p.attr("src", a)) : A(a, null, ja)
            };
            aa.readAsDataURL(e)
        }

        function E(a, b) {
            var d = new FileReader;
            d.onload = function() {
                if (0 > d.result.indexOf("svg+xml")) {
                    var e = atob(d.result.split(",")[1]);
                    for (var f = [], g = 0; g < e.length; g++) f.push(e.charCodeAt(g));
                    e = window.URL.createObjectURL(new Blob([new Uint8Array(f)], {
                        type: a.type
                    }));
                    b && b.data("fr-old-src", b.attr("src"));
                    c.image.insert(e, !1, null, b)
                }
            };
            C();
            d.readAsDataURL(a)
        }

        function F(a, b) {
            if ("undefined" != typeof a && 0 < a.length) {
                if (!1 === c.events.trigger("image.beforeUpload", [a, b])) return !1;
                a = a[0];
                if (!(null !== c.opts.imageUploadURL && "https://i.froala.com/upload" != c.opts.imageUploadURL || c.opts.imageUploadToS3 || c.opts.imageUploadToAzure)) return E(a, b || p), !1;
                a.name || (a.name = (new Date).getTime() + "." + (a.type || "image/jpeg").replace(/image\//g, ""));
                if (a.size > c.opts.imageMaxSize) return f(5), !1;
                if (0 > c.opts.imageAllowedTypes.indexOf(a.type.replace(/image\//g, ""))) return f(6), !1;
                var d;
                c.drag_support.formdata && (d = c.drag_support.formdata ? new FormData : null);
                if (d) {
                    var e;
                    if (!1 !== c.opts.imageUploadToS3)
                        for (e in d.append("key", c.opts.imageUploadToS3.keyStart + (new Date).getTime() + "-" + (a.name || "untitled")), d.append("success_action_status", "201"), d.append("X-Requested-With", "xhr"), d.append("Content-Type", a.type), c.opts.imageUploadToS3.params) c.opts.imageUploadToS3.params.hasOwnProperty(e) && d.append(e, c.opts.imageUploadToS3.params[e]);
                    for (e in c.opts.imageUploadParams) c.opts.imageUploadParams.hasOwnProperty(e) && d.append(e, c.opts.imageUploadParams[e]);
                    d.append(c.opts.imageUploadParam, a, a.name);
                    var g = c.opts.imageUploadURL,
                        k = c.opts.imageUploadMethod;
                    c.opts.imageUploadToS3 && (g = c.opts.imageUploadToS3.uploadURL ? c.opts.imageUploadToS3.uploadURL : "https://".concat(c.opts.imageUploadToS3.region, ".amazonaws.com/").concat(c.opts.imageUploadToS3.bucket));
                    if (c.opts.imageUploadToAzure) {
                        var h = g = c.opts.imageUploadToAzure.uploadURL ? "".concat(c.opts.imageUploadToAzure.uploadURL, "/").concat(a.name) : encodeURI("https://".concat(c.opts.imageUploadToAzure.account, ".blob.core.windows.net/").concat(c.opts.imageUploadToAzure.container, "/").concat(a.name));
                        c.opts.imageUploadToAzure.SASToken && (g += c.opts.imageUploadToAzure.SASToken);
                        k = "PUT"
                    }
                    g = c.core.getXHR(g, k);
                    if (c.opts.imageUploadToAzure) {
                        var ja = (new Date).toUTCString();
                        if (!c.opts.imageUploadToAzure.SASToken && c.opts.imageUploadToAzure.accessKey) {
                            var Y = c.opts.imageUploadToAzure.account;
                            var aa = c.opts.imageUploadToAzure.container;
                            c.opts.imageUploadToAzure.uploadURL && (Y = c.opts.imageUploadToAzure.uploadURL.split("/"), aa = Y.pop(), Y = Y.pop().split(".")[0]);
                            var B = "x-ms-blob-type:BlockBlob\nx-ms-date:".concat(ja, "\nx-ms-version:2019-07-07");
                            aa = encodeURI("/" + Y + "/" + aa + "/" + a.name);
                            aa = k = c.cryptoJSPlugin.cryptoJS.HmacSHA256(k + "\n\n\n" + a.size + "\n\n" + a.type + "\n\n\n\n\n\n\n" + B + "\n" + aa, c.cryptoJSPlugin.cryptoJS.enc.Base64.parse(c.opts.imageUploadToAzure.accessKey)).toString(c.cryptoJSPlugin.cryptoJS.enc.Base64);
                            g.setRequestHeader("Authorization", "SharedKey " + Y + ":" + k)
                        }
                        g.setRequestHeader("x-ms-version", "2019-07-07");
                        g.setRequestHeader("x-ms-date", ja);
                        g.setRequestHeader("Content-Type", a.type);
                        g.setRequestHeader("x-ms-blob-type", "BlockBlob");
                        for (e in c.opts.imageUploadParams) c.opts.imageUploadParams.hasOwnProperty(e) && g.setRequestHeader(e, c.opts.imageUploadParams[e]);
                        for (e in c.opts.imageUploadToAzure.params) c.opts.imageUploadToAzure.params.hasOwnProperty(e) && g.setRequestHeader(e, c.opts.imageUploadToAzure.params[e])
                    }
                    Z(g, d, a, b || p, h, aa)
                }
            }
        }

        function na(a) {
            c.events.$on(a, "dragover dragenter", ".fr-image-upload-layer", function(a) {
                O(this).addClass("fr-drop");
                (c.browser.msie || c.browser.edge) && a.preventDefault();
                return !1
            }, !0);
            c.events.$on(a, "dragleave dragend", ".fr-image-upload-layer", function(a) {
                O(this).removeClass("fr-drop");
                (c.browser.msie || c.browser.edge) && a.preventDefault();
                return !1
            }, !0);
            c.events.$on(a, "drop", ".fr-image-upload-layer", function(b) {
                b.preventDefault();
                b.stopPropagation();
                O(this).removeClass("fr-drop");
                if ((b = b.originalEvent.dataTransfer) && b.files) {
                    var d = a.data("instance") || c;
                    d.events.disableBlur();
                    d.image.upload(b.files);
                    d.events.enableBlur()
                }
            }, !0);
            c.helpers.isIOS() && c.events.$on(a, "touchstart", '.fr-image-upload-layer input[type="file"]', function() {
                O(this).trigger("click")
            }, !0);
            c.events.$on(a, "change", '.fr-image-upload-layer input[type="file"]', function() {
                if (this.files) {
                    var b = a.data("instance") || c;
                    b.events.disableBlur();
                    a.find("input:focus").blur();
                    b.events.enableBlur();
                    b.image.upload(this.files, p)
                }
                O(this).val("")
            }, !0)
        }

        function ya(a) {
            if (a.is("img") && 0 < a.parents(".fr-img-caption").length) return a.parents(".fr-img-caption")
        }

        function va(a) {
            var b = a.originalEvent.dataTransfer;
            if (b && b.files && b.files.length) {
                var e = b.files[0];
                if (e && e.type && -1 !== e.type.indexOf("image") && 0 <= c.opts.imageAllowedTypes.indexOf(e.type.replace(/image\//g, ""))) {
                    if (!c.opts.imageUpload) return a.preventDefault(), a.stopPropagation(), !1;
                    c.markers.remove();
                    c.markers.insertAtPoint(a.originalEvent);
                    c.$el.find(".fr-marker").replaceWith(d.MARKERS);
                    0 === c.$el.find(".fr-marker").length && c.selection.setAtEnd(c.el);
                    c.popups.hideAll();
                    c.popups.get("image.insert") || pa();
                    c.popups.setContainer("image.insert", c.$sc);
                    var g = a.originalEvent.pageX,
                        p = a.originalEvent.pageY;
                    if (c.opts.iframe) {
                        var k = c.helpers.getPX(c.$wp.find(".fr-iframe").css("padding-top")),
                            h = c.helpers.getPX(c.$wp.find(".fr-iframe").css("padding-left"));
                        p += c.$iframe.offset().top + k;
                        g += c.$iframe.offset().left + h
                    }
                    c.popups.show("image.insert", g, p);
                    C();
                    0 <= c.opts.imageAllowedTypes.indexOf(e.type.replace(/image\//g, "")) ? (Q(!0), F(b.files)) : f(6);
                    a.preventDefault();
                    a.stopPropagation();
                    return !1
                }
            }
        }

        function q() {
            c.events.$on(c.$el, c._mousedown, "IMG" == c.el.tagName ? null : 'img:not([contenteditable="false"])', function(a) {
                if ("false" == O(this).parents("contenteditable").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable")) return !0;
                c.helpers.isMobile() || c.selection.clear();
                za = !0;
                c.popups.areVisible() && c.events.disableBlur();
                c.browser.msie && (c.events.disableBlur(), c.$el.attr("contenteditable", !1));
                c.draggable || "touchstart" == a.type || a.preventDefault();
                a.stopPropagation()
            });
            c.events.$on(c.$el, c._mousedown, ".fr-img-caption .fr-inner", function(a) {
                c.core.hasFocus() || c.events.focus();
                a.stopPropagation()
            });
            c.events.$on(c.$el, "paste", ".fr-img-caption .fr-inner", function(a) {
                c.toolbar.hide();
                a.stopPropagation()
            });
            c.events.$on(c.$el, c._mouseup, "IMG" == c.el.tagName ? null : 'img:not([contenteditable="false"])', function(a) {
                if ("false" == O(this).parents("contenteditable").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable")) return !0;
                za && (za = !1, a.stopPropagation(), c.browser.msie && (c.$el.attr("contenteditable", !0), c.events.enableBlur()))
            });
            c.events.on("keyup", function(a) {
                if (a.shiftKey && "" === c.selection.text().replace(/\n/g, "") && c.keys.isArrow(a.which)) {
                    a = c.selection.element();
                    var d = c.selection.endElement();
                    a && "IMG" == a.tagName ? b(O(a)) : d && "IMG" == d.tagName && b(O(d))
                }
            }, !0);
            c.events.on("drop", va);
            c.events.on("element.beforeDrop", ya);
            c.events.on("mousedown window.mousedown", ma);
            c.events.on("window.touchmove", wa);
            c.events.on("mouseup window.mouseup", function() {
                if (p) return Q(), !1;
                xa = !1
            });
            c.events.on("commands.mousedown", function(a) {
                0 < a.parents(".fr-toolbar").length && Q()
            });
            c.events.on("image.resizeEnd", function() {
                c.opts.iframe && c.size.syncIframe()
            });
            c.events.on("blur image.hideResizer commands.undo commands.redo element.dropped", function() {
                za = !1;
                Q(!0)
            });
            c.events.on("modals.hide", function() {
                p && (la(), c.selection.clear())
            });
            c.events.on("image.resizeEnd", function() {
                c.win.getSelection && b(p)
            });
            if (c.opts.imageAddNewLine) c.events.on("image.inserted", function(a) {
                var b = a.get(0);
                b.nextSibling && "BR" === b.nextSibling.tagName && (b = b.nextSibling);
                for (; b && !c.node.isElement(b);) b = c.node.isLastSibling(b) ? b.parentNode : null;
                c.node.isElement(b) && (c.opts.enter === d.ENTER_BR ? a.after("<br>") : O(c.node.blockParent(a.get(0))).after("<".concat(c.html.defaultTag(), "><br></").concat(c.html.defaultTag(), ">")))
            })
        }

        function pa(a) {
            if (a) return c.popups.onRefresh("image.insert", h), c.popups.onHide("image.insert", R), !0;
            var b;
            a = "";
            c.opts.imageUpload || -1 === c.opts.imageInsertButtons.indexOf("imageUpload") || c.opts.imageInsertButtons.splice(c.opts.imageInsertButtons.indexOf("imageUpload"), 1);
            var d = c.button.buildList(c.opts.imageInsertButtons);
            "" !== d && (a = '<div class="fr-buttons fr-tabs">'.concat(d, "</div>"));
            d = c.opts.imageInsertButtons.indexOf("imageUpload");
            var e = c.opts.imageInsertButtons.indexOf("imageByURL"),
                f = "";
            if (0 <= d) {
                var g = " fr-active";
                0 <= e && d > e && (g = "");
                f = '<div class="fr-image-upload-layer'.concat(g, ' fr-layer" id="fr-image-upload-layer-').concat(c.id, '"><strong>').concat(c.language.translate("Drop image"), "</strong><br>(").concat(c.language.translate("or click"), ')<div class="fr-form"><input type="file" accept="image/').concat(c.opts.imageAllowedTypes.join(", image/").toLowerCase(), '" tabIndex="-1" aria-labelledby="fr-image-upload-layer-').concat(c.id, '" role="button"></div></div>')
            }
            g = "";
            0 <= e && (g = " fr-active", 0 <= d && e > d && (g = ""), g = '<div class="fr-image-by-url-layer'.concat(g, ' fr-layer" id="fr-image-by-url-layer-').concat(c.id, '"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-').concat(c.id, '" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">').concat(c.language.translate("Insert"), "</button></div></div>"));
            a = {
                buttons: a,
                upload_layer: f,
                by_url_layer: g,
                progress_bar: '<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>'
            };
            1 <= c.opts.imageInsertButtons.length && (b = c.popups.create("image.insert", a));
            c.$wp && c.events.$on(c.$wp, "scroll", function() {
                p && c.popups.isVisible("image.insert") && U()
            });
            na(b);
            return b
        }

        function da() {
            p && c.popups.get("image.alt").find("input").val(p.attr("alt") || "").trigger("change")
        }

        function fa() {
            c.popups.get("image.alt") || ba();
            G();
            c.popups.refresh("image.alt");
            c.popups.setContainer("image.alt", c.$sc);
            var a = ca();
            ia() && (a = a.find(".fr-img-wrap"));
            var b = a.offset().left + a.outerWidth() / 2,
                d = a.offset().top + a.outerHeight();
            c.popups.show("image.alt", b, d, a.outerHeight(), !0)
        }

        function ba(a) {
            if (a) return c.popups.onRefresh("image.alt", da), !0;
            a = "";
            a = '<div class="fr-buttons fr-tabs">'.concat(c.button.buildList(c.opts.imageAltButtons), "</div>");
            var b = "";
            b = '<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'.concat(c.id, '"><div class="fr-input-line"><input id="fr-image-alt-layer-text-').concat(c.id, '" type="text" placeholder="').concat(c.language.translate("Alternative Text"), '" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">').concat(c.language.translate("Update"), "</button></div></div>");
            a = c.popups.create("image.alt", {
                buttons: a,
                alt_layer: b
            });
            c.$wp && c.events.$on(c.$wp, "scroll.image-alt", function() {
                p && c.popups.isVisible("image.alt") && fa()
            });
            return a
        }

        function r() {
            var a = c.popups.get("image.size"),
                b = p.get(0).style.height ? p.get(0).style.height : "auto",
                d = p.get(0).style.width ? p.get(0).style.width : "auto";
            p && (ia() && (p.parent().get(0).style.width || p.parent().parent()), a.find('input[name="width"]').val(d).trigger("change"), a.find('input[name="height"]').val(b).trigger("change"))
        }

        function z() {
            c.popups.get("image.size") || l();
            G();
            c.popups.refresh("image.size");
            c.popups.setContainer("image.size", c.$sc);
            var a = ca();
            ia() && (a = a.find(".fr-img-wrap"));
            var b = a.offset().left + a.outerWidth() / 2,
                d = a.offset().top + a.outerHeight();
            c.popups.show("image.size", b, d, a.outerHeight(), !0)
        }

        function l(a) {
            if (a) return c.popups.onRefresh("image.size", r), !0;
            a = "";
            a = '<div class="fr-buttons fr-tabs">'.concat(c.button.buildList(c.opts.imageSizeButtons), "</div>");
            var b = "";
            b = '<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'.concat(c.id, '"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-\'').concat(c.id, '" type="text" name="width" placeholder="').concat(c.language.translate("Width"), '" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height').concat(c.id, '" type="text" name="height" placeholder="').concat(c.language.translate("Height"), '" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">').concat(c.language.translate("Update"), "</button></div></div>");
            a = c.popups.create("image.size", {
                buttons: a,
                size_layer: b
            });
            c.$wp && c.events.$on(c.$wp, "scroll.image-size", function() {
                p && c.popups.isVisible("image.size") && z()
            });
            return a
        }

        function u(a, b, c, d) {
            a.pageX = b;
            y.call(this, a);
            a.pageX += c * Math.floor(Math.pow(1.1, d));
            S.call(this, a);
            w.call(this, a);
            return ++d
        }

        function W() {
            if (c.shared.$image_resizer) Y = c.shared.$image_resizer, sa = c.shared.$img_overlay, c.events.on("destroy", function() {
                O("body").first().append(Y.removeClass("fr-active"))
            }, !0);
            else if (c.shared.$image_resizer = O(document.createElement("div")).attr("class", "fr-image-resizer"), Y = c.shared.$image_resizer, c.events.$on(Y, "mousedown", function(a) {
                    a.stopPropagation()
                }, !0), c.opts.imageResize) {
                Y.append(t("nw") + t("ne") + t("sw") + t("se"));
                c.shared.$img_overlay = O(document.createElement("div")).attr("class", "fr-image-overlay");
                sa = c.shared.$img_overlay;
                var a = Y.get(0).ownerDocument;
                O(a).find("body").first().append(sa)
            }
            c.events.on("shared.destroy", function() {
                Y.html("").removeData().remove();
                Y = null;
                c.opts.imageResize && (sa.remove(), sa = null)
            }, !0);
            c.helpers.isMobile() || c.events.$on(O(c.o_win), "resize", function() {
                p && !p.hasClass("fr-uploading") ? Q(!0) : p && (m(), U(), C(!1))
            });
            if (c.opts.imageResize) {
                a = Y.get(0).ownerDocument;
                c.events.$on(Y, c._mousedown, ".fr-handler", y);
                c.events.$on(O(a), c._mousemove, S);
                c.events.$on(O(a.defaultView || a.parentWindow), c._mouseup, w);
                c.events.$on(sa, "mouseleave", w);
                var e = 1,
                    f = null,
                    g = 0;
                c.events.on("keydown", function(a) {
                    if (p) {
                        var k = -1 != navigator.userAgent.indexOf("Mac OS X") ? a.metaKey : a.ctrlKey,
                            h = a.which;
                        if (h !== f || 200 < a.timeStamp - g) e = 1;
                        (h == d.KEYCODE.EQUALS || c.browser.mozilla && h == d.KEYCODE.FF_EQUALS) && k && !a.altKey ? e = u.call(this, a, 1, 1, e) : (h == d.KEYCODE.HYPHEN || c.browser.mozilla && h == d.KEYCODE.FF_HYPHEN) && k && !a.altKey ? e = u.call(this, a, 2, -1, e) : c.keys.ctrlKey(a) || h != d.KEYCODE.ENTER || (p.before("<br>"), b(p));
                        f = h;
                        g = a.timeStamp
                    }
                }, !0);
                c.events.on("keyup", function() {
                    e = 1
                })
            }
        }

        function H(a) {
            (a = a || ca()) && !1 !== c.events.trigger("image.beforeRemove", [a]) && (c.popups.hideAll(), la(), Q(!0), c.undo.canDo() || c.undo.saveStep(), a.get(0) == c.el ? a.removeAttr("src") : (a.get(0).parentNode && "A" == a.get(0).parentNode.tagName ? (c.selection.setBefore(a.get(0).parentNode) || c.selection.setAfter(a.get(0).parentNode) || a.parent().after(d.MARKERS), O(a.get(0).parentNode).remove()) : (c.selection.setBefore(a.get(0)) || c.selection.setAfter(a.get(0)) || a.after(d.MARKERS), a.remove()), c.html.fillEmptyBlocks(), c.selection.restore()), c.undo.saveStep())
        }

        function T(a) {
            var b = a.which;
            if (!p || b != d.KEYCODE.BACKSPACE && b != d.KEYCODE.DELETE) {
                if (p && b == d.KEYCODE.ESC) return b = p, Q(!0), c.selection.setAfter(b.get(0)), c.selection.restore(), a.preventDefault(), !1;
                if (!p || b != d.KEYCODE.ARROW_LEFT && b != d.KEYCODE.ARROW_RIGHT) {
                    if (p && b === d.KEYCODE.TAB) return a.preventDefault(), a.stopPropagation(), Q(!0), !1;
                    if (p && b != d.KEYCODE.F10 && !c.keys.isBrowserAction(a)) return a.preventDefault(), a.stopPropagation(), !1
                } else {
                    var e = p.get(0);
                    Q(!0);
                    b == d.KEYCODE.ARROW_LEFT ? c.selection.setBefore(e) : c.selection.setAfter(e);
                    c.selection.restore();
                    a.preventDefault();
                    return !1
                }
            } else return a.preventDefault(), a.stopPropagation(), H(), !1
        }

        function ka(a) {
            if (a && "IMG" == a.tagName) {
                if (c.node.hasClass(a, "fr-uploading") || c.node.hasClass(a, "fr-error") ? a.parentNode.removeChild(a) : c.node.hasClass(a, "fr-draggable") && a.classList.remove("fr-draggable"), a.parentNode && a.parentNode.parentNode && c.node.hasClass(a.parentNode.parentNode, "fr-img-caption")) {
                    var b = a.parentNode.parentNode;
                    b.removeAttribute("contenteditable");
                    b.removeAttribute("draggable");
                    b.classList.remove("fr-draggable");
                    (a = a.nextSibling) && a.removeAttribute("contenteditable")
                }
            } else if (a && a.nodeType == Node.ELEMENT_NODE)
                for (a = a.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"), b = 0; b < a.length; b++) ka(a[b])
        }

        function K(a) {
            if (!1 === c.events.trigger("image.beforePasteUpload", [a])) return !1;
            p = O(a);
            m();
            M();
            U();
            C();
            p.on("load", function() {
                var a = [];
                m();
                1 > O(c.popups.get("image.insert").get(0)).find("div.fr-active.fr-error").length && C();
                O(this).data("events").find(function(b) {
                    "load" === b[0] && a.push(b)
                });
                1 >= a.length && O(this).off("load")
            });
            a = O(a).attr("src").split(",");
            for (var b = atob(a[1]), d = [], e = 0; e < b.length; e++) d.push(b.charCodeAt(e));
            a = new Blob([new Uint8Array(d)], {
                type: a[0].replace(/data:/g, "").replace(/;base64/g, "")
            });
            F([a], p)
        }

        function P() {
            c.opts.imagePaste ? c.$el.find("img[data-fr-image-pasted]").each(function(a, b) {
                c.opts.imagePasteProcess && ((a = c.opts.imageDefaultWidth) && "auto" != a && (a += c.opts.imageResizeWithPercent ? "%" : "px"), O(b).css("width", a).removeClass("fr-dii fr-dib fr-fir fr-fil"), B(O(b), c.opts.imageDefaultDisplay, c.opts.imageDefaultAlign));
                0 === b.src.indexOf("data:") ? K(b) : 0 === b.src.indexOf("blob:") || 0 === b.src.indexOf("http") && c.opts.imageUploadRemoteUrls && c.opts.imageCORSProxy ? (a = new Image, a.crossOrigin = "Anonymous", a.onload = function() {
                        var a = c.o_doc.createElement("CANVAS"),
                            d = a.getContext("2d");
                        a.height = this.naturalHeight;
                        a.width = this.naturalWidth;
                        d.drawImage(this, 0, 0);
                        setTimeout(function() {
                            K(b)
                        }, 0);
                        b.src = a.toDataURL("image/".concat(2E3 < this.naturalWidth || 1500 < this.naturalHeight ? "jpeg" : "png"))
                    }, a.src = (0 === b.src.indexOf("blob:") ? "" : "".concat(c.opts.imageCORSProxy, "/")) +
                    b.src) : 0 !== b.src.indexOf("http") || 0 === b.src.indexOf("https://mail.google.com/mail") ? (c.selection.save(), O(b).remove(), c.selection.restore()) : O(b).removeAttr("data-fr-image-pasted")
            }) : c.$el.find("img[data-fr-image-pasted]").remove()
        }

        function qa(a) {
            a = a.target.result;
            var b = c.opts.imageDefaultWidth;
            b && "auto" != b && (b += c.opts.imageResizeWithPercent ? "%" : "px");
            c.undo.saveStep();
            c.html.insert('<img data-fr-image-pasted="true" src="'.concat(a, '"').concat(b ? ' style="width: '.concat(b, ';"') : "", ">"));
            (a = c.$el.find('img[data-fr-image-pasted="true"]')) && B(a, c.opts.imageDefaultDisplay, c.opts.imageDefaultAlign);
            c.events.trigger("paste.after")
        }

        function ea(a) {
            if (a && a.clipboardData && a.clipboardData.items) {
                var b = null;
                if (a.clipboardData.types && -1 != [].indexOf.call(a.clipboardData.types, "text/rtf") || a.clipboardData.getData("text/rtf")) b = a.clipboardData.items[0].getAsFile();
                else
                    for (var c = 0; c < a.clipboardData.items.length && !(b = a.clipboardData.items[c].getAsFile()); c++);
                if (b) return a = b, b = new FileReader, b.onload = qa, b.readAsDataURL(a), !1
            }
        }

        function ha(a) {
            return a = a.replace(/<img /gi, '<img data-fr-image-pasted="true" ')
        }

        function J(a) {
            if ("false" == O(this).parents("[contenteditable]").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable") || a && "touchend" == a.type && Ba) return !0;
            if (a && c.edit.isDisabled()) return a.stopPropagation(), a.preventDefault(), !1;
            for (var b = 0; b < d.INSTANCES.length; b++) d.INSTANCES[b] != c && d.INSTANCES[b].events.trigger("image.hideResizer");
            c.toolbar.disable();
            a && (a.stopPropagation(), a.preventDefault());
            c.helpers.isMobile() && (c.events.disableBlur(), c.$el.blur(), c.events.enableBlur());
            c.opts.iframe && c.size.syncIframe();
            p = O(this);
            la();
            m();
            M();
            c.browser.msie ? (c.popups.areVisible() && c.events.disableBlur(), c.win.getSelection && (c.win.getSelection().removeAllRanges(), c.win.getSelection().addRange(c.doc.createRange()))) : c.selection.clear();
            c.helpers.isIOS() && (c.events.disableBlur(), c.$el.blur());
            c.button.bulkRefresh();
            c.events.trigger("video.hideResizer")
        }

        function Q(a) {
            p && (xa || !0 === a) && (c.toolbar.enable(), Y.removeClass("fr-active"), c.popups.hideAll(), p = null, xa = !1, aa = null, sa && sa.hide())
        }

        function ma() {
            xa = !0
        }

        function wa() {
            xa = !1
        }

        function B(a, b, d) {
            !c.opts.htmlUntouched && c.opts.useClasses ? (a.removeClass("fr-fil fr-fir fr-dib fr-dii"), d && a.addClass("fr-fi".concat(d[0])), b && a.addClass("fr-di".concat(b[0]))) : "inline" == b ? (a.css({
                display: "inline-block",
                verticalAlign: "bottom",
                margin: c.opts.imageDefaultMargin
            }), "center" == d ? a.css({
                "float": "none",
                marginBottom: "",
                marginTop: "",
                maxWidth: "calc(100% - ".concat(2 * c.opts.imageDefaultMargin, "px)"),
                textAlign: "center"
            }) : "left" == d ? a.css({
                "float": "left",
                marginLeft: 0,
                maxWidth: "calc(100% - ".concat(c.opts.imageDefaultMargin, "px)"),
                textAlign: "left"
            }) : a.css({
                "float": "right",
                marginRight: 0,
                maxWidth: "calc(100% - ".concat(c.opts.imageDefaultMargin, "px)"),
                textAlign: "right"
            })) : "block" == b && (a.css({
                display: "block",
                "float": "none",
                verticalAlign: "top",
                margin: "".concat(c.opts.imageDefaultMargin, "px auto"),
                textAlign: "center"
            }), "left" == d ? a.css({
                marginLeft: 0,
                textAlign: "left"
            }) : "right" == d && a.css({
                marginRight: 0,
                textAlign: "right"
            }))
        }

        function D(a) {
            "undefined" == typeof a && (a = ca());
            if (a) {
                if (a.hasClass("fr-fil")) return "left";
                if (a.hasClass("fr-fir")) return "right";
                if (!a.hasClass("fr-dib") && !a.hasClass("fr-dii")) {
                    var b = a.css("float");
                    a.css("float", "none");
                    if ("block" == a.css("display")) {
                        a.css("float", "");
                        a.css("float") != b && a.css("float", b);
                        if (0 === parseInt(a.css("margin-left"), 10)) return "left";
                        if (0 === parseInt(a.css("margin-right"), 10)) return "right"
                    } else {
                        a.css("float", "");
                        a.css("float") != b && a.css("float", b);
                        if ("left" == a.css("float")) return "left";
                        if ("right" == a.css("float")) return "right"
                    }
                }
            }
            return "center"
        }

        function N(a) {
            "undefined" == typeof a && (a = ca());
            var b = a.css("float");
            a.css("float", "none");
            if ("block" == a.css("display")) return a.css("float", ""), a.css("float") != b && a.css("float", b), "block";
            a.css("float", "");
            a.css("float") != b && a.css("float", b);
            return "inline"
        }

        function U() {
            c.popups.get("image.insert") || pa();
            c.popups.isVisible("image.insert") || (G(), c.popups.refresh("image.insert"), c.popups.setContainer("image.insert", c.$sc));
            var a = ca();
            ia() && (a = a.find(".fr-img-wrap"));
            var b = a.offset().left + a.outerWidth() / 2,
                d = a.offset().top + a.outerHeight();
            c.popups.show("image.insert", b, d, a.outerHeight(!0), !0)
        }

        function la() {
            if (p) {
                c.events.disableBlur();
                c.selection.clear();
                var a = c.doc.createRange();
                a.selectNode(p.get(0));
                c.browser.msie && a.collapse(!0);
                c.selection.get().addRange(a);
                c.events.enableBlur()
            }
        }

        function ca() {
            return ia() ? p.parents(".fr-img-caption").first() : p
        }

        function ia() {
            return p ? 0 < p.parents(".fr-img-caption").length : !1
        }

        function ra(a) {
            for (var b = document.createDocumentFragment(); a.firstChild;) {
                var c = a.removeChild(a.firstChild);
                b.appendChild(c)
            }
            a.parentNode.replaceChild(b, a)
        }
        var O = c.$,
            p, Y, aa, sa, za = !1,
            Aa = {
                1: "Image cannot be loaded from the passed link.",
                2: "No link in upload response.",
                3: "Error during file upload.",
                4: "Parsing response failed.",
                5: "File is too large.",
                6: "Image file type is invalid.",
                7: "Files can be uploaded only to same domain in IE 8 and IE 9.",
                8: "Image file is corrupted."
            },
            ta, Ba, xa = !1;
        return {
            _init: function() {
                q();
                "IMG" == c.el.tagName && c.$el.addClass("fr-view");
                c.events.$on(c.$el, c.helpers.isMobile() && !c.helpers.isWindowsPhone() ? "touchend" : "click", "IMG" == c.el.tagName ? null : 'img:not([contenteditable="false"])', J);
                c.helpers.isMobile() && (c.events.$on(c.$el, "touchstart", "IMG" == c.el.tagName ? null : 'img:not([contenteditable="false"])', function() {
                    Ba = !1
                }), c.events.$on(c.$el, "touchmove", function() {
                    Ba = !0
                }));
                c.$wp ? (c.events.on("window.keydown keydown", T, !0), c.events.on("keyup", function(a) {
                    if (p && a.which == d.KEYCODE.ENTER) return !1
                }, !0), c.events.$on(c.$el, "keydown", function() {
                    var a = c.selection.element();
                    if (a.nodeType === Node.TEXT_NODE || "BR" == a.tagName && c.node.isLastSibling(a)) a = a.parentNode;
                    c.node.hasClass(a, "fr-inner") || (c.node.hasClass(a, "fr-img-caption") || (a = O(a).parents(".fr-img-caption").get(0)), c.node.hasClass(a, "fr-img-caption") && (O(a).after(d.INVISIBLE_SPACE + d.MARKERS), c.selection.restore()))
                })) : c.events.$on(c.$win, "keydown", T);
                c.events.on("toolbar.esc", function() {
                    if (p) {
                        if (c.$wp) c.events.disableBlur(), c.events.focus();
                        else {
                            var a = p;
                            Q(!0);
                            c.selection.setAfter(a.get(0));
                            c.selection.restore()
                        }
                        return !1
                    }
                }, !0);
                c.events.on("toolbar.focusEditor", function() {
                    if (p) return !1
                }, !0);
                c.events.on("window.cut window.copy", function(a) {
                    if (p && c.popups.isVisible("image.edit") && !c.popups.get("image.edit").find(":focus").length) {
                        var e = ca();
                        ia() ? (e.before(d.START_MARKER), e.after(d.END_MARKER), c.selection.restore(), c.paste.saveCopiedText(e.get(0).outerHTML, e.text())) : (la(), c.paste.saveCopiedText(p.get(0).outerHTML, p.attr("alt")));
                        "copy" == a.type ? setTimeout(function() {
                            b(p)
                        }) : (Q(!0), c.undo.saveStep(), setTimeout(function() {
                            c.undo.saveStep()
                        }, 0))
                    }
                }, !0);
                if (c.browser.msie) c.events.on("keydown", function(a) {
                    if (!c.selection.isCollapsed() || !p) return !0;
                    var b = a.which;
                    b == d.KEYCODE.C && c.keys.ctrlKey(a) ? c.events.trigger("window.copy") : b == d.KEYCODE.X && c.keys.ctrlKey(a) && c.events.trigger("window.cut")
                });
                c.events.$on(O(c.o_win), "keydown", function(a) {
                    var b = a.which;
                    if (p && b == d.KEYCODE.BACKSPACE) return a.preventDefault(), !1
                });
                c.events.$on(c.$win, "keydown", function(a) {
                    a = a.which;
                    p && p.hasClass("fr-uploading") && a == d.KEYCODE.ESC && p.trigger("abortUpload")
                });
                c.events.on("destroy", function() {
                    p && p.hasClass("fr-uploading") && p.trigger("abortUpload")
                });
                c.events.on("paste.before", ea);
                c.events.on("paste.beforeCleanup", ha);
                c.events.on("paste.after", P);
                c.events.on("html.set", X);
                c.events.on("html.inserted", X);
                X();
                c.events.on("destroy", function() {
                    ta = []
                });
                c.events.on("html.processGet", ka);
                if (c.opts.imageOutputSize) {
                    var a;
                    c.events.on("html.beforeGet", function() {
                        a = c.el.querySelectorAll("img");
                        for (var b = 0; b < a.length; b++) {
                            var d = a[b].style.width || O(a[b]).width(),
                                e = a[b].style.height || O(a[b]).height();
                            d && a[b].setAttribute("width", "".concat(d).replace(/px/, ""));
                            e && a[b].setAttribute("height", "".concat(e).replace(/px/, ""))
                        }
                    })
                }
                if (c.opts.iframe) c.events.on("image.loaded", c.size.syncIframe);
                c.$wp && (v(), c.events.on("contentChanged", v));
                c.events.$on(O(c.o_win), "orientationchange.image", function() {
                    setTimeout(function() {
                        p && b(p)
                    }, 100)
                });
                x(!0);
                pa(!0);
                l(!0);
                ba(!0);
                c.events.on("node.remove", function(a) {
                    if ("IMG" == a.get(0).tagName) return H(a), !1
                })
            },
            showInsertPopup: function() {
                var a = c.$tb.find('.fr-command[data-cmd="insertImage"]'),
                    b = c.popups.get("image.insert");
                b || (b = pa());
                G();
                b.hasClass("fr-active") || (c.popups.refresh("image.insert"), c.popups.setContainer("image.insert", c.$tb), a.isVisible() ? (b = c.button.getPosition(a), c.popups.show("image.insert", b.left, b.top, a.outerHeight())) : (c.position.forSelection(b), c.popups.show("image.insert")))
            },
            showLayer: function(a) {
                var b = c.popups.get("image.insert");
                if (p || c.opts.toolbarInline) p && (e = ca(), ia() && (e = e.find(".fr-img-wrap")), d = e.offset().top +
                    e.outerHeight(), e = e.offset().left);
                else {
                    var d = c.$tb.find('.fr-command[data-cmd="insertImage"]');
                    var e = d.offset().left;
                    d = d.offset().top + (c.opts.toolbarBottom ? 10 : d.outerHeight() - 10)
                }!p && c.opts.toolbarInline && (d = b.offset().top - c.helpers.getPX(b.css("margin-top")), b.hasClass("fr-above") && (d += b.outerHeight()));
                b.find(".fr-layer").removeClass("fr-active");
                b.find(".fr-".concat(a, "-layer")).addClass("fr-active");
                c.popups.show("image.insert", e, d, p ? p.outerHeight() : 0);
                c.accessibility.focusPopup(b)
            },
            refreshUploadButton: function(a) {
                var b = c.popups.get("image.insert");
                b && b.find(".fr-image-upload-layer").hasClass("fr-active") && a.addClass("fr-active").attr("aria-pressed", !0)
            },
            refreshByURLButton: function(a) {
                var b = c.popups.get("image.insert");
                b && b.find(".fr-image-by-url-layer").hasClass("fr-active") && a.addClass("fr-active").attr("aria-pressed", !0)
            },
            upload: F,
            insertByURL: function() {
                var a = c.popups.get("image.insert").find(".fr-image-by-url-layer input");
                if (0 < a.val().length) {
                    C();
                    oa(c.language.translate("Loading image"));
                    var b = a.val().trim();
                    if (c.opts.imageUploadRemoteUrls && c.opts.imageCORSProxy && c.opts.imageUpload) {
                        var d = new XMLHttpRequest;
                        d.onload = function() {
                            200 == this.status ? F([new Blob([this.response], {
                                type: this.response.type || "image/png"
                            })], p) : f(1)
                        };
                        d.onerror = function() {
                            n(b, !0, [], p)
                        };
                        d.open("GET", "".concat(c.opts.imageCORSProxy, "/").concat(b), !0);
                        d.responseType = "blob";
                        d.send()
                    } else n(b, !0, [], p);
                    a.val("");
                    a.blur()
                }
            },
            align: function(a) {
                var b = ca();
                b.removeClass("fr-fir fr-fil");
                !c.opts.htmlUntouched && c.opts.useClasses ? "left" == a ? b.addClass("fr-fil") : "right" == a && b.addClass("fr-fir") : B(b, N(), a);
                la();
                m();
                M();
                c.selection.clear()
            },
            refreshAlign: function(a) {
                p && a.find("> *").first().replaceWith(c.icon.create("image-align-".concat(D())))
            },
            refreshAlignOnShow: function(a, b) {
                p && b.find('.fr-command[data-param1="'.concat(D(), '"]')).addClass("fr-active").attr("aria-selected", !0)
            },
            display: function(a) {
                var b = ca();
                b.removeClass("fr-dii fr-dib");
                !c.opts.htmlUntouched && c.opts.useClasses ? "inline" == a ? b.addClass("fr-dii") : "block" == a && b.addClass("fr-dib") : B(b, a, D());
                la();
                m();
                M();
                c.selection.clear()
            },
            refreshDisplayOnShow: function(a, b) {
                p && b.find('.fr-command[data-param1="'.concat(N(), '"]')).addClass("fr-active").attr("aria-selected", !0)
            },
            replace: U,
            back: function() {
                p ? (c.events.disableBlur(), O(".fr-popup input:focus").blur(), b(p)) : (c.events.disableBlur(), c.selection.restore(), c.events.enableBlur(), c.popups.hide("image.insert"), c.toolbar.showInline())
            },
            get: function() {
                return p
            },
            getEl: ca,
            insert: n,
            showProgressBar: C,
            remove: H,
            hideProgressBar: G,
            applyStyle: function(d, e, f) {
                "undefined" == typeof e && (e = c.opts.imageStyles);
                "undefined" == typeof f && (f = c.opts.imageMultipleStyles);
                if (!p) return !1;
                var g = ca();
                f || (f = Object.keys(e), f.splice(f.indexOf(d), 1), g.removeClass(f.join(" ")));
                "object" == a(e[d]) ? (g.removeAttr("style"), g.css(e[d].style)) : g.toggleClass(d);
                b(p)
            },
            showAltPopup: fa,
            showSizePopup: z,
            setAlt: function(a) {
                if (p) {
                    var d = c.popups.get("image.alt");
                    p.attr("alt", a || d.find("input").val() || "");
                    d.find("input:focus").blur();
                    b(p)
                }
            },
            setSize: function(a, d) {
                if (p) {
                    var e = c.popups.get("image.size");
                    a = a || e.find('input[name="width"]').val() || "";
                    d = d || e.find('input[name="height"]').val() || "";
                    var f = /^[\d]+((px)|%)*$/g;
                    p.removeAttr("width").removeAttr("height");
                    a.match(f) ? p.css("width", a) : p.css("width", "");
                    d.match(f) ? p.css("height", d) : p.css("height", "");
                    ia() && (p.parents(".fr-img-caption").removeAttr("width").removeAttr("height"), a.match(f) ? p.parents(".fr-img-caption").css("width", a) : p.parents(".fr-img-caption").css("width", ""), d.match(f) ? p.parents(".fr-img-caption").css("height", d) : p.parents(".fr-img-caption").css("height", ""));
                    e && e.find("input:focus").blur();
                    b(p)
                }
            },
            toggleCaption: function() {
                if (p && !ia()) {
                    var a = p;
                    p.parent().is("a") && (a = p.parent());
                    var e = p.parents("ul") && 0 < p.parents("ul").length ? p.parents("ul") : p.parents("ol") && 0 < p.parents("ol").length ? p.parents("ol") : [];
                    if (0 < e.length) {
                        var f = e.find("li").length,
                            g = p.parents("li"),
                            k = document.createElement("li");
                        f - 1 === g.index() && (e.append(k), k.innerHTML = "&nbsp;")
                    }
                    if (a.attr("style")) {
                        e = a.attr("style").split(":");
                        var h = -1 < e.indexOf("width") ? e[e.indexOf("width") + 1].replace(";", "") : ""
                    } else a.attr("width") && (h = a.attr("width"));
                    e = c.opts.imageResizeWithPercent ? (-1 < h.indexOf("px") ? null : h) || "100%" : p.width() + "px";
                    a.wrap('<div class="fr-img-space-wrap"><span ' + (c.browser.mozilla ? "" : 'contenteditable="false"') + 'class="fr-img-caption ' + p.attr("class") + '" style="' + (c.opts.useClasses ? "" : a.attr("style")) + '" draggable="false"></span><p class="fr-img-space-wrap2">&nbsp;</p></div>');
                    a.wrap('<span class="fr-img-wrap"></span>');
                    p.after('<span class="fr-inner"'.concat(c.browser.mozilla ? "" : ' contenteditable="true"', ">").concat(d.START_MARKER).concat(c.language.translate("Image Caption")).concat(d.END_MARKER, "</span>"));
                    p.parents(".fr-img-caption").css("width", e);
                    1 < p.parents(".fr-img-space-wrap").length && (ra(document.querySelector(".fr-img-space-wrap")), ra(document.querySelector(".fr-img-space-wrap2")));
                    Q(!0);
                    c.selection.restore()
                } else {
                    a = ca();
                    p.insertBefore(a);
                    if (null !== a[0].querySelector("a")) {
                        g = a[0].querySelector("a");
                        e = document.createElement("a");
                        f = 0;
                        k = g.attributes;
                        for (h = k.length; f < h; f++) g = k[f], e.setAttribute(g.nodeName, g.nodeValue);
                        p.wrap(e)
                    }
                    p.attr("class", a.attr("class").replace("fr-img-caption", "")).attr("style", a.attr("style"));
                    a.remove();
                    1 < p.parents(".fr-img-space-wrap").length && (ra(document.querySelector(".fr-img-space-wrap")), ra(document.querySelector(".fr-img-space-wrap2")));
                    b(p)
                }
            },
            hasCaption: ia,
            exitEdit: Q,
            edit: b
        }
    };
    d.DefineIcon("insertImage", {
        NAME: "image",
        SVG_KEY: "insertImage"
    });
    d.RegisterShortcut(d.KEYCODE.P, "insertImage", null, "P");
    d.RegisterCommand("insertImage", {
        title: "Insert Image",
        undo: !1,
        focus: !0,
        refreshAfterCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("image.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("image.insert")) : this.image.showInsertPopup()
        },
        plugin: "image"
    });
    d.DefineIcon("imageUpload", {
        NAME: "upload",
        SVG_KEY: "upload"
    });
    d.RegisterCommand("imageUpload", {
        title: "Upload Image",
        undo: !1,
        focus: !1,
        toggle: !0,
        callback: function() {
            this.image.showLayer("image-upload")
        },
        refresh: function(a) {
            this.image.refreshUploadButton(a)
        }
    });
    d.DefineIcon("imageByURL", {
        NAME: "link",
        SVG_KEY: "insertLink"
    });
    d.RegisterCommand("imageByURL", {
        title: "By URL",
        undo: !1,
        focus: !1,
        toggle: !0,
        callback: function() {
            this.image.showLayer("image-by-url")
        },
        refresh: function(a) {
            this.image.refreshByURLButton(a)
        }
    });
    d.RegisterCommand("imageInsertByURL", {
        title: "Insert Image",
        undo: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.image.insertByURL()
        },
        refresh: function(a) {
            this.image.get() ? a.text(this.language.translate("Replace")) : a.text(this.language.translate("Insert"))
        }
    });
    d.DefineIcon("imageDisplay", {
        NAME: "star",
        SVG_KEY: "imageDisplay"
    });
    d.RegisterCommand("imageDisplay", {
        title: "Display",
        type: "dropdown",
        options: {
            inline: "Inline",
            block: "Break Text"
        },
        callback: function(a, d) {
            this.image.display(d)
        },
        refresh: function(a) {
            this.opts.imageTextNear || a.addClass("fr-hidden")
        },
        refreshOnShow: function(a, d) {
            this.image.refreshDisplayOnShow(a, d)
        }
    });
    d.DefineIcon("image-align", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("image-align-left", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("image-align-right", {
        NAME: "align-right",
        SVG_KEY: "alignRight"
    });
    d.DefineIcon("image-align-center", {
        NAME: "align-justify",
        SVG_KEY: "alignCenter"
    });
    d.DefineIcon("imageAlign", {
        NAME: "align-justify",
        SVG_KEY: "alignJustify"
    });
    d.RegisterCommand("imageAlign", {
        type: "dropdown",
        title: "Align",
        options: {
            left: "Align Left",
            center: "None",
            right: "Align Right"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                h = d.COMMANDS.imageAlign.options,
                M;
            for (M in h) h.hasOwnProperty(M) && (a += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'.concat(M, '" title="').concat(this.language.translate(h[M]), '">').concat(this.icon.create("image-align-".concat(M)), '<span class="fr-sr-only">').concat(this.language.translate(h[M]), "</span></a></li>"));
            return a + "</ul>"
        },
        callback: function(a, d) {
            this.image.align(d)
        },
        refresh: function(a) {
            this.image.refreshAlign(a)
        },
        refreshOnShow: function(a, d) {
            this.image.refreshAlignOnShow(a, d)
        }
    });
    d.DefineIcon("imageReplace", {
        NAME: "exchange",
        FA5NAME: "exchange-alt",
        SVG_KEY: "replaceImage"
    });
    d.RegisterCommand("imageReplace", {
        title: "Replace",
        undo: !1,
        focus: !1,
        popup: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.image.replace()
        }
    });
    d.DefineIcon("imageRemove", {
        NAME: "trash",
        SVG_KEY: "remove"
    });
    d.RegisterCommand("imageRemove", {
        title: "Remove",
        callback: function() {
            this.image.remove()
        }
    });
    d.DefineIcon("imageBack", {
        NAME: "arrow-left",
        SVG_KEY: "back"
    });
    d.RegisterCommand("imageBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        callback: function() {
            this.image.back()
        },
        refresh: function(a) {
            this.image.get() || this.opts.toolbarInline ? (a.removeClass("fr-hidden"), a.next(".fr-separator").removeClass("fr-hidden")) : (a.addClass("fr-hidden"), a.next(".fr-separator").addClass("fr-hidden"))
        }
    });
    d.RegisterCommand("imageDismissError", {
        title: "OK",
        undo: !1,
        callback: function() {
            this.image.hideProgressBar(!0)
        }
    });
    d.DefineIcon("imageStyle", {
        NAME: "magic",
        SVG_KEY: "imageClass"
    });
    d.RegisterCommand("imageStyle", {
        title: "Style",
        type: "dropdown",
        html: function() {
            var c = '<ul class="fr-dropdown-list" role="presentation">',
                d = this.opts.imageStyles,
                M;
            for (M in d)
                if (d.hasOwnProperty(M)) {
                    var R = d[M];
                    "object" == a(R) && (R = R.title);
                    c += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'.concat(M, '">').concat(this.language.translate(R), "</a></li>")
                }
            return c + "</ul>"
        },
        callback: function(a, d) {
            this.image.applyStyle(d)
        },
        refreshOnShow: function(a, d) {
            var c = this.$,
                h = this.image.getEl();
            h && d.find(".fr-command").each(function() {
                var a = c(this).data("param1");
                a = h.hasClass(a);
                c(this).toggleClass("fr-active", a).attr("aria-selected", a)
            })
        }
    });
    d.DefineIcon("imageAlt", {
        NAME: "info",
        SVG_KEY: "imageAltText"
    });
    d.RegisterCommand("imageAlt", {
        undo: !1,
        focus: !1,
        popup: !0,
        title: "Alternative Text",
        callback: function() {
            this.image.showAltPopup()
        }
    });
    d.RegisterCommand("imageSetAlt", {
        undo: !0,
        focus: !1,
        title: "Update",
        refreshAfterCallback: !1,
        callback: function() {
            this.image.setAlt()
        }
    });
    d.DefineIcon("imageSize", {
        NAME: "arrows-alt",
        SVG_KEY: "imageSize"
    });
    d.RegisterCommand("imageSize", {
        undo: !1,
        focus: !1,
        popup: !0,
        title: "Change Size",
        callback: function() {
            this.image.showSizePopup()
        }
    });
    d.RegisterCommand("imageSetSize", {
        undo: !0,
        focus: !1,
        title: "Update",
        refreshAfterCallback: !1,
        callback: function() {
            this.image.setSize()
        }
    });
    d.DefineIcon("imageCaption", {
        NAME: "commenting",
        FA5NAME: "comment-alt",
        SVG_KEY: "imageCaption"
    });
    d.RegisterCommand("imageCaption", {
        undo: !0,
        focus: !1,
        title: "Image Caption",
        refreshAfterCallback: !0,
        callback: function() {
            this.image.toggleCaption()
        },
        refresh: function(a) {
            this.image.get() && a.toggleClass("fr-active", this.image.hasCaption())
        }
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.POPUP_TEMPLATES, {
        "link.edit": "[_BUTTONS_]",
        "link.insert": "[_BUTTONS_][_INPUT_LAYER_]"
    });
    Object.assign(d.DEFAULTS, {
        linkEditButtons: ["linkOpen", "linkStyle", "linkEdit", "linkRemove"],
        linkInsertButtons: ["linkBack", "|", "linkList"],
        linkAttributes: {},
        linkAutoPrefix: "http://",
        linkStyles: {
            "fr-green": "Green",
            "fr-strong": "Thick"
        },
        linkMultipleStyles: !0,
        linkConvertEmailAddress: !0,
        linkAlwaysBlank: !1,
        linkAlwaysNoFollow: !1,
        linkNoOpener: !0,
        linkNoReferrer: !0,
        linkList: [{
            text: "Froala",
            href: "https://froala.com",
            target: "_blank"
        }, {
            text: "Google",
            href: "https://google.com",
            target: "_blank"
        }, {
            displayText: "Facebook",
            href: "https://facebook.com"
        }],
        linkText: !0
    });
    d.PLUGINS.link = function(a) {
        function c() {
            var c = a.image ? a.image.get() : null;
            if (!c && a.$wp) {
                c = a.selection.ranges(0).commonAncestorContainer;
                try {
                    c && (c.contains && c.contains(a.el) || !a.el.contains(c) || a.el == c) && (c = null)
                } catch (C) {
                    c = null
                }
                if (c && "A" === c.tagName) return c;
                c = a.selection.element();
                var d = a.selection.endElement();
                "A" == c.tagName || a.node.isElement(c) || (c = w(c).parentsUntil(a.$el, "a").first().get(0));
                "A" == d.tagName || a.node.isElement(d) || (d = w(d).parentsUntil(a.$el, "a").first().get(0));
                try {
                    d && (d.contains && d.contains(a.el) || !a.el.contains(d) || a.el == d) && (d = null)
                } catch (C) {
                    d = null
                }
                try {
                    c && (c.contains && c.contains(a.el) || !a.el.contains(c) || a.el == c) && (c = null)
                } catch (C) {
                    c = null
                }
                return d && d == c && "A" == d.tagName ? (a.browser.msie || a.helpers.isMobile()) && (a.selection.info(c).atEnd || a.selection.info(c).atStart) ? null : c : null
            }
            if ("A" == a.el.tagName) return a.el;
            if (c && c.get(0).parentNode && "A" == c.get(0).parentNode.tagName) return c.get(0).parentNode
        }

        function h() {
            var c = a.image ? a.image.get() : null,
                d = [];
            if (c) "A" == c.get(0).parentNode.tagName && d.push(c.get(0).parentNode);
            else {
                var h;
                if (a.win.getSelection) {
                    var m = a.win.getSelection();
                    if (m.getRangeAt && m.rangeCount) {
                        var t = a.doc.createRange();
                        for (var y = 0; y < m.rangeCount; ++y)
                            if (c = m.getRangeAt(y), (h = c.commonAncestorContainer) && 1 != h.nodeType && (h = h.parentNode), h && "a" == h.nodeName.toLowerCase()) d.push(h);
                            else {
                                h = h.getElementsByTagName("a");
                                for (var b = 0; b < h.length; ++b) t.selectNodeContents(h[b]), 1 > t.compareBoundaryPoints(c.END_TO_START, c) && -1 < t.compareBoundaryPoints(c.START_TO_END, c) && d.push(h[b])
                            }
                    }
                } else if (a.doc.selection && "Control" != a.doc.selection.type)
                    if (c = a.doc.selection.createRange(), h = c.parentElement(), "a" == h.nodeName.toLowerCase()) d.push(h);
                    else
                        for (h = h.getElementsByTagName("a"), t = a.doc.body.createTextRange(), m = 0; m < h.length; ++m) t.moveToElementText(h[m]), -1 < t.compareEndPoints("StartToEnd", c) && 1 > t.compareEndPoints("EndToStart", c) && d.push(h[m])
            }
            return d
        }

        function M(f) {
            if (a.core.hasFocus()) {
                X();
                if (f && "keyup" === f.type && (f.altKey || f.which == d.KEYCODE.ALT)) return !0;
                setTimeout(function() {
                    if (!f || f && (1 == f.which || "mouseup" != f.type)) {
                        var h = c(),
                            m = a.image ? a.image.get() : null;
                        if (h && !m) {
                            if (a.image && (m = a.node.contents(h), 1 == m.length && "IMG" == m[0].tagName)) return m = a.selection.ranges(0), 0 === m.startOffset && 0 === m.endOffset ? w(h).before(d.MARKERS) : w(h).after(d.MARKERS), a.selection.restore(), !1;
                            f && f.stopPropagation();
                            R(h)
                        }
                    }
                }, a.helpers.isIOS() ? 100 : 0)
            }
        }

        function R(c) {
            a.popups.get("link.edit") || v();
            c = w(c);
            a.popups.isVisible("link.edit") || a.popups.refresh("link.edit");
            a.popups.setContainer("link.edit", a.$sc);
            var d = c.offset().left + c.outerWidth() / 2,
                f = c.offset().top + c.outerHeight();
            a.popups.show("link.edit", d, f, c.outerHeight(), !0)
        }

        function X() {
            a.popups.hide("link.edit")
        }

        function v() {
            var d = "";
            1 <= a.opts.linkEditButtons.length && ("A" == a.el.tagName && 0 <= a.opts.linkEditButtons.indexOf("linkRemove") && a.opts.linkEditButtons.splice(a.opts.linkEditButtons.indexOf("linkRemove"), 1), d = '<div class="fr-buttons">'.concat(a.button.buildList(a.opts.linkEditButtons), "</div>"));
            d = a.popups.create("link.edit", {
                buttons: d
            });
            a.$wp && a.events.$on(a.$wp, "scroll.link-edit", function() {
                c() && a.popups.isVisible("link.edit") && R(c())
            });
            return d
        }

        function m() {
            var d = a.popups.get("link.insert"),
                h = c();
            if (h) {
                h = w(h);
                var m = d.find('input.fr-link-attr[type="text"]'),
                    t = d.find('input.fr-link-attr[type="checkbox"]'),
                    y;
                for (y = 0; y < m.length; y++) {
                    var v = w(m[y]);
                    v.val(h.attr(v.attr("name") || ""))
                }
                t.attr("checked", !1);
                for (y = 0; y < t.length; y++) v = w(t[y]), h.attr(v.attr("name")) == v.data("checked") && v.attr("checked", !0);
                d.find('input.fr-link-attr[type="text"][name="text"]').val(h.text())
            } else d.find('input.fr-link-attr[type="text"]').val(""), d.find('input.fr-link-attr[type="checkbox"]').attr("checked", !1), d.find('input.fr-link-attr[type="text"][name="text"]').val(a.selection.text());
            d.find("input.fr-link-attr").trigger("change");
            a.image && a.image.get() ? d.find('.fr-link-attr[name="text"]').parent().hide() : d.find('.fr-link-attr[name="text"]').parent().show()
        }

        function t(d) {
            if (d) return a.popups.onRefresh("link.insert", m), !0;
            d = "";
            1 <= a.opts.linkInsertButtons.length && (d = '<div class="fr-buttons fr-tabs">'.concat(a.button.buildList(a.opts.linkInsertButtons), "</div>"));
            var f = "",
                h = 0;
            f = '<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'.concat(a.id, '">');
            f += '<div class="fr-input-line"><input id="fr-link-insert-layer-url-'.concat(a.id, '" name="href" type="text" class="fr-link-attr" placeholder="').concat(a.language.translate("URL"), '" tabIndex="').concat(++h, '"></div>');
            a.opts.linkText && (f += '<div class="fr-input-line"><input id="fr-link-insert-layer-text-'.concat(a.id, '" name="text" type="text" class="fr-link-attr" placeholder="').concat(a.language.translate("Text"), '" tabIndex="').concat(++h, '"></div>'));
            for (var t in a.opts.linkAttributes)
                if (a.opts.linkAttributes.hasOwnProperty(t)) {
                    var v = a.opts.linkAttributes[t];
                    f += '<div class="fr-input-line"><input name="'.concat(t, '" type="text" class="fr-link-attr" placeholder="').concat(a.language.translate(v), '" tabIndex="').concat(++h, '"></div>')
                }
            a.opts.linkAlwaysBlank || (f += '<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'.concat(a.id, '" tabIndex="').concat(++h, '"><span>').concat('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg>', '</span></span><label id="fr-label-target-').concat(a.id, '">').concat(a.language.translate("Open in new tab"), "</label></div>"));
            f += '<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'.concat(++h, '" type="button">').concat(a.language.translate("Insert"), "</button></div></div>");
            t = a.popups.create("link.insert", {
                buttons: d,
                input_layer: f
            });
            a.$wp && a.events.$on(a.$wp, "scroll.link-insert", function() {
                a.image && a.image.get() && a.popups.isVisible("link.insert") && S();
                c && a.popups.isVisible("link.insert") && y()
            });
            return t
        }

        function L(f, m, t) {
            "undefined" == typeof t && (t = {});
            if (!1 === a.events.trigger("link.beforeInsert", [f, m, t])) return !1;
            var y = a.image ? a.image.get() : null;
            y || "A" == a.el.tagName ? "A" == a.el.tagName && a.$el.focus() : (a.selection.restore(), a.popups.hide("link.insert"));
            var v = f;
            a.opts.linkConvertEmailAddress && a.helpers.isEmail(f) && !/^mailto:.*/i.test(f) && (f = "mailto:".concat(f));
            var x = /^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i;
            "" === a.opts.linkAutoPrefix || (new RegExp("^(" + d.LinkProtocols.join("|") + "):.", "i")).test(f) || /^data:image.*/i.test(f) || /^(https?:|ftps?:|file:|)\/\//i.test(f) || x.test(f) || 0 > "/{[#(.".split("").indexOf((f || "")[0]) && (f = a.opts.linkAutoPrefix + f);
            f = a.helpers.sanitizeURL(f);
            a.opts.linkAlwaysBlank && (t.target = "_blank");
            a.opts.linkAlwaysNoFollow && (t.rel = "nofollow");
            a.helpers.isEmail(v) && (t.target = null, t.rel = null);
            "_blank" == t.target ? (a.opts.linkNoOpener && (t.rel = t.rel ? t.rel + " noopener" : "noopener"), a.opts.linkNoReferrer && (t.rel = t.rel ? t.rel +
                " noreferrer" : "noreferrer")) : null == t.target && (t.rel = t.rel ? t.rel.replace(/noopener/, "").replace(/noreferrer/, "") : null);
            m = m || "";
            if (f === a.opts.linkAutoPrefix) return a.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"), a.events.trigger("link.bad", [v]), !1;
            if (x = c()) {
                v = w(x);
                v.attr("href", f);
                if (0 < m.length && v.text() != m && !y) {
                    for (f = v.get(0); 1 === f.childNodes.length && f.childNodes[0].nodeType == Node.ELEMENT_NODE;) f = f.childNodes[0];
                    w(f).text(m)
                }
                y || v.prepend(d.START_MARKER).append(d.END_MARKER);
                for (var b in t) t[b] ? v.attr(b, t[b]) : v.removeAttr(b);
                y || a.selection.restore()
            } else {
                if (y) y.wrap('<a href="'.concat(f, '"></a>')), a.image.hasCaption() && y.parent().append(y.parents(".fr-img-caption").find(".fr-inner"));
                else if (a.format.remove("a"), a.selection.isCollapsed()) m = 0 === m.length ? v : m, a.html.insert('<a href="'.concat(f, '">').concat(d.START_MARKER).concat(m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")).concat(d.END_MARKER, "</a>")), a.selection.restore();
                else if (0 < m.length && m != a.selection.text().replace(/\n/g, "")) a.selection.remove(), a.html.insert('<a href="'.concat(f, '">').concat(d.START_MARKER).concat(m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")).concat(d.END_MARKER, "</a>")), a.selection.restore();
                else {
                    if (!a.selection.isCollapsed()) {
                        a.selection.save();
                        for (m = a.$el.find(".fr-marker").addClass("fr-unprocessed").toArray(); m.length;) {
                            x = w(m.pop());
                            x.removeClass("fr-unprocessed");
                            if (m = a.node.deepestParent(x.get(0))) {
                                var e = x.get(0);
                                v = b = "";
                                do e = e.parentNode, a.node.isBlock(e) || (b += a.node.closeTagString(e), v = a.node.openTagString(e) + v); while (e != m);
                                e = a.node.openTagString(x.get(0)) + x.html() + a.node.closeTagString(x.get(0));
                                x.replaceWith('<span id="fr-break"></span>');
                                x = m.outerHTML;
                                x = x.replace(/<span id="fr-break"><\/span>/g, b + e + v);
                                x = x.replace(v + b, "");
                                m.outerHTML = x
                            }
                            m = a.$el.find(".fr-marker.fr-unprocessed").toArray()
                        }
                        a.html.cleanEmptyTags();
                        a.selection.restore()
                    }
                    a.format.apply("a", {
                        href: f
                    })
                }
                f = h();
                for (m = 0; m < f.length; m++) v = w(f[m]), v.attr(t), v.removeAttr("_moz_dirty");
                1 == f.length && a.$wp && !y && (w(f[0]).prepend(d.START_MARKER).append(d.END_MARKER), a.selection.restore())
            }
            y ? ((t = a.popups.get("link.insert")) && t.find("input:focus").blur(), a.image.edit(y)) : M()
        }

        function y() {
            X();
            var d = c();
            if (d) {
                a.popups.get("link.insert") || t();
                a.popups.isVisible("link.insert") || (a.popups.refresh("link.insert"), a.selection.save(), a.helpers.isMobile() && (a.events.disableBlur(), a.$el.blur(), a.events.enableBlur()));
                a.popups.setContainer("link.insert", a.$sc);
                d = (a.image ? a.image.get() : null) || w(d);
                var h = d.offset().left + d.outerWidth() / 2,
                    m = d.offset().top + d.outerHeight();
                a.popups.show("link.insert", h, m, d.outerHeight(), !0)
            }
        }

        function S() {
            var c = a.image ? a.image.getEl() : null;
            if (c) {
                var d = a.popups.get("link.insert");
                a.image.hasCaption() && (c = c.find(".fr-img-wrap"));
                d || t();
                m(!0);
                a.popups.setContainer("link.insert", a.$sc);
                d = c.offset().left + c.outerWidth() / 2;
                var h = c.offset().top + c.outerHeight();
                a.popups.show("link.insert", d, h, c.outerHeight(), !0)
            }
        }
        var w = a.$;
        return {
            _init: function() {
                a.events.on("keyup", function(a) {
                    a.which != d.KEYCODE.ESC && M(a)
                });
                a.events.on("window.mouseup", M);
                a.events.$on(a.$el, "click", "a", function(c) {
                    a.edit.isDisabled() && c.preventDefault()
                });
                a.helpers.isMobile() && a.events.$on(a.$doc, "selectionchange", M);
                t(!0);
                "A" == a.el.tagName && a.$el.addClass("fr-view");
                a.events.on("toolbar.esc", function() {
                    if (a.popups.isVisible("link.edit")) return a.events.disableBlur(), a.events.focus(), !1
                }, !0)
            },
            remove: function() {
                var d = c(),
                    h = a.image ? a.image.get() : null;
                if (!1 === a.events.trigger("link.beforeRemove", [d])) return !1;
                h && d ? a.image.hasCaption() ? (h.addClass("img-link-caption"), w(d).replaceWith(w(d).html()), d = document.querySelectorAll("img.img-link-caption"), a.image.edit(w(d[0])), w(d[0]).removeClass("img-link-caption")) : (h.unwrap(), a.image.edit(h)) : d && (a.selection.save(), w(d).replaceWith(w(d).html()), a.selection.restore(), X())
            },
            showInsertPopup: function() {
                var c = a.$tb.find('.fr-command[data-cmd="insertLink"]'),
                    d = a.popups.get("link.insert");
                d || (d = t());
                d.hasClass("fr-active") || (a.popups.refresh("link.insert"), a.popups.setContainer("link.insert", a.$tb || a.$sc), c.isVisible() ? (d = a.button.getPosition(c), a.popups.show("link.insert", d.left, d.top, c.outerHeight())) : (a.position.forSelection(d), a.popups.show("link.insert")))
            },
            usePredefined: function(c) {
                c = a.opts.linkList[c];
                var d = a.popups.get("link.insert"),
                    f = d.find('input.fr-link-attr[type="text"]'),
                    h = d.find('input.fr-link-attr[type="checkbox"]'),
                    m;
                c.rel && (d.rel = c.rel);
                for (m = 0; m < f.length; m++) {
                    var t = w(f[m]);
                    c[t.attr("name")] ? (t.val(c[t.attr("name")]), t.toggleClass("fr-not-empty", !0)) : "text" != t.attr("name") && t.val("")
                }
                for (m = 0; m < h.length; m++) t = w(h[m]), t.attr("checked", t.data("checked") == c[t.attr("name")]);
                a.accessibility.focusPopup(d)
            },
            insertCallback: function() {
                var c = a.popups.get("link.insert"),
                    d = c.find('input.fr-link-attr[type="text"]'),
                    h = c.find('input.fr-link-attr[type="checkbox"]'),
                    m = (d.filter('[name="href"]').val() || "").trim(),
                    t = a.opts.linkText ? d.filter('[name="text"]').val() : "",
                    y = {},
                    b;
                for (b = 0; b < d.length; b++) {
                    var e = w(d[b]);
                    0 > ["href", "text"].indexOf(e.attr("name")) && (y[e.attr("name")] = e.val())
                }
                for (b = 0; b < h.length; b++) e = w(h[b]), e.is(":checked") ? y[e.attr("name")] = e.data("checked") : y[e.attr("name")] = e.data("unchecked") || null;
                c.rel ? y.rel = c.rel : "";
                c = a.helpers.scrollTop();
                L(m, t, y);
                w(a.o_win).scrollTop(c)
            },
            insert: L,
            update: y,
            get: c,
            allSelected: h,
            back: function() {
                a.image && a.image.get() ? a.image.back() : (a.events.disableBlur(), a.selection.restore(), a.events.enableBlur(), c() && a.$wp ? (a.selection.restore(), X(), M()) : "A" == a.el.tagName ? (a.$el.focus(), M()) : (a.popups.hide("link.insert"), a.toolbar.showInline()))
            },
            imageLink: S,
            applyStyle: function(d, h, m) {
                "undefined" == typeof m && (m = a.opts.linkMultipleStyles);
                "undefined" == typeof h && (h = a.opts.linkStyles);
                var f = c();
                if (!f) return !1;
                m || (h = Object.keys(h), h.splice(h.indexOf(d), 1), w(f).removeClass(h.join(" ")));
                w(f).toggleClass(d);
                M()
            }
        }
    };
    d.DefineIcon("insertLink", {
        NAME: "link",
        SVG_KEY: "insertLink"
    });
    d.RegisterShortcut(d.KEYCODE.K, "insertLink", null, "K");
    d.RegisterCommand("insertLink", {
        title: "Insert Link",
        undo: !1,
        focus: !0,
        refreshOnCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("link.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("link.insert")) : this.link.showInsertPopup()
        },
        plugin: "link"
    });
    d.DefineIcon("linkOpen", {
        NAME: "external-link",
        FA5NAME: "external-link-alt",
        SVG_KEY: "openLink"
    });
    d.RegisterCommand("linkOpen", {
        title: "Open Link",
        undo: !1,
        refresh: function(a) {
            this.link.get() ? a.removeClass("fr-hidden") : a.addClass("fr-hidden")
        },
        callback: function() {
            var a = this.link.get();
            a && (-1 !== a.href.indexOf("mailto:") ? this.o_win.open(a.href).close() : (a.target || (a.target = "_self"), this.browser.msie || this.browser.edge ? this.o_win.open(a.href, a.target) : this.o_win.open(a.href, a.target, "noopener")), this.popups.hide("link.edit"))
        },
        plugin: "link"
    });
    d.DefineIcon("linkEdit", {
        NAME: "edit",
        SVG_KEY: "edit"
    });
    d.RegisterCommand("linkEdit", {
        title: "Edit Link",
        undo: !1,
        refreshAfterCallback: !1,
        popup: !0,
        callback: function() {
            this.link.update()
        },
        refresh: function(a) {
            this.link.get() ? a.removeClass("fr-hidden") : a.addClass("fr-hidden")
        },
        plugin: "link"
    });
    d.DefineIcon("linkRemove", {
        NAME: "unlink",
        SVG_KEY: "unlink"
    });
    d.RegisterCommand("linkRemove", {
        title: "Unlink",
        callback: function() {
            this.link.remove()
        },
        refresh: function(a) {
            this.link.get() ? a.removeClass("fr-hidden") : a.addClass("fr-hidden")
        },
        plugin: "link"
    });
    d.DefineIcon("linkBack", {
        NAME: "arrow-left",
        SVG_KEY: "back"
    });
    d.RegisterCommand("linkBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.link.back()
        },
        refresh: function(a) {
            var c = this.link.get() && this.doc.hasFocus();
            this.image && this.image.get() || c || this.opts.toolbarInline ? (a.removeClass("fr-hidden"), a.next(".fr-separator").removeClass("fr-hidden")) : (a.addClass("fr-hidden"), a.next(".fr-separator").addClass("fr-hidden"))
        },
        plugin: "link"
    });
    d.DefineIcon("linkList", {
        NAME: "search",
        SVG_KEY: "search"
    });
    d.RegisterCommand("linkList", {
        title: "Choose Link",
        type: "dropdown",
        focus: !1,
        undo: !1,
        refreshAfterCallback: !1,
        html: function() {
            for (var a = '<ul class="fr-dropdown-list" role="presentation">', c = this.opts.linkList, d = 0; d < c.length; d++) a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'.concat(d, '">').concat(c[d].displayText || c[d].text, "</a></li>");
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.link.usePredefined(c)
        },
        plugin: "link"
    });
    d.RegisterCommand("linkInsert", {
        focus: !1,
        refreshAfterCallback: !1,
        callback: function() {
            this.link.insertCallback()
        },
        refresh: function(a) {
            this.link.get() ? a.text(this.language.translate("Update")) : a.text(this.language.translate("Insert"))
        },
        plugin: "link"
    });
    d.DefineIcon("imageLink", {
        NAME: "link",
        SVG_KEY: "insertLink"
    });
    d.RegisterCommand("imageLink", {
        title: "Insert Link",
        undo: !1,
        focus: !1,
        popup: !0,
        callback: function() {
            this.link.imageLink()
        },
        refresh: function(a) {
            if (this.link.get()) {
                var c = a.prev();
                c.hasClass("fr-separator") && c.removeClass("fr-hidden");
                a.addClass("fr-hidden")
            } else c = a.prev(), c.hasClass("fr-separator") && c.addClass("fr-hidden"), a.removeClass("fr-hidden")
        },
        plugin: "link"
    });
    d.DefineIcon("linkStyle", {
        NAME: "magic",
        SVG_KEY: "linkStyles"
    });
    d.RegisterCommand("linkStyle", {
        title: "Style",
        type: "dropdown",
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = this.opts.linkStyles,
                d;
            for (d in c) c.hasOwnProperty(d) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'.concat(d, '">').concat(this.language.translate(c[d]), "</a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.link.applyStyle(c)
        },
        refreshOnShow: function(a, c) {
            var d = this.$;
            if (a = this.link.get()) {
                var M = d(a);
                c.find(".fr-command").each(function() {
                    var a = d(this).data("param1");
                    a = M.hasClass(a);
                    d(this).toggleClass("fr-active", a).attr("aria-selected", a)
                })
            }
        },
        refresh: function(a) {
            this.link.get() ? a.removeClass("fr-hidden") : a.addClass("fr-hidden")
        },
        plugin: "link"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.DEFAULTS, {
        listAdvancedTypes: !0
    });
    d.PLUGINS.lists = function(a) {
        function c(a) {
            return '<span class="fr-open-'.concat(a.toLowerCase(), '"></span>')
        }

        function h(a) {
            return '<span class="fr-close-'.concat(a.toLowerCase(), '"></span>')
        }

        function M(d) {
            var m, L;
            for (m = d.length - 1; 0 <= m; m--)
                for (L = m - 1; 0 <= L; L--)
                    if (v(d[L]).find(d[m]).length || d[L] == d[m]) {
                        d.splice(m, 1);
                        break
                    }
            L = [];
            for (m = 0; m < d.length; m++) {
                var y = v(d[m]),
                    S = d[m].parentNode,
                    w = y.attr("class");
                y.before(h(S.tagName));
                if ("LI" == S.parentNode.tagName) y.before(h("LI")), y.after(c("LI"));
                else {
                    var f = "";
                    w && (f += ' class="'.concat(w, '"'));
                    w = "rtl" == a.opts.direction || "rtl" == y.css("direction") ? "margin-right" : "margin-left";
                    a.helpers.getPX(v(S).css(w)) && 0 <= (v(S).attr("style") || "").indexOf("".concat(w, ":")) && (f += ' style="'.concat(w, ":").concat(a.helpers.getPX(v(S).css(w)), 'px;"'));
                    a.html.defaultTag() && 0 === y.find(a.html.blockTagsQuery()).length && y.wrapInner(a.html.defaultTag() + f);
                    a.node.isEmpty(y.get(0), !0) || 0 !== y.find(a.html.blockTagsQuery()).length || y.append("<br>");
                    y.append(c("LI"));
                    y.prepend(h("LI"))
                }
                y.after(c(S.tagName));
                "LI" == S.parentNode.tagName && (S = S.parentNode.parentNode);
                0 > L.indexOf(S) && L.push(S)
            }
            for (m = 0; m < L.length; m++) d = v(L[m]), y = d.html(), y = y.replace(/<span class="fr-close-([a-z]*)"><\/span>/g, "</$1>"), y = y.replace(/<span class="fr-open-([a-z]*)"><\/span>/g, "<$1>"), d.replaceWith(a.node.openTagString(d.get(0)) + y + a.node.closeTagString(d.get(0)));
            a.$el.find("li:empty").remove();
            a.$el.find("ul:empty, ol:empty").remove();
            a.clean.lists();
            a.html.wrap()
        }

        function R(c) {
            a.selection.save();
            for (var d = 0; d < c.length; d++) {
                var h = c[d].previousSibling;
                if (h) {
                    var m = v(c[d]).find("> ul, > ol").last().get(0);
                    if (m) {
                        var S = v(document.createElement("li"));
                        v(m).prepend(S);
                        for (var w = a.node.contents(c[d])[0]; w && !a.node.isList(w);) {
                            var f = w.nextSibling;
                            S.append(w);
                            w = f
                        }
                        v(h).append(v(m));
                        v(c[d]).remove()
                    } else(m = v(h).find("> ul, > ol").last().get(0)) ? v(m).append(v(c[d])) : (m = v("<".concat(c[d].parentNode.tagName, ">")), v(h).append(m), m.append(v(c[d])))
                }
            }
            a.clean.lists();
            a.selection.restore()
        }

        function X(c) {
            if ("indent" == c || "outdent" == c) {
                var d = !1,
                    h = a.selection.blocks(),
                    m = [],
                    v = h[0].previousSibling || h[0].parentElement;
                if ("outdent" == c) {
                    if ("UL" != v.parentNode.tagName && "OL" != v.parentNode.tagName && "LI" != v.parentNode.tagName || !h[0].previousSibling && "none" == v.parentNode.style.listStyleType) return
                } else if (!h[0].previousSibling || "LI" != h[0].previousSibling.tagName) return;
                for (v = 0; v < h.length; v++) "LI" == h[v].tagName ? (d = !0, m.push(h[v])) : "LI" == h[v].parentNode.tagName && (d = !0, m.push(h[v].parentNode));
                d && ("indent" == c ? R(m) : (a.selection.save(), M(m), a.selection.restore()))
            }
        }
        var v = a.$;
        return {
            _init: function() {
                a.events.on("commands.after", X);
                a.events.on("keydown", function(c) {
                    if (c.which == d.KEYCODE.TAB) {
                        for (var h = a.selection.blocks(), m = [], v = 0; v < h.length; v++) "LI" == h[v].tagName ? m.push(h[v]) : "LI" == h[v].parentNode.tagName && m.push(h[v].parentNode);
                        if (1 < m.length || m.length && (a.selection.info(m[0]).atStart || a.node.isEmpty(m[0]))) return c.preventDefault(), c.stopPropagation(), c.shiftKey ? (a.selection.save(), M(m), a.selection.restore()) : R(m), !1
                    }
                }, !0)
            },
            format: function(c, d) {
                var h;
                a.html.syncInputs();
                a.selection.save();
                a.html.wrap(!0, !0, !0, !0);
                a.selection.restore();
                var m = a.selection.blocks(!0);
                for (h = 0; h < m.length; h++) "LI" != m[h].tagName && "LI" == m[h].parentNode.tagName && (m[h] = m[h].parentNode);
                a.selection.save();
                a: {
                    h = !0;
                    for (var t = 0; t < m.length; t++) {
                        if ("LI" != m[t].tagName) {
                            h = !1;
                            break a
                        }
                        m[t].parentNode.tagName != c && (h = !1)
                    }
                }
                if (h) d || M(m);
                else {
                    h = [];
                    for (t = 0; t < m.length; t++) {
                        var w = m[t].parentNode;
                        "LI" == m[t].tagName && w.tagName != c && 0 > h.indexOf(w) && h.push(w)
                    }
                    for (t = h.length - 1; 0 <= t; t--) w = v(h[t]), w.replaceWith("<".concat(c.toLowerCase(), " ").concat(a.node.attributes(w.get(0)), ">").concat(w.html(), "</").concat(c.toLowerCase(), ">"));
                    h = a.html.defaultTag();
                    t = null;
                    var f;
                    m.length && (f = "rtl" == a.opts.direction || "rtl" == v(m[0]).css("direction") ? "margin-right" : "margin-left");
                    for (w = 0; w < m.length; w++)
                        if ("TD" != m[w].tagName && "TH" != m[w].tagName && "LI" != m[w].tagName) {
                            var x = a.helpers.getPX(v(m[w]).css(f)) || 0;
                            m[w].style.marginLeft = null;
                            null === t && (t = x);
                            var C = 0 < t ? "<".concat(c, ' style="').concat(f, ": ").concat(t, 'px ">') : "<".concat(c, ">"),
                                G = "</".concat(c, ">");
                            for (x -= t; 0 < x / a.opts.indentMargin;) C += "</".concat(c, ">"), G += G, x -= a.opts.indentMargin;
                            h && m[w].tagName.toLowerCase() == h ? v(m[w]).replaceWith("".concat(C, "<li").concat(a.node.attributes(m[w]), ">").concat(v(m[w]).html(), "</li>").concat(G)) : v(m[w]).wrap("".concat(C, "<li></li>").concat(G))
                        }
                    a.clean.lists()
                }
                a.html.unwrap();
                a.selection.restore();
                d = d || "default";
                m = a.selection.blocks();
                for (h = 0; h < m.length; h++) "LI" != m[h].tagName && "LI" == m[h].parentNode.tagName && (m[h] = m[h].parentNode);
                for (h = 0; h < m.length; h++) "LI" == m[h].tagName && (v(m[h].parentNode).css("list-style-type", "default" === d ? "" : d), 0 === (v(m[h].parentNode).attr("style") || "").length && v(m[h].parentNode).removeAttr("style"))
            },
            refresh: function(c, d) {
                var h = v(a.selection.element());
                if (h.get(0) != a.el) {
                    var m = h.get(0);
                    (m = "LI" != m.tagName && m.firstElementChild && "LI" != m.firstElementChild.tagName ? h.parents("li").get(0) : "LI" == m.tagName || m.firstElementChild ? m.firstElementChild && "LI" == m.firstElementChild.tagName ? h.get(0).firstChild : h.get(0) : h.parents("li").get(0)) && m.parentNode.tagName == d && a.el.contains(m.parentNode) && c.addClass("fr-active")
                }
            }
        }
    };
    d.DefineIcon("formatOLSimple", {
        NAME: "list-ol",
        SVG_KEY: "orderedList"
    });
    d.RegisterCommand("formatOLSimple", {
        title: "Ordered List",
        type: "button",
        options: {
            "default": "Default",
            circle: "Circle",
            disc: "Disc",
            square: "Square"
        },
        refresh: function(a) {
            this.lists.refresh(a, "OL")
        },
        callback: function(a, c) {
            this.lists.format("OL", c)
        },
        plugin: "lists"
    });
    d.RegisterCommand("formatUL", {
        title: "Unordered List",
        type: "button",
        hasOptions: function() {
            return this.opts.listAdvancedTypes
        },
        options: {
            "default": "Default",
            circle: "Circle",
            disc: "Disc",
            square: "Square"
        },
        refresh: function(a) {
            this.lists.refresh(a, "UL")
        },
        callback: function(a, c) {
            this.lists.format("UL", c)
        },
        plugin: "lists"
    });
    d.RegisterCommand("formatOL", {
        title: "Ordered List",
        hasOptions: function() {
            return this.opts.listAdvancedTypes
        },
        options: {
            "default": "Default",
            "lower-alpha": "Lower Alpha",
            "lower-greek": "Lower Greek",
            "lower-roman": "Lower Roman",
            "upper-alpha": "Upper Alpha",
            "upper-roman": "Upper Roman"
        },
        refresh: function(a) {
            this.lists.refresh(a, "OL")
        },
        callback: function(a, c) {
            this.lists.format("OL", c)
        },
        plugin: "lists"
    });
    d.DefineIcon("formatUL", {
        NAME: "list-ul",
        SVG_KEY: "unorderedList"
    });
    d.DefineIcon("formatOL", {
        NAME: "list-ol",
        SVG_KEY: "orderedList"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.DEFAULTS, {
        paragraphFormat: {
            N: "Normal",
            H1: "Heading 1",
            H2: "Heading 2",
            H3: "Heading 3",
            H4: "Heading 4",
            PRE: "Code"
        },
        paragraphFormatSelection: !1,
        paragraphDefaultSelection: "Paragraph Format"
    });
    d.PLUGINS.paragraphFormat = function(a) {
        function c(c, d) {
            var h = a.html.defaultTag();
            if (d && d.toLowerCase() != h)
                if (0 < c.find("ul, ol").length)
                    for (d = X("<" + d + ">"), c.prepend(d), c = a.node.contents(c.get(0))[0]; c && 0 > ["UL", "OL"].indexOf(c.tagName);) h = c.nextSibling, d.append(c), c = h;
                else c.html("<" + d + ">" + c.html() + "</" + d + ">")
        }

        function d(c, d) {
            var h = a.html.defaultTag();
            d && d.toLowerCase() != h || (d = 'div class="fr-temp-div"');
            c.replaceWith(X("<" + d + ">").html(c.html()))
        }

        function M(c, d) {
            var h = a.html.defaultTag();
            d || (d = 'div class="fr-temp-div"' + (a.node.isEmpty(c.get(0), !0) ? ' data-empty="true"' : ""));
            d.toLowerCase() == h ? (a.node.isEmpty(c.get(0), !0) || c.append("<br/>"), c.replaceWith(c.html())) : c.replaceWith(X("<" + d + ">").html(c.html()))
        }

        function R(c, d) {
            d || (d = 'div class="fr-temp-div"' + (a.node.isEmpty(c.get(0), !0) ? ' data-empty="true"' : ""));
            "H1" == d || "H2" == d || "H3" == d || "H4" == d || "H5" == d ? a.node.attributes(c.get(0)).includes("font-size:") ? c.replaceWith(X("<" + d + " " + a.node.attributes(c.get(0)).replace(/font-size:[0-9]+px;?/, "") + ">").html(c.html()).removeAttr("data-empty")) : c.replaceWith(X("<" + d + " " + a.node.attributes(c.get(0)) +
                ">").html(c.html()).removeAttr("data-empty")) : c.replaceWith(X("<" + d + " " + a.node.attributes(c.get(0)) + ">").html(c.html()).removeAttr("data-empty"))
        }
        var X = a.$;
        return {
            apply: function(h) {
                "N" == h && (h = a.html.defaultTag());
                a.selection.save();
                a.html.wrap(!0, !0, !a.opts.paragraphFormat.BLOCKQUOTE, !0, !0);
                a.selection.restore();
                var m = a.selection.blocks();
                a.selection.save();
                a.$el.find("pre").attr("skip", !0);
                for (var t = 0; t < m.length; t++)
                    if (m[t].tagName != h && !a.node.isList(m[t])) {
                        var v = X(m[t]);
                        "LI" == m[t].tagName ? c(v, h) : "LI" == m[t].parentNode.tagName && m[t] ? d(v, h) : 0 <= ["TD", "TH"].indexOf(m[t].parentNode.tagName) ? M(v, h) : R(v, h)
                    }
                a.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function() {
                    X(this).prev().append("<br>" + X(this).html());
                    X(this).remove()
                });
                a.$el.find("pre").removeAttr("skip");
                a.html.unwrap();
                a.selection.restore()
            },
            refreshOnShow: function(c, d) {
                c = a.selection.blocks();
                if (c.length) {
                    c = c[0];
                    var h = "N",
                        m = a.html.defaultTag();
                    c.tagName.toLowerCase() != m && c != a.el && (h = c.tagName);
                    d.find('.fr-command[data-param1="' +
                        h + '"]').addClass("fr-active").attr("aria-selected", !0)
                } else d.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected", !0)
            },
            refresh: function(c) {
                if (a.opts.paragraphFormatSelection) {
                    var d = a.selection.blocks();
                    if (d.length) {
                        d = d[0];
                        var h = "N",
                            v = a.html.defaultTag();
                        d.tagName.toLowerCase() != v && d != a.el && (h = d.tagName);
                        0 <= ["LI", "TD", "TH"].indexOf(h) && (h = "N");
                        c.find(">span").text(a.language.translate(a.opts.paragraphFormat[h]))
                    } else c.find(">span").text(a.language.translate(a.opts.paragraphFormat.N))
                }
            }
        }
    };
    d.RegisterCommand("paragraphFormat", {
        type: "dropdown",
        displaySelection: function(a) {
            return a.opts.paragraphFormatSelection
        },
        defaultSelection: function(a) {
            return a.language.translate(a.opts.paragraphDefaultSelection)
        },
        displaySelectionWidth: 80,
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = this.opts.paragraphFormat,
                d;
            for (d in c) c.hasOwnProperty(d) && (this.shortcuts.get("paragraphFormat." + d), a += '<li role="presentation"><' + ("N" == d ? this.html.defaultTag() || "DIV" : d) + ' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="' +
                d + '" title="' + this.language.translate(c[d]) + '">' + this.language.translate(c[d]) + "</a></" + ("N" == d ? this.html.defaultTag() || "DIV" : d) + "></li>");
            return a + "</ul>"
        },
        title: "Paragraph Format",
        callback: function(a, c) {
            this.paragraphFormat.apply(c)
        },
        refresh: function(a) {
            this.paragraphFormat.refresh(a)
        },
        refreshOnShow: function(a, c) {
            this.paragraphFormat.refreshOnShow(a, c)
        },
        plugin: "paragraphFormat"
    });
    d.DefineIcon("paragraphFormat", {
        NAME: "paragraph",
        SVG_KEY: "paragraphFormat"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.POPUP_TEMPLATES, {
        "table.insert": "[_BUTTONS_][_ROWS_COLUMNS_]",
        "table.edit": "[_BUTTONS_]",
        "table.colors": "[_BUTTONS_][_COLORS_][_CUSTOM_COLOR_]"
    });
    Object.assign(d.DEFAULTS, {
        tableInsertMaxSize: 10,
        tableEditButtons: "tableHeader tableRemove tableRows tableColumns tableStyle - tableCells tableCellBackground tableCellVerticalAlign tableCellHorizontalAlign tableCellStyle".split(" "),
        tableInsertButtons: ["tableBack", "|"],
        tableResizer: !0,
        tableDefaultWidth: "100%",
        tableResizerOffset: 5,
        tableResizingLimit: 30,
        tableColorsButtons: ["tableBack", "|"],
        tableColors: "#61BD6D #1ABC9C #54ACD2 #2C82C9 #9365B8 #475577 #CCCCCC #41A85F #00A885 #3D8EB9 #2969B0 #553982 #28324E #000000 #F7DA64 #FBA026 #EB6B56 #E25041 #A38F84 #EFEFEF #FFFFFF #FAC51C #F37934 #D14841 #B8312F #7C706B #D1D5D8 REMOVE".split(" "),
        tableColorsStep: 7,
        tableCellStyles: {
            "fr-highlighted": "Highlighted",
            "fr-thick": "Thick"
        },
        tableStyles: {
            "fr-dashed-borders": "Dashed Borders",
            "fr-alternate-rows": "Alternate Rows"
        },
        tableCellMultipleStyles: !0,
        tableMultipleStyles: !0,
        tableInsertHelper: !0,
        tableInsertHelperOffset: 15
    });
    d.PLUGINS.table = function(a) {
        function c() {
            var c = b();
            if (c) {
                var d = a.popups.get("table.edit");
                d || (d = t());
                d && (a.popups.setContainer("table.edit", a.$sc), c = Z(c), a.popups.show("table.edit", c.left + (c.right - c.left) / 2, c.bottom, c.bottom - c.top, !0), a.edit.isDisabled() && (1 < Q().length && a.toolbar.disable(), a.$el.removeClass("fr-no-selection"), a.edit.on(), a.button.bulkRefresh(), a.selection.setAtEnd(a.$el.find(".fr-selected-cell").last().get(0)), a.selection.restore()))
            }
        }

        function h() {
            var c = b();
            if (c) {
                a.popups.get("table.colors") || L();
                a.popups.setContainer("table.colors", a.$sc);
                c = Z(c);
                var d = (c.left + c.right) / 2,
                    e = c.bottom,
                    f = a.popups.get("table.colors"),
                    g = a.$el.find(".fr-selected-cell").first();
                g = a.helpers.RGBToHex(g.css("background-color"));
                var h = f.find(".fr-table-colors-hex-layer input");
                f.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item");
                f.find('span[data-param1="'.concat(g, '"]')).addClass("fr-selected-color fr-active-item");
                h.val(g).trigger("change");
                a.popups.show("table.colors", d, e, c.bottom - c.top, !0)
            }
        }

        function M() {
            0 === Q().length && a.toolbar.enable()
        }

        function R(b) {
            if (b) return a.popups.onHide("table.insert", function() {
                a.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseover")
            }), !0;
            b = "";
            0 < a.opts.tableInsertButtons.length && (b = '<div class="fr-buttons fr-tabs">'.concat(a.button.buildList(a.opts.tableInsertButtons), "</div>"));
            b = {
                buttons: b,
                rows_columns: v()
            };
            b = a.popups.create("table.insert", b);
            a.events.$on(b, "mouseover", ".fr-table-size .fr-select-table-size .fr-table-cell", function(a) {
                X(D(a.currentTarget))
            }, !0);
            m(b);
            return b
        }

        function X(b) {
            var c = b.data("row");
            null !== c && (c = parseInt(c));
            var d = b.data("col");
            null !== d && (d = parseInt(d));
            var e = b.parent();
            e.siblings(".fr-table-size-info").html("".concat(c, " &times; ").concat(d));
            e.find("> span").removeClass("hover fr-active-item");
            for (var f = 1; f <= a.opts.tableInsertMaxSize; f++)
                for (var g = 0; g <= a.opts.tableInsertMaxSize; g++) {
                    var p = e.find('> span[data-row="'.concat(f, '"][data-col="').concat(g, '"]'));
                    f <= c && g <= d ? p.addClass("hover") : f <= c + 1 || 2 >= f && !a.helpers.isMobile() ? p.css("display", "inline-block") : 2 < f && !a.helpers.isMobile() && p.css("display", "none")
                }
            b.addClass("fr-active-item")
        }

        function v() {
            for (var b = '<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">', c = 1; c <= a.opts.tableInsertMaxSize; c++) {
                for (var d = 1; d <= a.opts.tableInsertMaxSize; d++) {
                    var e = "inline-block";
                    2 < c && !a.helpers.isMobile() && (e = "none");
                    var f = "fr-table-cell ";
                    1 == c && 1 == d && (f += " hover");
                    b += '<span class="fr-command '.concat(f, '" tabIndex="-1" data-cmd="tableInsert" data-row="').concat(c, '" data-col="').concat(d, '" data-param1="').concat(c, '" data-param2="').concat(d, '" style="display: ').concat(e, ';" role="button"><span></span><span class="fr-sr-only">').concat(c, " &times; ").concat(d, "&nbsp;&nbsp;&nbsp;</span></span>")
                }
                b += '<div class="new-line"></div>'
            }
            return b + "</div></div>"
        }

        function m(b) {
            a.events.$on(b, "focus", "[tabIndex]", function(a) {
                a = D(a.currentTarget);
                X(a)
            });
            a.events.on("popup.tab", function(b) {
                var c = D(b.currentTarget);
                if (!a.popups.isVisible("table.insert") || !c.is("span, a")) return !0;
                var e = b.which;
                if (d.KEYCODE.ARROW_UP == e || d.KEYCODE.ARROW_DOWN == e || d.KEYCODE.ARROW_LEFT == e || d.KEYCODE.ARROW_RIGHT == e) {
                    if (c.is("span.fr-table-cell")) {
                        var f = c.parent().find("span.fr-table-cell");
                        var g = f.index(c);
                        c = a.opts.tableInsertMaxSize;
                        var p = g % c;
                        g = Math.floor(g / c);
                        d.KEYCODE.ARROW_UP == e ? g = Math.max(0, g - 1) : d.KEYCODE.ARROW_DOWN == e ? g = Math.min(a.opts.tableInsertMaxSize - 1, g + 1) : d.KEYCODE.ARROW_LEFT == e ? p = Math.max(0, p - 1) : d.KEYCODE.ARROW_RIGHT == e && (p = Math.min(a.opts.tableInsertMaxSize - 1, p + 1));
                        e = D(f.get(g * c + p));
                        X(e);
                        a.events.disableBlur();
                        e.focus();
                        f = !1
                    }
                } else d.KEYCODE.ENTER == e && (a.button.exec(c), f = !1);
                !1 === f && (b.preventDefault(), b.stopPropagation());
                return f
            }, !0)
        }

        function t(b) {
            if (b) return a.popups.onHide("table.edit", M), !0;
            b = "";
            return 0 < a.opts.tableEditButtons.length ? (b = '<div class="fr-buttons">'.concat(a.button.buildList(a.opts.tableEditButtons), "</div>"), b = a.popups.create("table.edit", {
                buttons: b
            }), a.events.$on(a.$wp, "scroll.table-edit", function() {
                a.popups.isVisible("table.edit") && c()
            }), b) : !1
        }

        function L() {
            var b = "";
            0 < a.opts.tableColorsButtons.length && (b = '<div class="fr-buttons fr-tabs">'.concat(a.button.buildList(a.opts.tableColorsButtons), "</div>"));
            var c = "";
            a.opts.colorsHEXInput && (c = '<div class="fr-color-hex-layer fr-table-colors-hex-layer fr-active fr-layer" id="fr-table-colors-hex-layer-'.concat(a.id, '"><div class="fr-input-line"><input maxlength="7" id="fr-table-colors-hex-layer-text-').concat(a.id, '" type="text" placeholder="').concat(a.language.translate("HEX Color"), '" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="tableCellBackgroundCustomColor" tabIndex="2" role="button">').concat(a.language.translate("OK"), "</button></div></div>"));
            b = {
                buttons: b,
                colors: y(),
                custom_color: c
            };
            b = a.popups.create("table.colors", b);
            a.events.$on(a.$wp, "scroll.table-colors", function() {
                a.popups.isVisible("table.colors") && h()
            });
            S(b);
            return b
        }

        function y() {
            for (var b = '<div class="fr-color-set fr-table-colors">', c = 0; c < a.opts.tableColors.length; c++) 0 !== c && 0 === c % a.opts.tableColorsStep && (b += "<br>"), b = "REMOVE" != a.opts.tableColors[c] ? b + '<span class="fr-command" style="background: '.concat(a.opts.tableColors[c], ';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="').concat(a.opts.tableColors[c], '"><span class="fr-sr-only">').concat(a.language.translate("Color"), " ").concat(a.opts.tableColors[c], "&nbsp;&nbsp;&nbsp;</span></span>") : b + '<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'.concat(a.language.translate("Clear Formatting"), '">').concat(a.icon.create("tableColorRemove"), '<span class="fr-sr-only">').concat(a.language.translate("Clear Formatting"), "</span></span>");
            return b + "</div>"
        }

        function S(b) {
            a.events.on("popup.tab", function(c) {
                var e = D(c.currentTarget);
                if (!a.popups.isVisible("table.colors") || !e.is("span")) return !0;
                var f = c.which,
                    g = !0;
                if (d.KEYCODE.TAB == f) f = b.find(".fr-buttons"), g = !a.accessibility.focusToolbar(f, c.shiftKey ? !0 : !1);
                else if (d.KEYCODE.ARROW_UP == f || d.KEYCODE.ARROW_DOWN == f || d.KEYCODE.ARROW_LEFT == f || d.KEYCODE.ARROW_RIGHT == f) {
                    g = e.parent().find("span.fr-command");
                    var h = g.index(e);
                    e = a.opts.colorsStep;
                    h = Math.floor(h / e) * e + h % e;
                    var k = Math.floor(g.length / e) * e;
                    d.KEYCODE.ARROW_UP == f ? h = ((h - e) % k + k) % k : d.KEYCODE.ARROW_DOWN == f ? h = (h + e) % k : d.KEYCODE.ARROW_LEFT == f ? h = ((h - 1) % k + k) % k : d.KEYCODE.ARROW_RIGHT == f && (h = (h + 1) % k);
                    f = D(g.get(h));
                    a.events.disableBlur();
                    f.focus();
                    g = !1
                } else d.KEYCODE.ENTER == f && (a.button.exec(e), g = !1);
                !1 === g && (c.preventDefault(), c.stopPropagation());
                return g
            }, !0)
        }

        function w() {
            if (0 < Q().length) {
                var b = ma();
                a.selection.setBefore(b.get(0)) || a.selection.setAfter(b.get(0));
                a.selection.restore();
                a.popups.hide("table.edit");
                b.remove();
                a.toolbar.enable()
            }
        }

        function f(d) {
            var e = ma();
            if (0 < e.length && !(0 < a.$el.find("th.fr-selected-cell").length && "above" == d)) {
                var f, g = b(),
                    h = A(g);
                if (null != h) {
                    var k = "above" == d ? h.min_i : h.max_i;
                    h = "<tr>";
                    for (f = 0; f < g[k].length; f++)
                        if ("below" == d && k < g.length - 1 && g[k][f] == g[k + 1][f] || "above" == d && 0 < k && g[k][f] == g[k - 1][f]) {
                            if (0 === f || 0 < f && g[k][f] != g[k][f - 1]) {
                                var p = D(g[k][f]);
                                p.attr("rowspan", parseInt(p.attr("rowspan"), 10) + 1)
                            }
                        } else p = D(g[k][f]), h += '<td style="' + p.attr("style") + '" ><br></td>';
                    h += "</tr>";
                    e = 0 < a.$el.find("th.fr-selected-cell").length && "below" == d ? D(e.find("tbody").not(e.find("> table tbody"))) : D(e.find("tr").not(e.find("> table tr")).get(k));
                    "below" == d ? "TBODY" == e.attr("tagName") ? e.prepend(h) : e[0].parentNode && e[0].insertAdjacentHTML("afterend", h) : "above" == d && (e.before(h), a.popups.isVisible("table.edit") && c())
                }
            }
        }

        function x(a, c, d) {
            var e, f, g = 0,
                h = b(d);
            c = Math.min(c, h[0].length - 1);
            if (c > a)
                for (e = a; e <= c; e++)
                    if (!(e > a && h[0][e] == h[0][e - 1])) {
                        var k = Math.min(parseInt(h[0][e].getAttribute("colspan"), 10) || 1, c - a + 1);
                        if (1 < k && h[0][e] == h[0][e + 1])
                            for (g = k - 1, d = 1; d < h.length; d++)
                                if (h[d][e] != h[d - 1][e]) {
                                    for (f = e; f < e + k; f++) {
                                        var p = parseInt(h[d][f].getAttribute("colspan"), 10) || 1;
                                        if (1 < p && h[d][f] == h[d][f + 1]) g = Math.min(g, p - 1), f += g;
                                        else if (g = Math.max(0, g - 1), !g) break
                                    }
                                    if (!g) break
                                }
                    }
            g && G(h, g, "colspan", 0, h.length - 1, a, c)
        }

        function C(a, c, d) {
            var e, f, g = 0,
                h = b(d);
            c = Math.min(c, h.length - 1);
            if (c > a)
                for (d = a; d <= c; d++)
                    if (!(d > a && h[d][0] == h[d - 1][0])) {
                        var k = Math.min(parseInt(h[d][0].getAttribute("rowspan"), 10) || 1, c - a + 1);
                        if (1 < k && h[d][0] == h[d + 1][0])
                            for (g = k - 1, e = 1; e < h[0].length; e++)
                                if (h[d][e] != h[d][e - 1]) {
                                    for (f = d; f < d + k; f++) {
                                        var p = parseInt(h[f][e].getAttribute("rowspan"), 10) || 1;
                                        if (1 < p && h[f][e] == h[f + 1][e]) g = Math.min(g, p - 1), f += g;
                                        else if (g = Math.max(0, g - 1), !g) break
                                    }
                                    if (!g) break
                                }
                    }
            g && G(h, g, "rowspan", a, c, 0, h[0].length -
                1)
        }

        function G(a, b, c, d, e, f, g) {
            var h, k;
            for (h = d; h <= e; h++)
                for (k = f; k <= g; k++)
                    if (!(h > d && a[h][k] == a[h - 1][k] || k > f && a[h][k] == a[h][k - 1])) {
                        var p = parseInt(a[h][k].getAttribute(c), 10) || 1;
                        1 < p && (1 < p - b ? a[h][k].setAttribute(c, p - b) : a[h][k].removeAttribute(c))
                    }
        }

        function oa(a, b, c, d, e) {
            C(a, b, e);
            x(c, d, e)
        }

        function V(b) {
            var d = a.$el.find(".fr-selected-cell");
            "REMOVE" != b ? d.css("background-color", a.helpers.HEXtoRGB(b)) : d.css("background-color", "");
            c()
        }

        function b(a) {
            a = a || null;
            var b = [];
            null == a && 0 < Q().length && (a = ma());
            a && a.findVisible("tr").not(a.find("> table tr")).each(function(a, c) {
                var d = 0;
                D(c).find("> th, > td").each(function(c, e) {
                    var f = D(e);
                    c = parseInt(f.attr("colspan"), 10) || 1;
                    f = parseInt(f.attr("rowspan"), 10) || 1;
                    for (var g = a; g < a + f; g++)
                        for (var h = d; h < d + c; h++) b[g] || (b[g] = []), b[g][h] ? d++ : b[g][h] = e;
                    d += c
                })
            });
            return b
        }

        function e(a, b) {
            for (var c = 0; c < b.length; c++)
                for (var d = 0; d < b[c].length; d++)
                    if (b[c][d] == a) return {
                        row: c,
                        col: d
                    }
        }

        function n(a, b, c) {
            for (var d = a + 1, e = b + 1; d < c.length;) {
                if (c[d][b] != c[a][b]) {
                    d--;
                    break
                }
                d++
            }
            for (d == c.length && d--; e < c[a].length;) {
                if (c[a][e] != c[a][b]) {
                    e--;
                    break
                }
                e++
            }
            e == c[a].length && e--;
            return {
                row: d,
                col: e
            }
        }

        function k() {
            a.el.querySelector(".fr-cell-fixed") && a.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed");
            a.el.querySelector(".fr-cell-handler") && a.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")
        }

        function g() {
            var b = a.$el.find(".fr-selected-cell");
            0 < b.length && b.each(function() {
                var a = D(this);
                a.removeClass("fr-selected-cell");
                "" === a.attr("class") && a.removeAttr("class")
            });
            k()
        }

        function I() {
            a.events.disableBlur();
            a.selection.clear();
            a.$el.addClass("fr-no-selection");
            a.$el.blur();
            a.events.enableBlur()
        }

        function A(b) {
            var c = a.$el.find(".fr-selected-cell");
            if (0 < c.length) {
                var d = b.length,
                    f = 0,
                    g = b[0].length,
                    h = 0,
                    k;
                for (k = 0; k < c.length; k++) {
                    var p = e(c[k], b),
                        B = n(p.row, p.col, b);
                    d = Math.min(p.row, d);
                    f = Math.max(B.row, f);
                    g = Math.min(p.col, g);
                    h = Math.max(B.col, h)
                }
                return {
                    min_i: d,
                    max_i: f,
                    min_j: g,
                    max_j: h
                }
            }
            return null
        }

        function ua(a, b, c, d, f) {
            var g = a,
                h = b,
                k = c,
                p = d,
                B;
            for (B = g; B <= h; B++) {
                if (1 < (parseInt(D(f[B][k]).attr("rowspan"), 10) || 1) || 1 < (parseInt(D(f[B][k]).attr("colspan"), 10) || 1)) {
                    var l = e(f[B][k], f);
                    var m = n(l.row, l.col, f);
                    g = Math.min(l.row, g);
                    h = Math.max(m.row, h);
                    k = Math.min(l.col, k);
                    p = Math.max(m.col, p)
                }
                if (1 < (parseInt(D(f[B][p]).attr("rowspan"), 10) || 1) || 1 < (parseInt(D(f[B][p]).attr("colspan"), 10) || 1)) l = e(f[B][p], f), m = n(l.row, l.col, f), g = Math.min(l.row, g), h = Math.max(m.row, h), k = Math.min(l.col, k), p = Math.max(m.col, p)
            }
            for (B = k; B <= p; B++) {
                if (1 < (parseInt(D(f[g][B]).attr("rowspan"), 10) || 1) || 1 < (parseInt(D(f[g][B]).attr("colspan"), 10) || 1)) l = e(f[g][B], f), m = n(l.row, l.col, f), g = Math.min(l.row, g), h = Math.max(m.row, h), k = Math.min(l.col, k), p = Math.max(m.col, p);
                if (1 < (parseInt(D(f[h][B]).attr("rowspan"), 10) || 1) || 1 < (parseInt(D(f[h][B]).attr("colspan"), 10) || 1)) l = e(f[h][B], f), m = n(l.row, l.col, f), g = Math.min(l.row, g), h = Math.max(m.row, h), k = Math.min(l.col, k), p = Math.max(m.col, p)
            }
            return g == a && h == b && k == c && p == d ? {
                min_i: a,
                max_i: b,
                min_j: c,
                max_j: d
            } : ua(g, h, k, p, f)
        }

        function Z(a) {
            var b = A(a);
            if (null != b) {
                var c = D(a[b.min_i][b.min_j]),
                    d = D(a[b.min_i][b.max_j]);
                b = D(a[b.max_i][b.min_j]);
                a = c.length && c.offset().left;
                d = d.length && d.offset().left + d.outerWidth();
                c = c.length && c.offset().top;
                b = b.length && b.offset().top + b.outerHeight();
                return {
                    left: a,
                    right: d,
                    top: c,
                    bottom: b
                }
            }
        }

        function E(c, d) {
            if (D(c).is(d)) g(), D(c).addClass("fr-selected-cell");
            else {
                I();
                a.edit.off();
                var f = b(),
                    h = e(c, f),
                    k = e(d, f);
                h = ua(Math.min(h.row, k.row), Math.max(h.row, k.row), Math.min(h.col, k.col), Math.max(h.col, k.col), f);
                g();
                c.classList.add("fr-cell-fixed");
                d.classList.add("fr-cell-handler");
                for (d = h.min_i; d <= h.max_i; d++)
                    for (k = h.min_j; k <= h.max_j; k++) D(c).closest("table").is(D(f[d][k]).closest("table")) && D(f[d][k]).addClass("fr-selected-cell")
            }
        }

        function F(b) {
            var c = null,
                d = D(b.target);
            "TD" == b.target.tagName || "TH" == b.target.tagName ? c = b.target : 0 < d.closest("th", d.closest("thead")[0]).length ? c = d.closest("th", d.closest("thead")[0]).get(0) : 0 < d.closest("td", d.closest("tr")[0]).length && (c = d.closest("td", d.closest("tr")[0]).get(0));
            return -1 === a.$el.html.toString().search(c) ? null : c
        }

        function na() {
            g();
            a.popups.hide("table.edit")
        }

        function ya(b) {
            var c = F(b);
            if ("false" == D(c).parents("[contenteditable]").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable")) return !0;
            0 < Q().length && !c && na();
            if (!a.edit.isDisabled() || a.popups.isVisible("table.edit"))
                if (1 != b.which || 1 == b.which && a.helpers.isMac() && b.ctrlKey)(3 == b.which || 1 == b.which && a.helpers.isMac() && b.ctrlKey) && c && na();
                else if (ca = !0, c) {
                0 < Q().length && !b.shiftKey && na();
                b.stopPropagation();
                a.events.trigger("image.hideResizer");
                a.events.trigger("video.hideResizer");
                la = !0;
                var d = c.tagName.toLowerCase();
                b.shiftKey && 0 < a.$el.find("".concat(d, ".fr-selected-cell")).length ? D(a.$el.find("".concat(d, ".fr-selected-cell")).closest("table")).is(D(c).closest("table")) ? E(ia, c) : I() : ((a.keys.ctrlKey(b) || b.shiftKey) && (1 < Q().length || 0 === D(c).find(a.selection.element()).length && !D(c).is(a.selection.element())) && I(), ia = c, 0 < a.opts.tableEditButtons.length && E(ia, ia))
            }
        }

        function va(d) {
            if (!a.edit.isDisabled() && a.popups.areVisible()) return !0;
            la || a.$tb.is(d.target) || a.$tb.is(D(d.target).closest(".fr-toolbar")) || (0 < Q().length && a.toolbar.enable(), g());
            if (!(1 != d.which || 1 == d.which && a.helpers.isMac() && d.ctrlKey) && (ca = !1, la && ((la = !1, F(d) || 1 != Q().length) ? 0 < Q().length ? a.selection.isCollapsed() ? c() : (g(), a.edit.on()) : Q().length || (a.$el.removeClass("fr-no-selection"), a.edit.on()) : g()), O)) {
                O = !1;
                N.removeClass("fr-moving");
                a.$el.removeClass("fr-no-selection");
                a.edit.on();
                d = parseFloat(N.css("left")) + a.opts.tableResizerOffset + a.$wp.offset().left;
                a.opts.iframe && (d -= a.$iframe.offset().left);
                N.data("release-position", d);
                N.removeData("max-left");
                N.removeData("max-right");
                d = N.data("origin");
                var e = N.data("release-position");
                if (d !== e) {
                    var f = N.data("first"),
                        h = N.data("second"),
                        k = N.data("table"),
                        p = k.outerWidth();
                    a.undo.canDo() || a.undo.saveStep();
                    if (null != f && null != h) {
                        var B = b(k),
                            l = [],
                            m = [],
                            n = [],
                            q = [],
                            r;
                        for (r = 0; r < B.length; r++) {
                            var t = D(B[r][f]);
                            var u = D(B[r][h]);
                            l[r] = t.outerWidth();
                            n[r] = u.outerWidth();
                            m[r] = l[r] / p * 100;
                            q[r] = n[r] / p * 100
                        }
                        for (r = 0; r < B.length; r++) t = D(B[r][f]), u = D(B[r][h]), B[r][f] != B[r][h] && (p = (m[r] * (l[r] + e - d) / l[r]).toFixed(4), t.css("width", p + "%"), u.css("width", (m[r] + q[r] - p).toFixed(4) + "%"))
                    } else {
                        m = k.parent();
                        f = p / m.width() * 100;
                        l = (parseInt(k.css("margin-left"), 10) || 0) / m.width() * 100;
                        m = (parseInt(k.css("margin-right"), 10) || 0) / m.width() * 100;
                        if ("rtl" == a.opts.direction && 0 === h || "rtl" != a.opts.direction && 0 !== h) B = (p + e - d) / p * f, k.css("margin-right", "calc(100% - ".concat(Math.round(B).toFixed(4), "% - ").concat(Math.round(l).toFixed(4), "%)"));
                        else if ("rtl" == a.opts.direction && 0 !== h || "rtl" != a.opts.direction && 0 === h) B = (p - e + d) / p * f, k.css("margin-left", "calc(100% - ".concat(Math.round(B).toFixed(4), "% - ").concat(Math.round(m).toFixed(4), "%)"));
                        k.css("width", "".concat(Math.round(B).toFixed(4), "%"))
                    }
                    a.selection.restore();
                    a.undo.saveStep();
                    a.events.trigger("table.resized", [k.get(0)])
                }
                N.removeData("origin");
                N.removeData("release-position");
                N.removeData("first");
                N.removeData("second");
                N.removeData("table");
                z()
            }
            Q().length || (a.$el.removeClass("fr-no-selection"), a.edit.on())
        }

        function q(b) {
            if (!(D(b.currentTarget).is(D(b.originalEvent.relatedTarget)) || b.currentTarget.contains(b.originalEvent.relatedTarget) || b.originalEvent.relatedTarget && b.originalEvent.relatedTarget.contains(b.currentTarget)) && (a.events.$on(D("input"), "click", B), !0 === la && 0 < a.opts.tableEditButtons.length)) {
                if (D(b.currentTarget).closest("table").is(ma())) {
                    if ("TD" == b.currentTarget.tagName && 0 === a.$el.find("th.fr-selected-cell").length) {
                        E(ia, b.currentTarget);
                        return
                    }
                    if ("TH" == b.currentTarget.tagName && 0 === a.$el.find("td.fr-selected-cell").length) {
                        E(ia, b.currentTarget);
                        return
                    }
                }
                I()
            }
        }

        function pa(c, d, f, g) {
            c = d;
            for (var h; c != a.el && "TD" != c.tagName && "TH" != c.tagName;) {
                "up" == g ? h = c.previousElementSibling : "down" == g && (h = c.nextElementSibling);
                if (h) break;
                c = c.parentNode
            }
            if ("TD" == c.tagName || "TH" == c.tagName) {
                for (c = h = c; c && "TABLE" != c.tagName && c.parentNode != a.el;) c = c.parentNode;
                c && "TABLE" == c.tagName && (d = b(D(c)), "up" == g ? da(e(h, d), c, d) : "down" == g && fa(e(h, d), c, d))
            } else h && ("up" == g && a.selection.setAtEnd(h), "down" == g && a.selection.setAtStart(h))
        }

        function da(b, c, d) {
            0 < b.row ? a.selection.setAtEnd(d[b.row - 1][b.col]) : pa(b, c, d, "up")
        }

        function fa(b, c, d) {
            var e = parseInt(d[b.row][b.col].getAttribute("rowspan"), 10) || 1;
            b.row < d.length - e ? a.selection.setAtStart(d[b.row + e][b.col]) : pa(b, c, d, "down")
        }

        function ba(c) {
            var f = c.which,
                g = a.selection.blocks();
            if (g.length && (g = g[0], "TD" == g.tagName || "TH" == g.tagName)) {
                for (var h = g; h && "TABLE" != h.tagName && h.parentNode != a.el;) h = h.parentNode;
                if (h && "TABLE" == h.tagName && (d.KEYCODE.ARROW_LEFT == f || d.KEYCODE.ARROW_UP == f || d.KEYCODE.ARROW_RIGHT == f || d.KEYCODE.ARROW_DOWN == f) && (0 < Q().length && na(), a.browser.webkit && (d.KEYCODE.ARROW_UP == f || d.KEYCODE.ARROW_DOWN == f))) {
                    var k = a.selection.ranges(0).startContainer;
                    if (k.nodeType != Node.TEXT_NODE || !(d.KEYCODE.ARROW_UP == f && (k.previousSibling && "BR" !== k.previousSibling.tagName || k.previousSibling && "BR" === k.previousSibling.tagName && k.previousSibling.previousSibling) || d.KEYCODE.ARROW_DOWN == f && (k.nextSibling && "BR" !== k.nextSibling.tagName || k.nextSibling && "BR" === k.nextSibling.tagName && k.nextSibling.nextSibling))) return c.preventDefault(), c.stopPropagation(), c = b(D(h)), g = e(g, c), d.KEYCODE.ARROW_UP == f ? da(g, h, c) : d.KEYCODE.ARROW_DOWN == f && fa(g, h, c), a.selection.restore(), !1
                }
            }
        }

        function r() {
            a.shared.$table_resizer || (a.shared.$table_resizer = D(document.createElement("div")).attr("class", "fr-table-resizer").html("<div></div>"));
            N = a.shared.$table_resizer;
            a.events.$on(N, "mousedown", function(b) {
                if (!a.core.sameInstance(N)) return !0;
                0 < Q().length && na();
                if (1 == b.which) return a.selection.save(), O = !0, N.addClass("fr-moving"), I(), a.edit.off(), N.find("div").css("opacity", 1), !1
            });
            a.events.$on(N, "mousemove", function(b) {
                if (!a.core.sameInstance(N)) return !0;
                O && (a.opts.iframe && (b.pageX -= a.$iframe.offset().left), qa(b))
            });
            a.events.on("shared.destroy", function() {
                N.html("").removeData().remove();
                N = null
            }, !0);
            a.events.on("destroy", function() {
                a.$el.find(".fr-selected-cell").removeClass("fr-selected-cell");
                D("body").first().append(N.hide())
            }, !0)
        }

        function z() {
            N && (N.find("div").css("opacity", 0), N.css("top", 0), N.css("left", 0), N.css("height", 0), N.find("div").css("height", 0), N.hide())
        }

        function l() {
            U && U.removeClass("fr-visible").css("left", "-9999px")
        }

        function u(b, c) {
            if (a.$box.find(".fr-line-breaker").isVisible()) return !1;
            U || ha();
            a.$box.append(U);
            U.data("instance", a);
            c = D(c).find("tr").first();
            var d = b.pageX,
                e = 0,
                f = 0;
            if (a.opts.iframe) {
                b = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-top"));
                var g = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-left"));
                e += a.$iframe.offset().left - a.helpers.scrollLeft() + g;
                f += a.$iframe.offset().top - a.helpers.scrollTop() + b
            }
            var h;
            c.find("th, td").each(function() {
                var b = D(this);
                if (b.offset().left <= d && d < b.offset().left + b.outerWidth() / 2) return h = parseInt(U.find("a").css("width"), 10), U.css("top", f + b.offset().top - a.$box.offset().top - h - 5), U.css("left", e + b.offset().left -
                    a.$box.offset().left - h / 2), U.data("selected-cell", b), U.data("position", "before"), U.addClass("fr-visible"), !1;
                if (b.offset().left + b.outerWidth() / 2 <= d && d < b.offset().left + b.outerWidth()) return h = parseInt(U.find("a").css("width"), 10), U.css("top", f + b.offset().top - a.$box.offset().top - h - 5), U.css("left", e + b.offset().left - a.$box.offset().left + b.outerWidth() - h / 2), U.data("selected-cell", b), U.data("position", "after"), U.addClass("fr-visible"), !1
            })
        }

        function W(b, c) {
            if (a.$box.find(".fr-line-breaker").isVisible()) return !1;
            U || ha();
            a.$box.append(U);
            U.data("instance", a);
            c = D(c);
            var d = b.pageY,
                e = 0,
                f = 0;
            if (a.opts.iframe) {
                b = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-top"));
                var g = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-left"));
                e += a.$iframe.offset().left - a.helpers.scrollLeft() + g;
                f += a.$iframe.offset().top - a.helpers.scrollTop() + b
            }
            var h;
            c.find("tr").each(function() {
                var b = D(this);
                if (b.offset().top <= d && d < b.offset().top + b.outerHeight() / 2) return h = parseInt(U.find("a").css("width"), 10), U.css("top", f + b.offset().top -
                    a.$box.offset().top - h / 2), U.css("left", e + b.offset().left - a.$box.offset().left - h - 5), U.data("selected-cell", b.find("td").first()), U.data("position", "above"), U.addClass("fr-visible"), !1;
                if (b.offset().top + b.outerHeight() / 2 <= d && d < b.offset().top + b.outerHeight()) return h = parseInt(U.find("a").css("width"), 10), U.css("top", f + b.offset().top - a.$box.offset().top + b.outerHeight() - h / 2), U.css("left", e + b.offset().left - a.$box.offset().left - h - 5), U.data("selected-cell", b.find("td").first()), U.data("position", "below"), U.addClass("fr-visible"), !1
            })
        }

        function H(b, c) {
            if (0 === Q().length) {
                if (c && ("HTML" == c.tagName || "BODY" == c.tagName || a.node.isElement(c)))
                    for (c = 1; c <= a.opts.tableInsertHelperOffset; c++) {
                        var d = a.doc.elementFromPoint(b.pageX - a.win.pageXOffset, b.pageY - a.win.pageYOffset + c);
                        if (D(d).hasClass("fr-tooltip")) return !0;
                        if (d && ("TH" == d.tagName || "TD" == d.tagName || "TABLE" == d.tagName) && (D(d).parents(".fr-wrapper").length || a.opts.iframe) && "false" != D(d).closest("table").attr("contenteditable")) return u(b, D(d).closest("table")), !0;
                        d = a.doc.elementFromPoint(b.pageX - a.win.pageXOffset + c, b.pageY - a.win.pageYOffset);
                        if (D(d).hasClass("fr-tooltip")) return !0;
                        if (d && ("TH" == d.tagName || "TD" == d.tagName || "TABLE" == d.tagName) && (D(d).parents(".fr-wrapper").length || a.opts.iframe) && "false" != D(d).closest("table").attr("contenteditable")) return W(b, D(d).closest("table")), !0
                    }
                a.core.sameInstance(U) && l()
            }
        }

        function T(c) {
            ra = null;
            var d = a.doc.elementFromPoint(c.pageX - a.win.pageXOffset, c.pageY - a.win.pageYOffset);
            if (a.opts.tableResizer && (!a.popups.areVisible() || a.popups.areVisible() && a.popups.isVisible("table.edit"))) {
                var f = d,
                    g = D(f),
                    h = g.closest("table"),
                    k = h.parent();
                f && "TD" != f.tagName && "TH" != f.tagName && (0 < g.closest("td").length ? f = g.closest("td") : 0 < g.closest("th").length && (f = g.closest("th")));
                if (!f || "TD" != f.tagName && "TH" != f.tagName) N && g.get(0) != N.get(0) && g.parent().get(0) != N.get(0) && a.core.sameInstance(N) && z();
                else if (g = D(f), 0 !== a.$el.find(g).length) {
                    var B = g.offset().left - 1;
                    g = B + g.outerWidth();
                    if (Math.abs(c.pageX - B) <= a.opts.tableResizerOffset || Math.abs(g -
                            c.pageX) <= a.opts.tableResizerOffset) {
                        var p = b(h),
                            l = e(f, p),
                            m = n(l.row, l.col, p),
                            q = h.offset().top;
                        f = h.outerHeight() - 1;
                        if ("rtl" != a.opts.direction)
                            if (c.pageX - B <= a.opts.tableResizerOffset) {
                                var t = B;
                                if (0 < l.col) {
                                    var u = B - K(l.col - 1, p) + a.opts.tableResizingLimit;
                                    var v = B + K(l.col, p) - a.opts.tableResizingLimit;
                                    var w = l.col - 1;
                                    var x = l.col
                                } else w = null, x = 0, u = h.offset().left - 1 - parseInt(h.css("margin-left"), 10), v = h.offset().left - 1 + h.width() - p[0].length * a.opts.tableResizingLimit
                            } else g - c.pageX <= a.opts.tableResizerOffset && (t = g, m.col < p[m.row].length && p[m.row][m.col + 1] ? (u = g - K(m.col, p) + a.opts.tableResizingLimit, v = g + K(m.col + 1, p) - a.opts.tableResizingLimit, w = m.col, x = m.col + 1) : (w = m.col, x = null, u = h.offset().left - 1 + p[0].length * a.opts.tableResizingLimit, v = k.offset().left - 1 + k.width() + parseFloat(k.css("padding-left"))));
                        else g - c.pageX <= a.opts.tableResizerOffset ? (t = g, 0 < l.col ? (u = g - K(l.col, p) + a.opts.tableResizingLimit, v = g + K(l.col - 1, p) - a.opts.tableResizingLimit, w = l.col, x = l.col - 1) : (w = null, x = 0, u = h.offset().left + p[0].length * a.opts.tableResizingLimit, v = k.offset().left - 1 + k.width() + parseFloat(k.css("padding-left")))) : c.pageX - B <= a.opts.tableResizerOffset && (t = B, m.col < p[m.row].length && p[m.row][m.col + 1] ? (u = B - K(m.col + 1, p) + a.opts.tableResizingLimit, v = B + K(m.col, p) - a.opts.tableResizingLimit, w = m.col + 1, x = m.col) : (w = m.col, x = null, u = k.offset().left + parseFloat(k.css("padding-left")), v = h.offset().left - 1 + h.width() - p[0].length * a.opts.tableResizingLimit));
                        N || r();
                        N.data("table", h);
                        N.data("first", w);
                        N.data("second", x);
                        N.data("instance", a);
                        a.$wp.append(N);
                        h = t - a.win.pageXOffset -
                            a.opts.tableResizerOffset - a.$wp.offset().left;
                        k = q - a.$wp.offset().top + a.$wp.scrollTop();
                        a.opts.iframe && (B = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-top")), w = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-left")), h += a.$iframe.offset().left + w, k += a.$iframe.offset().top + B, u += a.$iframe.offset().left, v += a.$iframe.offset().left);
                        N.data("max-left", u);
                        N.data("max-right", v);
                        N.data("origin", t - a.win.pageXOffset);
                        N.css("top", k);
                        N.css("left", h);
                        N.css("height", f);
                        N.find("div").css("height", f);
                        N.css("padding-left", a.opts.tableResizerOffset);
                        N.css("padding-right", a.opts.tableResizerOffset);
                        N.show()
                    } else a.core.sameInstance(N) && z()
                }
            }!a.opts.tableInsertHelper || a.popups.areVisible() || a.$tb.hasClass("fr-inline") && a.$tb.isVisible() || H(c, d)
        }

        function ka() {
            if (O) {
                var b = N.data("table").offset().top - a.win.pageYOffset;
                if (a.opts.iframe) {
                    var c = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-top"));
                    b += a.$iframe.offset().top - a.helpers.scrollTop() + c
                }
                N.css("top", b)
            }
        }

        function K(a, b) {
            var c, d = D(b[0][a]).outerWidth();
            for (c = 1; c < b.length; c++) d = Math.min(d, D(b[c][a]).outerWidth());
            return d
        }

        function P(a, b, c) {
            for (var d = 0; a <= b; a++) d += K(a, c);
            return d
        }

        function qa(b) {
            1 < Q().length && ca && I();
            if (!1 === ca && !1 === la && !1 === O) {
                if (ra && clearTimeout(ra), !a.edit.isDisabled() || a.popups.isVisible("table.edit")) ra = setTimeout(T, 30, b)
            } else if (O) {
                b = b.pageX - a.win.pageXOffset;
                a.opts.iframe && (b += a.$iframe.offset().left);
                var c = N.data("max-left"),
                    d = N.data("max-right");
                b >= c && b <= d ? N.css("left", b - a.opts.tableResizerOffset - a.$wp.offset().left) : b < c && parseFloat(N.css("left"), 10) > c - a.opts.tableResizerOffset ? N.css("left", c - a.opts.tableResizerOffset - a.$wp.offset().left) : b > d && parseFloat(N.css("left"), 10) < d - a.opts.tableResizerOffset && N.css("left", d - a.opts.tableResizerOffset - a.$wp.offset().left)
            } else ca && l()
        }

        function ea(b) {
            a.node.isEmpty(b.get(0)) ? b.prepend(d.MARKERS) : b.prepend(d.START_MARKER).append(d.END_MARKER)
        }

        function ha() {
            a.shared.$ti_helper || (a.shared.$ti_helper = D(document.createElement("div")).attr("class", "fr-insert-helper").html('<a class="fr-floating-btn" role="button" tabIndex="-1" title="'.concat(a.language.translate("Insert"), '"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a>')), a.events.bindClick(a.shared.$ti_helper, "a", function() {
                var b = U.data("selected-cell"),
                    c = U.data("position"),
                    d = U.data("instance") || a;
                "before" == c ? (a.undo.saveStep(), b.addClass("fr-selected-cell"), d.table.insertColumn(c), b.removeClass("fr-selected-cell"), a.undo.saveStep()) : "after" == c ? (a.undo.saveStep(), b.addClass("fr-selected-cell"), d.table.insertColumn(c), b.removeClass("fr-selected-cell"), a.undo.saveStep()) : "above" == c ? (a.undo.saveStep(), b.addClass("fr-selected-cell"), d.table.insertRow(c), b.removeClass("fr-selected-cell"), a.undo.saveStep()) : "below" == c && (a.undo.saveStep(), b.addClass("fr-selected-cell"), d.table.insertRow(c), b.removeClass("fr-selected-cell"), a.undo.saveStep());
                l()
            }), a.events.on("shared.destroy", function() {
                a.shared.$ti_helper.html("").removeData().remove();
                a.shared.$ti_helper = null
            }, !0), a.events.$on(a.shared.$ti_helper, "mousemove", function(a) {
                a.stopPropagation()
            }, !0), a.events.$on(D(a.o_win), "scroll", function() {
                l()
            }, !0), a.events.$on(a.$wp, "scroll", function() {
                l()
            }, !0));
            U = a.shared.$ti_helper;
            a.events.on("destroy", function() {
                U = null
            });
            a.tooltip.bind(a.$box, ".fr-insert-helper > a.fr-floating-btn")
        }

        function J() {
            ia = null;
            clearTimeout(ra)
        }

        function Q() {
            return a.el.querySelectorAll(".fr-selected-cell")
        }

        function ma() {
            var b = Q();
            if (b.length) {
                for (b = b[0]; b && "TABLE" != b.tagName && b.parentNode != a.el;) b = b.parentNode;
                if (b && "TABLE" == b.tagName) return D(b)
            }
            return D([])
        }

        function wa(c) {
            var f = Q();
            if (null != f && 0 < f.length) {
                var g = b();
                c = c.which;
                if (1 == f.length) var h = f = f[0];
                else f = a.el.querySelector(".fr-cell-fixed"), h = a.el.querySelector(".fr-cell-handler");
                h = e(h, g);
                if (d.KEYCODE.ARROW_RIGHT == c) {
                    if (h.col < g[0].length - 1) return E(f, g[h.row][h.col + 1]), !1
                } else if (d.KEYCODE.ARROW_DOWN == c) {
                    if (h.row < g.length - 1) return E(f, g[h.row + 1][h.col]), !1
                } else if (d.KEYCODE.ARROW_LEFT == c) {
                    if (0 < h.col) return E(f, g[h.row][h.col - 1]), !1
                } else if (d.KEYCODE.ARROW_UP == c && 0 < h.row) return E(f, g[h.row - 1][h.col]), !1
            }
        }

        function B(a) {
            la = !1
        }
        var D = a.$,
            N, U, la, ca, ia, ra, O;
        return {
            _init: function() {
                if (!a.$wp) return !1;
                if (!a.helpers.isMobile()) {
                    O = la = ca = !1;
                    a.events.$on(a.$el, "mousedown", ya);
                    a.popups.onShow("image.edit", function() {
                        g();
                        la = ca = !1
                    });
                    a.popups.onShow("link.edit", function() {
                        g();
                        la = ca = !1
                    });
                    a.events.on("commands.mousedown", function(a) {
                        0 < a.parents(".fr-toolbar").length && g()
                    });
                    a.events.$on(a.$el, "mouseover", "th, td", q);
                    a.events.$on(a.$win, "mouseup", va);
                    a.opts.iframe && a.events.$on(D(a.o_win), "mouseup", va);
                    a.events.$on(a.$win, "mousemove", qa);
                    a.events.$on(D(a.o_win), "scroll", ka);
                    a.events.on("contentChanged", function() {
                        0 < Q().length && (c(), a.$el.find("img").on("load.selected-cells", function() {
                            D(this).off("load.selected-cells");
                            0 < Q().length && c()
                        }))
                    });
                    a.events.$on(D(a.o_win), "resize", function() {
                        g()
                    });
                    a.events.on("toolbar.esc", function() {
                        if (0 < Q().length) return a.events.disableBlur(), a.events.focus(), !1
                    }, !0);
                    a.events.$on(D(a.o_win), "keydown", function() {
                        ca && la && (la = ca = !1, a.$el.removeClass("fr-no-selection"), a.edit.on(), a.selection.setAtEnd(a.$el.find(".fr-selected-cell").last().get(0)), a.selection.restore(), g())
                    });
                    a.events.$on(a.$el, "keydown", function(a) {
                        a.shiftKey ? !1 === wa(a) && setTimeout(function() {
                            c()
                        }, 0) : ba(a)
                    });
                    a.events.on("keydown", function(b) {
                        a: {
                            if (b.which == d.KEYCODE.TAB) {
                                if (0 < Q().length) var e = a.$el.find(".fr-selected-cell").last();
                                else {
                                    var h = a.selection.element();
                                    "TD" == h.tagName || "TH" == h.tagName ? e = D(h) : h != a.el && (0 < D(h).parentsUntil(a.$el, "td").length ? e = D(h).parents("td").first() : 0 < D(h).parentsUntil(a.$el, "th").length && (e = D(h).parents("th").first()))
                                }
                                if (e) {
                                    b.preventDefault();
                                    if (0 === a.selection.get().focusOffset && 0 < D(a.selection.element()).parentsUntil(a.$el, "ol, ul").length && (0 < D(a.selection.element()).closest("li").prev().length || D(a.selection.element()).is("li") && 0 < D(a.selection.element()).prev().length)) {
                                        e = !0;
                                        break a
                                    }
                                    na();
                                    b.shiftKey ? 0 < e.prev().length ? ea(e.prev()) : 0 < e.closest("tr").length && 0 < e.closest("tr").prev().length ? ea(e.closest("tr").prev().find("td").last()) : 0 < e.closest("tbody").length && 0 < e.closest("table").find("thead tr").length && ea(e.closest("table").find("thead tr th").last()) : 0 < e.next().length ? ea(e.next()) : 0 < e.closest("tr").length && 0 < e.closest("tr").next().length ? ea(e.closest("tr").next().find("td").first()) : 0 < e.closest("thead").length && 0 < e.closest("table").find("tbody tr").length ? ea(e.closest("table").find("tbody tr td").first()) : (e.addClass("fr-selected-cell"), f("below"), g(), ea(e.closest("tr").next().find("td").first()));
                                    a.selection.restore();
                                    e = !1;
                                    break a
                                }
                            }
                            e = void 0
                        }
                        if (!1 === e) return !1;e = Q();
                        if (0 < e.length) {
                            if (0 < e.length && a.keys.ctrlKey(b) && b.which == d.KEYCODE.A) return g(), a.popups.isVisible("table.edit") && a.popups.hide("table.edit"), !0;
                            if (b.which == d.KEYCODE.ESC && a.popups.isVisible("table.edit")) return g(), a.popups.hide("table.edit"), b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation(), !1;
                            if (1 < e.length && (b.which == d.KEYCODE.BACKSPACE || b.which == d.KEYCODE.DELETE)) {
                                a.undo.saveStep();
                                for (b = 0; b < e.length; b++) D(e[b]).html("<br>"), b == e.length - 1 && D(e[b]).prepend(d.MARKERS);
                                a.selection.restore();
                                a.undo.saveStep();
                                return !1
                            }
                            if (1 < e.length && b.which != d.KEYCODE.F10 && !a.keys.isBrowserAction(b)) return b.preventDefault(), !1
                        } else {
                            a: {
                                if (b.altKey && b.which == d.KEYCODE.SPACE) {
                                    var k;
                                    e = a.selection.element();
                                    "TD" == e.tagName || "TH" == e.tagName ? k = e : 0 < D(e).closest("td").length ? k = D(e).closest("td").get(0) : 0 < D(e).closest("th").length && (k = D(e).closest("th").get(0));
                                    if (k) {
                                        b.preventDefault();
                                        E(k, k);
                                        c();
                                        b = !1;
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!1 === b) return !1
                        }
                    }, !0);
                    var b = [];
                    a.events.on("html.beforeGet", function() {
                        b = Q();
                        for (var a = 0; a < b.length; a++) b[a].className = (b[a].className || "").replace(/fr-selected-cell/g, "")
                    });
                    a.events.on("html.afterGet", function() {
                        for (var a = 0; a < b.length; a++) b[a].className = (b[a].className ? b[a].className.trim() + " " : "") + "fr-selected-cell";
                        b = []
                    });
                    R(!0);
                    t(!0)
                }
                a.events.on("destroy", J)
            },
            insert: function(b, c) {
                var e = "<table " + (a.opts.tableDefaultWidth ? 'style="width: ' + a.opts.tableDefaultWidth + ';" ' : "") + 'class="fr-inserted-table"><tbody>',
                    f = 100 / c,
                    g, h;
                for (g = 0; g < b; g++) {
                    e += "<tr>";
                    for (h = 0; h < c; h++) e += "<td" + (a.opts.tableDefaultWidth ? ' style="width: ' + f.toFixed(4) + '%;"' : "") + ">", 0 === g && 0 === h && (e += d.MARKERS), e += "<br></td>";
                    e += "</tr>"
                }
                a.html.insert(e + "</tbody></table>");
                a.selection.restore();
                b = a.$el.find(".fr-inserted-table");
                b.removeClass("fr-inserted-table");
                a.events.trigger("table.inserted", [b.get(0)])
            },
            remove: w,
            insertRow: f,
            deleteRow: function() {
                var c = ma();
                if (0 < c.length) {
                    var d, e, f = b(),
                        g = A(f);
                    if (null != g)
                        if (0 === g.min_i && g.max_i == f.length - 1) w();
                        else {
                            for (d = g.max_i; d >= g.min_i; d--) {
                                var h = D(c.find("tr").not(c.find("> table tr")).get(d));
                                for (e = 0; e < f[d].length; e++)
                                    if (0 === e || f[d][e] != f[d][e - 1]) {
                                        var k = D(f[d][e]);
                                        if (1 < parseInt(k.attr("rowspan"), 10)) {
                                            var B = parseInt(k.attr("rowspan"), 10) - 1;
                                            1 == B ? k.removeAttr("rowspan") : k.attr("rowspan", B)
                                        }
                                        if (d < f.length - 1 && f[d][e] == f[d + 1][e] && (0 === d || f[d][e] != f[d - 1][e])) {
                                            k = f[d][e];
                                            for (B = e; 0 < B && f[d][B] == f[d][B - 1];) B--;
                                            0 === B ? D(c.find("tr").not(c.find("> table tr")).get(d + 1)).prepend(k) : D(f[d + 1][B - 1])[0].parentNode && D(f[d + 1][B - 1])[0].insertAdjacentElement("afterend", k)
                                        }
                                    }
                                e = h.parent();
                                h.remove();
                                0 === e.find("tr").length && e.remove();
                                f = b(c)
                            }
                            oa(0, f.length - 1, 0, f[0].length - 1, c);
                            0 < g.min_i ? a.selection.setAtEnd(f[g.min_i - 1][0]) : a.selection.setAtEnd(f[0][0]);
                            a.selection.restore();
                            a.popups.hide("table.edit")
                        }
                }
            },
            insertColumn: function(d) {
                var e = ma();
                if (0 < e.length) {
                    var f = b(),
                        g = A(f);
                    var h = "before" == d ? g.min_j : g.max_j;
                    var k = 100 / f[0].length,
                        B = 100 / (f[0].length + 1),
                        l;
                    e.find("th, td").each(function() {
                        l = D(this);
                        l.data("old-width", l.outerWidth() / e.outerWidth() * 100)
                    });
                    e.find("tr").not(e.find("> table tr")).each(function(a) {
                        for (var b = D(this), c = 0, e = 0, g; c - 1 < h;) {
                            g = b.find("> th, > td").get(e);
                            if (!g) {
                                g = null;
                                break
                            }
                            g == f[a][c] ? (c += parseInt(D(g).attr("colspan"), 10) || 1, e++) : (c += parseInt(D(f[a][c]).attr("colspan"), 10) || 1, "after" == d && (g = 0 === e ? -1 : b.find("> th, > td").get(e - 1)))
                        }
                        e = D(g);
                        if ("after" == d && c - 1 > h || "before" == d && 0 < h && f[a][h] == f[a][h - 1]) {
                            if (0 === a || 0 < a && f[a][h] != f[a - 1][h]) b = parseInt(e.attr("colspan"), 10) + 1, e.attr("colspan", b), e.css("width", (e.data("old-width") * B / k + B).toFixed(4) + "%"), e.removeData("old-width")
                        } else a = 0 < b.find("th").length ? '<th style="width: '.concat(B.toFixed(4), '%;"><br></th>') : '<td style="width: '.concat(B.toFixed(4), '%;"><br></td>'), -1 == g ? b.prepend(a) : null == g ? b.append(a) : "before" == d ? e.before(a) : "after" == d && e[0].parentNode && e[0].insertAdjacentHTML("afterend", a)
                    });
                    e.find("th, td").each(function() {
                        l = D(this);
                        l.data("old-width") && (l.css("width", (l.data("old-width") * B / k).toFixed(4) + "%"), l.removeData("old-width"))
                    });
                    a.popups.isVisible("table.edit") && c()
                }
            },
            deleteColumn: function() {
                var c = ma();
                if (0 < c.length) {
                    var d, e, f = b(),
                        g = A(f);
                    if (null != g)
                        if (0 === g.min_j && g.max_j == f[0].length - 1) w();
                        else {
                            var h = 0;
                            for (d = 0; d < f.length; d++)
                                for (e = 0; e < f[0].length; e++) {
                                    var k = D(f[d][e]);
                                    !k.hasClass("fr-selected-cell") && (k.data("old-width", k.outerWidth() / c.outerWidth() * 100), e < g.min_j || e > g.max_j) && (h += k.outerWidth() / c.outerWidth() * 100)
                                }
                            h /= f.length;
                            for (e = g.max_j; e >= g.min_j; e--)
                                for (d = 0; d < f.length; d++)
                                    if (0 === d || f[d][e] != f[d - 1][e])
                                        if (k = D(f[d][e]), 1 < (parseInt(k.attr("colspan"), 10) || 1)) {
                                            var B = parseInt(k.attr("colspan"), 10) - 1;
                                            1 == B ? k.removeAttr("colspan") : k.attr("colspan", B);
                                            k.css("width", (100 * (k.data("old-width") - K(e, f)) / h).toFixed(4) + "%");
                                            k.removeData("old-width")
                                        } else B = D(k.parent().get(0)), k.remove(), 0 === B.find("> th, > td").length && (0 === B.prev().length || 0 === B.next().length || B.prev().find("> th[rowspan], > td[rowspan]").length < B.prev().find("> th, > td").length) && B.remove();
                            oa(0, f.length - 1, 0, f[0].length - 1, c);
                            0 < g.min_j ? a.selection.setAtEnd(f[g.min_i][g.min_j - 1]) : a.selection.setAtEnd(f[g.min_i][0]);
                            a.selection.restore();
                            a.popups.hide("table.edit");
                            c.find("th, td").each(function() {
                                k = D(this);
                                k.data("old-width") && (k.css("width", (100 * k.data("old-width") / h).toFixed(4) + "%"), k.removeData("old-width"))
                            })
                        }
                }
            },
            mergeCells: function() {
                if (1 < Q().length && (0 === a.$el.find("th.fr-selected-cell").length || 0 === a.$el.find("td.fr-selected-cell").length)) {
                    k();
                    var d = b();
                    d = A(d);
                    if (null != d) {
                        var e, f = a.$el.find(".fr-selected-cell"),
                            g = D(f[0]);
                        var h = g.parent().find(".fr-selected-cell");
                        var B = g.closest("table"),
                            l = g.html(),
                            m = 0;
                        for (e = 0; e < h.length; e++) m += D(h[e]).outerWidth();
                        g.css("width", Math.min(100, m / B.outerWidth() * 100).toFixed(4) + "%");
                        d.min_j < d.max_j && g.attr("colspan", d.max_j - d.min_j + 1);
                        d.min_i < d.max_i && g.attr("rowspan", d.max_i - d.min_i + 1);
                        for (e = 1; e < f.length; e++) h = D(f[e]), "<br>" != h.html() && "" !== h.html() && (l += "<br>".concat(h.html())), h.remove();
                        g.html(l);
                        a.selection.setAtEnd(g.get(0));
                        a.selection.restore();
                        a.toolbar.enable();
                        C(d.min_i, d.max_i, B);
                        f = B.find("tr:empty");
                        for (e = f.length - 1; 0 <= e; e--) D(f[e]).remove();
                        x(d.min_j, d.max_j, B);
                        c()
                    }
                }
            },
            splitCellVertically: function() {
                if (1 == Q().length) {
                    var c = a.$el.find(".fr-selected-cell"),
                        d = parseInt(c.attr("colspan"), 10) || 1,
                        f = c.parent().outerWidth(),
                        h = c.outerWidth(),
                        k = c.clone().html("<br>"),
                        B = b(),
                        l = e(c.get(0), B);
                    if (1 < d) {
                        var m = Math.ceil(d / 2);
                        h = P(l.col, l.col + m - 1, B) / f * 100;
                        f = P(l.col + m, l.col + d - 1, B) / f * 100;
                        1 < m ? c.attr("colspan", m) : c.removeAttr("colspan");
                        1 < d - m ? k.attr("colspan", d - m) : k.removeAttr("colspan");
                        c.css("width", h.toFixed(4) + "%");
                        k.css("width", f.toFixed(4) + "%")
                    } else {
                        for (d = 0; d < B.length; d++)
                            if (0 === d || B[d][l.col] != B[d - 1][l.col])
                                if (m = D(B[d][l.col]), !m.is(c)) {
                                    var n = (parseInt(m.attr("colspan"), 10) || 1) + 1;
                                    m.attr("colspan", n)
                                }
                        h = h / f * 100 / 2;
                        c.css("width", "".concat(h.toFixed(4), "%"));
                        k.css("width", "".concat(h.toFixed(4), "%"))
                    }
                    c[0].parentNode && c[0].insertAdjacentElement("afterend", k[0]);
                    g();
                    a.popups.hide("table.edit")
                }
            },
            splitCellHorizontally: function() {
                if (1 == Q().length) {
                    var c = a.$el.find(".fr-selected-cell"),
                        d = c.parent(),
                        f = c.closest("table"),
                        h = parseInt(c.attr("rowspan"), 10),
                        k = b(),
                        B = e(c.get(0), k),
                        l = c.clone().html("<br>");
                    if (1 < h) {
                        d = Math.ceil(h / 2);
                        1 < d ? c.attr("rowspan", d) : c.removeAttr("rowspan");
                        1 < h - d ? l.attr("rowspan", h - d) : l.removeAttr("rowspan");
                        c = B.row + d;
                        for (B = 0 === B.col ? B.col : B.col - 1; 0 <= B && (k[c][B] == k[c][B - 1] || 0 < c && k[c][B] == k[c - 1][B]);) B--; - 1 == B ? D(f.find("tr").not(f.find("> table tr")).get(c)).prepend(l) : D(k[c][B])[0].parentNode && D(k[c][B])[0].insertAdjacentElement("afterend", l[0])
                    } else {
                        f = D(document.createElement("tr")).append(l);
                        for (l = 0; l < k[0].length; l++)
                            if (0 === l || k[B.row][l] != k[B.row][l - 1]) h = D(k[B.row][l]), h.is(c) || h.attr("rowspan", (parseInt(h.attr("rowspan"), 10) || 1) + 1);
                        d[0].parentNode && d[0].insertAdjacentElement("afterend", f[0])
                    }
                    g();
                    a.popups.hide("table.edit")
                }
            },
            addHeader: function() {
                var a = ma();
                if (0 < a.length && 0 === a.find("th").length) {
                    var b = "<thead><tr>",
                        d, e = 0;
                    a.find("tr").first().find("> td").each(function() {
                        var a = D(this);
                        e += parseInt(a.attr("colspan"), 10) || 1
                    });
                    for (d = 0; d < e; d++) b += "<th><br></th>";
                    a.prepend(b + "</tr></thead>");
                    c()
                }
            },
            removeHeader: function() {
                var b = ma(),
                    d = b.find("thead");
                if (0 < d.length)
                    if (0 === b.find("tbody tr").length) w();
                    else if (d.remove(), 0 < Q().length) c();
                else if (a.popups.hide("table.edit"), b = b.find("tbody tr").first().find("td").first().get(0)) a.selection.setAtEnd(b), a.selection.restore()
            },
            setBackground: V,
            showInsertPopup: function() {
                var b = a.$tb.find('.fr-command[data-cmd="insertTable"]'),
                    c = a.popups.get("table.insert");
                c || (c = R());
                c.hasClass("fr-active") || (a.popups.refresh("table.insert"), a.popups.setContainer("table.insert", a.$tb), c = a.button.getPosition(b), a.popups.show("table.insert", c.left, c.top, b.outerHeight()))
            },
            showEditPopup: c,
            showColorsPopup: h,
            back: function() {
                0 < Q().length ? c() : (a.popups.hide("table.insert"), a.toolbar.showInline())
            },
            verticalAlign: function(b) {
                a.$el.find(".fr-selected-cell").css("vertical-align", b)
            },
            horizontalAlign: function(b) {
                a.$el.find(".fr-selected-cell").css("text-align", b)
            },
            applyStyle: function(a, b, c, d) {
                0 < b.length && (c || (c = Object.keys(d), c.splice(c.indexOf(a), 1), b.removeClass(c.join(" "))), b.toggleClass(a))
            },
            selectedTable: ma,
            selectedCells: Q,
            customColor: function() {
                var b = a.popups.get("table.colors").find(".fr-table-colors-hex-layer input");
                b.length && V(b.val())
            },
            selectCells: E
        }
    };
    d.DefineIcon("insertTable", {
        NAME: "table",
        SVG_KEY: "insertTable"
    });
    d.RegisterCommand("insertTable", {
        title: "Insert Table",
        undo: !1,
        focus: !0,
        refreshOnCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("table.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("table.insert")) : this.table.showInsertPopup()
        },
        plugin: "table"
    });
    d.RegisterCommand("tableInsert", {
        callback: function(a, c, d) {
            this.table.insert(c, d);
            this.popups.hide("table.insert")
        }
    });
    d.DefineIcon("tableHeader", {
        NAME: "header",
        FA5NAME: "heading",
        SVG_KEY: "tableHeader"
    });
    d.RegisterCommand("tableHeader", {
        title: "Table Header",
        focus: !1,
        toggle: !0,
        callback: function() {
            this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active") ? this.table.removeHeader() : this.table.addHeader()
        },
        refresh: function(a) {
            var c = this.table.selectedTable();
            0 < c.length && (0 === c.find("th").length ? a.removeClass("fr-active").attr("aria-pressed", !1) : a.addClass("fr-active").attr("aria-pressed", !0))
        }
    });
    d.DefineIcon("tableRows", {
        NAME: "bars",
        SVG_KEY: "row"
    });
    d.RegisterCommand("tableRows", {
        type: "dropdown",
        focus: !1,
        title: "Row",
        options: {
            above: "Insert row above",
            below: "Insert row below",
            "delete": "Delete row"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.tableRows.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="' +
                h + '" title="' + this.language.translate(c[h]) + '">' + this.language.translate(c[h]) + "</a></li>");
            return a + "</ul>"
        },
        callback: function(a, c) {
            "above" == c || "below" == c ? this.table.insertRow(c) : this.table.deleteRow()
        }
    });
    d.DefineIcon("tableColumns", {
        NAME: "bars fa-rotate-90",
        SVG_KEY: "columns"
    });
    d.RegisterCommand("tableColumns", {
        type: "dropdown",
        focus: !1,
        title: "Column",
        options: {
            before: "Insert column before",
            after: "Insert column after",
            "delete": "Delete column"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.tableColumns.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'.concat(h, '" title="').concat(this.language.translate(c[h]), '">').concat(this.language.translate(c[h]), "</a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            "before" == c || "after" == c ? this.table.insertColumn(c) : this.table.deleteColumn()
        }
    });
    d.DefineIcon("tableCells", {
        NAME: "square-o",
        FA5NAME: "square",
        SVG_KEY: "cellOptions"
    });
    d.RegisterCommand("tableCells", {
        type: "dropdown",
        focus: !1,
        title: "Cell",
        options: {
            merge: "Merge cells",
            "vertical-split": "Vertical split",
            "horizontal-split": "Horizontal split"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.tableCells.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'.concat(h, '" title="').concat(this.language.translate(c[h]), '">').concat(this.language.translate(c[h]), "</a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            "merge" == c ? this.table.mergeCells() : "vertical-split" == c ? this.table.splitCellVertically() : this.table.splitCellHorizontally()
        },
        refreshOnShow: function(a, c) {
            1 < this.$el.find(".fr-selected-cell").length ? (c.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled", !0), c.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled", !0), c.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled", !1)) : (c.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled", !0), c.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled", !1), c.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled", !1))
        }
    });
    d.DefineIcon("tableRemove", {
        NAME: "trash",
        SVG_KEY: "removeTable"
    });
    d.RegisterCommand("tableRemove", {
        title: "Remove Table",
        focus: !1,
        callback: function() {
            this.table.remove()
        }
    });
    d.DefineIcon("tableStyle", {
        NAME: "paint-brush",
        SVG_KEY: "tableStyle"
    });
    d.RegisterCommand("tableStyle", {
        title: "Table Style",
        type: "dropdown",
        focus: !1,
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = this.opts.tableStyles,
                d;
            for (d in c) c.hasOwnProperty(d) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'.concat(d, '" title="').concat(this.language.translate(c[d]), '">').concat(this.language.translate(c[d]), "</a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.table.applyStyle(c, this.$el.find(".fr-selected-cell").closest("table"), this.opts.tableMultipleStyles, this.opts.tableStyles)
        },
        refreshOnShow: function(a, c) {
            var d = this.$,
                M = this.$el.find(".fr-selected-cell").closest("table");
            M && c.find(".fr-command").each(function() {
                var a = d(this).data("param1");
                a = M.hasClass(a);
                d(this).toggleClass("fr-active", a).attr("aria-selected", a)
            })
        }
    });
    d.DefineIcon("tableCellBackground", {
        NAME: "tint",
        SVG_KEY: "cellBackground"
    });
    d.RegisterCommand("tableCellBackground", {
        title: "Cell Background",
        focus: !1,
        popup: !0,
        callback: function() {
            this.table.showColorsPopup()
        }
    });
    d.RegisterCommand("tableCellBackgroundColor", {
        undo: !0,
        focus: !1,
        callback: function(a, c) {
            this.table.setBackground(c)
        }
    });
    d.DefineIcon("tableBack", {
        NAME: "arrow-left",
        SVG_KEY: "back"
    });
    d.RegisterCommand("tableBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        callback: function() {
            this.table.back()
        },
        refresh: function(a) {
            0 !== this.table.selectedCells().length || this.opts.toolbarInline ? (a.removeClass("fr-hidden"), a.next(".fr-separator").removeClass("fr-hidden")) : (a.addClass("fr-hidden"), a.next(".fr-separator").addClass("fr-hidden"))
        }
    });
    d.DefineIcon("tableCellVerticalAlign", {
        NAME: "arrows-v",
        FA5NAME: "arrows-alt-v",
        SVG_KEY: "verticalAlignMiddle"
    });
    d.RegisterCommand("tableCellVerticalAlign", {
        type: "dropdown",
        focus: !1,
        title: "Vertical Align",
        options: {
            Top: "Align Top",
            Middle: "Align Middle",
            Bottom: "Align Bottom"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.tableCellVerticalAlign.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'.concat(h.toLowerCase(), '" title="').concat(this.language.translate(c[h]), '">').concat(this.language.translate(h), "</a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.table.verticalAlign(c)
        },
        refreshOnShow: function(a, c) {
            c.find('.fr-command[data-param1="' + this.$el.find(".fr-selected-cell").css("vertical-align") + '"]').addClass("fr-active").attr("aria-selected", !0)
        }
    });
    d.DefineIcon("tableCellHorizontalAlign", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("align-left", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("align-right", {
        NAME: "align-right",
        SVG_KEY: "alignRight"
    });
    d.DefineIcon("align-center", {
        NAME: "align-center",
        SVG_KEY: "alignCenter"
    });
    d.DefineIcon("align-justify", {
        NAME: "align-justify",
        SVG_KEY: "alignJustify"
    });
    d.RegisterCommand("tableCellHorizontalAlign", {
        type: "dropdown",
        focus: !1,
        title: "Horizontal Align",
        options: {
            left: "Align Left",
            center: "Align Center",
            right: "Align Right",
            justify: "Align Justify"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.tableCellHorizontalAlign.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'.concat(h, '" title="').concat(this.language.translate(c[h]), '">').concat(this.icon.create("align-".concat(h)), '<span class="fr-sr-only">').concat(this.language.translate(c[h]), "</span></a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.table.horizontalAlign(c)
        },
        refresh: function(a) {
            var c = this.table.selectedCells(),
                d = this.$;
            c.length && a.find("> *").first().replaceWith(this.icon.create("align-".concat(this.helpers.getAlignment(d(c[0])))))
        },
        refreshOnShow: function(a, c) {
            c.find('.fr-command[data-param1="' + this.helpers.getAlignment(this.$el.find(".fr-selected-cell").first()) + '"]').addClass("fr-active").attr("aria-selected", !0)
        }
    });
    d.DefineIcon("tableCellStyle", {
        NAME: "magic",
        SVG_KEY: "cellStyle"
    });
    d.RegisterCommand("tableCellStyle", {
        title: "Cell Style",
        type: "dropdown",
        focus: !1,
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = this.opts.tableCellStyles,
                d;
            for (d in c) c.hasOwnProperty(d) && (a += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'.concat(d, '" title="').concat(this.language.translate(c[d]), '">').concat(this.language.translate(c[d]), "</a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.table.applyStyle(c, this.$el.find(".fr-selected-cell"), this.opts.tableCellMultipleStyles, this.opts.tableCellStyles)
        },
        refreshOnShow: function(a, c) {
            var d = this.$,
                M = this.$el.find(".fr-selected-cell").first();
            M && c.find(".fr-command").each(function() {
                var a = d(this).data("param1");
                a = M.hasClass(a);
                d(this).toggleClass("fr-active", a).attr("aria-selected", a)
            })
        }
    });
    d.RegisterCommand("tableCellBackgroundCustomColor", {
        title: "OK",
        undo: !0,
        callback: function() {
            this.table.customColor()
        }
    });
    d.DefineIcon("tableColorRemove", {
        NAME: "eraser",
        SVG_KEY: "remove"
    })
});
(function(d, a) {
    "object" === typeof exports && "undefined" !== typeof module ? a(require("froala-editor")) : "function" === typeof define && define.amd ? define(["froala-editor"], a) : a(d.FroalaEditor)
})(this, function(d) {
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    Object.assign(d.POPUP_TEMPLATES, {
        "video.insert": "[_BUTTONS_][_BY_URL_LAYER_][_EMBED_LAYER_][_UPLOAD_LAYER_][_PROGRESS_BAR_]",
        "video.edit": "[_BUTTONS_]",
        "video.size": "[_BUTTONS_][_SIZE_LAYER_]"
    });
    Object.assign(d.DEFAULTS, {
        videoAllowedTypes: "mp4 webm ogg mp3 mpeg url".split(" "),
        videoAllowedProviders: [".*"],
        videoDefaultAlign: "center",
        videoDefaultDisplay: "block",
        videoDefaultWidth: 600,
        videoEditButtons: "videoReplace videoRemove videoDisplay videoAlign videoSize autoplay".split(" "),
        videoInsertButtons: ["videoBack", "|", "videoByURL", "videoEmbed", "videoUpload"],
        videoMaxSize: 52428800,
        videoMove: !0,
        videoResize: !0,
        videoResponsive: !1,
        videoSizeButtons: ["videoBack", "|"],
        videoSplitHTML: !1,
        videoTextNear: !0,
        videoUpload: !0,
        videoUploadMethod: "POST",
        videoUploadParam: "file",
        videoUploadParams: {},
        videoUploadToS3: !1,
        videoUploadToAzure: !1,
        videoUploadURL: null
    });
    d.VIDEO_PROVIDERS = [{
        test_regex: /^.*((youtu.be)|(youtube.com))\/((v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))?\??v?=?([^#&\?]*).*/,
        url_regex: /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([0-9a-zA-Z_\-]+)(.+)?/g,
        url_text: "https://www.youtube.com/embed/$1?$2",
        html: '<iframe width="640" height="360" src="{url}&wmode=opaque&rel=0" frameborder="0" allowfullscreen></iframe>',
        provider: "youtube"
    }, {
        test_regex: /^.*(?:vimeo.com)\/(?:channels(\/\w+\/)?|groups\/*\/videos\/\u200b\d+\/|video\/|)(\d+)(?:$|\/|\?)/,
        url_regex: /(?:https?:\/\/)?(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?(\/[a-zA-Z0-9_\-]+)?/i,
        url_text: "https://player.vimeo.com/video/$1",
        html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',
        provider: "vimeo"
    }, {
        test_regex: /^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/,
        url_regex: /(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g,
        url_text: "https://www.dailymotion.com/embed/video/$1",
        html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',
        provider: "dailymotion"
    }, {
        test_regex: /^.+(screen.yahoo.com)\/[^_&]+/,
        url_regex: "",
        url_text: "",
        html: '<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',
        provider: "yahoo"
    }, {
        test_regex: /^.+(rutube.ru)\/[^_&]+/,
        url_regex: /(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru)\/(?:video)?\/?(.+)/g,
        url_text: "https://rutube.ru/play/embed/$1",
        html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',
        provider: "rutube"
    }, {
        test_regex: /^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/,
        url_regex: /^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/g,
        url_text: "https://play.vidyard.com/$1",
        html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',
        provider: "vidyard"
    }];
    d.VIDEO_EMBED_REGEX = /^\W*((<iframe(.|\n)*>(\s|\n)*<\/iframe>)|(<embed(.|\n)*>))\W*$/i;
    d.PLUGINS.video = function(a) {
        function c() {
            var b = a.popups.get("video.insert");
            b.find(".fr-video-by-url-layer input").val("").trigger("change");
            var c = b.find(".fr-video-embed-layer textarea");
            c.val("").trigger("change");
            c = b.find(".fr-video-upload-layer input");
            c.val("").trigger("change")
        }

        function h() {
            var b = a.popups.get("video.edit");
            b || (b = pa());
            if (b) {
                a.popups.setContainer("video.edit", a.$sc);
                a.popups.refresh("video.edit");
                b = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video"));
                var c = b.offset().left + b.outerWidth() / 2,
                    d = b.offset().top + b.outerHeight(),
                    e = b.get(0).src ? b.get(0).src : null;
                e = e.split(".");
                e = e[e.length - 1];
                e = e.includes("pdf") || e.includes("txt") ? !0 : !1;
                b.hasClass("fr-file") || e || J.find("audio").get(0) ? (document.getElementById("autoplay-".concat(a.id)) && (document.getElementById("autoplay-".concat(a.id)).style.display = "none"), document.getElementById("videoReplace-".concat(a.id)) && (document.getElementById("videoReplace-".concat(a.id)).style.display = "none")) : (document.getElementById("autoplay-".concat(a.id)).style.display = "", document.getElementById("videoReplace-".concat(a.id)).style.display = "");
                a.popups.show("video.edit", c, d, b.outerHeight(), !0)
            }
        }

        function M(b) {
            if (b) return a.popups.onRefresh("video.insert", c), a.popups.onHide("video.insert", l), !0;
            b = "";
            a.opts.videoUpload || -1 === a.opts.videoInsertButtons.indexOf("videoUpload") || a.opts.videoInsertButtons.splice(a.opts.videoInsertButtons.indexOf("videoUpload"), 1);
            var d = a.button.buildList(a.opts.videoInsertButtons);
            "" !== d && (b = '<div class="fr-buttons">' + d + "</div>");
            d = "";
            var e = a.opts.videoInsertButtons.indexOf("videoUpload"),
                f = a.opts.videoInsertButtons.indexOf("videoByURL"),
                g = a.opts.videoInsertButtons.indexOf("videoEmbed");
            if (0 <= f) {
                var h = " fr-active";
                if (f > e && 0 <= e || f > g && 0 <= g) h = "";
                d = '<div class="fr-video-by-url-layer fr-layer'.concat(h, '" id="fr-video-by-url-layer-').concat(a.id, '"><div class="fr-input-line"><input id="fr-video-by-url-layer-text-').concat(a.id, '" type="text" placeholder="').concat(a.language.translate("Paste in a video URL"), '" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><span style=\'float:left\'><div class="fr-checkbox-line fr-autoplay-margin"><span class="fr-checkbox"> <input id=\'videoPluginAutoplay\' data-checked="_blank" type="checkbox"> <span>').concat('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg>', '</span></span> <label id="fr-label-target-').concat(a.id, '">Autoplay</label></div> </span><button type="button" class="fr-command fr-submit" data-cmd="videoInsertByURL" tabIndex="2" role="button">').concat(a.language.translate("Insert"), "</button></div></div>")
            }
            var k = "";
            if (0 <= g) {
                h = " fr-active";
                if (g > e && 0 <= e || g > f && 0 <= f) h = "";
                k = '<div class="fr-video-embed-layer fr-layer'.concat(h, '" id="fr-video-embed-layer-').concat(a.id, '"><div class="fr-input-line"><textarea id="fr-video-embed-layer-text').concat(a.id, '" type="text" placeholder="').concat(a.language.translate("Embedded Code"), '" tabIndex="1" aria-required="true" rows="5"></textarea></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertEmbed" tabIndex="2" role="button">').concat(a.language.translate("Insert"), "</button></div></div>")
            }
            h = "";
            if (0 <= e) {
                h = " fr-active";
                if (e > g && 0 <= g || e > f && 0 <= f) h = "";
                h = '<div class="fr-video-upload-layer fr-layer'.concat(h, '" id="fr-video-upload-layer-').concat(a.id, '"><strong>').concat(a.language.translate("Drop video"), "</strong><br>(").concat(a.language.translate("or click"), ')<div class="fr-form"><input type="file" accept="video/').concat(a.opts.videoAllowedTypes.join(", video/").toLowerCase(), '" tabIndex="-1" aria-labelledby="fr-video-upload-layer-').concat(a.id, '" role="button"></div></div>')
            }
            b = a.popups.create("video.insert", {
                buttons: b,
                by_url_layer: d,
                embed_layer: k,
                upload_layer: h,
                progress_bar: '<div class="fr-video-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="videoDismissError" tabIndex="2" role="button">OK</button></div></div>'
            });
            ya(b);
            return b
        }

        function R(b) {
            a.events.focus(!0);
            a.selection.restore();
            var c = !1;
            J && (z(), c = !0);
            a.html.insert('<span contenteditable="false" draggable="true" class="fr-jiv fr-video fr-deletable">'.concat(b, "</span>"), !1, a.opts.videoSplitHTML);
            a.popups.hide("video.insert");
            b = a.$el.find(".fr-jiv");
            b.removeClass("fr-jiv");
            b.toggleClass("fr-rv", a.opts.videoResponsive);
            u(b, a.opts.videoDefaultDisplay, a.opts.videoDefaultAlign);
            b.toggleClass("fr-draggable", a.opts.videoMove);
            a.events.trigger(c ? "video.replaced" : "video.inserted", [b])
        }

        function X() {
            var b = P(this);
            a.popups.hide("video.insert");
            b.removeClass("fr-uploading");
            b.parent().next().is("br") && b.parent().next().remove();
            S(b.parent());
            a.events.trigger("video.loaded", [b.parent()])
        }

        function v(b, c, d, e, f) {
            a.edit.off();
            L("Loading video");
            c && (b = a.helpers.sanitizeURL(b));
            m("Loading video");
            if (e) {
                a.undo.canDo() || e.find("video").hasClass("fr-uploading") || a.undo.saveStep();
                var g = e.find("video").data("fr-old-src");
                c = e.data("fr-replaced");
                e.data("fr-replaced", !1);
                if (a.$wp) {
                    var h = e.clone(!0);
                    h.find("video").removeData("fr-old-src").removeClass("fr-uploading");
                    h.find("video").off("canplay");
                    g && e.find("video").attr("src", g);
                    e.replaceWith(h)
                } else h = e;
                e = h.find("video").get(0).attributes;
                for (g = 0; g < e.length; g++) {
                    var l = e[g];
                    0 === l.nodeName.indexOf("data-") && h.find("video").removeAttr(l.nodeName)
                }
                if ("undefined" != typeof d)
                    for (B in d) d.hasOwnProperty(B) && "link" != B && h.find("video").attr("data-".concat(B), d[B]);
                h.find("video").on("canplay", X);
                h.find("video").attr("src", b);
                a.edit.on();
                k();
                a.undo.saveStep();
                a.$el.blur();
                a.events.trigger(c ? "video.replaced" : "video.inserted", [h, f])
            } else {
                var B = "";
                if (d && "undefined" != typeof d)
                    for (h in d) d.hasOwnProperty(h) && "link" != h && (B += " data-".concat(h, '="').concat(d[h], '"'));
                (d = a.opts.videoDefaultWidth) && "auto" != d && (d = "".concat(d, "px"));
                d = P(document.createElement("span")).attr("contenteditable", "false").attr("draggable", "true").attr("class", "fr-video fr-dv" + a.opts.videoDefaultDisplay[0] + ("center" != a.opts.videoDefaultAlign ? " fr-fv" +
                    a.opts.videoDefaultAlign[0] : "")).html('<video src="' + b + '" ' + B + (d ? ' style="width: ' + d + ';" ' : "") + " controls>" + a.language.translate("Your browser does not support HTML5 video.") + "</video>");
                d.toggleClass("fr-draggable", a.opts.videoMove);
                a.edit.on();
                a.events.focus(!0);
                a.selection.restore();
                a.undo.saveStep();
                a.opts.videoSplitHTML ? a.markers.split() : a.markers.insert();
                a.html.wrap();
                b = a.$el.find(".fr-marker");
                a.node.isLastSibling(b) && b.parent().hasClass("fr-deletable") && b.insertAfter(b.parent());
                b.replaceWith(d);
                a.selection.clear();
                if (d.find("video").get(0).readyState > d.find("video").get(0).HAVE_FUTURE_DATA || a.helpers.isIOS()) X.call(d.find("video").get(0));
                else d.find("video").on("canplaythrough load", X);
                h = d;
                k();
                a.undo.saveStep();
                a.events.trigger("video.inserted", [h, f])
            }
        }

        function m(b) {
            var c = a.popups.get("video.insert");
            c || (c = M());
            c.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive");
            c.find(".fr-video-progress-bar-layer").addClass("fr-active");
            c.find(".fr-buttons").hide();
            if (J) {
                c = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video"));
                a.popups.setContainer("video.insert", a.$sc);
                var d = c.offset().left,
                    e = c.offset().top + c.height();
                a.popups.show("video.insert", d, e, c.outerHeight())
            }
            "undefined" == typeof b && L(a.language.translate("Uploading"), 0)
        }

        function t(b) {
            var c = a.popups.get("video.insert");
            c && (c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"), c.find(".fr-video-progress-bar-layer").removeClass("fr-active"), c.find(".fr-buttons").show(), b || a.$el.find("video.fr-error").length) && (a.events.focus(), a.$el.find("video.fr-error").length && (a.$el.find("video.fr-error").parent().remove(), a.undo.saveStep(), a.undo.run(), a.undo.dropRedo()), !a.$wp && J && (b = J, A(!0), a.selection.setAfter(b.find("video").get(0)), a.selection.restore()), a.popups.hide("video.insert"))
        }

        function L(b, c) {
            var d = a.popups.get("video.insert");
            d && (d = d.find(".fr-video-progress-bar-layer"), d.find("h3").text(b + (c ? " ".concat(c, "%") : "")), d.removeClass("fr-error"), c ? (d.find("div").removeClass("fr-indeterminate"), d.find("div > span").css("width", "".concat(c, "%"))) : d.find("div").addClass("fr-indeterminate"))
        }

        function y(b) {
            m();
            var c = a.popups.get("video.insert").find(".fr-video-progress-bar-layer");
            c.addClass("fr-error");
            c = c.find("h3");
            c.text(b);
            a.events.disableBlur();
            c.focus()
        }

        function S(a) {
            I.call(a.get(0))
        }

        function w(b) {
            try {
                if (!1 === a.events.trigger("video.uploaded", [b], !0)) return a.edit.on(), !1;
                var c = JSON.parse(b);
                if (c.link) return c;
                q(2, b);
                return !1
            } catch (N) {
                return q(4, b), !1
            }
        }

        function f() {
            q(4, this.response || this.responseText || this.responseXML)
        }

        function x(b) {
            b.lengthComputable && (b = b.loaded / b.total * 100 | 0, L(a.language.translate("Uploading"), b))
        }

        function C() {
            a.edit.on();
            t(!0)
        }

        function G(b) {
            if (!a.core.sameInstance(ha)) return !0;
            b.preventDefault();
            b.stopPropagation();
            var c = b.pageX || (b.originalEvent.touches ? b.originalEvent.touches[0].pageX : null),
                d = b.pageY || (b.originalEvent.touches ? b.originalEvent.touches[0].pageY : null);
            if (!c || !d) return !1;
            if ("mousedown" == b.type) {
                var e = a.$oel.get(0).ownerDocument;
                e = e.defaultView || e.parentWindow;
                var f = !1;
                try {
                    f = e.location != e.parent.location && !(e.$ && e.$.FE)
                } catch (ca) {}
                f && e.frameElement && (c += a.helpers.getPX(P(e.frameElement).offset().left) + e.frameElement.clientLeft, d = b.clientY + a.helpers.getPX(P(e.frameElement).offset().top) + e.frameElement.clientTop)
            }
            a.undo.canDo() || a.undo.saveStep();
            ea = P(this);
            ea.data("start-x", c);
            ea.data("start-y", d);
            qa.show();
            a.popups.hideAll();
            Z()
        }

        function oa(b) {
            if (!a.core.sameInstance(ha)) return !0;
            if (ea) {
                b.preventDefault();
                var c = b.pageX || (b.originalEvent.touches ? b.originalEvent.touches[0].pageX : null);
                b = b.pageY || (b.originalEvent.touches ? b.originalEvent.touches[0].pageY : null);
                if (!c || !b) return !1;
                var d = ea.data("start-x"),
                    e = ea.data("start-y");
                ea.data("start-x", c);
                ea.data("start-y", b);
                c -= d;
                b -= e;
                e = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video"));
                d = e.width();
                var f = e.height();
                if (ea.hasClass("fr-hnw") || ea.hasClass("fr-hsw")) c = 0 - c;
                if (ea.hasClass("fr-hnw") || ea.hasClass("fr-hne")) b = 0 - b;
                e.css("width", d + c);
                e.css("height", f + b);
                e.removeAttr("width");
                e.removeAttr("height");
                g()
            }
        }

        function V(b) {
            if (!a.core.sameInstance(ha)) return !0;
            ea && J && (b && b.stopPropagation(), ea = null, qa.hide(), g(), h(), a.undo.saveStep())
        }

        function b(a) {
            return '<div class="fr-handler fr-h'.concat(a, '"></div>')
        }

        function e(a, b, c, d) {
            a.pageX = b;
            a.pageY = b;
            G.call(this, a);
            a.pageX += c * Math.floor(Math.pow(1.1, d));
            a.pageY += c * Math.floor(Math.pow(1.1, d));
            oa.call(this, a);
            V.call(this, a);
            return ++d
        }

        function n() {
            if (a.shared.$video_resizer) ha = a.shared.$video_resizer, qa = a.shared.$vid_overlay, a.events.on("destroy", function() {
                P("body").first().append(ha.removeClass("fr-active"))
            }, !0);
            else if (a.shared.$video_resizer = P(document.createElement("div")).attr("class", "fr-video-resizer"), ha = a.shared.$video_resizer, a.events.$on(ha, "mousedown", function(a) {
                    a.stopPropagation()
                }, !0), a.opts.videoResize) {
                ha.append(b("nw") + b("ne") + b("sw") + b("se"));
                a.shared.$vid_overlay = P(document.createElement("div")).attr("class", "fr-video-overlay");
                qa = a.shared.$vid_overlay;
                var c = ha.get(0).ownerDocument;
                P(c).find("body").first().append(qa)
            }
            a.events.on("shared.destroy", function() {
                ha.html("").removeData().remove();
                ha = null;
                a.opts.videoResize && (qa.remove(), qa = null)
            }, !0);
            a.helpers.isMobile() || a.events.$on(P(a.o_win), "resize.video", function() {
                A(!0)
            });
            if (a.opts.videoResize) {
                c = ha.get(0).ownerDocument;
                a.events.$on(ha, a._mousedown, ".fr-handler", G);
                a.events.$on(P(c), a._mousemove, oa);
                a.events.$on(P(c.defaultView || c.parentWindow), a._mouseup, V);
                a.events.$on(qa, "mouseleave", V);
                var f = 1,
                    g = null,
                    h = 0;
                a.events.on("keydown", function(b) {
                    if (J) {
                        var c = -1 != navigator.userAgent.indexOf("Mac OS X") ? b.metaKey : b.ctrlKey,
                            k = b.which;
                        if (k !== g || 200 < b.timeStamp - h) f = 1;
                        (k == d.KEYCODE.EQUALS || a.browser.mozilla && k == d.KEYCODE.FF_EQUALS) && c && !b.altKey ? f = e.call(this, b, 1, 1, f) : (k == d.KEYCODE.HYPHEN || a.browser.mozilla && k == d.KEYCODE.FF_HYPHEN) && c && !b.altKey && (f = e.call(this, b, 2, -1, f));
                        g = k;
                        h = b.timeStamp
                    }
                });
                a.events.on("keyup", function() {
                    f = 1
                })
            }
        }

        function k() {
            var b = Array.prototype.slice.call(a.el.querySelectorAll("video, .fr-video > *")),
                c = [],
                d;
            for (d = 0; d < b.length; d++) c.push(b[d].getAttribute("src")), P(b[d]).toggleClass("fr-draggable", a.opts.videoMove), "" === b[d].getAttribute("class") && b[d].removeAttribute("class"), "" === b[d].getAttribute("style") && b[d].removeAttribute("style");
            if (ma)
                for (d = 0; d < ma.length; d++) 0 > c.indexOf(ma[d].getAttribute("src")) && a.events.trigger("video.removed", [P(ma[d])]);
            ma = b
        }

        function g() {
            ha || n();
            (a.$wp || a.$sc).append(ha);
            ha.data("instance", a);
            var b = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video")),
                c = 0,
                d = 0;
            a.opts.iframe && (d = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-top")), c = a.helpers.getPX(a.$wp.find(".fr-iframe").css("padding-left")));
            ha.css("top", (a.opts.iframe ? b.offset().top + d - 1 : b.offset().top - a.$wp.offset().top - 1) + a.$wp.scrollTop()).css("left", (a.opts.iframe ? b.offset().left + c - 1 : b.offset().left - a.$wp.offset().left - 1) + a.$wp.scrollLeft()).css("width", b.get(0).getBoundingClientRect().width).css("height", b.get(0).getBoundingClientRect().height).addClass("fr-active")
        }

        function I(b) {
            if (b && "touchend" == b.type && wa) return !0;
            if (b && a.edit.isDisabled()) return b.stopPropagation(), b.preventDefault(), !1;
            if (a.edit.isDisabled()) return !1;
            for (b = 0; b < d.INSTANCES.length; b++) d.INSTANCES[b] != a && d.INSTANCES[b].events.trigger("video.hideResizer");
            a.toolbar.disable();
            a.helpers.isMobile() && (a.events.disableBlur(), a.$el.blur(), a.events.enableBlur());
            a.$el.find(".fr-video.fr-active").removeClass("fr-active");
            J = P(this);
            J.addClass("fr-active");
            a.opts.iframe && a.size.syncIframe();
            K();
            g();
            h();
            a.selection.clear();
            a.button.bulkRefresh();
            a.events.trigger("image.hideResizer")
        }

        function A(b) {
            J && (a.shared.vid_exit_flag || !0 === b) && (ha.removeClass("fr-active"), a.toolbar.enable(), J.removeClass("fr-active"), J = null, Z())
        }

        function ua() {
            a.shared.vid_exit_flag = !0
        }

        function Z() {
            a.shared.vid_exit_flag = !1
        }

        function E(b) {
            var c = b.originalEvent.dataTransfer;
            if (c && c.files && c.files.length) {
                var e = c.files[0];
                if (e && e.type && -1 !== e.type.indexOf("video")) {
                    if (!a.opts.videoUpload) return b.preventDefault(), b.stopPropagation(), !1;
                    a.markers.remove();
                    a.markers.insertAtPoint(b.originalEvent);
                    a.$el.find(".fr-marker").replaceWith(d.MARKERS);
                    a.popups.hideAll();
                    a.popups.get("video.insert") || M();
                    a.popups.setContainer("video.insert", a.$sc);
                    a.popups.show("video.insert", b.originalEvent.pageX, b.originalEvent.pageY);
                    m();
                    0 <= a.opts.videoAllowedTypes.indexOf(e.type.replace(/video\//g, "")) ? na(c.files) : q(6);
                    b.preventDefault();
                    b.stopPropagation();
                    return !1
                }
            }
        }

        function F(a) {
            J && J.find("iframe") && J.find("iframe").length && z();
            var b = new FileReader;
            b.onload = function() {
                var c = atob(b.result.split(",")[1]);
                for (var d = [], e = 0; e < c.length; e++) d.push(c.charCodeAt(e));
                c = window.URL.createObjectURL(new Blob([new Uint8Array(d)], {
                    type: a.type
                }));
                v(c, !1, null, J)
            };
            m();
            b.readAsDataURL(a)
        }

        function na(b) {
            if ("undefined" != typeof b && 0 < b.length) {
                if (!1 === a.events.trigger("video.beforeUpload", [b])) return !1;
                b = b[0];
                if (!(null !== a.opts.videoUploadURL && "https://i.froala.com/upload" != a.opts.videoUploadURL || a.opts.videoUploadToS3 || a.opts.videoUploadToAzure)) return F(b), !1;
                if (b.size > a.opts.videoMaxSize) return q(5), !1;
                if (0 > a.opts.videoAllowedTypes.indexOf(b.type.replace(/video\//g, ""))) return q(6), !1;
                var c;
                a.drag_support.formdata && (c = a.drag_support.formdata ? new FormData : null);
                if (c) {
                    var d;
                    if (!1 !== a.opts.videoUploadToS3)
                        for (d in c.append("key", a.opts.videoUploadToS3.keyStart + (new Date).getTime() + "-" + (b.name || "untitled")), c.append("success_action_status", "201"), c.append("X-Requested-With", "xhr"), c.append("Content-Type", b.type), a.opts.videoUploadToS3.params) a.opts.videoUploadToS3.params.hasOwnProperty(d) && c.append(d, a.opts.videoUploadToS3.params[d]);
                    for (d in a.opts.videoUploadParams) a.opts.videoUploadParams.hasOwnProperty(d) && c.append(d, a.opts.videoUploadParams[d]);
                    c.append(a.opts.videoUploadParam, b);
                    var e = a.opts.videoUploadURL;
                    a.opts.videoUploadToS3 && (e = a.opts.videoUploadToS3.uploadURL ? a.opts.videoUploadToS3.uploadURL : "https://".concat(a.opts.videoUploadToS3.region, ".amazonaws.com/").concat(a.opts.videoUploadToS3.bucket));
                    var g = a.opts.videoUploadMethod;
                    if (a.opts.videoUploadToAzure) {
                        var h = e = a.opts.videoUploadToAzure.uploadURL ? "".concat(a.opts.videoUploadToAzure.uploadURL, "/").concat(b.name) : encodeURI("https://".concat(a.opts.videoUploadToAzure.account, ".blob.core.windows.net/").concat(a.opts.videoUploadToAzure.container, "/").concat(b.name));
                        a.opts.videoUploadToAzure.SASToken && (e += a.opts.videoUploadToAzure.SASToken);
                        g = "PUT"
                    }
                    var k = a.core.getXHR(e, g);
                    if (a.opts.videoUploadToAzure) {
                        e = (new Date).toUTCString();
                        if (!a.opts.videoUploadToAzure.SASToken && a.opts.videoUploadToAzure.accessKey) {
                            var l = a.opts.videoUploadToAzure.account,
                                n = a.opts.videoUploadToAzure.container;
                            a.opts.videoUploadToAzure.uploadURL && (l = a.opts.videoUploadToAzure.uploadURL.split("/"), n = l.pop(), l = l.pop().split(".")[0]);
                            var B = "x-ms-blob-type:BlockBlob\nx-ms-date:".concat(e, "\nx-ms-version:2019-07-07");
                            n = encodeURI("/" + l + "/" + n + "/" + b.name);
                            var r = g = a.cryptoJSPlugin.cryptoJS.HmacSHA256(g + "\n\n\n" + b.size + "\n\n" + b.type + "\n\n\n\n\n\n\n" + B + "\n" + n, a.cryptoJSPlugin.cryptoJS.enc.Base64.parse(a.opts.videoUploadToAzure.accessKey)).toString(a.cryptoJSPlugin.cryptoJS.enc.Base64);
                            k.setRequestHeader("Authorization", "SharedKey " + l + ":" + g)
                        }
                        k.setRequestHeader("x-ms-version", "2019-07-07");
                        k.setRequestHeader("x-ms-date", e);
                        k.setRequestHeader("Content-Type", b.type);
                        k.setRequestHeader("x-ms-blob-type", "BlockBlob");
                        for (d in a.opts.videoUploadParams) a.opts.videoUploadParams.hasOwnProperty(d) && k.setRequestHeader(d, a.opts.videoUploadParams[d]);
                        for (d in a.opts.videoUploadToAzure.params) a.opts.videoUploadToAzure.params.hasOwnProperty(d) && k.setRequestHeader(d, a.opts.videoUploadToAzure.params[d])
                    }
                    k.onload = function() {
                        a: {
                            var b = J,
                                c = h,
                                d = r;L("Loading video");
                            var e = k.status,
                                f = k.response,
                                g = k.responseXML,
                                l = k.responseText;
                            try {
                                if (a.opts.videoUploadToS3 || a.opts.videoUploadToAzure)
                                    if (201 == e) {
                                        if (a.opts.videoUploadToAzure) {
                                            if (!1 === a.events.trigger("video.uploadedToAzure", [k.responseURL, d, f], !0)) {
                                                a.edit.on();
                                                break a
                                            }
                                            var m = c
                                        } else try {
                                            var n = P(g).find("Location").text(),
                                                B = P(g).find("Key").text();
                                            !1 === a.events.trigger("video.uploadedToS3", [n, B, g], !0) ? (a.edit.on(), m = !1) : m = n
                                        } catch (Ca) {
                                            q(4, g), m = !1
                                        }
                                        m && v(m, !1, [], b, f || g)
                                    } else q(4, f || g);
                                else if (200 <= e && 300 > e) {
                                    var p = w(l);
                                    p && v(p.link, !1, p, b, f || l)
                                } else q(3, f || l)
                            } catch (Ca) {
                                q(4, f || l)
                            }
                        }
                    };
                    k.onerror = f;
                    k.upload.onprogress = x;
                    k.onabort = C;
                    m();
                    a.events.disableBlur();
                    a.edit.off();
                    a.events.enableBlur();
                    if (d = a.popups.get("video.insert")) P(d.off("abortUpload")).on("abortUpload", function() {
                        4 != k.readyState && k.abort()
                    });
                    k.send(a.opts.videoUploadToAzure ? b : c)
                }
            }
        }

        function ya(b) {
            a.events.$on(b, "dragover dragenter", ".fr-video-upload-layer", function() {
                P(this).addClass("fr-drop");
                return !1
            }, !0);
            a.events.$on(b, "dragleave dragend", ".fr-video-upload-layer", function() {
                P(this).removeClass("fr-drop");
                return !1
            }, !0);
            a.events.$on(b, "drop", ".fr-video-upload-layer", function(c) {
                c.preventDefault();
                c.stopPropagation();
                P(this).removeClass("fr-drop");
                if ((c = c.originalEvent.dataTransfer) && c.files) {
                    var d = b.data("instance") || a;
                    d.events.disableBlur();
                    d.video.upload(c.files);
                    d.events.enableBlur()
                }
            }, !0);
            a.helpers.isIOS() && a.events.$on(b, "touchstart", '.fr-video-upload-layer input[type="file"]', function() {
                P(this).trigger("click")
            }, !0);
            a.events.$on(b, "change", '.fr-video-upload-layer input[type="file"]', function() {
                if (this.files) {
                    var c = b.data("instance") || a;
                    c.events.disableBlur();
                    b.find("input:focus").blur();
                    c.events.enableBlur();
                    c.video.upload(this.files)
                }
                P(this).val("")
            }, !0)
        }

        function va() {
            a.events.on("drop", E, !0);
            a.events.on("mousedown window.mousedown", ua);
            a.events.on("window.touchmove", Z);
            a.events.on("mouseup window.mouseup", A);
            a.events.on("commands.mousedown", function(a) {
                0 < a.parents(".fr-toolbar").length && A()
            });
            a.events.on("video.hideResizer commands.undo commands.redo element.dropped", function() {
                A(!0)
            })
        }

        function q(b, c) {
            a.edit.on();
            J && J.find("video").addClass("fr-error");
            y(a.language.translate("Something went wrong. Please try again."));
            a.events.trigger("video.error", [{
                code: b,
                message: Q[b]
            }, c])
        }

        function pa() {
            var b = "";
            return 0 < a.opts.videoEditButtons.length ? (a.opts.videoResponsive && (-1 < a.opts.videoEditButtons.indexOf("videoSize") && a.opts.videoEditButtons.splice(a.opts.videoEditButtons.indexOf("videoSize"), 1), -1 < a.opts.videoEditButtons.indexOf("videoDisplay") && a.opts.videoEditButtons.splice(a.opts.videoEditButtons.indexOf("videoDisplay"), 1), -1 < a.opts.videoEditButtons.indexOf("videoAlign") && a.opts.videoEditButtons.splice(a.opts.videoEditButtons.indexOf("videoAlign"), 1)), b += '<div class="fr-buttons"> \n      '.concat(a.button.buildList(a.opts.videoEditButtons), " \n      </div>"), b = a.popups.create("video.edit", {
                buttons: b
            }), a.events.$on(a.$wp, "scroll.video-edit", function() {
                J && a.popups.isVisible("video.edit") && (a.events.disableBlur(), S(J))
            }), b) : !1
        }

        function da() {
            if (J) {
                var b = a.popups.get("video.size"),
                    c = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video"));
                b.find('input[name="width"]').val(c.get(0).style.width || c.attr("width")).trigger("change");
                b.find('input[name="height"]').val(c.get(0).style.height || c.attr("height")).trigger("change")
            }
        }

        function fa(b) {
            if (b) return a.popups.onRefresh("video.size", da), !0;
            b = "";
            b = '<div class="fr-buttons fr-tabs">'.concat(a.button.buildList(a.opts.videoSizeButtons), "</div>");
            var c = "";
            c = '<div class="fr-video-size-layer fr-layer fr-active" id="fr-video-size-layer-'.concat(a.id, '"><div class="fr-video-group"><div class="fr-input-line"><input id="fr-video-size-layer-width-').concat(a.id, '" type="text" name="width" placeholder="').concat(a.language.translate("Width"), '" tabIndex="1"></div><div class="fr-input-line"><input id="fr-video-size-layer-height-').concat(a.id, '" type="text" name="height" placeholder="').concat(a.language.translate("Height"), '" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoSetSize" tabIndex="2" role="button">').concat(a.language.translate("Update"), "</button></div></div>");
            b = a.popups.create("video.size", {
                buttons: b,
                size_layer: c
            });
            a.events.$on(a.$wp, "scroll", function() {
                J && a.popups.isVisible("video.size") && (a.events.disableBlur(), S(J))
            });
            return b
        }

        function ba(a) {
            "undefined" == typeof a && (a = J);
            if (a) {
                if (a.hasClass("fr-fvl")) return "left";
                if (a.hasClass("fr-fvr")) return "right";
                if (!a.hasClass("fr-dvb") && !a.hasClass("fr-dvi"))
                    if ("block" == a.css("display")) {
                        if ("left" == a.css("text-algin")) return "left";
                        if ("right" == a.css("text-align")) return "right"
                    } else {
                        if ("left" == a.css("float")) return "left";
                        if ("right" == a.css("float")) return "right"
                    }
            }
            return "center"
        }

        function r(a) {
            "undefined" == typeof a && (a = J);
            var b = a.css("float");
            a.css("float", "none");
            if ("block" == a.css("display")) return a.css("float", ""), a.css("float") != b && a.css("float", b), "block";
            a.css("float", "");
            a.css("float") != b && a.css("float", b);
            return "inline"
        }

        function z() {
            if (J && !1 !== a.events.trigger("video.beforeRemove", [J])) {
                var b = J;
                a.popups.hideAll();
                A(!0);
                a.selection.setBefore(b.get(0)) || a.selection.setAfter(b.get(0));
                b.remove();
                a.selection.restore();
                a.html.fillEmptyBlocks()
            }
        }

        function l() {
            t()
        }

        function u(b, c, d) {
            !a.opts.htmlUntouched && a.opts.useClasses ? (b.removeClass("fr-fvl fr-fvr fr-dvb fr-dvi"), b.addClass("fr-fv".concat(d[0], " fr-dv").concat(c[0]))) : "inline" == c ? (b.css({
                display: "inline-block"
            }), "center" == d ? b.css({
                "float": "none"
            }) : "left" == d ? b.css({
                "float": "left"
            }) : b.css({
                "float": "right"
            })) : (b.css({
                display: "block",
                clear: "both"
            }), "left" == d ? b.css({
                textAlign: "left"
            }) : "right" == d ? b.css({
                textAlign: "right"
            }) : b.css({
                textAlign: "center"
            }))
        }

        function W(a) {
            a.hasClass("fr-dvi") || a.hasClass("fr-dvb") || (a.addClass("fr-fv".concat(ba(a)[0])), a.addClass("fr-dv".concat(r(a)[0])))
        }

        function H(a) {
            var b = a.hasClass("fr-dvb") ? "block" : a.hasClass("fr-dvi") ? "inline" : null,
                c = a.hasClass("fr-fvl") ? "left" : a.hasClass("fr-fvr") ? "right" : ba(a);
            u(a, b, c);
            a.removeClass("fr-dvb fr-dvi fr-fvr fr-fvl")
        }

        function T() {
            var b = a.$el.find("video").filter(function() {
                return 0 === P(this).parents("span.fr-video").length
            });
            if (0 != b.length) {
                b.wrap(P(document.createElement("span")).attr("class", "fr-video fr-deletable").attr("contenteditable", "false"));
                a.$el.find("embed, iframe").filter(function() {
                    a.browser.safari && this.getAttribute("src") && this.setAttribute("src", this.src);
                    if (0 < P(this).parents("span.fr-video").length) return !1;
                    for (var b = P(this).attr("src"), c = 0; c < d.VIDEO_PROVIDERS.length; c++) {
                        var e = d.VIDEO_PROVIDERS[c];
                        if (e.test_regex.test(b) && (new RegExp(a.opts.videoAllowedProviders.join("|"))).test(e.provider)) return !0
                    }
                    return !1
                }).map(function() {
                    return 0 === P(this).parents("object").length ? this : P(this).parents("object").get(0)
                }).wrap(P(document.createElement("span")).attr("class", "fr-video").attr("contenteditable", "false"));
                b = a.$el.find("span.fr-video, video");
                for (var c = 0; c < b.length; c++) {
                    var e = P(b[c]);
                    !a.opts.htmlUntouched && a.opts.useClasses ? (W(e), a.opts.videoTextNear || e.removeClass("fr-dvi").addClass("fr-dvb")) : a.opts.htmlUntouched || a.opts.useClasses || H(e)
                }
                b.toggleClass("fr-draggable", a.opts.videoMove)
            }
        }

        function ka(b) {
            document.getElementById("autoplay-".concat(a.id)).style.cssText = "background:".concat(b)
        }

        function K() {
            if (J) {
                a.selection.clear();
                var b = a.doc.createRange();
                b.selectNode(J.get(0));
                a.selection.get().addRange(b)
            }
        }
        var P = a.$,
            qa, ea, ha, J, Q = {
                1: "Video cannot be loaded from the passed link.",
                2: "No link in upload response.",
                3: "Error during file upload.",
                4: "Parsing response failed.",
                5: "File is too large.",
                6: "Video file type is invalid.",
                7: "Files can be uploaded only to same domain in IE 8 and IE 9."
            },
            ma, wa;
        a.shared.vid_exit_flag = !1;
        return {
            _init: function() {
                a.opts.videoResponsive && (a.opts.videoResize = !1);
                va();
                a.helpers.isMobile() && (a.events.$on(a.$el, "touchstart", "span.fr-video", function() {
                    wa = !1
                }), a.events.$on(a.$el, "touchmove", function() {
                    wa = !0
                }));
                a.events.on("html.set", T);
                T();
                a.events.$on(a.$el, "mousedown", "span.fr-video", function(b) {
                    b.stopPropagation();
                    !a.browser.msie && !a.browser.edge || b.target.innerText || (b.target.dragDrop(), I.call(this, b))
                });
                a.events.$on(a.$el, "click touchend", "span.fr-video", function(a) {
                    if (a.target.innerText.length || "false" == P(this).parents("[contenteditable]").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable")) return !0;
                    I.call(this, a)
                });
                a.events.on("keydown", function(b) {
                    var c = b.which;
                    if (J && (c == d.KEYCODE.BACKSPACE || c == d.KEYCODE.DELETE)) return b.preventDefault(), z(), a.undo.saveStep(), !1;
                    if (J && c == d.KEYCODE.ESC) return A(!0), b.preventDefault(), !1;
                    if (J && c != d.KEYCODE.F10 && !a.keys.isBrowserAction(b)) return b.preventDefault(), !1
                }, !0);
                a.events.on("toolbar.esc", function() {
                    if (J) return a.events.disableBlur(), a.events.focus(), !1
                }, !0);
                a.events.on("toolbar.focusEditor", function() {
                    if (J) return !1
                }, !0);
                a.events.on("keydown", function() {
                    a.$el.find("span.fr-video:empty").remove()
                });
                a.$wp && (k(), a.events.on("contentChanged", k));
                M(!0);
                fa(!0)
            },
            showInsertPopup: function() {
                var b = a.$tb.find('.fr-command[data-cmd="insertVideo"]'),
                    c = a.popups.get("video.insert");
                c || (c = M());
                t();
                c.hasClass("fr-active") || (a.popups.refresh("video.insert"), a.popups.setContainer("video.insert", a.$tb), b.isVisible() ? (c = a.button.getPosition(b), a.popups.show("video.insert", c.left, c.top, b.outerHeight())) : (a.position.forSelection(c), a.popups.show("video.insert")))
            },
            showLayer: function(b) {
                var c = a.popups.get("video.insert");
                if (!J && !a.opts.toolbarInline) {
                    var d = a.$tb.find('.fr-command[data-cmd="insertVideo"]');
                    var e = d.offset().left;
                    d = d.offset().top + (a.opts.toolbarBottom ? 10 : d.outerHeight() - 10)
                }
                a.opts.toolbarInline && (d = c.offset().top - a.helpers.getPX(c.css("margin-top")), c.hasClass("fr-above") && (d += c.outerHeight()));
                c.find(".fr-layer").removeClass("fr-active");
                c.find(".fr-".concat(b, "-layer")).addClass("fr-active");
                a.popups.show("video.insert", e, d, 0);
                a.accessibility.focusPopup(c)
            },
            refreshByURLButton: function(b) {
                var c = a.popups.get("video.insert");
                c && c.find(".fr-video-by-url-layer").hasClass("fr-active") && b.addClass("fr-active").attr("aria-pressed", !0)
            },
            refreshEmbedButton: function(b) {
                var c = a.popups.get("video.insert");
                c && c.find(".fr-video-embed-layer").hasClass("fr-active") && b.addClass("fr-active").attr("aria-pressed", !0)
            },
            refreshUploadButton: function(b) {
                var c = a.popups.get("video.insert");
                c && c.find(".fr-video-upload-layer").hasClass("fr-active") && b.addClass("fr-active").attr("aria-pressed", !0)
            },
            upload: na,
            insertByURL: function(b) {
                var c = document.getElementById("videoPluginAutoplay") ? document.getElementById("videoPluginAutoplay").checked : !1;
                "undefined" == typeof b && (b = (a.popups.get("video.insert").find('.fr-video-by-url-layer input[type="text"]').val() || "").trim());
                var e = null;
                /^http/.test(b) || (b = "https://".concat(b));
                if (a.helpers.isURL(b))
                    for (var f = 0; f < d.VIDEO_PROVIDERS.length; f++) {
                        var g = d.VIDEO_PROVIDERS[f];
                        g.html.includes("autoplay=1") && document.getElementById("videoPluginAutoplay").checked ? (g.html = g.html, document.getElementById("videoPluginAutoplay").checked = !1) : c ? (c = g.html.indexOf("{url}") +
                            5, g.html = [g.html.slice(0, c), "autoplay=1", g.html.slice(c)].join(""), c = !1, document.getElementById("videoPluginAutoplay").checked = !1) : (g = d.VIDEO_PROVIDERS[f], g.html = g.html.replace("autoplay=1", ""));
                        if (g.test_regex.test(b) && (new RegExp(a.opts.videoAllowedProviders.join("|"))).test(g.provider)) {
                            e = b.replace(g.url_regex, g.url_text);
                            e = g.html.replace(/\{url\}/, e);
                            break
                        }
                    }
                e ? R(e) : (y(a.language.translate("Something went wrong. Please try again.")), a.events.trigger("video.linkError", [b]))
            },
            insertEmbed: function(b) {
                "undefined" == typeof b && (b = a.popups.get("video.insert").find(".fr-video-embed-layer textarea").val() || "");
                0 !== b.length && d.VIDEO_EMBED_REGEX.test(b) ? R(b) : (y(a.language.translate("Something went wrong. Please try again.")), a.events.trigger("video.codeError", [b]))
            },
            insert: R,
            align: function(b) {
                J.removeClass("fr-fvr fr-fvl");
                !a.opts.htmlUntouched && a.opts.useClasses ? "left" == b ? J.addClass("fr-fvl") : "right" == b && J.addClass("fr-fvr") : u(J, r(), b);
                K();
                g();
                h();
                a.selection.clear()
            },
            refreshAlign: function(b) {
                if (!J) return !1;
                b.find(">*").first().replaceWith(a.icon.create("video-align-".concat(ba())))
            },
            refreshAlignOnShow: function(a, b) {
                J && b.find('.fr-command[data-param1="'.concat(ba(), '"]')).addClass("fr-active").attr("aria-selected", !0)
            },
            display: function(b) {
                J.removeClass("fr-dvi fr-dvb");
                !a.opts.htmlUntouched && a.opts.useClasses ? "inline" == b ? J.addClass("fr-dvi") : "block" == b && J.addClass("fr-dvb") : u(J, b, ba());
                K();
                g();
                h();
                a.selection.clear()
            },
            refreshDisplayOnShow: function(a, b) {
                J && b.find('.fr-command[data-param1="'.concat(r(), '"]')).addClass("fr-active").attr("aria-selected", !0)
            },
            remove: z,
            hideProgressBar: t,
            showSizePopup: function() {
                a.popups.get("video.size") || fa();
                t();
                a.popups.refresh("video.size");
                a.popups.setContainer("video.size", a.$sc);
                var b = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video")),
                    c = b.offset().left + b.outerWidth() / 2,
                    d = b.offset().top + b.height();
                a.popups.show("video.size", c, d, b.height(), !0)
            },
            replace: function() {
                a.popups.get("video.insert") || M();
                a.popups.isVisible("video.insert") || (t(), a.popups.refresh("video.insert"), a.popups.setContainer("video.insert", a.$sc));
                var b = J.offset().left + J.outerWidth() / 2,
                    c = J.offset().top + J.height();
                a.popups.show("video.insert", b, c, J.outerHeight(), !0)
            },
            back: function() {
                J ? (a.events.disableBlur(), J[0].click()) : (a.events.disableBlur(), a.selection.restore(), a.events.enableBlur(), a.popups.hide("video.insert"), a.toolbar.showInline())
            },
            setSize: function(b, c) {
                if (J) {
                    var d = a.popups.get("video.size"),
                        e = J.find("iframe, embed, ".concat(J.find("iframe, embed, audio").get(0) ? "audio" : "video"));
                    e.css("width", b || d.find('input[name="width"]').val());
                    e.css("height", c || d.find('input[name="height"]').val());
                    e.get(0).style.width && e.removeAttr("width");
                    e.get(0).style.height && e.removeAttr("height");
                    d.find("input:focus").blur();
                    setTimeout(function() {
                        J.trigger("click")
                    }, a.helpers.isAndroid() ? 50 : 0)
                }
            },
            get: function() {
                return J
            },
            showProgressBar: m,
            _editVideo: S,
            setAutoplay: function() {
                if (J.find("iframe, embed, audio").get(0)) {
                    var a = J.find("iframe, embed, audio");
                    a.get(0).src.includes("autoplay=1") ? (ka("#FFFFFF"), a.get(0).src = a.get(0).src.replace("&autoplay=1", "")) : (ka("#D6D6D6"), a.get(0).src = a.get(0).src + "&autoplay=1")
                } else if (a = J.find("iframe, embed, video"), a.get(0).outerHTML.includes("autoplay")) ka("#FFFFFF"), a.get(0).outerHTML = a.get(0).outerHTML.replace("autoplay", "");
                else {
                    ka("#D6D6D6");
                    var b = a.get(0).outerHTML.indexOf("class") - 1;
                    a.get(0).outerHTML = [a.get(0).outerHTML.slice(0, b), "autoplay", a.get(0).outerHTML.slice(b)].join("")
                }
            }
        }
    };
    d.RegisterCommand("insertVideo", {
        title: "Insert Video",
        undo: !1,
        focus: !0,
        refreshAfterCallback: !1,
        popup: !0,
        callback: function() {
            this.popups.isVisible("video.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("video.insert")) : this.video.showInsertPopup()
        },
        plugin: "video"
    });
    d.DefineIcon("insertVideo", {
        NAME: "video-camera",
        FA5NAME: "camera",
        SVG_KEY: "insertVideo"
    });
    d.DefineIcon("videoByURL", {
        NAME: "link",
        SVG_KEY: "insertLink"
    });
    d.RegisterCommand("videoByURL", {
        title: "By URL",
        undo: !1,
        focus: !1,
        toggle: !0,
        callback: function() {
            this.video.showLayer("video-by-url")
        },
        refresh: function(a) {
            this.video.refreshByURLButton(a)
        }
    });
    d.DefineIcon("videoEmbed", {
        NAME: "code",
        SVG_KEY: "codeView"
    });
    d.RegisterCommand("videoEmbed", {
        title: "Embedded Code",
        undo: !1,
        focus: !1,
        toggle: !0,
        callback: function() {
            this.video.showLayer("video-embed")
        },
        refresh: function(a) {
            this.video.refreshEmbedButton(a)
        }
    });
    d.DefineIcon("videoUpload", {
        NAME: "upload",
        SVG_KEY: "upload"
    });
    d.RegisterCommand("videoUpload", {
        title: "Upload Video",
        undo: !1,
        focus: !1,
        toggle: !0,
        callback: function() {
            this.video.showLayer("video-upload")
        },
        refresh: function(a) {
            this.video.refreshUploadButton(a)
        }
    });
    d.RegisterCommand("videoInsertByURL", {
        undo: !0,
        focus: !0,
        callback: function() {
            this.video.insertByURL()
        }
    });
    d.RegisterCommand("videoInsertEmbed", {
        undo: !0,
        focus: !0,
        callback: function() {
            this.video.insertEmbed()
        }
    });
    d.DefineIcon("videoDisplay", {
        NAME: "star",
        SVG_KEY: "star"
    });
    d.RegisterCommand("videoDisplay", {
        title: "Display",
        type: "dropdown",
        options: {
            inline: "Inline",
            block: "Break Text"
        },
        callback: function(a, c) {
            this.video.display(c)
        },
        refresh: function(a) {
            this.opts.videoTextNear || a.addClass("fr-hidden")
        },
        refreshOnShow: function(a, c) {
            this.video.refreshDisplayOnShow(a, c)
        }
    });
    d.DefineIcon("video-align", {
        NAME: "align-left",
        SVG_KEY: "align Left"
    });
    d.DefineIcon("video-align-left", {
        NAME: "align-left",
        SVG_KEY: "alignLeft"
    });
    d.DefineIcon("video-align-right", {
        NAME: "align-right",
        SVG_KEY: "alignRight"
    });
    d.DefineIcon("video-align-center", {
        NAME: "align-justify",
        SVG_KEY: "alignJustify"
    });
    d.DefineIcon("videoAlign", {
        NAME: "align-center",
        SVG_KEY: "alignCenter"
    });
    d.RegisterCommand("videoAlign", {
        type: "dropdown",
        title: "Align",
        options: {
            left: "Align Left",
            center: "None",
            right: "Align Right"
        },
        html: function() {
            var a = '<ul class="fr-dropdown-list" role="presentation">',
                c = d.COMMANDS.videoAlign.options,
                h;
            for (h in c) c.hasOwnProperty(h) && (a += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="videoAlign" data-param1="'.concat(h, '" title="').concat(this.language.translate(c[h]), '">').concat(this.icon.create("video-align-".concat(h)), '<span class="fr-sr-only">').concat(this.language.translate(c[h]), "</span></a></li>"));
            return a + "</ul>"
        },
        callback: function(a, c) {
            this.video.align(c)
        },
        refresh: function(a) {
            this.video.refreshAlign(a)
        },
        refreshOnShow: function(a, c) {
            this.video.refreshAlignOnShow(a, c)
        }
    });
    d.DefineIcon("videoReplace", {
        NAME: "exchange",
        FA5NAME: "exchange-alt",
        SVG_KEY: "replaceImage"
    });
    d.RegisterCommand("videoReplace", {
        title: "Replace",
        undo: !1,
        focus: !1,
        popup: !0,
        refreshAfterCallback: !1,
        callback: function() {
            this.video.replace()
        }
    });
    d.DefineIcon("videoRemove", {
        NAME: "trash",
        SVG_KEY: "remove"
    });
    d.RegisterCommand("videoRemove", {
        title: "Remove",
        callback: function() {
            this.video.remove()
        }
    });
    d.DefineIcon("autoplay", {
        NAME: "autoplay",
        SVG_KEY: "autoplay"
    });
    d.RegisterCommand("autoplay", {
        undo: !1,
        focus: !1,
        popup: !0,
        title: "Autoplay",
        callback: function() {
            this.video.setAutoplay()
        }
    });
    d.DefineIcon("videoSize", {
        NAME: "arrows-alt",
        SVG_KEY: "imageSize"
    });
    d.RegisterCommand("videoSize", {
        undo: !1,
        focus: !1,
        popup: !0,
        title: "Change Size",
        callback: function() {
            this.video.showSizePopup()
        }
    });
    d.DefineIcon("videoBack", {
        NAME: "arrow-left",
        SVG_KEY: "back"
    });
    d.RegisterCommand("videoBack", {
        title: "Back",
        undo: !1,
        focus: !1,
        back: !0,
        callback: function() {
            this.video.back()
        },
        refresh: function(a) {
            this.video.get() || this.opts.toolbarInline ? (a.removeClass("fr-hidden"), a.next(".fr-separator").removeClass("fr-hidden")) : (a.addClass("fr-hidden"), a.next(".fr-separator").addClass("fr-hidden"))
        }
    });
    d.RegisterCommand("videoDismissError", {
        title: "OK",
        undo: !1,
        callback: function() {
            this.video.hideProgressBar(!0)
        }
    });
    d.RegisterCommand("videoSetSize", {
        undo: !0,
        focus: !1,
        title: "Update",
        refreshAfterCallback: !1,
        callback: function() {
            this.video.setSize()
        }
    })
});
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(e, k, p) {
    e instanceof String && (e = String(e));
    for (var u = e.length, b = 0; b < u; b++) {
        var a = e[b];
        if (k.call(p, a, b, e)) return {
            i: b,
            v: a
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, k, p) {
    e != Array.prototype && e != Object.prototype && (e[k] = p.value)
};
$jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(e, k, p, u) {
    if (k) {
        p = $jscomp.global;
        e = e.split(".");
        for (u = 0; u < e.length - 1; u++) {
            var b = e[u];
            b in p || (p[b] = {});
            p = p[b]
        }
        e = e[e.length - 1];
        u = p[e];
        k = k(u);
        k != u && null != k && $jscomp.defineProperty(p, e, {
            configurable: !0,
            writable: !0,
            value: k
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(e) {
    return e ? e : function(e, p) {
        return $jscomp.findInternal(this, e, p).v
    }
}, "es6", "es3");
! function(e, k, p, u) {
    e.FE = FroalaEditor;
    XF.isEditorEnabled = function() {
        return XF.LocalStorage.get("editorDisabled") ? !1 : !0
    };
    XF.setIsEditorEnabled = function(b) {
        b ? XF.LocalStorage.remove("editorDisabled") : XF.LocalStorage.set("editorDisabled", "1", !0)
    };
    XF.Editor = XF.Element.newHandler({
        options: {
            maxHeight: .7,
            minHeight: 250,
            buttonsRemove: "",
            attachmentTarget: !0,
            deferred: !1,
            attachmentUploader: ".js-attachmentUpload",
            attachmentContextInput: "attachment_hash_combined"
        },
        edMinHeight: 63,
        $form: null,
        buttonManager: null,
        ed: null,
        mentioner: null,
        emojiCompleter: null,
        uploadUrl: null,
        init: function() {
            this.$target.is("textarea") ? (this.options.minHeight = Math.max(this.edMinHeight, this.options.minHeight), this.$target.trigger("editor:start", [this]), this.$form = this.$target.closest("form"), this.$form.length || (this.$form = null), this.options.attachmentTarget && (this.uploadUrl = this.$target.closest("[data-xf-init~=attachment-manager]").find(this.options.attachmentUploader).attr("href")), this.options.deferred || this.startInit()) : console.error("Editor can only be initialized on a textarea")
        },
        startInit: function(b) {
            var a = this,
                d = b && b.beforeInit,
                c = b && b.afterInit;
            this.$target.css("visibility", "");
            this.ed = new FroalaEditor(this.$target[0], this.getEditorConfig(), function() {
                var b = a.ed;
                d && d(a, b);
                a.editorInit();
                c && c(a, b)
            })
        },
        reInit: function(b) {
            this.ed && (this.ed.destroy(), this.startInit(b))
        },
        getEditorConfig: function() {
            var b = this.getHeightLimits(),
                a = "font_awesome_5";
            "s" !== XF.config.fontAwesomeWeight && (a += XF.config.fontAwesomeWeight);
            b = {
                attribution: !1,
                direction: FroalaEditor.LANGUAGE.xf.direction,
                editorClass: "bbWrapper",
                fileUpload: !1,
                fileMaxSize: 4294967296,
                fileUploadParam: "upload",
                fileUploadURL: !1,
                fontFamily: {
                    arial: "Arial",
                    "'book antiqua'": "Book Antiqua",
                    "'courier new'": "Courier New",
                    georgia: "Georgia",
                    tahoma: "Tahoma",
                    "'times new roman'": "Times New Roman",
                    "'trebuchet ms'": "Trebuchet MS",
                    verdana: "Verdana"
                },
                fontSize: "9 10 12 15 18 22 26".split(" "),
                heightMin: b[0],
                heightMax: b[1],
                htmlAllowedTags: "a audio b bdi bdo blockquote br cite code dfn div em h1 h2 h3 h4 h5 h6 hr i img li mark ol p pre s small span strike strong sub sup table tbody td tfoot th thead time tr u ul var video wbr".split(" "),
                key: "ZOD3gA8B10A6C5A2G3C-8TMIBDIa1NTMNZFFPFZc1d1Ib2a1E1fA4A3G3F3F2B6C4C4C3G3==",
                htmlAllowComments: !1,
                iconsTemplate: a,
                imageUpload: !1,
                imageCORSProxy: null,
                imageDefaultDisplay: "inline",
                imageDefaultWidth: 0,
                imageEditButtons: "imageAlign imageSize imageAlt | imageReplace imageRemove | imageLink linkOpen linkEdit linkRemove".split(" "),
                imageManagerLoadURL: !1,
                imageMaxSize: 4294967296,
                imagePaste: !1,
                imageResize: !0,
                imageUploadParam: "upload",
                imageUploadRemoteUrls: !1,
                imageUploadURL: !1,
                language: "xf",
                linkAlwaysBlank: !0,
                linkEditButtons: ["linkOpen", "linkEdit", "linkRemove"],
                linkInsertButtons: ["linkBack"],
                listAdvancedTypes: !1,
                paragraphFormat: {
                    N: "Normal",
                    H2: "Heading 1",
                    H3: "Heading 2",
                    H4: "Heading 3"
                },
                placeholderText: "",
                tableResizer: !1,
                tableEditButtons: ["tableHeader", "tableRemove", "|", "tableRows", "tableColumns"],
                toolbarSticky: !1,
                toolbarStickyOffset: 36,
                videoAllowedTypes: ["mp4", "quicktime", "ogg", "webm"],
                videoAllowedProviders: [],
                videoDefaultAlign: "center",
                videoDefaultDisplay: "inline",
                videoDefaultWidth: 500,
                videoEditButtons: ["videoReplace", "videoRemove", "|", "videoAlign", "videoSize"],
                videoInsertButtons: ["videoBack", "|", "videoUpload"],
                videoMaxSize: 4294967296,
                videoMove: !0,
                videoUpload: !1,
                videoUploadParam: "upload",
                videoUploadURL: !1,
                zIndex: XF.getElEffectiveZIndex(this.$target) + 1,
                xfBbCodeAttachmentContextInput: this.options.attachmentContextInput
            };
            FroalaEditor.DefineIcon("insertVideo", {
                FA5NAME: "video-plus"
            });
            this.uploadUrl ? (a = {
                _xfToken: XF.config.csrf,
                _xfResponseType: "json",
                _xfWithData: 1
            }, b.fileUpload = !0, b.fileUploadParams = a, b.fileUploadURL = this.uploadUrl, b.imageUpload = !0, b.imageUploadParams = a, b.imageUploadURL = this.uploadUrl, b.imagePaste = !0, b.videoUpload = !0, b.videoUploadParams = a, b.videoUploadURL = this.uploadUrl) : b.imageInsertButtons = ["imageByURL"];
            a = this.getButtonConfig();
            b = e.extend({}, b, a);
            this.$target.trigger("editor:config", [b, this]);
            return b
        },
        getButtonConfig: function() {
            try {
                var b = e.parseJSON(e(".js-editorToolbars").first().html()) || {}
            } catch (f) {
                console.error("Editor buttons data not valid: ", f);
                return
            }
            var a = {};
            try {
                var d = e.parseJSON(e(".js-editorDropdowns").first().html()) || {},
                    c;
                for (c in d) d.hasOwnProperty(c) && d[c].buttons && (a[c] = d[c].buttons)
            } catch (f) {
                console.error("Editor dropdowns data not valid: ", f)
            }
            this.buttonManager = b = new XF.EditorButtons(this, b, a);
            XF.isElementWithinDraftForm(this.$target) || b.addRemovedButton("xfDraft");
            (a = this.getAttachmentManager()) && a.supportsVideoAudioUploads || b.addRemovedButton("insertVideo");
            this.options.buttonsRemove && b.addRemovedButtons(this.options.buttonsRemove.split(","));
            this.$target.trigger("editor:toolbar-buttons", [{
                buttonManager: b
            }, this]);
            return b.getToolbars()
        },
        editorInit: function() {
            var b = this,
                a = this.ed;
            this.watchEditorHeight();
            if (this.$form && (this.$form.on("ajax-submit:before draft:beforesync", function() {
                    XF.EditorHelpers.sync(a)
                }), this.$form.on("draft:complete", function(b, c) {
                    if (a.$tb.length && !0 === c.draft.saved && (b = a.$tb.find(".fr-command.fr-btn[data-cmd=xfDraft]"), b.length)) {
                        var f = b.find(".editorDraftIndicator");
                        f.length || (f = e('<b class="editorDraftIndicator" />').appendTo(b));
                        setTimeout(function() {
                            f.addClass("is-active")
                        }, 50);
                        setTimeout(function() {
                            f.removeClass("is-active")
                        }, 2500)
                    }
                }), this.$form.on("ajax-submit:before", function(b, c) {
                    0 < a.$el.find(".fr-uploading").length && !confirm(XF.phrase("files_being_uploaded_are_you_sure")) && (c.preventSubmit = !0)
                }), a.events.on("keydown", function(a) {
                    if ("Enter" == a.key && (XF.isMac() ? a.metaKey : a.ctrlKey)) return a.preventDefault(), b.$form.submit(), !1
                }, !0), XF.isElementWithinDraftForm(this.$form))) {
                var d = e(a.$el[0]);
                XF.Element.applyHandler(d, "draft-trigger")
            }
            a.events.on("image.inserted", function(a) {
                a.removeClass("fr-dib").addClass("fr-dii")
            });
            a.events.on("image.loaded", function(a) {
                b.replaceBase64ImageWithUpload(a)
            });
            a.events.on("image.beforePasteUpload", function(a) {
                if ("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" == a.src) return !1
            });
            var c = !1;
            a.events.on("cut copy", function(b) {
                if ((b = a.selection.ranges(0)) && b.commonAncestorContainer) {
                    var c = b.commonAncestorContainer;
                    if (c.nodeType == Node.TEXT_NODE)
                        if (0 == b.startOffset && b.endOffset == c.length && c.parentNode != a.$el[0]) {
                            for (c = c.parentNode; c.parentNode != a.$el[0] && !c.previousSibling && !c.nextSibling;) c = c.parentNode;
                            b.selectNode(c)
                        } else c = c.parentNode;
                    var d = e(c).find("p");
                    d.attr("data-xf-p", "1");
                    setTimeout(function() {
                        d.removeAttr("data-xf-p")
                    }, 0)
                }
            });
            a.events.on("paste.before", function(b) {
                c = !1;
                if (b && b.clipboardData && b.clipboardData.getData) {
                    var d = "";
                    b = b.clipboardData.types;
                    if (a.helpers.isArray(b))
                        for (var f = 0; f < b.length; f++) d += b[f] + ";";
                    else d = b;
                    !/text\/plain/.test(d) || a.browser.mozilla || /text\/html/.test(d) || /text\/rtf/.test(d) && a.browser.safari || (c = !0)
                }
            });
            a.events.on("paste.beforeCleanup", function(a) {
                c && (a = a.replace(/\t/g, "    ").replace(/  /g, "&nbsp; ").replace(/  /g, "&nbsp; ").replace(/> /g, ">&nbsp;"));
                a = a.replace(/(<pre[^>]*>)([\s\S]+?)(<\/pre>)/g, function(a, b, c, d) {
                    c = c.replace(/\r?\n/g, "<br>");
                    return b + c + d
                });
                a = a.replace(/<p([^>]+)margin-top:\s*0[a-z]*;\s*margin-bottom:\s*0[a-z]*;([^>]*)>([\s\S]*?)<\/p>/g, function(a, b, c, d) {
                    return "<p" + b + c + ' data-xf-p="1">' + d + "</p>"
                });
                a = a.replace(/<div(?=\s|>)/g, function(a) {
                    return a + ' data-xf-p="1"'
                });
                var b;
                (b = a.match(/^(?:<meta[^>]*>)?<a href=(?:'|")([^'"]*)\/?(?:'|")>\1<\/a>$/)) && (a = e.trim(b[1]));
                (b = a.match(/\x3c!--StartFragment--\x3e<a href=(?:'|")([^'"]*)\/?(?:'|")>\1<\/a>\x3c!--EndFragment--\x3e/)) && (a = e.trim(b[1]));
                a = XF.adjustHtmlForRte(a);
                a = e.parseHTML(a);
                var d = function(a) {
                    var b, c;
                    for (b = 0; b < a.length; b++) {
                        var e = a[b];
                        if (e instanceof Element) {
                            if (e.hasAttributes()) {
                                var f = e.attributes;
                                for (c = f.length - 1; 0 <= c; c--) {
                                    var h = f[c];
                                    "on" != h.name.toLowerCase().substr(0, 2) && "style" != h.name.toLowerCase() || e.removeAttribute(h.name)
                                }
                            }
                            d(e.children)
                        }
                    }
                };
                d(a);
                a = e("<div />").html(a).html();
                return e.trim(a)
            });
            a.events.on("paste.afterCleanup", function(a) {
                return b.normalizePaste(a)
            });
            a.events.on("paste.after", function() {
                var c = a.selection.ranges(0);
                if (c && c.getBoundingClientRect) {
                    c = c.getBoundingClientRect();
                    var d = a.$wp[0].getBoundingClientRect();
                    (0 > c.top || 0 > c.left || c.bottom > e(k).height() || c.right > e(k).width() || c.bottom > d.bottom) && setTimeout(function() {
                        b.scrollToCursor()
                    }, 100)
                }
            });
            d = {
                url: XF.getAutoCompleteUrl()
            };
            this.mentioner = new XF.AutoCompleter(e(a.$el), d, a);
            XF.config.shortcodeToEmoji && (d = {
                url: XF.canonicalizeUrl("index.php?misc/find-emoji"),
                at: ":",
                keepAt: !1,
                insertMode: "html",
                displayTemplate: '<div class="contentRow"><div class="contentRow-figure contentRow-figure--emoji">{{{icon}}}</div><div class="contentRow-main contentRow-main--close">{{{text}}}<div class="contentRow-minor contentRow-minor--smaller">{{{desc}}}</div></div></div>',
                beforeInsert: function(a, b) {
                    XF.logRecentEmojiUsage(e(b).find("img.smilie").data("shortname"));
                    return a
                }
            }, this.emojiCompleter = new XF.AutoCompleter(e(a.$el), d, a));
            this.setupUploads();
            XF.isEditorEnabled() || (d = this.$target.next("input[data-bb-code]"), d.length ? a.bbCode.toBbCode(d.val(), !0) : a.bbCode.toBbCode(null, !0));
            XF.EditorHelpers.setupBlurSelectionWatcher(a);
            this.$target.on("control:enabled", function() {
                a.edit.on()
            });
            this.$target.on("control:disabled", function() {
                a.edit.off()
            });
            this.$target.on("control:enabled", function() {
                a.edit.on();
                a.bbCode && a.bbCode.isBbCodeView() ? a.$tb.find(".fr-command[data-cmd=xfBbCode]").removeClass("fr-disabled") : a.toolbar.enable()
            });
            this.$target.on("control:disabled", function() {
                a.edit.off();
                a.toolbar.disable();
                a.$tb.find(" > .fr-command").addClass("fr-disabled")
            });
            this.$target.trigger("editor:init", [a, this]);
            XF.layoutChange()
        },
        focus: function() {
            XF.EditorHelpers.focus(this.ed)
        },
        blur: function() {
            XF.EditorHelpers.blur(this.ed)
        },
        normalizePaste: function(b) {
            b = b.replace(/(<(ul|li|p|div)>)\s+/ig, "$1");
            b = b.replace(/\s+(<\/(ul|li|p|div)>)/ig, "$1");
            b = b.replace(/<span>&nbsp;<\/span>/ig, " ").replace(/(<\/li>)\s+(<li)/ig, "$1$2");
            var a = this.ed,
                d = e.parseHTML(b),
                c = e("<div />").html(d);
            c.find("table").each(function(a, b) {
                a = e(b).width("100%");
                a.wrap('<div class="bbTable"></div>');
                a.find("[colspan], [rowspan]").removeAttr("colspan rowspan");
                var c = 0;
                a.find("> tbody > tr").each(function() {
                    var a = e(this).find("> td, > th").length;
                    c = Math.max(c, a)
                }).each(function() {
                    var a = e(this).find("> td, > th"),
                        b = a.length;
                    if (b < c) {
                        var d = "<td />";
                        for (b && "TH" === a[0].tagName && (d = "<th />"); b < c; b++) e(this).append(d)
                    }
                })
            });
            c.find("code, del, ins, sub, sup").replaceWith(function() {
                return this.innerHTML
            });
            var f = !1;
            c.find("h1").replaceWith(function() {
                f = !0;
                return e("<h2>").append(e(this).contents())
            });
            var h = {
                H2: f ? "H3" : "H2",
                H3: f ? "H4" : "H3",
                H4: "H4",
                H5: "H4",
                H6: "H4"
            };
            c.find("h2, h3, h4, h5, h6").replaceWith(function() {
                return e("<" + h[this.tagName] + ">").append(e(this).contents())
            });
            c.find("pre").replaceWith(function() {
                var a = this.innerHTML;
                a = a.replace(/\r?\n/g, "<br>").replace(/\t/g, "    ").replace(/  /g, "&nbsp; ").replace(/  /g, "&nbsp; ").replace(/> /g, ">&nbsp;").replace(/<br> /g, "<br>&nbsp;");
                return a + "<br>"
            });
            a.opts.imagePaste || c.find("img[data-fr-image-pasted]").each(function() {
                var a = e(this);
                a.attr("src").match(/https?:\/\//i) && a.removeAttr("data-fr-image-pasted")
            });
            c.find("br").each(function(b, d) {
                var f = e(d).parents().not(c);
                if (f.length && !f.filter(function(b, c) {
                        return a.node.isBlock(c)
                    }).length) {
                    b = e([]);
                    var h = !1,
                        g = d,
                        n = f.last();
                    do {
                        for (; g.nextSibling;) f = e(g.nextSibling).clone(), h ? b.append(f) : b = b.add(f), e(g.nextSibling).remove();
                        g = g.parentNode;
                        if (!g || c.is(g)) break;
                        f = e(g).clone().empty();
                        f.html(b);
                        b = f;
                        h = !0
                    } while (g.parentNode && !c.is(g.parentNode));
                    e(d).remove();
                    n.after(b);
                    n.after("<br />")
                }
            });
            b = "";
            d = c[0].textContent.replace(/\s/g, "");
            try {
                b = (a.win.localStorage.getItem("fr-copied-text") || "").replace(/\s/g, "")
            } catch (v) {}
            b !== d && c.find("> p:not([data-xf-p])").each(function() {
                this.nextSibling && e(this).after("<p />")
            });
            c.find("p").removeAttr("data-xf-p");
            d = c.contents();
            b = e("<div />");
            for (var g = null, l = 0; l < d.length; l++) {
                var m = d[l];
                m.nodeType == Node.ELEMENT_NODE && a.node.isBlock(m) ? (b.append(m), g = null) : m.nodeType == Node.ELEMENT_NODE && "BR" == m.tagName ? (g || b.append("<p />"), g = null) : (g || (g = e("<p />"), b.append(g)), g.append(m))
            }
            d = b.children();
            1 == d.length && d.is("p, div") && (b = d);
            return b.html()
        },
        watchEditorHeight: function() {
            var b = this.ed,
                a = this;
            e(k).onPassive("resize", function() {
                var c = a.getHeightLimits();
                b.opts.heightMin = c[0];
                b.opts.heightMax = c[1];
                b.size.refresh();
                XF.layoutChange()
            });
            b.events.on("focus", function() {
                a.scrollToCursorAfterPendingResize()
            });
            var d = b.$wp.height(),
                c = function() {
                    var a = b.$wp.height();
                    d != a && (d = a, XF.layoutChange())
                };
            b.events.on("keyup", c);
            b.events.on("commands.after", c);
            b.events.on("html.set", c);
            b.events.on("init", c);
            b.events.on("initialized", c)
        },
        getHeightLimits: function() {
            var b = this.options.maxHeight,
                a = this.options.minHeight,
                d = null,
                c = null;
            this.$target.closest(".overlay").length && (b = .1);
            b && (d = e(k).height(), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (d -= 250), d = Math.floor(0 < b ? 1 >= b ? d * b : b : d + b), d = Math.max(d, 150));
            a && d && (c = Math.min(a, d), c == d && --c);
            return [c, d]
        },
        setupUploads: function() {
            var b = this,
                a = this.ed;
            a.events.on("file.uploaded", function(a) {
                this.popups.hide("file.insert");
                this.events.focus();
                return b.handleUploadSuccess(a)
            });
            a.events.on("file.error", function(a, d) {
                this.popups.hide("file.insert");
                b.handleUploadError(a, d);
                this.events.focus();
                return !1
            });
            this.uploadUrl || (a.events.on("image.beforeUpload", function() {
                return !1
            }), a.events.on("file.beforeUpload", function() {
                return !1
            }), a.events.on("video.beforeUpload", function() {
                return !1
            }));
            a.events.on("image.error", function(a, d) {
                if (d) return this.popups.hide("image.insert"), b.handleUploadError(a, d), !1
            });
            a.events.on("video.error", function(a, d) {
                if (d) return this.popups.hide("video.insert"), b.handleUploadError(a, d), !1
            });
            a.events.on("image.uploaded", function(c) {
                return b.handleUploadSuccess(c, function() {
                    a.image.remove();
                    a.popups.hide("image.insert");
                    a.events.focus();
                    return !1
                }, function() {
                    return !0
                })
            });
            a.events.on("video.uploaded", function(c) {
                return b.handleUploadSuccess(c, function() {
                    a.video.remove();
                    a.popups.hide("video.insert");
                    a.events.focus();
                    return !1
                }, function() {
                    return !0
                })
            });
            var d = function(a, b) {
                if (b) {
                    try {
                        var c = e.parseJSON(b)
                    } catch (m) {
                        return
                    }
                    a.hasClass("fr-video") && (a = a.find("video"), a.attr("data-xf-init", "video-init").attr("style", "").empty());
                    if (c.attachment) {
                        c = c.attachment.attachment_id;
                        b = a[0].attributes;
                        for (var d = /^data-(?!xf-init)/, f = b.length - 1; 0 <= f; f--) d.test(b[f].nodeName) && a.removeAttr(b[f].nodeName);
                        a.attr("data-attachment", "full:" + c)
                    }
                }
            };
            a.events.on("image.inserted video.inserted", d);
            a.events.on("image.replaced video.replaced", d);
            a.events.on("image.loaded", function(c) {
                if (a.popups.isVisible("image.edit")) {
                    var d = a.image.get();
                    d && d[0] == c[0] && (a.image.exitEdit(!0), d = a.selection.ranges(0), d.setStartAfter(c[0]), d.collapse(!0), c = a.selection.get(), c.removeAllRanges(), c.addRange(d), a.events.focus(), b.scrollToCursor())
                }
            });
            a.events.on("video.loaded", function(c) {
                if (a.popups.isVisible("video.edit")) {
                    var d = a.video.get();
                    d && d[0] == c[0] && (a.events.trigger("video.hideResizer"), a.popups.hide("video.edit"), d = a.selection.ranges(0), d.setStartAfter(c[0]), d.collapse(!0), c = a.selection.get(), c.removeAllRanges(), c.addRange(d), a.events.focus(), b.scrollToCursor())
                }
            });
            a.events.on("popups.show.image.edit", function() {
                var b = a.image.get();
                b.length && b.hasClass("smilie") && (a.image.exitEdit(!0), a.selection.save(), setTimeout(function() {
                    a.selection.restore()
                }, 0))
            })
        },
        handleUploadSuccess: function(b, a, d) {
            try {
                var c = e.parseJSON(b)
            } catch (f) {
                c = {
                    status: "error",
                    errors: [XF.phrase("oops_we_ran_into_some_problems")]
                }
            }
            return c.status && "error" == c.status ? (XF.alert(c.errors[0]), a ? a(c) : !1) : (b = this.getAttachmentManager()) && c.attachment ? (b.insertUploadedRow(c.attachment), d ? d(c, b) : !1) : !1
        },
        handleUploadError: function(b, a) {
            try {
                var d = e.parseJSON(a)
            } catch (c) {
                d = null
            }
            d && d.errors || (d = {
                status: "error",
                errors: [XF.phrase("oops_we_ran_into_some_problems")]
            });
            XF.alert(d.errors[0])
        },
        getAttachmentManager: function() {
            var b = this.$target.closest("[data-xf-init~=attachment-manager]");
            return b && b.length ? XF.Element.getHandler(b, "attachment-manager") : null
        },
        isBbCodeView: function() {
            return this.ed.bbCode && this.ed.bbCode.isBbCodeView ? this.ed.bbCode.isBbCodeView() : !1
        },
        insertContent: function(b, a) {
            var d = this.ed;
            this.isBbCodeView() ? "undefined" !== typeof a && d.bbCode.insertBbCode(a) : (this.focus(), d.html.insert(b), XF.Element.initialize(d.$el));
            this.scrollToCursor();
            this.scrollToCursorAfterPendingResize()
        },
        replaceContent: function(b, a) {
            var d = this.ed;
            this.isBbCodeView() ? "undefined" !== typeof a && d.bbCode.replaceBbCode(a) : d.html.set(b)
        },
        scrollToCursor: function() {
            var b = this.ed;
            if (this.isBbCodeView()) b.bbCode.getTextArea().autofocus(), b.$box[0].scrollIntoView(!0);
            else {
                this.focus();
                var a = b.$box,
                    d = b.$wp,
                    c = b.selection.endElement(),
                    e = c.getBoundingClientRect().bottom,
                    h = !0,
                    g = XF.windowHeight();
                XF.browser.ios && (g -= 250);
                if (0 > e || e >= g) h = !1;
                if (d && h) {
                    var l = d[0].getBoundingClientRect();
                    if (e > l.bottom || e < l.top) h = !1
                }
                if (!h) {
                    e = a[0].getBoundingClientRect();
                    if (0 > e.top || e.bottom >= g) XF.browser.ios || a.addClass("is-scrolling-to"), a[0].scrollIntoView(!0), a.removeClass("is-scrolling-to");
                    d ? (a = b.position.getBoundingRect().top, a > d.offset().top - b.helpers.scrollTop() + d.height() - 50 && d.scrollTop(a + d.scrollTop() - (d.height() + d.offset().top) + b.helpers.scrollTop() + g / 2)) : c.scrollIntoView()
                }
            }
        },
        scrollToCursorAfterPendingResize: function(b) {
            var a = this,
                d = this.ed,
                c, f = function() {
                    e(k).off("resize", f);
                    e(k).on("scroll", h);
                    c && clearTimeout(c);
                    c = setTimeout(g, 500)
                },
                h = function() {
                    c && clearTimeout(c);
                    c = setTimeout(g, 100)
                },
                g = function() {
                    e(k).off("scroll", h);
                    d.core.hasFocus() && a.scrollToCursor()
                };
            e(k).on("resize", f);
            setTimeout(function() {
                e(k).off("resize", f)
            }, 2E3);
            b && (c = setTimeout(g, 1E3))
        },
        base64ToBytes: function(b, a) {
            a = a || 512;
            b = atob(b);
            for (var d = [], c = 0; c < b.length; c += a) {
                for (var e = b.slice(c, c + a), h = Array(e.length), g = 0; g < e.length; g++) h[g] = e.charCodeAt(g);
                e = new Uint8Array(h);
                d.push(e)
            }
            return d
        },
        editorSupportsUploads: function() {
            return -1 !== this.ed.opts.imageInsertButtons.indexOf("imageUpload")
        },
        imageMatchesBase64Encoding: function(b) {
            return b.attr("src").match(/^data:(image\/([a-z0-9]+));base64,(.*)$/)
        },
        replaceBase64ImageWithUpload: function(b) {
            if (!b.hasClass("smilie")) {
                var a;
                if (a = this.imageMatchesBase64Encoding(b)) {
                    var d = a[1];
                    var c = a[2];
                    a = a[3]; - 1 === this.ed.opts.imageAllowedTypes.indexOf(c) ? b[0].remove() : this.editorSupportsUploads() ? (b = new Blob(this.base64ToBytes(a), {
                        type: d
                    }), 1024 < b.size && this.ed.image.upload([b])) : b[0].remove()
                }
            }
        },
        isInitialized: function() {
            return this.ed ? !0 : !1
        }
    });
    XF.EditorButtons = XF.create({
        xfEd: null,
        buttonClasses: null,
        toolbars: {},
        dropdowns: {},
        removeButtons: null,
        recalculateNeeded: !0,
        __construct: function(b, a, d) {
            this.xfEd = b;
            this.removeButtons = [];
            a && (this.toolbars = a);
            d && (this.dropdowns = d)
        },
        addToolbar: function(b, a) {
            this.toolbars[b] = a;
            this.recalculateNeeded = !0
        },
        adjustToolbar: function(b, a) {
            var d = this.toolbars[b];
            return d ? (this.toolbars[b] = a(d, b, this), this.recalculateNeeded = !0) : !1
        },
        adjustToolbars: function(b) {
            for (var a in this.toolbars) this.toolbars.hasOwnProperty(a) && this.adjustToolbar(a, b)
        },
        getToolbar: function(b) {
            return this.getToolbars()[b]
        },
        getToolbars: function() {
            this.recalculateIfNeeded();
            if (XF.EditorHelpers.isPreviewAvailable(this.xfEd.$target))
                for (var b in this.toolbars) this.toolbars.hasOwnProperty(b) && (this.toolbars[b].preview = {
                    buttons: ["xfPreview"],
                    align: "right"
                });
            return this.toolbars
        },
        addDropdown: function(b, a) {
            this.dropdowns[b] = a;
            this.recalculateNeeded = !0
        },
        adjustDropdown: function(b, a) {
            var d = this.dropdowns[b];
            return d ? (this.dropdowns[b] = a(d, b, this), this.recalculateNeeded = !0) : !1
        },
        adjustDropdowns: function(b) {
            for (var a in this.dropdowns) this.dropdowns.hasOwnProperty(a) && this.adjustDropdown(a, b)
        },
        getDropdown: function(b) {
            return this.getDropdowns()[b]
        },
        getDropdowns: function() {
            this.recalculateIfNeeded();
            return this.dropdowns
        },
        addRemovedButton: function(b) {
            this.removeButtons.push(b);
            this.recalculateNeeded = !0
        },
        addRemovedButtons: function(b) {
            for (var a = 0; a < b.length; a++) this.removeButtons.push(b[a]);
            this.recalculateNeeded = !0
        },
        recalculateIfNeeded: function() {
            this.recalculateNeeded && this.recalculate()
        },
        recalculate: function() {
            function b(a, b) {
                if (!a.filter) return [];
                "string" == typeof b && d[b] && (b = d[b]);
                "string" == typeof b && (b = b.split("|"));
                return a.filter(function(a) {
                    return !(0 <= b.indexOf(a))
                })
            }
            var a = this.removeButtons,
                d = this.getButtonClasses(),
                c, e, h, g;
            for (g = 0; g < a.length; g++) {
                var l = a[g];
                for (c in this.toolbars)
                    if (this.toolbars.hasOwnProperty(c))
                        for (h in this.toolbars[c]) this.toolbars[c].hasOwnProperty(h) && (this.toolbars[c][h].buttons = b(this.toolbars[c][h].buttons, l));
                for (e in this.dropdowns) this.dropdowns.hasOwnProperty(e) && (this.dropdowns[e] = b(this.dropdowns[e], l))
            }
            for (e in this.dropdowns)
                if (this.dropdowns.hasOwnProperty(e) && !this.dropdowns[e].length)
                    for (c in this.toolbars)
                        if (this.toolbars.hasOwnProperty(c))
                            for (h in this.toolbars[c]) this.toolbars[c].hasOwnProperty(h) && (this.toolbars[c][h].buttons = b(this.toolbars[c][h].buttons, e));
            this.recalculateNeeded = !1
        },
        getButtonClasses: function() {
            this.buttonClasses || (this.buttonClasses = {
                _basic: ["bold", "italic", "underline", "strikeThrough"],
                _extended: ["textColor", "fontFamily", "fontSize", "xfInlineCode", "paragraphFormat"],
                _link: ["insertLink"],
                _align: ["align", "alignLeft", "alignCenter", "alignRight", "alignJustify"],
                _list: ["formatOL", "formatUL", "outdent", "indent"],
                _indent: ["outdent", "indent"],
                _smilies: ["xfSmilie"],
                _image: ["insertImage", "xfInsertGif"],
                _media: ["insertVideo", "xfMedia"],
                _block: "xfQuote xfCode xfSpoiler xfInlineSpoiler insertTable insertHR".split(" ")
            });
            return this.buttonClasses
        }
    });
    XF.EditorHelpers = {
        toolbarSizes: {
            SM: 420,
            MD: 550,
            LG: 800
        },
        setupBlurSelectionWatcher: function(b) {
            var a = b.$el,
                d = !1,
                c;
            e(p).on("mousedown keydown", function(a) {
                d && (b.$el[0] == a.target || e.contains(b.$el[0], a.target) || b.selection.inEditor() && (c = b.selection.ranges(0)))
            });
            b.events.on("blur", function() {
                b.$box.removeClass("is-focused");
                c ? a.data("xf-ed-blur-sel", c) : a.removeData("xf-ed-blur-sel");
                d = !1;
                c = null
            }, !0);
            b.events.on("focus", function() {
                b.$box.addClass("is-focused");
                d = !0;
                c = null;
                setTimeout(function() {
                    a.removeData("xf-ed-blur-sel")
                }, 0)
            });
            b.events.on("commands.before", function(a) {
                (a = FroalaEditor.COMMANDS[a]) && ("undefined" == typeof a.focus || a.focus) && XF.EditorHelpers.restoreMaintainedSelection(b)
            })
        },
        restoreMaintainedSelection: function(b) {
            var a = b.$el.data("xf-ed-blur-sel");
            b.selection.inEditor() || (a ? (b.markers.remove(), b.markers.place(a, !0, 0), b.markers.place(a, !1, 0)) : b.selection.setAtEnd(b.el), b.selection.restore())
        },
        focus: function(b) {
            XF.EditorHelpers.restoreMaintainedSelection(b);
            b.$tb.addClass("is-focused");
            b.events.focus()
        },
        blur: function(b) {
            b.$el[0].blur();
            b.$tb.removeClass("is-focused");
            b.selection.clear()
        },
        sync: function(b) {
            b.$oel.val(b.html.get())
        },
        wrapSelectionText: function(b, a, d, c) {
            c && b.selection.save();
            c = b.$el.find(".fr-marker");
            c.first().before(XF.htmlspecialchars(a));
            c.last().after(XF.htmlspecialchars(d));
            b.selection.restore();
            b.placeholder.hide()
        },
        insertCode: function(b, a, d) {
            switch (a.toLowerCase()) {
                case "":
                    var c = "CODE";
                    a = "";
                    break;
                default:
                    c = "CODE", a = a.toLowerCase()
            }
            d = d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\t/g, "    ").replace(/\n /g, "\n&nbsp;").replace(/  /g, "&nbsp; ").replace(/  /g, " &nbsp;").replace(/\n/g, "</p><p>");
            d = "[" + c + (a ? "=" + a : "") + "]" + d + "[/" + c + "]";
            d.match(/<\/p>/i) && (d = ("<p>" + d + "</p>").replace(/<p><\/p>/g, "<p><br></p>"));
            b.html.insert(d)
        },
        insertSpoiler: function(b, a) {
            XF.EditorHelpers.wrapSelectionText(b, a ? '[SPOILER="' + a + '"]' : "[SPOILER]", "[/SPOILER]", !0)
        },
        isPreviewAvailable: function(b) {
            return !b.data("preview-url") && !b.closest("form").data("preview-url") || !1 === b.data("preview") ? !1 : !0
        },
        dialogs: {},
        loadDialog: function(b, a) {
            var d = XF.EditorHelpers.dialogs;
            d[a] ? d[a].show(b) : console.error("Unknown dialog '" + a + "'")
        }
    };
    XF.EditorDialog = XF.create({
        ed: null,
        overlay: null,
        dialog: null,
        cache: !0,
        __construct: function(b) {
            this.dialog = b
        },
        show: function(b) {
            this.ed = b;
            b.selection.save();
            XF.loadOverlay(XF.canonicalizeUrl("index.php?editor/dialog&dialog=" + this.dialog), {
                beforeShow: XF.proxy(this, "beforeShow"),
                afterShow: XF.proxy(this, "afterShow"),
                init: XF.proxy(this, "init"),
                cache: this.cache
            })
        },
        init: function(b) {
            var a = this;
            b.on("overlay:hidden", function() {
                a.ed && a.ed.markers.remove()
            });
            this._init(b)
        },
        _init: function(b) {},
        beforeShow: function(b) {
            this.overlay = b;
            this._beforeShow(b)
        },
        _beforeShow: function(b) {},
        afterShow: function(b) {
            this._afterShow(b);
            b.$overlay.find("textarea, input").first().focus()
        },
        _afterShow: function(b) {}
    });
    XF.EditorDialogMedia = XF.extend(XF.EditorDialog, {
        _beforeShow: function(b) {
            e("#editor_media_url").val("")
        },
        _init: function(b) {
            e("#editor_media_form").submit(XF.proxy(this, "submit"))
        },
        submit: function(b) {
            b.preventDefault();
            var a = this.ed,
                d = this.overlay;
            XF.ajax("POST", XF.canonicalizeUrl("index.php?editor/media"), {
                url: e("#editor_media_url").val()
            }, function(b) {
                b.matchBbCode ? (a.selection.restore(), a.html.insert(XF.htmlspecialchars(b.matchBbCode)), d.hide()) : b.noMatch ? XF.alert(b.noMatch) : (a.selection.restore(), d.hide())
            })
        }
    });
    XF.EditorDialogSpoiler = XF.extend(XF.EditorDialog, {
        _beforeShow: function(b) {
            e("#editor_spoiler_title").val("")
        },
        _init: function(b) {
            e("#editor_spoiler_form").submit(XF.proxy(this, "submit"))
        },
        submit: function(b) {
            b.preventDefault();
            b = this.ed;
            var a = this.overlay;
            b.selection.restore();
            XF.EditorHelpers.insertSpoiler(b, e("#editor_spoiler_title").val());
            a.hide()
        }
    });
    XF.EditorDialogCode = XF.extend(XF.EditorDialog, {
        _beforeShow: function(b) {
            this.ed.$el.blur()
        },
        _afterShow: function(b) {
            b = b.$container;
            var a = b.find(".CodeMirror"),
                d = this.ed;
            b.find('[data-xf-init~="code-editor-switcher-container"]').trigger("code-editor:reinit");
            if (a.length) var c = a[0].CodeMirror;
            d.selection.isCollapsed() ? a = "" : (a = d.html.getSelected().replace(/&nbsp;/gmi, " ").replace(/\u200B/g, "").replace(/(<\/(p|div|pre|blockquote|h[1-6]|tr|th|ul|ol|li)>)\s*/gi, "$1\n").replace(/<(li|p)><br><\/\1>\s*/gi, "\n").replace(/<br>\s*/gi, "\n"), a = e("<div>").html(e.parseHTML(a)).text().trim());
            d.selection.save();
            c ? (c.getDoc().setValue(a), c.focus()) : b.find(".js-codeEditor").val(a).focus()
        },
        _init: function(b) {
            e("#editor_code_form").submit(XF.proxy(this, "submit"))
        },
        submit: function(b) {
            b.preventDefault();
            b = this.ed;
            var a = this.overlay,
                d = a.$container.find(".CodeMirror");
            if (d.length) {
                d = d[0].CodeMirror;
                var c = d.getDoc();
                d.save();
                c.setValue("");
                d.setOption("mode", "")
            }
            d = e("#editor_code_type");
            c = e("#editor_code_code");
            b.selection.restore();
            XF.EditorHelpers.insertCode(b, d.val(), c.val());
            a.hide();
            c.val("");
            d.val("")
        }
    });
    XF.editorStart = {
        started: !1,
        custom: [],
        startAll: function() {
            XF.editorStart.started || (XF.editorStart.setupLanguage(), XF.editorStart.registerOverrides(), XF.editorStart.registerToolbarSizes(), XF.editorStart.registerCommands(), XF.editorStart.registerCustomCommands(), XF.editorStart.registerEditorDropdowns(), XF.editorStart.registerDialogs(), e(p).trigger("editor:first-start"), XF.editorStart.started = !0)
        },
        setupLanguage: function() {
            var b = e("html").attr("dir");
            try {
                var a = e.parseJSON(e(".js-editorLanguage").first().html()) || {}
            } catch (d) {
                console.error(d), a = {}
            }
            FroalaEditor.LANGUAGE.xf = {
                translation: a,
                direction: b ? b.toLowerCase() : "ltr"
            }
        },
        registerOverrides: function() {
            var b = FroalaEditor.MODULES.helpers;
            FroalaEditor.MODULES.helpers = function(a) {
                var d = b.apply(this, arguments),
                    c = d.sanitizeURL;
                d.sanitizeURL = function(a) {
                    return c(a).replace(/["]/g, "%22").replace(/[']/g, "%27")
                };
                d.screenSize = function() {
                    function b(b, c) {
                        a.$box.data("size", c);
                        return FroalaEditor[FroalaEditor.hasOwnProperty(c) ? c : "LG"]
                    }
                    try {
                        var c = a.$box.width(),
                            d = XF.EditorHelpers.toolbarSizes;
                        if (0 >= c)
                            for (var e = a.$box[0]; e = e.parentNode;)
                                if (c = e.clientWidth, 0 < c) {
                                    var m = k.getComputedStyle(e);
                                    c -= parseInt(m.paddingLeft, 10) + parseInt(m.paddingRight, 10);
                                    if (0 < c) break
                                }
                        return c < d.SM ? b(c, "XS") : c < d.MD ? b(c, "SM") : c < d.LG ? b(c, "MD") : c < d.LG + 50 ? b(c, "LG") : b(c, "XL")
                    } catch (v) {
                        return b(c, "XS")
                    }
                };
                return d
            }
        },
        registerToolbarSizes: function() {
            try {
                var b = e.parseJSON(e(".js-editorToolbarSizes").first().html()) || {}
            } catch (a) {
                console.error("Toolbar sizes data not valid: ", a);
                return
            }
            XF.EditorHelpers.toolbarSizes = b
        },
        commands: {
            xfQuote: ["quote-right", {
                title: "Quote",
                icon: "xfQuote",
                undo: !0,
                focus: !0,
                callback: function() {
                    this.selection.save();
                    this.html.wrap(!0, !0, !0, !0);
                    this.selection.restore();
                    var b = this.selection.blocks(),
                        a = [],
                        d = !0,
                        c, f;
                    1 == b.length && e(b[0]).is(".fr-temp-div") && (b = [e(this.el).find("p").get(0)]);
                    for (c = 0; c < b.length; c++) {
                        var h = f = b[c],
                            g = null;
                        for ("BLOCKQUOTE" == f.tagName && (g = f); f.parentNode && f.parentNode !== this.el;) f = f.parentNode, g || "BLOCKQUOTE" != f.tagName || (g = f);
                        f = {
                            original: h,
                            quote: g,
                            root: f
                        };
                        f.quote && (d = !1);
                        a.push(f)
                    }
                    this.selection.save();
                    if (d)
                        for (b = e(p.createElement("blockquote")), b.insertBefore(a[0].root), c = 0; c < a.length; c++) b.append(a[c].root);
                    else
                        for (c = 0; c < a.length; c++)(b = a[c].quote) && e(b).replaceWith(b.innerHTML);
                    this.html.unwrap();
                    this.selection.restore()
                }
            }],
            xfCode: ["code", {
                title: "Code",
                icon: "xfCode",
                undo: !0,
                focus: !0,
                callback: function() {
                    XF.EditorHelpers.loadDialog(this, "code")
                }
            }],
            xfInlineCode: ["terminal", {
                title: "Inline Code",
                icon: "xfInlineCode",
                undo: !0,
                focus: !0,
                callback: function() {
                    XF.EditorHelpers.wrapSelectionText(this, "[ICODE]", "[/ICODE]", !0)
                }
            }],
            xfMedia: ["photo-video", {
                title: "Media",
                icon: "xfMedia",
                undo: !0,
                focus: !0,
                callback: function() {
                    XF.EditorHelpers.loadDialog(this, "media")
                }
            }],
            xfSpoiler: ["eye-slash", {
                title: "Spoiler",
                icon: "xfSpoiler",
                undo: !0,
                focus: !0,
                callback: function() {
                    XF.EditorHelpers.loadDialog(this, "spoiler")
                }
            }],
            xfInlineSpoiler: ["mask", {
                title: "Inline Spoiler",
                icon: "xfInlineSpoiler",
                undo: !0,
                focus: !0,
                callback: function() {
                    XF.EditorHelpers.wrapSelectionText(this, "[ISPOILER]", "[/ISPOILER]", !0)
                }
            }],
            xfSmilie: ["smile", {
                title: "Smilies",
                icon: "xfSmilie",
                undo: !1,
                focus: !1,
                refreshOnCallback: !1,
                callback: function() {
                    var b = this;
                    setTimeout(function() {
                        b.xfSmilie.showMenu()
                    }, 0)
                }
            }],
            xfInsertGif: ["xfInsertGif", {
                title: "Insert GIF",
                icon: "xfInsertGif",
                undo: !1,
                focus: !1,
                refreshOnCallback: !1,
                callback: function() {
                    var b = this;
                    setTimeout(function() {
                        b.xfInsertGif.showMenu()
                    }, 0)
                }
            }],
            xfDraft: ["save", {
                type: "dropdown",
                title: "Drafts",
                focus: !0,
                undo: !1,
                options: {
                    xfDraftSave: "Save Draft",
                    xfDraftDelete: "Delete Draft"
                },
                callback: function(b, a) {
                    b = e(this.$el.closest("form"));
                    b.length ? (b = XF.Element.getHandler(b, "draft")) ? "xfDraftSave" == a ? b.triggerSave() : "xfDraftDelete" == a && b.triggerDelete() : console.error("No draft handler on parent form") : console.error("No parent form to find draft handler")
                }
            }],
            xfBbCode: ["brackets", {
                title: "Toggle BB Code",
                icon: "xfBbCode",
                undo: !1,
                focus: !1,
                forcedRefresh: !0,
                callback: function() {
                    this.bbCode.toggle()
                }
            }],
            xfPreview: ["file-search", {
                title: "Preview",
                icon: "xfPreview",
                undo: !1,
                focus: !1,
                forcedRefresh: !0,
                callback: function() {
                    this.contentPreview.toggle()
                }
            }]
        },
        registerCommands: function() {
            var b;
            FroalaEditor.PLUGINS.xfInsertGif = function(a) {
                function b() {
                    if (k.IntersectionObserver) {
                        var a = new IntersectionObserver(f, {
                            root: r[0],
                            rootMargin: "0px 0px 100px 0px"
                        });
                        r.find(".js-gif img:not(.js-observed)").each(function() {
                            e(this).addClass("js-observed");
                            a.observe(this)
                        });
                        var b = new IntersectionObserver(h, {
                            root: r[0],
                            rootMargin: "0px 0px 50px 0px"
                        });
                        r.find(".js-gifLoadMore").each(function() {
                            b.observe(this)
                        })
                    } else r.onPassive("scroll", g);
                    r.find(".js-gif").on("click", c)
                }

                function c(b) {
                    b = e(b.currentTarget).find("img");
                    var c = b.parent();
                    if (!c.hasClass("is-loading")) {
                        c.addClass("is-loading");
                        var d = b.data("insert"),
                            f = e("<img />").attr("src", d).attr("class", "fr-fic fr-dii fr-draggable").attr("alt", b.attr("alt"));
                        b = function() {
                            a.selection.restore();
                            XF.EditorHelpers.focus(a);
                            a.html.insert(f.prop("outerHTML"));
                            a.selection.save();
                            XF.EditorHelpers.blur(a);
                            q && q.find(".js-gifCloser").click();
                            c.removeClass("is-loading")
                        };
                        if (f.prop("complete")) b();
                        else f.on("load", b)
                    }
                }

                function f(a, b) {
                    for (b = 0; b < a.length; b++) {
                        var c = a[b];
                        var d = e(c.target);
                        if (c.isIntersecting) m(d);
                        else if (c = d, c.data("loaded")) {
                            d = c.attr("data-src");
                            var f = c.attr("src");
                            c.attr("src", d);
                            c.attr("data-src", f);
                            c.data("loaded", !1)
                        }
                    }
                }

                function h(a, b) {
                    for (var c, d, f = 0; f < a.length; f++) c = a[f], c.isIntersecting && (d = e(c.target), l(d), b.unobserve(c.target))
                }

                function g(a) {
                    var b = a;
                    a instanceof Event && (b = e(a.currentTarget));
                    if (b.is(":visible")) {
                        var c = b[0].getBoundingClientRect(),
                            d = c.bottom + 100;
                        b.children().each(function() {
                            var a = e(this),
                                b = this.getBoundingClientRect();
                            if (!(b.bottom < c.top)) {
                                if (b.top > d) return !1;
                                a.find(".js-gif img").each(function() {
                                    var a = e(this);
                                    this.getBoundingClientRect().top <= d && m(a)
                                })
                            }
                        })
                    }
                }

                function l(a) {
                    a.data("loading") || (a.data("loading", !0), XF.ajax("GET", a.data("href"), function(c) {
                        c.html && XF.setupHtmlInsert(c.html, function(c) {
                            (c.is(".js-gifContainer") ? e(c.html()) : e(c.find(".js-gifContainer").html())).insertAfter(a);
                            a.remove();
                            b()
                        })
                    }))
                }

                function m(a) {
                    if (!a.data("loaded")) {
                        var b = a.attr("data-src"),
                            c = a.attr("src");
                        a.attr("src", b);
                        a.attr("data-src", c);
                        a.data("loaded", !0)
                    }
                }

                function v() {
                    var a = e(this),
                        c = q.find(".js-gifFullRow"),
                        d = q.find(".js-gifSearchRow");
                    clearTimeout(w);
                    w = setTimeout(function() {
                        var e = a.val();
                        if (!e || 2 > e.length) d.hide(), c.show(), g(c);
                        else {
                            var f = XF.canonicalizeUrl("index.php?editor/insert-gif/search");
                            XF.ajax("GET", f, {
                                q: e
                            }, function(a) {
                                a.html && XF.setupHtmlInsert(a.html, function(a) {
                                    c.hide();
                                    d.html(a);
                                    d.show();
                                    r.scrollTop(0);
                                    b()
                                })
                            })
                        }
                    }, 300)
                }
                var n = !1,
                    t = !1,
                    q, r, p = 0,
                    w;
                return {
                    showMenu: function() {
                        a.selection.save();
                        XF.EditorHelpers.blur(a);
                        var c = e(a.$tb.find('.fr-command[data-cmd="xfInsertGif"]')).first();
                        if (!n) {
                            n = !0;
                            var d = e.trim(e(".js-xfEditorMenu").first().html());
                            q = e(e.parseHTML(Mustache.render(d, {
                                href: XF.canonicalizeUrl("index.php?editor/insert-gif")
                            })));
                            q.addClass("menu--gif");
                            q.insertAfter(c);
                            c.data("xf-click", "menu");
                            var f = XF.Event.getElementHandler(c, "menu", "click");
                            q.on("menu:complete", function() {
                                r = q.find(".menu-scroller");
                                t || (t = !0, b(), q.find(".js-gifSearch").on("input", v), q.find(".js-gifCloser").on("click", function() {
                                    XF.EditorHelpers.focus(a)
                                }), a.events.on("commands.mousedown", function(a) {
                                    "xfInsertGif" != a.data("cmd") && f.close()
                                }), q.on("menu:closed", function() {
                                    p = r.scrollTop()
                                }));
                                r.scrollTop(p);
                                k.IntersectionObserver || g(r)
                            });
                            q.on("menu:closed", function() {
                                setTimeout(function() {
                                    a.markers.remove()
                                }, 50)
                            })
                        }(c = c.data("xfClickHandlers")) && c.menu && c.menu.toggle()
                    }
                }
            };
            FroalaEditor.PLUGINS.xfSmilie = function(a) {
                function b(b) {
                    var c = e(b.currentTarget);
                    b = c.html();
                    if (!e(b).hasClass("smilie--lazyLoad")) {
                        a.selection.restore();
                        XF.EditorHelpers.focus(a);
                        a.html.insert(b);
                        a.selection.save();
                        XF.EditorHelpers.blur(a);
                        if (n) {
                            var d = n.find(".js-emojiInsertedRow");
                            d.find(".js-emojiInsert").html(b);
                            d.addClassTransitioned("is-active");
                            clearTimeout(r);
                            r = setTimeout(function() {
                                d.removeClassTransitioned("is-active")
                            }, 1500)
                        }
                        clearTimeout(u);
                        u = setTimeout(function() {
                            XF.logRecentEmojiUsage(c.data("shortname"))
                        }, 1500)
                    }
                }

                function c(a, b) {
                    for (var c, d, f = 0; f < a.length; f++) c = a[f], c.isIntersecting && (d = e(c.target), h(d), b.unobserve(c.target))
                }

                function f(a, b) {
                    var c = a;
                    a instanceof Event && (c = e(a.currentTarget));
                    if (b || c.is(":visible")) {
                        var d = c[0].getBoundingClientRect(),
                            f = d.bottom + 100;
                        c.children().each(function() {
                            var a = e(this),
                                b = this.getBoundingClientRect();
                            if (!(b.bottom < d.top)) {
                                if (b.top > f) return !1;
                                a.find("span.smilie--lazyLoad").each(function() {
                                    var a = e(this);
                                    this.getBoundingClientRect().top <= f && h(a)
                                })
                            }
                        })
                    }
                }

                function h(a) {
                    var b = e("<img />").attr({
                            "class": a.attr("class").replace(/(\s|^)smilie--lazyLoad(\s|$)/, " "),
                            alt: a.attr("data-alt"),
                            title: a.attr("title"),
                            src: a.attr("data-src"),
                            "data-shortname": a.attr("data-shortname")
                        }),
                        c = function() {
                            var c = function() {
                                a.replaceWith(b)
                            };
                            k.requestAnimationFrame ? k.requestAnimationFrame(c) : c()
                        };
                    if (b.prop("complete")) c();
                    else b.on("load", c)
                }

                function g() {
                    var a = e(this),
                        c = n.find(".js-emojiFullList"),
                        d = n.find(".js-emojiSearchResults");
                    clearTimeout(w);
                    w = setTimeout(function() {
                        var e = a.val();
                        if (!e || 2 > e.length) d.hide(), c.show(), f(c);
                        else {
                            var g = XF.canonicalizeUrl("index.php?editor/smilies-emoji/search");
                            XF.ajax("GET", g, {
                                q: e
                            }, function(a) {
                                a.html && XF.setupHtmlInsert(a.html, function(a) {
                                    a.find(".js-emoji").on("click", b);
                                    c.hide();
                                    d.replaceWith(a)
                                })
                            })
                        }
                    }, 300)
                }

                function l() {
                    var a = XF.getRecentEmojiUsage(),
                        c = t.find(".js-recentHeader"),
                        d = t.find(".js-recentBlock"),
                        g = d.find(".js-recentList"),
                        n = t.find(".js-emojiList");
                    if (a) {
                        var h = g.clone(),
                            m = [];
                        h.empty();
                        for (var v in a) {
                            var q = a[v],
                                l;
                            n.each(function() {
                                l = e(this).find('.js-emoji[data-shortname="' + q + '"]').closest("li").clone();
                                if (l.length) return l.find(".js-emoji").on("click", b), m.push(l), !1
                            })
                        }
                        for (v in m) m[v].appendTo(h);
                        g.replaceWith(h);
                        d.hasClass("is-hidden") && (d.hide(), d.removeClass("is-hidden"), c.removeClass("is-hidden"), d.xfFadeDown(XF.config.speed.fast));
                        f(h, !0)
                    }
                }
                var m = !1,
                    v = !1,
                    n, t, q = 0,
                    r, u, w;
                return {
                    showMenu: function() {
                        a.selection.save();
                        XF.EditorHelpers.blur(a);
                        var d = e(a.$tb.find('.fr-command[data-cmd="xfSmilie"]')).first();
                        if (!m) {
                            m = !0;
                            var h = e.trim(e(".js-xfEditorMenu").first().html());
                            n = e(e.parseHTML(Mustache.render(h, {
                                href: XF.canonicalizeUrl("index.php?editor/smilies-emoji")
                            })));
                            n.addClass("menu--emoji");
                            n.insertAfter(d);
                            d.data("xf-click", "menu");
                            var r = XF.Event.getElementHandler(d, "menu", "click");
                            n.on("menu:complete", function() {
                                t = n.find(".menu-scroller");
                                if (!v) {
                                    v = !0;
                                    if (k.IntersectionObserver) {
                                        var d = new IntersectionObserver(c, {
                                            root: t[0],
                                            rootMargin: "0px 0px 100px 0px"
                                        });
                                        t.find("span.smilie--lazyLoad").each(function() {
                                            d.observe(this)
                                        })
                                    } else t.onPassive("scroll", f);
                                    t.find(".js-emoji").on("click", b);
                                    n.find(".js-emojiSearch").on("input", g);
                                    n.find(".js-emojiCloser").on("click", function() {
                                        XF.EditorHelpers.focus(a)
                                    });
                                    e(p).on("recent-emoji:logged", l);
                                    a.events.on("commands.mousedown", function(a) {
                                        "xfSmilie" != a.data("cmd") && r.close()
                                    });
                                    n.on("menu:closed", function() {
                                        q = t.scrollTop()
                                    })
                                }
                                t.scrollTop(q);
                                k.IntersectionObserver || f(t)
                            });
                            n.on("menu:closed", function() {
                                setTimeout(function() {
                                    a.markers.remove()
                                }, 50)
                            })
                        }(d = d.data("xfClickHandlers")) && d.menu && d.menu.toggle()
                    }
                }
            };
            e.extend(FroalaEditor.DEFAULTS, {
                xfBbCodeAttachmentContextInput: "attachment_hash_combined"
            });
            FroalaEditor.PLUGINS.bbCode = function(a) {
                function b() {
                    return a.$tb.find(".fr-command[data-cmd=xfBbCode]")
                }

                function c() {
                    var b = a.$oel,
                        c = b.data("xfBbCodeBox");
                    if (!c) {
                        var d = parseInt(a.$wp.css("border-bottom-width"), 10) + parseInt(a.$wp.css("border-top-width"), 10);
                        c = e('<textarea class="input" style="display: none" />');
                        c.attr("aria-label", XF.htmlspecialchars(XF.phrase("rich_text_box")));
                        c.css({
                            minHeight: a.opts.heightMin ? a.opts.heightMin + d + "px" : null,
                            maxHeight: a.opts.heightMax ? a.opts.heightMax + "px" : null,
                            height: a.opts.height ? a.opts.height + d + "px" : null,
                            padding: a.$el.css("padding")
                        });
                        c.attr("name", b.data("original-name"));
                        b.data("xfBbCodeBox", c);
                        a.$wp.after(c[0]);
                        c.on("focus blur", function(b) {
                            switch (b.type) {
                                case "focus":
                                    a.$box.addClass("is-focused");
                                    break;
                                case "blur":
                                    a.$box.removeClass("is-focused")
                            }
                        });
                        XF.Element.applyHandler(c, "textarea-handler");
                        XF.Element.applyHandler(c, "user-mentioner");
                        XF.Element.applyHandler(c, "emoji-completer");
                        XF.isElementWithinDraftForm(c) && XF.Element.applyHandler(c, "draft-trigger")
                    }
                    return c
                }

                function f(b) {
                    return a.$tb.find("> .fr-btn-grp .fr-command, > .fr-more-toolbar .fr-command").not(b).not('[data-cmd^="more"]').not("[data-cmd=xfPreview]")
                }

                function h(d, e) {
                    var g = c(),
                        h = function(c, d) {
                            l = !0;
                            a.undo.saveStep();
                            a.$el.blur();
                            var e = b();
                            f(e).addClass("fr-disabled");
                            e.addClass("fr-active");
                            a.$wp.css("display", "none");
                            a.$oel.attr("disabled", "disabled");
                            g.val(c).css("display", "").prop("disabled", !1).trigger("autosize");
                            d || g.autofocus();
                            XF.setIsEditorEnabled(!1)
                        };
                    "string" == typeof d ? h(d, e) : XF.ajax("POST", XF.canonicalizeUrl("index.php?editor/to-bb-code"), {
                        html: a.html.get()
                    }, function(a) {
                        h(a.bbCode, e)
                    })
                }

                function g(d) {
                    var g = c(),
                        h = function(c) {
                            l = !1;
                            var d = b();
                            f(d).removeClass("fr-disabled");
                            d.removeClass("fr-active");
                            a.$oel.removeAttr("disabled");
                            a.html.set(c);
                            g.css("display", "none").prop("disabled", !0);
                            a.$wp.css("display", "");
                            a.events.focus();
                            a.undo.saveStep();
                            a.size.refresh();
                            XF.setIsEditorEnabled(!0);
                            XF.layoutChange()
                        };
                    if ("string" == typeof d) h(d);
                    else {
                        d = {
                            bb_code: g.val()
                        };
                        var m = a.$el.closest("form");
                        m.length && m[0][a.opts.xfBbCodeAttachmentContextInput] && (d.attachment_hash_combined = e(m[0][a.opts.xfBbCodeAttachmentContextInput]).val());
                        XF.ajax("POST", XF.canonicalizeUrl("index.php?editor/to-html"), d, function(a) {
                            h(a.editorHtml)
                        })
                    }
                }
                var l = !1;
                return {
                    _init: function() {
                        a.events.on("buttons.refresh", function() {
                            return !l
                        })
                    },
                    getBbCodeBox: c,
                    toBbCode: h,
                    isBbCodeView: function() {
                        return l
                    },
                    getTextArea: function() {
                        return l ? c() : null
                    },
                    insertBbCode: function(a) {
                        if (l) {
                            var b = c();
                            XF.insertIntoTextBox(b, a)
                        }
                    },
                    replaceBbCode: function(a) {
                        if (l) {
                            var b = c();
                            XF.replaceIntoTextBox(b, a)
                        }
                    },
                    toHtml: g,
                    toggle: function() {
                        l ? g() : h()
                    },
                    getToggleableButtons: function() {
                        return f(b())
                    }
                }
            };
            FroalaEditor.PLUGINS.contentPreview = function(a) {
                function b() {
                    return a.$tb.find(".fr-command[data-cmd=xfPreview]")
                }

                function c() {
                    var b = a.$oel,
                        c = b.data("xfPreviewBox");
                    if (!c) {
                        var d = e(a.$el[0]).css(["padding-top", "padding-right", "padding-bottom", "padding-left"]);
                        d.minHeight = a.opts.heightMin ? a.opts.heightMin + "px" : null;
                        c = e('<div class="xfPreview" style="display:none" />');
                        c.css(d);
                        b.data("xfPreviewBox", c);
                        a.$wp.after(c[0])
                    }
                    return c
                }

                function f(b) {
                    return a.$tb.find("> .fr-btn-grp .fr-command").not(b)
                }

                function h(d) {
                    var g = c(),
                        h = function(c) {
                            k = !0;
                            a.undo.saveStep();
                            a.$el.blur();
                            a.$tb.find('.fr-command.fr-open[data-cmd^="more"]').each(function() {
                                a.commands.exec(e(this).attr("data-cmd"))
                            });
                            var d = b();
                            f(d).addClass("fr-disabled fr-invisible");
                            d.addClass("fr-active");
                            a.$tb.find(".fr-btn-grp").addClass("rte-tab--inactive").filter(".rte-tab--preview").removeClass("rte-tab--inactive");
                            a.$box.addClass("is-preview");
                            a.bbCode.isBbCodeView() ? a.bbCode.getBbCodeBox().css("display", "none") : a.$wp.css("display", "none");
                            g.html(c.find(".bbWrapper")).css("display", "")
                        };
                    if ("string" == typeof d) h(e(e.parseHTML(d)));
                    else {
                        a.events.trigger("form.submit");
                        var n = a.$oel.closest("form");
                        d = a.$oel.data("preview-url") ? a.$oel.data("preview-url") : n.data("preview-url");
                        n = XF.getDefaultFormData(n);
                        XF.ajax("POST", XF.canonicalizeUrl(d), n, function(a) {
                            XF.setupHtmlInsert(a.html, function(a) {
                                XF.activate(a);
                                h(a)
                            })
                        })
                    }
                }

                function g(d) {
                    var e = c(),
                        g = b(),
                        h = a.bbCode.isBbCodeView();
                    k = !1;
                    f(g).removeClass("fr-disabled fr-invisible");
                    g.removeClass("fr-active");
                    h && a.bbCode.getToggleableButtons().addClass("fr-disabled");
                    a.$tb.find(".fr-btn-grp").removeClass("rte-tab--inactive").filter(".rte-tab--preview").addClass("rte-tab--inactive");
                    a.$oel.removeAttr("disabled");
                    e.css("display", "none");
                    a.$box.removeClass("is-preview");
                    h ? a.bbCode.getBbCodeBox().css("display", "") : a.$wp.css("display", "");
                    d || a.events.focus();
                    XF.layoutChange()
                }

                function l() {
                    var b = e(a.$oel);
                    XF.EditorHelpers.isPreviewAvailable(b) && (k ? g() : (XF.EditorHelpers.sync(a), (a.bbCode && a.bbCode.isBbCodeView() ? a.bbCode.getBbCodeBox().val() : b.val()) && h()))
                }

                function m() {
                    var b = a.$tb.find(".fr-btn-grp");
                    XF.EditorHelpers.isPreviewAvailable(e(a.$oel)) ? (b.slice(b.length - 1).addClass("rte-tab--inactive rte-tab--preview"), b.slice(b.length - 2, b.length - 1).addClass("rte-tab--beforePreview")) : b.slice(b.length - 1).addClass("rte-tab--beforePreview")
                }
                var k = !1;
                return {
                    _init: function() {
                        a.events.on("buttons.refresh", function() {
                            return !k
                        });
                        m();
                        a.events.on("codeView.toggle", function() {
                            m()
                        });
                        a.$tb.on("click", function(a) {
                            k && (e(a.target).closest(".rte-tab--preview").length || l())
                        });
                        e(a.$tb.closest("form")).on("preview:hide", function() {
                            g(!0)
                        })
                    },
                    toPreview: h,
                    isPreview: function() {
                        return k
                    },
                    toHtml: g,
                    toggle: l
                }
            };
            for (b in this.commands) this.commands.hasOwnProperty(b) && (FroalaEditor.DefineIcon(b, {
                NAME: this.commands[b][0]
            }), FroalaEditor.RegisterCommand(b, this.commands[b][1]))
        },
        registerCustomCommands: function() {
            try {
                var b = e.parseJSON(e(".js-editorCustom").first().html()) || {}
            } catch (d) {
                console.error(d), b = {}
            }
            for (var a in b) b.hasOwnProperty(a) && function(a, b) {
                var c = "xfCustom_" + a,
                    d = a.toUpperCase();
                a = {};
                "fa" == b.type ? a = (a = b.value.match(/^fa([slrb]) fa-(.+)$/)) ? {
                    FA5NAME: a[2],
                    template: "font_awesome_5" + ("s" === a[1] ? "" : a[1])
                } : {
                    NAME: b.value
                } : "svg" == b.type ? a = {
                    template: "svg",
                    PATH: b.value
                } : "image" == b.type && (a = {
                    template: "image",
                    SRC: '"' + XF.canonicalizeUrl(b.value) + '"',
                    ALT: '"' + b.title + '"'
                });
                var e = {
                    title: b.title,
                    icon: c,
                    undo: !0,
                    focus: !0,
                    callback: function() {
                        XF.EditorHelpers.wrapSelectionText(this, "yes" == b.option ? "[" + d + "=]" : "[" + d + "]", "[/" + d + "]", !0)
                    }
                };
                FroalaEditor.DefineIcon(c, a);
                FroalaEditor.RegisterCommand(c, e);
                XF.editorStart.custom.push(c)
            }(a, b[a]);
            FroalaEditor.DefineIcon("xfInsertGif", {
                template: "svg",
                PATH: "M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"
            });
            FroalaEditor.DefineIcon("textColor", {
                NAME: "palette"
            });
            FroalaEditor.DefineIcon("fontFamily", {
                NAME: "font"
            });
            FroalaEditor.DefineIcon("fontSize", {
                NAME: "text-size"
            })
        },
        registerEditorDropdowns: function() {
            try {
                var b = e.parseJSON(e(".js-editorDropdowns").first().html()) || {}
            } catch (d) {
                console.error("Editor dropdowns data not valid: ", d), b = {}
            }
            for (var a in b) b.hasOwnProperty(a) && function(a, b) {
                b.icon = b.icon.substr(3);
                FroalaEditor.DefineIcon(a, {
                    NAME: b.icon
                });
                FroalaEditor.RegisterCommand(a, {
                    type: "dropdown",
                    title: b.title,
                    icon: a,
                    undo: !1,
                    focus: !1,
                    html: function() {
                        var c = '<ul class="fr-dropdown-list">',
                            d = b.buttons,
                            e, k;
                        (e = XF.getEditorInContainer(this.$oel)) && e.buttonManager && (d = e.buttonManager.getDropdown(a));
                        for (var m in d) e = d[m], (k = FroalaEditor.COMMANDS[e]) && (c += '<li><a class="fr-command" data-cmd="' + e + '">' + this.icon.create(k.icon || e) + "&nbsp;&nbsp;" + this.language.translate(k.title) + "</a></li>");
                        return c + "</ul>"
                    }
                })
            }(a, b[a])
        },
        registerDialogs: function() {
            XF.EditorHelpers.dialogs.media = new XF.EditorDialogMedia("media");
            XF.EditorHelpers.dialogs.spoiler = new XF.EditorDialogSpoiler("spoiler");
            XF.EditorHelpers.dialogs.code = new XF.EditorDialogCode("code")
        }
    };
    e(p).one("editor:start", XF.editorStart.startAll);
    XF.EditorPlaceholderClick = XF.Event.newHandler({
        eventNameSpace: "XFEditorPlaceholderClick",
        options: {},
        edInitialized: !1,
        init: function() {},
        click: function(b) {
            b = this.$target;
            var a = this;
            b.find(".editorPlaceholder-editor").removeClass("is-hidden");
            b.find(".editorPlaceholder-placeholder").addClass("is-hidden");
            b = XF.getEditorInContainer(b);
            b instanceof XF.Editor ? this.edInitialized || b.startInit({
                beforeInit: function() {
                    a.edInitialized = !0
                },
                afterInit: function(a, b) {
                    b.events.focus(!0);
                    XF.isIOS() && (a.scrollToCursor(), a.scrollToCursorAfterPendingResize());
                    b.opts.tooltips && setTimeout(function() {
                        b.tooltip.hide()
                    }, 30)
                }
            }) : (displayEditor(), b instanceof e && b.focus())
        }
    });
    XF.Event.register("click", "editor-placeholder", "XF.EditorPlaceholderClick");
    XF.Element.register("editor", "XF.Editor")
}(jQuery, window, document);