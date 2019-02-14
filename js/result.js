phina.define('ResultScene', {
  superClass: 'DisplayScene',
  init: function (option) {
    this.superInit(option);

    var count = option.count
    var timer = (option.timer / 1000).toFixed()

    this.infoLabel = new Label({
      text: 'あなたは',
      fontSize: 36,
      align: 'center',
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center(-4));

    this.resultLabel = new Label({
      text: `${timer}秒掛けて、\n${count}個のペットボトルを立てました`,
      fontSize: 48,
      align: 'center',
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center());

    this.animeBox = new RectangleShape({
      fill: '#222', width: 320, height: 60, strokeWidth: 0, cornerRadius: 8,
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center(5));

    var startLabel = new Label({
      text: '再スタート', width: 320,
      fontSize: 28, fill: '#FFF',
    }).addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center(5))
      .setInteractive(true)
    var _this = this;
    startLabel.onclick = function () {
      _this.exit()
    }

    this.twitterBox = new RectangleShape({
      fill: '#222',
      width: 80,
      height: 80,
      strokeWidth: 0,
      cornerRadius: 8,
    }).addChildTo(this)
      .setPosition(this.gridX.span(12), this.gridY.center(5))

    this.twitter = Sprite("twitter").addChildTo(this)
      .setPosition(this.gridX.span(12), this.gridY.center(5))
      .setInteractive(true)

    this.twitter.onclick = function () {
      var text = `私は${timer}秒掛けて、${count}個のペットボトルを立てました`
      var url = Twitter.createURL({
        text: text,
        hashtags: 'ペットボトル工場',
        url: location.href,
      });
      window.open(url, 'share window', 'width=480, height=320');
    };
  }
});
