new TypeIt('#title', {
    speed: 150,
    startDelay: 400
})
    .type("Hey there!")
    .pause(1000)
    .delete(1)
    .type(", I'm Emily.")
    // .pause(750)
    // .options({ speed: 100, deleteSpeed: 75 })
    // .pause(750)
    // .type(" Check out what I'm working on.")
    .go();