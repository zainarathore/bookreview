function toggleMenu() {
    document.querySelector(".menu-links").classList.toggle("show");
  }
  
  function addReview() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const review = document.getElementById('review').value;
    if (title && author && review) {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');
        reviewContainer.innerHTML = `<strong>${title}</strong> written by ${author}<p>${review}</p>`;
        document.getElementById('reviews').appendChild(reviewContainer);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('review').value = '';
    } else {
        alert('fill in all boxes before you send your review.');
    }
}