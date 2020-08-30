const game = () => {
	let pScore = 0;
	let cScore = 0;
	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const intro = document.querySelector('.intro');
		const match = document.querySelector('.match');
		playBtn.addEventListener('click', () => {
			intro.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const pHand = document.querySelector('.player-hand');
		const cHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');
		hands.forEach((hand) => {
			hand.addEventListener('animationend', function () {
				this.style.animation = '';
			});
		});

		computerOptions = ['rock', 'paper', 'scissors'];
		options.forEach((option) => {
			option.addEventListener('click', function () {
				console.log(this);
				const computerNumber = Math.floor(Math.random() * 3);
				computerChoice = computerOptions[computerNumber];
				console.log(computerChoice);
				setTimeout(() => {
					computerHands(this.textContent, computerChoice);
					pHand.src = `./Assets/${this.textContent}.png`;
					cHand.src = `./Assets/${computerChoice}.png`;
				}, 2000);

				pHand.style.animation = 'shakePlayer 2s ease';
				cHand.style.animation = 'shakeComputer 2s ease';
			});
		});
	};
	const computerHands = (playerChoice, ComputerChoice) => {
		const winner = document.querySelector('.winner');
		if (playerChoice === computerChoice) {
			winner.textContent = 'It is a TIE';
			return;
		}
		if (playerChoice === 'rock') {
			if (computerChoice === 'paper') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}
	};
	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	startGame();
	playMatch();
};
game();
