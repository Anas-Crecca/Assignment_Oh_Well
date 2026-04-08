//I hope there's enough documentation, i don't know how thourough i have to explain my code

let textBox = document.querySelector("#textbox");
let controller = document.querySelector("#controller");

let stick = false;
let tun1 = false;
let tun2 = false;
let tun3 = false;
//clears all current buttons
function clearCont(){
    controller.innerHTML = '';
}
//creates button and sets its text and onclick depending on the parameters, used to easily create required buttons
function createCont(description, state){
let button = document.createElement('button');
button.textContent = description;
button.onclick = function(){
    play(state);
}
controller.appendChild(button);
}
//creates a button that calls up an end screen depending on ending type
function endCont(ending){
let endButton = document.createElement('button');
endButton.textContent = '>End';
endButton.onclick = function(){
    end(ending);
}
controller.appendChild(endButton);
}
//changes text and buttons depending on scenario
function play(option) {

    if (option === 'start'){
        //resetting variables for new run
        stick = false;
        tun1 = false;
        tun2 = false;
        tun3 = false;
        textBox.innerHTML = '<p>It seems you have fallen down a well. How did that happen? Oh well, guess you should try to get out.</p>';
        clearCont();
        createCont('>Look around', 'look');
        createCont('>Call out', 'shout');
        createCont('>Give up', 'giveUp'); 
    } else if (option === 'shout'){
        textBox.innerHTML = '<p>You raise your hands to your mouth and shout: "Hello, anyone there?" You wait a bit, nobody answers.</p>';
        clearCont();
        createCont('>Shout again!', 'yell');
        createCont('>Move on', 'start');
    } else if (option === 'yell'){
        textBox.innerHTML = '<p>You raise your hands to your mouth again. You let out a loud yell: "Hey!!" Nobody answers.</p>';
        clearCont();
        createCont('>SCREAM!', 'scream');
        createCont('>Give up on shouting', 'start');
    } else if (option === 'look'){
        textBox.innerHTML = "<p>You're surrounded by the tall stone walls of the well. The floor is wet but due to the current draught there's no water, only a single stick stuck in the mud next to you. There's also a rope dangling in mid-air about 2 meters of the floor, it looks old but you might be able to climb it.</p>";
        clearCont();
        createCont('>Check the walls', 'wall');
        createCont('>Reach for the rope', 'rope');
        //if to ensure you can only pick it up once
        if (stick === false){
            createCont('>Pick up stick', 'getStick');
        }
    } else if (option === 'getStick'){
        stick = true;
        textBox.innerHTML = '<p>You dislodge the stick. You now have a stick.</p>';
        clearCont();
        createCont('>Continue', 'look');
    } else if (option === 'wall'){
        textBox.innerHTML = '<p> The walls are made of roughly cut stone, whose edges have been smoothed down by the water. A few slabs near the bottom seem loose. If you are careful you can definitly climb the wall.</p>';
        clearCont();
        createCont('>Climb the wall', 'climb');
        //if to ensure you can only do this if you have stick
        if (stick === true){
            createCont('>Lever out stones with stick', 'openTunnel'); 
        }
    } else if (option === 'openTunnel'){
        textBox.innerHTML = '<p>You force the stick into a gap between two particularly loose looking stone slabs and easily lever them out of the wall. The slabs which used to be supported by the freshly removed once start tumbling after them. In short time you open up a hole in the wall, big enough to cawl through. To your surprise there is a dark tunnel behind this wall. Could it lead out?</p>';
        clearCont();
        createCont('>Enter Tunnel', 'tunnel');
    } else if (option === 'tunnel'){
        textBox.innerHTML = '<p>You crawl into the tunnel. You hae to orient yourself mostly through touch since the tunnel itself is wreathed in blackness. There is a crawl space to the left of you and a slightly more spacious path going vaguely right.</p>';
        clearCont();
        createCont('>Turn Right', 'right1');
        createCont('>Turn Left', 'left1');
    } else if (option === 'right1'){
        textBox.innerHTML = '<p>The tunnels increased height means your crawl on four legs gets to look slightly more dignified since you can fully extend your arms and move on your knees more than on your shins. The tunnel continues towards the right until it starts bending slightly to the left. You reach a fork in the tunnel, one path continues bending left the other turns sharply right.</p>';
        clearCont();
        createCont('>Turn Right', 'right2');
        createCont('>Turn Left', 'left2');
    } else if (option === 'left2'){
        textBox.innerHTML = '<p>The tunnel starts to widen and soon the celling is high enough for you to crouch-walk. As you keep on walking the floor starts to incline. There is another fork in the way. The path to the left gets narrower again but it also seems to incline more, while the path to the right seems to get wider and you think you can here a dripping noise from the tunnel.</p>';
        clearCont();
        createCont('>Turn Right', 'right3');
        createCont('>Turn Left', 'left3');
    } else if (option === 'climb'){
        textBox.innerHTML = '<p>You start climbing up the wall, but after only covering about 2 meters in distance do the stones above you start becoming very mossy. You glance around and see that the stones to your left are moss-free, they look a lot rougher and sharper though.</p>';
        clearCont();
        createCont('>Continue climbing the mossy stones', 'moss');
        createCont('>Move towards the rough stones', 'rough');
    } else if (option === 'rough'){
        textBox.innerHTML = "<p>The stones edges slightly cut into your hands but you push on. You pass the half-way point and come before two routes of handholds. One is daring but fast, the other seems like the safer optionen although you'd have to hold on to these very painful stones for longer.</p>";
        clearCont();
        createCont('>Daring route', 'daring');
        createCont('>Careful route', 'care');
    } 
    //victories
    else if (option === 'scream'){
        textBox.innerHTML = '<p>You raise your hands to your mouth on last time. The scream you let out is ear-piercing and rough on your vocal chords. You wait a bit. Suddenly you hear hurried footsteps and someone calls out: "Hello?! Can you ear me? Where are you?" "Well!", you shout your voice breaking mid word. The footsteps draw closer and you see the head of a young woman pop-up over the edge of the well. "How did you end up there?", she asks. You shrug and watch as the woman calls the fire-department to get you out of there.</p>';
        clearCont();
        endCont('vic');
    } else if (option === 'care'){
        textBox.innerHTML = "<p>You carefully and slowly climb up the rest of the wall. You're hands sting painfully as you drag yourself over the the edge of the well wall, tumbling to the floor. You lie there in the dirt, thinking about just how close you came to dying in a well. But you didn't, you escaped.</p>";
        clearCont();
        endCont('vic');
    } else if (option === 'left3'){
        textBox.innerHTML = "<p>You get on all four again as you start ascending through the crawl space. After a while you reach a concrete wall with a hole in it. The Hole is coverd from the other side by some form of shelf. You approach the shelf and carefully push against it. It takes a lot of your strength but you sucessfully open a gap between the shelf and the wall that's just big enough for you to slip through. You find yourself in a dim basement. Climbing the stairs you slowly realise that, to your horror, this is YOUR basement. Who'd have thought that your escape attempt would get you home so literally.</p>";
        clearCont();
        endCont('vic');
    }
    //Game overs
    else if (option === 'daring'){
        textBox.innerHTML = "<p>You reach for the faraway handholds, leaning your weight in it's direction. Just as your fingers wrap around the stone ypur other hand slips. You fall. You close your eyes. You don't see the impact with the floor. Not that that would have mattered, your brain isn't around long enough to be able to process the sight anyway.</p>";
        clearCont();
        endCont('gameOver');
    } else if (option === 'moss'){
        textBox.innerHTML = "<p>The stones are wet and the moss squishes under your hands. After another meter of climbing your foot fails to find purchase in the soft moss and you slip. You feel your tibia snap as you collide with the floor at an inconvinient angle. There goes your chance at climbing, or walking for that matter. You lie there crumpled on the floor, watching the clouds as they journey across the sky. You accept your fate. Or at least you should, considering you're pretty sure your chances of being found are close to zero.</p>";
        clearCont();
        endCont('gameOver');
    } else if (option === 'rope'){
        textBox.innerHTML = "<p>You pull yourself up onto the rope, remembering your time in PE. With your hands and legs you climb slowly. It goes quit well until you here a disconcerting cracking noise and suddenly your falling. You hit the floor and everything goes blurry. though not blurry enough for you to miss the piece of wood hurrling towards your head right now. At no point in your life did you ever consider that you might die getting speared at the bottom of a well. But here we are...</p>";
        clearCont();
        endCont('gameOver');
    } else if (option === 'giveUp'){
        textBox.innerHTML = "<p>You sit down. You think about the life you have lived, the people you've met, and the things you never had the chance to do. Will anyone notice you're gone? How long will it take for you to be reported missing? And then for your corpse to be found? You thoughts grow louder, you're breathing shallow and your pulse restless. As tears well up (haha get it) and you choke out a small sob, you completly miss the sound of footsteps from above and they're long gone by the time your pulse and sobs quiet down until you can hear the birds again. </p>";
        clearCont();
        endCont('gameOver');
    }
    //secret ending
    else if (option === 'left1'){
        tun1 = true;
        textBox.innerHTML = "<p>After a few meters the crawl space becomes to narrow for you to continue.</p>"
        clearCont();
        createCont('>Go back', 'tunnel');
    }else if (option === 'right2'){
        tun2 = true;
        textBox.innerHTML = "<p>You follow the tunnel and it's several sharp turns for while until your path forward is blocked by a cave in. You become slightly concerned about this tunnel system's stability.</p>"
        clearCont();
        createCont('>Go back', 'right1');
    }else if (option === 'right3'){
        tun3 = true;
        textBox.innerHTML = "<p>Calling this path a tunnel is an overstatement. It's really more of a glorified nook that's about 3 metres deep, there's also a quite deep puddle covering most of it since ground water seems to be dripping from the celling.</p>"
        clearCont();
        if (tun1 === true && tun2 === true && tun3 === true){
            createCont('>Go back', 'mushroom')
        }else {
            createCont('>Go back', 'left2');
        }
    }else if (option === 'mushroom'){
        textBox.innerHTML = "<p>Wait. Was that tunnel there before? That little hole in the wall directly opposite the tunnel you just came ot off? Is that a dim light coming out of it? How did you miss this before? You get on your knees and crawl towards the light. At one point the tunnel becomes to low for you to crawl on all four, so you drop to your stomach. After a while you emerge in a big cave lit by what apears to be fireflies. It's covered in giant mushrooms and to your amazment populated by sentient mushroom people. One of them comes over and helps you up from the floor. They offer you water, food and shelter. You fall asleep that night in a mushroom house, surrounded by your new mushroom friends, excited to life your new musroom life.</p>"
        clearCont();
        endCont('secret');
    }
}
//gives text and restart button depending on ending type
function end(endType){
    if (endType === 'vic'){
        textBox.innerHTML = "<h2>You escaped!</h2><p>You sucessfully escaped from the well, congrats!</p>";
        clearCont()
        endCont();
    }else if (endType === 'gameOver'){
        textBox.innerHTML = "<h2>You died!</h2><p>You perished during your escape attempt! Better luck next time...</p>";
        clearCont();
        endCont();
    }else if (endType === 'secret'){
        textBox.innerHTML = "<h2>You found the secret ending!</h2><p>Hope you have a good time with the mushroom people.</p>";
        clearCont();
        endCont();
    }else {
        textBox.innerHTML = "<p>Press the button to start!</p>";
        clearCont();
        createCont('>Start!','start');
    }
}