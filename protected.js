(function() {
    const devtools = new Function('debugger;');
    const check = setInterval(() => {
        const before = performance.now();
        devtools();
        const after = performance.now();
        if (after - before > 100) {
            alert('Developer tools tidak diizinkan!');
            window.location.href = 'about:blank'; // Redirect ke halaman kosong
        }
    }, 1000);
})();

(function() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            alert('Akses sumber halaman dibatasi!');
            e.preventDefault();
        }
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
})();

(function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                const value = input.value;
                const regex = /(['";#%&<>*^$!?])/g;
                if (regex.test(value)) {
                    alert('Input mengandung karakter berbahaya!');
                    event.preventDefault(); 
                }
            });
        });
    }
})();
