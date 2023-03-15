var canvasDiv;
var width;
let tItems =
    [
        'Undisclosed Brand Innovation project',
        '6 month experience design project advising the development of a large scale transformation project',
        'Defining how digital technology creates opportunities for an enhanced future visitor experience',
        'Designing a course to support marketing professionals talking about extended realities (XR)',
        'A paper that outlines a new model for understanding complex systems',
        'International talks, workshops and advising UK universities'
    ];
let logoItems = [];

let spacer = 150;
let logoSpacer = 15;
let myStartingPoint = [0];
let counter = 0;
let canvasOriginHeight = 48; // 3rem in the HTML (if size remains 1rem=16px)
let logoScalePerc = 50; //this is a percentage scale for the logos
let logoScaler;
let inc = spacer; // setting this now this ensures the increments for each position start with a spacer
let myFont;


function preload() {//number of logoItems[] must match the number of text items in tItems[]
    logoItems[0] = loadImage('./assets/swoosh-logo-white.png');
    logoItems[1] = loadImage('./assets/Channel_4_logo.png');
    logoItems[2] = loadImage('./assets/NG_logo.png');
    logoItems[3] = loadImage('./assets/future_learn_logo.png');
    logoItems[4] = loadImage('./assets/shiji_logo.png');
    logoItems[5] = loadImage('./assets/tofi_logo.png');

    myFont = loadFont('./assets/DMSans-Regular.ttf');

}

function setup() {
    canvasDiv = document.getElementById('ticker');
    width = canvasDiv.offsetWidth;
    var sketchCanvas = createCanvas(width, canvasOriginHeight);
    sketchCanvas.parent("ticker");
    textAlign(LEFT, CENTER);
    textFont(myFont);
    textSize(16);
    fill(255);
    noStroke();
    imageMode(CENTER);
    for (i = 0; i < tItems.length; i++) {
        myStartingPoint[i + 1] = textWidth(tItems[i]) + inc;
        if (i < tItems.length - 1) {
            inc = textWidth(tItems[i]) + inc + spacer; //append the inc with this items char length + spacer
        } else {
            inc = textWidth(tItems[i]) + inc; //do not add spacer for last item to avoid double space with the chasing clone object
        }
    }
    logoScaler = canvasOriginHeight / 100 * logoScalePerc; //this calcs the percentage of the canvas height that the logo should be based on teh logoScalerPerc
}
function draw() {
    background(0);
    for (i = 0; i < tItems.length; i++) {
        //----ticker orginal------//
        text(tItems[i], myStartingPoint[i] - counter, canvasOriginHeight / 2.25);
        let logoInterpolate = (logoScaler / logoItems[i].height) * 100;
        let offset = (logoItems[i].width * logoInterpolate) / 100;
        image(logoItems[i], ((logoItems[i].width * logoInterpolate) / 100)-counter+myStartingPoint[i]-(offset*1.5)-logoSpacer, canvasOriginHeight / 2, (logoItems[i].width * logoInterpolate) / 100, (logoItems[i].height * logoInterpolate) / 100);

        //----ticker clone 1------//
        text(tItems[i], myStartingPoint[i] - counter + inc, canvasOriginHeight / 2.25); //first clone
         logoInterpolate = (logoScaler / logoItems[i].height) * 100;
         offset = (logoItems[i].width * logoInterpolate) / 100;
        image(logoItems[i], ((logoItems[i].width * logoInterpolate) / 100)-counter+myStartingPoint[i]-(offset*1.5)-logoSpacer+inc, canvasOriginHeight / 2, (logoItems[i].width * logoInterpolate) / 100, (logoItems[i].height * logoInterpolate) / 100);

        //----ticker clone 2 -----//
        text(tItems[i], myStartingPoint[i] - counter + (inc * 2), canvasOriginHeight / 2.25); //second clone in case ticker content is short or page is wide
         logoInterpolate = (logoScaler / logoItems[i].height) * 100;
         offset = (logoItems[i].width * logoInterpolate) / 100;
        image(logoItems[i], ((logoItems[i].width * logoInterpolate) / 100)-counter+myStartingPoint[i]-(offset*1.5)-logoSpacer+(inc*2), canvasOriginHeight / 2, (logoItems[i].width * logoInterpolate) / 100, (logoItems[i].height * logoInterpolate) / 100);

    }

    if (counter > inc) {
        counter = 0;
    } else {
        counter++;
    }
  }


//resize window
function windowResized() {
    width = canvasDiv.offsetWidth;
    resizeCanvas(width, canvasOriginHeight);

}
