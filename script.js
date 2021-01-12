let progress = '';
let result = 0;
const progressShow = document.getElementById('progressShow');
const resultShow = document.getElementById('resultShow');
const buttonShow = document.getElementsByClassName('button-show');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('del');

// Insert
for (let i = 0; i < buttonShow.length; i++) {
  buttonShow[i].addEventListener('click', (e) => {
    let input = e.target.dataset.inner;
    progress += input;
    progressShow.innerHTML = progress;
  });
}

// Equal
equalButton.addEventListener('click', () => {
  let result = eval(progress);
  // exponential
  if (result.toString().length > 8) {
    result = result.toExponential(4);
    // currency string
  } else if (result >= 1000) {
    result = result.toString().split('.');
    result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    result = result.join('.');
  }
  resultShow.innerHTML = result;
});

// AC
clearButton.addEventListener('click', () => {
  progress = '';
  progressShow.innerHTML = progress;
  resultShow.innerHTML = '';
});

// DEL
delButton.addEventListener('click', () => {
  let progressDel = progress.substring(0, progress.length - 1);
  progress = progressDel;
  progressShow.innerHTML = progress;
});

// Keyboard Input
window.addEventListener('keydown', (e) => {
  console.log(e.code);
  if ((e.shiftKey && e.code == 'Equal') || e.code == 'NumpadAdd') {
    progress += '+';
  } else if ((e.shiftKey && e.code == 'Digit8') || e.code == 'NumpadMultiply') {
    progress += '*';
  } else if (!e.shiftKey) {
    switch (e.code) {
      case 'Digit1':
      case 'Numpad1':
        progress += '1';
        break;
      case 'Digit2':
      case 'Numpad2':
        progress += '2';
        break;
      case 'Digit3':
      case 'Numpad3':
        progress += '3';
        break;
      case 'Digit4':
      case 'Numpad5':
        progress += '4';
        break;
      case 'Digit5':
      case 'Numpad5':
        progress += '5';
        break;
      case 'Digit6':
      case 'Numpad6':
        progress += '6';
        break;
      case 'Digit7':
      case 'Numpad7':
        progress += '7';
        break;
      case 'Digit8':
      case 'Numpad8':
        progress += '8';
        break;
      case 'Digit9':
      case 'Numpad9':
        progress += '9';
        break;
      case 'Digit0':
      case 'Numpad0':
        progress += '0';
        break;
      case 'Period':
      case 'NumpadDecimal':
        progress += '.';
        break;
      case 'Enter':
      case 'Equal':
      case 'NumpadEnter':
        let result = eval(progress);
        if (result.toString().length > 11) {
          result = result.toExponential(6);
        } else if (result >= 1000) {
          result = result.toString().split('.');
          result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          result = result.join('.');
        }
        resultShow.innerHTML = result;
        break;
      case 'Minus':
      case 'NumpadSubtract':
        progress += '-';
        break;
      case 'Slash':
      case 'NumpadDivide':
        progress += '/';
        break;
      case 'Delete':
        progress = '';
        break;
      case 'Backspace':
        let progressDel = progress.substring(0, progress.length - 1);
        progress = progressDel;
        break;
    }
  }
  progressShow.innerHTML = progress;
});
