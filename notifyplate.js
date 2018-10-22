document.onreadystatechange = () => {
    if (document.readyState.toLowerCase() == "interactive") {
        // Interactive
        Notify = document.getElementsByClassName("-notifyplate-")[0];
        Notify.list = Array.from(Notify.getElementsByClassName("-notifyplate-item"));
    }
};
