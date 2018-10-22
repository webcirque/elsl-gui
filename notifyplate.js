// Debugging at https://code.sololearn.com/W2AvJg96e2V4/
document.onreadystatechange = () => {
    if (document.readyState.toLowerCase() == "interactive") {
        // Interactive
        Notify = document.getElementsByClassName("-notifyplate-")[0];
        Notify.list = Array.from(Notify.getElementsByClassName("-notifyplate-item"));
        Notify.reformat = function () {
            let count = 0;
            let totalStackH = 0;
            while (count < Notify.list.length) {
                Notify.list[count].style.bottom = totalStackH.toString() + "px";
                if (Notify.list[count].class != "-notifyplate-item-hidden") {
                    totalStackH += Notify.list[count].clientHeight + 2;
                }
                Notify.list[count].getElementsByClassName("-notifyplate-close")[0].onclick = function () {
                    this.parentNode.class = "-notifyplate-item-hidden";
                    this.parentNode.remove();
                    Notify.reformat();
                };
                count ++;
            };
        };
        Notify.reformat();
    };
};
