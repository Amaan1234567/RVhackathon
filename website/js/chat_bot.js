document.getElementById('send-btn').addEventListener('click', async () => {
    const response = await fetch("http://127.0.0.1:9000/response", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body:JSON.stringify({
            "message":document.getElementById("message").value
        })
    })

    const content = await response.json();    
    document.getElementById("response").innerHTML = content['response'];
})