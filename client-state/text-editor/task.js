const editor = document.getElementById('editor');

function stateStorage() {
    editor.value = localStorage.getItem('text');
    editor.addEventListener('input', () => localStorage.setItem('text', editor.value));    
}

document.addEventListener('DOMContentLoaded', stateStorage);

// localStorage.clear()