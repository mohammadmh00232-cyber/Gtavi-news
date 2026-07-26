/* =========================================================
   VICE WIRE — GTA News Site
   script.js
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------
     1) داده‌های خبری نمونه
     برای اتصال به یک API واقعی، این آرایه را با نتیجه‌ی
     fetch() از سرور خودتان جایگزین کنید.
  --------------------------------------------------- */
  const newsData = [
    {
      id: 1,
      category: 'gta6',
      categoryLabel: 'GTA 6',
      icon: '🌴',
      title: 'تحلیل کامل تریلر دوم GTA 6: چه چیزهایی از دست دادیم؟',
      desc: 'قاب‌به‌قاب تریلر دوم را بررسی کردیم تا جزئیات پنهان نقشه و شخصیت‌ها را پیدا کنیم.',
      date: '۲۲ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#ff2e7e,#ff7a3d)'
    },
    {
      id: 2,
      category: 'gta6',
      categoryLabel: 'GTA 6',
      icon: '🗺️',
      title: 'نقشه GTA 6 چقدر بزرگ‌تر از GTA 5 خواهد بود؟',
      desc: 'مقایسه مساحت لیونیدا با نقشه لوس‌سانتوس بر اساس شواهد موجود در تریلرها.',
      date: '۱۸ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#23e6ff,#ff2e7e)'
    },
    {
      id: 3,
      category: 'online',
      categoryLabel: 'GTA Online',
      icon: '💰',
      title: 'رویداد پاداش دوبرابر این هفته در GTA Online فعال شد',
      desc: 'لیست کامل مأموریت‌ها، فروشگاه‌ها و خودروهایی که تخفیف ویژه گرفته‌اند.',
      date: '۲۴ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#ff7a3d,#b81f5c)'
    },
    {
      id: 4,
      category: 'community',
      categoryLabel: 'جامعه',
      icon: '🎨',
      title: 'بهترین طرفداری‌های هنری هفته از دنیای GTA',
      desc: 'مروری بر خلاقانه‌ترین آثار هوادارانی که الهام‌گرفته از ویس‌سیتی جدید کار کرده‌اند.',
      date: '۲۰ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#5c1240,#23e6ff)'
    },
    {
      id: 5,
      category: 'gta6',
      categoryLabel: 'GTA 6',
      icon: '🎭',
      title: 'لوسیا و جیسون؛ زوج جدید داستان GTA چه رازی دارند؟',
      desc: 'نگاهی به روایت دو قهرمانه و اینکه چرا این تصمیم راک‌استار می‌تواند بازی را متحول کند.',
      date: '۱۵ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#ff2e7e,#5c1240)'
    },
    {
      id: 6,
      category: 'online',
      categoryLabel: 'GTA Online',
      icon: '🚗',
      title: 'معرفی تازه‌ترین خودروهای فروشگاه لگندری موتورسپورت',
      desc: 'سه خودروی جدید با مشخصات فنی کامل و بهترین گزینه برای مسابقات آنلاین.',
      date: '۱۲ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#23e6ff,#ff7a3d)'
    },
    {
      id: 7,
      category: 'community',
      categoryLabel: 'جامعه',
      icon: '🎙️',
      title: 'گفتگو با یک مود‌ساز معروف درباره آینده مودینگ در GTA 6',
      desc: 'صحبت با یکی از شناخته‌شده‌ترین سازندگان ماد درباره محدودیت‌ها و فرصت‌های نسخه جدید.',
      date: '۸ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#b81f5c,#23e6ff)'
    },
    {
      id: 8,
      category: 'gta6',
      categoryLabel: 'GTA 6',
      icon: '🌆',
      title: 'سیستم آب‌وهوای پویا در GTA 6 چطور بازی را تغییر می‌دهد',
      desc: 'بررسی فنی سیستم جدید آب‌وهوا و تأثیر آن روی رانندگی، شکار و مأموریت‌ها.',
      date: '۴ تیر ۱۴۰۵',
      gradient: 'linear-gradient(150deg,#ff7a3d,#23e6ff)'
    }
  ];

  /* ---------------------------------------------------
     2) رندر کارت‌های خبری
  --------------------------------------------------- */
  const newsGrid = document.getElementById('newsGrid');
  const noResults = document.getElementById('noResults');

  function renderNews(list) {
    newsGrid.innerHTML = '';
    if (list.length === 0) {
      noResults.hidden = false;
      return;
    }
    noResults.hidden = true;

    list.forEach((item, i) => {
      const card = document.createElement('article');
      card.className = 'news-card';
      card.style.animationDelay = `${i * 0.05}s`;
      card.dataset.category = item.category;
      card.innerHTML = `
        <div class="card-thumb" style="background:${item.gradient}">
          <span class="card-cat">${item.categoryLabel}</span>
          <span class="card-thumb-icon">${item.icon}</span>
        </div>
        <div class="card-body">
          <span class="card-meta">${item.date}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc}</p>
          <a href="#" class="card-link" data-id="${item.id}">ادامه مطلب ←</a>
        </div>
      `;
      newsGrid.appendChild(card);
    });
  }

  renderNews(newsData);

  /* ---------------------------------------------------
     3) فیلتر دسته‌بندی + جستجو
  --------------------------------------------------- */
  const tabs = document.querySelectorAll('.tab');
  const searchInput = document.getElementById('searchInput');
  const clearFiltersBtn = document.getElementById('clearFilters');
  let activeFilter = 'all';

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = newsData.filter(item => {
      const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
      const matchesQuery = !query ||
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    renderNews(filtered);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);

  clearFiltersBtn.addEventListener('click', () => {
    activeFilter = 'all';
    searchInput.value = '';
    tabs.forEach(t => t.classList.remove('active'));
    tabs[0].classList.add('active');
    renderNews(newsData);
  });

  /* ---------------------------------------------------
     4) باکس جستجوی هدر
  --------------------------------------------------- */
  const searchToggle = document.getElementById('searchToggle');
  const searchBox = document.getElementById('searchBox');

  searchToggle.addEventListener('click', () => {
    searchBox.classList.toggle('open');
    if (searchBox.classList.contains('open')) {
      setTimeout(() => searchInput.focus(), 300);
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* ---------------------------------------------------
     5) منوی موبایل
  --------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });

  /* ---------------------------------------------------
     6) هایلایت لینک فعال منو هنگام اسکرول
  --------------------------------------------------- */
  const sections = ['home', 'gta6', 'online', 'news', 'about']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.target === entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ---------------------------------------------------
     7) شمارش معکوس انتشار GTA 6
  --------------------------------------------------- */
  const releaseDate = new Date('2026-05-26T00:00:00');
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMins = document.getElementById('cdMins');
  const cdSecs = document.getElementById('cdSecs');

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    const now = new Date();
    let diff = releaseDate - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    cdDays.textContent = pad(days);
    cdHours.textContent = pad(hours);
    cdMins.textContent = pad(mins);
    cdSecs.textContent = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---------------------------------------------------
     8) بخش نظرات کاربران (ذخیره‌سازی محلی مرورگر)
  --------------------------------------------------- */
  const commentForm = document.getElementById('commentForm');
  const commentList = document.getElementById('commentList');
  const STORAGE_KEY = 'vicewire_comments';

  const defaultComments = [
    { name: 'رضا', text: 'اون تریلر دوم رو صد بار دیدم، هنوز باورم نمیشه اینقدر واقعی به‌نظر میاد!', time: '۲ روز پیش' },
    { name: 'سارا', text: 'امیدوارم این‌بار مود کردن بازی هم آسون‌تر باشه.', time: '۱ روز پیش' }
  ];

  function loadComments() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(saved) ? saved : defaultComments;
    } catch {
      return defaultComments;
    }
  }

  function saveComments(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      /* اگر ذخیره‌سازی محلی در دسترس نبود، بی‌صدا رد شو */
    }
  }

  let comments = loadComments();

  function renderComments() {
    commentList.innerHTML = '';
    comments.forEach(c => {
      const el = document.createElement('div');
      el.className = 'comment';
      el.innerHTML = `
        <div class="comment-avatar">${c.name.trim().charAt(0).toUpperCase() || '?'}</div>
        <div class="comment-body">
          <div class="comment-head">
            <span class="comment-name">${escapeHtml(c.name)}</span>
            <span class="comment-time">${c.time}</span>
          </div>
          <p class="comment-text">${escapeHtml(c.text)}</p>
        </div>
      `;
      commentList.appendChild(el);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  renderComments();

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('commentName');
    const textInput = document.getElementById('commentText');

    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    if (!name || !text) return;

    comments.unshift({ name, text, time: 'هم‌اکنون' });
    saveComments(comments);
    renderComments();

    commentForm.reset();
  });

  /* ---------------------------------------------------
     9) هدر شفاف هنگام اسکرول + دکمه بازگشت به بالا
  --------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 40;
    header.style.background = scrolled ? 'rgba(10,4,20,.9)' : 'rgba(10,4,20,.65)';
    backToTop.classList.toggle('show', window.scrollY > 500);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
