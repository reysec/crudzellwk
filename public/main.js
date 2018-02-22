var update = document.getElementById('update')

update.addEventListener('click', () => {
    // Send put here
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'Naruto',
            'quote': 'Hey minna san!!'
        })
    })
})