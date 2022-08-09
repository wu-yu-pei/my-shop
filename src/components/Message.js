class Message {
  constructor(props) {
    this.div = document.createElement('div');

    this.div.innerHTML += `<div>${props.message}</div>`;

    this.div.className = 'message';
    this.div.style.position = 'fixed';
    this.div.style.top = '10%';
    this.div.style.left = '50%';
    this.div.style.transform = 'translate(-50%, -50%)';

    this.div.style.backgroundColor = '#fff';
    this.div.style.padding = '0px 15px';
    this.div.style.borderRadius = '5px';

    this.div.style.color = '#000';
    this.div.style.letterSpacing = '3px';
    this.div.style.wordBreak = 'break-all';
    this.div.style.lineHeight = '40px';
    this.div.style.zIndex = 4;
    document.body.appendChild(this.div);

    setTimeout(() => {
      this.div.style.opacity = 0;
    }, props.time || 1500);

    setTimeout(() => {
      document.body.removeChild(this.div);
    }, props.time || 1600);
  }
}

export default Message;
