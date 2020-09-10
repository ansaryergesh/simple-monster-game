new Vue( {
  el: '#app',
  data: {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
  },
  methods: {
      startGame: function() {
          this.gameIsRunning = true;
          this.playerHealth = 100;
          this.monsterHealth = 100;
      },
      attack: function() {
        var max = 10;
        var min = 3;
        var damage = Math.floor(Math.random() * (max-min) + min);
        this.monsterHealth -= damage;

        max = 12;
        min = 5;
        var damage = Math.floor(Math.random() * (max-min) + min);
        this.playerHealth -= damage;
      },
      specialAttack: function() {
          
      },
      heal: function() {

      },
      giveUp: function() {

      }
  }
})