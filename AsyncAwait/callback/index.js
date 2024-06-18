function wakeUp(oclock, callback) {
    setTimeout(() => {
        if (oclock < 8.08) {
            return callback(null, 'встав');
        } 

        callback('не встав')
    }, 2000);
}

function breakfast(callback) {
    setTimeout(() => {
        callback('поснідав');
    }, 5000);
}

function dress(callback) {
    setTimeout(() => {
        callback('одівся');
    }, 2000);
}


function goToBus(oclock, callback) {
    if(oclock < 9.00) {
        return callback('пішов на автобус')
    } 

    return callback('запізнився')
}

function gotOnTheBus(callback) {
    setTimeout(() => {
        callback('сів на автобувс')
    }, 1000);
}

function gotTheBusStop(callback) {
    setTimeout(() => {
        callback('доїхав до своєї зупинки')
    }, 5000);
}

function goToOffice(callback) {
    setTimeout(() => {
        callback('дойшов до офісу')
    }, 3000);
}

wakeUp(8.07, (err, data) => {
    if(err) {
        console.error(`aartur ${err}`)
    } else {
        console.log(`artur ${data}`)
        breakfast((data) => {
            console.log(`artur ${data}`)
            dress((data) => {
                console.log(`artur ${data}`)
                goToBus(8.50, (err, data) => {
                    if(err) {
                        console.error(`artur ${err}`)
                    } else {
                        console.log(`artur ${data}`)
                    }
                    gotOnTheBus((data) => {
                        console.log(`artur ${data}`)

                        gotTheBusStop((data) => {
                            console.log(`artur ${data}`)

                            goToOffice((data) => {
                                console.log(`artur ${data}`)
                            })
                        })
                    })
                })
            })
        })
    }
})
