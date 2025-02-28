const fs = (p) => {

    let max_distance;

    p.setup = () => {
        p.createCanvas(640, 360);
        p.noStroke();
        max_distance = p.dist(0, 0, p.width, p.height);
    }

    p.draw = () => {
        p.background(0);

        for (let i = 0; i <= p.width; i += 20) {
            for (let j = 0; j <= p.height; j += 20) {
                let size = p.dist(p.mouseX, p.mouseY, i, j);
                size = (size / max_distance) * 66;
                p.ellipse(i, j, size, size);
            }
        }
    }

}

var s1 = new p5(fs, "s1");