# UI Style Guide & Snippets

This document contains reusable HTML/CSS snippets and design patterns for the game wiki, specifically tailored to the **Nier: Automata** aesthetic using Tailwind CSS and custom styles.

## 1. Color Palette (Nier Inspired)

*   **Background:** `#0f0f12` (Dark Gray/Black)
*   **Text Primary:** `#e0e0e0` (Off-White)
*   **Accent Cyan:** `#00f0ff` (Interface highlights)
*   **Accent Red:** `#ff003c` (Warnings/Enemies)
*   **Border:** `#ffffff33` (Semi-transparent white)

## 2. Typography

We use a combination of sans-serif for body text and monospace for data/interface elements.

```html
<!-- Standard Heading -->
<h1 class="font-sans text-3xl uppercase tracking-widest text-white">Game Title</h1>

<!-- Data / Interface Text -->
<p class="font-mono text-sm text-cyan-400">MISSION STATUS: ACTIVE</p>
```

## 3. Component: Glitch Card (Hover Effect)

A card component that triggers a CSS glitch effect on hover, perfect for game covers.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Glitch Card</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .glitch-wrapper {
            position: relative;
            display: inline-block;
        }
        
        .glitch-card {
            transition: transform 0.3s ease;
            position: relative;
            z-index: 1;
        }

        .glitch-wrapper:hover .glitch-card {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
            border-color: #00f0ff;
        }

        /* Glitch Pseudo-elements */
        .glitch-wrapper::before,
        .glitch-wrapper::after {
            content: attr(data-title);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #1a1a1d;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .glitch-wrapper:hover::before {
            opacity: 0.4;
            animation: glitch-anim-1 0.4s infinite linear alternate-reverse;
            color: #ff003c;
            z-index: 0;
            transform: translate(-2px, 0);
        }

        .glitch-wrapper:hover::after {
            opacity: 0.4;
            animation: glitch-anim-2 0.4s infinite linear alternate-reverse;
            color: #00f0ff;
            z-index: -1;
            transform: translate(2px, 0);
        }

        @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-2px, 0, 0); }
            40%, 60% { transform: translate3d(2px, 0, 0); }
        }

        @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); }
            20% { clip-path: inset(60% 0 10% 0); }
            40% { clip-path: inset(40% 0 50% 0); }
            60% { clip-path: inset(80% 0 5% 0); }
            80% { clip-path: inset(10% 0 70% 0); }
            100% { clip-path: inset(30% 0 20% 0); }
        }

        @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); }
            20% { clip-path: inset(30% 0 20% 0); }
            40% { clip-path: inset(70% 0 10% 0); }
            60% { clip-path: inset(20% 0 50% 0); }
            80% { clip-path: inset(50% 0 30% 0); }
            100% { clip-path: inset(0% 0 80% 0); }
        }
    </style>
</head>
<body class="bg-gray-900 flex items-center justify-center h-screen">

    <div class="glitch-wrapper" data-title="NIER: AUTOMATA">
        <div class="glitch-card w-64 h-80 bg-gray-800 border border-white/20 flex items-center justify-center overflow-hidden">
            <img src="https://via.placeholder.com/256x320/000000/FFFFFF?text=GAME+COVER" alt="Game Cover" class="object-cover w-full h-full opacity-80">
            <div class="absolute bottom-4 left-4 font-mono text-cyan-400 text-xs">
                RPG / ACTION
            </div>
        </div>
    </div>

</body>
</html>
```

## 4. Component: Data Box (Mission Info)

A styled box to display mission details, using a monospace font and borders typical of the game's UI.

```html
<div class="max-w-md bg-black/80 border-l-4 border-cyan-400 p-4 font-mono text-sm text-gray-300 shadow-lg backdrop-blur-sm">
    <h3 class="text-cyan-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-1">Mission Data</h3>
    <ul class="space-y-1">
        <li><span class="text-white font-bold">ID:</span> M-004</li>
        <li><span class="text-white font-bold">Target:</span> Machine Lifeform</li>
        <li><span class="text-white font-bold">Reward:</span> 500 G</li>
        <li><span class="text-white font-bold">Status:</span> <span class="text-green-400">Incomplete</span></li>
    </ul>
</div>
```

## 5. Component: Animated Button (Tailwind + Custom CSS)

A button with a subtle glow and slide effect.

```html
<style>
    .nier-btn {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .nier-btn::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
    }

    .nier-btn:hover::after {
        left: 100%;
    }

    .nier-btn:hover {
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
        letter-spacing: 2px;
    }
</style>

<button class="nier-btn bg-transparent border border-cyan-400 text-cyan-400 px-6 py-2 uppercase font-mono text-xs tracking-widest hover:bg-cyan-400 hover:text-black">
    Initialize
</button>
```

## 6. Integration Notes

*   **Tailwind Config:** Ensure your `tailwind.config.js` includes the custom colors if you aren't using arbitrary values (e.g., `text-[#00f0ff]`).
*   **Fonts:** Import a font like "Share Tech Mono" or "Roboto Mono" from Google Fonts for the best Nier-like feel.
    ```html
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    ```
    Then apply it in Tailwind: `font-mono` (configured to use 'Share Tech Mono').
