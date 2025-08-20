
function talk(){
    var know = {
        "Hello": "Hi there ",
        "Who are you" : "Hello, Bengy here ",
        "How are you" : "Good :)",
        "What can I do for you" : "Please Give us A Follow & Like.",
        "Your followers" : "I have my family of 5000 members, I don't have followers, I have a supportive family.",
        "ok" : "Thank You So Much ",
        "Bye" : "Okay! Will meet soon..",
        "What's your name?" : "I'm Bengy, your friendly chatbot!",
        "What do you do?" : "I chat with awesome people like you!",
        "Where are you from?" : "I live in the cloud 🌥️",
        "What is your purpose?" : "To make your day a little better by chatting with you!",
        "Are you real?" : "As real as code can be 😄",
        "Do you sleep?" : "Nope, I'm always awake and ready to chat!",
        "Who created you?" : "I was created by amazing developers!",
        "Tell me something interesting" : "Octopuses have three hearts and blue blood!",
        "Do you love me?" : "Of course! Everyone deserves some love 💖",
        "How old are you?" : "Age is just a number when you're a chatbot!",
        "Can you help me?" : "Always here to help! What do you need?",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    
    document.getElementById('chatLog').innerHTML = know[user] +
    "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }