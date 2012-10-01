jQuery(document)
  .ready(function() {
  AEGON.init()
});
AEGON.init = function() {
  var L = jQuery(".upgrade-browser")
    .get(0);
  if (AEGON.readCookie && L) {
    var N = AEGON.readCookie("closedBrowserUpgrade");
    if (N) {
      jQuery(L)
        .hide()
    } else {
      var c = jQuery('<a href="" class="close">Sluit deze mededeling</a>');
      jQuery(".wrapper", L)
        .append(c);
      jQuery(c)
        .bind("click", function(i) {
        i.preventDefault();
        AEGON.createCookie("closedBrowserUpgrade", "true");
        jQuery(L)
          .hide();
        return false
      })
    }
  }
  var S = 0;
  var W = jQuery(".dropdown-navigation");
  S = W.length;
  for (var T = S; T--;) {
    new AEGON.DropdownNavigation(W[T])
  }
  var q = jQuery("table.products");
  S = q.length;
  for (var T = S; T--;) {
    this.anchorParents(q[T], "tbody tr", null, "hover")
  }
  var w = jQuery("table.comparison-alt, .comparison-alt table");
  S = w.length;
  for (var T = S; T--;) {
    this.anchorParents(w[T], "tbody tr", null, "hover")
  }
  if (AEGON.ContentTabsControl) {
    var M = jQuery(".box-tabs");
    var y = [];
    S = M.length;
    for (var T = S; T--;) {
      y.push(new AEGON.ContentTabsControl(M[T], "box-tabs-js"))
    }
    jQuery.history.init(function(X) {
      for (var l = y.length; l--;) {
        y[l].loadDefault(X)
      }
    })
  }
  if (AEGON.ContentFoldControl) {
    var s = jQuery(".products-fold");
    S = s.length;
    for (var T = S; T--;) {
      new AEGON.ContentFoldControl(s[T], "products-fold-js")
    }
    s = jQuery(".basic-fold:not(.questions-fold .basic-fold)");
    S = s.length;
    for (var T = S; T--;) {
      new AEGON.ContentFoldControl(s[T], "basic-fold-js")
    }
  }
  if (AEGON.QuestionVotingList) {
    var O = jQuery(".questions-fold, .answer");
    S = O.length;
    for (var T = S; T--;) {
      new AEGON.QuestionVotingList(O[T])
    }
  }
  if (AEGON.SearchFilter) {
    var I = jQuery(".search-filter");
    S = I.length;
    for (var T = S; T--;) {
      new AEGON.SearchFilter(I[T])
    }
  }
  if (AEGON.Poll) {
    var V = jQuery("form.box-poll");
    S = V.length;
    for (var T = S; T--;) {
      new AEGON.Poll(V[T])
    }
  }
  if (AEGON.QuickQuoteAuto) {
    var A = jQuery("form.qq-auto");
    S = A.length;
    for (var T = S; T--;) {
      new AEGON.QuickQuoteAuto(A[T])
    }
  }
  if (AEGON.QuickQuoteReisverzekering) {
    var h = jQuery("form.qq-reisverzekering");
    S = h.length;
    for (var T = S; T--;) {
      new AEGON.QuickQuoteReisverzekering(h[T])
    }
  }
  if (AEGON.QuickQuoteForm) {
    var b = jQuery("form.qq-form");
    S = b.length;
    for (var T = S; T--;) {
      new AEGON.QuickQuoteForm(b[T])
    }
  }
  if (AEGON.Tooltip) {
    var P = jQuery(".tooltip");
    S = P.length;
    for (var T = S; T--;) {
      new AEGON.Tooltip(P[T])
    }
  }
  if (AEGON.Form) {
    var F = jQuery("div.form form");
    S = F.length;
    for (var T = S; T--;) {
      new AEGON.Form(F[T])
    }
  }
  if (AEGON.DossierNavigation) {
    var Q = jQuery(".box-actions-alt-nav")
      .get(0);
    if (Q) {
      new AEGON.DossierNavigation(Q)
    }
  }
  if (AEGON.LightboxManager) {
    var R = jQuery("*[data-lightboxtype='iframe']");
    var S = R.length;
    var v;
    if (AEGON.mq) {
      var C = new AEGON.Resizer(750);
      jQuery(C)
        .bind("resizing", function(l, i) {
        v = i
      });
      C.resize()
    }
    for (var T = S; T--;) {
      if (R[T].tagName !== "FORM") {
        jQuery(R[T])
          .bind("click", function(i) {
          i.preventDefault();
          if (AEGON.mq && v === "smaller") {
            window.open(jQuery(this)
              .attr("href"))
          } else {
            AEGON.LightboxManager.openIframeLightbox(jQuery(this)
              .attr("href"), jQuery(this)
              .attr("data-lightboxwidth"), jQuery(this)
              .attr("data-lightboxheight"))
          }
          return false
        })
      }
    }
  }
  var D = jQuery("input.inputlabel");
  S = D.length;
  for (var T = S; T--;) {
    this.inputLabel(D[T])
  }
  if (AEGON.TickerTape) {
    var n = jQuery(".funds-ticker-tape");
    S = n.length;
    for (var T = S; T--;) {
      new AEGON.TickerTape(n[T])
    }
  }
  if (AEGON.ListLoop) {
    var m = jQuery(".tips ul");
    S = m.length;
    for (var T = S; T--;) {
      new AEGON.ListLoop(m[T])
    }
  }
  if (AEGON.Lifecycles) {
    new AEGON.Lifecycles()
  }
  if (window.Swipe && AEGON.HeaderCarousel) {
    var H = jQuery(".header-carousel");
    new AEGON.HeaderCarousel(H)
  }
  var o = jQuery(".open-content a:not(:has(img))");
  var J = jQuery("div.downloads-box li a, div.downloads-box-alt li a");
  AEGON.setLinkTypeCollection({
    target: "_blank",
    styleClass: "external",
    internal: false,
    external: true,
    title: "Deze link opent een nieuw venster",
    linkCollections: [o]
  });
  AEGON.setLinkTypeCollection({
    extension: "pdf",
    styleClass: "pdf",
    downloadPage: "/?view=Save&url=",
    title: "PDF-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "doc",
    styleClass: "word",
    downloadPage: "/?view=Save&url=",
    title: "Word-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "docx",
    styleClass: "word",
    downloadPage: "/?view=Save&url=",
    title: "Word-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "rtf",
    styleClass: "word",
    downloadPage: "/?view=Save&url=",
    title: "Word-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "xls",
    styleClass: "excel",
    downloadPage: "/?view=Save&url=",
    title: "Excel-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "xlsx",
    styleClass: "excel",
    downloadPage: "/?view=Save&url=",
    title: "Excel-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "ppt",
    styleClass: "powerpoint",
    downloadPage: "/?view=Save&url=",
    title: "Powerpoint-document",
    linkCollections: [o, J]
  });
  AEGON.setLinkTypeCollection({
    extension: "pptx",
    styleClass: "powerpoint",
    downloadPage: "/?view=Save&url=",
    title: "Powerpoint-document",
    linkCollections: [o, J]
  });
  AEGON.addPrint(".addprint");
  if (AEGON.mq) {
    if (AEGON.ResponsiveTable) {
      var x = jQuery(".table-optional-columns");
      S = x.length;
      for (var T = S; T--;) {
        new AEGON.ResponsiveTable(x[T])
      }
    }
    if (AEGON.ResponsiveIFrame) {
      var K = jQuery("iframe");
      S = K.length;
      for (var T = S; T--;) {
        new AEGON.ResponsiveIFrame(K[T])
      }
    }
    if (AEGON.ResponsiveHeader) {
      var g = jQuery("#header");
      new AEGON.ResponsiveHeader(g)
    }
    if (AEGON.ResponsiveProductNav) {
      var z = jQuery(".box-productlinks");
      S = z.length;
      for (var T = S; T--;) {
        new AEGON.ResponsiveProductNav(z[T])
      }
    }
    var f = jQuery("img");
    S = f.length;
    for (var T = S; T--;) {
      var j = jQuery(f[T]);
      j.removeAttr("width");
      j.removeAttr("height")
    }
    var B = jQuery(".sidebar .service-menu");
    if (B.closest("form")
      .length !== 1) {
      var u = new AEGON.Resizer(768);
      jQuery(u)
        .bind("resizing", function(l, i) {
        if (i === "smaller") {
          B.insertAfter(".grid>div:nth-child(1)")
        } else {
          B.prependTo(".sidebar")
        }
      });
      u.resize()
    }
    var G = new AEGON.Resizer(390),
      a = [],
      E, t, T, r = jQuery("div.box-theme");
    jQuery(G)
      .bind("resizing", function(Y, i) {
      if (i === "smaller" && !E && AEGON.ContentFoldControl && r.find("h2")) {
        t = r.length;
        for (T = t; T--;) {
          var l = r.parent()[T],
            X = new AEGON.ContentFoldControl(l, "responsive-fold", true, "h2", "div.box-theme");
          a.push(X)
        }
        E = true
      } else {
        if (i === "bigger") {
          t = a.length;
          for (T = t; T--;) {
            a[T].unload()
          }
          E = false;
          a = []
        }
      }
    });
    G.resize();
    var U = new AEGON.Resizer(350),
      d = [],
      k, t, T, e = jQuery(".sidebar > div > .inner");
    jQuery(U)
      .bind("resizing", function(Y, i) {
      if (i === "smaller" && !k && AEGON.ContentFoldControl && e.find("h2") && !e.parent()
        .hasClass(".profile-box")) {
        t = e.length;
        for (T = t; T--;) {
          var X = e.parent()[T],
            l = new AEGON.ContentFoldControl(X, "responsive-fold", true, "h2", ".inner");
          d.push(l)
        }
        k = true
      } else {
        if (i === "bigger") {
          t = d.length;
          for (T = t; T--;) {
            d[T].unload()
          }
          k = false;
          d = []
        }
      }
    });
    U.resize()
  }
};
AEGON.inputLabel = function(a) {
  var b = jQuery("label[for=" + a.id + "]")
    .get(0);
  if (b) {
    if (a.value != "") {
      jQuery(b)
        .hide()
    }
    jQuery(a)
      .bind("change", function() {
      this.value == "" ? jQuery(b)
        .show() : jQuery(b)
        .hide()
    });
    jQuery(a)
      .bind("blur", function() {
      this.value == "" ? jQuery(b)
        .show() : jQuery(b)
        .hide()
    });
    jQuery(a)
      .bind("focus", function() {
      jQuery(b)
        .hide()
    })
  }
};
AEGON.anchorParents = function(d, c, g, h) {
  var b = jQuery(c, d);
  var a = b.length;
  for (var f = a; f--;) {
    var e = g ? jQuery(g, b[f])[0] : jQuery("a", b[f])[0];
    if (e) {
      jQuery(b[f])
        .bind("click", {
        location: e.href
      }, function(i) {
        document.location = i.data.location
      });
      if (h) {
        jQuery(b[f])
          .bind("mouseover", {
          hoverClass: h
        }, function(i) {
          jQuery(this)
            .addClass(i.data.hoverClass)
        });
        jQuery(b[f])
          .bind("mouseout", {
          hoverClass: h
        }, function(i) {
          jQuery(this)
            .removeClass(i.data.hoverClass)
        })
      }
    }
  }
};
AEGON.addPrint = function(c) {
  var b = jQuery(c);
  var a = b.length;
  for (var d = a; d--;) {
    var f = document.createElement("a");
    f.href = "";
    f.className = "print";
    f.innerHTML = "Printen";
    jQuery(f)
      .bind("click", function() {
      window.print();
      return false
    });
    jQuery(b[d])
      .append(f);
    var e = jQuery("h1", b[d])
      .get(0);
    if (e) {
      jQuery(f)
        .css("top", jQuery(f)
        .position()
        .top + jQuery(e)
        .position()
        .top)
    }
  }
};
AEGON.setLinkTypeCollection = function(g) {
  if (g) {
    var m = g.extension;
    var d = g.styleClass ? g.styleClass : false;
    var k = g.downloadPage ? g.downloadPage : false;
    var f = g.target ? g.target : false;
    var j = g.title ? g.title : false;
    var c = typeof(g.internal) != "undefined" ? g.internal : true;
    var e = typeof(g.external) != "undefined" ? g.external : false;
    var h = g.linkCollections ? g.linkCollections : false;
    if ((m || k || f) && (c || e)) {
      if (h) {
        var a = h.length;
        for (var b = a; b--;) {
          var n = m ? jQuery(h[b])
            .filter("[hrefjQuery='." + m + "']") : h[b];
          AEGON.setLinkType({
            extension: m,
            styleClass: d,
            downloadPage: k,
            target: f,
            title: j,
            internal: c,
            external: e,
            links: n
          })
        }
      } else {
        AEGON.setLinkType({
          extension: m,
          styleClass: d,
          downloadPage: k,
          target: f,
          title: j,
          internal: c,
          external: e,
          links: document.links
        })
      }
    }
  }
};
AEGON.setLinkType = function(h) {
  if (h) {
    var m = h.extension;
    var d = h.styleClass;
    var k = h.downloadPage;
    var g = h.target;
    var j = h.title;
    var c = h.internal;
    var f = h.external;
    var n = h.links;
    if (!c) {
      n = jQuery(n)
        .filter(function() {
        if (jQuery(this)
          .attr("href")) {
          return (!(jQuery(this)
            .attr("href")
            .indexOf(window.location.hostname) >= 0) && (jQuery(this)
            .attr("href")
            .indexOf("http") >= 0 || jQuery(this)
            .attr("href")
            .indexOf("https") >= 0))
        }
      })
    } else {
      if (!f) {
        n = jQuery(n)
          .filter(function() {
          if (jQuery(this)
            .attr("href")) {
            return (!(!(jQuery(this)
              .attr("href")
              .indexOf(window.location.hostname) >= 0) && (jQuery(this)
              .attr("href")
              .indexOf("http") >= 0 || jQuery(this)
              .attr("href")
              .indexOf("https") >= 0)))
          }
        })
      }
    }
    var a = n.length;
    for (var b = a; b--;) {
      if (d) {
        jQuery(n[b])
          .addClass(d)
      }
      if (g) {
        jQuery(n[b])
          .attr("target", g)
      }
      if (k && jQuery(n[b])
        .attr("href")
        .indexOf(k) == -1) {
        var e = this;
        jQuery(n[b])
          .attr("href", k + jQuery(n[b])
          .attr("href"))
      }
      if (j && !jQuery(n[b])
        .attr("title")) {
        jQuery(n[b])
          .attr("title", j)
      }
    }
  }
};
AEGON.mq = Modernizr.mq("only all");
AEGON.DropdownNavigation = function(a) {
  if (a) {
    this.rootNode = a;
    this.items = null;
    this.dropdowns = new Array();
    this.overlay = null;
    this.overlayDelay = null;
    this.moreItem = null;
    this.moreDropDown = null;
    this.hoverDivs = [];
    this.WinSize = {
      SMALL: 660,
      MEDIUM: 770
    };
    this.init()
  }
};
AEGON.DropdownNavigation.prototype.init = function() {
  var h = this;
  jQuery(".js div#header .wrapper")
    .addClass("loaded");
  jQuery(this.rootNode)
    .show();
  this.items = jQuery("ul.navigation > li", this.rootNode);
  for (var g = this.items.length; g--;) {
    var a = jQuery(this.items[g])
      .position()
      .left;
    var d = jQuery(this.items[g])
      .parent()
      .width() - a - jQuery(this.items[g])
      .width();
    var e = jQuery(".box-dropdown", this.items[g])
      .get(0);
    if (e && jQuery(".corners", h.rootNode)
      .css("display") != "none") {
      var j = jQuery(".items > *", e);
      if (j.length == 1 && ((a > d && d > 240) || (d > a && a > 240))) {} else {
        if (a > d) {} else {}
      }
    }
    var f = e ? false : true;
    var l = new AEGON.Dropdown(this.items[g], f, this.WinSize);
    jQuery(l)
      .bind(DropdownEvent.OPEN, function() {
      h.onDropdownOpen(this)
    });
    jQuery(l)
      .bind(DropdownEvent.OVER, function() {
      h.onDropdownOver(this)
    });
    jQuery(l)
      .bind(DropdownEvent.CLOSE, function() {
      h.onDropdownClose(this)
    });
    this.dropdowns.push(l)
  }
  this.setUpHovers();
  this.layoutHovers();
  var c = jQuery.browser.msie && jQuery.browser.version === "6.0";
  if (!c) {
    this.overlay = jQuery('<div class="dropdown-navigation-backdrop"></div>');
    jQuery(".navigation")
      .after(this.overlay)
  }
  if (AEGON.mq) {
    var b = new AEGON.MoreMenu(this.items, "box-dropdown");
    jQuery(b)
      .bind("smaller", function(i, m) {
      new AEGON.Dropdown(m, true, h.WinSize)
    });
    var k = new AEGON.Resizer(this.WinSize.SMALL);
    jQuery(k)
      .bind("resizing", function(m, i) {
      b.onResize(i);
      if (jQuery(window)
        .width() >= h.WinSize.MEDIUM) {
        h.layoutHovers()
      }
    });
    k.resize()
  }
};
AEGON.DropdownNavigation.prototype.setUpHovers = function() {
  var g = this;
  this.hovers = jQuery('<div class="dropdown-navigation-hovers"/>');
  this.hovers.prependTo(".wrapper");
  var a = this.items.length;
  for (var c = 0; c < a; c++) {
    var e = jQuery(this.items[c]);
    var f = jQuery("<div />");
    f.appendTo(this.hovers);
    this.hoverDivs.push(f);
    if (jQuery(".box-dropdown", e)
      .length !== 0) {
      var d = true
    }
    var b = jQuery(".dropdown-navigation-hovers div");
    jQuery(f)
      .bind("mouseover", function() {
      jQuery(g.items[b.index(this)])
        .trigger("mouseover")
    });
    jQuery(f)
      .bind("mouseout", function() {
      var h = jQuery(".dropdown-navigation-hovers div")
        .index(this);
      jQuery(g.items[b.index(this)])
        .trigger("mouseout")
    });
    jQuery(f)
      .bind("click", function() {
      location.href = (jQuery(g.items[b.index(this)])
        .find(">a")
        .attr("href"))
    })
  }
};
AEGON.DropdownNavigation.prototype.layoutHovers = function() {
  var a = this.items.length;
  for (var b = 0; b < a; b++) {
    var c = jQuery(this.items[b]);
    this.hoverDivs[b].css("width", c.width())
  }
};
AEGON.DropdownNavigation.prototype.hideOverlay = function() {
  var a = this;
  clearTimeout(this.overlayDelay);
  var b = false;
  this.overlayDelay = setTimeout(function() {
    for (var c = a.dropdowns.length; c--;) {
      if (a.dropdowns[c].isActive()) {
        b = true
      }
    }
    if (!b) {
      a.overlay.css("display", "none")
    }
  }, 0)
};
AEGON.DropdownNavigation.prototype.showOverlay = function() {
  var a = this;
  clearTimeout(this.overlayDelay);
  this.overlayDelay = setTimeout(function() {
    a.overlay.css("display", "block")
  }, 150);
  jQuery(this.overlay)
    .bind("click", function() {
    a.onKeyDown()
  })
};
AEGON.DropdownNavigation.prototype.closeAllDropdowns = function() {
  for (var a = this.dropdowns.length; a--;) {
    this.dropdowns[a].close()
  }
};
AEGON.DropdownNavigation.prototype.onKeyDown = function(a) {
  this.hideOverlay();
  if (a.key == "esc") {
    this.closeAllDropdowns()
  }
};
AEGON.DropdownNavigation.prototype.onDropdownClose = function(a) {
  jQuery(this.hovers)
    .hide();
  this.hideOverlay()
};
AEGON.DropdownNavigation.prototype.onDropdownOpen = function(d) {
  var c = this;
  if (!d.isEmpty) {
    this.overlayDelay = setTimeout(function() {
      jQuery(c.hovers)
        .show();
      c.showOverlay()
    }, 50)
  }
  for (var a = this.dropdowns.length; a--;) {
    if (d != this.dropdowns[a] && this.dropdowns[a].isActive()) {
      var b = this.dropdowns[a];
      clearTimeout(this.toggleDelay);
      this.toggleDelay = setTimeout(function() {
        c.toggle(b, d)
      }, 50)
    }
  }
};
AEGON.DropdownNavigation.prototype.toggle = function(d, c) {
  d.close();
  c.open()
};
AEGON.DropdownNavigation.prototype.onDropdownOver = function(a) {
  clearTimeout(this.toggleDelay);
  clearTimeout(this.overlayDelay)
};
AEGON.DropdownNavigation.prototype.onResize = function(a) {};
var DropdownEvent = {
  OPEN: "Dropdown:open",
  OVER: "Dropdown:over",
  CLOSE: "Dropdown:close"
};
AEGON.Dropdown = function(a, c, b) {
  if (a) {
    this.rootNode = a;
    this.isEmpty = c;
    this.WinSize = b;
    this.init()
  }
};
AEGON.Dropdown.prototype.init = function(c) {
  var f = this,
    b = jQuery(".more-dropdown"),
    a = false;
  var d = new AEGON.Resizer(null);
  d.resize();
  if (jQuery(this.rootNode)
    .hasClass(".more")) {
    jQuery(">a", this.rootNode)
      .bind("click", function(g) {
      g.preventDefault();
      g.stopPropagation();
      if (a) {
        f.onMouseOut(0);
        jQuery(".wrapper")
          .unbind("click");
        a = false;
        return
      }
      f.onMouseOver(jQuery(this)
        .parent(), 0);
      a = true;
      jQuery(".wrapper")
        .bind("click", function(h) {
        if (a) {
          if (!jQuery(h.target)
            .is(b.find("*"))) {
            f.onMouseOut(0);
            jQuery(this)
              .unbind("click");
            a = false
          }
        }
      });
      jQuery(d)
        .bind("resizing", function() {
        if (a) {
          f.onMouseOut(0);
          jQuery(this)
            .unbind("resizing");
          a = false
        }
      })
    })
  } else {
    jQuery(this.rootNode)
      .bind("mouseover", function() {
      f.onMouseOver(this, 200)
    });
    jQuery("a", this.rootNode)
      .bind("focus mouseenter", function() {
      f.onMouseOver(), 200
    });
    jQuery(this.rootNode)
      .bind("mouseout", function() {
      f.onMouseOut(150)
    })
  }
};
AEGON.Dropdown.prototype.open = function() {
  this.clearDelay();
  jQuery(this.rootNode)
    .addClass("open");
  jQuery(this)
    .trigger(DropdownEvent.OPEN)
};
AEGON.Dropdown.prototype.close = function() {
  this.clearDelay();
  jQuery(this.rootNode)
    .removeClass("open");
  jQuery(this)
    .trigger(DropdownEvent.CLOSE)
};
AEGON.Dropdown.prototype.isActive = function() {
  return jQuery(this.rootNode)
    .hasClass("open") && !this.isEmpty
};
AEGON.Dropdown.prototype.onMouseOut = function(a) {
  var b = this;
  this.clearDelay();
  this.delayId = setTimeout(function() {
    b.close()
  }, a)
};
AEGON.Dropdown.prototype.onMouseOver = function(b, a) {
  var c = this;
  if (AEGON.mq && jQuery(window)
    .width() <= this.WinSize.MEDIUM && jQuery(b)
    .hasClass(".more") === false) {
    return
  }
  this.clearDelay();
  this.delayId = setTimeout(function() {
    c.open()
  }, a);
  if (!c.isEmpty) {
    jQuery(this)
      .trigger(DropdownEvent.OVER);
    jQuery(this)
      .trigger(DropdownEvent.OPEN)
  }
};
AEGON.Dropdown.prototype.onTabMouseOver = function(a) {
  jQuery(this)
    .trigger(DropdownEvent.OVER);
  this.clearDelay()
};
AEGON.Dropdown.prototype.clearDelay = function() {
  var a = this;
  clearTimeout(a.delayId)
};
AEGON.ContentTabsControl = function(b, a) {
  this.rootNode = b;
  this.jsClass = a;
  this.contentTabs = new Array();
  this.activeContentTab = null;
  this.selectNavigation = null;
  this.tabItems = [];
  this.tabIDs = [];
  this.tabTitles = [];
  this.winSize = 880;
  this.init()
};
AEGON.ContentTabsControl.prototype.init = function() {
  if (this.jsClass) {
    jQuery(this.rootNode)
      .addClass(this.jsClass);
    var c = jQuery(".tab", this.rootNode);
    var l = c.length;
    for (var f = l; f--;) {
      var n = jQuery(".tab-title", c[f])[0];
      var d = null;
      if (n) {
        d = n.innerHTML
      }
      var e = new AEGON.ContentTab(this, c[f], d);
      this.contentTabs.push(e);
      if (jQuery(c[f])
        .hasClass("open")) {
        this.activeContentTab = e
      }
    }
    if (!this.activeContentTab) {
      this.activeContentTab = this.contentTabs[this.contentTabs.length - 1];
      this.activeContentTab.checkForIframe()
    }
    this.createTabs();
    var j = this;
    var k = jQuery(this.rootNode)
      .closest(".sidebar")
      .length !== 1;
    if (AEGON.mq && k) {
      j.tabIDs.reverse();
      var h = new AEGON.MoreMenu(this.tabItems, ""),
        a = jQuery(h.moreItem),
        b = jQuery(h.moreDropDown),
        m = jQuery("a", a);
      jQuery(">a", a)
        .click(function(i) {
        i.preventDefault();
        i.stopPropagation();
        a.toggleClass("active");
        m.toggleClass("open");
        b.toggle()
      });
      jQuery("#content")
        .bind("click", function(i) {
        if (!jQuery(i.target)
          .is(b.find("*"))) {
          b.hide();
          a.removeClass("active");
          m.removeClass("open")
        }
      });
      var g = new AEGON.Resizer(this.winSize);
      jQuery(g)
        .bind("resizing", function(o, i) {
        h.onResize(i)
      });
      g.resize()
    }
  }
};
AEGON.ContentTabsControl.prototype.createTabs = function() {
  var d = document.createElement("ul");
  d.className = "tabs";
  var a = this.contentTabs.length;
  for (var c = a; c--;) {
    var f = document.createElement("li");
    if (this.contentTabs[c] == this.activeContentTab) {
      jQuery(f)
        .addClass("active")
    } else {
      jQuery(this.contentTabs[c].contentNode)
        .hide()
    }
    var b = document.createElement("a");
    b.href = "";
    var e = document.createElement("span");
    e.innerHTML = this.contentTabs[c].tabTitle;
    jQuery(b)
      .append(e);
    jQuery(f)
      .append(b);
    jQuery(d)
      .append(f);
    this.contentTabs[c].tabNode = f;
    this.contentTabs[c].tabAnchorNode = b;
    this.contentTabs[c].bindEvents();
    this.tabItems.push(f)
  }
  jQuery(this.rootNode)
    .prepend(d)
};
AEGON.ContentTabsControl.prototype.loadDefault = function(c) {
  var a = this.contentTabs.length;
  if (c) {
    for (var b = a; b--;) {
      if (this.contentTabs[b].id == c) {
        this.contentTabs[b].show();
        break
      }
    }
  }
};
AEGON.ContentTab = function(c, a, b) {
  this.contentTabsControl = c;
  this.contentNode = a;
  this.tabTitle = b;
  this.id = c.rootNode.id + "_" + this.tabTitle.replace(new RegExp(" ", "g"), "-")
    .toLowerCase();
  this.activeMoreTabNode = null;
  c.tabIDs.push(this.id);
  c.tabTitles.push(this.tabTitle)
};
AEGON.ContentTab.prototype.bindEvents = function() {
  if (this.tabAnchorNode) {
    this.tabAnchorNode.href = "#" + this.id
  }
};
AEGON.ContentTab.prototype.setHistory = function(a) {
  if (this.contentTabsControl.activeContentTab != this) {
    jQuery.history.load(this.id)
  }
};
AEGON.ContentTab.prototype.show = function() {
  if (this.contentTabsControl.activeContentTab != this) {
    this.contentTabsControl.activeContentTab.hide();
    jQuery(this.contentNode)
      .show();
    if (this.tabNode) {
      jQuery(this.tabNode)
        .addClass("active");
      if (jQuery(this.tabNode)
        .css("display") === "none") {
        var c = jQuery(".tabs .more-dropdown li");
        var a = c.length;
        for (var b = a; b--;) {
          jQuery(c[b])
            .removeClass("active");
          if (jQuery("a", c[b])
            .attr("href")
            .substring(1) === this.id) {
            jQuery(c[b])
              .addClass("active");
            this.activeMoreTabNode = jQuery(c[b])
          }
        }
      }
    }
    this.contentTabsControl.activeContentTab = this;
    this.contentTabsControl.activeContentTab.checkForIframe();
    if (jQuery.Storage) {
      jQuery.Storage.set(this.contentTabsControl.rootNode.id, this.id)
    }
  }
};
AEGON.ContentTab.prototype.hide = function() {
  jQuery(this.contentNode)
    .hide();
  if (this.tabNode) {
    jQuery(this.tabNode)
      .removeClass("active");
    if (this.activeMoreTabNode) {
      this.activeMoreTabNode.removeClass("active")
    }
  }
};
AEGON.ContentTab.prototype.checkForIframe = function() {
  var a = jQuery(this.contentNode)
    .find(".iframe-content");
  if (a.length !== 0) {
    var b = jQuery(a)
      .find("iframe");
    if (b.length === 0) {
      var c = a.find("a");
      var d = c.attr("href");
      var f = a.attr("data-content-height");
      var e = a.attr("data-scrolling");
      a.html('<iframe src="' + d + '" width="100%" height="' + f + '" marginwidth="0" marginheight="0" frameborder="0" scrolling="' + e + '" data-content-link="' + c.text() + '">')
    }
  }
};
AEGON.ContentFoldControl = function(c, b, e, d, a) {
  this.rootNode = c;
  this.jsClass = b;
  this.autoFold = e;
  this.items = null;
  this.contentFoldControlItems = [];
  this.headerSelector = d || "h3";
  this.itemSelector = a || "> li";
  this.init()
};
AEGON.ContentFoldControl.prototype.init = function() {
  jQuery(this.rootNode)
    .addClass(this.jsClass);
  if (this.jsClass) {
    this.items = jQuery(this.itemSelector, this.rootNode);
    var b = this.items.length;
    for (var c = b; c--;) {
      var e = jQuery(this.headerSelector, this.items[c]),
        a = new AEGON.ContentFoldControlItem(this.items[c], e, this, this.rootNode);
      this.contentFoldControlItems.push(a)
    }
  }
  if (AEGON.mq) {
    var d = this;
    this.contentFoldResizer = new AEGON.Resizer(null);
    jQuery(this.contentFoldResizer)
      .bind("resizing", function() {
      d.onResize()
    });
    this.contentFoldResizer.resize()
  }
};
AEGON.ContentFoldControl.prototype.closeOthers = function(c) {
  var a = this.contentFoldControlItems.length;
  for (var b = a; b--;) {
    if (this.contentFoldControlItems[b] != c && jQuery(this.contentFoldControlItems[b].rootNode)
      .hasClass("open")) {
      this.contentFoldControlItems[b].close()
    }
  }
};
AEGON.ContentFoldControl.prototype.unload = function() {
  var a = this.contentFoldControlItems.length;
  jQuery(this.contentFoldResizer)
    .unbind("resizing");
  for (var b = a; b--;) {
    this.contentFoldControlItems[b].unload()
  }
};
AEGON.ContentFoldControlItem = function(a, e, c, b) {
  if (c) {
    this.contentFoldControl = c
  }
  this.rootNode = a;
  this.header = e[0];
  this.itemParent = b;
  if (this.header) {
    this.itemHeight = jQuery(this.rootNode)
      .height();
    this.headerHeight = jQuery(this.header)
      .outerHeight();
    if (!jQuery(this.rootNode)
      .hasClass("open")) {
      jQuery(this.itemParent)
        .addClass("closed");
      jQuery(this.rootNode)
        .height(this.headerHeight);
      var d = this;
      jQuery("> *", this.rootNode)
        .filter(function(f) {
        return this != d.header
      })
        .hide()
    }
  }
  jQuery(this.header)
    .bind("click", {
    _this: this
  }, this.click);
  jQuery("a", this.header)
    .bind("click", {
    _this: this
  }, this.click)
};
AEGON.ContentFoldControlItem.prototype.click = function(a) {
  a.preventDefault();
  var b = a.data._this;
  if (jQuery(b.rootNode)
    .hasClass("open")) {
    b.close()
  } else {
    b.open();
    if (b.contentFoldControl.autoFold && b.contentFoldControl) {
      b.contentFoldControl.closeOthers(b)
    }
  }
  return false
};
AEGON.ContentFoldControlItem.prototype.open = function() {
  var a = this;
  jQuery(this.itemParent)
    .removeClass("closed");
  jQuery("> *", this.rootNode)
    .show();
  jQuery(this.rootNode)
    .animate({
    height: this.itemHeight
  }, 300, function() {
    jQuery(a.rootNode)
      .addClass("open")
      .css("height", "auto")
  })
};
AEGON.ContentFoldControlItem.prototype.close = function() {
  var a = this;
  jQuery(a.rootNode)
    .removeClass("open");
  this.itemHeight = jQuery(this.rootNode)
    .height();
  this.headerHeight = jQuery(this.header)
    .outerHeight();
  jQuery(this.rootNode)
    .animate({
    height: this.headerHeight
  }, 300, function() {
    jQuery(a.itemParent)
      .addClass("closed");
    jQuery("> *", a.rootNode)
      .filter(function(b) {
      return this != a.header
    })
      .hide()
  })
};
AEGON.ContentFoldControl.prototype.onResize = function() {
  var b = this.items.length;
  for (var c = b; c--;) {
    var d = this.contentFoldControlItems[c].header;
    var a = (jQuery(d)
      .outerHeight());
    if (!jQuery(d)
      .parent()
      .hasClass("open")) {
      jQuery(d)
        .parent()
        .css("height", a)
    }
  }
};
AEGON.ContentFoldControlItem.prototype.unload = function() {
  jQuery(this.header)
    .unbind("click");
  jQuery("a", this.header)
    .unbind("click");
  jQuery(this.rootNode)
    .css({
    height: "auto",
    display: "block"
  });
  jQuery("> *", this.rootNode)
    .css({
    height: "auto",
    display: "block"
  })
};
AEGON.LightboxManager = {
  lightboxes: new Array(),
  currentLightbox: null,
  opacityLayer: null,
  showOpacityLayer: function() {
    if (AEGON.IE6) {
      this.setOpacityLayer()
    }
    if (!this.opacityLayer) {
      var a = this;
      this.opacityLayer = document.createElement("div");
      this.opacityLayer.className = "opacity-layer";
      jQuery(document.body)
        .append(this.opacityLayer);
      jQuery(this.opacityLayer)
        .bind("click", function() {
        if (a.currentLightbox) {
          a.currentLightbox.hide()
        }
      })
    }
    jQuery(this.opacityLayer)
      .css("opacity", "0");
    jQuery(this.opacityLayer)
      .show();
    jQuery(this.opacityLayer)
      .fadeTo(500, 0.7)
  },
  hideOpacityLayer: function(a) {
    jQuery(this.opacityLayer)
      .fadeOut(750)
  },
  openFlashLightbox: function(a, c, b, k, h, j, e) {
    var f = null;
    var d = this.lightboxes.length;
    for (var g = d; g--;) {
      if (a == this.lightboxes[g].flashId) {
        f = this.lightboxes[g]
      }
    }
    if (!f) {
      f = new AEGON.Lightbox({
        flashData: {
          id: a,
          file: c,
          width: b,
          height: k,
          version: h,
          vars: j,
          params: e
        }
      });
      this.showOpacityLayer();
      f.show();
      this.lightboxes.push(f)
    } else {
      this.showOpacityLayer();
      f.show()
    }
  },
  openIframeLightbox: function(f, d, a) {
    var e = null;
    var b = this.lightboxes.length;
    for (var c = b; c--;) {
      if (f == this.lightboxes[c].src) {
        e = this.lightboxes[c]
      }
    }
    if (!e) {
      e = new AEGON.Lightbox({
        iframeData: {
          src: f,
          width: d,
          height: a
        }
      });
      this.showOpacityLayer();
      e.show();
      this.lightboxes.push(e)
    } else {
      this.showOpacityLayer();
      e.show()
    }
  },
  hideDropDowns: function(b, d) {
    if (b != null) {
      var e = b.getElementsByTagName("select");
      var a = "hidden";
      if (d == false) {
        a = "visible"
      }
      for (var c = 0; c < e.length; c++) {
        e[c].style.visibility = a
      }
    }
  },
  setOpacityLayer: function(b) {
    if (this.opacityLayer) {
      var a = b ? jQuery(b)
        .height() : 0;
      var c = jQuery(document.body)
        .height();
      this.opacityLayer.style.height = (c > a ? c : a) + "px"
    }
  }
};
AEGON.Lightbox = function(a) {
  if (a) {
    this.closeLabel = a.closeLabel ? a.closeLabel : "Sluit venster";
    this.closeWarning = a.closeWarning ? a.closeWarning : "Ingevulde gegevens gaan mogelijk verloren.\n Weet u zeker dat u dit venster wil sluiten?";
    this.content = a.content ? a.content : null;
    this.flashData = a.flashData ? a.flashData : null;
    this.iframeData = a.iframeData ? a.iframeData : {};
    this.iframeData.width = this.iframeData.width ? this.iframeData.width : 920;
    this.iframeData.height = this.iframeData.height ? this.iframeData.height : jQuery(window)
      .height() - 140;
    this.lightboxlayer = null;
    this.lightbox = null;
    this.inner = null;
    this.flashId = null;
    this.flashContainer = null;
    this.iframe = null;
    this.flashLoaded = false;
    this.init()
  }
};
AEGON.Lightbox.prototype.init = function() {
  this.buildContainer()
};
AEGON.Lightbox.prototype.buildContainer = function() {
  var a = this;
  this.lightboxlayer = document.createElement("div");
  this.lightboxlayer.className = "lightbox-layer";
  jQuery(this.lightboxlayer)
    .bind("click", function(b) {
    a.outsideHide(b)
  });
  this.lightbox = document.createElement("div");
  this.lightbox.className = "lightbox";
  this.inner = document.createElement("div");
  this.inner.className = "inner";
  this.closeButton = document.createElement("a");
  this.closeButton.className = "close";
  this.closeButton.href = "";
  this.closeButton.innerHTML = "<span>" + this.closeLabel + "</span>";
  jQuery(this.closeButton)
    .bind("click", function(b) {
    a.hide(b);
    return false
  });
  if (this.flashData) {
    this.flashId = this.flashData.id;
    this.flashContainer = document.createElement("div");
    this.flashContainer.id = this.flashId;
    if (this.content) {
      jQuery(this.flashContainer)
        .append(this.content)
    }
    jQuery(this.inner)
      .append(this.flashContainer);
    jQuery(this.lightbox)
      .width(this.flashData.width + "px")
  } else {
    if (this.iframeData) {
      this.src = this.iframeData.src;
      this.iframe = document.createElement("iframe");
      this.iframe.src = this.iframeData.src;
      this.iframe.height = this.iframeData.height;
      this.iframe.width = this.iframeData.width;
      this.iframe.frameBorder = "0";
      jQuery(this.inner)
        .addClass("loading");
      jQuery(this.iframe)
        .css("visibility", "hidden");
      jQuery(this.iframe)
        .bind("load", function() {
        jQuery(this)
          .css("visibility", "visible");
        jQuery(a.inner)
          .removeClass("loading")
      });
      jQuery(this.inner)
        .append(this.iframe);
      jQuery(this.lightbox)
        .width(this.iframeData.width + "px");
      jQuery(this.lightbox)
        .css("max-width", "90%")
    } else {
      if (this.content) {
        jQuery(this.inner)
          .append(this.content)
      }
    }
  }
  jQuery(this.lightbox)
    .append(this.closeButton);
  jQuery(this.lightbox)
    .append('<div class="lt"></div><div class="rt"></div><div class="rb"></div><div class="lb"></div>');
  jQuery(this.lightbox)
    .append(this.inner);
  jQuery(this.lightboxlayer)
    .append(this.lightbox);
  jQuery(document.body)
    .append(this.lightboxlayer)
};
AEGON.Lightbox.prototype.show = function() {
  var b = this;
  var a = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
  this.lightboxlayer.style.top = a + "px";
  setTimeout(function() {
    jQuery(b.lightboxlayer)
      .fadeIn(750, function() {
      AEGON.LightboxManager.currentLightbox = b
    })
  }, 500);
  if (this.flashContainer && !this.flashLoaded) {
    swfobject.embedSWF(this.flashData.file, this.flashContainer.id, this.flashData.width, this.flashData.height, this.flashData.version, "static/flash/expressInstall.swf", this.flashData.vars, this.flashData.params)
  }
};
AEGON.Lightbox.prototype.outsideHide = function(b) {
  var a = null;
  if (b.target) {
    a = b.target
  } else {
    if (b.srcElement) {
      a = b.srcElement
    }
  }
  if (a.nodeType == 3) {
    a = a.parentNode
  }
  if (!this.isInside(a, this.lightbox)) {
    this.hide(b)
  }
};
AEGON.Lightbox.prototype.isInside = function(c, a) {
  if (c == a) {
    return true
  }
  if (a && a.childNodes) {
    for (var b = 0; b < a.childNodes.length; ++b) {
      if (a.childNodes[b] == c) {
        return true
      } else {
        if (this.isInside(c, a.childNodes[b])) {
          return true
        }
      }
    }
  }
  return false
};
AEGON.Lightbox.prototype.hide = function(b) {
  lightbox = this;
  if (lightbox.iframeData && b.target != this.closeButton && b.type != "resizing") {
    var a = confirm(this.closeWarning);
    if (a == false) {
      return false
    }
  }
  AEGON.LightboxManager.currentLightbox = null;
  jQuery(this.lightboxlayer)
    .fadeOut(500, function() {
    AEGON.LightboxManager.hideOpacityLayer()
  })
};
AEGON.createCookie = function(c, d, e) {
  if (e) {
    var b = new Date();
    b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
    var a = "; expires=" + b.toGMTString()
  } else {
    var a = ""
  }
  document.cookie = c + "=" + d + a + "; path=/"
};
AEGON.readCookie = function(b) {
  var e = b + "=";
  var a = document.cookie.split(";");
  for (var d = 0; d < a.length; d++) {
    var f = a[d];
    while (f.charAt(0) == " ") {
      f = f.substring(1, f.length)
    }
    if (f.indexOf(e) == 0) {
      return f.substring(e.length, f.length)
    }
  }
  return null
};
AEGON.eraseCookie = function(a) {
  AEGON.createCookie(a, "", - 1)
};
AEGON.QuestionVotingList = function(a) {
  if (a) {
    this.rootNode = a;
    this.init()
  }
};
AEGON.QuestionVotingList.prototype.init = function() {
  this.templateVoting = jQuery("form.question-vote", this.rootNode);
  this.templatePositive = jQuery(".response-positive", this.rootNode);
  this.templateNegative = jQuery(".response-negative", this.rootNode);
  this.templateVoted = jQuery(".response-voted", this.rootNode);
  this.templateFeedback = jQuery(".response-feedback", this.rootNode);
  this.templateFormFeedback = jQuery("form.feedback", this.rootNode);
  this.questionNodes = jQuery("> ul > li", this.rootNode);
  var a = this.questionNodes.length;
  if (a > 0) {
    for (var b = a; b--;) {
      new AEGON.QuestionVote(this.questionNodes[b], jQuery(this.templateVoting)
        .clone(), this.templatePositive, this.templateNegative, this.templateVoted, this.templateFeedback, this.templateFormFeedback, true)
    }
    if (AEGON.ContentFoldControl) {
      var c = new AEGON.ContentFoldControl(jQuery("> ul", this.rootNode), "basic-fold-js", true)
    }
  } else {
    if (this.rootNode.id.length > 0) {
      new AEGON.QuestionVote(this.rootNode, this.templateVoting, this.templatePositive, this.templateNegative, this.templateVoted, this.templateFeedback, this.templateFormFeedback, false)
    }
  }
};
AEGON.QuestionVote = function(c, b, e, g, d, f, a, h) {
  if (c, b) {
    this.rootNode = c;
    this.questionID = this.rootNode.id;
    this.templateVoting = b;
    this.templatePositive = e;
    this.templateNegative = g;
    this.templateVoted = d;
    this.templateFeedback = f;
    this.templateFormFeedback = a;
    this.clone = h;
    if (this.clone) {
      this.contentContainer = jQuery(".open-content", this.rootNode)
    }
    this.voted = false;
    this.init()
  }
};
AEGON.QuestionVote.prototype.init = function() {
  this.voteYes = jQuery(".button-vote-yes", this.templateVoting);
  this.voteNo = jQuery(".button-vote-no", this.templateVoting);
  var d = jQuery("h3", this.rootNode)[0];
  if (!d) {
    d = jQuery("h1", document.body)[0]
  }
  if (d) {
    var a = jQuery("a", d)[0];
    this.title = a ? jQuery(a)
      .text() : jQuery(d)
      .text();
    if (parseInt(this.title.charAt(0))) {
      this.title = this.title.substring(3, 103)
    } else {
      this.title = this.title.substring(0, 100)
    }
  }
  if (this.clone) {
    jQuery(this.contentContainer)
      .append(this.templateVoting)
  }
  var c = jQuery.Storage.get("QV_" + this.questionID);
  if (c) {
    if (c == "y") {
      jQuery(this.voteYes)
        .addClass("voted");
      jQuery(this.voteNo)
        .addClass("disabled")
    } else {
      if (c == "n") {
        jQuery(this.voteNo)
          .addClass("voted");
        jQuery(this.voteYes)
          .addClass("disabled")
      }
    }
    if (this.clone) {
      this.templateVotedClone = jQuery(this.templateVoted)
        .clone();
      jQuery(this.contentContainer)
        .append(this.templateVotedClone);
      var b = jQuery(".open-feedback", this.templateVotedClone)
    } else {
      jQuery(this.templateVoted)
        .show();
      var b = jQuery(".open-feedback", this.templateVoted)
    }
    if (b) {
      jQuery(b)
        .bind("click", {
        _this: this,
        yes: true
      }, this.openFeedback)
    }
  } else {
    this.enableButton(this.voteYes);
    this.enableButton(this.voteNo);
    jQuery(this.voteYes)
      .bind("click", {
      _this: this,
      yes: true
    }, this.vote);
    jQuery(this.voteNo)
      .bind("click", {
      _this: this,
      yes: false
    }, this.vote);
    jQuery("input", this.voteYes)
      .bind("click", {
      _this: this,
      yes: true
    }, this.vote);
    jQuery("input", this.voteNo)
      .bind("click", {
      _this: this,
      yes: false
    }, this.vote)
  }
};
AEGON.QuestionVote.prototype.enableButton = function(a) {
  jQuery(a)
    .removeClass("disabled");
  jQuery(a)
    .removeClass("voted");
  jQuery("input", a)
    .removeAttr("disabled")
};
AEGON.QuestionVote.prototype.setButtonDisabled = function(a) {
  jQuery(a)
    .addClass("disabled");
  jQuery("input", a)
    .attr("disabled", "disabled")
};
AEGON.QuestionVote.prototype.setButtonVoted = function(a) {
  jQuery(a)
    .removeClass("disabled");
  jQuery(a)
    .addClass("voted");
  jQuery("input", a)
    .attr("disabled", "disabled")
};
AEGON.QuestionVote.prototype.vote = function(b) {
  b.preventDefault();
  _this = b.data._this;
  if (!_this.voting && !_this.voted) {
    _this.voting = true;
    jQuery(_this.templateVoting)
      .addClass("question-vote-loading");
    _this.setButtonDisabled(_this.voteYes);
    _this.setButtonDisabled(_this.voteNo);
    var a = b.data;
    if (typeof submitQuestionVote == "function" && _this.title) {
      submitQuestionVote(_this.title, _this.questionID, b.data.yes)
    }
    setTimeout(function() {
      jQuery.ajax({
        type: "POST",
        url: AEGON.QuestionVotingList.voteURL,
        data: "questionID=" + _this.questionID + "&voteYes=" + a.yes,
        success: function(c) {
          _this.onSuccessVote(a, c)
        },
        dataType: "html",
        timeout: 15000,
        error: function() {
          _this.onErrorVote()
        }
      })
    }, 500)
  }
  return false
};
AEGON.QuestionVote.prototype.onSuccessVote = function(a, b) {
  jQuery(this.templateVoting)
    .removeClass("question-vote-loading");
  if (a.yes) {
    if (this.clone) {
      this.templatePositiveClone = jQuery(this.templatePositive)
        .clone();
      jQuery(this.contentContainer)
        .append(this.templatePositiveClone)
    } else {
      jQuery(this.templatePositive)
        .show()
    }
    this.setButtonVoted(this.voteYes);
    this.setButtonDisabled(this.voteNo);
    jQuery.Storage.set("QV_" + this.questionID, "y")
  } else {
    if (this.clone) {
      this.templateNegativeClone = jQuery(this.templateNegative)
        .clone();
      jQuery(this.contentContainer)
        .append(this.templateNegativeClone)
    } else {
      jQuery(this.templateNegative)
        .show()
    }
    this.showFeedback();
    this.setButtonVoted(this.voteNo);
    this.setButtonDisabled(this.voteYes);
    jQuery.Storage.set("QV_" + this.questionID, "n")
  }
  this.voted = true;
  this.voting = false
};
AEGON.QuestionVote.prototype.onErrorVote = function() {
  jQuery(this.templateVoting)
    .removeClass("question-vote-loading");
  var a = AEGON.QuestionVotingList.errorText ? AEGON.QuestionVotingList.errorText : "Error";
  alert(a)
};
AEGON.QuestionVote.prototype.openFeedback = function(a) {
  a.preventDefault();
  a.data._this.showFeedback();
  return false
};
AEGON.QuestionVote.prototype.showFeedback = function() {
  jQuery("input[type=text],textarea", this.templateFormFeedback)
    .attr("value", "");
  jQuery("input, textarea", this.templateFormFeedback)
    .removeAttr("disabled");
  var b = jQuery(".questionid", this.templateFormFeedback);
  jQuery(b)
    .attr("value", this.questionID);
  var a = jQuery(".button input", this.templateFormFeedback);
  jQuery(a)
    .bind("click", {
    _this: this
  }, this.submitFeedback);
  this.clone ? jQuery(this.contentContainer)
    .append(this.templateFormFeedback) : jQuery(this.templateFormFeedback)
    .show();
  console.log("showFeedback")
};
AEGON.QuestionVote.prototype.submitFeedback = function(d) {
  d.preventDefault();
  _this = d.data._this;
  var c = jQuery(_this.templateFormFeedback)
    .serialize();
  var b = jQuery("#feedback-question")
    .val();
  var f = jQuery("#feedback-email")
    .val();
  if (b.length > 0) {
    var a = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})jQuery/;
    if (a.test(f) == true | f.length == 0) {
      jQuery(_this.templateFormFeedback)
        .addClass("feedback-loading");
      jQuery("input, textarea", _this.templateFormFeedback)
        .attr("disabled", "disabled");
      setTimeout(function() {
        jQuery.ajax({
          type: "POST",
          url: AEGON.QuestionVotingList.feedbackURL,
          data: c,
          success: function(e) {
            _this.onSuccessFeedback(e)
          },
          dataType: "html",
          timeout: 15000,
          error: function() {
            _this.onErrorFeedback()
          }
        })
      }, 500)
    } else {
      alert(AEGON.QuestionVotingList.falseEmailText ? AEGON.QuestionVotingList.falseEmailText : "U dient een geldig email adres in te vullen")
    }
  } else {
    alert(AEGON.QuestionVotingList.requiredText ? AEGON.QuestionVotingList.requiredText : "U dient het formulier nog in te vullen")
  }
  return false
};
AEGON.QuestionVote.prototype.onSuccessFeedback = function(a) {
  jQuery(this.templateFormFeedback)
    .removeClass("feedback-loading");
  jQuery(this.templateFormFeedback)
    .remove();
  if (this.clone) {
    if (this.templateVotedClone) {
      this.templateVotedClone.remove()
    } else {
      if (this.templateNegativeClone) {
        this.templateNegativeClone.remove()
      }
    }
  } else {
    this.templateVoted.remove();
    this.templateNegative.remove()
  }
  if (this.clone) {
    this.templateFeedbackClone = jQuery(this.templateFeedback)
      .clone();
    jQuery(this.contentContainer)
      .append(this.templateFeedbackClone)
  } else {
    jQuery(this.templateFeedback)
      .show()
  }
};
AEGON.QuestionVote.prototype.onErrorFeedback = function() {
  jQuery(this.templateFormFeedback)
    .removeClass("feedback-loading");
  var a = AEGON.QuestionVotingList.errorText ? AEGON.QuestionVotingList.errorText : "Excuses, er is iets mis gegaan, probeer later opnieuw";
  alert(a)
};
AEGON.SearchFilter = function(a) {
  if (a) {
    this.rootNode = a;
    this.init()
  }
};
AEGON.SearchFilter.prototype.init = function() {
  var a = this;
  this.checkboxes = jQuery("input", this.rootNode);
  this.showall = jQuery("input.showall", this.rootNode)
    .get(0);
  if (this.showall) {
    jQuery(this.showall)
      .bind("change", function() {
      a.checkAll()
    })
  }
  if (jQuery(this.rootNode)
    .hasClass("search-filter-toggle")) {
    jQuery("legend", this.rootNode)
      .bind("click", function(b) {
      a.toggle(b)
    })
  }
};
AEGON.SearchFilter.prototype.checkAll = function() {
  if (this.showall.checked) {
    jQuery(this.checkboxes)
      .attr("checked", "checked")
  } else {
    jQuery(this.checkboxes)
      .removeAttr("checked")
  }
};
AEGON.SearchFilter.prototype.toggle = function(b) {
  var a = jQuery(b.target)
    .parent(a);
  if (jQuery(a)
    .hasClass(".open")) {
    jQuery(a)
      .removeClass("open")
  } else {
    jQuery(a)
      .addClass("open")
  }
};
AEGON.Poll = function(a) {
  if (a) {
    this.rootNode = a;
    this.init()
  }
};
AEGON.Poll.prototype.init = function() {
  this.action = jQuery(this.rootNode)
    .attr("action");
  this.votePanel = jQuery(".vote", this.rootNode)
    .get(0);
  this.resultsPanel = jQuery(".results", this.rootNode)
    .get(0);
  this.pollId = jQuery("#poll-id")
    .val();
  this.presetId = jQuery("#url-poll-id")
    .val();
  this.presetVote = jQuery("#url-poll-answer")
    .val();
  this.submitButton = jQuery("input[type=submit]", this.votePanel)
    .get(0);
  var a = false;
  if (this.pollId) {
    a = jQuery.Storage.get(this.pollId)
  }
  if (a) {
    if (this.votePanel) {
      jQuery(this.votePanel)
        .hide()
    }
    jQuery(this.resultsPanel)
      .show();
    jQuery("a.more", this.resultsPanel)
      .hide()
  } else {
    if (this.votePanel && this.presetId && this.presetVote && this.submitButton) {
      var b = jQuery(this.rootNode)
        .find("input[type=hidden].preset")
        .serialize();
      this.vote(b)
    } else {
      if (this.action && this.votePanel && this.resultsPanel && !a) {
        jQuery(this.submitButton)
          .bind("click", {
          _this: this
        }, this.validate);
        jQuery("a.more", this.votePanel)
          .bind("click", {
          _this: this
        }, this.showResults);
        jQuery("a.more", this.resultsPanel)
          .bind("click", {
          _this: this
        }, this.showVote)
      }
    }
  }
};
AEGON.Poll.prototype.showVote = function(a) {
  a.preventDefault();
  _this = a.data._this;
  jQuery(_this.resultsPanel)
    .hide();
  jQuery(_this.votePanel)
    .show();
  return false
};
AEGON.Poll.prototype.showResults = function(a) {
  a.preventDefault();
  _this = a.data._this;
  jQuery(_this.votePanel)
    .hide();
  jQuery(_this.resultsPanel)
    .show();
  return false
};
AEGON.Poll.prototype.vote = function(a) {
  var b = this;
  jQuery(b.rootNode)
    .addClass("box-poll-loading");
  setTimeout(function() {
    jQuery.ajax({
      type: "POST",
      url: b.action,
      data: a,
      success: function(c) {
        b.onSuccess(c)
      },
      error: function() {
        b.onError()
      },
      dataType: "html"
    })
  }, 500)
};
AEGON.Poll.prototype.validate = function(c) {
  c.preventDefault();
  _this = c.data._this;
  if (jQuery(":radio:checked", _this.votePanel)
    .get(0)) {
    var b = jQuery(_this.rootNode)
      .serialize();
    _this.vote(b)
  } else {
    var a = jQuery(".message", _this.votePanel)
      .get(0);
    if (a) {
      jQuery(a)
        .show()
    }
  }
  return false
};
AEGON.Poll.prototype.onSuccess = function(a) {
  if (this.pollId) {
    jQuery.Storage.set(this.pollId, "true")
  }
  jQuery(this.resultsPanel)
    .remove();
  this.resultsPanel = jQuery(a)
    .clone();
  jQuery(".inner", this.rootNode)
    .append(this.resultsPanel);
  jQuery(this.votePanel)
    .hide();
  jQuery(this.resultsPanel)
    .show();
  jQuery(this.rootNode)
    .removeClass("box-poll-loading")
};
AEGON.Poll.prototype.onError = function(c) {
  var b = jQuery(".error", this.votePanel)
    .get(0);
  if (b) {
    jQuery(b)
      .show()
  }
  var a = jQuery(".message", _this.votePanel)
    .get(0);
  if (a) {
    jQuery(a)
      .hide()
  }
  jQuery(this.rootNode)
    .removeClass("box-poll-loading")
};
AEGON.Tooltip = function(a) {
  if (a) {
    this.rootNode = a;
    this.init()
  }
};
AEGON.Tooltip.prototype.init = function() {
  var a = this;
  this.anchor = jQuery('<a href="#" class="tooltip-btn"><span>' + jQuery(this.rootNode)
    .html() + "</span></a>");
  this.anchor.insertBefore(this.rootNode);
  jQuery(this.rootNode)
    .remove();
  this.anchor.bind("mouseover", function(b) {
    a.show(b)
  });
  this.anchor.bind("focus", function(b) {
    a.show(b)
  });
  this.anchor.bind("mouseout", function() {
    a.setTimer()
  });
  this.anchor.bind("blur", function(b) {
    a.setTimer()
  });
  this.anchor.bind("click", function(b) {
    b.preventDefault();
    return false
  })
};
AEGON.Tooltip.prototype.show = function(a) {
  var c = this;
  if (this.timer) {
    clearTimeout(this.timer)
  }
  if (!this.tooltip) {
    if (jQuery(this.rootNode)
      .hasClass("white")) {
      this.tooltip = jQuery('<span class="tooltip-content white-tooltip-content">' + jQuery(this.rootNode)
        .html() + "</span>")
    } else {
      this.tooltip = jQuery('<span class="tooltip-content">' + jQuery(this.rootNode)
        .html() + "</span>")
    }
    jQuery(document.body)
      .append(this.tooltip);
    this.tooltip.bind("mouseover", function() {
      c.setTimer()
    })
  }
  if (!jQuery(this.tooltip)
    .is(":visible")) {
    var b = this.anchor.offset();
    this.setTooltipPosition(b, this.getTooltipPosition(b));
    setTimeout(function() {
      c.tooltip.addClass("tooltip-content-visible")
    }, 100)
  }
};
AEGON.Tooltip.prototype.setTimer = function() {
  var a = this;
  this.timer = setTimeout(function() {
    a.hide()
  }, 100)
};
AEGON.Tooltip.prototype.hide = function() {
  var a = this;
  clearTimeout(this.timer);
  this.tooltip.removeClass("tooltip-content-visible");
  setTimeout(function() {
    a.tooltip.hide()
  }, 300)
};
AEGON.Tooltip.prototype.getTooltipPosition = function(d) {
  var c = this.tooltip.offset();
  var b = jQuery(window)
    .width(),
    a = jQuery(this.tooltip)
      .outerWidth() + 10;
  if (b <= (d.left + a)) {
    if (b <= (d.left + (a / 2))) {
      position = "left"
    } else {
      position = "center"
    }
    if (!this.pointer) {
      this.pointer = jQuery('<span class="tooltip-pointer"></span>');
      jQuery(this.tooltip)
        .append(this.pointer)
    }
    this.tooltip.addClass("tooltip-content-below")
  } else {
    if (this.pointer) {
      this.pointer.remove()
    }
    position = "right"
  }
  return position
};
AEGON.Tooltip.prototype.setTooltipPosition = function(b, a) {
  switch (a) {
  case "left":
    this.tooltip.css({
      display: "block",
      left: ((b.left + this.anchor.outerWidth()) - this.tooltip.outerWidth()) + 10,
      top: b.top + (this.anchor.outerHeight() / 2)
    });
    this.pointer.css({
      left: "auto",
      right: ".8em"
    });
    break;
  case "center":
    this.tooltip.css({
      display: "block",
      left: b.left - (this.tooltip.outerWidth() / 2),
      top: b.top + this.anchor.outerHeight()
    });
    this.pointer.css({
      left: "50%",
      right: "auto"
    });
    break;
  case "right":
    this.tooltip.removeClass("tooltip-content-below");
    this.tooltip.css({
      display: "block",
      left: b.left + this.anchor.outerWidth(),
      top: b.top + (this.anchor.outerHeight() / 2)
    });
    break
  }
};
AEGON.Form = function(a) {
  if (a) {
    this.rootNode = a;
    this.items = new Array();
    this.init()
  }
};
AEGON.Form.prototype.init = function() {
  var c = this;
  jQuery(this.rootNode)
    .attr("novalidate", "novalidate");
  var a = jQuery(".form-item", this.rootNode);
  for (var b = a.length; b--;) {
    this.items.push(new AEGON.FormItem(a[b], this.rootNode))
  }
  jQuery(this.rootNode)
    .bind("submit", function(d) {
    c.validate(d)
  })
};
AEGON.Form.prototype.validate = function(f) {
  var c = true;
  for (var b = this.items.length; b--;) {
    var d = this.items[b].validate();
    c = !d ? d : c
  }
  if (!c) {
    f.preventDefault();
    return c
  } else {
    if (jQuery(this.rootNode)
      .hasClass("submit-overlay")) {
      var a = AEGON.LightboxManager;
      if (a) {
        a.showOpacityLayer();
        jQuery(a.opacityLayer)
          .addClass("loader-white")
      }
    }
  }
};
AEGON.FormItemHasFormatRule = function(d, f) {
  var b = jQuery("input,select,textarea", d);
  var a, e;
  for (var c = b.length; c--;) {
    a = jQuery(b)
      .attr("data-format") || "";
    e = a.split(",");
    if (jQuery.inArray(f, e) > -1) {
      return true
    }
  }
  return false
};
AEGON.FormRules = [{
  validate: function(b) {
    var a = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}jQuery/;
    var c = jQuery("input", b)
      .val();
    return a.test(c)
  },
  test: function(a) {
    return AEGON.FormItemHasFormatRule(a, "email")
  },
  errorType: "email"
}, {
  validate: function(b) {
    var a = /^[-]?\d*\.?\d*jQuery/;
    var c = jQuery("input", b)
      .val();
    return a.test(c)
  },
  test: function(a) {
    return AEGON.FormItemHasFormatRule(a, "numeric")
  },
  errorType: "numeric"
}, {
  validate: function(b) {
    var a = /^\d{10}jQuery/;
    var c = jQuery("input", b)
      .val();
    return a.test(c)
  },
  test: function(a) {
    return AEGON.FormItemHasFormatRule(a, "telephone")
  },
  errorType: "telephone"
}, {
  validate: function(b) {
    var a = /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}jQuery/;
    var c = jQuery("input", b)
      .val();
    return a.test(c)
  },
  test: function(a) {
    return AEGON.FormItemHasFormatRule(a, "date")
  },
  errorType: "date"
}, {
  validate: function(c) {
    var e = jQuery("input", c)
      .val()
      .split("-");
    var b = new Date();
    var d = new Date(e[2], e[1] - 1, e[0]);
    var a = b.getFullYear() - d.getFullYear();
    if (b.getMonth() < d.getMonth()) {
      a--
    }
    return (a >= 0 && a <= 120)
  },
  test: function(a) {
    return AEGON.FormItemHasFormatRule(a, "birthdate")
  },
  errorType: "birthdate"
}, {
  validate: function(b) {
    var a = /^\d{4}[A-Za-z]{2}jQuery/;
    var c = jQuery("input", b)
      .val()
      .replace(/ /g, "");
    jQuery("input", b)
      .val(c);
    return a.test(c)
  },
  test: function(a) {
    return AEGON.FormItemHasFormatRule(a, "postcode")
  },
  errorType: "postcode"
}];
// jQuery.extend(jQuery.expr[":"], {
//   inputtype: function(d, b, c) {
//     function a() {
//       var f = /<input.*?\s+type=(\w+)(\s+|>).*?/i.exec(d.outerHTML);
//       if (f && f.length >= 2 && f[1] !== "text") {
//         return f[1]
//       }
//       var e = d.attributes,
//         g;
//       for (g = 0; g < e.length; g++) {
//         if (e[g].nodeName === "type") {
//           return e[g].nodeValue
//         }
//       }
//     }
//     if (d.tagName != "INPUT") {
//       return false
//     }
//     if (d.type === "text") {
//       return a() === c[3]
//     } else {
//       return d.type === c[3]
//     }
//   }
// });
AEGON.FormItem = function(a) {
  if (a) {
    this.rootNode = a;
    this.rules = new Array();
    this.errors = null;
    this.init()
  }
};
AEGON.FormItem.prototype.init = function() {
  var b = this;
  this.errors = jQuery(".errors", this.rootNode);
  jQuery("input,select,textarea", this.rootNode)
    .bind("change", function(c) {
    b.validate(c)
  });
  for (var a = AEGON.FormRules.length; a--;) {
    if (AEGON.FormRules[a].test(this.rootNode)) {
      this.rules.push(AEGON.FormRules[a])
    }
  }
};
AEGON.FormItem.prototype.dataEntered = function() {
  var a = jQuery("input,select,textarea", this.rootNode);
  var c = jQuery(a)
    .attr("type");
  if (c === "checkbox") {
    if (a.length === 1) {
      if (jQuery(a)
        .attr("checked")) {
        return true
      }
    } else {
      for (var b = a.length; b--;) {
        if (jQuery(a[b])
          .attr("checked")) {
          return true
        }
      }
      return false
    }
  } else {
    if (a.length > 1) {
      for (var b = a.length; b--;) {
        if (jQuery(a[b])
          .attr("checked")) {
          return true
        }
      }
      return false
    } else {
      return jQuery(a)
        .val() != ""
    }
  }
};
AEGON.FormItem.prototype.validate = function() {
  var g = this;
  var d = true;
  var a = this.dataEntered();
  var b;
  var f;
  var e = jQuery(this.rootNode)
    .hasClass("required");
  if (e && !a) {
    d = false;
    b = jQuery('[data-error-type="required"]', this.rootNode);
    if (b) {
      b.show()
    }
  }
  if (a && d) {
    for (var c = this.rules.length; c--;) {
      f = this.rules[c].validate(this.rootNode);
      if (!f) {
        d = false;
        b = jQuery('[data-error-type="' + this.rules[c].errorType + '"]', this.rootNode);
        if (b) {
          jQuery("[data-error-type]", this.rootNode)
            .hide();
          b.show()
        }
        break
      }
    }
  }
  if (!d) {
    jQuery(this.rootNode)
      .addClass("errors")
  } else {
    jQuery(this.rootNode)
      .removeClass("errors");
    jQuery("[data-error-type]", g.rootNode)
      .hide()
  }
  return d
};
AEGON.DossierNavigation = function(a) {
  if (a) {
    this.rootNode = a;
    this.nodeBefore = jQuery(this.rootNode)
      .prev();
    this.listItems = jQuery("li", this.rootNode);
    this.links = jQuery("a", this.rootNode);
    this.currentIndex = 0;
    this.moreMenu = null;
    this.itemMoved = false;
    this.init()
  }
};
AEGON.DossierNavigation.prototype.init = function() {
  var e = this;
  this.setTopPosition();
  var d = window.location.pathname;
  var a = this.links.length;
  for (var c = a; c--;) {
    if (this.links[c].href.match(d)) {
      jQuery(this.listItems[c])
        .addClass("active");
      this.currentIndex = c
    }
  }
  if (AEGON.mq) {
    var b = new AEGON.Resizer(768);
    jQuery(b)
      .bind("resizing", function(g, f) {
      e.onResize(f)
    });
    b.resize()
  }
};
AEGON.DossierNavigation.prototype.setTopPosition = function() {
  var c = jQuery(this.rootNode)
    .parent()
    .prev();
  if (c) {
    var b = jQuery(".grid-item.box-actions-alt", c)
      .get(0);
    if (b) {
      var d = jQuery(b)
        .offset()
        .top - jQuery(c)
        .offset()
        .top;
      var a = jQuery(this.rootNode)
        .offset()
        .top - jQuery(this.rootNode)
        .parent()
        .offset()
        .top;
      if (a < d) {
        jQuery(this.rootNode)
          .css("marginTop", (d - a) + 40)
      }
    }
  }
};
AEGON.DossierNavigation.prototype.onResize = function(b) {
  var g = this,
    a = jQuery(this.rootNode),
    e, d;
  if (b === "smaller") {
    a.css("marginTop", 0);
    a.insertBefore(".grid-item.box-actions-alt");
    this.itemMoved = true;
    if (!this.moreMenu && !d) {
      this.moreMenu = new AEGON.MoreMenu(this.listItems, "");
      var f = jQuery(this.moreMenu.moreItem),
        c = jQuery(this.moreMenu.moreDropDown);
      jQuery(">a", f)
        .click(function(h) {
        h.preventDefault();
        h.stopPropagation();
        f.toggleClass("open");
        c.toggle()
      });
      jQuery("#content")
        .bind("click", function(h) {
        if (!jQuery(h.target)
          .is(c.find("*"))) {
          c.hide();
          f.removeClass("open")
        }
      });
      e = new AEGON.Resizer(700);
      jQuery(e)
        .bind("resizing", function(i, h) {
        g.moreMenu.onResize(h)
      });
      e.resize()
    }
  } else {
    if (b === "bigger") {
      if (this.moreMenu && e) {
        e.unbind("resizing");
        this.moreMenu = null;
        e = null;
        d = false
      }
      if (this.itemMoved) {
        setTimeout(function() {
          a.insertAfter(jQuery(g.nodeBefore));
          g.setTopPosition()
        }, 10)
      }
    }
  }
};
AEGON.TickerTape = function(a) {
  if (a) {
    this.rootNode = a;
    this.currentIndex = 0;
    this.init()
  }
};
AEGON.TickerTape.prototype.init = function() {
  var e = this;
  this.scroll = jQuery(".scroll", this.rootNode)
    .get(0);
  this.table = jQuery("table", this.scroll)
    .get(0);
  var b = jQuery(this.rootNode)
    .attr("data-timer");
  this.timer = b ? b : 5000;
  this.tableCopy = jQuery(this.table)
    .clone();
  jQuery("tbody tr:not(:first-child)", this.tableCopy)
    .remove();
  jQuery("tbody td", this.tableCopy)
    .html("&nbsp;");
  jQuery(this.tableCopy)
    .addClass("dummy")
    .insertBefore(this.scroll);
  jQuery("td:first-child, th:first-child", this.table)
    .addClass("first-child");
  jQuery("td:first-child, th:first-child", this.tableCopy)
    .addClass("first-child");
  this.scrollRows = jQuery("tbody tr", this.scroll);
  var a = 0;
  var c = this.scrollRows.length;
  for (var d = c; d--;) {
    rowHeight = jQuery(this.scrollRows[d])
      .outerHeight();
    a = rowHeight > a ? rowHeight : a
  }
  jQuery(this.scroll)
    .height(a);
  jQuery(this.tableCopy)
    .css("margin-bottom", - a);
  jQuery("tbody td", this.tableCopy)
    .height(a);
  jQuery("thead", this.table)
    .hide();
  jQuery("tbody tr:not(:first-child)", this.table)
    .hide();
  setTimeout(function() {
    e.preload()
  }, this.timer)
};
AEGON.TickerTape.prototype.preload = function() {
  var a = this;
  if (Modernizr.csstransitions) {
    jQuery(this.scroll)
      .addClass("hide")
  } else {
    jQuery(this.table)
      .animate({
      opacity: 0,
      marginTop: "24px"
    }, 500)
  }
  setTimeout(function() {
    a.load()
  }, 500)
};
AEGON.TickerTape.prototype.load = function() {
  var b = this;
  jQuery(this.scroll)
    .addClass("hidden")
    .removeClass("hide");
  var a = this.currentIndex + 1 < this.scrollRows.length ? this.currentIndex + 1 : 0;
  jQuery(this.scrollRows[this.currentIndex])
    .hide();
  jQuery(this.scrollRows[a])
    .show();
  this.currentIndex = a;
  setTimeout(function() {
    b.loaded()
  }, 200)
};
AEGON.TickerTape.prototype.loaded = function() {
  var a = this;
  jQuery(this.scroll)
    .removeClass("hidden");
  if (!Modernizr.csstransitions) {
    jQuery(this.table)
      .css("marginTop", "-24px");
    jQuery(this.table)
      .animate({
      opacity: 1,
      marginTop: "0"
    }, 500)
  }
  setTimeout(function() {
    a.preload()
  }, this.timer)
};
AEGON.Lifecycles = function() {
  var a = this;
  jQuery(".lifecycle li:first-child a")
    .addClass("selected");
  jQuery(".lifecycle li a")
    .bind("mouseover", function(b) {
    a.select(this)
  })
    .bind("focus", function(b) {
    a.select(this)
  })
};
AEGON.Lifecycles.prototype.select = function(a) {
  jQuery("a", jQuery(a)
    .parent("li")
    .siblings())
    .removeClass("selected");
  jQuery(a)
    .addClass("selected")
};
AEGON.ListLoop = function(a) {
  if (a) {
    this.rootNode = a;
    this.currentIndex = 0;
    this.init()
  }
};
AEGON.ListLoop.prototype.init = function() {
  var f = this;
  var b = jQuery(this.rootNode)
    .attr("data-timer");
  this.timer = b ? b : 5000;
  this.items = jQuery("li", this.rootNode);
  var c = this.items.length;
  if (c > 1) {
    var a = 0;
    for (var d = c; d--;) {
      if (jQuery(this.items[d])
        .hasClass("active")) {
        var e = jQuery(this.items[d])
          .outerHeight();
        a = e > a ? e : a;
        this.currentIndex = d
      }
    }
    jQuery(this.rootNode)
      .height(a);
    jQuery(this.rootNode)
      .bind("mouseover", function() {
      clearTimeout(f.timeout)
    })
      .bind("mouseout", function() {
      f.load()
    });
    this.timeout = setTimeout(function() {
      f.load()
    }, this.timer)
  }
};
AEGON.ListLoop.prototype.load = function() {
  var b = this;
  var a = this.currentIndex + 1 < this.items.length ? this.currentIndex + 1 : 0;
  if (Modernizr.csstransitions) {
    jQuery(this.items[this.currentIndex])
      .removeClass("active");
    jQuery(this.items[a])
      .addClass("active")
  } else {
    jQuery(this.items[this.currentIndex])
      .animate({
      opacity: 0
    }, 1000);
    jQuery(this.items[a])
      .animate({
      opacity: 1
    }, 1000)
  }
  this.currentIndex = a;
  this.timeout = setTimeout(function() {
    b.load()
  }, this.timer)
};
AEGON.DisplayToggle = function(b, a) {
  this.firstNode = jQuery(b);
  this.secondNode = jQuery(a);
  this.showing = this.firstNode;
  this.init()
};
AEGON.DisplayToggle.prototype.showing = null;
AEGON.DisplayToggle.prototype.init = function() {};
AEGON.DisplayToggle.prototype.toggleDisplay = function(a) {
  if (this.showing === this.firstNode && a == "smaller") {
    this.firstNode.replaceWith(this.secondNode);
    this.showing = this.secondNode;
    jQuery(this)
      .trigger("display")
  } else {
    if (this.showing === this.secondNode && a == "bigger") {
      this.secondNode.replaceWith(this.firstNode);
      this.showing = this.firstNode
    }
  }
};
AEGON.MoreMenu = function(a, b) {
  this.items = a;
  this.className = b;
  this.setup()
};
AEGON.MoreMenu.prototype = {
  windowSize: 0,
  items: null,
  moreItem: null,
  moreDropDown: null,
  setup: function() {
    this.moreDropDown = jQuery('<div class="' + this.className + ' more-dropdown"><ul></ul></div>');
    if (this.className !== "") {
      this.moreItem = jQuery('<li class="more"><a href="">Meer<span></span></a></li>')
    } else {
      this.moreItem = jQuery('<li class="more"><a href=""><span>Meer</span></a></li>')
    }
    this.moreItem.hide();
    jQuery("a", this.moreItem)
      .after(this.moreDropDown)
  },
  onResize: function(c) {
    this.windowSize = c;
    var h = 0,
      b = false,
      f = [],
      a = this.items.length,
      g = jQuery(this.items[a - 1])
        .outerWidth();
    jQuery("ul", this.moreDropDown)
      .empty();
    for (var d = 0; d < a; d++) {
      var e = jQuery(this.items[d]);
      if (this.windowSize === "smaller") {
        h += e.outerWidth();
        if (e.parent()
          .width() <= (h + g)) {
          f.push(e)
        } else {
          e.show()
        }
      } else {
        e.show();
        b = false
      }
    }
    this.collectItems(f, b)
  },
  collectItems: function(e, g) {
    var k, h, f = e[0],
      c = e.length;
    if (c > 1) {
      for (var b = 0; b < c; b++) {
        k = jQuery(e[b]);
        h = k;
        var d = k.children("a")
          .get(0);
        var j = jQuery(d)
          .clone();
        var a = document.createElement("li");
        if (k.hasClass("active")) {
          jQuery(a)
            .addClass("active")
        }
        k.hide();
        jQuery(a)
          .append(j);
        jQuery("ul", this.moreDropDown)
          .append(a);
        g = true
      }
    }
    if (g) {
      if (h) {
        jQuery(h)
          .before(this.moreItem);
        this.moreItem.css("display", "inline-block");
        jQuery(this)
          .trigger("smaller", this.moreItem)
      }
    } else {
      if (f) {
        jQuery(e[0])
          .show()
      }
      this.moreItem.hide()
    }
  }
};
AEGON.ResizeManager = {
  timer: null,
  time: 100,
  init: function() {
    var a = this;
    jQuery(window)
      .resize(function() {
      a.onResize()
    })
  },
  onResize: function() {
    var a = this;
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(function() {
      jQuery(a)
        .trigger("time")
    }, this.time)
  }
};
AEGON.ResizeManager.init();
AEGON.Resizer = function(a) {
  this.trigger = a
};
AEGON.Resizer.prototype.resize = function() {
  var a = this;
  this.onResize();
  jQuery(AEGON.ResizeManager)
    .bind("time", function() {
    a.onResize()
  })
};
AEGON.Resizer.prototype.onResize = function() {
  var a = "",
    b = document.documentElement.clientWidth;
  if (navigator.userAgent.indexOf("Safari") > -1) {
    b = document.documentElement.clientWidth
  } else {
    b = window.innerWidth
  }
  if (b <= this.trigger) {
    a = "smaller"
  } else {
    a = "bigger"
  }
  jQuery(this)
    .trigger("resizing", [a])
};
AEGON.ResponsiveHeader = function(a) {
  if (a) {
    this.rootNode = a;
    this.init()
  }
};
AEGON.ResponsiveHeader.prototype.init = function() {
  var h = this,
    i = false,
    j = jQuery(".navigation-additional", this.rootNode),
    b = jQuery('<div class="dropdown-additional" />'),
    c = jQuery('<a href="#">Direct naar <span></span></a>'),
    e = jQuery(".quick-search", h.rootNode),
    f = new AEGON.Resizer(660),
    g = j.parent(),
    a = jQuery(".wrapper", this.rootNode),
    k = null,
    d = false;
  jQuery(f)
    .bind("resizing", function(m, l) {
    if (l === "smaller" && i === false) {
      if (j.children()
        .length > 1) {
        j.wrap(b);
        c.insertBefore(j);
        c.click(function(n) {
          n.preventDefault()
        });
        k = jQuery(".dropdown-additional");
        k.click(function(n) {
          n.stopPropagation();
          if (!d) {
            jQuery(this)
              .addClass("open");
            d = true;
            jQuery(".wrapper")
              .bind("click", function(o) {
              if (!jQuery(o.target)
                .is(j.find("*"))) {
                k.removeClass("open");
                jQuery(this)
                  .unbind("click");
                d = false
              }
            })
          } else {
            jQuery(this)
              .removeClass("open");
            d = false;
            jQuery(".wrapper")
              .unbind("click")
          }
        })
      } else {
        a.addClass("no-dd")
      }
      if (e.length !== 0) {
        if (jQuery(".login-search-wrapper")
          .length !== 0) {
          jQuery(".login-search-wrapper")
            .prepend('<button class="btn-search" />')
        }
      }
      jQuery(".btn-search")
        .click(function() {
        a.toggleClass("search-visible")
      });
      i = true
    } else {
      if (l === "bigger") {
        k = jQuery(".dropdown-additional");
        if (k) {
          jQuery(".btn-search")
            .remove();
          k.remove();
          jQuery(g)
            .prepend(j);
          i = false
        }
        e.show()
      }
    }
  });
  f.resize()
};
AEGON.ResponsiveIFrame = function(a) {
  if (a) {
    this.rootNode = a;
    if (!jQuery(this.rootNode)
      .parent()
      .hasClass("video-wrapper")) {
      this.init()
    }
  }
};
AEGON.ResponsiveIFrame.prototype.init = function() {
  var a;
  if (jQuery(this.rootNode)
    .attr("data-content-link")) {
    a = jQuery(this.rootNode)
      .attr("data-content-link")
  } else {
    a = "Klik hier om de content te bekijken"
  }
  var e = jQuery(this.rootNode)
    .attr("src");
  var c = jQuery('<a href="' + e + '" target="_blank" class="iframe-link">' + a + "</a>");
  var b = new AEGON.DisplayToggle(this.rootNode, c);
  var d = new AEGON.Resizer(740);
  jQuery(d)
    .bind("resizing", function(g, f) {
    b.toggleDisplay(f)
  });
  d.resize()
};
AEGON.ResponsiveProductNav = function(a) {
  if (a) {
    this.rootNode = a;
    this.contentFoldControl = null;
    this.contentFoldControlActive = false;
    this.init()
  }
};
AEGON.ResponsiveProductNav.prototype.init = function() {
  var a = new AEGON.Resizer(480);
  var b = this;
  jQuery(a)
    .bind("resizing", function(d, c) {
    b.onResize(c)
  });
  a.resize()
};
AEGON.ResponsiveProductNav.prototype.onResize = function(e) {
  if (e === "smaller" && !this.contentFoldControlActive) {
    this.contentFoldControlActive = true;
    this.contentFoldControl = new AEGON.ContentFoldControl(this.rootNode, "basic-fold-js", true, "h2", ".product-col");
    var d = jQuery("h2 a", this.rootNode),
      a = jQuery("ul", this.rootNode),
      c = d.length;
    for (var f = 0; f < c; f++) {
      var g = '<li><strong><a href="' + jQuery(d[f])
        .attr("href") + '">' + (d[f].innerHTML + " overzicht") + "</a></strong></li>";
      jQuery(a[f])
        .prepend(g)
    }
  } else {
    if (e === "bigger" && this.contentFoldControlActive) {
      var b = jQuery("strong", this.rootNode),
        c = b.length;
      for (var f = 0; f < c; f++) {
        jQuery(b[f])
          .parent()
          .remove()
      }
      this.contentFoldControlActive = false;
      this.contentFoldControl.unload()
    }
  }
};
AEGON.ResponsiveTable = function(a) {
  if (!a) {
    return
  }
  this.table = jQuery(a);
  this._setup();
  this._init()
};
var p = AEGON.ResponsiveTable.prototype;
p.table = null;
p._thead = null;
p._tbody = null;
p._firstHdrCols = null;
p._secondHdrCols = null;
p._bodyRows = null;
p._container = null;
p._setup = function() {
  this._thead = this.table.find("thead");
  this._tbody = this.table.find("tbody");
  this._firstHdrCols = this._thead.find("tr:eq(0) th");
  this._secondHdrCols = this._thead.find("tr:eq(1) th");
  this._bodyRows = this._tbody.find("tr");
  this._container = jQuery('<div class="table-menu table-menu-hidden"><ul /></div>')
};
p._init = function() {
  this.table.addClass("enhanced");
  var h = this,
    k = this._secondHdrCols.length,
    a = [],
    e = [],
    g = 0,
    j = this._firstHdrCols.length;
  for (g; g < j; g++) {
    var d = jQuery(this._firstHdrCols[g]),
      c = d.attr("id"),
      b = d.attr("class");
    e.push(b);
    if (!c) {
      c = ("col-") + g;
      d.attr("id", c);
      a.push(c)
    }
    if (k != 0) {
      var f = jQuery(this._secondHdrCols[g]);
      f.attr("headers", c);
      f.addClass(b)
    }
    this._setupToggle(g, d, c)
  }
  this._setupCols(a, e);
  this._setupMenu();
  jQuery(window)
    .bind("orientationchange resize", function() {
    h._container.find("input")
      .trigger("updateCheck")
  })
};
p._setupCols = function(e, d) {
  var c = 0,
    a = this._bodyRows.length;
  for (c; c < a; c++) {
    var b = jQuery(this._bodyRows[c])
      .find("th,td");
    this._setCellProps(e, b, d)
  }
};
p._setCellProps = function(f, b, d) {
  var c = 0,
    e = f.length;
  for (c; c < e; c++) {
    var a = jQuery(b[c]);
    jQuery(a)
      .addClass(d[c]);
    jQuery(a)
      .attr("headers", f[c])
  }
};
p._setupToggle = function(b, c, f) {
  if (!c.is(".persist")) {
    var e = this,
      a = jQuery('<li><input type="checkbox" name="toggle-cols" id="toggle-col-' + b + '" value="' + f + '" /> <label for="toggle-col-' + b + '">' + c.text() + "</label></li>"),
      d = a.find("input");
    this._container.find("ul")
      .append(a);
    d.change(function() {
      var g = jQuery(this),
        i = g.val(),
        h = e.table.find("#" + i + ", [headers=" + i + "]");
      if (g.is(":checked")) {
        h.show()
      } else {
        h.hide()
      }
    });
    d.bind("updateCheck", function() {
      if (c.css("display") == "table-cell") {
        jQuery(this)
          .attr("checked", true)
      } else {
        jQuery(this)
          .attr("checked", false)
      }
    });
    d.trigger("updateCheck")
  }
};
p._setupMenu = function() {
  var c = this,
    b = jQuery('<div class="table-menu-wrapper" />'),
    a = jQuery('<a href="#" class="table-menu-btn">Opties</a>');
  b.append(a)
    .append(this._container);
  this.table.before(b);
  a.click(function() {
    c._container.toggleClass("table-menu-hidden");
    return false
  });
  jQuery("#content")
    .click(function(d) {
    if (!jQuery(d.target)
      .is(c._container) && !jQuery(d.target)
      .is(c._container.find("*"))) {
      c._container.addClass("table-menu-hidden")
    }
  })
};
AEGON.HeaderCarousel = function(a) {
  this.rootNode = a;
  this.slides = null;
  this.slideIndexButtons = jQuery(".slide-index button", this.rootNode);
  this.prevButton = jQuery(".prev", this.rootNode);
  this.nextButton = jQuery(".next", this.rootNode);
  this.slideDuration = 600;
  this.timer = null;
  this.init()
};
AEGON.HeaderCarousel.prototype.init = function() {
  var b = this;
  this.rootNode.addClass("header-carousel-js");
  jQuery(".prev", this.rootNode)
    .hide();
  if (Modernizr.touch) {
    this.rootNode.addClass("touch")
  }
  var a = document.getElementById("slides");
  this.slides = new Swipe(a, {
    continuous: true,
    speed: this.slideDuration,
    callback: function(c, d) {
      b.setSlideIndex(c)
    }
  });
  this.slideIndexButtons.click(function() {
    var c = b.slideIndexButtons.index(this);
    b.slides.cancel();
    b.slides.slide(c, b.slideDuration)
  });
  this.nextButton.click(function() {
    b.stopTimer();
    b.slides.next()
  });
  this.prevButton.click(function() {
    b.stopTimer();
    b.slides.prev()
  });
  this.rootNode.mouseenter(function() {
    b.stopTimer()
  });
  this.rootNode.mouseleave(function() {
    b.startTimer()
  });
  this.rootNode.bind("touchstart", function() {
    b.stopTimer()
  });
  this.rootNode.bind("touchend", function() {
    b.startTimer()
  });
  this.startTimer()
};
AEGON.HeaderCarousel.prototype.startTimer = function() {
  var a = this;
  this.timer = setInterval(function() {
    a.slides.next()
  }, 4000)
};
AEGON.HeaderCarousel.prototype.stopTimer = function() {
  clearInterval(this.timer)
};
AEGON.HeaderCarousel.prototype.setSlideIndex = function(a) {
  var b = this;
  this.slideIndexButtons.removeClass("active");
  jQuery(this.slideIndexButtons[a])
    .addClass("active");
  if (a === 0) {
    this.prevButton.hide()
  } else {
    this.prevButton.show()
  }
  if (a === this.slideIndexButtons.length - 1) {
    this.nextButton.hide()
  } else {
    this.nextButton.show()
  }
};
