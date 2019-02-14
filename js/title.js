let IS_ANIME = true;
let IS_VOICE = true;
let IS_KEYBOARD = true;

phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init: function (option) {
    this.superInit(option);

    this.tutorial = Sprite("tutorial").addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())

    this.animeBox = new RectangleShape({
      fill: '#222', width: 320, height: 60, strokeWidth: 0, cornerRadius: 8,
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center(5));

    var startLabel = new Label({
      text: 'スタート', width: 320,
      fontSize: 28, fill: '#FFF',
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center(5))
      .setInteractive(true)
    var _this = this;
    startLabel.onclick = function () {
      _this.exit()
    }

    var versionLable = new Label({
      text: 'ver 0.01',
      fontSize: 24,
      align: 'left',
    }).addChildTo(this)
      .setPosition(this.gridX.span(0) + 4, this.gridY.span(0) + 16);

    var creditLable = new Label({
      text: '効果音素材：ポケットサウンド – https://pocket-se.info/',
      fontSize: 24,
      align: 'left',
    }).addChildTo(this)
      .setPosition(this.gridX.span(0) + 4, this.gridY.span(14) + 48);
  }
});
