// assets/js/form-validation.js

(function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !(form instanceof HTMLFormElement) || !status) return;

  const fields = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "topic", label: "Topic" },
    { id: "message", label: "Message" },
  ];

  const setError = (id, message) => {
    const input = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);

    if (!input || !error) return;

    if (message) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", `${id}-error`);
      error.textContent = message;
    } else {
      input.removeAttribute("aria-invalid");
      if (input.getAttribute("aria-describedby") === `${id}-error`) {
        input.removeAttribute("aria-describedby");
      }
      error.textContent = "";
    }
  };

  const validate = () => {
    let firstInvalid = null;
    let errorCount = 0;

    for (const f of fields) {
      const el = document.getElementById(f.id);
      if (!el) continue;

      let message = "";

      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) {
        if (el.validity.valueMissing) {
          message = `${f.label} is required.`;
        } else if (el.validity.typeMismatch) {
          message = `Please enter a valid ${f.label.toLowerCase()}.`;
        } else if (el.validity.tooShort) {
          message = `${f.label} must be at least ${el.getAttribute("minlength")} characters.`;
        }
      }

      setError(f.id, message);

      if (message) {
        errorCount += 1;
        if (!firstInvalid) firstInvalid = el;
      }
    }

    if (errorCount > 0) {
      status.textContent = `Please fix ${errorCount} field${errorCount === 1 ? "" : "s"} below.`;
      if (firstInvalid && typeof firstInvalid.focus === "function") firstInvalid.focus();
      return false;
    }

    status.textContent = "Thanks! Your message is ready to send (demo form).";
    return true;
  };

  // Validate on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
  });

  // Clear errors as user edits
  for (const f of fields) {
    const el = document.getElementById(f.id);
    if (!el) continue;

    el.addEventListener("input", () => setError(f.id, ""));
    el.addEventListener("change", () => setError(f.id, ""));
  }
})();
