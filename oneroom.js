<script> 

    function textboxBlur(x) 
    {    
        document.getElementById(x).style.color = "black"
    } 
</script>

fetch ('https: www.metube.com')
{
    Method: 'post'
    body: json.stringnify({
    name: user1,
    headers:
    {'content-type':  application/json})

}
if (res => {
    then(data => console.log(data)) 
    .catch(error => console.log('error'))
})

if ("serviceWorker"  in navigator) {
    navigator.serviceWorker.register("om.js").then(registration => {
        console.log("om registered!");
        console.log(registration);
    }).catch(error => {
        console.log("om registration failed!");
        console.log("om registration failed!");

    });
}

self.addEventListener("fetch", e => {
    e.respondwith(
        caches.match(e.request).then(response => {

        })
    );
});
