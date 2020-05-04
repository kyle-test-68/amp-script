const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const p1 = document.getElementById('hidden');
    const button = document.getElementById('disabled');
    console.log("1");
    button.removeAttribute('hidden');
    console.log("2");
    p1.removeAttribute('hidden');
});