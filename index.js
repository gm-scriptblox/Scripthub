<script>
const path = window.location.pathname.slice(1);
fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://paste.rs/" + path))
  .then(r => r.text())
  .then(t => document.getElementById("content").textContent = t)
  .catch(e => document.getElementById("content").textContent = "Error fetching paste.");
</script>
