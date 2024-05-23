const myForm = document.querySelector("form");
myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputFirstname = document.querySelector("#first-name").value;
    const inputLastname = document.querySelector("#last-name").value;
    const inputMessage = document.querySelector("#message").value;
    const errorMessage = document.getElementById("error-message");

    if (inputFirstname.length === 0 || inputLastname.length === 0 || inputMessage.length === 0) {
        errorMessage.style.display = "block"; 
    } else {
        createComment(inputFirstname, inputLastname, inputMessage);
        clearInputFields();
        errorMessage.style.display = "none"; 
    }
}

function createComment(firstName, lastName, message) {
    const commentContainer = document.querySelector(".-my-4");
    const commentHTML = `
        <div class="flex.space-x-4.text-sm.text-gray-500">
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        </div>
    `;
    commentContainer.insertAdjacentHTML("beforeend", commentHTML);
}

function clearInputFields() {
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#message").value = "";
}


