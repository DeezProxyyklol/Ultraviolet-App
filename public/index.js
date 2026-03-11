<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultraviolet Terminal V3</title>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
    
    <script src="baremux/index.js" defer></script>
    <script src="epoxy/index.js" defer></script>
    <script src="uv/uv.bundle.js" defer></script>
    <script src="uv/uv.config.js" defer></script>
    <script src="register-sw.js" defer></script>
    <script src="search.js" defer></script>
    <script src="index.js" defer></script>
    
    <style>
        body { 
            background: #010104; color: #fff; font-family: 'Space Grotesk', sans-serif; 
            margin: 0; padding: 24px; display: flex; flex-direction: column; height: 100vh; 
            box-sizing: border-box; overflow: hidden;
        }
        .ambient {
            position: fixed; top: 0; left: 50%; transform: translateX(-50%);
            width: 80vw; height: 50vh; background: radial-gradient(ellipse at top, rgba(0,255,136,0.15), transparent 60%);
            pointer-events: none; z-index: -1;
        }
        form { display: flex; gap: 16px; margin-bottom: 24px; z-index: 10; }
        input { 
            flex-grow: 1; padding: 20px; background: rgba(0, 255, 136, 0.05); 
            border: 1px solid rgba(0, 255, 136, 0.2); color: #fff; font-family: monospace; 
            outline: none; border-radius: 16px; font-size: 1.1rem; transition: all 0.3s ease;
        }
        input:focus { border-color: #00ff88; box-shadow: 0 0 25px rgba(0, 255, 136, 0.2); background: rgba(0, 255, 136, 0.1); }
        button { 
            padding: 20px 40px; background: linear-gradient(135deg, #00ff88, #00b359); color: #000; 
            border-radius: 16px; border: none; cursor: pointer; font-weight: 700; font-family: inherit; transition: all 0.2s ease; 
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0, 255, 136, 0.4); }
        iframe { 
            flex-grow: 1; width: 100%; border: 1px solid rgba(255,255,255,0.1); background: #fff; 
            border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.6); z-index: 10;
        }
        .status { font-family: monospace; font-size: 0.85rem; margin-top: 20px; text-align: center; color: #8b85a3; letter-spacing: 1px; }
    </style>
</head>
<body>
    <div class="ambient"></div>

    <form id="uv-form">
        <input type="text" id="uv-address" placeholder="Initialize V3 Uplink (e.g., discord.com, 1v1.lol)" autocomplete="off">
        <input type="hidden" id="uv-search-engine" value="https://www.google.com/search?q=%s">
        <button type="submit">EXECUTE</button>
    </form>
    
    <iframe id="uv-frame"></iframe>
    <div class="status" id="uv-status">STATUS: V3 WISP ENGINE READY.</div>
</body>
</html>
