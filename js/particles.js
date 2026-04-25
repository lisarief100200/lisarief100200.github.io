particlesJS('particles-js', {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: ['#ffffff', '#60a5fa', '#93c5fd', '#bfdbfe']
		},
		shape: {
			type: 'circle'
		},
		opacity: {
			value: 0.65,
			random: true,
			anim: {
				enable: true,
				speed: 1.2,
				opacity_min: 0.05,
				sync: false
			}
		},
		size: {
			value: 2,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false
			}
		},
		line_linked: {
			enable: false
		},
		move: {
			enable: true,
			speed: 0.3,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'bubble'
			},
			onclick: {
				enable: false,
				mode: 'push'
			}
		},
		modes: {
			bubble: {
				distance: 120,
				size: 4,
				duration: 0.3,
				opacity: 1
			},
			push: {
				particles_nb: 4
			}
		}
	},
	retina_detect: true
});

const allElements = document.querySelectorAll('.animated-text');

if (allElements.length > 0) {
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', ');

		let wordsCount = 0;

		entry();

		function entry() {
			if (wordsCount < words.length) {
				let word = words[wordsCount],
					txtArr = word.split(''),
					count = 0;

				txtElement.textContent = '';

				txtArr.forEach((letter) => {
					let _letter = letter === ' ' ? '&nbsp;' : letter;
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;

				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);
						setTimeout(() => {
							eraseText();
						}, 1200);
					}
				}

				function eraseText() {
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;
							entry();
						}
					}
				}
			} else {
				wordsCount = 0;
				entry();
			}
		}
	});
}
