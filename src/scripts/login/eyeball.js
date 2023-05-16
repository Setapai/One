function eyeBall(data) {
       let [ball] = document.getElementsByClassName(data.className);

       let x = (data.event.clientX * data.xAxis) / window.innerWidth + "%";
       let y = (data.event.clientY * data.yAxis) / window.innerWidth + "%";

       ball.style.left = x;
       ball.style.top = y;
       data.trans
         ? (ball.style.transform = "translate(" + x + "," + y + ")")
         : (ball.style.transform = "translate(-" + x + ",-" + y + ")");
}

export default eyeBall;