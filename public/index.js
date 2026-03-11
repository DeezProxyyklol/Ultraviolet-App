"use strict";

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const iframe = document.getElementById("uv-frame");
const statusText = document.getElementById("uv-status");

// Establish the BareMux connection to a public V3 Wisp server
// This is the absolute key to making it work on Vercel
connection.setTransport("/epoxy/index.mjs", [{ wisp: "wss://wisp.mercurywork.shop/" }]);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  statusText.innerText = "STATUS: INITIALIZING V3 WISP CONNECTION...";
  statusText.style.color = "#00b359";

  try {
    await registerSW();
  } catch (err) {
    statusText.innerText = "STATUS: FATAL SERVICE WORKER ERROR.";
    statusText.style.color = "#ff0022";
    console.error(err);
    return;
  }
  
  const url = search(address.value, searchEngine.value);
  iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  statusText.innerText = `STATUS: SECURE UPLINK ESTABLISHED.`;
});
