let mainAd = document.querySelector("#mainAdd");

getJsonFile();

async function getJsonFile() {
    const requestURL = "recomended.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const file = await response.json();
    fileArr = file;

    json = fileArr;

    for (let i = 0; i < json["pages"].length; i++) {
        console.log(json["pages"][i]);

        let element = document.createElement("div");
        element.id = "add" + i;
        element.className = "add";
        element.innerHTML = `<a href = ${json["pages"][i]["url"]}>${json["pages"][i]["name"]} <img src = "${json["pages"][i]["image"]}"></a>`;

        mainAd.appendChild(element);
    }
}