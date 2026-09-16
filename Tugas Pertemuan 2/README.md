# 🎓 Portfolio Website - Ahmad Gifar

Portfolio website modern dengan JavaScript interaktif untuk mahasiswa Teknik Komputer Universitas Negeri Makassar.

## 📁 Struktur File

```
Tugas Pertemuan 2/
├── portofolioTugas.html    # File HTML utama
├── style.css                # Styling dasar
├── animations.css           # Styling untuk animasi dan efek
├── script.js                # JavaScript utama dengan 15+ fitur
├── particles.js             # (Optional) Particle background effect
├── images/                  # Folder untuk gambar
│   └── profile.jpeg        # Foto profil
├── FITUR_JAVASCRIPT.md     # Dokumentasi lengkap fitur
├── TEST_CHECKLIST.md       # Checklist untuk testing
└── README.md               # File ini
```

## 🚀 Cara Menggunakan

### Quick Start
1. **Buka file**: Double-click `portofolioTugas.html`
2. **Atau drag & drop** file HTML ke browser
3. **Atau klik kanan** → Open with → Browser pilihan Anda

### Untuk Development
```bash
# Jika punya live server
cd "Tugas Pertemuan 2"
# Gunakan live server extension di VS Code
# Atau python -m http.server 8000
```

## ✨ Fitur Utama

### 🎯 Core Features
- ✅ **Smooth Scrolling Navigation** - Navigasi halus ke setiap section
- ✅ **Scroll Progress Bar** - Indikator progress di atas halaman
- ✅ **Back to Top Button** - Tombol floating untuk kembali ke atas
- ✅ **Intersection Observer Animations** - Animasi saat elemen muncul
- ✅ **Dynamic Skill Bars** - Progress bar animasi untuk keahlian

### 🎨 Visual Effects
- ✅ **Typing Effect** - Logo header dengan efek mesin ketik
- ✅ **Parallax Scrolling** - Efek parallax pada profile image
- ✅ **Hover Animations** - Smooth hover effects pada semua elemen
- ✅ **Dark Mode Toggle** - Mode gelap dengan localStorage persistence
- ✅ **Lazy Loading Images** - Gambar load saat dibutuhkan

### 📱 Responsive Features
- ✅ **Mobile Hamburger Menu** - Menu slide-in untuk mobile
- ✅ **Responsive Layout** - Optimal di semua ukuran layar
- ✅ **Touch Friendly** - Optimized untuk touch devices
- ✅ **Adaptive Animations** - Animasi menyesuaikan device

### 🔧 Advanced Features
- ✅ **Sticky Header** - Header tetap di atas saat scroll
- ✅ **Auto-hide Header** - Header sembunyi saat scroll cepat
- ✅ **Custom Tooltips** - Tooltip cantik untuk info tambahan
- ✅ **Easter Egg** - Konami code surprise!
- ✅ **Performance Monitoring** - Console warnings untuk operasi lambat

## 🎨 Customization

### Mengubah Warna
Edit di `style.css` atau `animations.css`:
```css
/* Cari dan ganti warna primary */
#0056b3  →  YOUR_COLOR
#003d82  →  YOUR_DARKER_COLOR
```

### Mengubah Kecepatan Animasi
Edit di `script.js`:
```javascript
const config = {
    scrollThreshold: 300,    // Kapan back-to-top muncul
    animationDuration: 600,  // Durasi animasi (ms)
    typingSpeed: 100,        // Kecepatan typing (ms)
    deletingSpeed: 50        // Kecepatan delete (ms)
};
```

### Mengubah Teks Typing Effect
Edit di `script.js`:
```javascript
const texts = [
    'Portofolio Ahmad Gifar',
    'Web Developer 💻',
    'Network Engineer 🌐',
    'IoT Enthusiast 🤖'
    // Tambahkan teks Anda di sini
];
```

### Menambah/Mengurangi Skill
Edit di `portofolioTugas.html`:
```html
<ul class="skill-list">
    <li>Skill Baru Anda</li>
    <!-- Akan otomatis dapat progress bar -->
</ul>
```

## 🎁 Fitur Optional

### Particle Background Effect
Untuk menambahkan efek partikel interaktif:

1. Tambahkan di `portofolioTugas.html` sebelum `</body>`:
```html
<script src="particles.js"></script>
```

2. Tambahkan di `script.js` di bagian bawah:
```javascript
// Di akhir file, setelah semua fungsi
if (window.innerWidth > 768) {
    initParticles();
}
```

**Note**: Fitur ini hanya aktif di desktop untuk performa optimal.

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Opera   | 76+     | ✅ Full |
| IE 11   | -       | ⚠️ Partial |

## 🔍 Testing

Gunakan `TEST_CHECKLIST.md` untuk testing lengkap. Quick checks:

```bash
✓ Buka di 2+ browser berbeda
✓ Test di mobile dan desktop
✓ Test dark mode toggle
✓ Test semua navigasi
✓ Check console untuk errors
```

## 🐛 Troubleshooting

### JavaScript tidak berjalan
```bash
✓ Check semua file di folder yang sama
✓ Buka Console (F12) untuk lihat errors
✓ Pastikan JavaScript enabled di browser
```

### Animasi lag/patah-patah
```bash
✓ Normal di mobile device lama
✓ Close tab/aplikasi lain
✓ Animasi akan reduced jika user set prefers-reduced-motion
```

### Dark mode tidak save
```bash
✓ Check browser allow localStorage
✓ Clear cache dan reload (Ctrl+Shift+R)
✓ Test di incognito mode
```

## 📚 Dokumentasi Lengkap

- **FITUR_JAVASCRIPT.md** - Dokumentasi detail semua fitur
- **TEST_CHECKLIST.md** - Panduan testing lengkap
- **particles.js** - Source code particle effect (optional)

## 🎓 Teknologi yang Digunakan

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Grid & Flexbox
- **JavaScript ES6+** - Vanilla JS tanpa framework

### JavaScript APIs
- Intersection Observer API
- Local Storage API
- Performance Observer API
- Scroll Behavior API
- Canvas API (untuk particles)

### CSS Features
- CSS Animations & Transitions
- CSS Grid & Flexbox
- Media Queries
- CSS Transform & Translate
- Custom Properties (dapat ditambahkan)

## ⚡ Performance

### Optimization Techniques
- ✅ Lazy loading images
- ✅ Debounced scroll events
- ✅ Hardware-accelerated animations (CSS transform)
- ✅ Intersection Observer (bukan scroll listener)
- ✅ RequestAnimationFrame untuk smooth animations
- ✅ Minimal DOM manipulation

### Metrics Target
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90

## 🔒 Security

- ✅ No external dependencies (no CDN vulnerabilities)
- ✅ No inline scripts (CSP-friendly)
- ✅ No eval() or dangerous functions
- ✅ Sanitized user inputs (jika ada form)
- ✅ localStorage only for theme preference

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels untuk buttons
- ✅ Keyboard navigation support
- ✅ Focus visible untuk keyboard users
- ✅ Prefers-reduced-motion support
- ✅ Color contrast meets WCAG AA
- ✅ Alt text untuk semua images

## 🎯 SEO Optimization

- ✅ Meta descriptions
- ✅ Meta keywords
- ✅ Semantic HTML tags
- ✅ Proper heading hierarchy
- ✅ Alt text untuk images
- ✅ Theme color untuk mobile

## 📝 Changelog

### Version 2.0 (Current)
- ✨ Added 15+ JavaScript features
- ✨ Dark mode implementation
- ✨ Mobile responsive menu
- ✨ Scroll animations
- ✨ Skill progress bars
- ✨ Performance optimizations

### Version 1.0
- 🎉 Initial release
- Basic HTML/CSS structure
- Static content

## 🤝 Contributing

Jika ingin menambahkan fitur:

1. Buat branch baru
2. Tambahkan fitur Anda
3. Test di multiple browsers
4. Update dokumentasi
5. Submit pull request

## 📞 Contact

**Ahmad Gifar**
- Email: ahmad.gifar.ac.id
- LinkedIn: [linkedin.com/in/ahmadgifar](https://linkedin.com/in/ahmadgifar)
- GitHub: [github.com/AhmadGifar](https://github.com/griftzz2007-cyber/griftzz.github.io.git)

## 📄 License

© 2026 Ahmad Gifar - All Rights Reserved

Dibuat untuk keperluan akademik Mata Kuliah Pemrograman Web, Universitas Negeri Makassar.

---

## 🌟 Tips & Tricks

### Untuk Presentasi
1. Buka di fullscreen mode (F11)
2. Aktifkan dark mode untuk efek dramatic
3. Scroll perlahan untuk tunjukkan animations
4. Demonstrate mobile responsive dengan DevTools

### Untuk Development
1. Gunakan Live Server untuk auto-reload
2. Buka DevTools untuk debugging
3. Test di incognito untuk fresh state
4. Use Lighthouse untuk performance audit

### Untuk Customization
1. Mulai dengan mengubah warna
2. Ganti foto profile dengan foto Anda
3. Update konten sesuai portfolio Anda
4. Tambahkan project-project Anda

---

**Made with ❤️ and Vanilla JavaScript**

*"Simple, Clean, and Performant"*

---

### 🎉 Easter Eggs

Ada surprise tersembunyi di website ini! Coba temukan dengan:
- Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
- Atau eksplorasi sendiri! 😉

---

**Happy Coding! 🚀**
