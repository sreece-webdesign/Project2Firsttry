function setup () {
  createCanvas(300, 300);
  background(100, 10, 70);
}

function draw () {
  background (255, 204, 0);
<!-- center --!>
noStroke ();
  ellipse(mouseX, mouseY, 100, 100);

<!-- up --!>
  ellipse(mouseX, mouseY+100, 100, 100);
  <!-- right up2--!>
    ellipse(mouseX, mouseY+200, 100, 100);
    <!-- right up3 --!>
      ellipse(mouseX, mouseY+300, 100, 100);

<!-- right up --!>
  ellipse(mouseX+100, mouseY+100, 100, 100);
  <!-- right up2 --!>
    ellipse(mouseX+200, mouseY+200, 100, 100);
    <!-- right up3 --!>
      ellipse(mouseX+300, mouseY+300, 100, 100);

<!-- right --!>
  ellipse(mouseX+100, mouseY, 100, 100);
  <!-- right2 --!>
    ellipse(mouseX+200, mouseY, 100, 100);
    <!-- right3--!>
      ellipse(mouseX+300, mouseY, 100, 100);

<!-- left --!>
  ellipse(mouseX-100, mouseY, 100, 100);
  <!-- left2 --!>
    ellipse(mouseX-200, mouseY, 100, 100);
    <!-- left3 --!>
      ellipse(mouseX-300, mouseY, 100, 100);

<!-- left up --!>
  ellipse(mouseX-100, mouseY+100, 100, 100);
  <!-- left up2 --!>
    ellipse(mouseX-200, mouseY+200, 100, 100);
    <!-- left up3 --!>
      ellipse(mouseX-300, mouseY+300, 100, 100);

<!-- right down --!>
  ellipse(mouseX+100, mouseY-100, 100, 100);
  <!-- right down2 --!>
    ellipse(mouseX+200, mouseY-200, 100, 100);
    <!-- right down3 --!>
      ellipse(mouseX+300, mouseY-300, 100, 100);

<!-- left down --!>
  ellipse(mouseX-100, mouseY-100, 100, 100);
  <!-- left down2 --!>
    ellipse(mouseX-200, mouseY-200, 100, 100);
    <!-- left down3 --!>
      ellipse(mouseX-300, mouseY-300, 100, 100);

<!-- down --!>
  ellipse(mouseX-0, mouseY-100, 100, 100);
  <!-- left down2 --!>
    ellipse(mouseX-0, mouseY-200, 100, 100);
    <!-- left down3 --!>
      ellipse(mouseX-0, mouseY-300, 100, 100);
}
