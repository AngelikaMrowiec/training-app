if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/training-app/sw.js', { scope: '/training-app/' })})}