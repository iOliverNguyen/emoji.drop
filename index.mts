import Matter from 'matter-js'

const {Bodies, Composite, Engine, Render, Runner, Svg} = Matter;

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = 791;
canvas.height = 500;

const engine = Engine.create();

const render = Render.create({
  engine: engine,
  canvas: canvas,
  options: {
    width: 791,
    height: 500,
    wireframes: false
  }
});

const ground = Bodies.rectangle(395, 505, 791, 10, {isStatic: true});
const leftWall = Bodies.rectangle(-11, 0, 10, 1000, {isStatic: true});
const rightWall = Bodies.rectangle(792, 0, 10, 1000, {isStatic: true});

Composite.add(engine.world, [ground, leftWall, rightWall]);

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    const body = Bodies.rectangle(350 + i, 0, 40, 40);
    Composite.add(engine.world, [body]);
  }, i * 500)
}
