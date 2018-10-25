// Debugging at https://code.sololearn.com/W2AvJg96e2V4/
document.onreadystatechange = () => {
    if (document.readyState.toLowerCase() == "interactive") {
        // Interactive
        Notify = document.getElementsByClassName("-notifyplate-")[0];
        Notify.list = Array.from(Notify.getElementsByClassName("-notifyplate-item"));
        Notify.reformat = function () {
            let count = 0;
            let totalStackH = 0;
            this.list = Array.from(Notify.getElementsByClassName("-notifyplate-item"));
            while (count < Notify.list.length) {
                Notify.list[count].style.bottom = totalStackH.toString() + "px";
                if (Notify.list[count].className != "-notifyplate-item -notifyplate-item-hidden") {
                    totalStackH += Notify.list[count].clientHeight + 3;
                }
                Notify.list[count].getElementsByClassName("-notifyplate-close")[0].onclick = function () {
                    this.parentNode.className = "-notifyplate-item -notifyplate-item-hidden";
                    setTimeout(Notify.reformat, 260);
                };
                count ++;
            };
            console.info("formatted");
        };
        Notify.push = function (title = "Blank title", text = "Blank text", icon = "https://code.sololearn.com/Images/favicon.ico") {
            //Notification.title, body, icon
            let newNotify = document.createElement("div");
            newNotify.className = "-notifyplate-item";
            let newIcon = document.createElement("img");
            newIcon.className = "-notifyplate-icon";
            newIcon.src = icon;
            newNotify.appendChild(newIcon);
            let newTitle = document.createElement("div");
            newTitle.className = "-notifyplate-title";
            newTitle.innerText = title;
            newNotify.appendChild(newTitle);
            let newContent = document.createElement("div");
            newContent.className = "-notifyplate-content";
            newContent.innerText = text;
            newNotify.appendChild(newContent);
            let newClose = document.createElement("div");
            newClose.className = "-notifyplate-close";
            newClose.innerText = "x";
            newNotify.appendChild(newClose);
            this.appendChild(newNotify);
            this.reformat();
            return newNotify;
        };
        Notify.reformat();
    };
};
