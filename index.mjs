import PromptSync from "prompt-sync";
import randomintiger from "random-int";
let outcome="ready to play";
const message = "please enter 0 for rock,1 for papper ,or 2 for scissor";
const choices = ["rock", "papper", "scissor"];
const computerChoices = randomintiger(0, 2);
const computerChoicesName = choices[computerChoices];
const prompt = PromptSync();
const userChoices = prompt(message);
const userChoiceName=choices[userChoices];
if(computerChoicesName==userChoiceName){
outcome="Draw";
}else if(computerChoicesName=="rock"&&userChoiceName=="papper"){
    outcome="player win";
}else if(computerChoicesName=="papper"&&userChoiceName=="rock"){
    outcome="computer win";
}
else if(computerChoicesName=="scissor"&&userChoiceName=="papper"){
    outcome="computer win";
}else if(computerChoicesName=="papper"&&userChoiceName=="scissor"){
    outcome="player win";
}else if(computerChoicesName=="rock"&&userChoiceName=="scissor"){
    outcome="computer win";
}else if(computerChoicesName=="scissor"&&userChoiceName=="rock"){
    outcome="player win";
}else{
    outcome="invalid number! please input valid number";
}
console.log(outcome);
console.log("comuter chosses " + computerChoicesName);
console.log("player chosses " + userChoiceName);




