async function newReview(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="book-title"]').value;

    const review_content = document.querySelector('textarea[name="review_content"]').value;
  
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            review_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
        console.log('review entered');
    } else {
        alert(response.statusText);
        alert('review failed');
    }
};
  
document
    .querySelector('#add-review-form')
    .addEventListener('submit', newReview);