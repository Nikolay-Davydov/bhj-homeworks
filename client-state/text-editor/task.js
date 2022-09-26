const editor = document.getElementById('editor');

editor.value = window.localStorage.text;
editor.addEventListener('input', () => window.localStorage.text = editor.value);
