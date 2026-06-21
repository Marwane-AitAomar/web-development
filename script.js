/* ── CART ─────────────────────────────────────────────── */
let count = 0;
const cartCount = document.getElementById("cart-count");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(name) {
  toast.textContent = `✓ ${name} added to cart`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    cartCount.style.transform = "scale(1.4)";
    setTimeout(() => (cartCount.style.transform = ""), 200);
    showToast(btn.dataset.name || "Item");
  });
});

/* ── FILTER TABS ──────────────────────────────────────── */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
