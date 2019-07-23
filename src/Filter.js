function Filter(soundwave) {
  this._soundwave = soundwave
  this._upperLimit = 110
  this._lowerLimit = 90
}

Filter.prototype.setUpperLimit = function(limit) {
  this._upperLimit = limit
}

Filter.prototype.setLowerLimit = function(limit) {
  this._lowerLimit = limit
}

Filter.prototype.showSoundwave = function() {
  return this._soundwave
}

Filter.prototype.checkLevels = function() {
  for (var i = 0; i < this._soundwave.length; i++) {
    console.log(this._soundwave[i])
    if (this._soundwave[i] < this._lowerLimit) {
      this._soundwave[i] = this._lowerLimit
    } else if (this._soundwave[i] > this._upperLimit) {
      this._soundwave[i] = this._upperLimit
    }
  }
}
