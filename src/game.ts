
type GameStateLabel = 'Start' | 'Character' | 'Paused' | 'GameOver' | 'Running' | 'Instructions';

interface GameState {
    // activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    // private grid: Grid;
    public activeGameState: GameStateLabel;
    private barricade: Barricade;
    private startMenu: StartMenu;
    // private characterMenu: CharacterMenu;
    private pausedMenu: PausedMenu;
    // private gameOverMenu: GameOverMenu;
    // private gameBoard: GameBoard;

    constructor() {
        // this.grid = new Grid(createVector(10, 10));
        this.activeGameState = 'Start';
        this.pausedMenu = new PausedMenu(this);
           //this.startMenu = new StartMenu(this);
         this.barricade = new Barricade(createVector(10, 10));
        // this.characterMenu = new CharacterMenu(this);
    }

    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;

        if (state === 'Paused') {
            this.pausedMenu.openPauseMenu();
        } else if (state === 'Start') {
            this.startMenu.openStartMenu();
        }
    };

    public update() {
        if (this.activeGameState === 'Running') {
            // this.gameBoard.update();
        }
        // this.grid.update();
    }

    public draw() {
      background('#21212F');
      this.barricade.draw();  
      // this.grid.draw();
    }
}