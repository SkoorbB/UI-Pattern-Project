let url = "https://bungie-net.github.io"
fetch(url).then(res => {
    console.log(':)', res)
    return res.json();
})