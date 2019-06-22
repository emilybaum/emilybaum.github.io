new TypeIt('#title', {
    speed: 100,
    startDelay: 400
})
    .type("Hey there!")
    .pause(1000)
    .options({ speed: 100, deleteSpeed: 75 })
    .delete(1)
    .type(", I'm Emily.")
    .go();