var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
var commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
 
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        "[D4FALT]~$" + command.innerHTML,
        "no-animation",
        0
      );
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }


function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "ajuda":
      loopLines(ajuda, "color2 margin", 80);
      break;
    case "sobremim":
      loopLines(sobremim, "color2 margin", 80);
      break;

    case "DEV":
      addLine("Opening Dev.to...", "color2", 80);
      newTab(Dev);
      break;

    case "social":
      loopLines(social, "color2 margin", 80);
      break;

      case "projetos":
        loopLines(projetos, "color2 margin", 80);
        break;
      case "history":
        addLine("<br>", "", 0);
        loopLines(commands, "color2", 80);
        addLine("<br>", "command", 80 * commands.length + 50);
        break;

    case "historico":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Abrindo email:<a href="mailto:pedroluc4sdebarros@gmail.com"> pedroluc4sdebarros@gmail.com</a>...',
        "color2",
        80
      );
      newTab(email);
      break;
      newTab(email);
      break;
    case "limpe":
      setTimeout(function () {
        terminal.innerHTML =
          '<a id="before"><div class="pt-2"><span class="text-[#7d82d7db] ">Seja bem vindo ao meu portfólio! — Digite <span class="command text-[#75e1e7]">ajuda</span> Para acessar a lista de comandos.</span></div></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "dev":
      addLine("Opening Dev.to...", "color2", 80);
      newTab(dev);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "tetris":
      addLine("Tente fazer uma boa pontuação...", "color2", 0);
      newTab(tetris);
      break;
    default:
      addLine(
        '<span class="inherit">Erro: Comando não encontrado. Para acessar a lista de comandos, d <span class="command">\'ajuda\'</span>.</span>',
        "error",
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
