var update = document.getElementById('update')
var del = document.getElementById('delete')

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

del.addEventListener('click', () => {
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'Naruto'
        })
    })
    .then(data => {
        console.log(data)
        window.location.reload()
    })
})