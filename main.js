
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactTable = document.getElementById("contact-table").getElementsByTagName("tbody")[0];
    const nameArray = [];
    const phoneArray = [];

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");

        const name = nameInput.value;
        const phone = phoneInput.value;

        if (nameArray.includes(name)) {
            alert(`O nome "${name}" já foi inserido.`); //caso nome ja tenha sido inserido
        } 

        if(phoneArray.includes (phone)) {
        alert(`O numero "${phone}" já foi inserido.`); //caso o numero ja tenha sido inserido
        }
        else {
            nameArray.push(name);
            phoneArray.push(phone);

            const newRow = contactTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const phoneCell = newRow.insertCell(1);

            nameCell.textContent = name;
            phoneCell.textContent = phone;

            nameInput.value = "";
            phoneInput.value = "";
        }
    });
});
