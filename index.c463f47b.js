(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    c(e);
  new MutationObserver(e => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r)
  }
  ).observe(document, {
    childList: !0,
    subtree: !0
  });
  function d(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
      t
  }
  function c(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = d(e);
    fetch(e.href, t)
  }
}
)();
const l = document.getElementById("submit")
  , i = document.getElementsByClassName("rating-button")
  , u = document.getElementById("rating")
  , a = document.getElementById("thanks")
  , f = document.getElementById("chosen-rating");
var s = null;
l.disabled = !0;
for (let n = 0; n < i.length; n++)
  i[n].onclick = () => {
    l.disabled = !1,
      s = i[n].innerHTML
  }
    ;
l.onclick = () => {
  s != null && (u.style.display = "none",
    a.style.display = "inline",
    f.innerHTML = s)
}
  ;
