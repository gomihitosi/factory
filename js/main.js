const SPAWN_TIME = 1500
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function (option) {
    this.superInit(option);

    SoundManager.playMusic("kankisen");

    this.count = 0;
    this.timer = 0;
    this.spawnTimer = 0;

  },
  update: function (app) {
    this.timer += app.deltaTime;
    this.spawnTimer += app.deltaTime;
    if (this.spawnTimer > SPAWN_TIME) {
      this.spawnTimer = 0;

      var bottle = Sprite("petbottle").addChildTo(this)
        .setPosition(this.gridX.span(18), this.gridY.center())
      bottle.isDown = false;

      if (Math.floor(Math.random() * Math.floor(5)) == 0) {
        bottle.setInteractive(true)
        bottle.y += 60
        bottle.rotation = -90
        bottle.isDown = true;
      }

      var _this = this
      bottle.onclick = function () {
        if (this.isDown) {
          AssetManager.get('sound', 'oku1').play()
          _this.count++
          this.isDown = false
          this.y += -60
          this.rotation = 0
        }
      }

      bottle.tweener
        .to({ x: this.gridX.span(-2) }, 10000).play()
        .call(() => {
          if (bottle.isDown) {
            SoundManager.stopMusic();
            _this.exit({ count: _this.count, timer: _this.timer })
          } else {
            bottle.remove();
          }
        })
    }
  }
});