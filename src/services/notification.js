export const show = (text) => {
    let html = `${text}`;
    let element = document.createElement("div");
    element.innerHTML = html;
    element.classList.add("notification");
    element.classList.add("notification-enter");

    const container = document.getElementById("notification-container");
    container?.appendChild(element);

    setTimeout(() => {
        element.classList.remove("notification-enter");
        element.classList.add("notification-exit");
    }, 3000);

    setTimeout(() => {
        element.remove();
    }, 3240);
};

export const ConfirmModal = (msg, confirmButtonMsg, cancelButtonMsg) => {
    return new Promise((resolve) => {
        let container = document.getElementById("app-layout");
        let html = document.createElement("div");
        html.setAttribute("id", "confirmModal");
        html.innerHTML = `
            <div class="overlay" overlay></div>
            <div class="custom-modal-html" shadow fade radius-border>
                <div class="title">
                    <h1>Alerta</h1>
                </div>
                <div class="content">
                    <p>${msg ?? '¿Está seguro que desea continuar con esta acción? Es posible que no tenga retroceso'}</p>
                    <br>
                    <div class="actions" flex-center>
                        <a class="custom-button-html red" id="confirmModalButton">${confirmButtonMsg ?? 'Continuar'}</a>
                        <a class="custom-button-html" id="cancelModalButton">${cancelButtonMsg ?? 'Cancelar'}</a>
                    </div>
                </div>
            </div>
        `;

        container?.appendChild(html);

        const confirm = document.getElementById("confirmModalButton");
        const cancel = document.getElementById("cancelModalButton");

        confirm?.addEventListener("click", () => {
            html.remove();
            resolve(true);
        });

        cancel?.addEventListener("click", () => {
            html.remove();
            resolve(false);
        });
    });
};