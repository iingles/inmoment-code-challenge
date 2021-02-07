// Set up a simple DOM query method
const query = function(element) {

    if (element.charAt(0) === '.') {
        return document.querySelectorAll(element)
    }

    if (element.charAt(0) === '#') {
        return document.querySelector(element)
    }

}


// Check if document is ready before loading scripts
document.addEventListener('readystatechange', evt => {
    if ( evt.target.readyState === 'interactive' ) {
        accordion()
    }
})



// Accordion
const accordion = function() {

    const accItems = query('.acc-item')
    const accHdr = query('.acc-header')

    accHdr.forEach(el => {
        el.addEventListener('click', ()=> {

        
            if ( el.closest('.acc-item').classList.contains('open') ) {
                // If we clicked on an item that it already open, close it
                el.closest('.acc-item').classList.remove('open')
                
            } else {
                // Go through each item and check for open class  
                accItems.forEach( item => {
                    if ( item.classList.contains('open') ) {
                        item.classList.remove('open')
                    } 
                })

                // Then add the open class to the clicked item
                el.closest('.acc-item').classList.add('open')
            
            }
            
        })
    })
}

