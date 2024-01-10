export function formatDate(date) {
    let day = new Date(date).toLocaleDateString();
    let time = new Date(date).toLocaleTimeString();
    time = time.split(":")[0] + ":" + time.split(":")[1];

    return day + " " + time;
}
