var style = document.createElement('style');
style.innerHTML = `
* { background-color: rgba(255, 0, 0, 0.2) }
* * { background-color: rgba(0, 255, 0, 0.2) }
* * * { background-color: rgba(0, 0, 255, 0.2) }
* * * * { background-color: rgba(255, 0, 255, 0.2) }
* * * * * { background-color: rgba(0, 255, 255, 0.2) }
* * * * * * { background-color: rgba(255, 255, 0, 0.2) }
* * * * * * * { background-color: rgba(255, 0, 0, 0.2) }
* * * * * * * * { background-color: rgba(0, 255, 0, 0.2) }
* * * * * * * * { background-color: rgba(0, 0, 255, 0.2) }
`;
document.head.appendChild(style);
