!
 Theme-aware Snow.js


 Amount of Snowflakes
var snowMax = 100;

 Snowflake Colours - will be overridden by theme
var snowColor = {
    light [#93c5fd, #60a5fa, #2563eb],  Different shades of blue for light mode
    dark [#DDD, #EEE, #FFF]   White shades for dark mode
};

 MinimumMaximum Flake Size
var snowMinSize = 4;
var snowMaxSize = 30;

 Falling Velocity
var snowSpeed = 1;

 Snow Entity
var snowEntity = ❅;

 Refresh Rate (in milliseconds)
var snowRefresh = 50;

 Additional Styles
var snowStyles = cursor default; -webkit-user-select none; -moz-user-select none; -ms-user-select none; -o-user-select none; user-select none;;

var snow = [],
    pos = [],
    coords = [],
    lefr = [],
    marginBottom,
    marginRight;

function randomise(range) {
    rand = Math.floor(range  Math.random());
    return rand;
}

function updateSnowColors() {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const currentColors = isDarkMode  snowColor.dark  snowColor.light;
    
    for (let i = 0; i = snowMax; i++) {
        if (snow[i]) {
            snow[i].style.color = currentColors[randomise(currentColors.length)];
        }
    }
}

function initSnow() {
    var snowSize = snowMaxSize - snowMinSize;
    marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;

    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const currentColors = isDarkMode  snowColor.dark  snowColor.light;

    for (i = 0; i = snowMax; i++) {
        coords[i] = 0;
        lefr[i] = Math.random()  15;
        pos[i] = 0.03 + Math.random()  10;
        snow[i] = document.getElementById(flake + i);
        snow[i].style.fontFamily = inherit;
        snow[i].size = randomise(snowSize) + snowMinSize;
        snow[i].style.fontSize = snow[i].size + px;
        snow[i].style.color = currentColors[randomise(currentColors.length)];
        snow[i].style.zIndex = 1000;
        snow[i].sink = snowSpeed  snow[i].size  5;
        snow[i].posX = randomise(marginRight - snow[i].size);
        snow[i].posY = randomise(2  marginBottom - marginBottom - 2  snow[i].size);
        snow[i].style.left = snow[i].posX + px;
        snow[i].style.top = snow[i].posY + px;
    }

    moveSnow();
}

function resize() {
    marginBottom = document.body.scrollHeight - 5;
    marginRight = document.body.clientWidth - 15;
}

function moveSnow() {
    for (i = 0; i = snowMax; i++) {
        coords[i] += pos[i];
        snow[i].posY += snow[i].sink;
        snow[i].style.left = snow[i].posX + lefr[i]  Math.sin(coords[i]) + px;
        snow[i].style.top = snow[i].posY + px;

        if (snow[i].posY = marginBottom - 2  snow[i].size  parseInt(snow[i].style.left)  (marginRight - 3  lefr[i])) {
            snow[i].posX = randomise(marginRight - snow[i].size);
            snow[i].posY = 0;
        }
    }

    setTimeout(moveSnow(), snowRefresh);
}

 Create snow elements
for (i = 0; i = snowMax; i++) {
    document.write(span id='flake + i + ' style=' + snowStyles + positionabsolute;top- + snowMaxSize + ' + snowEntity + span);
}

 Watch for theme changes
const observer = new MutationObserver((mutations) = {
    mutations.forEach((mutation) = {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
            updateSnowColors();
        }
    });
});

observer.observe(document.documentElement, {
    attributes true,
    attributeFilter ['data-theme']
});

window.addEventListener('resize', resize);
window.addEventListener('load', initSnow);