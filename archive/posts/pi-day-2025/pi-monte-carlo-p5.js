const r = 200;
let total = 0;
let circle = 0;
let recordPI = 0;
let resultP;

function setup() {
    var canvas = createCanvas(402, 402);
    canvas.parent('sketch');
    resultP = createP("Approximated Value of π:");
    resultP.parent('sketch');
    background(14);
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(0, 0, r * 2, r * 2);
    rectMode(CENTER);
    rect(0, 0, r * 2, r * 2);
}

function draw() {
    translate(width / 2, height / 2);

    for (let i = 0; i < 100; i++) {
        const x = random(-r, r);
        const y = random(-r, r);
        total++;

        const d = x * x + y * y;
        if (d < r * r) {
            circle++;
            stroke(240, 99, 164);
        } else {
            stroke(45, 197, 244);
        }
        strokeWeight(1);
        point(x, y);

        const pi = 4 * (circle / total);
        let recordDiff = Math.abs(Math.PI - recordPI);
        let diff = Math.abs(Math.PI - pi);
        if (diff < recordDiff) {
            recordDiff = diff;
            recordPI = pi;
            resultP.html(`Approximated Value: ${recordPI}`);
        }
    }
}
