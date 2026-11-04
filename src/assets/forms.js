document.querySelectorAll("form.ccf-form").forEach(function (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var status = form.querySelector(".form-status");
    var button = form.querySelector("button[type=submit]");
    var data = Object.fromEntries(new FormData(form).entries());
    button.disabled = true;
    status.className = "form-status";
    status.textContent = "Sending…";
    try {
      var res = await fetch(form.dataset.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      var out = await res.json().catch(function () { return {}; });
      if (res.ok && out.ok) {
        form.reset();
        status.classList.add("ok");
        status.textContent = form.dataset.success;
      } else {
        status.classList.add("err");
        status.textContent = out.error || "Something went wrong. Please email us at asuccf@gmail.com.";
      }
    } catch (err) {
      status.classList.add("err");
      status.textContent = "Something went wrong. Please email us at asuccf@gmail.com.";
    }
    button.disabled = false;
  });
});
