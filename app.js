const toast=document.getElementById('toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelectorAll('[data-demo]').forEach(btn=>btn.addEventListener('click',()=>{const type=btn.dataset.demo;showToast(type==='theme'?'Theme preview siap dikembangkan ✦':type==='login'?'Halaman login akan segera hadir ✦':'Pendaftaran mailbox akan segera hadir ✦')}));
document.querySelector('.menu-btn')?.addEventListener('click',()=>showToast('Menu mobile siap dikembangkan ✦'));

// Hilangkan bagian harga/premium dari tampilan.
document.getElementById('pricing')?.remove();
document.querySelector('nav a[href="#pricing"]')?.remove();
