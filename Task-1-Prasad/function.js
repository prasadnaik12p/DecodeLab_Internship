const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMobile.setAttribute('aria-hidden', String(!isOpen));
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMobile.setAttribute('aria-hidden', 'true');
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const targetPanel = document.getElementById('panel-' + target);
    if (targetPanel) targetPanel.classList.add('active');
  });
});

const billingToggle = document.getElementById('billingToggle');
const priceEls = document.querySelectorAll('.plan-price');
let isAnnual = false;

billingToggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  billingToggle.setAttribute('aria-pressed', String(isAnnual));

  priceEls.forEach(el => {
    const monthly = el.dataset.monthly;
    const annual = el.dataset.annual;
    const amount = el.querySelector('.price-amount');
    const period = el.querySelector('.price-period');

    if (isAnnual) {
      amount.textContent = annual === '0' ? '$0' : '$' + annual;
      period.textContent = '/mo, billed annually';
    } else {
      amount.textContent = monthly === '0' ? '$0' : '$' + monthly;
      period.textContent = '/mo';
    }
  });
});

const featureCards = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

featureCards.forEach(card => observer.observe(card));

const contactForm = document.getElementById('contactForm');
const fieldName = document.getElementById('fieldName');
const fieldEmail = document.getElementById('fieldEmail');
const fieldMessage = document.getElementById('fieldMessage');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorMessage = document.getElementById('errorMessage');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

function clearError(input, errorEl) {
  input.classList.remove('error');
  errorEl.textContent = '';
}

fieldName.addEventListener('input', () => clearError(fieldName, errorName));
fieldEmail.addEventListener('input', () => clearError(fieldEmail, errorEmail));
fieldMessage.addEventListener('input', () => clearError(fieldMessage, errorMessage));

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formSuccess.textContent = '';

  let valid = true;

  if (fieldName.value.trim().length < 2) {
    fieldName.classList.add('error');
    errorName.textContent = 'Please enter your name.';
    valid = false;
  }

  if (!validateEmail(fieldEmail.value.trim())) {
    fieldEmail.classList.add('error');
    errorEmail.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (fieldMessage.value.trim().length < 10) {
    fieldMessage.classList.add('error');
    errorMessage.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (!valid) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  setTimeout(() => {
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send message';
    formSuccess.textContent = '✓ Message sent! We\'ll be in touch within one business day.';
  }, 1200);
});

const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  if (backTop) {
    backTop.style.opacity = window.scrollY > 400 ? '1' : '0.4';
  }
}, { passive: true });