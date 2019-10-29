submit = document.getElementById("submit");
text = document.getElementById("text");
element = document.getElementById("element");

submit.onclick = function (event) {
    event.preventDefault();

    if (text.value !== "") {
        let card = document.createElement("div");
        card.className = "card w-75 mx-auto my-4";
        let row = document.createElement("div");
        row.className = "row";
        let column_4 = document.createElement("div");
        column_4.className = "col-4 my-auto";
        let container_one = document.createElement("div");
        container_one.className = "container";
        let title = document.createElement("h5");
        title.className = "text-dark";
        let p_time = document.createElement("p");
        p_time.className = "text-dark";
        let p_date = document.createElement("p");
        p_date.className = "text-dark";
        let column_8 = document.createElement("div");
        column_8.className = "col-8 py-3";
        let p = document.createElement("p");
        p.className = "text-dark";
        let container_two = document.createElement("div");
        container_two.className = "container";
        let date = new Date();
        let current_date = checkTime(date.getDate())+'.'+checkTime(date.getMonth())+'.'+date.getFullYear();
        let current_time = checkTime(date.getHours())+':'+checkTime(date.getMinutes());

        title.innerText = "Fan";
        p_time.innerText = current_time;
        p_date.innerText = current_date;

        container_one.appendChild(title);
        container_one.appendChild(p_time);
        container_one.appendChild(p_date);

        p.innerText = text.value;
        container_two.appendChild(p);

        column_4.appendChild(container_one);
        column_8.appendChild(container_two);

        row.appendChild(column_4);
        row.appendChild(column_8);

        card.appendChild(row);
        element.before(card);
    } else {
        alert("text must be filled");
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    document.getElementById("appeal-form").reset();
};