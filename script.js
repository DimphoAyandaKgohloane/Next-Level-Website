/* ==========================================================================
   Next Level Gaming & Esports Arena — script
   STATUS: stub only. Planned for the next development stage:
     - Calculator button: sum selected experiences, apply the tiered
       discount (2 bookings -5%, 3 -10%, 4+ -15%), then add 15% VAT.
     - Store the customer's selection in an array so the quote/invoice
       summary can be generated from it.
     - Client-side error handling / validation for the contact,
       enquiry and fees forms (data type + required-field checks).
     - Dropdown menu behaviour (mobile nav, sort/filter controls).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Highlight the current page in the nav based on the URL.
  var links = document.querySelectorAll(".main-nav a");
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
