function preview_image(event)
{
    let reader = new FileReader();
    reader.onload = function() {
        let output = document.getElementById('output_image');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function add_news(event) {
    event.preventDefault();

    let title = document.getElementById("title");
    let text_area = document.getElementById("text-area");
    let image = document.getElementById("output_image");
    let is_filled = true;

    console.log(image.src);

    if (image.src === "http://localhost:63342/LAB2_Web/resources/hetfield.jpg") {
        image.classList.add("not-valid");
        alert("please chose image");
        is_filled = false;
    }

    if (title.value === "") {
        title.classList.add("not-valid");
        alert("please fill title");
        is_filled = false;
    }

    if (text_area.value === "") {
        text_area.classList.add("not-valid");
        alert("fill text area");
        is_filled = false;
    }

    if (is_filled) {
        alert("Successfully added");
        document.getElementById("title").value = "";
        document.getElementById("text-area").value = "";
        document.getElementById("output_image").src = "resources/hetfield.jpg";
        image.classList.remove("not-valid");
        title.classList.remove("not-valid");
        text_area.classList.remove("not-valid");
    }
}