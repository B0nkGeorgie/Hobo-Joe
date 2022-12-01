namespace SpriteKind {
    export const HOBOJOE = SpriteKind.create()
    export const HOBOJOESCAWY = SpriteKind.create()
    export const GOLDENHOBOJOE = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CHASESCENE == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f 4 e 
            e 4 f b b b b b b f d 4 
            4 d f d d d d d d c 4 4 
            4 4 f 6 6 6 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . . . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            e 4 f f f f f f f f e . 
            4 d f b b b b b b f 4 e 
            4 4 f d d d d d d c d 4 
            . . f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . . . . . . 
            `],
        350,
        true
        )
    }
    if (CHASESCENE == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f 4 e 
            e 4 f b b b b b b f d 4 
            4 d f d d d d d d c 4 4 
            4 4 f 6 6 6 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . . . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            e 4 f f f f f f f f e . 
            4 d f b b b b b b f 4 e 
            4 4 f d d d d d d c d 4 
            . . f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . . . . . . 
            `],
        175,
        true
        )
    }
    Direction = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GOLDENHOBOJOE, function (sprite, otherSprite) {
    game.showLongText("Golden Joe: Hello I am the time traveling Hobo Joe I come to many lands to save you an infinite amount of times...", DialogLayout.Bottom)
    game.showLongText("Golden Joe: I must go there is another Grustnyy to save", DialogLayout.Bottom)
    mySprite3.ax = 15
    mySprite3.y += 15
    pause(7000)
    mySprite3.destroy()
    scene.centerCameraAt(300, 20)
    RAINCHANGE = 1
    CARCHANGE = 1
    mySprite4 = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffff11fffffffff1fffffffffffffffffffffffffffff1ffffffffffffffffff
        fffffffffffffffff1fff1111fffffffffffffffffffffffffffffffffffffff11ffffffff11fffffffffffffffffffffffffffff1ffffffffffffffffff
        fffffffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffff1f1fffffff1ffffffffffffffffffffffffffffff11fffffffffffffffff
        fffffffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffff1ff1ffffff1fffffffffffffffffffffffffffffff1fffffffffffffffff
        fffffffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffff1ff1fffff1ffffffffffffffffffffffffffffffff1fffffffffffffffff
        fffffffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffff1ff1fffff1ffffffffffffffffffffffffffffffff1fffffffffffffffff
        fffffffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffff1ff1fffff1ffffffffffffffffffffffffffffffff1ffff111ffffffffff
        fffffffffffffffff1ffffff1fffffffffffffffffff1111111fffffffffffff1fff1ffff1fffffffffffffffffffffffffffff11111111fffffffffffff
        ffffffffffffffffff1ffffff1ff111111fffffff111fffffff1ffffffffffff1ffff1fff1fffffffff111ffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffff1ffffff1f1ffffff1ffffff1ffffffffff1fffffffffff1ffff1fff1fffffff11fff11ffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffff1ffffff1f1ffffff11ffff1fffffffffff1fffffffffff1ffff1fff1ffffff11ffffff1ffff1ffffffffffff1fffffffffffffffff
        fffffffffffffffffff1fffff11ffffffff1fff11fffffffffff1fffffffffff1ffff1fff1ffffff1fffffff1fffff1fffffffffff1fffffffffffffffff
        fffffffffffffffffff1fffff11ffffffff1fff11ffffffffff1fffffffffffff1ffff1ff1ffffff1ffffffff1ffff1fff1fffffff1fffffffffffffffff
        fffffffffffffffffff1fffff11ffffffff1fff111fffffffff1fffffffffffff1ffff1ff1ffffff1fffffff11fffff1ff1fffffff1fffffffffffffffff
        fffffffffffffffffff1fffff11fffffffff1fff1f111fff111ffffffffffffff1ffff1ff1fffff1ffffffff1ffffff1f1ffffffff1fffffffffffffffff
        ffffffffffffffffffff1fffff1fffffffff1fff1ffff111fffffffffffffffff1fffff1f1fffff111111111ffffffff11ffffffff1fffffffffffffffff
        ffffffffffffffffffff1fffffffffffffff1fff1ffffffffffffffffffffffff1ffffff11fffff1ffffffffffffffff1ffffffffff1ffffffffffffffff
        ffffffffffffffffffff1fffffffffffffff1ffff1fffffffffffffffffffffff1ffffff11fffff1ffffffffffffffff11fffffffff1ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffff1fffffff1fffff1ffffffffffffffff1f1ffffffff1ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffff11ffffff1ffffff1ffffffffffffff1ff1fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ffffff1ffff11fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffff1fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffff11ffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffff1ffff1ff1111fffffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffff1ffff111fff11ffffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffff1ffffff1ffff1ffffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffffff1ffffff1fffff11fffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffff1fffffff1fffff11fffff1ff11ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffff1ffffffff1fffff1f1ffff1ff11ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff11fffff111fffffffff1ffff1ff11fff11111ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1ff11111ffffffffffff11111ffff11fffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
    mySprite4.setPosition(300, 60)
    pause(2000)
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite4.destroy()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 2))
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Golden Joe: You are safe please don't make the mistake of the others and look out the window", DialogLayout.Bottom)
    game.showLongText("*&#: lOOk oUt tHe wiNDow", DialogLayout.Bottom)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . b b . . . 
        . . . . . . . . b b . . b b . b 
        . . . . . . . . . b b d e 1 d . 
        . . . . . . . . . . . d d f d b 
        . . . . . . a a a a e d d d d . 
        . . . . a a d e d a a f 3 f d b 
        . . . . a a d d a a a . 3 . . . 
        . . . a a a a a d d a . . . . . 
        . . a d d a a a a a . . . . . . 
        . . a d a a a a a . . . . . . . 
        . . a a a a a . . . . . . . . . 
        . . d . . . a . . . . . . . . . 
        . . d . . . a . . . . . . . . . 
        . . a . . . d . . . . . . . . . 
        . . a . . . a . . . . . . . . . 
        . . a a . . a a . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CHASESCENE == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 e e f f . . 
            . . f 1 1 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . . f 6 6 6 e e f f . . 
            . f f f f f f f f f . . 
            . . f f . . . f f . . . 
            `,img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 e e f f . . 
            . . f 1 1 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . . f 6 6 6 e e f f . . 
            . f f f f f f f f f . . 
            . . f f . . . f f . . . 
            `],
        350,
        true
        )
    }
    if (CHASESCENE == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 e e f f . . 
            . . f 1 1 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . . f 6 6 6 e e f f . . 
            . f f f f f f f f f . . 
            . . f f . . . f f . . . 
            `,img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 e e f f . . 
            . . f 1 1 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . . f 6 6 6 e e f f . . 
            . f f f f f f f f f . . 
            . . f f . . . f f . . . 
            `],
        175,
        true
        )
    }
    Direction = 4
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HOBOJOE, function (sprite, otherSprite) {
    CHASESCENE = 1
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    mySprite2.setImage(img`
        . . . b b . . . . . . . . . . . 
        b . b b . . b b . . . . . . . . 
        . d 1 e d b b . . . . . . . . . 
        b d f d d . . . . . . . . . . . 
        . d d d d e a a a a . . . . . . 
        b d f 3 f a a d e d a a . . . . 
        . . . 3 . a a a d d a a . . . . 
        . . . . . a d d a a a a a . . . 
        . . . . . . a a a a a d d a . . 
        . . . . . . . a a a a a d a . . 
        . . . . . . . . . a a a a a . . 
        . . . . . . . . . a . . . d . . 
        . . . . . . . . . a . . . d . . 
        . . . . . . . . . d . . . a . . 
        . . . . . . . . . a . . . a . . 
        . . . . . . . . a a . . a a . . 
        `)
    pause(500)
    HOBOJOEMUSIC = -1
    game.setDialogFrame(img`
        b b b b b b b b b b b b b b b 
        b c c c 7 7 c c 7 7 c c c c b 
        b c b c 7 7 7 c 7 7 c c b c b 
        b c c c c 7 c c 7 7 c c c c b 
        b c c c c c c 7 c c c c c c b 
        b c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c b 
        b 7 7 c c c c c c c c c c c b 
        b 7 7 c c c c c c c c c c c b 
        b 7 7 c c c c c c c c c c c b 
        b c 7 7 c c c c c c c c c c b 
        b c c c c c c c c c c c c c b 
        b c b c c c c c c c c c b c b 
        b c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b 
        `)
    game.showLongText("Hobo: Got Garbage For Me Bub?", DialogLayout.Bottom)
    game.showLongText("Hobo: No?", DialogLayout.Bottom)
    game.showLongText("Hobo: YOUR LYING I'LL JUST TAKE IT", DialogLayout.Bottom)
    game.showLongText("???: RUN", DialogLayout.Bottom)
    mySprite.x += -30
    scene.cameraShake(3, 20000)
    scene.cameraFollowSprite(mySprite)
    HOBOJOEMUSIC = 1
    controller.moveSprite(mySprite, 50, 50)
    pause(1000)
    mySprite2.follow(mySprite, 35)
    mySprite2.setKind(SpriteKind.HOBOJOESCAWY)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CHASESCENE == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d 9 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f f e e 4 4 e f . . 
            . . f 4 d 9 e 1 1 f . . 
            . . f e d d e 1 1 f . . 
            . . f f e e 6 6 6 f . . 
            . . f f f f f f f f f . 
            . . . f f . . . f f . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d 9 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f f e e 4 4 e f . . 
            . . f 4 d 9 e 1 1 f . . 
            . . f e d d e 1 1 f . . 
            . . f f e e 6 6 6 f . . 
            . . f f f f f f f f f . 
            . . . f f . . . f f . . 
            `],
        350,
        true
        )
    }
    if (CHASESCENE == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d 9 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f f e e 4 4 e f . . 
            . . f 4 d 9 e 1 1 f . . 
            . . f e d d e 1 1 f . . 
            . . f f e e 6 6 6 f . . 
            . . f f f f f f f f f . 
            . . . f f . . . f f . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d 9 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 9 9 d d f f . 
            . f f f 4 d 9 b b f . . 
            . . f f e e 4 4 e f . . 
            . . f 4 d 9 e 1 1 f . . 
            . . f e d d e 1 1 f . . 
            . . f f e e 6 6 6 f . . 
            . . f f f f f f f f f . 
            . . . f f . . . f f . . 
            `],
        175,
        true
        )
    }
    Direction = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    scene.centerCameraAt(80, 196)
    tiles.setTileAt(tiles.getTileLocation(0, 12), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(1, 12), assets.tile`myTile3`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CHASESCENE == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 9 1 1 9 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            . f f e 4 4 4 4 e f 4 e 
            e 4 f b 9 1 1 9 b f d 4 
            4 d f 1 1 1 1 1 1 f 4 4 
            4 4 f 6 6 6 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . . . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 9 1 1 9 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            e 4 f e 4 4 4 4 e f f . 
            4 d f b 9 1 1 9 b f 4 e 
            4 4 f 1 1 1 1 1 1 f d 4 
            . . f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . . . . . . 
            `],
        350,
        true
        )
    }
    if (CHASESCENE == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 9 1 1 9 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            . f f e 4 4 4 4 e f 4 e 
            e 4 f b 9 1 1 9 b f d 4 
            4 d f 1 1 1 1 1 1 f 4 4 
            4 4 f 6 6 6 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . . . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 9 1 1 9 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 4 4 f f f f 
            f f f e e 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 9 9 d d 9 9 4 e f 
            . f e 9 d b b d 9 e f . 
            e 4 f e 4 4 4 4 e f f . 
            4 d f b 9 1 1 9 b f 4 e 
            4 4 f 1 1 1 1 1 1 f d 4 
            . . f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . . . . . . 
            `],
        175,
        true
        )
    }
    Direction = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HOBOJOESCAWY, function (sprite, otherSprite) {
    CHASESCENE = 0
    HOBOJOEMUSIC = -1
    mySprite2.follow(mySprite, 0)
    game.showLongText("???: Wait", DialogLayout.Bottom)
    game.showLongText("Hobo: NOOOOO", DialogLayout.Bottom)
    mySprite2.destroy(effects.disintegrate, 200)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1275, 1008, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    controller.moveSprite(mySprite, 20, 20)
    mySprite3 = sprites.create(img`
        . . . 4 4 . . . . . . . . . . . 
        4 . 4 4 . . 4 4 . . . . . . . . 
        . d 1 9 d 4 4 . . . . . . . . . 
        4 d f d d . . . . . . . . . . . 
        . d d d d 9 5 5 5 5 . . . . . . 
        4 d f 3 f 5 5 d 9 d 5 5 . . . . 
        . . . 3 . 5 5 5 d d 5 5 . . . . 
        . . . . . 5 d d 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 d d 5 . . 
        . . . . . . . 5 5 5 5 5 d 5 . . 
        . . . . . . . . . 5 5 5 5 5 . . 
        . . . . . . . . . 5 . . . d . . 
        . . . . . . . . . 5 . . . d . . 
        . . . . . . . . . d . . . 5 . . 
        . . . . . . . . . 5 . . . 5 . . 
        . . . . . . . . 5 5 . . 5 5 . . 
        `, SpriteKind.GOLDENHOBOJOE)
    mySprite3.setPosition(mySprite.x, mySprite.y + 25)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite4: Sprite = null
let CARCHANGE = 0
let RAINCHANGE = 0
let mySprite3: Sprite = null
let Direction = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let CHASESCENE = 0
let HOBOJOEMUSIC = 0
HOBOJOEMUSIC = 0
CHASESCENE = 0
mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 4 4 f f f f 
    f f f e e 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 9 9 d d 9 9 4 e f 
    . f e 9 d b b d 9 e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 9 1 1 9 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(16, 10)
controller.moveSprite(mySprite, 20, 20)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 . . . 
    . . . a a a a a d d a . . . . . 
    . . a d d a a a a a . . . . . . 
    . . a d a a a a a . . . . . . . 
    . . a a a a a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `, SpriteKind.HOBOJOE)
mySprite2.setPosition(130, 250)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 7 . . 
    . . . a a a a a d d a . . a . . 
    . . a d d a a a a a a a a a . . 
    . . a d a a a a a a . . . 7 . . 
    . . a a a a a . . a . . . a . . 
    . . d . . . a . . a a a a a . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `,img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 7 . . 
    . . . a a a a a d d a . . a . . 
    . . a d d a a a a a a a a 7 . . 
    . . a d a a a a a a . . . a . . 
    . . a a a a a . . a a a a a . . 
    . . d . . . a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `,img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 7 . . 
    . . . a a a a a d a a . . 7 . . 
    . . a d d a a a a a a a a a . . 
    . . a d a a a a a a a a a a . . 
    . . a a a a a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `,img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 7 . . 
    . . . a a a a a d a a . . a . . 
    . . a d d a a a a a a a a a . . 
    . . a d a a a a a . . . . . . . 
    . . a a a a a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `,img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 . . . 
    . . . a a a a a d a a . . a . . 
    . . a d d a a a a a a a a a . . 
    . . a d a a a a a . . . . . . . 
    . . a a a a a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `,img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 . . . 
    . . . a a a a a d a a . . 7 . . 
    . . a d d a a a a a a a a a . . 
    . . a d a a a a a a a a a a . . 
    . . a a a a a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `,img`
    . . . . . . . . . . . b b . . . 
    . . . . . . . . b b . . b b . b 
    . . . . . . . . . b b d e 1 d . 
    . . . . . . . . . . . d d f d b 
    . . . . . . a a a a e d d d d . 
    . . . . a a d e d a a f 3 f d b 
    . . . . a a d d a a a . 3 . . . 
    . . . a a a a a d a a . . 7 . . 
    . . a d d a a a a a a . . a . . 
    . . a d a a a a a a a a a a . . 
    . . a a a a a . . . a . . 7 . . 
    . . d . . . a . . . a a a a . . 
    . . d . . . a . . . . . . . . . 
    . . a . . . d . . . . . . . . . 
    . . a . . . a . . . . . . . . . 
    . . a a . . a a . . . . . . . . 
    `],
200,
true
)
game.onUpdateInterval(50, function () {
    if (RAINCHANGE == 0) {
        projectile2 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 9 . . . . . . . 
            . . . . 9 9 9 9 9 . . . . . . . 
            . . . . 9 9 9 9 9 . . . . . . . 
            . . . . . 9 9 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 5, 50)
        projectile2.x = randint(0, 200)
    }
})
game.onUpdateInterval(2000, function () {
    if (CARCHANGE == 0) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 f f f f 2 . . . . 2 f f f f 2 
            . f d d f . . . . . . f d d f . 
            . f d d f . . . . . . f d d f . 
            . f f f f . . . . . . f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 30, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 f e f f 2 . . . . 2 f e f f 2 
            . f d d f . . . . . . f d d f . 
            . f d d f . . . . . . f d d f . 
            . f f e f . . . . . . f f e f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 f f e f 2 . . . . 2 f f e f 2 
            . f d d f . . . . . . f d d f . 
            . f d d f . . . . . . f d d f . 
            . f e f f . . . . . . f e f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 f f f e 2 . . . . 2 f f f e 2 
            . f d d f . . . . . . f d d f . 
            . f d d f . . . . . . f d d f . 
            . e f f f . . . . . . e f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 f f f f 2 . . . . 2 f f f f 2 
            . f d d e . . . . . . f d d e . 
            . e d d f . . . . . . e d d f . 
            . f f f f . . . . . . f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 f f f f 2 . . . . 2 f f f f 2 
            . e d d f . . . . . . e d d f . 
            . f d d e . . . . . . f d d e . 
            . f f f f . . . . . . f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 9 9 6 . . 
            . . . . . . . . 2 2 2 9 6 9 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 e f f f 2 . . . . 2 e f f f 2 
            . f d d f . . . . . . f d d f . 
            . f d d f . . . . . . f d d f . 
            . f f f e . . . . . . f f f e . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        projectile.x = 40
        projectile.y = randint(85, 105)
    }
})
forever(function () {
    if (mySprite.overlapsWith(projectile)) {
        game.showLongText("Don't do this irl", DialogLayout.Bottom)
        game.over(false)
    }
})
forever(function () {
    while (HOBOJOEMUSIC == 0) {
        music.playMelody("C C D D C E D D ", 115)
    }
})
forever(function () {
    while (HOBOJOEMUSIC == 1) {
        music.playMelody("E B C5 A B G A F ", 130)
    }
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
