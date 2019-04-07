# sengal-psyco
A breakout style game in vanilla js

![Project status](https://img.shields.io/badge/Project%20status-Development%20phase-yellowgreen.svg) [![Build Status](https://travis-ci.org/svijaykoushik/sengal-psyco.svg?branch=master)](https://travis-ci.org/svijaykoushik/sengal-psyco)

**Story line:** Sengal-psyco has kidnapped the protagonist's love interest and it's up to the protagonist to save their love interest.

## Agenda

* learn to create an interesting, playable game in Javascript w/ HTML5
* learn to create basic game physics
* progress the story with breakout style levels
* Impress my brother with this game.

## Requirements

* Game objects should be procedurally drawn.
* Should have a good story.
* Should have multiple levels
* Should be colour full.
* Should be a Progressive Web App (PWA).
* Should be moderately fast on low end devices.
* Should include power-ups and power-downs.

### Player (User) requirements

* Can control the paddle
* Can move the paddle to the left and to the right.
* Can move the paddle upward to a fixed distance on button press.
* can use power-ups to complete the level.
* Should control the ball with the paddle
* Can choose initial trajectory of the ball.

## Game Object requirements

### Paddle

* Should be longer and thinner.
* Should be rigid and unbreakable.
* Should move upward to a fixed distance on key press.
* Should land back to initial position after key release.
* Should be destroyed on killer power-downs

### Ball

* Should be rigid and unbreakable.
* Should bounce of walls & bricks.
* Should bounce towards the left when hit on the left half of the paddle.
* Should bounce straight up when hit the middle half of the paddle
* Should bounce towards the right when hit on the right half of the paddle.
* Should be destroyed if hit the bottom wall.

### Brick

* Should be of different types
  * **Type 1** Breaks with single hit of the ball.
  * **Type 2** Breaks with double hit by the ball.
  * **Type 3** UnBreakable brick.
* Can be movable
* Should have different scores for different types.

### Wall

* Should enclose all sides of the arena.
* Should be thicker than the paddle and thinner than the brick.

### Enemies

* Can have different shapes.
* Should collide with Bricks, paddle and the ball
* Should travel  throughout the arena.
* Should change the balls velocity and direction.

## Milestones

1. Create core game physics.
2. Create core game mechanics.