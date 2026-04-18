// ============================================
// Form Utilities
// ============================================

export class FormHandler {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) throw new Error(`Form with id "${formId}" not found`);
  }

  attachSubmitHandler(callback) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = this.getFormData();
      
      if (this.validate(formData)) {
        callback(formData);
      }
    });
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData);
  }

  validate(data) {
    const requiredFields = this.form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!data[field.name] || data[field.name].trim() === '') {
        this.showError(field, 'This field is required');
        isValid = false;
      }
    });

    return isValid;
  }

  showError(field, message) {
    field.classList.add('error');
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    field.parentNode.appendChild(errorEl);
  }

  clearErrors() {
    this.form.querySelectorAll('.error').forEach((el) => {
      el.classList.remove('error');
    });
    this.form.querySelectorAll('.error-message').forEach((el) => {
      el.remove();
    });
  }

  reset() {
    this.form.reset();
    this.clearErrors();
  }

  setLoading(isLoading) {
    const btn = this.form.querySelector('button[type="submit"]');
    if (isLoading) {
      btn.disabled = true;
      btn.dataset.originalText = btn.textContent;
      btn.textContent = 'Sending...';
    } else {
      btn.disabled = false;
      btn.textContent = btn.dataset.originalText;
    }
  }
}

// ============================================
// Lead Capture
// ============================================

export async function submitLead(data) {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
        source: window.location.pathname,
        userAgent: navigator.userAgent,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Lead submission error:', error);
    throw error;
  }
}

// ============================================
// Local Storage
// ============================================

export const Storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage error:', e);
      return null;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Storage error:', e);
    }
  },
};

// ============================================
// Analytics
// ============================================

export const Analytics = {
  trackEvent(eventName, data = {}) {
    // Google Analytics, Mixpanel, etc.
    if (window.gtag) {
      window.gtag('event', eventName, data);
    }
    console.log(`[Analytics] Event: ${eventName}`, data);
  },

  trackPageView(page) {
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
      });
    }
  },
};

// ============================================
// DOM Utilities
// ============================================

export const DOM = {
  query(selector) {
    return document.querySelector(selector);
  },

  queryAll(selector) {
    return document.querySelectorAll(selector);
  },

  create(tag, className = '', content = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.innerHTML = content;
    return el;
  },

  addClass(el, className) {
    el.classList.add(className);
  },

  removeClass(el, className) {
    el.classList.remove(className);
  },

  toggleClass(el, className) {
    el.classList.toggle(className);
  },

  on(el, event, handler) {
    el.addEventListener(event, handler);
  },

  off(el, event, handler) {
    el.removeEventListener(event, handler);
  },
};

// ============================================
// Validation
// ============================================

export const Validators = {
  email(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  phone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
  },

  password(password) {
    return password.length >= 8;
  },

  url(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
};
