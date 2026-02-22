/* ================= LOAD HEADER ================= */

async function loadHeader() {
  const res = await fetch("common/header/header.html");
  document.getElementById("header").innerHTML = await res.text();
  initMobileMenu();
}

/* ================= MOBILE MENU ================= */

function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("navigation");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll(".has-sub > a").forEach(link => {
    link.addEventListener("click", function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        const parent = this.parentElement;

        nav.querySelectorAll(".has-sub").forEach(item => {
          if (item !== parent) item.classList.remove("open");
        });

        parent.classList.toggle("open");
      }
    });
  });
}

/* ================= DYNAMIC BANNER ================= */

function loadPageBanner() {

  const bannerContainer = document.getElementById("pageBanner");
  if (!bannerContainer) return;

  const currentPage = window.location.pathname.split("/").pop();

  // ❌ no banner for home
  if (currentPage === "index.html" || currentPage === "") return;

  const bannerData = {
    "blog-single.html": "Blog Single",
    "blog-default.html": "Blog",
    "service-list.html": "Service List",
    "service-detail.html": "Service Detail",
    "contact.html": "Contact"
  };

  const title = bannerData[currentPage] || "Page";

  bannerContainer.innerHTML = `
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-caption">
              <h2 class="page-title">${title}</h2>
              <div class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li class="active">${title}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ================= DYNAMIC FOOTER ================= */

function loadFooter() {

  const footerContainer = document.getElementById("footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
  <div class="footer">
    <div class="container">
      <div class="footer-block">
        <div class="row">

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="footer-widget">
              <h2 class="widget-title">Salon Address</h2>
              <ul class="listnone contact">
                <li><i class="fa fa-map-marker"></i> D151, First Floor, Phase 8, Industrial Area, SAS Nagar - (160071)</li>
                <li><i class="fa fa-phone"></i> 91 172 402 6688</li>
                <li><i class="fa fa-fax"></i> +91 931 500 0086</li>
                <li><i class="fa fa-envelope-o"></i> info@wisdominfosoft.com</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="footer-widget footer-social">
              <h2 class="widget-title">Social Feed</h2>
              <ul class="listnone">
                <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i> Google Plus</a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i> Linked In</a></li>
                <li><a href="#"><i class="fa fa-youtube"></i> Youtube</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="footer-widget widget-newsletter">
              <h2 class="widget-title">Newsletters</h2>
              <p>Enter your email address to receive updates.</p>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Email Address">
                <span class="input-group-btn">
                  <button class="btn btn-default">Subscribe</button>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div class="tiny-footer">
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-content">
                <p>© WISDOM INFOSOFT ${new Date().getFullYear()} | all rights reserved</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  `;
}

/* ================= INIT LAYOUT ================= */

loadHeader();
loadPageBanner();
loadFooter();
