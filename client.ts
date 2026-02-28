// const phoneIp = "192.168.68.53"; // Actual IP
const phoneIp = "10.0.2.2"; // Emulator IP
const socket = new WebSocket(`ws://${phoneIp}:8080`);

socket.onopen = () => {
    console.log("Connected to Phone");
}

socket.onmessage = (event) => {
    const notif = JSON.parse(event.data);

    const el = document.createElement("div");
    el.innerHTML = `
        <strong>${notif.title}</strong> <br/>
        ${notif.text} <br/>
        <small>${notif.package}</small>
        <hr/>    
    `


    document.body.appendChild(el);
}