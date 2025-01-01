Vue.config.devtools = true
Vue.config.debug = true;
var app = new Vue({
    el: "#app",
    data:{
        index: 0,
        choix :'',
        count : 8,
        goodResponses: 0,
        wrongResponses: 0,
        questions:[{
            question:"Question 1/8: What is the main CSS property to create a simple motion on your design?",
            choices:{a:"○ Scale", b:"○ Transform", c:"○ Translate"},
            correctanswer: "b"
        },
        {
            question:"Question 2/8: Which property allows you to change the way to go from a state to another one?",
            choices:{a:"○ Animation", b:"○ Transition", c:"○ Translate"},
            correctanswer: "b"
        },
        {
            question:"Question 3/8: What should you use if you want to make an element bigger?",
            choices:{a:"○ transform: rotate", b:"○ transform: translate", c:"○ transform: scale"},
            correctanswer: "c"
        },
        {
            question:"Question 4/8: Which one is an unit for angle values?",
            choices:{a:"○ deg", b:"○ pc", c:"○ cap"},
            correctanswer: "a"
        },
        {
            question:"Question 5/8: How many degrees should you rotate your object if you want it to do a complete rotation?",
            choices:{a:"○ 90deg", b:"○ 180deg", c:"○ 360deg"},
            correctanswer: "c"
        },
        {
            question:"Question 6/8: Where should we initialize the name of a keyframe?",
            choices:{a:"○ In the value of an animation property", b:"○ In the value of a transform property", c:"○ In the value of a transition property"},
            correctanswer: "a"
        },
        {
            question:"Question 7/8: Why should we use keyframes?",
            choices:{a:"○ To create a regular animation", b:"○ To create a simple motion", c:"○ To change various parameters at various moments of the motion"},
            correctanswer: "c"
        },{
            question:"Question 8/8: The cubic bézier function allows you:",
            choices:{a:"o to slow down the animation you're working on", b:"o to choose the way your animation accelerate or decelerate", c:"o to decelerate your animation"},
            correctanswer: "b"
        }]
    },
    methods: {
        repondu(e){
            this.choix = e.target.value
            console.log(this.choix)
            if(this.choix == this.questions[this.index]['correctanswer'])
                this.goodResponses++
            else
                this.wrongResponses++;
        },
        nextQuestion(){
            this.index ++;
            this.choix = '';
        },
        showResult(){
            this.index ++;
            if (this.goodResponses == 8) {
                this.result = "Perfect!";
            }
            else if (this.goodResponses >= 5) {
                this.result = "Great job!";
            }
            else if (this.goodResponses >= 3) {
                this.result = "Not bad.";
            } else {
                this.result = "Nice try.";
            }
        }
    }
  })
