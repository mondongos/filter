# Band Pass Filter
Allows to change a sound sample - you can apply this filter and it will define the upper and lower limits for the sound to fall within the limits. Once a soundwave has exceeded the limits, it will change the frequency to match that limit.

## Acceptance Requirements
(soundwave, lower_limit: 90, upper_limit: 110)

Example sound wave - [80, 90, 100, 110, 120]

Expected Output: [90, 90, 100, 110, 110]

Pass in an array of a soundwave -> if any of the values is greater or less than the limit -> amend that value to the limit
