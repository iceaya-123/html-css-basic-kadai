const clickBtn = document.getElementById('btn');
const h2Text = document.getElementById('text');
clickBtn.addEventListener('click', () => {
    h2Text.textContent = "ボタンをクリックしました";
});