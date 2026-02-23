document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOAD HEADER
  ========================= */
  fetch("common/header/header.html")
    .then(res => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("common-header").innerHTML = html;
      initHeaderMenu();
      setActiveMenu();
    })
    .catch(console.error);


  /* =========================
     LOAD FOOTER
  ========================= */
  fetch("common/footer/footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("common-footer").innerHTML = html;
    })
    .catch(console.error);

});

/* =========================
   HEADER MENU TOGGLE
========================= */
function initHeaderMenu() {
  const toggle = document.querySelector(".header-menu-toggle");
  const nav = document.querySelector("#header-nav-wrap");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", e => {
    e.preventDefault();
    nav.classList.toggle("is-open");
    toggle.classList.toggle("is-clicked");
  });
}

/* =========================
   ACTIVE MENU
========================= */
function setActiveMenu() {
  const items = document.querySelectorAll(".header-main-nav li");
  const hash = window.location.hash;

  items.forEach(li => li.classList.remove("current"));

  items.forEach(li => {
    const a = li.querySelector("a");
    if (a && a.getAttribute("href") === hash) {
      li.classList.add("current");
    }
  });
}document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("signup-modal");
  if (!modal) return;

  // OPEN MODAL (works with fetchable header)
  document.body.addEventListener("click", e => {
    const btn = e.target.closest(".cta");
    if (!btn) return;

    e.preventDefault();
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  });

  // CLOSE BUTTON
  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  });

  // CLOSE ON OVERLAY CLICK
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  });

});

function setActiveMenu() {
  const items = document.querySelectorAll(".header-main-nav li");
  const currentPage = window.location.pathname.split("/").pop();

  items.forEach(li => li.classList.remove("current"));

  items.forEach(li => {
    const a = li.querySelector("a");
    if (!a) return;

    const linkPage = a.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      li.classList.add("current");
    }
  });
}
