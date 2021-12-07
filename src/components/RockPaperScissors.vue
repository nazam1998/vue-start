<template>
  <div id="rps">
    <div class="game container mx-auto mt-5">
      <!-- Score Section -->
      <div
        class="title-card border rounded border-3 border-secondary w-75 mx-auto"
      >
        <div class="row p-4 justify-content-between">
          <div class="col-3 text-left">
            <img src="@/assets/rps/logo.svg" class="mt-4" alt="" />
          </div>
          <div class="col-3 bg-light text-center rounded text-secondary p-3">
            <h4 class="score-title">Score</h4>
            <h1 class="score">{{ score }}</h1>
          </div>
        </div>
      </div>
      <div v-if="currentPlayer == null" class="board container mx-auto text-center">
        <ChoiceButton
          @setChoice="setPlayer"
          :choice="choice[0]"
          :index="0"
          :isChoosed="isChoosed"
        />
        <ChoiceButton
          @setChoice="setPlayer"
          :choice="choice[1]"
          :index="1"
          :isChoosed="isChoosed"
        />
        <br />
        <ChoiceButton
          @setChoice="setPlayer"
          :choice="choice[2]"
          :index="2"
          :isChoosed="isChoosed"
        />
      </div>
      <div v-else class="justify-content-center row mt-5 text-center">
        <div class="col-3">
          <ChoiceButton
            @setChoice="setPlayer"
            :choice="choice[currentPlayer]"
            :index="currentPlayer"
            :isChoosed="isChoosed"
          />
        </div>
        <div v-if="result" class="col-3 mt-3 text-uppercase">
          <h1>{{ result }}</h1>
          <button class="btn btn-light play-again" @click="reset()">
            Play Again
          </button>
        </div>
        <div class="col-3">
          <ChoiceButton v-if="isChoosed"
            @setChoice="chooseIA"
            :choice="choice[currentComputer]"
            :index="currentComputer"
            :isChoosed="isChoosed"
          />
          <ChoiceButton v-else
            @setChoice="chooseIA"
            :choice="blankChoice"
            :index="currentComputer"  
            :isChoosed="isChoosed"
          />
        </div>
      </div>
      <!-- Button trigger mymodal -->
      <button
        @click="showDisplayRule"
        type="button"
        class="
          btn btn-transparent
          text-white
          border-white
          py-2
          px-5
          rounded
          btn-rules
        "
      >
        Rules
      </button>
      <!-- Rules Section -->
      <div
        id="myModal"
        class="mymodal rounded"
        v-if="displayRule"
        v-on-clickaway="showDisplayRule"
      >
        <!-- Modal content -->
        <div class="mymodal-content" v-on-clickaway="showDisplayRule">
          <span @click="showDisplayRule" class="close"
            ><img src="@/assets/rps/icon-close.svg" alt="" />
          </span>
          <h3>Rules</h3>
          <div class="container">
            <img src="@/assets/rps/image-rules.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import ChoiceButton from "@/components/RPS/ChoiceButton.vue";
export default {
  name: "rps",
  components: {
    ChoiceButton,
  },
  mixins: [clickaway],
  data() {
    return {
      currentPlayer: null,
      currentComputer: null,
      score: 0,
      displayRule: false,
      isChoosed: false,
      result: "",
      choice: [
        {
          name: "paper",
          color: "border-primary",
          img: require("@/assets/rps/icon-paper.svg"),
        },
        {
          name: "scissors",
          color: "border-warning",
          img: require("@/assets/rps/icon-scissors.svg"),
        },
        {
          name: "rock",
          color: "border-danger",
          img: require("@/assets/rps/icon-rock.svg"),
        },
      ],
      blankChoice: {
        name: '',
        color: 'border-dark bg-dark',
        img: ''
      }
    };
  },
  methods: {
    showDisplayRule() {
      this.displayRule = !this.displayRule;
    },
    setPlayer(value) {
      console.log(value)
      this.currentPlayer = value;
      setTimeout(() => this.chooseIA(), 2000);
      setTimeout(() => this.compare(), 2500);
    },
    compare() {

      if (this.currentPlayer == this.currentComputer) {
        this.result = "Draw";
      } else {
        let computerChoice = this.choice[this.currentComputer].name;
        let playerChoice = this.choice[this.currentPlayer].name;
        switch (playerChoice) {
          case "paper":
            this.result =
              computerChoice == "rock" ? "You Win" : "You Lost";
            break;
          case "scissors":
            this.result =
              computerChoice == "rock" ? "You Lost" : "You Win";
            break;
          case "rock":
            this.result =
              computerChoice == "paper" ? "You Lost" : "You Win";
            break;
        }
      }

      if (this.result != "Draw") {
        if (this.result == "You Lost" && this.score > 0) {
          this.score--;
        } else if (this.result == "You Win") {
          this.score++;
        }
      }
    },
    reset() {
      this.result = "";
      this.currentPlayer = null;
      this.currentComputer = null;
      this.isChoosed = false;
    },
    chooseIA() {
      let rand = Math.floor(Math.random() * this.choice.length);
      this.isChoosed = true;
      this.currentComputer = rand;
      console.log(rand)
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100&family=Inter:wght@100;400&family=Manrope:wght@600&display=swap");
@import "~bootstrap/dist/css/bootstrap.css";
#rps {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-family: "Inter", sans-serif;
  font-family: "Manrope", sans-serif;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  color: rgb(95, 83, 83);
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
}
.score {
  font-size: 45px;
}

.btn-rules {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.btn-circle {
  width: 150px;
  height: 150px;
  padding: 0px 0px;
  border-radius: 50%;
  border: 20px solid;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}
.play-again {
  letter-spacing: 5px;
}
.board {
  margin-top: 90px;
  background-image: url("~@/assets/rps/bg-triangle.svg");
  background-repeat: no-repeat;
  height: 300px;
  background-position: bottom center;
}

.mymodal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.mymodal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  color: grey;
  border: 1px solid #888;
  width: 25%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
