// Simple interactive script
document.getElementById('clickMe').addEventListener('click', function() {
    document.getElementById('message').innerHTML = '✅ CI/CD Pipeline Working! Deployed at ' + new Date().toLocaleTimeString();
});