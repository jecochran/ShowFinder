const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {

    e.preventDefault();
    const searchText = form.elements.query.value;

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    displayImages(res.data);

})

const displayImages = (showList) => {

    for (currShow of showList) {
        if (currShow.show.image) {
            const img = document.createElement('IMG');
            img.src = currShow.show.image.medium;


            document.body.append(img);
        }
    }


}