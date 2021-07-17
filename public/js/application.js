

// console.log('js has been loaded loool')
// fetch('http://localhost:3000/weather?address=lahore').then((response),()=>{
//     response.json().then((data),()=>{
//         console.log(data)
//     })
// })
// fetch('http://localhost:3000/weather?address=lahore').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

        // const weatherForm = document.querySelector('form')
        // const search = document.querySelector('input')


        // weatherForm.addEventListener('submit',(e)=>{
        //        e.preventDefault()
        //        const searchLocation=search.value
        //        console.log(searchLocation)
        // })

        console.log('Client side javascript file is loaded!')

        const weatherForm = document.querySelector('form')
        const search = document.querySelector('input')
        const messageOne = document.querySelector('#mesage-01')
        const messageTwo = document.querySelector('#mesage-02')
        

        
        
        weatherForm.addEventListener('submit', (e) => {
            e.preventDefault()
        
            const location = search.value
            messageOne.textContent='Loading...'
            messageTwo.textContent=''
            fetch('/weather?address=' + location).then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        messageOne.textContent='error'
                    } else {
                        // console.log(data.location)
                        // console.log(data.forecast)
                        messageOne.textContent=data.location
                        messageTwo.textContent=data.forecast
                    }
                })
            })
        })


