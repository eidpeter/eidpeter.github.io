const fs2 = (p) => {

    let max_distance;

    p.setup = () => {
        p.createCanvas(640, 360);
        p.noStroke();
        max_distance = p.dist(0, 0, p.width, p.height);
    }

    p.draw = () => {
        p.background(0);

        for (let i = 0; i <= p.width; i += 12) {
            for (let j = 0; j <= p.height; j += 12) {
                let size = p.dist(p.mouseX, p.mouseY, i, j);
                size = (size / max_distance) * 33;
                p.ellipse(i, j, size, size);
            }
        }
    }

}

var s2 = new p5(fs2, "s2");