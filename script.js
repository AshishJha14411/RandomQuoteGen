let fetchBtn = document.querySelector(".fetcher")

fetchBtn.addEventListener("click", async () => {
    const response = await fetch("https://api.quotable.io/random")
    let data = await response.json()
    document.querySelector(".output").innerHTML = data.content
})