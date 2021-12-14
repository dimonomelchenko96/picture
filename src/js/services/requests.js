const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });
    return await res.text();
};

const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error (`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

const postOnlyImg = (item, event) => {
    item.addEventListener(event, () => {
        let data = new FormData();
        data.append('file', item.files[0]);
        postData('assets/server.php', data)
            .then(res => {
                console.log(res);
                item.previousElementSibling.textContent = 'Картинка отправлена';
            })
            .catch(() => {
                item.previousElementSibling.textContent = 'Произошла ошибка';
            })
            .finally(() => {
                setTimeout(() => {
                    item.previousElementSibling.textContent = 'Файл не выбран';
                }, 5000);
            });
    });
};

export {postData, getResource, postOnlyImg};